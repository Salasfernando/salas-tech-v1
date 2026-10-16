import {
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Linkedin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const services = [
  {
    index: "01",
    title: "Institutional websites",
    copy: "Clear, responsive websites that present your business, build trust and make the next step easy.",
  },
  {
    index: "02",
    title: "Web products",
    copy: "Applications and digital experiences shaped around the people who use them and the goals they support.",
  },
  {
    index: "03",
    title: "Systems & operations",
    copy: "Tools, dashboards and workflows that organize information and support day-to-day decisions.",
  },
  {
    index: "04",
    title: "Automation",
    copy: "Processes and integrations that reduce repetitive work and connect business steps more consistently.",
  },
];

const projects = [
  {
    index: "01",
    title: "Lounge Odontologia",
    meta: "Healthcare / Experience",
    href: "https://www.loungeodontologia.com.br",
    image: "/assets/lounge-odontologia-preview.webp",
    alt: "Public preview of Lounge Odontologia website",
  },
  {
    index: "02",
    title: "E-Tron Energy",
    meta: "Energy / Institutional",
    href: "https://etron-energy.vercel.app",
    image: "/assets/etron-energy_f8d34623.webp",
    alt: "Preview of E-Tron Energy website",
  },
  {
    index: "03",
    title: "Unovitta Odontologia",
    meta: "Healthcare / Institutional",
    href: "https://www.unovitta.com.br",
    image: "/assets/unovitta-preview.webp",
    alt: "Preview of Unovitta Odontologia website",
  },
  {
    index: "04",
    title: "NOC Odontologia",
    meta: "Healthcare / Institutional",
    href: "https://noc-odontologia.vercel.app",
    image: "/assets/noc-odontologia-preview.webp",
    alt: "Preview of NOC Odontologia website",
  },
  {
    index: "05",
    title: "E-Tron Monitoring",
    meta: "Energy / Product",
    href: "https://etron-monitoramento.vercel.app/monitoramento",
    image: "/assets/etron-monitoramento_b5650d38.webp",
    alt: "Preview of E-Tron Monitoring product",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL + Prisma",
  "Automation + AI workflows",
];

export default function EnglishHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Salas Tech",
    description:
      "Full Stack development and automation for websites, web products, systems and operations.",
    url: `${siteUrl}/en`,
    email: CONTACT_EMAIL,
    telephone: "+55 61 98103-3420",
    sameAs: [
      "https://github.com/Salasfernando",
      "https://www.linkedin.com/in/salas-fernando",
      "https://www.instagram.com/salas_tech",
    ],
  };
  return (
    <>
      <SeoHead
        title="Salas Tech — Full Stack & Automation"
        description="Institutional websites, web products, systems and automation for businesses. Explore Salas Tech services and selected work."
        path="/en"
        jsonLd={jsonLd}
      />
      <div className="site-shell">
        <aside className="side-rail">
          <Link href="/en" className="rail-logo" aria-label="Salas Tech home">
            <img
              className="official-mark official-mark--small"
              src="/assets/Logo%20Salas%20Tech.png"
              alt="Salas Tech official logo"
            />
          </Link>
          <div className="rail-line" />
          <span className="rail-caption">
            FULL STACK
            <br />
            &amp; AUTO
          </span>
          <div className="rail-socials">
            <a
              href="https://github.com/Salasfernando"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/salas-fernando"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/salas_tech"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>
          </div>
        </aside>
        <main>
          <header className="topbar">
            <BrandLockup href="/en" className="topbar-brand" />
            <nav className="desktop-nav" aria-label="Main navigation">
              <a href="#services-en">
                Services <span>01</span>
              </a>
              <a href="#work-en">
                Selected work <span>02</span>
              </a>
              <a href="#about-en">
                About <span>03</span>
              </a>
              <Link href="/en/curriculo">
                Résumé <span>↗</span>
              </Link>
              <Link href="/">
                PT <span>↗</span>
              </Link>
            </nav>
            <button
              className="menu-button"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-en"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </header>
          <nav
            id="mobile-nav-en"
            className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
            aria-label="Mobile navigation"
          >
            <a href="#services-en" onClick={closeMenu}>
              Services
            </a>
            <a href="#work-en" onClick={closeMenu}>
              Selected work
            </a>
            <a href="#about-en" onClick={closeMenu}>
              About
            </a>
            <Link href="/en/curriculo" onClick={closeMenu}>
              Résumé
            </Link>
            <Link href="/" onClick={closeMenu}>
              Português
            </Link>
          </nav>
          <section id="top" className="hero section-pad">
            <div className="hero-copy reveal-up">
              <p className="eyebrow">
                <span className="status-dot" /> SALAS TECH{" "}
                <span className="eyebrow-slash">/</span> FULL STACK &amp;
                AUTOMATION
              </p>
              <h1>
                Websites, systems
                <br />
                and automation
                <br />
                <span>that move business.</span>
              </h1>
              <p className="hero-intro">
                Salas Tech helps businesses turn digital needs into clear
                experiences, useful products and more consistent operations.
              </p>
              <div className="hero-actions">
                <a
                  className="button button--primary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_clicked", {
                      source: "english_home_hero",
                    })
                  }
                >
                  Talk on WhatsApp <MessageCircle size={17} />
                </a>
                <a className="text-link" href="#work-en">
                  Explore selected work <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <img
                src="/assets/salas-tech-network-hero_fbaebdef.png"
                alt=""
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="hero-meta">
              <span>01 — SALAS TECH</span>
              <span>BRASÍLIA · BRAZIL</span>
              <span>SINCE 2023</span>
            </div>
          </section>
          <section
            id="services-en"
            className="company-services home-services section-pad section-light"
          >
            <div className="section-kicker">
              <span>01 / SERVICES</span>
              <span>
                FULL STACK &amp; AUTOMATION <b>↗</b>
              </span>
            </div>
            <div className="company-section-heading">
              <h2>
                Digital work for
                <br />
                <span>what comes next.</span>
              </h2>
              <p>
                From online presence to operations, each solution starts with
                your business context and goals.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card reveal-up" key={service.index}>
                  <span className="service-index">{service.index}</span>
                  <div className="service-icon">
                    <Code2 size={20} aria-hidden="true" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <ArrowUpRight
                    className="service-arrow"
                    size={20}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
            <p className="home-services-link">
              <Link className="text-link" href="/empresa">
                About Salas Tech <ArrowUpRight size={15} />
              </Link>
            </p>
          </section>
          <section
            id="work-en"
            className="projects-section section-pad section-light"
          >
            <div className="section-kicker">
              <span>02 / SELECTED WORK</span>
              <span>
                PUBLIC PROJECT PREVIEWS <b>↗</b>
              </span>
            </div>
            <div className="projects-heading">
              <h2>
                Built to
                <br />
                <span>make progress.</span>
              </h2>
              <p>
                Live websites and products show how the Salas Tech capabilities
                work in practice.
              </p>
            </div>
            <div className="projects-list">
              {projects.map((project) => (
                <a
                  className="project-row"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  key={project.title}
                >
                  <span className="project-index">{project.index}</span>
                  <div className="project-main">
                    <span className="project-tag">{project.meta}</span>
                    <h3>{project.title}</h3>
                    <p>Open the public project preview.</p>
                  </div>
                  <div className="project-preview">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="project-side">
                    <span>{project.meta}</span>
                    <strong>LIVE PROJECT</strong>
                    <small>OPEN WEBSITE ↗</small>
                  </div>
                  <ArrowUpRight
                    className="project-arrow"
                    size={22}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </section>
          <section id="stack-en" className="stack-section section-pad">
            <div className="section-kicker">
              <span>03 / TECHNICAL FOUNDATION</span>
              <span>
                TOOLS WITH PURPOSE <b>↗</b>
              </span>
            </div>
            <div className="stack-intro">
              <h2>
                A foundation
                <br />
                <span>built to evolve.</span>
              </h2>
              <p>
                The technology follows the problem — from interface and back-end
                to data and automation.
              </p>
            </div>
            <div className="stack-list">
              {stack.map((name, index) => (
                <div className="stack-row" key={name}>
                  <span className="stack-index">0{index + 1}</span>
                  <Code2 size={18} className="stack-icon" aria-hidden="true" />
                  <h3>{name}</h3>
                  <p>Built with intention</p>
                  <Check size={17} className="stack-check" aria-hidden="true" />
                </div>
              ))}
            </div>
          </section>
          <section id="about-en" className="about section-pad section-light">
            <div className="section-kicker">
              <span>04 / ABOUT THE BRAND</span>
              <span>
                INDEPENDENT, HANDS-ON PRACTICE <b>↗</b>
              </span>
            </div>
            <div className="about-grid">
              <div className="about-heading">
                <p className="display-note">/ background</p>
                <h2>
                  Systems thinking,
                  <br />
                  <span>in practice.</span>
                </h2>
              </div>
              <div className="about-body">
                <p className="lead">
                  Salas Tech is an independent Full Stack and automation
                  practice founded by Fernando Salas.
                </p>
                <p>
                  His background in Law, ongoing technology studies and hands-on
                  project work bring structure to complex problems and clarity
                  to digital decisions.
                </p>
                <div className="about-facts">
                  <div>
                    <span>BASED IN</span>
                    <strong>
                      Brasília
                      <br />
                      Brazil
                    </strong>
                  </div>
                  <div>
                    <span>ACTIVE SINCE</span>
                    <strong>
                      June
                      <br />
                      2023
                    </strong>
                  </div>
                  <div>
                    <span>FOCUS</span>
                    <strong>
                      Web · Systems
                      <br />
                      Automation
                    </strong>
                  </div>
                </div>
                <Link
                  className="text-link about-resume-link"
                  href="/en/curriculo"
                >
                  View résumé <ArrowUpRight size={15} />
                </Link>
              </div>
              <div className="about-image">
                <img
                  src="/assets/salas-tech-thinking-system_6c46407b.png"
                  alt="Editorial composition about systems thinking"
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  SALAS TECH
                  <br />
                  FULL STACK &amp; AUTOMATION
                </span>
              </div>
            </div>
          </section>
          <section className="contact-section section-pad">
            <div className="section-kicker">
              <span>05 / CONTACT</span>
              <span>
                YOUR NEXT PROJECT <b>↗</b>
              </span>
            </div>
            <div className="contact-content">
              <p className="eyebrow">
                Salas Tech / Full Stack &amp; Automation
              </p>
              <h2>
                Let’s turn a need
                <br />
                into a useful <span>solution.</span>
              </h2>
              <a
                className="button button--primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("whatsapp_clicked", {
                    source: "english_home_contact",
                  })
                }
              >
                Talk on WhatsApp <MessageCircle size={17} />
              </a>
            </div>
            <div className="contact-bottom">
              <span>Taguatinga, Brasília–DF, Brazil</span>
              <span>{CONTACT_EMAIL}</span>
              <span>SINCE 2023</span>
            </div>
          </section>
          <footer className="footer">
            <div className="footer-main">
              <BrandLockup href="/en" className="footer-brand" />
              <nav className="footer-links" aria-label="Footer links">
                <Link href="/">Português</Link>
                <Link href="/en/curriculo">Résumé</Link>
                <Link href="/cartao">Digital card</Link>
                <Link href="/marca">Brand assets</Link>
                <Link href="/privacidade">Privacy</Link>
                <Link href="/termos-de-uso">Terms</Link>
                <a
                  href="https://github.com/Salasfernando"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/salas-fernando"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/salas_tech"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </nav>
            </div>
            <div className="footer-credit">
              <span>Full Stack &amp; Automation · Brasília, Brazil</span>
              <strong>Developed by Salas Tech</strong>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
