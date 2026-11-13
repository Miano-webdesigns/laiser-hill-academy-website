import './fees.css'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PrintFeesButton } from '@/components/print-fees-button'
import { createPageMetadata } from '@/lib/site'

export const metadata = createPageMetadata({
  path: '/admissions/fees',
  title: 'School Fees 2027 in Ongata Rongai',
  description: 'Laiser Hill Academy 2027 fees for kindergarten, CBC primary, CBE junior and senior school, KCSE, IGCSE and A Level, day and boarding, with payment details.',
})

const kindergartenPrimaryRows = [
  ['Play Group', 'Kshs 38,900.00', 'Not offered'],
  ['Pre-Primary 1 & Pre-Primary 2', 'Kshs 52,350.00', 'Not offered'],
  ['Grade 1, 2 & 3', 'Kshs 64,950.00', 'Not offered'],
  ['Grade 4, 5 & 6', 'Kshs 72,290.00', 'Kshs 99,750.00'],
  ['Grade 7 & 8 (Junior School)', 'Kshs 81,900.00', 'Kshs 115,500.00'],
]

const juniorSeniorRows = [
  ['Grade 9 (Junior School)', 'Kshs 96,000.00', 'Kshs 117,700.00'],
  ['Grade 10 (Senior School)', 'Kshs 96,000.00', 'Kshs 117,700.00'],
  ['Grade 11 (Senior School)', 'Kshs 98,000.00', 'Kshs 120,000.00'],
  ['Grade 12 (Senior School)', 'Not offered in 2027', 'Not offered in 2027'],
  ['Form 4 (KCSE, 8-4-4)', 'Kshs 113,020.00', 'Kshs 150,950.00'],
]

const internationalRows = [
  ['Year 8', 'Kshs 125,730.00', 'Kshs 159,800.00'],
  ['Year 9', 'Kshs 125,730.00', 'Kshs 159,800.00'],
  ['Year 10', 'Kshs 126,774.00', 'Kshs 164,021.00'],
  ['Year 11', 'Kshs 126,774.00', 'Kshs 164,021.00'],
  ['Year 12 & 13 (A Level)', 'Kshs 106,300.00', 'Kshs 155,000.00'],
]

const oneOffRows = [
  ['Admission fee (non-refundable)', 'Kshs 9,500.00', 'Once, at admission'],
  ['Equipment fee – Term 1 (January)', 'Kshs 7,500.00', 'Per term'],
  ['Equipment fee – Term 2 (May)', 'Kshs 3,500.00', 'Per term'],
  ['Equipment fee – Term 3 (September)', 'Kshs 3,500.00', 'Per term'],
]

const kindergartenAdditionalRows = [
  ['Student portal (all primary students)', 'Kshs 1,100.00 per term'],
  ['Medical fee (all boarders)', 'Kshs 3,500.00'],
  ['Art & Craft, Dance & Music (Play Group to Grade 6)', 'Kshs 3,500.00'],
  ['Cultural activity', 'Kshs 800.00'],
  ['School magazine', 'Kshs 640.00 per year'],
  ['Swimming', 'Included'],
  ['Lunch & exercise books', 'Included'],
  ['Transport from Laiser Hill Academy to Ongata Rongai & Kiserian', 'Included'],
  ['Chess, Robotics, Karate', 'Paid directly as per the service provider'],
]

const secondaryAdditionalRows = [
  ['Medical fee (all boarders)', 'Kshs 3,500.00'],
  ['Activity charges (County, Metropolitan & School)', 'Kshs 2,500.00'],
  ['School magazine', 'Kshs 640.00 per year'],
  ['Transport for day scholars from Laiser Hill Academy to Ongata Rongai & Kiserian', 'Included'],
  ['Chess, Robotics, Music', 'Paid directly as per the service provider'],
]

const paymentRows = [
  ['Credit Bank Ltd', 'Koinange Street, Nairobi', 'Laiser Hill Academy', '00210-0700-0068'],
  ['Kenya Commercial Bank (KCB)', 'Ongata Rongai', 'Laiser Hill Academy', '1104-459-833'],
  ['M-Pesa (KCB Paybill)', 'Business number 522123', 'Laiser Hill Academy', 'Account: 83947K followed by student name and class (e.g. 83947K + student name + class)'],
]

function FeeTable({
  caption,
  headers,
  rows,
}: {
  caption: string
  headers: string[]
  rows: string[][]
}) {
  return (
    <div className="fee-table-wrap" role="region" aria-label={caption} tabIndex={0}>
      <table>
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr>{headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td key={`${row[0]}-${index}`}>
                  {cell.startsWith('Not offered') ? <span aria-label={cell}>—</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const tocItems = [
  ['intro', 'Introduction'],
  ['kindergarten-primary', 'Kindergarten & Primary'],
  ['junior-senior', 'Junior & Senior (CBE and KCSE)'],
  ['international', 'International School'],
  ['one-off-charges', 'One-off & termly charges'],
  ['additional-charges', 'Additional charges'],
  ['include-exclude', 'What fees include / exclude'],
  ['how-to-pay', 'How to pay'],
  ['terms', 'Terms & conditions'],
]

export default function FeesPage() {
  return (
    <main className="content-page fees-page">
      <div className="utility"><div className="wide"><span>Learn with purpose. Lead with character.</span><span>Ongata Rongai · Nairobi, Kenya</span></div></div>
      <header className="main-header content-main-header">
        <div className="wide header-inner">
          <Link href="/" className="brand">
            <img className="crest-image" src="/images/lh/lha-logo.png" alt="Laiser Hill Academy crest" />
            <span><b>Laiser Hill Academy</b><em>To greater heights</em></span>
          </Link>
          <nav className="nav" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/admissions">Admissions</Link>
            <Link href="/admissions/fees" aria-current="page">Fees</Link>
            <Link className="nav-cta" href="/admissions">Enquire now <ArrowRight size={15} /></Link>
          </nav>
        </div>
      </header>
      <div className="content-backbar"><div className="wide"><Link href="/admissions" className="back-link">Back to admissions <ArrowRight size={15} /></Link></div></div>
      <section className="content-hero">
        <div className="wide">
          <span className="kicker purple">Admissions</span>
          <h1>School Fees 2027</h1>
          <div className="content-hero-rule" />
        </div>
      </section>

      <section className="fees-section">
        <div className="wide">
          <nav className="fees-toc" aria-label="School fees sections">
            <p className="fees-toc-title">On this page</p>
            <ul>{tocItems.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ul>
          </nav>
          <div className="fees-actions"><PrintFeesButton /></div>

          <section id="intro" className="fees-content-section">
            <h2>Introduction</h2>
            <p className="fees-lead">The fees below are effective from January 2027 and are payable per term unless stated otherwise. Fees are listed in Kenya Shillings (Kshs). Fees exclude any new taxes the government may introduce, such as VAT; all statutory payments and taxes will be additional.</p>
          </section>

          <section id="kindergarten-primary" className="fees-content-section">
            <h2>1. Kindergarten &amp; Primary School — tuition per term</h2>
            <FeeTable caption="Kindergarten and primary school tuition per term" headers={['Class', 'Day scholar', 'Boarder']} rows={kindergartenPrimaryRows} />
          </section>

          <section id="junior-senior" className="fees-content-section">
            <h2>2. Junior &amp; Senior School (CBE) and KCSE — tuition per term</h2>
            <FeeTable caption="Junior, senior school and KCSE tuition per term" headers={['Class', 'Day scholar', 'Boarder']} rows={juniorSeniorRows} />
          </section>

          <section id="international" className="fees-content-section">
            <h2>3. International School (British IGCSE / GCE A Level) — tuition per term</h2>
            <FeeTable caption="International school tuition per term" headers={['Year', 'Day scholar', 'Boarder']} rows={internationalRows} />
          </section>

          <section id="one-off-charges" className="fees-content-section">
            <h2>4. One-off &amp; termly charges</h2>
            <p className="fees-detail-label">Junior, Senior &amp; International secondary sections</p>
            <FeeTable caption="One-off and termly charges for secondary sections" headers={['Charge', 'Amount', 'When payable']} rows={oneOffRows} />
            <p className="fees-note">Note: All new students must pay the equipment fee of Kshs 7,500.00 on admission, regardless of the term they join.</p>
          </section>

          <section id="additional-charges" className="fees-content-section">
            <h2>5. Additional charges</h2>
            <h3 className="fee-subheading">Kindergarten &amp; Primary</h3>
            <FeeTable caption="Additional kindergarten and primary charges" headers={['Item', 'Amount']} rows={kindergartenAdditionalRows} />
            <h3 className="fee-subheading">Junior, Senior &amp; International</h3>
            <FeeTable caption="Additional junior, senior and international charges" headers={['Item', 'Amount']} rows={secondaryAdditionalRows} />
          </section>

          <section id="include-exclude" className="fees-content-section">
            <h2>6. What the fees include / exclude</h2>
            <ul className="fees-list">
              <li>Kindergarten &amp; Primary: lunch, exercise books, swimming and transport (Ongata Rongai &amp; Kiserian routes) are included. Textbooks are not included.</li>
              <li>Secondary boarders: tuition and boarding fees include full boarding, exercise books and textbooks for Form 1–4.</li>
              <li>Secondary day scholars: tuition fees include lunch, exercise books and textbooks for Form 1–4, and transport (Ongata Rongai &amp; Kiserian routes).</li>
              <li>Form 5 and 6 (A Level) students buy their own textbooks.</li>
              <li>The school does not provide medical cover for day scholars.</li>
              <li>The school may ask parents to bring children to a pick-up point.</li>
            </ul>
          </section>

          <section id="how-to-pay" className="fees-content-section">
            <h2>7. How to pay</h2>
            <div className="payment-notice" role="note">Laiser Hill Academy does not accept any cash on campus. Pay only into the accounts below and always obtain an official receipt.</div>
            <FeeTable caption="Official school bank and M-Pesa payment details" headers={['Payment channel', 'Branch / type', 'Account name', 'Account / reference']} rows={paymentRows} />
            <h3 className="fee-subheading">Payment instructions</h3>
            <ol className="fees-list">
              <li>Pay all fees due before the student reports to school.</li>
              <li>Pay by banker&apos;s cheque, cash deposit or M-Pesa into one of the school accounts above.</li>
              <li>Quote the student&apos;s name, class and admission number on every payment.</li>
              <li>Always obtain an official receipt. The school is not responsible for any money paid without an official receipt as proof of payment.</li>
              <li>The school does not accept any funds on campus.</li>
            </ol>
          </section>

          <section id="terms" className="fees-content-section">
            <h2>8. Terms &amp; conditions</h2>
            <ul className="fees-list">
              <li>The school reserves the right of admission in all cases, including for unpaid fees.</li>
              <li>Yearly fees for Grade 8 (final primary year), Form 4B (IGCSE), Form 4A (KCSE) and Form 6 must be paid within the first two terms of the year.</li>
              <li>Fees exclude any new taxes the government may introduce, such as VAT. All extra statutory payments and taxes will be additional to this fee structure.</li>
              <li>Fees are subject to review. For enquiries contact the school office: +254 734 323 218 / +254 728 601 575, admin@laiserhillacademy.education.</li>
            </ul>
          </section>
        </div>
      </section>
      <footer className="content-footer"><div className="wide"><span>© 2026 Laiser Hill Academy</span><Link href="/">Return home</Link></div></footer>

    </main>
  )
}
