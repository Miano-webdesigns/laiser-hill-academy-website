import content from '@/data/school-content.json'
import { SchoolContentPage } from '@/components/school-content-page'
export default function SeniorSchoolPage() { return <SchoolContentPage content={content.senior} /> }
export const metadata = { title: 'Senior School | Laiser Hill Academy', description: 'Learn about the Senior School pathway at Laiser Hill Academy.' }
