import { redirect } from 'next/navigation'

import CmsShell from '@/components/cms/CmsShell'
import { getCmsAuthContext } from '@/lib/cms/queries'

export const dynamic = 'force-dynamic'

export default async function ProtectedCmsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const auth = await getCmsAuthContext()

  if (!auth.configured) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-xl rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
          <p className="text-xs uppercase tracking-[0.25em] text-[#3e91ce] font-bold mb-3">CMS Setup</p>
          <h1 className="text-3xl font-black text-[#30505b] mb-4">Supabase Not Configured</h1>
          <p className="text-gray-600 leading-relaxed">
            Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, then apply the
            CMS schema in Supabase before using the admin panel.
          </p>
        </div>
      </div>
    )
  }

  if (!auth.user) {
    redirect('/cms/login')
  }

  if (!auth.isAdmin) {
    redirect('/cms/login?error=access-denied')
  }

  return <CmsShell email={auth.user.email ?? 'Unknown user'}>{children}</CmsShell>
}
