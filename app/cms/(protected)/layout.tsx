import CmsClientShell from '@/components/cms/CmsClientShell'

export default function ProtectedCmsLayout({ children }: { children: React.ReactNode }) {
  return <CmsClientShell>{children}</CmsClientShell>
}
