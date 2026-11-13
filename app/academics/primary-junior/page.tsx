import content from '@/data/school-content.json'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'
import { SchoolContentPage } from '@/components/school-content-page'
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  path: '/academics/primary-junior',
  title: 'Primary & Junior School in Ongata Rongai (CBC, Ages 6–14)',
  description: 'Laiser Hill Academy in Ongata Rongai offers CBC primary and junior schooling for ages 6–14, with strong teaching, activities and family admissions guidance.',
})

export default function PrimaryJuniorPage() {
  return <><BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Primary & Junior School', path: '/academics/primary-junior' }]} /><SchoolContentPage content={content.primary} /></>
}
