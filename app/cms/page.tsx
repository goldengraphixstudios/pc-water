import { redirect } from 'next/navigation'

import { getCmsAuthContext } from '@/lib/cms/queries'

export const dynamic = 'force-dynamic'

export default async function CmsIndexPage() {
  const auth = await getCmsAuthContext()

  if (auth.user && auth.isAdmin) {
    redirect('/cms/dashboard')
  }

  redirect('/cms/login')
}
