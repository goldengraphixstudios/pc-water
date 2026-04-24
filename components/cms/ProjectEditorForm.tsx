'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import MediaUploader from '@/components/cms/MediaUploader'
import SingleValuePicker from '@/components/cms/SingleValuePicker'
import TagInput from '@/components/cms/TagInput'
import { browserCreateProject, browserUpdateProject, browserDeleteProject } from '@/lib/cms/browser-admin'
import type { CmsProject, CmsProjectInput } from '@/lib/cms/types'
import { slugify } from '@/lib/cms/utils'

function toFormState(project?: CmsProject | null): CmsProjectInput {
  return {
    title:          project?.title          ?? '',
    slug:           project?.slug           ?? '',
    summary:        project?.summary        ?? '',
    content:        project?.content        ?? '',
    sector:         project?.sector         ?? '',
    location:       project?.location       ?? '',
    scope:          project?.scope          ?? '',
    heroImageUrl:   project?.heroImageUrl   ?? '',
    galleryUrls:    project?.galleryUrls    ?? [],
    status:         project?.status         ?? 'draft',
    featured:       project?.featured       ?? false,
    seoTitle:       project?.seoTitle       ?? '',
    seoDescription: project?.seoDescription ?? '',
    publishedAt:    project?.publishedAt    ? project.publishedAt.slice(0, 16) : null,
    tags:           project?.tags.map((t)  => t.name) ?? [],
  }
}

type Props = {
  project?:                CmsProject | null
  availableClassifications?: string[]
  availableTags?:          string[]
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
      <div className="px-5 py-3.5 border-b border-slate-100 dark:border-[#1A1D2C]">
        <h3 className="text-[13px] font-semibold text-slate-700 dark:text-slate-300">{title}</h3>
      </div>
      <div className="p-5 space-y-4">{children}</div>
    </div>
  )
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">{label}</span>
      {hint && <span className="block text-xs text-slate-400 dark:text-slate-600 mb-1.5 -mt-1">{hint}</span>}
      {children}
    </label>
  )
}

export default function ProjectEditorForm({ project, availableClassifications = [], availableTags = [] }: Props) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [form,  setForm]  = useState<CmsProjectInput>(() => toFormState(project))
  const [error, setError] = useState<string | null>(null)

  function update<K extends keyof CmsProjectInput>(key: K, value: CmsProjectInput[K]) {
    setForm((curr) => ({ ...curr, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const payload: CmsProjectInput = { ...form, slug: slugify(form.slug || form.title) }
    startTransition(async () => {
      const result = project
        ? await browserUpdateProject(project.id, payload)
        : await browserCreateProject(payload)
      if (!result.ok) { setError(result.error); return }
      router.push('/cms/projects')
    })
  }

  async function handleDelete() {
    if (!project || !window.confirm(`Delete "${project.title}"? This cannot be undone.`)) return
    setError(null)
    startTransition(async () => {
      const result = await browserDeleteProject(project.id)
      if (!result.ok) { setError(result.error); return }
      router.push('/cms/projects')
    })
  }

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/cms/projects"
            className="w-8 h-8 rounded-lg bg-white dark:bg-[#13161F] border border-slate-200 dark:border-[#1E2235] flex items-center justify-center text-slate-400 dark:text-slate-600 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-[#2A2F47] transition-colors shadow-sm flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="min-w-0">
            <p className="text-xs text-slate-400 dark:text-slate-600 font-medium">Projects</p>
            <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate">{project ? 'Edit Project' : 'New Project'}</h1>
          </div>
        </div>
        {project && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-red-200 dark:border-red-900/50 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 text-[13px] font-medium transition-colors disabled:opacity-40 flex-shrink-0"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="flex gap-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 px-4 py-3">
          <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid gap-5 lg:grid-cols-[1fr_290px]">

          {/* Main */}
          <div className="space-y-4">
            <Section title="Project Details">
              <Field label="Title">
                <input value={form.title} onChange={(e) => update('title', e.target.value)} className="field" placeholder="Project name" required />
              </Field>
              <Field label="Slug" hint="Auto-generated from title if left blank">
                <input value={form.slug} onChange={(e) => update('slug', slugify(e.target.value))} className="field font-mono text-sm" placeholder="project-slug" />
              </Field>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Location">
                  <input value={form.location} onChange={(e) => update('location', e.target.value)} className="field" placeholder="City, State" required />
                </Field>
                <Field label="Scope">
                  <input value={form.scope} onChange={(e) => update('scope', e.target.value)} className="field" placeholder="e.g. 2 × 500KL tanks" required />
                </Field>
              </div>
              <Field label="Summary" hint="Shown in project cards">
                <textarea value={form.summary} onChange={(e) => update('summary', e.target.value)} className="field min-h-20 resize-none" placeholder="Short project summary for grid cards and previews." required />
              </Field>
              <Field label="Body">
                <textarea value={form.content} onChange={(e) => update('content', e.target.value)} className="field min-h-80 resize-y" placeholder="Describe the challenge, delivery scope, and outcome." required />
              </Field>
            </Section>

            <Section title="Classification">
              <SingleValuePicker
                label="Project Classification"
                description="Choose from existing filter categories or add a new one."
                value={form.sector}
                onChange={(value) => update('sector', value)}
                options={availableClassifications}
                placeholder="e.g. Government, Mining, Industrial"
              />
            </Section>

            <Section title="SEO">
              <Field label="SEO Title" hint="Leave blank to use the project title">
                <input value={form.seoTitle ?? ''} onChange={(e) => update('seoTitle', e.target.value)} className="field" placeholder="Custom search engine title" />
              </Field>
              <Field label="SEO Description" hint="Recommended: 160 characters or fewer">
                <textarea value={form.seoDescription ?? ''} onChange={(e) => update('seoDescription', e.target.value)} className="field min-h-20 resize-none" placeholder="Meta description for search result snippets." />
              </Field>
            </Section>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Section title="Publishing">
              <Field label="Status">
                <select value={form.status} onChange={(e) => update('status', e.target.value as CmsProjectInput['status'])} className="field">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </Field>
              <Field label="Publish Date">
                <input type="datetime-local" value={form.publishedAt ?? ''} onChange={(e) => update('publishedAt', e.target.value || null)} className="field" />
              </Field>
              <label className="flex items-start gap-3 cursor-pointer p-3 rounded-xl border border-slate-200 dark:border-[#1E2235] hover:border-[#3e91ce] dark:hover:border-[#3e91ce]/50 hover:bg-[#EAF4FF] dark:hover:bg-[#162338]/50 transition-colors group">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => update('featured', e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#3e91ce] flex-shrink-0"
                />
                <div>
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors">Feature on public pages</p>
                  <p className="text-xs text-slate-400 dark:text-slate-600 mt-0.5">Shown prominently on homepage and projects page</p>
                </div>
              </label>
            </Section>

            <Section title="Media">
              <MediaUploader
                label="Hero Image"
                description="Primary project image for cards and project page header."
                value={form.heroImageUrl ?? ''}
                onChange={(value) => update('heroImageUrl', Array.isArray(value) ? value[0] ?? '' : value)}
                folder="projects/hero"
              />
              <div className="border-t border-slate-100 dark:border-[#1A1D2C] pt-4">
                <MediaUploader
                  label="Gallery Images"
                  description="Additional images for the project photo gallery."
                  value={form.galleryUrls}
                  onChange={(value) => update('galleryUrls', Array.isArray(value) ? value : value ? [value] : [])}
                  folder="projects/gallery"
                  kind="gallery"
                  emptyLabel="Drop gallery images here"
                />
              </div>
            </Section>

            <Section title="Tags">
              <TagInput
                label="Project Tags"
                description="Tags feed the public project filters."
                tags={form.tags}
                onChange={(tags) => update('tags', tags)}
                availableOptions={availableTags}
                placeholder="Government"
              />
            </Section>

            {/* Save */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full flex items-center justify-center gap-2 bg-[#3e91ce] text-white px-4 py-2.5 rounded-xl text-[13px] font-semibold hover:bg-[#2d7ab8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm shadow-[#3e91ce]/20"
            >
              {isPending ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Saving...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {project ? 'Update Project' : 'Publish Project'}
                </>
              )}
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}
