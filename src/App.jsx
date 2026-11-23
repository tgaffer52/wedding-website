import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";

const RSVP_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSezYCBCYcUhTpWTIDI7mlGx4uBW3DOWNSAmJ7aNA5JeBWXdrQ/viewform?usp=header";
const weddingDate = new Date("2027-06-12T16:00:00-06:00");

const stays = [
  {
    name: "The Ramble Hotel",
    area: "RiNo · Denver",
    image: "/images/ramble.jpg",
    href: "https://www.theramblehotel.com",
  },
  {
    name: "Populus Denver",
    area: "Downtown · Denver",
    image: "/images/populus.jpg",
    href: "https://populusdenver.com",
  },
  {
    name: "The Acoma House",
    area: "Golden Triangle · Denver",
    image: "/images/acoma.jpg",
    href: "https://www.theacomahouse.com",
  },
];

const denverPlaces = [
  {
    title: "Denver Botanic Gardens",
    description:
      "Our wedding venue is accessible for our guests for the whole day, so you can take your time to explore the gardens before the event starts. We recommend that you come early to stroll around as it takes about 2–3 hours to explore everything in here.",
    image: "image33.jpeg",
    href: "https://www.botanicgardens.org/",
  },
  {
    title: "Denver Museum of Nature & Science",
    description:
      "Trevor is obsessed with all things dinosaurs, so this place is a must for him. The museum is spacious and full of information about the bones found in Colorado. Farah’s favorite part of this museum is of course, the gift shop.",
    image: "image32.jpeg",
    href: "https://www.dmns.org/",
  },
  {
    title: "Tattered Cover Bookstore, Colfax Avenue",
    description:
      "This bookstore was recommended by Trevor’s father, Tom. It was snowing the first time we were here and everything felt magical. There is also a cafe in here which makes this place extra cozy!",
    image: "image38.png",
    href: "https://www.tatteredcover.com/pages/location-hours",
  },
  {
    title: "Denver Art Museum",
    description:
      "We both love visiting art museums in every city that we visit. We have yet to visit this one unfortunately, so we are hoping that we could go prior our to secret party.",
    image: "image36.jpeg",
    href: "https://www.denverartmuseum.org/en/",
  },
];

function Countdown() {
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, weddingDate.getTime() - Date.now()),
  );
  useEffect(() => {
    const timer = window.setInterval(
      () => setRemaining(Math.max(0, weddingDate.getTime() - Date.now())),
      60_000,
    );
    return () => window.clearInterval(timer);
  }, []);
  const days = Math.floor(remaining / 86_400_000);
  const hours = Math.floor((remaining % 86_400_000) / 3_600_000);
  return (
    <div
      className="countdown"
      aria-label={`${days} days and ${hours} hours until the celebration`}
    >
      <span className="countdown-number">{String(days).padStart(3, "0")}</span>
      <span className="countdown-label">days until we celebrate</span>
      <span className="countdown-divider" />
      <span className="countdown-number small-number">
        {String(hours).padStart(2, "0")}
      </span>
      <span className="countdown-label">hours</span>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const updateHeader = () => {
      const hero = document.querySelector(".hero");
      const header = document.querySelector(".site-header");
      if (hero && header) {
        setScrolledPastHero(
          hero.getBoundingClientRect().bottom <= header.offsetHeight,
        );
      }
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);
    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ["The day", "#the-day"],
    ["Attire", "#attire"],
    ["Stay", "#stay"],
    ["Explore Denver", "#explore"],
    ["FAQs", "#faqs"],
  ];

  return (
    <>
      <header
        className={`site-header${scrolledPastHero ? " is-scrolled" : ""}`}
      >
        <a
          className="wordmark"
          href="#home"
          onClick={closeMenu}
          aria-label="Farah and Trevor, home"
        >
          F<span>&</span>T
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav
          className={menuOpen ? "main-nav is-open" : "main-nav"}
          aria-label="Main navigation"
        >
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a
            className="nav-rsvp"
            href={RSVP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            RSVP <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/videos/swaying-leaves.mp4" type="video/mp4" />
          </video>
          <div className="hero-grain" />
          <div className="hero-inner">
            <img
              className="hero-butterfly"
              src="/images/butterfly.png"
              alt="butterfly"
            />
            <h1>
              Farah <em className="serif">&</em> Trevor
            </h1>
            <p className="hero-subtitle">invite you to a secret garden party</p>
            <div className="hero-details">
              <span>June 12, 2027</span>
              <b>✳</b>
              <span>Denver, Colorado</span>
            </div>
          </div>
          <div className="hero-bottom-lace" aria-hidden="true" />
        </section>

        <section className="welcome section-pad">
          <div className="welcome-copy">
            <p className="welcome-text">
              Dear friends and family, we’re so happy to share that we were
              officially married on December 1, 2025. Now, we can’t wait to
              celebrate with all of you.
            </p>
            <p className="welcome-text">
              Join us in Denver for an evening tucked among the gardens. It
              wouldn’t feel complete without you there.
            </p>
            <div className="little-flower" aria-hidden="true">
              ✳
            </div>
          </div>
          <div className="welcome-photo-wrap">
            <img
              className="welcome-photo"
              src="/images/couple.jpg"
              alt="Farah and Trevor sharing a moment together"
            />
            <img
              className="welcome-photo-frame"
              src="/images/gold-frame.png"
              alt=""
              aria-hidden="true"
            />
          </div>
        </section>

        <div className="deck-pages">
        <section className="date-band" aria-label="Wedding date">
          <div className="date-band-content">
            <p className="eyebrow light-eyebrow">Save the date</p>
            <p className="big-date">June 12, 2027</p>
            <p className="date-location">
              Saturday <i>✳</i> Denver, Colorado
            </p>
          </div>
          <Countdown />
          <img src="/images/doily.png" alt="" className="date-doily" />
        </section>

        <section className="deck-slide deck-rsvp" id="rsvp">
          <img
            className="deck-rsvp-art"
            src="/images/deck/rsvp-doily.png"
            alt=""
          />
          <a
            href={RSVP_URL}
            target="_blank"
            rel="noreferrer"
            className="deck-rsvp-link text-center"
            aria-label="RSVP here"
          >
            <span>RSVP</span>
            <em>here</em>
          </a>
        </section>

        <section className="deck-slide deck-date-venue" id="the-day">
          <div className="deck-content">
            <div className="deck-date-group">
              <img
                className="deck-content-bug"
                src="/images/deck/image14.png"
                alt=""
              />
              <h2>Date</h2>
              <p className="!font-serif !italic">
                June 12<sup>th</sup> 2027
              </p>
            </div>
            <div className="deck-venue-group">
              <img
                className="deck-content-bug"
                src="/images/deck/image16.png"
                alt=""
              />
              <h2>Venue</h2>
              <p className="!font-serif !italic">
                Woodland Mosaic, Denver Botanic Gardens, 1007 York St, Denver,
                CO 80206, United States
              </p>
            </div>
            <div className="deck-schedule-group">
              <img
                className="deck-content-bug"
                src="/images/deck/image18.png"
                alt=""
              />
              <h2>Event Schedule</h2>
              <p>to be confirmed.</p>
            </div>
          </div>
        </section>

        <div className="deck-content deck-attire-divider" aria-hidden="true" />

        <section className="deck-slide deck-attire" id="attire">
          <div className="deck-content deck-attire-content">
            <div className="deck-attire-photos">
              <img src="/images/deck/image22.jpeg" alt="Cocktail attire inspiration" />
              <img src="/images/deck/image23.jpeg" alt="Cocktail attire inspiration" style={{ transform: "scaleX(-1)" }} />
            </div>
            <div className="deck-attire-copy">
              <img
                className="deck-content-bug deck-attire-snail"
                src="/images/deck/image20.png"
                alt=""
              />
              <h2>Attire</h2>
              <p>
                We invite you to celebrate with us in cocktail attire. Please
                wear your best dress!
              </p>
            </div>
          </div>
        </section>

        <section className="deck-slide deck-travel-guide" id="stay">
          <header className="deck-guide-intro">
            <img src="/images/deck/image24.png" alt="" />
            <h2>Details</h2>
            <p className="!italic">
              We know a trip to Denver requires considerable amount of planning,
              time, and money, especially for those of you coming from out of
              town. We are incredibly grateful that you could join us to celebrate
              our love. Below are some recommendations that may help with your
              travel plans.
            </p>
          </header>

          <section className="deck-guide-accommodations">
            <h2>ACCOMODATIONS</h2>
            <div className="deck-guide-hotels">
              {[
                ["image28.png", "image25.png", "The Ramble Hotel"],
                ["image29.png", "image26.png", "Populus Denver"],
                ["image30.png", "image27.png", "The Acoma House"],
              ].map(([photo, label, name]) => (
                <a
                  className="deck-guide-hotel"
                  href={stays.find((stay) => stay.name === name)?.href}
                  target="_blank"
                  rel="noreferrer"
                  key={name}
                >
                  <span className="deck-guide-hotel-art">
                    <span className="deck-guide-hotel-window">
                      <img
                        className="deck-guide-hotel-photo"
                        src={`/images/deck/${photo}`}
                        alt={name}
                      />
                    </span>
                    <img
                      className="deck-guide-hotel-frame"
                      src="/images/deck/image31.png"
                      alt=""
                    />
                  </span>
                  <img
                    className="deck-guide-hotel-label"
                    src={`/images/deck/${label}`}
                    alt={name}
                  />
                </a>
              ))}
            </div>
          </section>

          <section className="deck-guide-things" id="explore">
            <h2>THINGS TO DO AND SEE</h2>
            <div className="deck-guide-places">
              {denverPlaces.map((place) => (
                <article className="deck-guide-place" key={place.title}>
                  <div className="deck-guide-place-media cursor-pointer">
                    <img src={`/images/deck/${place.image}`} alt={place.title} />
                    <a
                      className="deck-guide-learn"
                      href={place.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Learn more
                    </a>
                  </div>
                  <div className="deck-guide-place-copy">
                    <h3>{place.title}</h3>
                    <p>{place.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="deck-slide deck-questions" id="faqs">
          <div className="deck-question-content">
            <h2>QUESTIONS AND ANSWERS</h2>
            <div className="deck-question-list">
              <article>
                <h3>How should I RSVP?</h3>
                <p>
                  Please RSVP on our online form by April 30th 2027. Kindly RSVP
                  individually through the form below:
                </p>
                <a
                  className="deck-question-rsvp"
                  href={RSVP_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  RSVP HERE
                </a>
              </article>
              <article>
                <h3>Can I bring a plus one?</h3>
                <p>
                  Due to venue limitations, we are regrettably unable to
                  accommodate additional guests not named in the invitations.
                  Thank you so much for understanding.
                </p>
              </article>
              <article>
                <h3>have other questions?</h3>
                <p>
                  Please do not hesitate to contact us at{" "}
                  <a href="mailto:weddinggaffney@gmail.com">
                    weddinggaffney@gmail.com
                  </a>{" "}
                  for any other questions you may have.
                </p>
              </article>
            </div>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}

export default App;
