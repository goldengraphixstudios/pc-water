'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createSupabaseBrowserClient } from '@/lib/supabase/browser'

const BUCKET = 'cms-media'

type StorageFile = {
  name: string
  id: string
  folder: string
  publicUrl: string
  size?: number
  createdAt?: string
}

const FOLDERS = [
  { key: '',                  label: 'All Files'      },
  { key: 'projects/hero',     label: 'Project Heroes' },
  { key: 'projects/gallery',  label: 'Gallery'        },
  { key: 'posts',             label: 'Article Covers' },
]

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function CopyButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      title="Copy URL"
      className={`w-7 h-7 flex items-center justify-center rounded-lg transition-all ${
        copied
          ? 'bg-emerald-500 text-white'
          : 'bg-slate-100 dark:bg-[#1E2235] text-slate-500 dark:text-slate-400 hover:bg-[#3e91ce] hover:text-white'
      }`}
    >
      {copied ? (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  )
}

export default function CmsMediaPage() {
  const [files, setFiles]         = useState<StorageFile[]>([])
  const [loading, setLoading]     = useState(true)
  const [folder, setFolder]       = useState('')
  const [search, setSearch]       = useState('')
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const load = useCallback(async () => {
    setLoading(true)
    const supabase = createSupabaseBrowserClient()
    if (!supabase) { setLoading(false); return }

    const allFiles: StorageFile[] = []
    const prefixes = folder ? [folder] : ['projects/hero', 'projects/gallery', 'posts', '']

    for (const prefix of prefixes) {
      const { data } = await supabase.storage.from(BUCKET).list(prefix || undefined, {
        limit: 200,
        sortBy: { column: 'created_at', order: 'desc' },
      })
      if (!data) continue

      for (const item of data) {
        if (item.id === null) continue // skip folders
        const filePath  = prefix ? `${prefix}/${item.name}` : item.name
        const { data: urlData } = supabase.storage.from(BUCKET).getPublicUrl(filePath)
        allFiles.push({
          name:      item.name,
          id:        item.id,
          folder:    prefix || 'root',
          publicUrl: urlData.publicUrl,
          size:      item.metadata?.size,
          createdAt: item.created_at,
        })
      }
    }

    setFiles(allFiles)
    setLoading(false)
  }, [folder])

  useEffect(() => { load() }, [load])

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files
    if (!fileList?.length) return

    const supabase = createSupabaseBrowserClient()
    if (!supabase) return

    setUploading(true)
    setUploadError(null)
    setUploadSuccess(null)

    try {
      const uploadFolder = folder || 'uploads'
      let uploaded = 0

      for (const file of Array.from(fileList)) {
        if (!file.type.startsWith('image/')) continue
        const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]/g, '-')
        const path = `${uploadFolder}/${Date.now()}-${safeName}`

        const { error } = await supabase.storage
          .from(BUCKET)
          .upload(path, file, { contentType: file.type, upsert: false })

        if (error) throw new Error(error.message)
        uploaded++
      }

      setUploadSuccess(`${uploaded} file${uploaded !== 1 ? 's' : ''} uploaded successfully.`)
      await load()
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed.')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  const filtered = files.filter((f) => {
    const q = search.toLowerCase()
    return !q || f.name.toLowerCase().includes(q) || f.folder.toLowerCase().includes(q)
  })

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Media Library</h1>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
            {loading ? 'Loading…' : `${filtered.length} file${filtered.length !== 1 ? 's' : ''} in storage`}
          </p>
        </div>
        <button
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3e91ce] text-white text-[13px] font-medium hover:bg-[#2d7ab8] disabled:opacity-60 transition-colors shadow-sm shadow-[#3e91ce]/20"
        >
          {uploading ? (
            <>
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Uploading…
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Upload Images
            </>
          )}
        </button>
        <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={handleUpload} />
      </div>

      {/* Upload feedback */}
      {uploadError && (
        <div className="flex gap-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 px-4 py-3 text-sm text-red-600 dark:text-red-400">
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {uploadError}
        </div>
      )}
      {uploadSuccess && (
        <div className="flex gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-400">
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {uploadSuccess}
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search files…"
            className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 dark:border-[#1E2235] bg-white dark:bg-[#13161F] text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#3e91ce] transition-colors"
          />
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {FOLDERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFolder(f.key)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                folder === f.key
                  ? 'bg-[#3e91ce] text-white shadow-sm'
                  : 'bg-white dark:bg-[#13161F] border border-slate-200 dark:border-[#1E2235] text-slate-600 dark:text-slate-400 hover:border-[#3e91ce] hover:text-[#3e91ce]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex flex-col items-center py-20 text-center">
          <svg className="w-5 h-5 animate-spin text-[#3e91ce] mb-3" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-sm text-slate-400 dark:text-slate-600">Loading media files…</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235]">
          <div className="w-14 h-14 bg-slate-100 dark:bg-[#1A1D2C] rounded-2xl flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">No files found</p>
          <p className="text-sm text-slate-400 dark:text-slate-600">
            {search ? 'Try a different search.' : 'Upload images using the button above.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
          {filtered.map((file) => (
            <div
              key={file.id}
              className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-[#252A3D] transition-all group"
            >
              {/* Thumbnail */}
              <div className="aspect-square bg-slate-100 dark:bg-[#1A1D2C] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={file.publicUrl}
                  alt={file.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Info + actions */}
              <div className="p-2.5">
                <p className="text-[11px] text-slate-700 dark:text-slate-300 font-medium truncate leading-snug" title={file.name}>
                  {file.name}
                </p>
                <div className="flex items-center justify-between mt-2 gap-1">
                  <div className="min-w-0 flex-1">
                    {file.size && (
                      <p className="text-[10px] text-slate-400 dark:text-slate-600">{formatBytes(file.size)}</p>
                    )}
                    <p className="text-[10px] text-slate-400 dark:text-slate-600 truncate">{file.folder}</p>
                  </div>
                  <CopyButton url={file.publicUrl} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Usage tip */}
      {!loading && filtered.length > 0 && (
        <p className="text-xs text-slate-400 dark:text-slate-600 text-center">
          Click the copy icon on any image to copy its URL — paste it directly into the hero or gallery field in any project or article editor.
        </p>
      )}

    </div>
  )
}
