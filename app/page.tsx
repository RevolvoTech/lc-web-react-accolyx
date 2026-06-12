import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Calculator,
  Check,
  FileCheck2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "./contact-form";

const services = [
  {
    number: "01",
    title: "Accounting",
    copy: "Keep the finance function accurate, current, and ready for decisions with disciplined accounting support.",
    details: ["Month-end close", "Ledger review", "Management reporting"],
    icon: Calculator,
  },
  {
    number: "02",
    title: "IFRS",
    copy: "Navigate complex reporting requirements with clear technical positions and well-prepared financial statements.",
    details: ["Technical accounting", "Disclosure support", "Statement preparation"],
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Advisory",
    copy: "Turn financial information into practical direction for cash flow, performance, controls, and growth.",
    details: ["Finance process review", "Cash flow visibility", "Decision support"],
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Internal Audit",
    copy: "Identify control gaps and strengthen governance through risk-led reviews with clear, usable recommendations.",
    details: ["Risk assessment", "Process testing", "Action plans"],
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "IT Audit & Cyber Security",
    copy: "Understand technology risk, validate key controls, and prioritise remediation without unnecessary complexity.",
    details: ["Access controls", "IT control review", "Cyber risk roadmap"],
    icon: LockKeyhole,
  },
];

const outcomes = [
  {
    number: "01",
    title: "Close with confidence",
    copy: "Reliable ledgers, reconciliations, and reporting routines that make month-end easier to manage.",
  },
  {
    number: "02",
    title: "Stay reporting-ready",
    copy: "Technical accounting and documentation prepared with standards, scrutiny, and deadlines in mind.",
  },
  {
    number: "03",
    title: "Act on what matters",
    copy: "Clear findings and prioritised recommendations your team can put into practice.",
  },
];

const approach = [
  {
    number: "01",
    title: "Define the brief",
    copy: "We clarify the objective, decision points, stakeholders, and delivery requirements before work begins.",
  },
  {
    number: "02",
    title: "Work with focus",
    copy: "The engagement stays centred on the evidence, controls, and outputs that matter to your business.",
  },
  {
    number: "03",
    title: "Hand over clearly",
    copy: "You receive practical deliverables, prioritised next steps, and a clear view of what needs attention.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader" aria-label="Main navigation">
        <div className="headerInner">
          <a className="brand" href="#top" aria-label="Accolyx home">
            <img
              className="brandLogo"
              src="/brand/accolyx-mark.svg"
              alt=""
              aria-hidden="true"
            />
            <span className="brandName">accolyx</span>
          </a>

          <nav className="navLinks" aria-label="Page sections">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="headerCta"
            href="mailto:info@accolyx.com?subject=Introductory%20conversation"
          >
            Start a conversation
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
          </a>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <Image
          className="heroImage"
          src="/images/finance-workspace.png"
          alt="Finance workspace with reporting dashboard, calculator, and documents"
          fill
          priority
          sizes="100vw"
        />
        <div className="heroShade" aria-hidden="true" />
        <div className="heroInner">
          <p className="eyebrow eyebrowLight">Accounting, audit & advisory</p>
          <h1 id="hero-title">
            Financial clarity
            <span> built for action.</span>
          </h1>
          <p className="heroCopy">
            Accolyx helps businesses strengthen accounting, reporting,
            controls, and technology risk with focused support shaped around
            the way they operate.
          </p>
          <div className="heroActions" aria-label="Primary actions">
            <a
              className="button buttonLight"
              href="mailto:info@accolyx.com?subject=Accounting%20and%20advisory%20enquiry"
            >
              Discuss your priorities
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
            </a>
            <a className="button buttonGhost" href="#services">
              Explore services
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
        <div className="heroFoot">
          <span>Finance</span>
          <span>Reporting</span>
          <span>Controls</span>
          <span>Technology risk</span>
        </div>
      </section>

      <section className="capabilityBar" aria-label="Core capabilities">
        <div className="capabilityInner">
          <p>Specialist support across</p>
          <ul>
            <li>Accounting</li>
            <li>IFRS</li>
            <li>Internal audit</li>
            <li>Cyber security</li>
          </ul>
        </div>
      </section>

      <section className="sectionShell outcomesSection" aria-labelledby="outcomes-title">
        <div className="sectionHeading">
          <div>
            <p className="eyebrow">The value</p>
            <h2 id="outcomes-title">Finance work that stands up to scrutiny.</h2>
          </div>
          <p className="sectionLead">
            The goal is not more complexity. It is dependable information,
            stronger control, and a clearer basis for the next decision.
          </p>
        </div>

        <div className="outcomeGrid">
          {outcomes.map((outcome) => (
            <article className="outcomeItem" key={outcome.title}>
              <span className="itemNumber">{outcome.number}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="servicesBand" id="services" aria-labelledby="services-title">
        <div className="sectionShell">
          <div className="sectionHeading servicesHeading">
            <div>
              <p className="eyebrow eyebrowLight">What we do</p>
              <h2 id="services-title">Specialist support, without the noise.</h2>
            </div>
            <p className="sectionLead">
              Engage Accolyx for focused assignments or ongoing support across
              finance, assurance, controls, and technology risk.
            </p>
          </div>

          <div className="serviceList">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="serviceRow" key={service.title}>
                  <div className="serviceIdentity">
                    <span className="serviceIcon" aria-hidden="true">
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <span className="itemNumber">{service.number}</span>
                  </div>
                  <div className="serviceCopy">
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                  </div>
                  <ul className="serviceDetails">
                    {service.details.map((detail) => (
                      <li key={detail}>
                        <Check aria-hidden="true" size={15} strokeWidth={2.2} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <a
                    className="serviceLink"
                    href={`mailto:info@accolyx.com?subject=${encodeURIComponent(
                      `${service.title} enquiry`,
                    )}`}
                    aria-label={`Enquire about ${service.title}`}
                  >
                    <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.8} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="sectionShell approachSection"
        id="approach"
        aria-labelledby="approach-title"
      >
        <div className="approachVisual">
          <Image
            src="/images/tax-readiness-placeholder.png"
            alt="Organised review documents, folders, calculator, and pen"
            fill
            loading="eager"
            sizes="(max-width: 800px) 100vw, 48vw"
          />
          <div className="imageCaption">
            <span>01</span>
            <p>Structured from brief to handover</p>
          </div>
        </div>

        <div className="approachContent">
          <p className="eyebrow">How we work</p>
          <h2 id="approach-title">
            Clear scope. Senior attention. Practical outputs.
          </h2>
          <p className="sectionLead">
            Every engagement is shaped around the outcome you need, with a
            straightforward process and deliverables your team can use.
          </p>

          <div className="approachList">
            {approach.map((step) => (
              <article key={step.title}>
                <span className="itemNumber">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contactBand" id="contact" aria-labelledby="contact-title">
        <div className="sectionShell contactSection">
          <div className="contactCopy">
            <p className="eyebrow eyebrowLight">Start a conversation</p>
            <h2 id="contact-title">Bring the challenge. Leave with a clear next step.</h2>
            <p>
              Tell us where the pressure is: accounting, reporting, controls,
              audit, or technology risk. We will start with the priorities.
            </p>
            <a href="mailto:info@accolyx.com" className="emailLink">
              info@accolyx.com
              <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
            </a>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <a className="brand brandFooter" href="#top" aria-label="Accolyx home">
            <img
              className="brandLogo"
              src="/brand/accolyx-mark.svg"
              alt=""
              aria-hidden="true"
            />
            <span className="brandName">accolyx</span>
          </a>
          <p>Accounting, audit, advisory, and technology risk.</p>
          <p>© {new Date().getFullYear()} Accolyx.</p>
        </div>
      </footer>
    </main>
  );
}
