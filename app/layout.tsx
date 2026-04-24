import type { Metadata } from 'next'
import './globals.css'
import SiteChrome from '@/components/SiteChrome'

export const metadata: Metadata = {
  title: {
    default: 'PC Water Infrastructure - Engineered Water Solutions',
    template: '%s | PC Water Infrastructure',
  },
  description:
    'PC Water Infrastructure delivers engineered water storage solutions across Australia. Custom design, installation, RPVC liners, fire water tanks, and remote project delivery.',
  keywords: [
    'water tanks',
    'water storage',
    'fire water tanks',
    'RPVC liners',
    'tank inspection',
    'remote project delivery',
    'Australia',
    'AS2304',
    'AS4020',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'PC Water Infrastructure',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PC Water Infrastructure',
  url: 'https://www.pctanks.com.au',
  logo: 'https://goldengraphixstudios.github.io/pc-water/logo-pacific-water-group.png',
  description:
    'PC Water Infrastructure delivers engineered water storage solutions across Australia. Founded 2013.',
  foundingDate: '2013',
  telephone: '1300029804',
  email: 'info@pacificwatergroup.com.au',
  address: {
    '@type': 'PostalAddress',
    postOfficeBoxNumber: 'PO Box 961',
    addressLocality: 'Mudgeeraba',
    addressRegion: 'QLD',
    postalCode: '4213',
    addressCountry: 'AU',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '1300-029-804',
    contactType: 'customer service',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:30',
      closes: '17:00',
    },
  },
  sameAs: [
    'https://www.facebook.com/pacificwatertanks',
    'https://www.instagram.com/pacificwatertanks',
    'https://www.linkedin.com/company/pacificwatertanks',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        {/* Dark mode FOUC prevention — must run before paint */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('cms-theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}
