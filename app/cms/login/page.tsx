import { redirect } from 'next/navigation'

import LoginForm from '@/components/cms/LoginForm'
import { getCmsAuthContext } from '@/lib/cms/queries'

export const dynamic = 'force-dynamic'

export default async function CmsLoginPage() {
  const auth = await getCmsAuthContext()

  if (auth.user && auth.isAdmin) {
    redirect('/cms/dashboard')
  }

  return <LoginForm />
}
