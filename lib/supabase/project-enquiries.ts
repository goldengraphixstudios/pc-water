import type { ProjectEnquiry } from '@/lib/project-enquiries'

export async function fetchProjectEnquiries(): Promise<ProjectEnquiry[]> {
  try {
    const response = await fetch('/api/project-enquiries', {
      method: 'GET',
      cache: 'no-store',
    })

    const data = await response.json().catch(() => null)
    if (!response.ok || !data?.ok || !Array.isArray(data.enquiries)) {
      return []
    }

    return data.enquiries as ProjectEnquiry[]
  } catch {
    return []
  }
}

export async function deleteProjectEnquiry(id: string): Promise<{ ok: boolean }> {
  try {
    const response = await fetch(`/api/project-enquiries?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    })

    const data = await response.json().catch(() => null)
    return { ok: Boolean(response.ok && data?.ok) }
  } catch {
    return { ok: false }
  }
}
