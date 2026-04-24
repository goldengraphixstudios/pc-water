'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import MediaUploader from '@/components/cms/MediaUploader'
import TagInput from '@/components/cms/TagInput'
import type { CmsPost, CmsPostInput } from '@/lib/cms/types'
import { slugify } from '@/lib/cms/utils'

function toFormState(post?: CmsPost | null): CmsPostInput {
  return {
    title:          post?.title          ?? '',
    slug:           post?.slug           ?? '',
    excerpt:        post?.excerpt        ?? '',
    content:        post?.content        ?? '',
    coverImageUrl:  post?.coverImageUrl  ?? '',
    readTime:       post?.readTime       ?? '',
    status:         post?.status         ?? 'draft',
    seoTitle:       post?.seoTitle       ?? '',
    seoDescription: post?.seoDescription ?? '',
    publishedAt:    post?.publishedAt    ? post.publishedAt.slice(0, 16) : null,
    tags:           post?.tags.map((t)  => t.name) ?? [],
  }
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

export default function PostEditorForm({ post }: { post?: CmsPost | null }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [form,  setForm]  = useState<CmsPostInput>(() => toFormState(post))
  const [error, setError] = useState<string | null>(null)

  function update<K extends keyof CmsPostInput>(key: K, value: CmsPostInput[K]) {
    setForm((curr) => ({ ...curr, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    const payload: CmsPostInput = { ...form, slug: slugify(form.slug || form.title) }
    const endpoint = post ? `/api/cms/posts/${post.id}` : '/api/cms/posts'
    const method   = post ? 'PATCH' : 'POST'
    startTransition(async () => {
      const res    = await fetch(endpoint, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const result = await res.json()
      if (!res.ok) { setError(result.error ?? 'Save failed.'); return }
      router.push('/cms/posts')
      router.refresh()
    })
  }

  async function handleDelete() {
    if (!post || !window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return
    setError(null)
    startTransition(async () => {
      const res    = await fetch(`/api/cms/posts/${post.id}`, { method: 'DELETE' })
      const result = await res.json()
      if (!res.ok) { setError(result.error ?? 'Delete failed.'); return }
      router.push('/cms/posts')
      router.refresh()
    })
  }

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/cms/posts"
            className="w-8 h-8 rounded-lg bg-white dark:bg-[#13161F] border border-slate-200 dark:border-[#1E2235] flex items-center justify-center text-slate-400 dark:text-slate-600 hover:text-slate-700 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-[#2A2F47] transition-colors shadow-sm flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <div className="min-w-0">
            <p className="text-xs text-slate-400 dark:text-slate-600 font-medium">Articles</p>
            <h1 className="text-lg font-bold text-slate-900 dark:text-slate-100 truncate">{post ? 'Edit Article' : 'New Article'}</h1>
          </div>
        </div>
        {post && (
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
            <Section title="Article Content">
              <Field label="Title">
                <input value={form.title} onChange={(e) => update('title', e.target.value)} className="field" placeholder="Article title" required />
              </Field>
              <Field label="Slug" hint="Auto-generated from title if left blank">
                <input value={form.slug} onChange={(e) => update('slug', slugify(e.target.value))} className="field font-mono text-sm" placeholder="article-slug" />
              </Field>
              <Field label="Excerpt" hint="Shown in article cards and previews">
                <textarea value={form.excerpt} onChange={(e) => update('excerpt', e.target.value)} className="field min-h-20 resize-none" placeholder="Short summary for previews and SEO." required />
              </Field>
              <Field label="Body">
                <textarea value={form.content} onChange={(e) => update('content', e.target.value)} className="field min-h-80 resize-y" placeholder="Write the full article here. Separate paragraphs with blank lines." required />
              </Field>
            </Section>

            <Section title="SEO">
              <Field label="SEO Title" hint="Leave blank to use the article title">
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
                <select value={form.status} onChange={(e) => update('status', e.target.value as CmsPostInput['status'])} className="field">
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </Field>
              <Field label="Publish Date">
                <input type="datetime-local" value={form.publishedAt ?? ''} onChange={(e) => update('publishedAt', e.target.value || null)} className="field" />
              </Field>
              <Field label="Read Time">
                <input value={form.readTime ?? ''} onChange={(e) => update('readTime', e.target.value)} className="field" placeholder="5 min read" />
              </Field>
            </Section>

            <Section title="Cover Image">
              <MediaUploader
                label="Cover Image"
                description="Shown in article cards and the article header."
                value={form.coverImageUrl ?? ''}
                onChange={(value) => update('coverImageUrl', Array.isArray(value) ? value[0] ?? '' : value)}
                folder="posts"
              />
            </Section>

            <Section title="Tags">
              <TagInput
                label="Article Tags"
                description="Group articles by topic for filters."
                tags={form.tags}
                onChange={(tags) => update('tags', tags)}
                placeholder="Enter a tag and press Enter"
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
                  {post ? 'Update Article' : 'Publish Article'}
                </>
              )}
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}
