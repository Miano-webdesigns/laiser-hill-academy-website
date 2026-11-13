import content from '@/data/school-content.json'
import { SchoolContentPage } from '@/components/school-content-page'
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  path: '/admissions',
  title: 'Admissions in Ongata Rongai',
  description: 'Laiser Hill Academy in Ongata Rongai shares admissions steps, application guidance, campus visits and academic pathways for families considering our school.',
})

export default function AdmissionsPage() {
  return <SchoolContentPage content={content.admission} backLabel="Back to home" />
}
