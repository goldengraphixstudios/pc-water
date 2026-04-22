import Link from 'next/link'

import { getAdminPosts, getAdminProjects } from '@/lib/cms/queries'

export const dynamic = 'force-dynamic'

export default async function CmsDashboardPage() {
  const [posts, projects] = await Promise.all([getAdminPosts(), getAdminProjects()])

  const metrics = [
    { label: 'Articles', value: posts.length },
    { label: 'Published Articles', value: posts.filter((post) => post.status === 'published').length },
    { label: 'Projects', value: projects.length },
    { label: 'Featured Projects', value: projects.filter((project) => project.featured).length },
  ]

  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
        <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-3">Dashboard</p>
        <h1 className="text-4xl font-black text-[#30505b] mb-4">CMS Overview</h1>
        <p className="text-gray-600 max-w-2xl">
          Manage public resources and project entries from one place. Posts and projects publish
          straight into the site once they are marked `published`.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-2">{metric.label}</p>
            <p className="text-4xl font-black text-[#30505b]">{metric.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-[#30505b]">Latest Articles</h2>
            <Link href="/cms/posts" className="text-sm font-semibold text-[#3e91ce]">
              Manage Articles
            </Link>
          </div>
          <div className="space-y-3">
            {posts.slice(0, 5).map((post) => (
              <div key={post.id} className="rounded-2xl bg-[#f4f6f8] px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#30505b]">{post.title}</p>
                    <p className="text-sm text-gray-500">{post.slug}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#30505b]">
                    {post.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-[#30505b]">Latest Projects</h2>
            <Link href="/cms/projects" className="text-sm font-semibold text-[#3e91ce]">
              Manage Projects
            </Link>
          </div>
          <div className="space-y-3">
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className="rounded-2xl bg-[#f4f6f8] px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#30505b]">{project.title}</p>
                    <p className="text-sm text-gray-500">{project.slug}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#30505b]">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
