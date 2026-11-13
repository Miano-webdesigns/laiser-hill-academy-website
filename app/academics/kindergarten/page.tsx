import content from '@/data/school-content.json'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'
import { SchoolContentPage } from '@/components/school-content-page'
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  path: '/academics/kindergarten',
  title: 'Kindergarten in Ongata Rongai (CBC, Ages 3–6)',
  description: 'Laiser Hill Academy in Ongata Rongai offers CBC kindergarten for ages 3–6, play-based early learning, caring teachers, and admissions guidance for families.',
})

export default function KindergartenPage() {
  return <><BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Kindergarten', path: '/academics/kindergarten' }]} /><SchoolContentPage content={content.kindergarten} /></>
}
