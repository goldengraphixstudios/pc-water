import { DOWNLOADS } from '@/lib/downloadables'

export type ResourceDownloadKey =
  | 'capabilityStatement'
  | 'fireWaterGuide'
  | 'maintenanceChecklist'
  | 'tankUpgradeGuide'
  | 'remoteProjectGuide'
  | 'wtpComplianceMonitoringGuide'
  | 'wtpOperatorChecklist'
  | 'wtpDisinfectionCompliancePrimer'

export type ResourceDownloadDefinition = {
  key: ResourceDownloadKey
  slug: string
  title: string
  division: string
  fileUrl: string
}

export const RESOURCE_DOWNLOADS: Record<ResourceDownloadKey, ResourceDownloadDefinition> = {
  capabilityStatement: {
    key: 'capabilityStatement',
    slug: 'capability-statement',
    title: 'Capability Statement',
    division: 'PC Water Infrastructure',
    fileUrl: DOWNLOADS.capabilityStatement,
  },
  fireWaterGuide: {
    key: 'fireWaterGuide',
    slug: 'fire-water-compliance-guide',
    title: 'Fire Water Compliance Guide',
    division: 'PC Tanks',
    fileUrl: DOWNLOADS.fireWaterGuide,
  },
  maintenanceChecklist: {
    key: 'maintenanceChecklist',
    slug: 'tank-maintenance-checklist',
    title: 'Tank Maintenance Checklist',
    division: 'PC Tanks',
    fileUrl: DOWNLOADS.maintenanceChecklist,
  },
  tankUpgradeGuide: {
    key: 'tankUpgradeGuide',
    slug: 'tank-upgrade-decision-guide',
    title: 'Tank Upgrade Decision Guide',
    division: 'PC Tanks',
    fileUrl: DOWNLOADS.tankUpgradeGuide,
  },
  remoteProjectGuide: {
    key: 'remoteProjectGuide',
    slug: 'remote-wtp-construction-commissioning',
    title: 'Remote WTP Construction & Commissioning',
    division: 'PC Water Solutions',
    fileUrl: DOWNLOADS.remoteProjectGuide,
  },
  wtpComplianceMonitoringGuide: {
    key: 'wtpComplianceMonitoringGuide',
    slug: 'wtp-compliance-monitoring-guide',
    title: 'WTP Compliance Monitoring Guide',
    division: 'PC Water Solutions',
    fileUrl: DOWNLOADS.wtpComplianceMonitoringGuide,
  },
  wtpOperatorChecklist: {
    key: 'wtpOperatorChecklist',
    slug: 'wtp-operator-checklist',
    title: 'WTP Operator Checklist',
    division: 'PC Water Solutions',
    fileUrl: DOWNLOADS.wtpOperatorChecklist,
  },
  wtpDisinfectionCompliancePrimer: {
    key: 'wtpDisinfectionCompliancePrimer',
    slug: 'wtp-disinfection-compliance-primer',
    title: 'WTP Disinfection Compliance Primer',
    division: 'PC Water Solutions',
    fileUrl: DOWNLOADS.wtpDisinfectionCompliancePrimer,
  },
}

export function getResourceByKey(key: ResourceDownloadKey) {
  return RESOURCE_DOWNLOADS[key]
}

export function getResourceByFileUrl(fileUrl: string) {
  return Object.values(RESOURCE_DOWNLOADS).find((resource) => resource.fileUrl === fileUrl) ?? null
}
