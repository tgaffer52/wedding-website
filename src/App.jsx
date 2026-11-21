import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, CalendarDays, MapPin, Menu, X, Flower2, Clock3, Mail, ExternalLink } from 'lucide-react';

const RSVP_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSezYCBCYcUhTpWTIDI7mlGx4uBW3DOWNSAmJ7aNA5JeBWXdrQ/viewform?usp=header';
const weddingDate = new Date('2027-06-12T16:00:00-06:00');

const stays = [
  { name: 'The Ramble Hotel', area: 'RiNo · Denver', image: '/images/ramble.jpg', href: 'https://www.theramblehotel.com' },
  { name: 'Populus Denver', area: 'Downtown · Denver', image: '/images/populus.jpg', href: 'https://populusdenver.com' },
  { name: 'The Acoma House', area: 'Golden Triangle · Denver', image: '/images/acoma.jpg', href: 'https://www.theacomahouse.com' },
];

const places = [
  { title: 'Denver Botanic Gardens', note: 'Our celebration’s setting is worth exploring on its own. Come early and give yourself 2–3 hours to wander the gardens.', image: '/images/gardens.jpg', tag: 'A little wonder, close to home' },
  { title: 'Denver Museum of Nature & Science', note: 'A must for Trevor and all things dinosaur. Farah’s favorite part? The gift shop, of course.', image: '/images/museum.jpg', tag: 'For the curious' },
  { title: 'Tattered Cover Bookstore', note: 'Recommended by Trevor’s dad, Tom. A snowy first visit made this cozy bookstore and café feel especially magical.', image: '/images/bookstore.jpg', tag: 'A cozy afternoon' },
  { title: 'Denver Art Museum', note: 'We love visiting art museums in every city. We’re hoping to make this one part of our Denver weekend.', image: '/images/art-museum.jpg', tag: 'A favorite kind of date' },
];

const faqs = [
  { question: 'How should I RSVP?', answer: <>Please RSVP individually using our online form by <strong>April 30, 2027</strong>.</> },
  { question: 'Can I bring a plus one?', answer: 'Due to venue limitations, we’re unable to accommodate guests who are not named in the invitation. Thank you for understanding.' },
  { question: 'What should I wear?', answer: 'Cocktail attire. Dress up, feel comfortable, and bring your garden-party best.' },
  { question: 'When will the schedule be available?', answer: 'We’re still putting the day’s timings together. We’ll share the event schedule closer to the celebration.' },
];

function Countdown() {
  const [remaining, setRemaining] = useState(() => Math.max(0, weddingDate.getTime() - Date.now()));
  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(Math.max(0, weddingDate.getTime() - Date.now())), 60_000);
    return () => window.clearInterval(timer);
  }, []);
  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
  return <div className="countdown" aria-label={`${days} days and ${hours} hours until the celebration`}><span className="countdown-number">{String(days).padStart(3, '0')}</span><span className="countdown-label">days until we celebrate</span><span className="countdown-divider"/><span className="countdown-number small-number">{String(hours).padStart(2, '0')}</span><span className="countdown-label">hours</span></div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [['The day', '#the-day'], ['Stay', '#stay'], ['Explore Denver', '#explore'], ['FAQs', '#faqs']];

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Farah and Trevor, home">F <span>&</span> T <i>✳</i></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-rsvp" href={RSVP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>RSVP <ArrowRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grain" />
          <div className="hero-inner">
            <p className="eyebrow light-eyebrow"><span/> A celebration of love <span/></p>
            <img className="hero-butterfly" src="/images/butterfly.png" alt="" />
            <h1>Farah <em>&</em><br/>Trevor</h1>
            <p className="hero-subtitle">invite you to a <span>secret garden party</span></p>
            <div className="hero-details"><span>June 12, 2027</span><b>✳</b><span>Denver, Colorado</span></div>
            <a className="hero-cta" href="#the-day">Discover the day <ArrowDown size={16}/></a>
          </div>
          <div className="hero-bottom-lace" aria-hidden="true" />
          <div className="hero-side-note">A little celebration, a lot of love <span>—</span> 2027</div>
        </section>

        <section className="welcome section-pad">
          <div className="welcome-photo-wrap"><img className="welcome-photo" src="/images/couple.jpg" alt="Farah and Trevor sharing a moment together" /><span className="photo-caption">The beginning of our next chapter</span></div>
          <div className="welcome-copy">
            <p className="eyebrow"><span/> With love, Farah & Trevor <span/></p>
            <h2>We’re already<br/><em>married.</em></h2>
            <p className="welcome-text">Dear friends and family, we’re so happy to share that we were officially married on December 1, 2025. Now, we can’t wait to celebrate with all of you.</p>
            <p className="welcome-text">Join us in Denver for an evening tucked among the gardens. It wouldn’t feel complete without you there.</p>
            <a className="text-link" href="#the-day">Come celebrate with us <ArrowRight size={16}/></a>
            <div className="little-flower" aria-hidden="true">✳</div>
          </div>
        </section>

        <section className="date-band" aria-label="Wedding date">
          <div className="date-band-content"><p className="eyebrow light-eyebrow">Save the date</p><p className="big-date">June <span>12</span>, 2027</p><p className="date-location">Saturday <i>✳</i> Denver, Colorado</p></div>
          <Countdown />
          <img src="/images/doily.png" alt="" className="date-doily" />
        </section>

        <section className="day-section section-pad" id="the-day">
          <div className="section-heading"><p className="eyebrow"><span/> The details <span/></p><h2>The day <em>of</em></h2><p>A garden in the city, an evening together, and all our favorite people in one place.</p></div>
          <div className="day-grid">
            <article className="day-card day-card-primary"><span className="card-ornament">01</span><CalendarDays className="card-icon" strokeWidth={1.35}/><p className="card-kicker">When</p><h3>June 12, 2027</h3><p>Saturday<br/>Event schedule to come</p></article>
            <article className="day-card"><span className="card-ornament">02</span><MapPin className="card-icon" strokeWidth={1.35}/><p className="card-kicker">Where</p><h3>Woodland Mosaic</h3><p>Denver Botanic Gardens<br/>1007 York St, Denver, CO 80206</p><a className="text-link" href="https://maps.google.com/?q=Denver+Botanic+Gardens+1007+York+St+Denver+CO+80206" target="_blank" rel="noreferrer">Find your way <ExternalLink size={14}/></a></article>
            <article className="day-card"><span className="card-ornament">03</span><Flower2 className="card-icon" strokeWidth={1.35}/><p className="card-kicker">What to wear</p><h3>Cocktail attire</h3><p>We’d love to see you dressed up for the occasion. Wear your best dress!</p></article>
          </div>
          <div className="schedule-note"><Clock3 size={18}/><span>We’re putting the finishing touches on the schedule. More details coming soon.</span></div>
        </section>

        <section className="travel-section" id="stay">
          <div className="travel-copy"><p className="eyebrow light-eyebrow"><span/> Your Denver weekend <span/></p><h2>Make a<br/><em>getaway</em> of it.</h2><p>We know a trip to Denver takes time and planning, and we’re so grateful you’re making the journey to celebrate with us. Here are a few places to stay while you’re in town.</p><a className="text-link text-link-light" href="#explore">See our Denver notes <ArrowDown size={15}/></a></div>
          <div className="stay-cards">{stays.map((stay, i) => <a className="stay-card" href={stay.href} target="_blank" rel="noreferrer" key={stay.name}><div className="stay-image"><img src={stay.image} alt={`${stay.name} in Denver`} /><span className="stay-number">0{i + 1}</span></div><div className="stay-info"><span>{stay.area}</span><h3>{stay.name}</h3><ArrowRight size={17}/></div></a>)}</div>
          <div className="travel-lace" aria-hidden="true" />
        </section>

        <section className="explore-section section-pad" id="explore">
          <div className="section-heading"><p className="eyebrow"><span/> Our little guide <span/></p><h2>While you’re <em>here</em></h2><p>Some of our favorite ways to spend a day in Denver.</p></div>
          <div className="places-grid">{places.map((place, i) => <article className={`place-card place-${i + 1}`} key={place.title}><div className="place-image"><img src={place.image} alt={place.title}/><span className="place-tag">{place.tag}</span></div><div className="place-copy"><span className="place-index">0{i + 1} / DENVER</span><h3>{place.title}</h3><p>{place.note}</p></div></article>)}</div>
        </section>

        <section className="rsvp-section" id="rsvp"><img className="rsvp-doily" src="/images/doily.png" alt=""/><div className="rsvp-content"><p className="eyebrow light-eyebrow">We saved you a place</p><h2>Will you <em>join us?</em></h2><p>Please let us know by April 30, 2027. We can’t wait to celebrate together.</p><a className="button-light" href={RSVP_URL} target="_blank" rel="noreferrer">RSVP here <ArrowRight size={17}/></a><span className="rsvp-date">JUNE 12 <i>✳</i> DENVER</span></div></section>

        <section className="faq-section section-pad" id="faqs">
          <div className="faq-heading"><p className="eyebrow"><span/> Good to know <span/></p><h2>A few <em>questions</em></h2><p>Something else on your mind? We’d love to hear from you.</p><a className="text-link" href="mailto:weddinggaffney@gmail.com">Send us a note <ArrowRight size={15}/></a></div>
          <div className="faq-list">{faqs.map((faq, i) => <article className={`faq-item ${openFaq === i ? 'faq-open' : ''}`} key={faq.question}><button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{faq.question}</span><b>{openFaq === i ? '−' : '+'}</b></button>{openFaq === i && <div className="faq-answer"><p>{faq.answer}</p>{i === 0 && <a href={RSVP_URL} target="_blank" rel="noreferrer">Open the RSVP form <ArrowRight size={14}/></a>}</div>}</article>)}</div>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-main"><a className="footer-mark" href="#home">F <i>✳</i> T</a><p>Can’t wait to see you<br/>in the garden.</p><a className="footer-email" href="mailto:weddinggaffney@gmail.com"><Mail size={15}/> weddinggaffney@gmail.com</a><a className="back-top" href="#home">Back to top ↑</a></div><div className="footer-bottom"><span>FARAH & TREVOR · JUNE 12, 2027</span><span>MADE WITH LOVE IN DENVER <i>✳</i></span></div></footer>
    </>
  );
}

export default App;
