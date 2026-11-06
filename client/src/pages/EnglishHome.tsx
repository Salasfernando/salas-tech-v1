import {
  ArrowUpRight,
  Check,
  Compass,
  Layers3,
  Menu,
  MessageCircle,
  ShieldCheck,
  X,
} from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import BrandMark from "@/components/BrandMark";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteSideRail from "@/components/layout/SiteSideRail";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { englishProjects } from "@/data/projects";
import { englishServices } from "@/data/servicesDetail";
import { techStackEn } from "@/data/stack";
import { trackEvent } from "@/lib/analytics";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const NetworkScene3D = lazy(() => import("@/components/NetworkScene3D"));

export default function EnglishHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

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
        <a href="#top" className="skip-link">
          Skip to main content
        </a>
        <SiteSideRail locale="en" />
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
                  rel="noopener noreferrer"
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
            <Suspense
              fallback={<div className="hero-visual" aria-hidden="true" />}
            >
              <NetworkScene3D />
            </Suspense>
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
              {englishServices.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    className="service-card"
                    href={`/servicos/${service.slug}`}
                    key={service.index}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span className="service-index">{service.index}</span>
                    <div className="service-icon">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <span className="service-card-cta">
                      Explore service
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
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
              {englishProjects.map((project) => (
                <a
                  className={`project-row ${project.featured ? "project-row--featured" : ""}`}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                      width={640}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="project-preview-badge" aria-hidden="true">
                      <i /> LIVE PREVIEW ↗
                    </span>
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
              {techStackEn.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div className="stack-row" key={item.name}>
                    <span className="stack-index">0{index + 1}</span>
                    <div className="stack-icon-box" aria-hidden="true">
                      <Icon size={18} className="stack-icon" />
                    </div>
                    <div className="stack-title-group">
                      <span className="stack-domain">{item.domain}</span>
                      <h3>{item.name}</h3>
                    </div>
                    <div className="stack-note-group">
                      <p>{item.note}</p>
                      <div className="stack-meter" aria-hidden="true">
                        <span className="stack-meter-fill" />
                      </div>
                    </div>
                    <Check
                      size={17}
                      className="stack-check"
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
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
                <p className="display-note">
                  <span className="status-dot" /> / background
                </p>
                <h2>
                  Systems thinking,
                  <br />
                  <span>in practice.</span>
                </h2>
                <Link href="/empresa" className="about-brand-seal">
                  <BrandMark small />
                  <div>
                    <strong>
                      SALAS TECH · DIGITAL ENGINEERING{" "}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </strong>
                    <span>
                      Clear architecture, clean code and business focus
                    </span>
                  </div>
                </Link>
                <div className="about-pillars">
                  <span>
                    <Compass size={14} aria-hidden="true" /> Clear diagnosis
                    before writing code
                  </span>
                  <span>
                    <Layers3 size={14} aria-hidden="true" /> Interfaces, APIs,
                    data and AI working together
                  </span>
                  <span>
                    <ShieldCheck size={14} aria-hidden="true" /> Security,
                    performance and maintainability
                  </span>
                </div>
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
                  <Link href="/empresa" className="about-fact-card">
                    <span className="about-fact-label">01 / BASED IN ↗</span>
                    <strong>
                      Brasília
                      <br />
                      Brazil (DF)
                    </strong>
                  </Link>
                  <Link href="/empresa" className="about-fact-card">
                    <span className="about-fact-label">
                      02 / ACTIVE SINCE ↗
                    </span>
                    <strong>
                      June
                      <br />
                      2023
                    </strong>
                  </Link>
                  <Link href="/empresa" className="about-fact-card">
                    <span className="about-fact-label">03 / FOCUS ↗</span>
                    <strong>
                      Web · Systems
                      <br />
                      Automation &amp; AI
                    </strong>
                  </Link>
                </div>
                <div className="about-actions">
                  <Link className="button button--about" href="/empresa">
                    About Salas Tech <ArrowUpRight size={15} />
                  </Link>
                  <Link
                    className="text-link about-resume-link"
                    href="/en/curriculo"
                  >
                    View résumé <ArrowUpRight size={15} />
                  </Link>
                  <Link
                    className="text-link about-resume-link"
                    href="/processo"
                  >
                    How we work <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="about-image">
                <Link
                  href="/empresa"
                  className="about-image-frame"
                  aria-label="Learn more about Salas Tech"
                >
                  <div className="about-image-topbar" aria-hidden="true">
                    <span>
                      <i />
                      <i />
                      <i />
                    </span>
                    <small>SALAS.TECH // SYSTEMS.THINKING</small>
                  </div>
                  <img
                    src="/assets/salas-tech-thinking-system_6c46407b.png"
                    alt="Editorial composition about systems thinking"
                    width={640}
                    height={640}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="about-image-caption">
                    <span>
                      <i className="about-live-dot" /> SALAS TECH
                    </span>
                    <strong>OPEN ABOUT PAGE ↗</strong>
                  </div>
                </Link>
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
                rel="noopener noreferrer"
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
          <SiteFooter locale="en" />
        </main>
      </div>
    </>
  );
}
