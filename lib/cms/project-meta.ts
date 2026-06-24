export type ProjectContentMeta = {
  projectStatus: string
  clientOrganisation: string
  contractValue: string
  servicesDelivered: string[]
}

const META_START = '<!-- cms:project-meta'
const META_END = '-->'
const META_RE = /<!--\s*cms:project-meta\s*([\s\S]*?)\s*-->\s*/i

export const defaultProjectMeta: ProjectContentMeta = {
  projectStatus: 'Completed',
  clientOrganisation: '',
  contractValue: '',
  servicesDelivered: [],
}

export function parseProjectContent(rawContent: string | null | undefined) {
  const source = rawContent ?? ''
  const match = source.match(META_RE)

  if (!match) {
    return {
      content: source,
      meta: defaultProjectMeta,
    }
  }

  try {
    const parsed = JSON.parse(match[1]) as Partial<ProjectContentMeta>
    return {
      content: source.replace(META_RE, '').trimStart(),
      meta: {
        projectStatus: parsed.projectStatus?.trim() || defaultProjectMeta.projectStatus,
        clientOrganisation: parsed.clientOrganisation?.trim() || defaultProjectMeta.clientOrganisation,
        contractValue: parsed.contractValue?.trim() || defaultProjectMeta.contractValue,
        servicesDelivered: Array.isArray(parsed.servicesDelivered)
          ? parsed.servicesDelivered.map((service) => String(service).trim()).filter(Boolean)
          : [],
      },
    }
  } catch {
    return {
      content: source.replace(META_RE, '').trimStart(),
      meta: defaultProjectMeta,
    }
  }
}

export function serializeProjectContent(content: string, meta?: Partial<ProjectContentMeta>) {
  const cleanContent = parseProjectContent(content).content.trim()
  const normalizedMeta: ProjectContentMeta = {
    projectStatus: meta?.projectStatus?.trim() || defaultProjectMeta.projectStatus,
    clientOrganisation: meta?.clientOrganisation?.trim() || defaultProjectMeta.clientOrganisation,
    contractValue: meta?.contractValue?.trim() || defaultProjectMeta.contractValue,
    servicesDelivered: Array.isArray(meta?.servicesDelivered)
      ? meta.servicesDelivered.map((service) => service.trim()).filter(Boolean)
      : [],
  }

  return `${META_START}\n${JSON.stringify(normalizedMeta, null, 2)}\n${META_END}\n\n${cleanContent}`.trim()
}
