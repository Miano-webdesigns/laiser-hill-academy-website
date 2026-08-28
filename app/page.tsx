'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Menu, Phone, MessageCircle, X } from 'lucide-react'

const slides = [
  { src: '/school-assets/home/465138957_18332440999149567_6796621401731126664_n.webp', alt: 'Laiser Hill Academy learners gathered outdoors', label: 'A place to grow' },
  { src: '/school-assets/home/539995702_18367323235149567_1421307017551287941_n.webp', alt: 'Students learning together at Laiser Hill Academy', label: 'A place to discover' },
  { src: '/school-assets/home/548902128_18369546952149567_1458903912453298739_n.webp', alt: 'Laiser Hill Academy school life', label: 'A place to belong' },
  { src: '/school-assets/home/549327270_18369546850149567_2540998079113987613_n.webp', alt: 'Students taking part in school activities', label: 'A place to lead' },
  { src: '/school-assets/home/550689398_18369814741149567_3575902650579403349_n.webp', alt: 'Laiser Hill Academy campus experience', label: 'A place to thrive' },
]

const aboutLinks = ['Welcome', 'Our History', 'Vision, Mission & Values', 'School Leadership', 'Our Campus']
const pathwayImages = [
  { title: 'Kindergarten', detail: 'Playgroup, PP1 & PP2', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kindergaten%20school.webp-hMfUHY4Rr776Mp4Hudvb7FKz7VK5Mp.png', alt: 'Two young Laiser Hill learners in red school sweaters' },
  { title: 'Primary School', detail: 'Grades 1–6', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primary%20cover%20photo-jkjdGVd5YkRMfnAE2VqlXx7D9vpIJL.jpg', alt: 'Primary school learners studying together' },
  { title: 'Senior School', detail: 'CBE Grade 10–12', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/senior%20school%20cover%20photo-iC4t2MsPKuYMmlxXjMdkUKdduSHHNL.jpg', alt: 'Senior school learners in uniform' },
  { title: 'International School', detail: 'iGCSE & A Levels', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/igcse%20cover%20photo-PjdfEHUGyHkl2Rdel6WAlLLBx9mRn3.jpg', alt: 'International school learners in class' },
]

function Crest() { return <img className="crest-image" src="/images/lh/lha-logo.png" alt="Laiser Hill Academy crest" /> }
const socials = [
  { label: 'Facebook', href: 'https://facebook.com/laiserhillacademy', icon: 'https://cdn.simpleicons.org/facebook/1877F2' },
  { label: 'Instagram', href: 'https://instagram.com/laiserhillofficial?igsi=dTAxbmZrdWprYXZn', icon: 'https://cdn.simpleicons.org/instagram/E4405F' },
  { label: 'YouTube', href: 'https://youtube.com/@laiserhillacademy2743?si=-EQyk1oW830UliSL', icon: 'https://cdn.simpleicons.org/youtube/FF0000' },
  { label: 'TikTok', href: 'https://tiktok.com/@laiserhillacademy?_r=1&_t=ZS-997hDaGnvE7', icon: 'https://cdn.simpleicons.org/tiktok/000000' },
]
function SocialLinks() { return <div className="social-links" aria-label="Social media links">{socials.map((social) => <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} key={social.label}><img src={social.icon} alt="" aria-hidden="true" /></a>)}</div> }

function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <div className="utility"><div className="wide"><span>Learn with purpose. Lead with character.</span><span>Ongata Rongai · Nairobi, Kenya</span></div></div>
    <header className="main-header"><div className="wide header-inner">
      <Link href="/" className="brand"><Crest /><span><b>Laiser Hill Academy</b><em>To greater heights</em></span></Link>
      <div className="header-right"><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></div>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <div className="nav-dropdown"><button>About us</button><div className="dropdown-menu">{aboutLinks.map((link) => <a href={link === 'Our Campus' ? '#gallery' : `#${link.toLowerCase().replaceAll(' ', '-').replaceAll(',', '')}`} key={link}>{link}</a>)}</div></div>
        <div className="nav-dropdown"><button>Academics</button><div className="dropdown-menu"><a href="/academics/kindergarten">Kindergarten</a><a href="/academics/primary-junior">Primary &amp; Junior School</a><a href="/academics/senior-school">Senior School</a><a href="/academics/international-school">International School</a></div></div><div className="nav-dropdown"><button type="button">Admissions</button><div className="dropdown-menu"><Link href="/admissions" onClick={() => setOpen(false)}>Admissions</Link><Link href="/admissions/fees" onClick={() => setOpen(false)}>Fees</Link></div></div><a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        <a className="nav-service-link" href="https://lha.mzizi.co.ke/ISIMSLogin.aspx" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Student&apos;s Portal</a>
        <a className="nav-service-link" href="https://laiserhillacademy.moodlecloud.com/login/index.php" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Online Learning</a>
        <Link className="nav-cta" href="/admissions" onClick={() => setOpen(false)}>Enquire now <ArrowRight size={15} /></Link>
      </nav>
    </div></header>
  </>
}

function Hero() {
  const [active, setActive] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5200); return () => window.clearInterval(timer) }, [])
  return <section className="hero" id="home" aria-label="Welcome to Laiser Hill Academy">
    {slides.map((slide, index) => <img key={slide.src} className={index === active ? 'hero-slide active' : 'hero-slide'} src={slide.src} alt={slide.alt} />)}
    <div className="hero-shade" /><div className="wide hero-content"><span className="kicker light">Welcome to</span><h1>Laiser Hill<br />Academy</h1><p className="hero-motto">To greater Heights</p><p>Inspiring excellence, Nurturing potential</p><div className="hero-actions"><Link className="primary-button" href="/admissions">Enroll now <ArrowRight size={17} /></Link><a className="scroll-link" href="#gallery"><ArrowDown size={17} /> Explore school life</a></div></div>
    <div className="hero-controls"><button onClick={() => setActive((active - 1 + slides.length) % slides.length)} aria-label="Previous image"><ChevronLeft size={18} /></button><div className="slide-count"><b>0{active + 1}</b><span>/ 0{slides.length}</span></div><button onClick={() => setActive((active + 1) % slides.length)} aria-label="Next image"><ChevronRight size={18} /></button></div><div className="slide-caption">{slides[active].label}</div>
  </section>
}

function AboutSection() { return <section className="about-section" id="welcome"><div className="wide about-grid"><div className="section-intro"><span className="kicker purple"><h3>About us</h3></span><h2>Welcome to<br /><i>Laiser Hill Academy</i></h2><img className="about-feature-image" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/573168232_18377122177149567_461034509444162064_n.webp-RkoobUXezfDx7I4D87GDU7bK2HEui8.png" alt="Laiser Hill Academy students studying together" /><div className="rule" /></div><div className="about-copy"><p className="lead">Soaring To Greater Heights in Character, Intellect, and Leadership.</p><p>Laiser Hill Academy offers an extraordinary learning experience for young boys and girls on a peaceful, spacious campus just 20 km from Nairobi along the Nairobi–Magadi Highway.
Our school offers individualized teaching pedagogy provides an ideal platform for pupils to maximize on their potential in academics. An open and nurturing environment enables pupils to pursue and develop their interest and passion in their choice of co-curricular activities and hobbies.
With modern facilities in line with the 21st century educational demands Laiser Hill Academy is the best placed educational institution at an affordable price.

Laiser Hill Academy is essentially a listening school. At the heart of all school purpose is the pupil in our care. Our well-crafted, clearly defined safe and transparent school practices in the classroom, dormitories and the co-curricular activities ensure every pupil his/her space to develop and grow. At the core of all school programs is a fair, equitable, and purposeful feedback and evaluation geared to maximize every pupil’s potential and passion.

With an ethos of “to Greater heights” the school endeavours to add value to each individual pupil. With the mantra of “Success is a Habit” the pupils are trained to believe in themselves.</p></div></div></section> }

function Pathways() { return <section className="pathways" id="academics"><div className="wide"><div className="section-intro centered"><span className="kicker purple"><h2>Our academic pathways</h2></span><h5>Where global<br /><i>standards meet</i><br />local excellence.</h5></div><div className="pathway-grid">{pathwayImages.map((item, index) => <article key={item.title}><img src={item.src} alt={item.alt} /><div className="pathway-overlay"><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p><a href={item.title === 'Kindergarten' ? '/academics/kindergarten' : item.title === 'Primary School' ? '/academics/primary-junior' : item.title === 'Senior School' ? '/academics/senior-school' : '/academics/international-school'} aria-label={`Explore ${item.title}`}>Explore <ArrowRight size={15} /></a></div></article>)}</div></div></section> }
function Values() { return <section className="values-section" id="vision-mission"><div className="wide values-grid"><div><span className="kicker"><h3>Vision, mission & values</h3></span><h5>Vision, Mission<br /><i>& Values.</i></h5><p className="light-copy"><strong>Vision:</strong> Inspiring every learner to discover their potential and ascend to greater heights in a dynamic, global society.</p><p className="light-copy"><strong>Mission:</strong> To provide a serene, world-class learning environment that integrates diverse academic pathways—including Kenyan National and British International curricula—nurturing every student&apos;s unique talents, character, and intellect to prepare them for global success.</p><p className="light-copy">To cultivate academic rigor, creativity, and moral integrity through high-quality CBC, IGCSE, and A-Level programs, fostering well-rounded individuals in a safe, expansive, and supportive community.</p></div><div className="values-list"><h3 className="values-title">Our values</h3>{[['Excellence', 'Striving for quality in academics, sports and character.'], ['Diversity', 'Embracing local and international curricula for global readiness.'], ['Integrity', 'Building strong moral foundations for life.'], ['Innovation', 'Encouraging critical thinking and modern problem-solving.']].map(([title, text]) => <div className="value-row" key={title}><span className="value-dot" /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section> }
function GalleryPreview() { const [galleryIndex, setGalleryIndex] = useState(0); const gallerySlides = [...slides, ...pathwayImages].slice(0, 10); useEffect(() => { const timer = window.setInterval(() => setGalleryIndex((current) => (current + 1) % gallerySlides.length), 4200); return () => window.clearInterval(timer) }, [gallerySlides.length]); const gallerySlide = gallerySlides[galleryIndex]; return <section className="gallery-preview" id="gallery"><div className="wide"><div className="gallery-heading"><span className="kicker purple">Explore school life</span><h2>Explore school life</h2></div><div className="media-grid"><div className="media-window"><span className="media-label">Watch from the hill</span><iframe title="Laiser Hill Academy video" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2213705062405863%2F&show_text=0&width=560" width="460" height="315" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen /></div><div className="media-window gallery-window"><span className="media-label">Photo gallery</span><img className="gallery-slide" src={gallerySlide.src} alt={gallerySlide.alt} /><span className="gallery-count">0{galleryIndex + 1} / 10</span></div></div></div></section> }

export default function HomePage() { return <main><Header /><Hero /><AboutSection /><Pathways /><GalleryPreview /><Values /><section className="contact-strip" id="contact"><div className="wide contact-inner"><div><span className="kicker purple">Come and visit</span><h2>Ready to elevate<br />your child&apos;s<br />educational journey?</h2></div><div className="contact-details"><h2>Contact Us</h2><p><span className="contact-phone"><Phone size={17} /><a href="tel:+254734323218">+254 734 323 218</a><a className="whatsapp-link" href="https://wa.me/254734323218" target="_blank" rel="noreferrer" aria-label="WhatsApp +254 734 323 218"><MessageCircle size={18} /></a></span><span className="contact-phone"><Phone size={17} /><a href="tel:+254728601575">+254 728 601 575</a><a className="whatsapp-link" href="https://wa.me/254728601575" target="_blank" rel="noreferrer" aria-label="WhatsApp +254 728 601 575"><MessageCircle size={18} /></a></span>Nairobi–Magadi Highway, Ongata Rongai, Kajiado County, Kenya<br />admin@laiserhillacademy.education</p><a className="map-link" href="https://maps.app.goo.gl/B8zAkXqzRtqk4zUcA" target="_blank" rel="noreferrer"><span aria-hidden="true">●</span> View Laiser Hill Academy on Google Maps</a><a className="primary-button" href="mailto:admin@laiserhillacademy.education?subject=Campus%20Tour">Book a Campus Tour <ArrowRight size={16} /></a></div></div></section><footer><div className="wide footer-inner"><Link href="/" className="brand"><Crest /><span><b>Laiser Hill Academy</b><em>To greater heights</em></span></Link><SocialLinks /><p>Inspiring excellence, Nurturing potential.</p><span>© 2026 Laiser Hill Academy</span></div></footer></main> }
