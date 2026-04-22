import Link from 'next/link'

import { getAdminPosts } from '@/lib/cms/queries'
import { formatDate } from '@/lib/cms/utils'

export const dynamic = 'force-dynamic'

export default async function CmsPostsPage() {
  const posts = await getAdminPosts()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-2">CMS</p>
          <h1 className="text-4xl font-black text-[#30505b]">Articles</h1>
        </div>
        <Link
          href="/cms/posts/new"
          className="inline-flex items-center justify-center rounded-2xl bg-[#3e91ce] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2d7ab8]"
        >
          New Article
        </Link>
      </div>

      <div className="rounded-3xl bg-white shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#f4f6f8] text-left text-gray-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Tags</th>
                <th className="px-6 py-4 font-semibold">Updated</th>
                <th className="px-6 py-4 font-semibold">Edit</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t border-gray-100">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-[#30505b]">{post.title}</p>
                    <p className="text-gray-500">{post.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-[#f4f6f8] px-3 py-1 text-xs font-bold text-[#30505b]">
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={`${post.id}-${tag.slug}`}
                          className="rounded-full bg-[#3e91ce]/10 px-3 py-1 text-xs font-semibold text-[#3e91ce]"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{formatDate(post.updatedAt)}</td>
                  <td className="px-6 py-4">
                    <Link href={`/cms/posts/${post.id}`} className="font-semibold text-[#3e91ce]">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
