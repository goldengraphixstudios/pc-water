import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: {
    default: 'Pacific Water Tanks | Engineered Water Storage Solutions',
    template: '%s | Pacific Water Tanks',
  },
  description:
    'Pacific Water Tanks delivers engineered water storage solutions across Australia. Custom design, installation, RPVC liners, fire water tanks, and remote project delivery.',
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
    siteName: 'Pacific Water Tanks',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pacific Water Tanks',
  url: 'https://www.pctanks.com.au',
  logo: 'https://www.pctanks.com.au/logo-colour.webp',
  description:
    'Pacific Water Tanks delivers engineered water storage solutions across Australia. Founded 2013.',
  foundingDate: '2013',
  telephone: '1300029804',
  email: 'info@pctanks.com.au',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
