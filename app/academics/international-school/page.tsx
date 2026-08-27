import content from '@/data/school-content.json'
import { SchoolContentPage } from '@/components/school-content-page'
export default function InternationalSchoolPage() { return <SchoolContentPage content={content.international} /> }
export const metadata = { title: 'International School | Laiser Hill Academy', description: 'Explore iGCSE and A Level learning at Laiser Hill Academy.' }
