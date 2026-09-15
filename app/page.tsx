/* eslint-disable @next/next/no-img-element */
import SiteHeader from "./components/site-header";
import { BAND_URL as bandUrl } from "./lib/site";

const quickActions = [
  {
    eyebrow: "Show up",
    title: "Volunteer",
    copy: "Find a way to help that fits your schedule, from one-hour shifts to take-home projects.",
    href: "#volunteer",
    action: "See opportunities",
  },
  {
    eyebrow: "Stay connected",
    title: "Join us on BAND",
    copy: "Get PTO announcements, reminders, conversations, and last-minute updates in one place.",
    href: bandUrl,
    action: "Open BAND",
    external: true,
  },
  {
    eyebrow: "Give your way",
    title: "Support students",
    copy: "Donate funds, supplies, time, or simply help share an upcoming PTO project.",
    href: "#donate",
    action: "Ways to give",
  },
];

const eventTracks = [
  {
    number: "01",
    label: "PTO meetings",
    title: "Help shape what comes next",
    copy: "Meeting dates, agendas, and attendance details will be posted here and shared through BAND.",
    status: "Schedule coming soon",
  },
  {
    number: "02",
    label: "School events",
    title: "Programs and performances",
    copy: "Find family events, student performances, and school programs supported by the PTO.",
    status: "Updates in BAND",
  },
  {
    number: "03",
    label: "Fundraising",
    title: "Fall Festival and auctions",
    copy: "Volunteer, contribute an item, sponsor an activity, or help make a signature event happen.",
    status: "Planning underway",
  },
];

const resourceGroups = [
  {
    title: "Title I family resources",
    copy: "Plain-language information that helps every family understand the program and take part in school decisions.",
    items: [
      "What Title I means for Clarkson",
      "Parent and Family Engagement Policy",
      "School-Parent Compact",
      "How families can provide input",
    ],
  },
  {
    title: "PTO transparency",
    copy: "A clear home for the records that help families and community partners understand how the PTO operates.",
    items: [
      "Bylaws and adopted policies",
      "Meeting minutes archive",
      "Annual budget and treasurer reports",
      "IRS determination and organization details",
    ],
  },
];

const faqItems = [
  {
    question: "Do I have to attend every PTO meeting?",
    answer:
      "No. Families can participate in whatever way works for them. Attend a meeting, claim a volunteer shift, help from home, donate supplies, or simply stay informed.",
  },
  {
    question: "Can I volunteer outside school hours?",
    answer:
      "Yes. The PTO needs help with events, gardening, classroom projects, donations, planning, and other tasks that can happen outside the school day.",
  },
  {
    question: "Where are announcements posted?",
    answer:
      "BAND is the PTO's primary communication space. Important public updates will also appear on this website so families can find them without signing in.",
  },
  {
    question: "Who can access the member area?",
    answer:
      "The planned member area will verify that a person belongs to the Clarkson PTO BAND group before granting access to member-only tools and records.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="topline">
        <div className="container topline-inner">
          <p>Clarkson Elementary School PTO · Home of the Redhawks</p>
          <a href={bandUrl} target="_blank" rel="noreferrer">
            BAND community <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Parents + teachers + community</p>
              <h1>
                One team.
                <br />
                <span>Every Redhawk.</span>
              </h1>
              <p className="hero-lede">
                The Clarkson PTO brings families and educators together to build programs, projects, and
                experiences that help every student soar.
              </p>
              <div className="button-row">
                <a className="button button-light" href="#volunteer">
                  Get involved <span aria-hidden="true">→</span>
                </a>
                <a className="button button-outline" href={bandUrl} target="_blank" rel="noreferrer">
                  Join the BAND group
                </a>
              </div>
            </div>

            <div className="hero-mascot-wrap">
              <div className="hero-stamp">
                <span>Home of the</span>
                <strong>Redhawks</strong>
              </div>
              <img className="hero-mascot" src="/redhawk.svg" width="272" height="186" alt="Redhawk mascot flying" fetchPriority="high" />
              <p className="mascot-caption">Clarkson, Kentucky · Est. 2010</p>
            </div>
          </div>
        </section>

        <section className="quick-actions" aria-label="Quick actions">
          <div className="container quick-grid">
            {quickActions.map((item) => (
              <a
                className="quick-card"
                href={item.href}
                key={item.title}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <span className="eyebrow">{item.eyebrow}</span>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
                <strong>
                  {item.action} <span aria-hidden="true">→</span>
                </strong>
              </a>
            ))}
          </div>
        </section>

        <section className="section" id="events">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">What&apos;s happening</p>
                <h2>Events that bring us together</h2>
              </div>
              <p>
                Check BAND for the fastest updates. Confirmed public dates and volunteer links will appear
                here as they are announced.
              </p>
            </div>

            <div className="event-list">
              {eventTracks.map((event) => (
                <article className="event-row" key={event.number}>
                  <span className="event-number">{event.number}</span>
                  <div className="event-name">
                    <span className="eyebrow">{event.label}</span>
                    <h3>{event.title}</h3>
                  </div>
                  <p>{event.copy}</p>
                  <span className="status-pill">{event.status}</span>
                </article>
              ))}
            </div>

            <div className="section-actions">
              <a className="text-link" href={bandUrl} target="_blank" rel="noreferrer">
                View current updates in BAND <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="volunteer">
          <div className="container involvement-grid">
            <div className="involvement-copy">
              <p className="eyebrow eyebrow-light">Get involved</p>
              <h2>A little help makes a big difference.</h2>
              <p>
                You do not need an open calendar or special experience to support Clarkson students. Pick
                the kind of contribution that works for your family.
              </p>
              <a className="button button-red" href={bandUrl} target="_blank" rel="noreferrer">
                Ask about current needs <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="ways-grid">
              <article>
                <span>During school</span>
                <h3>Support classrooms</h3>
                <p>Assist teachers, students, and staff when volunteers are needed during the school day.</p>
              </article>
              <article>
                <span>On your schedule</span>
                <h3>Help from home</h3>
                <p>Prepare classroom materials, donate supplies, or help organize an upcoming project.</p>
              </article>
              <article>
                <span>Build community</span>
                <h3>Join an event team</h3>
                <p>Pitch in with the Fall Festival, auctions, performances, gardening, and family events.</p>
              </article>
              <article>
                <span>Share your strengths</span>
                <h3>Serve on a committee</h3>
                <p>Bring your skills, local connections, or fresh ideas to a focused PTO project.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="announcements">
          <div className="container announcements-layout">
            <div className="section-heading">
              <p className="eyebrow">Redhawk report</p>
              <h2>Announcements</h2>
              <p>Short, useful updates for Clarkson families. BAND remains the source for real-time notices.</p>
            </div>
            <div className="announcement-card feature-announcement">
              <span className="announcement-tag">Welcome</span>
              <p className="announcement-date">2026-27 school year</p>
              <h3>A new PTO home is taking flight.</h3>
              <p>
                This website is being prepared as a single place to find events, volunteer opportunities,
                family resources, and PTO records. Watch BAND for launch updates.
              </p>
              <a href={bandUrl} target="_blank" rel="noreferrer">
                Open BAND <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="announcement-card quiet-announcement">
              <span className="announcement-tag">Volunteer program</span>
              <h3>There is a place for every kind of helper.</h3>
              <p>
                Contact school secretary and bookkeeper Paula Walters to ask about volunteering during the
                school day.
              </p>
              <a href="mailto:paula.walters@grayson.kyschools.us">Email Paula Walters</a>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="resources">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Resources and records</p>
                <h2>Information families can actually find</h2>
              </div>
              <p>
                Official school documents will be posted with their school year and revision date once they
                are provided by Clarkson Elementary or Grayson County Schools.
              </p>
            </div>

            <div className="resource-grid">
              {resourceGroups.map((group) => (
                <article className="resource-card" key={group.title}>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.copy}</p>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        <span>{item}</span>
                        <small>Coming soon</small>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section impact-section" id="donate">
          <div className="container impact-grid">
            <div>
              <p className="eyebrow">Support every Redhawk</p>
              <h2>Giving is bigger than a donate button.</h2>
            </div>
            <div className="impact-options">
              <article>
                <strong>01</strong>
                <h3>Give a little</h3>
                <p>Small-dollar gifts can help fund classroom needs, programs, and student experiences.</p>
              </article>
              <article>
                <strong>02</strong>
                <h3>Give an item</h3>
                <p>Contribute requested supplies, auction items, or materials from a published wish list.</p>
              </article>
              <article>
                <strong>03</strong>
                <h3>Give an hour</h3>
                <p>Volunteer time is valuable, whether it happens at school, at an event, or from home.</p>
              </article>
            </div>
            <div className="impact-note">
              <p>
                <strong>Online giving is coming soon.</strong> A nonprofit-focused donation form will be
                added after the PTO selects and verifies its fundraising account.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-red spirit-section" id="spirit-wear">
          <div className="container spirit-grid">
            <img src="/redhawk.svg" width="272" height="186" alt="" loading="lazy" />
            <div>
              <p className="eyebrow eyebrow-light">Wear the red</p>
              <h2>Redhawk spirit wear</h2>
              <p>
                A future online shop can make it simple to support Clarkson and show school pride without
                requiring the PTO to hold inventory.
              </p>
              <span className="button button-outline button-disabled">Store coming soon</span>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container about-grid">
            <div className="section-heading">
              <p className="eyebrow">About the PTO</p>
              <h2>Families and educators, working as one.</h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                The Clarkson PTO unites parents and teachers to develop programs and projects that benefit
                the students of Clarkson Elementary.
              </p>
              <p>
                The PTO meets throughout the school year, helps plan programs and student performances, and
                organizes committees, the Fall Festival, auctions, and other school-community projects.
                Parents and caregivers are encouraged to join, attend meetings, volunteer, or contribute in
                whatever way they can.
              </p>
              <div className="fact-grid">
                <div><span>Organization</span><strong>Clarkson Elementary School PTO Inc.</strong></div>
                <div><span>Tax-exempt since</span><strong>February 2010</strong></div>
                <div><span>EIN</span><strong>27-0908487</strong></div>
                <div><span>Location</span><strong>Clarkson, Kentucky</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="leadership">
          <div className="container leadership-grid">
            <div>
              <p className="eyebrow">Leadership</p>
              <h2>Officers and board</h2>
              <p>
                The current officer roster and committee contacts will be published after confirmation by
                the PTO board.
              </p>
            </div>
            <div className="roster-placeholder">
              <span>2026-27 roster</span>
              <strong>Coming soon</strong>
              <p>President · Vice President · Secretary · Treasurer · Committee Chairs</p>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-layout">
            <div className="section-heading">
              <p className="eyebrow">Family FAQ</p>
              <h2>Start here.</h2>
              <p>If your question is not answered below, ask the PTO community in BAND.</p>
            </div>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow eyebrow-light">Stay connected</p>
              <h2>Never miss a Redhawk moment.</h2>
              <p>
                Join BAND for PTO conversation and updates, or contact the school about daytime volunteer
                opportunities.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={bandUrl} target="_blank" rel="noreferrer">
                Join the BAND group <span aria-hidden="true">↗</span>
              </a>
              <a className="contact-link" href="mailto:paula.walters@grayson.kyschools.us">
                <span>Volunteer contact</span>
                <strong>paula.walters@grayson.kyschools.us</strong>
              </a>
              <a className="contact-link" href="tel:+12702423061">
                <span>Clarkson Elementary</span>
                <strong>(270) 242-3061</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <nav className="mobile-action-bar" aria-label="Quick mobile actions">
        <a href="#volunteer"><strong>Volunteer</strong><span>Ways to help</span></a>
        <a href={bandUrl} target="_blank" rel="noreferrer"><strong>BAND</strong><span>Get updates</span></a>
        <a href="/members"><strong>Members</strong><span>Dashboard</span></a>
      </nav>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <img src="/redhawk.png" alt="" />
            <div><strong>Clarkson Elementary PTO</strong><span>One team. Every Redhawk.</span></div>
          </div>
          <div><span>Find us</span><p>310 Millerstown Street<br />Clarkson, KY 42726</p></div>
          <div><span>Explore</span><a href="#events">Events</a><a href="#resources">Family resources</a><a href="/members">Member area</a></div>
          <div><span>Connect</span><a href={bandUrl} target="_blank" rel="noreferrer">BAND community ↗</a><a href="mailto:paula.walters@grayson.kyschools.us">Volunteer contact</a></div>
        </div>
        <div className="container footer-bottom">
          <p>Clarkson Elementary School PTO Inc. · EIN 27-0908487</p>
          <p>Independent PTO supporting Clarkson Elementary students.</p>
        </div>
      </footer>
    </>
  );
}
