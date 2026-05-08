'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { fetchAdminPosts } from '@/lib/cms/browser-admin'
import type { CmsPost } from '@/lib/cms/types'
import { formatDate } from '@/lib/cms/utils'

function StatusBadge({ status }: { status: string }) {
  const live = status === 'published'
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-[3px] rounded-full whitespace-nowrap ${
      live
        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
        : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${live ? 'bg-emerald-500' : 'bg-amber-400'}`} />
      {live ? 'Published' : 'Draft'}
    </span>
  )
}

const STATUS_FILTERS = ['All', 'Published', 'Draft'] as const
type StatusFilter = typeof STATUS_FILTERS[number]

export default function CmsPostsPage() {
  const router = useRouter()
  const [posts, setPosts]         = useState<CmsPost[]>([])
  const [loading, setLoading]     = useState(true)
  const [search, setSearch]       = useState('')
  const [statusFilter, setStatus] = useState<StatusFilter>('All')

  useEffect(() => {
    fetchAdminPosts().then((data) => { setPosts(data); setLoading(false) })
  }, [])

  const filtered = useMemo(() => posts.filter((p) => {
    const matchStatus =
      statusFilter === 'All' ||
      (statusFilter === 'Published' && p.status === 'published') ||
      (statusFilter === 'Draft' && p.status === 'draft')
    const q = search.toLowerCase()
    return matchStatus && (!q || p.title.toLowerCase().includes(q) || p.slug.toLowerCase().includes(q) || p.tags.some(t => t.name.toLowerCase().includes(q)))
  }), [posts, search, statusFilter])

  const publishedCount = posts.filter(p => p.status === 'published').length
  const draftCount     = posts.filter(p => p.status === 'draft').length

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.16em] mb-1">Content</p>
          <h1 className="text-[22px] font-black text-[#0E1525] dark:text-[#ECF0F9] tracking-tight leading-tight">Articles</h1>
          <p className="text-[12px] text-[#536070] dark:text-[#8B9CB8] mt-1">
            {loading ? 'Loading…' : `${posts.length} total · ${publishedCount} published · ${draftCount} draft`}
          </p>
        </div>
        <Link
          href="/cms/posts/new"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#3E91CE] text-white text-[13px] font-semibold hover:bg-[#2D7AB8] transition-colors shadow-sm shadow-[#3E91CE]/20 flex-shrink-0"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New Article
        </Link>
      </div>

      {/* Search + filter bar */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99AABF] dark:text-[#4A5670] pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, slug or tag…"
            className="w-full pl-9 pr-4 h-9 rounded-lg border border-[#DDE2EE] dark:border-[#1D2235] bg-white dark:bg-[#111622] text-[13px] text-[#0E1525] dark:text-[#ECF0F9] placeholder-[#99AABF] dark:placeholder-[#4A5670] focus:outline-none focus:border-[#3E91CE] dark:focus:border-[#3E91CE] transition-colors"
          />
        </div>
        <div className="flex gap-1.5">
          {STATUS_FILTERS.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3.5 h-9 rounded-lg text-[12px] font-semibold transition-all whitespace-nowrap ${
                statusFilter === s
                  ? 'bg-[#3E91CE] text-white shadow-sm'
                  : 'bg-white dark:bg-[#111622] border border-[#DDE2EE] dark:border-[#1D2235] text-[#536070] dark:text-[#8B9CB8] hover:border-[#3E91CE] hover:text-[#3E91CE]'
              }`}
            >
              {s}
              {s !== 'All' && (
                <span className="ml-1.5 opacity-60 text-[11px]">
                  {s === 'Published' ? publishedCount : draftCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-[#111622] rounded-xl border border-[#DDE2EE] dark:border-[#1D2235] overflow-hidden">
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-20">
            <svg className="w-5 h-5 animate-spin text-[#3E91CE]" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670]">Loading articles…</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="flex flex-col items-center py-20 px-6 text-center">
            <div className="w-14 h-14 bg-[#EFF2F8] dark:bg-[#1D2235] rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#99AABF] dark:text-[#4A5670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-[14px] font-bold text-[#0E1525] dark:text-[#ECF0F9] mb-1">No articles yet</p>
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670] mb-5">Create your first article to get started.</p>
            <Link href="/cms/posts/new" className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3E91CE] text-white rounded-lg text-[13px] font-semibold hover:bg-[#2D7AB8] transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create Article
            </Link>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center py-16 text-center px-6">
            <p className="text-[13px] text-[#99AABF] dark:text-[#4A5670]">No articles match your search.</p>
            <button onClick={() => { setSearch(''); setStatus('All') }} className="text-[12px] text-[#3E91CE] dark:text-[#60AFDF] hover:underline mt-2 font-medium">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-[#EFF2F8] dark:border-[#1A1E2E] bg-[#F8FAFC] dark:bg-[#0D1020]">
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em]">Article</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] w-28">Status</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden md:table-cell">Tags</th>
                  <th className="px-5 py-3 text-left text-[10px] font-bold text-[#99AABF] dark:text-[#4A5670] uppercase tracking-[0.12em] hidden lg:table-cell w-28">Updated</th>
                  <th className="px-4 py-3 w-8" />
                </tr>
              </thead>
              <tbody>
                {filtered.map((post) => (
                  <tr
                    key={post.id}
                    onClick={() => router.push(`/cms/posts/edit?id=${post.id}`)}
                    className="cursor-pointer border-b border-[#EFF2F8] dark:border-[#1A1E2E] last:border-0 hover:bg-[#F8FAFC] dark:hover:bg-[#131928] transition-colors group"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#EFF2F8] dark:bg-[#1D2235] overflow-hidden flex-shrink-0">
                          {post.coverImageUrl
                            // eslint-disable-next-line @next/next/no-img-element
                            ? <img src={post.coverImageUrl} alt="" className="w-full h-full object-cover" loading="lazy" />
                            : <div className="w-full h-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-[#99AABF] dark:text-[#4A5670]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              </div>
                          }
                        </div>
                        <div className="min-w-0">
                          <p className="text-[13px] font-semibold text-[#0E1525] dark:text-[#ECF0F9] group-hover:text-[#3E91CE] dark:group-hover:text-[#60AFDF] transition-colors truncate max-w-xs leading-snug">{post.title}</p>
                          <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] font-mono mt-0.5 truncate max-w-xs">{post.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5"><StatusBadge status={post.status} /></td>
                    <td className="px-5 py-3.5 hidden md:table-cell">
                      {post.tags.length === 0 ? (
                        <span className="text-[11px] text-[#DDE2EE] dark:text-[#1D2235] italic">—</span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={`${post.id}-${tag.slug}`} className="text-[11px] text-[#536070] dark:text-[#8B9CB8] bg-[#EFF2F8] dark:bg-[#1D2235] px-2 py-0.5 rounded-full">{tag.name}</span>
                          ))}
                          {post.tags.length > 3 && <span className="text-[11px] text-[#99AABF] dark:text-[#4A5670]">+{post.tags.length - 3}</span>}
                        </div>
                      )}
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <span className="text-[12px] text-[#99AABF] dark:text-[#4A5670] font-mono">{formatDate(post.updatedAt)}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <svg className="w-4 h-4 text-[#DDE2EE] dark:text-[#1D2235] group-hover:text-[#3E91CE] dark:group-hover:text-[#60AFDF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {!loading && filtered.length > 0 && (
        <p className="text-[11px] text-[#99AABF] dark:text-[#4A5670] text-center">
          Showing {filtered.length} of {posts.length} article{posts.length !== 1 ? 's' : ''} · Click any row to edit
        </p>
      )}
    </div>
  )
}
