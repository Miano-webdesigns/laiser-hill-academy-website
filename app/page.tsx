import HomePage from '@/components/home-page'
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  path: '/',
  title: 'Laiser Hill Academy | Private School in Ongata Rongai, Kenya – CBC, IGCSE & A Level',
  description: 'Laiser Hill Academy in Ongata Rongai offers private CBC and CBE schooling, British IGCSE and A Level pathways, admissions, campus life and learner support.',
  absoluteTitle: true,
})

export default function Page() {
  return <HomePage />
}
