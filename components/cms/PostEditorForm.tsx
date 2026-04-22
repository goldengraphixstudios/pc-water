'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'

import type { CmsPost, CmsPostInput } from '@/lib/cms/types'
import { slugify, splitCommaSeparatedTags } from '@/lib/cms/utils'

function toFormState(post?: CmsPost | null): CmsPostInput {
  return {
    title: post?.title ?? '',
    slug: post?.slug ?? '',
    excerpt: post?.excerpt ?? '',
    content: post?.content ?? '',
    coverImageUrl: post?.coverImageUrl ?? '',
    readTime: post?.readTime ?? '',
    status: post?.status ?? 'draft',
    seoTitle: post?.seoTitle ?? '',
    seoDescription: post?.seoDescription ?? '',
    publishedAt: post?.publishedAt ? post.publishedAt.slice(0, 16) : null,
    tags: post?.tags.map((tag) => tag.name) ?? [],
  }
}

export default function PostEditorForm({ post }: { post?: CmsPost | null }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [form, setForm] = useState<CmsPostInput>(() => toFormState(post))
  const [tagsText, setTagsText] = useState((post?.tags ?? []).map((tag) => tag.name).join(', '))
  const [error, setError] = useState<string | null>(null)

  function update<K extends keyof CmsPostInput>(key: K, value: CmsPostInput[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    const payload: CmsPostInput = {
      ...form,
      slug: slugify(form.slug || form.title),
      tags: splitCommaSeparatedTags(tagsText),
    }

    const endpoint = post ? `/api/cms/posts/${post.id}` : '/api/cms/posts'
    const method = post ? 'PATCH' : 'POST'

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

      router.push('/cms/posts')
      router.refresh()
    })
  }

  async function handleDelete() {
    if (!post || !window.confirm(`Delete "${post.title}"?`)) {
      return
    }

    setError(null)

    startTransition(async () => {
      const response = await fetch(`/api/cms/posts/${post.id}`, { method: 'DELETE' })
      const result = await response.json()
      if (!response.ok) {
        setError(result.error ?? 'Delete failed.')
        return
      }

      router.push('/cms/posts')
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
            <h2 className="text-xl font-black text-[#30505b] mb-5">Article Content</h2>
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

              <Field label="Excerpt">
                <textarea
                  value={form.excerpt}
                  onChange={(event) => update('excerpt', event.target.value)}
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
                  onChange={(event) => update('status', event.target.value as CmsPostInput['status'])}
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

              <Field label="Read Time">
                <input
                  value={form.readTime ?? ''}
                  onChange={(event) => update('readTime', event.target.value)}
                  className="field"
                  placeholder="5 min read"
                />
              </Field>

              <Field label="Cover Image URL">
                <input
                  value={form.coverImageUrl ?? ''}
                  onChange={(event) => update('coverImageUrl', event.target.value)}
                  className="field"
                  placeholder="https://..."
                />
              </Field>

              <Field label="Tags">
                <input
                  value={tagsText}
                  onChange={(event) => setTagsText(event.target.value)}
                  className="field"
                  placeholder="Maintenance, RPVC Liners"
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
              {isPending ? 'Saving...' : post ? 'Update Article' : 'Create Article'}
            </button>
            {post && (
              <button
                type="button"
                onClick={handleDelete}
                disabled={isPending}
                className="w-full rounded-2xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 disabled:text-gray-400"
              >
                Delete Article
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
