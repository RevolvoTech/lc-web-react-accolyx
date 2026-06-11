const services = [
  {
    title: "Accounting",
    copy: "Reliable accounting support for month-end close, reconciliations, ledgers, and management reporting.",
    details: ["Monthly close", "Ledger review", "Management reports"],
    image: "/images/bookkeeping-placeholder.png",
    alt: "Organized accounting ledger, documents, calculator, and pen on a desk",
  },
  {
    title: "IFRS",
    copy: "Technical accounting guidance, IFRS reporting support, and financial statement preparation.",
    details: ["Technical positions", "Disclosure support", "Statement preparation"],
    image: "/images/reporting-placeholder.png",
    alt: "Laptop with abstract finance dashboard charts on a clean workspace",
  },
  {
    title: "Advisory",
    copy: "Practical advice for finance operations, reporting discipline, controls, and performance decisions.",
    details: ["Finance process review", "Cashflow visibility", "Decision support"],
    image: "/images/finance-workspace.png",
    alt: "Finance workspace with laptop dashboard, calculator, reports, and notebook",
  },
  {
    title: "Internal Audit",
    copy: "Risk-based reviews of processes, governance, and controls with clear recommendations for improvement.",
    details: ["Risk assessment", "Process testing", "Action plans"],
    image: "/images/tax-readiness-placeholder.png",
    alt: "Organized review documents, folders, calculator, and pen on a light desk",
  },
  {
    title: "IT Audits and Cyber Security",
    copy: "IT audit readiness, cyber risk reviews, access control checks, and practical remediation planning.",
    details: ["Access controls", "IT control review", "Cyber risk roadmap"],
    image: "/images/it-cyber-placeholder.png",
    alt: "Finance technology workspace representing IT audit and cyber security services",
  },
];

const focusAreas = [
  "Accounting",
  "IFRS",
  "Internal audit",
  "Cyber security",
];

const approachPoints = [
  "Tailored scope",
  "Standards-led work",
  "Practical recommendations",
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Accolyx home">
          <span className="brandMark" aria-hidden="true">
            <span className="brandSlash" />
            <span className="brandDot" />
          </span>
          <span className="brandName">accolyx</span>
        </a>
        <nav className="navLinks" aria-label="Page sections">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroInner">
          <p className="eyebrow">Accounting and advisory services</p>
          <h1>Clear numbers. Better decisions.</h1>
          <p className="heroCopy">
            Accolyx supports businesses with accounting, IFRS, advisory,
            internal audit, and technology risk services shaped around their
            operating needs.
          </p>
          <div className="heroActions" aria-label="Primary actions">
            <a className="primaryAction" href="mailto:info@accolyx.com">
              Start a conversation
            </a>
            <a className="secondaryAction" href="#services">
              View services
            </a>
          </div>
          <ul className="focusList" aria-label="Focus areas">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="servicesSection" id="services" aria-labelledby="services-title">
        <div className="sectionIntro">
          <p className="eyebrow">Services</p>
          <h2 id="services-title">Focused support for finance, controls, and risk.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <img className="serviceImage" src={service.image} alt={service.alt} />
              <div className="serviceBody">
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
                <ul className="serviceDetails">
                  {service.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <div className="approachStrip" aria-label="Service approach">
          {approachPoints.map((point) => (
            <p key={point}>{point}</p>
          ))}
        </div>
      </section>

      <section className="contactSection" id="contact" aria-labelledby="contact-title">
        <div className="contactCopy">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Bring the books into focus.</h2>
          <p>
            Tell us where you need support. We will respond with a practical
            next step for accounting, reporting, audit, or technology risk work.
          </p>
        </div>
        <form className="contactForm" action="mailto:info@accolyx.com" method="post">
          <label>
            <span>Name</span>
            <input name="name" placeholder="Your name" />
          </label>
          <label>
            <span>Email</span>
            <input name="email" placeholder="name@company.com" type="email" />
          </label>
          <label>
            <span>What do you need?</span>
            <textarea
              name="message"
              placeholder="Tell us about the service, deadline, and current challenge."
              rows={4}
            />
          </label>
          <button className="primaryAction" type="submit">
            Send enquiry
          </button>
        </form>
      </section>
    </main>
  );
}
