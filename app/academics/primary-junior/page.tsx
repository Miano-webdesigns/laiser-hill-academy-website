import content from '@/data/school-content.json'
import { SchoolContentPage } from '@/components/school-content-page'
export default function PrimaryJuniorPage() { return <SchoolContentPage content={content.primary} /> }
export const metadata = { title: 'Primary & Junior School | Laiser Hill Academy', description: 'Explore Primary and Junior School learning at Laiser Hill Academy.' }
