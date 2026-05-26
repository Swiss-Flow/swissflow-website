import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const routes = {
  home: "/",
  hotels: "/hotels-restaurants",
  smes: "/smes",
  contact: "/contact",
  legalNotice: "/legal-notice",
  privacyPolicy: "/privacy-policy",
  cookiePolicy: "/cookie-policy",
  termsOfUse: "/terms-of-use",
};

const hospitalityAutomations = [
  "Guest inquiry classification",
  "Automatic multilingual replies",
  "Booking and event request routing",
  "CRM contact and company creation",
  "Internal task creation for the team",
  "Follow-up reminders and weekly summaries",
];

const smeAutomations = [
  "Lead intake automation",
  "CRM updates and client records",
  "Email follow-up workflows",
  "Client onboarding tasks",
  "Administrative process automation",
  "Sales and operations reporting",
];

const packages = [
  {
    name: "Starter Automation",
    description:
      "For companies that want to automate their first repetitive workflows without changing their entire system.",
    items: ["1–2 core workflows", "CRM or email integration", "Basic reporting"],
  },
  {
    name: "Growth Automation",
    description:
      "For teams that receive more requests, need better follow-up and want cleaner operational control.",
    items: ["3–5 workflows", "CRM, email and task automation", "Weekly performance summary"],
  },
  {
    name: "Operations Automation",
    description:
      "For businesses that want a more complete automation layer across communication, CRM and internal operations.",
    items: ["End-to-end workflows", "Make, CRM and AI integration", "Continuous optimization"],
  },
];

const hospitalityProblems = [
  {
    title: "Guest requests arrive everywhere",
    text: "Email, website forms, restaurant requests and event inquiries often arrive without one clean operational flow.",
  },
  {
    title: "Replies take too much time",
    text: "Teams spend hours answering similar questions manually, often in multiple languages.",
  },
  {
    title: "Booking and event leads are not structured",
    text: "Important details are copied manually, follow-ups depend on memory and CRM data is often incomplete.",
  },
  {
    title: "Internal coordination is slow",
    text: "Reception, events, restaurant and management often need the same information, but it is not routed automatically.",
  },
];

const hospitalityPackages = [
  {
    name: "Hospitality Starter",
    description: "For hotels or restaurants that want to automate the first high-volume workflow.",
    items: ["1–2 automation workflows", "Email or form intake", "Basic routing and summary"],
  },
  {
    name: "Hospitality Growth",
    description: "For teams that manage more guest, restaurant or event requests every week.",
    items: ["3–5 automation workflows", "CRM and task integration", "Follow-up automation"],
  },
  {
    name: "Hospitality Operations",
    description:
      "For businesses that want a complete automation layer across guest communication and operations.",
    items: ["End-to-end automation system", "CRM, email, task and reporting workflows", "Monthly optimization"],
  },
];

const smeProblems = [
  {
    title: "Lead follow-up is inconsistent",
    text: "New opportunities are often handled manually, making it easy for valuable leads to lose momentum.",
  },
  {
    title: "CRM records are incomplete",
    text: "Contacts, companies, notes and tasks are not always updated with the same discipline across the team.",
  },
  {
    title: "Client onboarding is manual",
    text: "Documents, emails, reminders and internal steps often depend on manual coordination.",
  },
  {
    title: "Administrative work repeats daily",
    text: "Teams spend time copying information, preparing similar emails and creating recurring tasks by hand.",
  },
];

const smePackages = [
  {
    name: "Private Rollout",
    description: "For selected Swiss SMEs and fiduciaries interested in early automation development.",
    items: ["Workflow audit", "Automation opportunity map", "Early implementation planning"],
  },
  {
    name: "Professional Services",
    description: "For service firms that want cleaner lead management, follow-up and internal operations.",
    items: ["CRM workflow design", "Email and task automation", "Client process structure"],
  },
  {
    name: "Fiduciary Systems",
    description:
      "For fiduciaries and advisory firms where client requests, documents and deadlines need structure.",
    items: ["Client onboarding logic", "Document request flows", "Deadline and reminder workflows"],
  },
];

const legalDocuments = {
  [routes.legalNotice]: {
    eyebrow: "Legal",
    title: "Legal Notice",
    intro:
      "This legal notice provides information about the operator of this website and the use of the SwissFlow website.",
    updated: "Last updated: 19 May 2026",
    sections: [
      {
        heading: "Website operator",
        paragraphs: [
          "SwissFlow",
          "Legal operator: Marko Markovic",
          "Address: Viale Cassone, 6369 Pregassona - Lugano",
          "Email: info@swiss-flow.com",
        ],
      },
      {
        heading: "Responsible for website content",
        paragraphs: [
          "SwissFlow by Marko Markovic",
          "Email: info@swiss-flow.com",
        ],
      },
      {
        heading: "Purpose of the website",
        paragraphs: [
          "This website provides information about SwissFlow and its AI automation services for Swiss hotels, restaurants, SMEs, fiduciaries and professional service firms.",
          "The information published on this website is for general information purposes only and does not constitute a binding offer, technical advice, legal advice or financial advice.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "All content on this website, including texts, structure, design elements, concepts and visual presentation, is protected by applicable intellectual property laws unless otherwise stated.",
          "Any reproduction, distribution, modification or commercial use of website content requires prior written permission from SwissFlow or the relevant rights holder.",
        ],
      },
      {
        heading: "External links",
        paragraphs: [
          "This website may contain links to external websites. SwissFlow has no control over the content, availability or privacy practices of third-party websites and assumes no responsibility for them.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "SwissFlow makes reasonable efforts to keep the information on this website accurate and up to date. However, SwissFlow does not guarantee the completeness, accuracy, availability or uninterrupted operation of the website.",
          "To the extent permitted by Swiss law, SwissFlow excludes liability for direct or indirect damage arising from access to, use of or inability to use this website.",
        ],
      },
      {
        heading: "Applicable law",
        paragraphs: [
          "This website and its use are governed by Swiss substantive law. The competent courts at the registered office or domicile of the website operator shall have jurisdiction, subject to mandatory legal provisions.",
        ],
      },
    ],
  },
  [routes.privacyPolicy]: {
    eyebrow: "Data Protection",
    title: "Privacy Policy",
    intro:
      "This Privacy Policy explains how SwissFlow processes personal data in connection with this website and business inquiries, in accordance with Swiss data protection law.",
    updated: "Last updated: 26 May 2026",
    sections: [
      {
        heading: "Controller",
        paragraphs: [
          "The controller responsible for data processing in connection with this website is:",
          "SwissFlow",
          "Legal operator: Marko Markovic",
          "Address: Viale Cassone, 6963 Pregassona - Lugano",
          "Email: info@swiss-flow.com",
        ],
      },
      {
        heading: "Scope",
        paragraphs: [
          "This Privacy Policy applies to the SwissFlow website and to business inquiries sent to SwissFlow by email or through other direct contact channels.",
          "SwissFlow currently focuses on clients based in Switzerland and does not intentionally target individuals or companies outside Switzerland through this website.",
        ],
      },
      {
        heading: "Personal data we may process",
        paragraphs: [
          "SwissFlow may process personal data that you provide voluntarily when contacting us, including your name, company name, email address, phone number, role, industry, message content and information about your business processes.",
          "When you visit this website, technical data may be processed automatically, including IP address, browser type, device information, operating system, referring page, date and time of access and pages visited.",
          "If analytics, marketing or automation tools are activated in the future, additional usage data may be processed as described in this Privacy Policy and the Cookie Policy.",
        ],
      },
      {
        heading: "Purposes of processing",
        paragraphs: [
          "SwissFlow processes personal data to operate and secure the website, respond to inquiries, evaluate potential automation projects, communicate with prospective clients, prepare proposals, improve services and comply with legal obligations.",
          "SwissFlow processes only the personal data that is necessary and proportionate for these purposes.",
        ],
      },
      {
        heading: "Communication by email",
        paragraphs: [
          "If you contact SwissFlow by email, the information you provide will be used to handle your request and communicate with you.",
          "Email communication may not be fully secure. You should not send sensitive or confidential information by email unless appropriate security measures have been agreed.",
        ],
      },
      {
        heading: "Disclosure to service providers",
        paragraphs: [
          "SwissFlow may disclose personal data to technical service providers where this is necessary for website hosting, email communication, IT security, CRM management, automation workflows or administrative support.",
          "Service providers may process data only to the extent necessary for the relevant service and are expected to protect personal data appropriately.",
          "SwissFlow does not sell personal data.",
        ],
      },
      {
        heading: "International data transfers",
        paragraphs: [
          "Depending on the technical service providers used, personal data may be processed in Switzerland or abroad.",
          "If personal data is transferred to a country without adequate data protection, SwissFlow will take appropriate safeguards where required by Swiss law, such as contractual safeguards or other legally recognized mechanisms.",
        ],
      },
      {
        heading: "Cookies and similar technologies",
        paragraphs: [
          "This website may use technically necessary cookies and similar technologies required for the operation, security and functionality of the website.",
          "Analytics, marketing or tracking cookies will only be used if they are activated and described in the Cookie Policy.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "SwissFlow retains personal data only for as long as necessary for the purposes for which it was collected, for legitimate business interests, or as required by applicable legal retention obligations.",
          "Business inquiry data may be retained for follow-up, documentation and relationship management purposes unless deletion is requested and no overriding obligation or interest requires retention.",
        ],
      },
      {
        heading: "Data security",
        paragraphs: [
          "SwissFlow applies appropriate technical and organizational measures to protect personal data against unauthorized access, loss, misuse or alteration.",
          "No method of transmission or storage is completely secure. SwissFlow therefore cannot guarantee absolute security.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under Swiss data protection law, you may have the right to request information about personal data processed about you, request correction of inaccurate data, request deletion of data where applicable, object to certain processing activities and request data portability where the legal conditions are met.",
          "To exercise your rights, contact SwissFlow at info@swiss-flow.com.",
          "You may also contact the Federal Data Protection and Information Commissioner if you believe that your data protection rights have been violated.",
        ],
      },
      {
        heading: "Changes to this Privacy Policy",
        paragraphs: ["SwissFlow may update this Privacy Policy at any time. The version published on this website is the current version."],
      },
    ],
  },
  [routes.cookiePolicy]: {
    eyebrow: "Cookies",
    title: "Cookie Policy",
    intro: "This Cookie Policy explains how SwissFlow may use cookies and similar technologies on this website.",
    updated: "Last updated: 26 May 2026",
    sections: [
      {
        heading: "Current cookie use",
        paragraphs: [
          "SwissFlow currently uses only technically necessary cookies and similar technologies required for website operation, security and basic functionality.",
          "SwissFlow does not currently use analytics, advertising or marketing tracking cookies. If such tools are activated in the future, this Cookie Policy will be updated and appropriate cookie controls will be implemented where required.",
        ],
      },
      {
        heading: "What cookies are",
        paragraphs: [
          "Cookies are small text files stored on your device when you visit a website. Similar technologies may include local storage, pixels, tags or scripts.",
          "Cookies can be used to make a website function, improve security, remember preferences, analyse usage or support marketing activities.",
        ],
      },
      {
        heading: "Managing cookies",
        paragraphs: [
          "You can control or delete cookies through your browser settings. You can also configure your browser to block cookies.",
          "Blocking technically necessary cookies may affect the functionality of the website.",
        ],
      },
      {
        heading: "Changes to this Cookie Policy",
        paragraphs: ["SwissFlow may update this Cookie Policy if the website technology, service providers or cookie usage changes."],
      },
    ],
  },
  [routes.termsOfUse]: {
    eyebrow: "Terms",
    title: "Terms of Use",
    intro: "These Terms of Use govern access to and use of the SwissFlow website.",
    updated: "Last updated: 26 May 2026",
    sections: [
      {
        heading: "Website use",
        paragraphs: [
          "By accessing and using this website, you agree to these Terms of Use.",
          "If you do not agree with these Terms of Use, you should not use this website.",
        ],
      },
      {
        heading: "Informational purpose",
        paragraphs: [
          "The information on this website is provided for general informational purposes only.",
          "Nothing on this website constitutes a binding offer, legal advice, financial advice or a guarantee of specific business results.",
        ],
      },
      {
        heading: "Services and contracts",
        paragraphs: [
          "SwissFlow services are provided only on the basis of an individual written proposal, agreement or contract.",
          "A business relationship with SwissFlow is not created merely by visiting the website or sending an inquiry.",
        ],
      },
      {
        heading: "No guarantee of results",
        paragraphs: [
          "Automation results depend on the client’s existing tools, data quality, internal processes, cooperation and implementation scope.",
          "SwissFlow does not guarantee specific revenue increases, cost reductions or operational results unless expressly agreed in writing.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "The content, structure, design, texts, concepts and visual elements of this website are protected by intellectual property rights.",
          "You may not copy, reproduce, distribute, modify, publish or commercially exploit website content without prior written permission.",
        ],
      },
      {
        heading: "Applicable law and jurisdiction",
        paragraphs: [
          "These Terms of Use are governed by Swiss substantive law.",
          "The competent courts at the registered office or domicile of the website operator shall have jurisdiction, subject to mandatory legal provisions.",
        ],
      },
    ],
  },
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavLink({ href, children, currentPath, className }) {
  const active = href === currentPath || (href === routes.hotels && currentPath === "/about-us");

  function handleClick(event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <a href={href} className={cx(className, active && "active-link")} onClick={handleClick}>
      {children}
    </a>
  );
}

function useRoute() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onRouteChange = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onRouteChange);
    return () => window.removeEventListener("popstate", onRouteChange);
  }, []);

  return path;
}

function AppShell({ children }) {
  const currentPath = useRoute();

  return (
    <div className="appShell">
      <Navigation currentPath={currentPath} />
      <div className="page-transition" key={currentPath}>{children}</div>
      <Footer currentPath={currentPath} />
    </div>
  );
}

function Navigation({ currentPath }) {
  return (
    <nav className="navbar">
      <NavLink href={routes.home} className="logo logoImageLink" currentPath={currentPath}>
        <img src="/swissflow-logo.png" alt="SwissFlow" className="brandLogo" />
      </NavLink>
      <div className="navLinks">
        <NavLink href={routes.home} currentPath={currentPath}>Home</NavLink>
        <NavLink href={routes.hotels} currentPath={currentPath}>Hotels & Restaurants</NavLink>
        <NavLink href={routes.smes} currentPath={currentPath}>Swiss SMEs</NavLink>
        <NavLink href={routes.contact} currentPath={currentPath}>Contact</NavLink>
      </div>
    </nav>
  );
}

function Footer({ currentPath }) {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <NavLink href={routes.home} className="site-footer-logo" currentPath={currentPath}>SwissFlow</NavLink>
          <p>AI automation systems for Swiss hotels, restaurants and SMEs.</p>
        </div>
        <div className="site-footer-column">
          <h3>Solutions</h3>
          <NavLink href={routes.hotels} currentPath={currentPath}>Hotels & Restaurants</NavLink>
          <NavLink href={routes.smes} currentPath={currentPath}>Swiss SMEs</NavLink>
          <NavLink href={routes.contact} currentPath={currentPath}>Contact</NavLink>
        </div>
        <div className="site-footer-column">
          <h3>Legal</h3>
          <NavLink href={routes.legalNotice} currentPath={currentPath}>Legal Notice</NavLink>
          <NavLink href={routes.privacyPolicy} currentPath={currentPath}>Privacy Policy</NavLink>
          <NavLink href={routes.cookiePolicy} currentPath={currentPath}>Cookie Policy</NavLink>
          <NavLink href={routes.termsOfUse} currentPath={currentPath}>Terms of Use</NavLink>
        </div>
        <div className="site-footer-column">
          <h3>Contact</h3>
          <a href="mailto:info@swiss-flow.com">info@swiss-flow.com</a>
          <span>Switzerland</span>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>© {new Date().getFullYear()} SwissFlow. All rights reserved.</span>
        <span>Built for Swiss business operations.</span>
      </div>
    </footer>
  );
}

function HeroPanel({ steps }) {
  return (
    <aside className="heroPanel">
      <div className="panelHeader"><span></span><span></span><span></span></div>
      <div className="panelBody">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div className="flowItem">
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </div>
            {index < steps.length - 1 && <div className="flowArrow">↓</div>}
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
}

function HomePage({ currentPath }) {
  return (
    <>
      <section className="hero">
        <div className="heroContent">
          <span className="eyebrow">AI Automation for Swiss Businesses</span>
          <h1>We build automation systems for hotels, restaurants and Swiss SMEs.</h1>
          <p>
            SwissFlow connects your emails, CRM, calendar, tasks and AI tools into reliable workflows that reduce manual work and make your operations easier to control.
          </p>
          <div className="heroActions">
            <NavLink href={routes.contact} className="primaryButton" currentPath={currentPath}>Request Info</NavLink>
            <div className="secondaryActions">
              <NavLink href={routes.hotels} className="secondaryButton" currentPath={currentPath}>Explore solutions for your hotel/restaurant</NavLink>
              <NavLink href={routes.smes} className="secondaryButton" currentPath={currentPath}>Explore solutions for your SME</NavLink>
            </div>
          </div>
        </div>
        <HeroPanel
          steps={[
            { title: "New inquiry received", text: "Email, form or booking request enters the workflow." },
            { title: "AI classifies the request", text: "Intent, urgency, language and required action are identified." },
            { title: "CRM, task and reply prepared", text: "The team receives structured data and the next step is triggered." },
          ]}
        />
      </section>

      <section className="section">
        <div className="sectionHeader">
          <span className="eyebrow">Two clear business tracks</span>
          <h2>One automation partner. Two focused markets.</h2>
          <p>SwissFlow serves hospitality businesses and SMEs with separate workflows, separate logic and separate operational priorities.</p>
        </div>
        <div className="industryGrid">
          <article className="industryCard">
            <div className="cardLabel">Hotels & Restaurants</div>
            <h3>For guest communication and operational speed.</h3>
            <p>We help hotels and restaurants manage guest inquiries, booking requests, restaurant requests, event leads and internal team coordination.</p>
            <ul>{hospitalityAutomations.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article className="industryCard">
            <div className="cardLabel">Swiss SMEs</div>
            <h3>For lead management, admin work and CRM discipline.</h3>
            <p>We help small and medium-sized businesses reduce repetitive admin tasks, improve follow-up discipline and keep customer data structured.</p>
            <ul>{smeAutomations.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
      </section>

      <section className="problemSection">
        <div>
          <span className="eyebrow">The problem we solve</span>
          <h2>Manual work silently slows down your business.</h2>
        </div>
        <div className="problemGrid threeCards">
          <div><h3>Requests get lost</h3><p>Emails, forms and messages arrive from different channels without a clean process.</p></div>
          <div><h3>CRM data is incomplete</h3><p>Contacts, companies and follow-ups are often updated too late or not at all.</p></div>
          <div><h3>Teams repeat the same work</h3><p>Staff waste time copying data, writing similar replies and creating manual tasks.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <span className="eyebrow">How SwissFlow works</span>
          <h2>Your tools stay in place. We connect them intelligently.</h2>
          <p>We do not replace your business. We automate the repetitive parts around it.</p>
        </div>
        <div className="stepsGrid">
          {["Audit", "Design", "Build", "Optimize"].map((title, index) => (
            <div key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{[
                "We identify repetitive workflows, bottlenecks and missed opportunities.",
                "We define the automation logic, triggers, tools and required outputs.",
                "We create the workflows using tools such as CRM, email, calendar and Make.",
                "We monitor, improve and standardize the workflows over time.",
              ][index]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <span className="eyebrow">Automation packages</span>
          <h2>Simple packages. Serious implementation.</h2>
          <p>Start with one workflow or build a complete automation layer for your business.</p>
        </div>
        <div className="packageGrid">
          {packages.map((pack) => <PackageCard pack={pack} key={pack.name} />)}
        </div>
      </section>

      <CTA title="Let’s identify the workflows that cost your team the most time." text="Request a SwissFlow Automation Audit and we will map the first processes that can be automated in your business." currentPath={currentPath} />
    </>
  );
}

function VerticalPage({ type, currentPath }) {
  const isSme = type === "smes";
  const page = isSme
    ? {
        eyebrow: "Swiss SMEs & Fiduciaries",
        title: "Automation systems for Swiss SMEs — private rollout.",
        intro: "SwissFlow is currently expanding its automation systems for selected Swiss SMEs, fiduciaries and professional service firms. This vertical is being opened progressively through a private rollout.",
        primaryCta: "Discuss Early Access",
        panelSteps: [
          { title: "Business process reviewed", text: "Lead intake, CRM structure, client onboarding and repetitive admin work are mapped." },
          { title: "Automation opportunities identified", text: "We define which workflows can be automated first without disrupting existing operations." },
          { title: "Private rollout prepared", text: "Selected workflows are structured for early implementation and progressive optimization." },
        ],
        problemsEyebrow: "SME bottlenecks",
        problemsTitle: "Professional service firms lose time in repeated manual work.",
        problemsIntro: "SwissFlow is developing workflows for the operational problems that appear repeatedly inside Swiss SMEs and fiduciaries.",
        problems: smeProblems,
        automationEyebrow: "Private development",
        automationTitle: "A controlled rollout for selected SMEs, fiduciaries and professional service firms.",
        automationIntro: "This vertical is currently in structured development. The focus is on CRM discipline, client onboarding, follow-ups, reminders and administrative workflow automation.",
        automations: smeAutomations,
        packagesEyebrow: "SME rollout",
        packagesTitle: "A focused vertical, opened progressively.",
        packagesIntro: "SwissFlow is not opening this vertical broadly yet. The first phase is designed for selected companies with clear operational pain points.",
        packages: smePackages,
        ctaEyebrow: "Early access",
        ctaTitle: "Interested in SwissFlow for your SME or fiduciary firm?",
        ctaText: "Send us a short message with your company type, your current tools and the process you would like to automate first.",
      }
    : {
        eyebrow: "Hotels & Restaurants",
        title: "Automation systems for modern hospitality operations.",
        intro: "SwissFlow helps hotels, restaurants and event teams reduce repetitive work, structure incoming requests and improve response speed without replacing the tools they already use.",
        primaryCta: "Request Info",
        panelSteps: [
          { title: "Guest request received", text: "Email, form, restaurant or event inquiry enters the system." },
          { title: "SwissFlow classifies it", text: "Intent, language, urgency and business area are identified." },
          { title: "Team receives the next step", text: "CRM, task, draft reply or follow-up is prepared automatically." },
        ],
        problemsEyebrow: "Hospitality bottlenecks",
        problemsTitle: "The same operational problems repeat every day.",
        problemsIntro: "SwissFlow focuses on the repetitive work that slows down hotel and restaurant teams.",
        problems: hospitalityProblems,
        automationEyebrow: "SwissFlow Hospitality",
        automationTitle: "Automations designed for guest communication and internal coordination.",
        automationIntro: "We connect the operational flow around guest inquiries, restaurant requests, event leads, CRM records, internal tasks and follow-ups.",
        automations: hospitalityAutomations,
        packagesEyebrow: "Hospitality packages",
        packagesTitle: "Start with one workflow. Scale into a full operations layer.",
        packagesIntro: "Each package is designed to be practical, measurable and easy to standardize.",
        packages: hospitalityPackages,
        ctaEyebrow: "Hospitality automation",
        ctaTitle: "Let’s identify the first workflow your team should automate.",
        ctaText: "Send us a short message with your current process, your tools and the type of requests that take the most time.",
      };

  return (
    <>
      <section className="hero">
        <div className="heroContent">
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <div className="heroActions">
            <NavLink href={routes.contact} className="primaryButton" currentPath={currentPath}>{page.primaryCta}</NavLink>
          </div>
        </div>
        <HeroPanel steps={page.panelSteps} />
      </section>

      <section className="problemsSection">
        <div className="sectionHeader">
          <span className="eyebrow">{page.problemsEyebrow}</span>
          <h2>{page.problemsTitle}</h2>
          <p>{page.problemsIntro}</p>
        </div>
        <div className="problemGrid">
          {page.problems.map((problem, index) => (
            <article className="problemCard" key={problem.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="automationSection">
        <div className="automationCard">
          <div className="automationText">
            <span className="eyebrow">{page.automationEyebrow}</span>
            <h2>{page.automationTitle}</h2>
            <p>{page.automationIntro}</p>
          </div>
          <div className="automationGrid">
            {page.automations.map((automation) => <div className="automationItem" key={automation}>{automation}</div>)}
          </div>
        </div>
      </section>

      <section className="packagesSection">
        <div className="sectionHeader">
          <span className="eyebrow">{page.packagesEyebrow}</span>
          <h2>{page.packagesTitle}</h2>
          <p>{page.packagesIntro}</p>
        </div>
        <div className="packageGrid">
          {page.packages.map((pack) => <PackageCard pack={pack} key={pack.name} />)}
        </div>
      </section>

      <CTA eyebrow={page.ctaEyebrow} title={page.ctaTitle} text={page.ctaText} currentPath={currentPath} />
    </>
  );
}

function PackageCard({ pack }) {
  return (
    <article className="packageCard">
      <h3>{pack.name}</h3>
      <p>{pack.description}</p>
      <ul>{pack.items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  );
}

const emailLink = "mailto:info@swiss-flow.com?subject=Info%20request&body=Hello%20SwissFlow%2C%0A%0AI%20would%20like%20to%20receive%20more%20information%20about%20your%20automation%20services.%0A%0ACompany%3A%20%0AIndustry%3A%20%0ACurrent%20tools%3A%20%0AProcess%20to%20automate%3A%20%0A%0AKind%20regards%2C";

function ContactPage() {
  const problems = [
    { title: "Repetitive emails", text: "Your team answers the same type of messages every day instead of focusing on higher-value work." },
    { title: "Missed follow-ups", text: "Leads, guest requests and client opportunities are lost because follow-ups are not triggered automatically." },
    { title: "Manual CRM updates", text: "Contacts, companies, requests and activities are still copied manually into your CRM." },
    { title: "Unstructured requests", text: "Emails, forms and messages arrive from multiple channels without a clear operational workflow." },
    { title: "Internal task overload", text: "Teams spend too much time assigning tasks, forwarding information and coordinating manually." },
    { title: "Slow reporting", text: "Weekly summaries and operational overviews require too much manual preparation." },
  ];

  const automationAreas = [
    "Email and inquiry automation",
    "CRM and lead management",
    "Guest communication workflows",
    "Restaurant and event request routing",
    "Internal task creation",
    "Follow-up reminders",
    "Weekly operational summaries",
    "AI-supported request classification",
  ];

  return (
    <>
      <section className="hero">
        <div className="heroContent">
          <span className="eyebrow">Contact SwissFlow</span>
          <h1>Let’s clarify where automation can make your business faster.</h1>
          <p>SwissFlow helps hotels, restaurants and Swiss SMEs reduce repetitive work, improve response speed and connect their daily tools into reliable automated workflows.</p>
        </div>
        <aside className="contactPanel">
          <span className="panelLabel">Direct contact</span>
          <h2>Speak directly with SwissFlow.</h2>
          <p>Send us a short message with your business type, your current tools and the manual processes you would like to reduce.</p>
          <a href={emailLink} className="primaryButton">Email SwissFlow</a>
        </aside>
      </section>

      <section className="problemsSection">
        <div className="sectionHeader">
          <span className="eyebrow">Common problems</span>
          <h2>Do you recognize one of these situations?</h2>
          <p>These are the operational problems SwissFlow is built to solve through practical, reliable automation systems.</p>
        </div>
        <div className="problemGrid threeCards">
          {problems.map((problem, index) => (
            <article className="problemCard" key={problem.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{problem.title}</h3>
              <p>{problem.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="automationSection">
        <div className="automationCard">
          <div className="automationText">
            <span className="eyebrow">How SwissFlow helps</span>
            <h2>We connect your existing tools into a cleaner operational system.</h2>
            <p>SwissFlow focuses on the repetitive work around your business: incoming requests, CRM updates, follow-ups, internal tasks and operational summaries.</p>
          </div>
          <div className="automationGrid">
            {automationAreas.map((area) => <div className="automationItem" key={area}>{area}</div>)}
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <span className="eyebrow">Start simple</span>
        <h2>Write to us with the first process you want to automate.</h2>
        <p>A short message is enough: your industry, your current tools and the repetitive process that slows your team down.</p>
        <a href={emailLink} className="primaryButton">Contact SwissFlow</a>
      </section>
    </>
  );
}

function CTA({ eyebrow = "Ready to automate", title, text, currentPath }) {
  return (
    <section className="ctaSection">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
      <NavLink href={routes.contact} className="primaryButton" currentPath={currentPath}>Contact SwissFlow</NavLink>
    </section>
  );
}

function LegalPage({ document }) {
  return (
    <>
      <section className="legalHero">
        <span className="eyebrow">{document.eyebrow}</span>
        <h1>{document.title}</h1>
        <p>{document.intro}</p>
        <small>{document.updated}</small>
      </section>
      <section className="legalContent">
        {document.sections.map((section) => (
          <article className="legalSection" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </article>
        ))}
      </section>
    </>
  );
}

function App() {
  const currentPath = useRoute();

  const page = useMemo(() => {
    if (legalDocuments[currentPath]) return <LegalPage document={legalDocuments[currentPath]} />;
    if (currentPath === routes.smes) return <VerticalPage type="smes" currentPath={currentPath} />;
    if (currentPath === routes.hotels || currentPath === "/about-us") return <VerticalPage type="hotels" currentPath={currentPath} />;
    if (currentPath === routes.contact) return <ContactPage />;
    return <HomePage currentPath={currentPath} />;
  }, [currentPath]);

  return <AppShell>{page}</AppShell>;
}

createRoot(document.getElementById("root")).render(<App />);
