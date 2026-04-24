'use client'

import { useMemo, useRef, useState } from 'react'

import { createSupabaseBrowserClient } from '@/lib/supabase/browser'

type UploadKind = 'single' | 'gallery'

type MediaUploaderProps = {
  label: string
  description: string
  value: string | string[]
  onChange: (value: string | string[]) => void
  folder: string
  kind?: UploadKind
  emptyLabel?: string
}

type UploadPreview = {
  id: string
  url: string
  state: 'ready' | 'uploading'
  name?: string
}

function normalizeFileName(name: string) {
  const dotIndex = name.lastIndexOf('.')
  const baseName = dotIndex === -1 ? name : name.slice(0, dotIndex)
  const extension = dotIndex === -1 ? '' : name.slice(dotIndex).toLowerCase()

  const safeBase = baseName
    .toLowerCase()
    .trim()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `${safeBase || 'image'}${extension}`
}

function createPreviewId(value: string) {
  return `preview-${value}`
}

export default function MediaUploader({
  label,
  description,
  value,
  onChange,
  folder,
  kind = 'single',
  emptyLabel = 'Drop images here or click to browse',
}: MediaUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [uploadingIds, setUploadingIds] = useState<string[]>([])
  const [manualUrl, setManualUrl] = useState('')

  const urls = useMemo(() => (Array.isArray(value) ? value : value ? [value] : []), [value])
  const previews = useMemo<UploadPreview[]>(
    () => [
      ...urls.map((url) => ({
        id: createPreviewId(url),
        url,
        state: 'ready' as const,
      })),
      ...uploadingIds.map((id) => ({
        id,
        url: '',
        state: 'uploading' as const,
      })),
    ],
    [uploadingIds, urls],
  )

  function commit(nextUrls: string[]) {
    onChange(kind === 'single' ? nextUrls[0] ?? '' : nextUrls)
  }

  async function uploadFiles(fileList: FileList | null) {
    if (!fileList?.length) {
      return
    }

    setError(null)

    const supabase = createSupabaseBrowserClient()
    if (!supabase) {
      setError('Supabase is not configured for uploads.')
      return
    }

    const files = Array.from(fileList).filter((file) => file.type.startsWith('image/'))
    if (!files.length) {
      setError('Only image files are supported.')
      return
    }

    const tempIds = files.map(() => `upload-${crypto.randomUUID()}`)
    setUploadingIds((current) => [...current, ...tempIds])

    try {
      const uploadedUrls: string[] = []

      for (const file of files) {
        const filePath = `${folder}/${Date.now()}-${crypto.randomUUID()}-${normalizeFileName(file.name)}`
        const { data, error: uploadError } = await supabase.storage
          .from('cms-media')
          .upload(filePath, file, {
            contentType: file.type || 'application/octet-stream',
            upsert: false,
          })

        if (uploadError || !data) {
          throw new Error(
            uploadError?.message ??
              'Image upload failed. Create a public "cms-media" bucket and allow authenticated uploads.',
          )
        }

        const { data: publicUrlData } = supabase.storage.from('cms-media').getPublicUrl(data.path)
        uploadedUrls.push(publicUrlData.publicUrl)
      }

      const nextUrls = kind === 'single' ? uploadedUrls.slice(0, 1) : [...urls, ...uploadedUrls]
      commit(nextUrls)
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : 'Image upload failed.')
    } finally {
      setUploadingIds((current) => current.filter((id) => !tempIds.includes(id)))
    }
  }

  function removeUrl(url: string) {
    const nextUrls = urls.filter((item) => item !== url)
    commit(nextUrls)
  }

  function addManualUrl() {
    const nextUrl = manualUrl.trim()
    if (!nextUrl) {
      return
    }

    setError(null)

    if (kind === 'single') {
      commit([nextUrl])
    } else if (!urls.includes(nextUrl)) {
      commit([...urls, nextUrl])
    }

    setManualUrl('')
  }

  function moveUrl(url: string, direction: -1 | 1) {
    const index = urls.indexOf(url)
    const targetIndex = index + direction
    if (index === -1 || targetIndex < 0 || targetIndex >= urls.length) {
      return
    }

    const nextUrls = [...urls]
    const [item] = nextUrls.splice(index, 1)
    nextUrls.splice(targetIndex, 0, item)
    commit(nextUrls)
  }

  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-sm font-semibold text-[#30505b]">{label}</h3>
        <p className="mt-1 text-sm text-[#6e7d84]">{description}</p>
      </div>

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(event) => {
          event.preventDefault()
          setIsDragging(false)
          void uploadFiles(event.dataTransfer.files)
        }}
        className={`w-full rounded-3xl border border-dashed px-6 py-8 text-left transition ${
          isDragging
            ? 'border-[#3e91ce] bg-[#f3f9fd] shadow-[0_0_0_3px_rgba(62,145,206,0.12)]'
            : 'border-[#cfd9de] bg-[#f8fbfc] hover:border-[#3e91ce] hover:bg-[#f3f9fd]'
        }`}
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-[#30505b]">{emptyLabel}</p>
            <p className="mt-1 text-sm text-[#6e7d84]">
              PNG, JPG, WEBP and other image formats work. {kind === 'gallery' ? 'You can drop multiple files at once.' : 'Best used for the primary visual.'}
            </p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-[#3e91ce] px-4 py-2 text-sm font-semibold text-white">
            Choose files
          </span>
        </div>
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={kind === 'gallery'}
        className="hidden"
        onChange={(event) => {
          void uploadFiles(event.target.files)
          event.currentTarget.value = ''
        }}
      />

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="rounded-3xl border border-gray-200 bg-white p-4">
        <p className="text-sm font-semibold text-[#30505b]">Or paste an existing image URL</p>
        <div className="mt-3 flex flex-col gap-3 md:flex-row">
          <input
            value={manualUrl}
            onChange={(event) => setManualUrl(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                addManualUrl()
              }
            }}
            className="field"
            placeholder="https://..."
          />
          <button
            type="button"
            onClick={addManualUrl}
            className="rounded-2xl bg-[#30505b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#243d46]"
          >
            Use URL
          </button>
        </div>
      </div>

      {previews.length > 0 && (
        <div className={`grid gap-4 ${kind === 'gallery' ? 'sm:grid-cols-2' : ''}`}>
          {previews.map((item, index) => (
            <div key={item.id} className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <div className="relative aspect-[4/3] bg-[#eef4f6]">
                {item.state === 'uploading' ? (
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-[#30505b]">
                    Uploading image...
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={item.url} alt={label} className="h-full w-full object-cover" />
                )}
              </div>
              <div className="space-y-3 p-4">
                {item.state === 'ready' ? (
                  <>
                    <p className="truncate text-sm text-[#30505b]">{item.url}</p>
                    <div className="flex flex-wrap gap-2">
                      {kind === 'gallery' && (
                        <>
                          <button
                            type="button"
                            onClick={() => moveUrl(item.url, -1)}
                            disabled={index === 0}
                            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-[#30505b] disabled:opacity-40"
                          >
                            Move up
                          </button>
                          <button
                            type="button"
                            onClick={() => moveUrl(item.url, 1)}
                            disabled={index >= urls.length - 1}
                            className="rounded-full border border-gray-200 px-3 py-1 text-xs font-semibold text-[#30505b] disabled:opacity-40"
                          >
                            Move down
                          </button>
                        </>
                      )}
                      <button
                        type="button"
                        onClick={() => removeUrl(item.url)}
                        className="rounded-full border border-red-200 px-3 py-1 text-xs font-semibold text-red-600 hover:bg-red-50"
                      >
                        Remove
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-[#6e7d84]">Please wait while the image uploads.</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
