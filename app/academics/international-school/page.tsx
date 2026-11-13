import content from '@/data/school-content.json'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'
import { SchoolContentPage } from '@/components/school-content-page'
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  path: '/academics/international-school',
  title: 'International School – British IGCSE & A Level in Kenya',
  description: 'Laiser Hill Academy in Ongata Rongai offers IGCSE and A Level education in Kenya, with student support, campus life and admissions guidance for families.',
})

export default function InternationalSchoolPage() {
  return <><BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'International School', path: '/academics/international-school' }]} /><SchoolContentPage content={content.international} /></>
}
