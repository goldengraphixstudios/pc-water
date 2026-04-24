import CmsSidebar from '@/components/cms/CmsSidebar'

export default function CmsShell({
  children,
  email,
}: {
  children: React.ReactNode
  email: string
}) {
  return (
    <div className="min-h-screen bg-[#F0F3F9] dark:bg-[#0C0E16]">
      <CmsSidebar email={email} />
      <main className="max-w-6xl mx-auto px-5 sm:px-7 py-7">
        {children}
      </main>
    </div>
  )
}
