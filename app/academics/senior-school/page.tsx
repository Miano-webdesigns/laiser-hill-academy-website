import content from '@/data/school-content.json'
import { BreadcrumbJsonLd } from '@/components/breadcrumb-json-ld'
import { SchoolContentPage } from '@/components/school-content-page'
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  path: '/academics/senior-school',
  title: 'Senior School (CBE, Grades 10–12) in Ongata Rongai',
  description: 'Laiser Hill Academy in Ongata Rongai offers CBE senior school for Grades 10–12, with academic pathways, learner support and admissions guidance for families.',
})

export default function SeniorSchoolPage() {
  return <><BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Senior School', path: '/academics/senior-school' }]} /><SchoolContentPage content={content.senior} /></>
}
