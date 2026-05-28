import type { AssessmentConfig } from './types'
import { tankComplianceChecker } from './tank-compliance-checker'
import { repairRelineReplace } from './repair-reline-replace'

/**
 * Client-resolvable registry of assessment configs. Configs contain a scoring
 * function, which cannot be serialized across the server→client boundary — so
 * the client tool component looks them up here by slug instead of receiving
 * the config as a prop.
 */
export const toolConfigs: Record<string, AssessmentConfig> = {
  [tankComplianceChecker.slug]: tankComplianceChecker,
  [repairRelineReplace.slug]: repairRelineReplace,
}
