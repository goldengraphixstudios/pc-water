import Link from 'next/link'

import { getAdminProjects } from '@/lib/cms/queries'
import { formatDate } from '@/lib/cms/utils'

export const dynamic = 'force-dynamic'

export default async function CmsProjectsPage() {
  const projects = await getAdminProjects()

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-2">CMS</p>
          <h1 className="text-4xl font-black text-[#30505b]">Projects</h1>
        </div>
        <Link
          href="/cms/projects/new"
          className="inline-flex items-center justify-center rounded-2xl bg-[#3e91ce] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2d7ab8]"
        >
          New Project
        </Link>
      </div>

      <div className="rounded-3xl bg-white shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-[#f4f6f8] text-left text-gray-500">
              <tr>
                <th className="px-6 py-4 font-semibold">Project</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Tags</th>
                <th className="px-6 py-4 font-semibold">Updated</th>
                <th className="px-6 py-4 font-semibold">Edit</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-t border-gray-100">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-[#30505b]">{project.title}</p>
                    <p className="text-gray-500">{project.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#f4f6f8] px-3 py-1 text-xs font-bold text-[#30505b]">
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="rounded-full bg-[#3e91ce]/10 px-3 py-1 text-xs font-bold text-[#3e91ce]">
                          featured
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.id}-${tag.slug}`}
                          className="rounded-full bg-[#3e91ce]/10 px-3 py-1 text-xs font-semibold text-[#3e91ce]"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{formatDate(project.updatedAt)}</td>
                  <td className="px-6 py-4">
                    <Link href={`/cms/projects/${project.id}`} className="font-semibold text-[#3e91ce]">
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
