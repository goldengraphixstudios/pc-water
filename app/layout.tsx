import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})
import SiteChrome from '@/components/SiteChrome'
import TawkChat from '@/components/TawkChat'
import { socialProfileUrls } from '@/lib/social-links'

const siteUrl = process.env.SITE_URL || 'https://pcwater.com.au'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PC Water Infrastructure - Engineered Water Solutions',
    template: '%s | PC Water',
  },
  icons: {
    icon: [
      { url: '/favicon-pcwater-v2.ico', type: 'image/x-icon' },
      { url: '/icon-pcwater-v2.png', type: 'image/png' },
    ],
    apple: [
      { url: '/icon-pcwater-v2.png', type: 'image/png' },
    ],
    shortcut: '/favicon-pcwater-v2.ico',
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
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'PC Water Infrastructure — Engineered Water Asset Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pcwaterinfra',
    creator: '@pcwaterinfra',
    images: ['/hero.png'],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PC Water Infrastructure',
  url: siteUrl,
  logo: `${siteUrl}/logo-pacific-water-group.png`,
  description:
    'PC Water Infrastructure delivers engineered water storage solutions across Australia. Founded 2013.',
  foundingDate: '2013',
  telephone: '1300029804',
  email: 'contact@pcwater.com.au',
  knowsAbout: [
    'Water storage tanks',
    'Fire water tank compliance',
    'RPVC liner systems',
    'Tank inspection technology',
    'Water treatment infrastructure',
    'Remote water infrastructure delivery',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  address: {
    '@type': 'PostalAddress',
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
  sameAs: socialProfileUrls,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${roboto.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-TBNRDZ9P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-TBNRDZ9P');
          `}
        </Script>
        {/* Dark mode FOUC prevention — must run before paint */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('cms-theme');if(t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SiteChrome>{children}</SiteChrome>
        <TawkChat />
      </body>
    </html>
  )
}
