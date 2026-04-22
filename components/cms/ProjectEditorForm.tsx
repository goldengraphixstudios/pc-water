'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

import type { CmsProject, CmsProjectInput } from '@/lib/cms/types'
import { joinLineSeparatedValues, slugify, splitCommaSeparatedTags, splitLineSeparatedValues } from '@/lib/cms/utils'

function toFormState(project?: CmsProject | null): CmsProjectInput {
  return {
    title: project?.title ?? '',
    slug: project?.slug ?? '',
    summary: project?.summary ?? '',
    content: project?.content ?? '',
    sector: project?.sector ?? '',
    location: project?.location ?? '',
    scope: project?.scope ?? '',
    heroImageUrl: project?.heroImageUrl ?? '',
    galleryUrls: project?.galleryUrls ?? [],
    status: project?.status ?? 'draft',
    featured: project?.featured ?? false,
    seoTitle: project?.seoTitle ?? '',
    seoDescription: project?.seoDescription ?? '',
    publishedAt: project?.publishedAt ? project.publishedAt.slice(0, 16) : null,
    tags: project?.tags.map((tag) => tag.name) ?? [],
  }
}

export default function ProjectEditorForm({ project }: { project?: CmsProject | null }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [form, setForm] = useState<CmsProjectInput>(() => toFormState(project))
  const [tagsText, setTagsText] = useState((project?.tags ?? []).map((tag) => tag.name).join(', '))
  const [galleryText, setGalleryText] = useState(joinLineSeparatedValues(project?.galleryUrls ?? []))
  const [error, setError] = useState<string | null>(null)

  function update<K extends keyof CmsProjectInput>(key: K, value: CmsProjectInput[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const payload: CmsProjectInput = {
      ...form,
      slug: slugify(form.slug || form.title),
      galleryUrls: splitLineSeparatedValues(galleryText),
      tags: splitCommaSeparatedTags(tagsText),
    }

    const endpoint = project ? `/api/cms/projects/${project.id}` : '/api/cms/projects'
    const method = project ? 'PATCH' : 'POST'

    startTransition(async () => {
      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await response.json()
      if (!response.ok) {
        setError(result.error ?? 'Save failed.')
        return
      }

      router.push('/cms/projects')
      router.refresh()
    })
  }

  async function handleDelete() {
    if (!project || !window.confirm(`Delete "${project.title}"?`)) {
      return
    }

    setError(null)

    startTransition(async () => {
      const response = await fetch(`/api/cms/projects/${project.id}`, { method: 'DELETE' })
      const result = await response.json()
      if (!response.ok) {
        setError(result.error ?? 'Delete failed.')
        return
      }

      router.push('/cms/projects')
      router.refresh()
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-black text-[#30505b] mb-5">Project Content</h2>
            <div className="space-y-4">
              <Field label="Title">
                <input
                  value={form.title}
                  onChange={(event) => update('title', event.target.value)}
                  className="field"
                  required
                />
              </Field>

              <Field label="Slug">
                <input
                  value={form.slug}
                  onChange={(event) => update('slug', slugify(event.target.value))}
                  className="field"
                  placeholder="auto-generated-from-title"
                />
              </Field>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Sector">
                  <input
                    value={form.sector}
                    onChange={(event) => update('sector', event.target.value)}
                    className="field"
                    required
                  />
                </Field>

                <Field label="Location">
                  <input
                    value={form.location}
                    onChange={(event) => update('location', event.target.value)}
                    className="field"
                    required
                  />
                </Field>
              </div>

              <Field label="Scope">
                <input
                  value={form.scope}
                  onChange={(event) => update('scope', event.target.value)}
                  className="field"
                  required
                />
              </Field>

              <Field label="Summary">
                <textarea
                  value={form.summary}
                  onChange={(event) => update('summary', event.target.value)}
                  className="field min-h-28"
                  required
                />
              </Field>

              <Field label="Body">
                <textarea
                  value={form.content}
                  onChange={(event) => update('content', event.target.value)}
                  className="field min-h-80"
                  required
                />
              </Field>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-black text-[#30505b] mb-5">SEO</h2>
            <div className="space-y-4">
              <Field label="SEO Title">
                <input
                  value={form.seoTitle ?? ''}
                  onChange={(event) => update('seoTitle', event.target.value)}
                  className="field"
                />
              </Field>

              <Field label="SEO Description">
                <textarea
                  value={form.seoDescription ?? ''}
                  onChange={(event) => update('seoDescription', event.target.value)}
                  className="field min-h-28"
                />
              </Field>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-black text-[#30505b] mb-5">Publishing</h2>
            <div className="space-y-4">
              <Field label="Status">
                <select
                  value={form.status}
                  onChange={(event) => update('status', event.target.value as CmsProjectInput['status'])}
                  className="field"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </Field>

              <Field label="Published At">
                <input
                  type="datetime-local"
                  value={form.publishedAt ?? ''}
                  onChange={(event) => update('publishedAt', event.target.value || null)}
                  className="field"
                />
              </Field>

              <label className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(event) => update('featured', event.target.checked)}
                  className="h-4 w-4 accent-[#3e91ce]"
                />
                <span className="text-sm font-semibold text-[#30505b]">Feature on public pages</span>
              </label>

              <Field label="Hero Image URL">
                <input
                  value={form.heroImageUrl ?? ''}
                  onChange={(event) => update('heroImageUrl', event.target.value)}
                  className="field"
                  placeholder="https://..."
                />
              </Field>

              <Field label="Gallery Image URLs">
                <textarea
                  value={galleryText}
                  onChange={(event) => setGalleryText(event.target.value)}
                  className="field min-h-32"
                  placeholder="One image URL per line"
                />
              </Field>

              <Field label="Tags">
                <input
                  value={tagsText}
                  onChange={(event) => setTagsText(event.target.value)}
                  className="field"
                  placeholder="Government, Tank Liners, Refurbish"
                />
              </Field>
            </div>
          </section>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100 space-y-3">
            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-2xl bg-[#3e91ce] px-4 py-3 text-sm font-semibold text-white hover:bg-[#2d7ab8] disabled:bg-gray-300"
            >
              {isPending ? 'Saving...' : project ? 'Update Project' : 'Create Project'}
            </button>
            {project && (
              <button
                type="button"
                onClick={handleDelete}
                disabled={isPending}
                className="w-full rounded-2xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:text-gray-400"
              >
                Delete Project
              </button>
            )}
          </div>
        </div>
      </div>
    </form>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-[#30505b] mb-2">{label}</span>
      {children}
    </label>
  )
}
