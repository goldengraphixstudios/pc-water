// This route exists only to satisfy Next.js dynamic-route resolution.
// In the static export (GitHub Pages) no pages are generated here — all
// edit navigation uses /cms/posts/edit?id=<uuid> instead.
export function generateStaticParams() {
  return []
}

export default function EditPostLegacyPage() {
  return null
}
