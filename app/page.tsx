import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  MapPin,
} from "lucide-react";
import ContactForm from "./contact-form";
import CapabilityStrip from "./capability-strip";
import ScenarioCarousel from "./scenario-carousel";
import ServiceExplorer from "./service-explorer";
import SiteMotion from "./site-motion";
import { absoluteUrl, siteConfig } from "./seo";

const practices = [
  {
    label: "Technology assurance",
    title: "IT Audit & Consultancy",
    description:
      "Get an independent view of the technology risks that matter, whether you are preparing for assurance, strengthening controls, or planning a major systems change.",
    outcome:
      "A risk-ranked view of control gaps, clear ownership, and a remediation roadmap your teams can act on.",
    tone: "technology",
    services: [
      {
        title: "IT general controls",
        copy: "Access, change, operations, backup, and recovery controls reviewed against the way your systems actually run.",
      },
      {
        title: "Cyber risk & access",
        copy: "Focused assessment of identity, privileged access, security governance, and practical control priorities.",
      },
      {
        title: "Systems & process assurance",
        copy: "Independent review across implementations, automated controls, interfaces, data flows, and technology-enabled processes.",
      },
      {
        title: "Controls consultancy",
        copy: "Control design, remediation planning, documentation, and readiness support that moves findings toward closure.",
      },
    ],
  },
  {
    label: "Finance assurance",
    title: "Audit, Accounting & Outsourcing",
    description:
      "Add dependable capacity to your finance function, improve the quality of reporting, and prepare records and controls for greater scrutiny.",
    outcome:
      "Reliable books, clearer reporting, stronger finance controls, and flexible support aligned to your operating rhythm.",
    tone: "finance",
    services: [
      {
        title: "Internal audit & controls",
        copy: "Risk-led reviews, control testing, process walkthroughs, and practical actions for management and governance teams.",
      },
      {
        title: "Accounting & bookkeeping",
        copy: "Day-to-day records, reconciliations, ledger oversight, and disciplined month-end support.",
      },
      {
        title: "Reporting & IFRS support",
        copy: "Management packs, financial statement preparation, technical accounting, and reporting-ready documentation.",
      },
      {
        title: "Finance function outsourcing",
        copy: "A flexible operating model for recurring finance processes, oversight, and decision-useful reporting.",
      },
    ],
  },
] as const;

const engagementSteps = [
  {
    title: "Frame the question",
    copy: "We define the decision you need to make, the risks in scope, and the evidence required before work starts.",
  },
  {
    title: "Follow the evidence",
    copy: "We work with the people, systems, records, and controls that shape the real operating picture.",
  },
  {
    title: "Make action clear",
    copy: "Findings are prioritised, owners are visible, and the handover focuses on what should happen next.",
  },
];

const faqs = [
  {
    question: "Can Accolyx support a defined project or an ongoing requirement?",
    answer:
      "Both. An engagement can be scoped around a specific review, reporting deadline, control issue, or systems change, or structured as recurring support for finance and assurance activities.",
  },
  {
    question: "Where does an IT audit engagement usually begin?",
    answer:
      "We begin with the business objective and the systems in scope, then agree the relevant risks, control areas, evidence, stakeholders, and reporting expectations before fieldwork starts.",
  },
  {
    question: "What can be included in accounting outsourcing?",
    answer:
      "Support can cover bookkeeping, reconciliations, ledger oversight, month-end close, management reporting, financial statement preparation, and agreed finance-process ownership.",
  },
  {
    question: "Do you help teams respond to existing audit findings?",
    answer:
      "Yes. We can help clarify root causes, improve control design, organise evidence, define practical actions, and prepare teams for follow-up review.",
  },
  {
    question: "What will we receive at the end of an engagement?",
    answer:
      "Deliverables are agreed in the brief and may include a findings report, risk-ranked action plan, control documentation, accounting schedules, reporting packs, or an operating handover for recurring work.",
  },
];

const organizationId = absoluteUrl("/#organization");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logoPath),
        width: 512,
        height: 512,
      },
      image: absoluteUrl(siteConfig.logoPath),
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      description: siteConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "ProfessionalService",
      "@id": absoluteUrl("/#professional-service"),
      name: siteConfig.name,
      url: siteConfig.url,
      image: absoluteUrl(siteConfig.logoPath),
      logo: absoluteUrl(siteConfig.logoPath),
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        ...siteConfig.address,
      },
      description: siteConfig.description,
      knowsAbout: siteConfig.keywords,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Accolyx services",
        itemListElement: siteConfig.services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.name,
            description: service.description,
            serviceType: service.name,
            provider: { "@id": organizationId },
          },
        })),
      },
    },
  ],
};

const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

export default function Home() {
  return (
    <main className="siteMain" id="main-content" tabIndex={-1}>
      <SiteMotion />
      <a className="skipLink" href="#hero-title">Skip to content</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataJson }}
      />

      <header className="siteHeader" aria-label="Main navigation">
        <div className="headerInner">
          <a className="brand" href="#main-content" aria-label="Accolyx home">
            <img
              className="brandLogo"
              src="/brand/accolyx-mark.svg"
              width="34"
              height="34"
              alt=""
              aria-hidden="true"
            />
            <span className="brandName" translate="no">accolyx</span>
          </a>

          <nav className="navLinks" aria-label="Page sections">
            <a href="#practices">Practices</a>
            <a href="#approach">How we work</a>
            <a href="#insights">When to call</a>
          </nav>

          <a className="headerCta" href="#contact">
            Discuss your priorities
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="heroGrid">
          <div className="heroContent reveal">
            <p className="kicker">Independent assurance for systems and finance</p>
            <h1
              id="hero-title"
              aria-label="Clarity across your systems and numbers."
            >
              <span aria-hidden="true">Clarity across your</span>
              <span aria-hidden="true">systems and numbers.</span>
            </h1>
            <p className="heroCopy">
              Accolyx brings technology assurance and finance expertise into one
              focused relationship—helping leaders understand risk, strengthen
              control, and keep essential work moving.
            </p>
            <div className="heroActions" aria-label="Primary actions">
              <a className="button buttonPrimary" href="#contact">
                Discuss your priorities
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </a>
              <a className="textLink" href="#practices">
                Explore both practices
                <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="heroVisual image-reveal">
            <Image
              src="/images/accolyx-assurance-collaboration-v2.png"
              alt="Advisers reviewing systems controls and financial reconciliation evidence together"
              fill
              priority
              sizes="(max-width: 900px) 100vw, (max-width: 1840px) 40vw, 760px"
            />
            <div className="heroVisualNote">
              <span>Built for scrutiny</span>
              <p>Evidence-led work. Clear reporting. Practical next steps.</p>
            </div>
          </div>
        </div>

        <div className="heroPracticeIndex" aria-label="Accolyx practice areas">
          <a href="#it-audit">
            <span>Technology assurance</span>
            <strong>IT Audit & Consultancy</strong>
          </a>
          <a href="#finance-outsourcing">
            <span>Finance assurance</span>
            <strong>Audit, Accounting & Outsourcing</strong>
          </a>
        </div>
      </section>

      <CapabilityStrip />

      <section className="chapter introChapter" aria-labelledby="practices-title">
        <div className="chapterHeading reveal">
          <p className="kicker">Two specialist practices</p>
          <h2 id="practices-title">
            One view of the controls behind a confident business.
          </h2>
        </div>
        <p className="chapterLead reveal">
          Technology risk and financial performance rarely sit in separate
          boxes. Accolyx gives both the depth they require while keeping the
          engagement, reporting, and next steps clear.
        </p>
      </section>

      <section
        className="practicesSection"
        id="practices"
        aria-label="Accolyx service practices"
      >
        <div className="practiceFramework">
          {practices.map((practice, index) => (
            <article
              className={`practiceField ${practice.tone}`}
              id={index === 0 ? "it-audit" : "finance-outsourcing"}
              key={practice.title}
            >
              <div className="practiceFieldTopline">
                <p>{practice.label}</p>
                <span>{index === 0 ? "Systems" : "Finance"}</span>
              </div>
              <div className="practiceFieldIntro">
                <h2>{practice.title}</h2>
                <p>{practice.description}</p>
              </div>
              <ul className="practiceFieldServices">
                {practice.services.map((service) => (
                  <li key={service.title}>{service.title}</li>
                ))}
              </ul>
              <div className="practiceFieldOutcome">
                <div>
                  <span>What this creates</span>
                  <p>{practice.outcome}</p>
                </div>
                <a
                  className="roundLink"
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                    `${practice.title} enquiry`,
                  )}`}
                  aria-label={`Enquire about ${practice.title}`}
                >
                  <ArrowUpRight aria-hidden="true" size={21} strokeWidth={1.8} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="chapter serviceChapter" aria-labelledby="service-explorer-title">
        <div className="serviceChapterHeading reveal">
          <p className="kicker">Explore the work</p>
          <h2 id="service-explorer-title">Specialist depth, without a complicated handoff.</h2>
          <p>
            Choose a practice, then open the area closest to the question in
            front of your team.
          </p>
        </div>
        <ServiceExplorer
          practices={practices.map((practice) => ({
            title: practice.title,
            tone: practice.tone,
            services: practice.services.map((service) => ({
              title: service.title,
              copy: service.copy,
            })),
          }))}
        />
      </section>

      <section className="chapter proofChapter" aria-labelledby="proof-title">
        <div className="sectionIntro reveal">
          <p className="kicker">What good support should change</p>
          <h2 id="proof-title">Useful work does more than identify the issue.</h2>
          <p>
            It gives leaders a dependable view of the exposure, a practical
            response, and information that can stand up to the next review.
          </p>
        </div>

        <div className="proofGrid">
          <article className="proofCard proofCardLarge">
            <div className="proofImage image-reveal">
              <Image
                src="/images/accolyx-audit-evidence-v2.png"
                alt="Audit evidence pack, control-testing records, and risk-priority matrix"
                fill
                sizes="(max-width: 760px) 100vw, 58vw"
              />
            </div>
            <div className="proofCopy">
              <Layers3 aria-hidden="true" size={24} strokeWidth={1.6} />
              <h3>Understand the exposure</h3>
              <p>
                Separate symptoms from root causes and see how risk moves
                across processes, people, systems, and reporting.
              </p>
            </div>
          </article>

          <article className="proofCard proofCardAction">
            <span className="proofMark" aria-hidden="true">A</span>
            <div>
              <h3>Move from finding to action</h3>
              <p>
                Prioritised recommendations connect the risk to a realistic
                owner, sequence, and next step.
              </p>
            </div>
          </article>

          <article className="proofCard proofCardReport">
            <span className="proofMark" aria-hidden="true">R</span>
            <div>
              <h3>Keep leadership informed</h3>
              <p>
                Clear reporting gives management and governance teams the
                right level of detail without burying the decision.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="scenarioBand" id="insights" aria-labelledby="scenario-title">
        <div className="chapter scenarioChapter">
          <div className="scenarioHeading reveal">
            <p className="kicker kickerLight">When Accolyx can help</p>
            <h2 id="scenario-title">Bring us in when the question is clear—or when it is not.</h2>
          </div>
          <ScenarioCarousel />
        </div>
      </section>

      <section className="chapter approachChapter" id="approach" aria-labelledby="approach-title">
        <div className="approachVisual image-reveal">
          <Image
            src="/images/accolyx-engagement-review-v2.png"
            alt="Advisers reviewing findings and agreeing practical next actions"
            fill
            sizes="(max-width: 820px) 100vw, 42vw"
          />
        </div>
        <div className="approachContent">
          <p className="kicker">A disciplined engagement</p>
          <h2 id="approach-title">Focused from the first question to the final handover.</h2>
          <div className="engagementSteps">
            {engagementSteps.map((step, index) => (
              <article className="reveal" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter faqChapter" aria-labelledby="faq-title">
        <div className="faqHeading reveal">
          <p className="kicker">Before we begin</p>
          <h2 id="faq-title">Common engagement questions.</h2>
        </div>
        <div className="faqList">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <span className="faqIcon" aria-hidden="true">+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contactBand" id="contact" aria-labelledby="contact-title">
        <div className="contactInner">
          <div className="contactCopy reveal">
            <p className="kicker kickerLight">Start with the pressure point</p>
            <h2 id="contact-title">Tell us what needs a clearer answer.</h2>
            <p>
              Share the issue, the timing, and what is at stake. We will come
              back with a sensible first step and the right shape of support.
            </p>
            <div className="contactDetails">
              <a className="emailLink" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={2} />
              </a>
              <address className="officeAddress">
                <MapPin aria-hidden="true" size={18} strokeWidth={2} />
                <span>
                  {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},
                  {" "}{siteConfig.address.postalCode}, England
                </span>
              </address>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="siteFooter">
        <div className="footerInner">
          <a className="brand brandFooter" href="#main-content" aria-label="Accolyx home">
            <img
              className="brandLogo"
              src="/brand/accolyx-mark.svg"
              width="34"
              height="34"
              alt=""
              aria-hidden="true"
            />
            <span className="brandName" translate="no">accolyx</span>
          </a>
          <p>IT Audit & Consultancy</p>
          <p>Audit, Accounting & Outsourcing</p>
          <p>© {new Date().getFullYear()} Accolyx.</p>
        </div>
      </footer>
    </main>
  );
}
