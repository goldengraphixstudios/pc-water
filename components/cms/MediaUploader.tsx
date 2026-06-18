'use client'

import { useMemo, useRef, useState } from 'react'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'

type UploadKind = 'single' | 'gallery'

type MediaUploaderProps = {
  label:        string
  description:  string
  value:        string | string[]
  onChange:     (value: string | string[]) => void
  folder:       string
  kind?:        UploadKind
  emptyLabel?:  string
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function normalizeFileName(name: string) {
  const dot  = name.lastIndexOf('.')
  const base = dot === -1 ? name : name.slice(0, dot)
  const ext  = dot === -1 ? '' : name.slice(dot).toLowerCase()
  const safe = base.toLowerCase().trim().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
  return `${safe || 'image'}${ext}`
}

function jpgFileName(name: string) {
  const dot = name.lastIndexOf('.')
  const base = dot === -1 ? name : name.slice(0, dot)
  return normalizeFileName(`${base}.jpg`)
}

async function compressImageForUpload(file: File, folder: string) {
  if (!file.type.startsWith('image/') || file.type === 'image/gif') {
    return file
  }

  const imageUrl = URL.createObjectURL(file)
  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      img.onload = () => resolve(img)
      img.onerror = () => reject(new Error('Could not read image file.'))
      img.src = imageUrl
    })

    const maxEdge = folder.includes('projects/hero') ? 1920 : 1600
    const scale = Math.min(1, maxEdge / Math.max(image.naturalWidth, image.naturalHeight))
    const width = Math.max(1, Math.round(image.naturalWidth * scale))
    const height = Math.max(1, Math.round(image.naturalHeight * scale))

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return file

    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'
    ctx.drawImage(image, 0, 0, width, height)

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, 'image/jpeg', 0.72)
    })

    if (!blob || blob.size >= file.size) {
      return file
    }

    return new File([blob], jpgFileName(file.name), {
      type: 'image/jpeg',
      lastModified: Date.now(),
    })
  } catch {
    return file
  } finally {
    URL.revokeObjectURL(imageUrl)
  }
}

// ── Small icon buttons ────────────────────────────────────────────────────────

function IconBtn({ onClick, title, danger, disabled, children }: {
  onClick: () => void
  title: string
  danger?: boolean
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`w-6 h-6 flex items-center justify-center rounded transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
        danger
          ? 'bg-red-500/90 hover:bg-red-600 text-white'
          : 'bg-black/60 hover:bg-black/80 text-white'
      }`}
    >
      {children}
    </button>
  )
}

// ── Drop zone (compact) ───────────────────────────────────────────────────────

function DropZone({ onFiles, multiple, children }: {
  onFiles: (files: FileList) => void
  multiple: boolean
  children: React.ReactNode
}) {
  const [drag, setDrag] = useState(false)
  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files.length) onFiles(e.dataTransfer.files) }}
      className={`transition-colors ${drag ? 'ring-2 ring-[#3e91ce] ring-offset-1' : ''}`}
    >
      {children}
    </div>
  )
}

// ── Single image (hero) ───────────────────────────────────────────────────────

function SingleUploader({ value, onUpload, onRemove, onPasteUrl, uploading, error }: {
  value: string
  onUpload: (files: FileList) => void
  onRemove: () => void
  onPasteUrl: (url: string) => void
  uploading: boolean
  error: string | null
}) {
  const inputRef    = useRef<HTMLInputElement>(null)
  const [url, setUrl] = useState('')
  const [showPaste, setShowPaste] = useState(false)

  return (
    <div className="space-y-2">
      {value ? (
        /* ─ Has image ─ */
        <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-[#1E2235] bg-slate-100 dark:bg-[#1A1D2C] aspect-[16/9]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Hero" className="w-full h-full object-cover" />
          {/* Overlay bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2.5 flex items-center gap-2">
            <p className="text-[10px] text-white/80 truncate flex-1">{value.split('/').pop()}</p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-[11px] font-medium text-white bg-white/20 hover:bg-white/30 rounded-md px-2.5 py-1 transition-colors flex-shrink-0"
            >
              Change
            </button>
            <button
              type="button"
              onClick={onRemove}
              className="text-[11px] font-medium text-red-300 hover:text-red-100 hover:bg-red-500/30 rounded-md px-2 py-1 transition-colors flex-shrink-0"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        /* ─ Empty ─ */
        <DropZone onFiles={onUpload} multiple={false}>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="w-full flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 dark:border-[#252A3D] bg-slate-50 dark:bg-[#0F1219] hover:border-[#3e91ce]/60 hover:bg-[#EAF4FF]/30 dark:hover:bg-[#162338]/40 transition-colors py-8 px-4 disabled:opacity-60"
          >
            {uploading ? (
              <svg className="w-5 h-5 text-[#3e91ce] animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            )}
            <div className="text-center">
              <p className="text-[13px] font-medium text-slate-600 dark:text-slate-400">
                {uploading ? 'Uploading…' : 'Drop image or click to browse'}
              </p>
              <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">JPG, PNG, WEBP — primary visual</p>
            </div>
          </button>
        </DropZone>
      )}

      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files) onUpload(e.target.files); e.target.value = '' }} />

      {/* Error */}
      {error && <p className="text-xs text-red-500">{error}</p>}

      {/* Paste URL toggle */}
      <div>
        <button
          type="button"
          onClick={() => setShowPaste((v) => !v)}
          className="text-[11px] text-slate-400 dark:text-slate-500 hover:text-[#3e91ce] dark:hover:text-[#60AFDF] transition-colors flex items-center gap-1"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          {showPaste ? 'Hide URL input' : 'Or paste image URL'}
        </button>
        {showPaste && (
          <div className="flex gap-2 mt-1.5">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); if (url.trim()) { onPasteUrl(url.trim()); setUrl(''); setShowPaste(false) } } }}
              placeholder="https://…"
              className="field flex-1 text-[12px]"
            />
            <button
              type="button"
              onClick={() => { if (url.trim()) { onPasteUrl(url.trim()); setUrl(''); setShowPaste(false) } }}
              className="px-3 py-1.5 rounded-lg bg-slate-700 dark:bg-slate-600 text-white text-[12px] font-medium hover:bg-slate-800 transition-colors flex-shrink-0"
            >
              Use
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// ── Gallery thumbnail ─────────────────────────────────────────────────────────

function GalleryThumb({ url, index, total, onMoveLeft, onMoveRight, onRemove }: {
  url:       string
  index:     number
  total:     number
  onMoveLeft:  () => void
  onMoveRight: () => void
  onRemove:    () => void
}) {
  return (
    <div className="relative group rounded-lg overflow-hidden border border-slate-200 dark:border-[#1E2235] bg-slate-100 dark:bg-[#1A1D2C] aspect-square flex-shrink-0 w-[72px] h-[72px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />

      {/* Number badge */}
      <span className="absolute top-1 left-1 w-4 h-4 rounded bg-black/60 text-white text-[9px] font-bold flex items-center justify-center leading-none">
        {index + 1}
      </span>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1">
        {/* Reorder row */}
        <div className="flex gap-1">
          <IconBtn onClick={onMoveLeft} title="Move left" disabled={index === 0}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </IconBtn>
          <IconBtn onClick={onMoveRight} title="Move right" disabled={index >= total - 1}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </IconBtn>
        </div>
        {/* Remove */}
        <IconBtn onClick={onRemove} title="Remove" danger>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </IconBtn>
      </div>
    </div>
  )
}

// ── Gallery uploader ──────────────────────────────────────────────────────────

function GalleryUploader({ urls, onAdd, onMoveLeft, onMoveRight, onRemove, onPasteUrl, uploading, uploadingCount, error }: {
  urls:          string[]
  onAdd:         (files: FileList) => void
  onMoveLeft:    (index: number) => void
  onMoveRight:   (index: number) => void
  onRemove:      (url: string) => void
  onPasteUrl:    (url: string) => void
  uploading:     boolean
  uploadingCount: number
  error:         string | null
}) {
  const inputRef      = useRef<HTMLInputElement>(null)
  const [showPaste, setShowPaste] = useState(false)
  const [pasteUrl, setPasteUrl]   = useState('')

  return (
    <div className="space-y-3">
      {/* Thumbnail grid */}
      {(urls.length > 0 || uploading) && (
        <div className="flex flex-wrap gap-2">
          {urls.map((url, i) => (
            <GalleryThumb
              key={url}
              url={url}
              index={i}
              total={urls.length}
              onMoveLeft={() => onMoveLeft(i)}
              onMoveRight={() => onMoveRight(i)}
              onRemove={() => onRemove(url)}
            />
          ))}

          {/* Uploading placeholders */}
          {uploading && Array.from({ length: uploadingCount }).map((_, i) => (
            <div
              key={`uploading-${i}`}
              className="w-[72px] h-[72px] rounded-lg border-2 border-dashed border-[#3e91ce]/40 bg-[#EAF4FF]/40 dark:bg-[#162338]/40 flex items-center justify-center flex-shrink-0"
            >
              <svg className="w-4 h-4 text-[#3e91ce] animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Add more button */}
      <DropZone onFiles={onAdd} multiple>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="w-full flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 dark:border-[#252A3D] bg-slate-50 dark:bg-[#0F1219] hover:border-[#3e91ce]/60 hover:bg-[#EAF4FF]/30 dark:hover:bg-[#162338]/40 transition-colors py-3 px-4 disabled:opacity-60"
        >
          <svg className="w-4 h-4 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-[12px] font-medium text-slate-500 dark:text-slate-500">
            {urls.length === 0 ? 'Add gallery images' : 'Add more images'}
          </span>
          <span className="text-[11px] text-slate-400 dark:text-slate-600 ml-1">— drop or click</span>
        </button>
      </DropZone>

      <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => { if (e.target.files) onAdd(e.target.files); e.target.value = '' }} />

      {/* Error */}
      {error && <p className="text-xs text-red-500">{error}</p>}

      {/* Count + paste URL */}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] text-slate-400 dark:text-slate-600">
          {urls.length} image{urls.length !== 1 ? 's' : ''} · hover to reorder or remove
        </span>
        <button
          type="button"
          onClick={() => setShowPaste((v) => !v)}
          className="text-[11px] text-slate-400 dark:text-slate-500 hover:text-[#3e91ce] dark:hover:text-[#60AFDF] transition-colors flex items-center gap-1 flex-shrink-0"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          Paste URL
        </button>
      </div>

      {showPaste && (
        <div className="flex gap-2">
          <input
            type="url"
            value={pasteUrl}
            onChange={(e) => setPasteUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                if (pasteUrl.trim() && !urls.includes(pasteUrl.trim())) {
                  onPasteUrl(pasteUrl.trim())
                  setPasteUrl('')
                  setShowPaste(false)
                }
              }
            }}
            placeholder="https://…"
            className="field flex-1 text-[12px]"
          />
          <button
            type="button"
            onClick={() => {
              if (pasteUrl.trim() && !urls.includes(pasteUrl.trim())) {
                onPasteUrl(pasteUrl.trim())
                setPasteUrl('')
                setShowPaste(false)
              }
            }}
            className="px-3 py-1.5 rounded-lg bg-slate-700 dark:bg-slate-600 text-white text-[12px] font-medium hover:bg-slate-800 transition-colors flex-shrink-0"
          >
            Add
          </button>
        </div>
      )}
    </div>
  )
}

// ── Main export ───────────────────────────────────────────────────────────────

export default function MediaUploader({
  label,
  description,
  value,
  onChange,
  folder,
  kind = 'single',
}: MediaUploaderProps) {
  const [uploading, setUploading]   = useState(false)
  const [uploadingCount, setCount]  = useState(0)
  const [error, setError]           = useState<string | null>(null)

  const urls = useMemo(
    () => (Array.isArray(value) ? value : value ? [value] : []),
    [value],
  )

  function commit(nextUrls: string[]) {
    onChange(kind === 'single' ? nextUrls[0] ?? '' : nextUrls)
  }

  async function handleFiles(fileList: FileList) {
    setError(null)
    const supabase = createSupabaseBrowserClient()
    if (!supabase) { setError('Supabase not configured.'); return }

    const files = Array.from(fileList).filter((f) => f.type.startsWith('image/'))
    if (!files.length) { setError('Only image files are supported.'); return }

    setUploading(true)
    setCount(files.length)

    try {
      const uploaded: string[] = []
      for (const file of files) {
        const uploadFile = await compressImageForUpload(file, folder)
        const path = `${folder}/${Date.now()}-${crypto.randomUUID()}-${normalizeFileName(uploadFile.name)}`
        const { data, error: uploadError } = await supabase.storage
          .from('cms-media')
          .upload(path, uploadFile, { contentType: uploadFile.type || 'application/octet-stream', upsert: false })

        if (uploadError || !data) throw new Error(uploadError?.message ?? 'Upload failed.')
        const { data: urlData } = supabase.storage.from('cms-media').getPublicUrl(data.path)
        uploaded.push(urlData.publicUrl)
      }

      const next = kind === 'single' ? uploaded.slice(0, 1) : [...urls, ...uploaded]
      commit(next)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.')
    } finally {
      setUploading(false)
      setCount(0)
    }
  }

  function removeUrl(url: string) {
    commit(urls.filter((u) => u !== url))
  }

  function moveUrl(index: number, direction: -1 | 1) {
    const target = index + direction
    if (target < 0 || target >= urls.length) return
    const next = [...urls]
    ;[next[index], next[target]] = [next[target], next[index]]
    commit(next)
  }

  function pasteUrl(url: string) {
    if (kind === 'single') {
      commit([url])
    } else if (!urls.includes(url)) {
      commit([...urls, url])
    }
  }

  return (
    <div className="space-y-2">
      {/* Label */}
      <div>
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">{label}</p>
        <p className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">{description}</p>
      </div>

      {/* Uploader */}
      {kind === 'single' ? (
        <SingleUploader
          value={urls[0] ?? ''}
          onUpload={handleFiles}
          onRemove={() => commit([])}
          onPasteUrl={pasteUrl}
          uploading={uploading}
          error={error}
        />
      ) : (
        <GalleryUploader
          urls={urls}
          onAdd={handleFiles}
          onMoveLeft={(i) => moveUrl(i, -1)}
          onMoveRight={(i) => moveUrl(i, 1)}
          onRemove={removeUrl}
          onPasteUrl={pasteUrl}
          uploading={uploading}
          uploadingCount={uploadingCount}
          error={error}
        />
      )}
    </div>
  )
}
