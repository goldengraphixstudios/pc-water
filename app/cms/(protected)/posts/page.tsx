'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { fetchAdminPosts } from '@/lib/cms/browser-admin'
import type { CmsPost } from '@/lib/cms/types'
import { formatDate } from '@/lib/cms/utils'

function StatusPill({ status }: { status: string }) {
  const live = status === 'published'
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
      live
        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
        : 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${live ? 'bg-emerald-500' : 'bg-amber-400'}`} />
      {live ? 'Published' : 'Draft'}
    </span>
  )
}

export default function CmsPostsPage() {
  const router = useRouter()
  const [posts, setPosts]     = useState<CmsPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAdminPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">Articles</h1>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-0.5">
            {loading ? 'Loading…' : `${posts.length} article${posts.length !== 1 ? 's' : ''} total`}
          </p>
        </div>
        <Link
          href="/cms/posts/new"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#3e91ce] text-white text-[13px] font-medium hover:bg-[#2d7ab8] transition-colors shadow-sm shadow-[#3e91ce]/20"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Article
        </Link>
      </div>

      {/* Table card */}
      <div className="bg-white dark:bg-[#13161F] rounded-xl border border-slate-200 dark:border-[#1E2235] shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center py-20 text-center px-6">
            <svg className="w-5 h-5 animate-spin text-[#3e91ce] mb-3" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-sm text-slate-400 dark:text-slate-600">Loading articles…</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center py-20 text-center px-6">
            <div className="w-14 h-14 bg-slate-100 dark:bg-[#1A1D2C] rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-slate-400 dark:text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="font-semibold text-slate-800 dark:text-slate-200 mb-1">No articles yet</p>
            <p className="text-sm text-slate-400 dark:text-slate-600 mb-5">Create your first article to get started.</p>
            <Link
              href="/cms/posts/new"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3e91ce] text-white rounded-lg text-sm font-medium hover:bg-[#2d7ab8] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Article
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-slate-100 dark:border-[#1A1D2C] bg-slate-50 dark:bg-[#0F1219]">
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider">Title</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider w-28">Status</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider hidden md:table-cell">Tags</th>
                  <th className="px-5 py-3.5 text-left text-[11px] font-semibold text-slate-400 dark:text-slate-600 uppercase tracking-wider hidden lg:table-cell w-32">Updated</th>
                  <th className="px-5 py-3.5 w-8" />
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-[#161926]">
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    onClick={() => router.push(`/cms/posts/edit?id=${post.id}`)}
                    className="cursor-pointer hover:bg-slate-50 dark:hover:bg-[#1A1D2C] transition-colors group"
                  >
                    <td className="px-5 py-4">
                      <p className="text-[13px] font-semibold text-slate-800 dark:text-slate-200 group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors leading-snug">{post.title}</p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-600 font-mono mt-0.5 truncate max-w-xs">{post.slug}</p>
                    </td>
                    <td className="px-5 py-4">
                      <StatusPill status={post.status} />
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={`${post.id}-${tag.slug}`} className="text-[11px] text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-[#1A1D2C] px-2 py-0.5 rounded-full">
                            {tag.name}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-[11px] text-slate-400 dark:text-slate-600 py-0.5">+{post.tags.length - 3}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <span className="text-[12px] text-slate-400 dark:text-slate-600 tabular-nums">{formatDate(post.updatedAt)}</span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <svg className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-[#3e91ce] dark:group-hover:text-[#60AFDF] transition-colors inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Footer count */}
      {!loading && posts.length > 0 && (
        <p className="text-xs text-slate-400 dark:text-slate-600 text-center">
          {posts.filter(p => p.status === 'published').length} published · {posts.filter(p => p.status === 'draft').length} draft · Click any row to edit
        </p>
      )}
    </div>
  )
}
