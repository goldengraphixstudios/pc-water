import CmsSidebar from '@/components/cms/CmsSidebar'

export default function CmsShell({
  children,
  email,
}: {
  children: React.ReactNode
  email: string
}) {
  return (
    <div className="min-h-screen lg:flex bg-[#f4f6f8]">
      <CmsSidebar email={email} />
      <div className="flex-1 min-w-0">
        <div className="px-4 py-6 md:px-8 md:py-8">{children}</div>
      </div>
    </div>
  )
}
