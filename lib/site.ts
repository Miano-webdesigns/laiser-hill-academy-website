import type { Metadata } from 'next'

export const SITE_URL = 'https://laiserhillacademy.education'
export const SCHOOL_LOGO = `${SITE_URL}/images/lh/lha-logo.png`

export function createPageMetadata({
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  path: string
  title: string
  description: string
  absoluteTitle?: boolean
}): Metadata {
  const pageUrl = `${SITE_URL}${path}`
  const socialTitle = absoluteTitle ? title : `${title} | Laiser Hill Academy`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path || '/' },
    openGraph: {
      type: 'website',
      title: socialTitle,
      description,
      url: pageUrl,
      siteName: 'Laiser Hill Academy',
      locale: 'en_KE',
      images: [{ url: SCHOOL_LOGO, alt: 'Laiser Hill Academy school crest' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [SCHOOL_LOGO],
    },
    other: { 'twitter:url': pageUrl },
  }
}
