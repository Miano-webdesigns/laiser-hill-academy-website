import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/admissions', '/admissions/fees', '/academics/kindergarten', '/academics/primary-junior', '/academics/senior-school', '/academics/international-school']
  return routes.map((route) => ({ url: `${SITE_URL}${route}`, lastModified: new Date(), changeFrequency: route === '' ? 'weekly' : 'monthly', priority: route === '' ? 1 : 0.8 }))
}
