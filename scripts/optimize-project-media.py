from __future__ import annotations

import io
import os
import re
from dataclasses import dataclass
from pathlib import Path
from urllib.parse import urlparse

import requests
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
BACKUP_DIR = ROOT / ".runtime" / "project-media-optimization-backup"
OPTIMIZED_DIR = ROOT / ".runtime" / "project-media-optimization-output"
LIVE_PROJECT_PAGES = [
    "https://pcwater.com.au/projects",
    "https://pcwater.com.au/projects/albury-reservoir",
    "https://pcwater.com.au/projects/borumba-dam-water-treatment-plant",
    "https://pcwater.com.au/projects/clarence-road-liner",
    "https://pcwater.com.au/projects/doomadgee-wtp",
    "https://pcwater.com.au/projects/hobart-nyrstar",
    "https://pcwater.com.au/projects/kybrook-nt",
]


@dataclass
class OptimizedFile:
    url: str
    storage_path: str
    before: int
    after: int
    width: int
    height: int
    uploaded: bool


def load_env() -> dict[str, str]:
    env: dict[str, str] = {}
    env_file = ROOT / ".env.local"
    if env_file.exists():
        for line in env_file.read_text(encoding="utf-8").splitlines():
            if not line.strip() or line.lstrip().startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            env[key.strip()] = value.strip().strip('"').strip("'")
    env.update({k: v for k, v in os.environ.items() if k not in env})
    return env


def discover_supabase_project_urls() -> list[str]:
    urls: set[str] = set()
    pattern = re.compile(
        r"https://mhggidgfivmdgkjerejn\.supabase\.co/storage/v1/object/public/cms-media/projects/[^\"'<>\s)]+?\.(?:jpg|jpeg|png|webp)",
        re.IGNORECASE,
    )
    for page in LIVE_PROJECT_PAGES:
        response = requests.get(page, timeout=30)
        response.raise_for_status()
        urls.update(match.group(0) for match in pattern.finditer(response.text))
    return sorted(urls)


def storage_path_from_url(url: str) -> str:
    marker = "/storage/v1/object/public/cms-media/"
    if marker not in url:
        raise ValueError(f"Not a cms-media public URL: {url}")
    return url.split(marker, 1)[1]


def optimize_image(raw: bytes, storage_path: str) -> tuple[bytes, int, int]:
    image = Image.open(io.BytesIO(raw))
    image = ImageOps.exif_transpose(image)
    image = image.convert("RGB")

    max_edge = 1920 if "/hero/" in storage_path else 1600
    if max(image.size) > max_edge:
        image.thumbnail((max_edge, max_edge), Image.Resampling.LANCZOS)

    output = io.BytesIO()
    image.save(
        output,
        format="JPEG",
        quality=72,
        optimize=True,
        progressive=True,
        subsampling="4:2:0",
    )
    return output.getvalue(), image.width, image.height


def upload_to_supabase(env: dict[str, str], storage_path: str, data: bytes) -> None:
    supabase_url = env["NEXT_PUBLIC_SUPABASE_URL"].rstrip("/")
    service_key = env["SUPABASE_SECRET_KEY"]
    endpoint = f"{supabase_url}/storage/v1/object/cms-media/{storage_path}"
    response = requests.post(
        endpoint,
        headers={
            "apikey": service_key,
            "authorization": f"Bearer {service_key}",
            "content-type": "image/jpeg",
            "x-upsert": "true",
            "cache-control": "31536000",
        },
        data=data,
        timeout=60,
    )
    if not response.ok:
        raise RuntimeError(f"Upload failed for {storage_path}: {response.status_code} {response.text}")


def main() -> None:
    env = load_env()
    if not env.get("NEXT_PUBLIC_SUPABASE_URL") or not env.get("SUPABASE_SECRET_KEY"):
        raise SystemExit("Missing Supabase environment variables.")

    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    OPTIMIZED_DIR.mkdir(parents=True, exist_ok=True)

    urls = discover_supabase_project_urls()
    results: list[OptimizedFile] = []
    for url in urls:
        storage_path = storage_path_from_url(url)
        response = requests.get(url, timeout=60)
        response.raise_for_status()
        raw = response.content

        safe_name = storage_path.replace("/", "__")
        backup_path = BACKUP_DIR / safe_name
        optimized_path = OPTIMIZED_DIR / safe_name
        backup_path.write_bytes(raw)

        optimized, width, height = optimize_image(raw, storage_path)
        optimized_path.write_bytes(optimized)

        uploaded = False
        if len(optimized) < len(raw):
            upload_to_supabase(env, storage_path, optimized)
            uploaded = True

        results.append(
            OptimizedFile(
                url=url,
                storage_path=storage_path,
                before=len(raw),
                after=len(optimized),
                width=width,
                height=height,
                uploaded=uploaded,
            )
        )

    before_total = sum(item.before for item in results)
    after_total = sum(item.after if item.uploaded else item.before for item in results)
    print(f"Discovered Supabase project media: {len(results)}")
    print(f"Total before: {before_total / 1024 / 1024:.2f} MB")
    print(f"Total after:  {after_total / 1024 / 1024:.2f} MB")
    print(f"Saved:        {(before_total - after_total) / 1024 / 1024:.2f} MB")
    print("")
    for item in results:
        status = "UPLOADED" if item.uploaded else "SKIPPED"
        print(
            f"{status}\t{item.before / 1024:.1f} KB -> "
            f"{(item.after if item.uploaded else item.before) / 1024:.1f} KB\t"
            f"{item.width}x{item.height}\t{item.storage_path}"
        )


if __name__ == "__main__":
    main()
