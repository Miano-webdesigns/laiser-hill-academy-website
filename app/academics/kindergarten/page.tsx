import content from '@/data/school-content.json'
import { SchoolContentPage } from '@/components/school-content-page'
export default function KindergartenPage() { return <SchoolContentPage content={content.kindergarten} /> }
export const metadata = { title: 'Kindergarten | Laiser Hill Academy', description: 'Discover Kindergarten and Early Years learning at Laiser Hill Academy.' }
