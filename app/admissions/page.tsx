import content from '@/data/school-content.json'
import { SchoolContentPage } from '@/components/school-content-page'
export default function AdmissionsPage() { return <SchoolContentPage content={content.admission} backLabel="Back to home" /> }
export const metadata = { title: 'Admissions | Laiser Hill Academy', description: 'Admissions information for Laiser Hill Academy.' }
