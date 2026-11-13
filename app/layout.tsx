import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { SCHOOL_LOGO, SITE_URL } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600'] })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['600', '700', '800'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Laiser Hill Academy | Private School in Ongata Rongai, Kenya',
    template: '%s | Laiser Hill Academy',
  },
  description: 'Laiser Hill Academy in Ongata Rongai offers private CBC and CBE schooling, British IGCSE and A Level pathways, admissions, campus life and learner support.',
  keywords: ['Laiser Hill Academy', 'private school Ongata Rongai', 'CBC school Kenya', 'CBE senior school Kenya', 'IGCSE school Kenya', 'A Level school Kenya'],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    title: 'Laiser Hill Academy | Private School in Ongata Rongai, Kenya',
    description: 'Laiser Hill Academy in Ongata Rongai offers private CBC and CBE schooling, British IGCSE and A Level pathways, admissions, campus life and learner support.',
    siteName: 'Laiser Hill Academy',
    locale: 'en_KE',
    images: [{ url: SCHOOL_LOGO, alt: 'Laiser Hill Academy school crest' }],
  },
  icons: {
    icon: '/images/lh/lha-logo.png',
    shortcut: '/images/lh/lha-logo.png',
    apple: '/images/lh/lha-logo.png',
  },
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#3D3BF3', width: 'device-width', initialScale: 1 }

const schoolStructuredData = {
  '@context': 'https://schema.org',
  '@type': ['School', 'EducationalOrganization'],
  name: 'Laiser Hill Academy',
  alternateName: 'Laiser Hill',
  url: SITE_URL,
  logo: SCHOOL_LOGO,
  image: SCHOOL_LOGO,
  foundingDate: '1985',
  slogan: 'To Greater Heights',
  email: 'admin@laiserhillacademy.education',
  telephone: '+254734323218',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+254728601575',
    contactType: 'admissions',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nairobi–Magadi Highway',
    addressLocality: 'Ongata Rongai',
    addressRegion: 'Kajiado County',
    addressCountry: 'KE',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolStructuredData) }} />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
