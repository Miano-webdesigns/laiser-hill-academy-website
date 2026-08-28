import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600'] })
const poppins = Poppins({ subsets: ['latin'], variable: '--font-poppins', weight: ['600', '700', '800'] })

const siteUrl = 'https://laiserhill.academy'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Laiser Hill Academy | International, Senior & Private Primary School in Kenya', template: '%s | Laiser Hill Academy' },
  description: 'Laiser Hill Academy is a leading private school in Kenya offering CBC kindergarten, private primary and junior school, CBE senior school, and British international IGCSE and A Level education in Ongata Rongai.',
  keywords: ['Laiser Hill Academy', 'LHA', 'international schools in Kenya', 'international school Ongata Rongai', 'senior schools in Kenya', 'private primary schools in Kenya', 'private primary school Nairobi', 'IGCSE school Kenya', 'A Level school Kenya', 'Laiser Hill Mzizi portal', 'Laiser Hill Moodle online learning'],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: { title: 'Laiser Hill Academy | International, Senior & Private Primary School in Kenya', description: 'Discover academic pathways from kindergarten and private primary school to senior school, IGCSE and A Levels at Laiser Hill Academy.', type: 'website', url: siteUrl, siteName: 'Laiser Hill Academy', locale: 'en_KE' },
  twitter: { card: 'summary_large_image', title: 'Laiser Hill Academy', description: 'International, senior and private primary school education in Kenya.' },
  icons: { icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lha%20logo1.jpg-Ny2BLBK48cSEwEsOr1xjX9cnUe5xE6.png', shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lha%20logo1.jpg-Ny2BLBK48cSEwEsOr1xjX9cnUe5xE6.png', apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lha%20logo1.jpg-Ny2BLBK48cSEwEsOr1xjX9cnUe5xE6.png' },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#3D3BF3', width: 'device-width', initialScale: 1 }
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'School',
  name: 'Laiser Hill Academy',
  alternateName: 'LHA',
  url: siteUrl,
  description: 'International, senior and private primary school education in Ongata Rongai, Kenya.',
  address: { '@type': 'PostalAddress', addressLocality: 'Ongata Rongai', addressRegion: 'Kajiado County', addressCountry: 'KE' },
  sameAs: ['https://facebook.com/laiserhillacademy', 'https://instagram.com/laiserhillofficial?igsi=dTAxbmZrdWprYXZn', 'https://youtube.com/@laiserhillacademy2743?si=-EQyk1oW830UliSL', 'https://tiktok.com/@laiserhillacademy?_r=1&_t=ZS-997hDaGnvE7', 'https://lha.mzizi.co.ke/ISIMSLogin.aspx', 'https://laiserhillacademy.moodlecloud.com/login/index.php'],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Laiser Hill Academy academic pathways', itemListElement: ['Kindergarten', 'Primary & Junior School', 'Senior School', 'International School'].map((name) => ({ '@type': 'Course', name })) },
}

const publishingStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', name: 'Laiser Hill Academy', url: siteUrl, inLanguage: 'en-KE', publisher: { '@type': 'School', name: 'Laiser Hill Academy', url: siteUrl } },
    { '@type': 'EducationalOrganization', name: 'Laiser Hill Academy', url: siteUrl, areaServed: { '@type': 'Country', name: 'Kenya' }, knowsAbout: ['CBC education', 'CBE senior school', 'IGCSE', 'A Levels', 'private primary education', 'international schooling'] },
    { '@type': 'ItemList', name: 'Laiser Hill Academy academic pathways', itemListElement: ['Kindergarten', 'Primary & Junior School', 'Senior School', 'International School'].map((name, index) => ({ '@type': 'ListItem', position: index + 1, name })) },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${inter.variable} ${poppins.variable}`}><body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publishingStructuredData) }} />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
