import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/site'

export const metadata: Metadata = {
  ...createPageMetadata({
    path: '/cms',
    title: 'Content Studio',
    description: 'Laiser Hill Academy content studio for authorised website editors and staff in Ongata Rongai, Kenya, to manage published pages, school stories, events and media.',
  }),
  robots: { index: false, follow: false },
}

export default function CMSLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
