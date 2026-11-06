import {
  ArrowUpRight,
  BookOpen,
  Check,
  Compass,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import BrandMark from "@/components/BrandMark";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteSideRail from "@/components/layout/SiteSideRail";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { homeNoteFilters } from "@/data/notesContent";
import { homeProjects } from "@/data/projects";
import { techStackPt } from "@/data/stack";
import { trackEvent } from "@/lib/analytics";
import { articles } from "@/lib/articles";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";
import { filterArticles, type NoteFilter } from "@/lib/noteFilters";
import { services } from "@/lib/services";

const NetworkScene3D = lazy(() => import("@/components/NetworkScene3D"));

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNoteFilter, setActiveNoteFilter] = useState<NoteFilter>("Todas");

  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const filteredHomeArticles = filterArticles(articles, activeNoteFilter).slice(
    0,
    4,
  );
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Salas Tech",
        description:
          "Full Stack e automação para sites, produtos web, sistemas e operações.",
        url: siteUrl,
        email: CONTACT_EMAIL,
        telephone: "+55 61 98103-3420",
        sameAs: [
          "https://github.com/Salasfernando",
          "https://www.linkedin.com/in/salas-fernando",
          "https://www.instagram.com/salas_tech",
        ],
      },
      {
        "@type": "WebSite",
        name: "Salas Tech",
        url: siteUrl,
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <>
      <SeoHead
        title="Salas Tech — Full Stack & Automação"
        description="Sites institucionais, produtos web, sistemas e automações para empresas. Conheça os serviços e projetos da Salas Tech."
        path="/"
        jsonLd={jsonLd}
      />
      <div className="site-shell">
        <a href="#top" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <SiteSideRail locale="pt" />
        <main>
          <header className="topbar">
            <BrandLockup href="/" className="topbar-brand" />
            <nav className="desktop-nav" aria-label="Navegação principal">
              <a href="#servicos">
                Serviços <span>01</span>
              </a>
              <a href="#projetos">
                Projetos <span>02</span>
              </a>
              <a href="#sobre">
                Sobre <span>03</span>
              </a>
              <Link href="/processo">
                Processo <span>↗</span>
              </Link>
              <Link href="/curriculo">
                Currículo <span>↗</span>
              </Link>
              <Link href="/en">
                EN <span>↗</span>
              </Link>
            </nav>
            <button
              className="menu-button"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </header>
          <nav
            id="mobile-nav"
            className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
            aria-label="Navegação móvel"
          >
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#projetos" onClick={closeMenu}>
              Projetos
            </a>
            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>
            <Link href="/processo" onClick={closeMenu}>
              Processo
            </Link>
            <Link href="/curriculo" onClick={closeMenu}>
              Currículo
            </Link>
            <Link href="/en" onClick={closeMenu}>
              English
            </Link>
          </nav>

          <section id="top" className="hero section-pad">
            <div className="hero-copy reveal-up">
              <p className="eyebrow">
                <span className="status-dot" /> SALAS TECH{" "}
                <span className="eyebrow-slash">/</span> FULL STACK &amp;
                AUTOMAÇÃO
              </p>
              <h1>
                Sites, sistemas
                <br />e automações
                <br />
                <span>que fazem avançar.</span>
              </h1>
              <p className="hero-intro">
                A Salas Tech é uma prática independente, fundada por Fernando
                Salas, que desenvolve sites, sistemas e automações a partir das
                necessidades reais de cada negócio.
              </p>
              <div className="hero-actions">
                <a
                  className="button button--primary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_clicked", { source: "home_hero" })
                  }
                >
                  Falar sobre um projeto <MessageCircle size={17} />
                </a>
                <a className="text-link" href="#projetos">
                  Explorar projetos <ArrowUpRight size={16} />
                </a>
                <Link className="text-link" href="/processo">
                  Ver como trabalhamos <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <Suspense
              fallback={<div className="hero-visual" aria-hidden="true" />}
            >
              <NetworkScene3D />
            </Suspense>
            <div className="hero-meta">
              <span>01 — SALAS TECH</span>
              <span>
                <MapPin size={12} /> TAGUATINGA · BRASÍLIA — DF
              </span>
              <span>DESDE 2023</span>
            </div>
          </section>

          <section
            id="servicos"
            className="company-services home-services section-pad section-light"
          >
            <div className="section-kicker">
              <span>01 / SERVIÇOS</span>
              <span>
                FULL STACK &amp; AUTOMAÇÃO <b>↗</b>
              </span>
            </div>
            <div className="company-section-heading">
              <h2>
                Tecnologia para
                <br />
                <span>o próximo passo.</span>
              </h2>
              <p>
                Da presença digital à operação: soluções construídas a partir do
                contexto e dos objetivos da sua empresa.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    className="service-card"
                    href={`/servicos/${service.slug}`}
                    key={service.index}
                    aria-label={`Saiba mais sobre ${service.title}`}
                  >
                    <span className="service-index">{service.index}</span>
                    <div className="service-icon">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-card-cta">
                      Conhecer serviço
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                );
              })}
            </div>
            <p className="home-services-link">
              <Link className="text-link" href="/empresa">
                Conhecer a Salas Tech <ArrowUpRight size={15} />
              </Link>
            </p>
          </section>

          <section
            id="projetos"
            className="projects-section section-pad section-light"
          >
            <div className="section-kicker">
              <span>02 / PROJETOS</span>
              <span>
                TRABALHOS EM PRODUÇÃO <b>↗</b>
              </span>
            </div>
            <div className="projects-heading">
              <h2>
                Projetos que
                <br />
                <span>fazem acontecer.</span>
              </h2>
              <p>
                Cases de sites, produtos e sistemas em produção. Cada projeto é
                uma demonstração das capacidades por trás da Salas Tech.
              </p>
            </div>
            <div className="projects-list">
              {homeProjects.map((project) => (
                <Link
                  className={`project-row ${project.featured ? "project-row--featured" : ""}`}
                  href={`/projetos/${project.slug}`}
                  onClick={() =>
                    trackEvent("project_opened", { project: project.slug })
                  }
                  key={project.title}
                >
                  <span className="project-index">{project.index}</span>
                  <div className="project-main">
                    <span className="project-tag">
                      {project.tag} / {project.type}
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-preview">
                    <img
                      src={project.previewImage}
                      alt={project.previewAlt}
                      width={640}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="project-preview-badge" aria-hidden="true">
                      <i /> VER CASE ↗
                    </span>
                  </div>
                  <div className="project-side">
                    <span>{project.type}</span>
                    <strong>{project.stack}</strong>
                    <small>ABRIR CASE ↗</small>
                  </div>
                  <ArrowUpRight
                    className="project-arrow"
                    size={22}
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </section>

          <section id="stack" className="stack-section section-pad">
            <div className="section-kicker">
              <span>03 / CAPACIDADES TÉCNICAS</span>
              <span>
                FERRAMENTAS COM PROPÓSITO <b>↗</b>
              </span>
            </div>
            <div className="stack-intro">
              <h2>
                Uma base para
                <br />
                <span>evoluir produtos.</span>
              </h2>
              <p>
                A tecnologia acompanha o problema: da interface ao back-end,
                dados e automações.
              </p>
            </div>
            <div className="stack-list">
              {techStackPt.map((item, index) => {
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
            <div className="stack-footer">
              <span>FRONT-END · BACK-END · DADOS · AUTOMAÇÃO</span>
              <span>CLAREZA, MANUTENÇÃO E EVOLUÇÃO</span>
            </div>
          </section>

          <section id="sobre" className="about section-pad section-light">
            <div className="section-kicker">
              <span>04 / SOBRE A MARCA</span>
              <span>
                UMA PRÁTICA PRÓXIMA E TÉCNICA <b>↗</b>
              </span>
            </div>
            <div className="about-grid">
              <div className="about-heading">
                <p className="display-note">
                  <span className="status-dot" /> / quem está por trás
                </p>
                <h2>
                  Raciocínio em
                  <br />
                  <span>movimento.</span>
                </h2>
                <Link href="/empresa" className="about-brand-seal">
                  <BrandMark small />
                  <div>
                    <strong>
                      SALAS TECH · ENGENHARIA DIGITAL{" "}
                      <ArrowUpRight size={13} aria-hidden="true" />
                    </strong>
                    <span>Arquitetura, código limpo e visão de negócio</span>
                  </div>
                </Link>
                <div className="about-pillars">
                  <span>
                    <Compass size={14} aria-hidden="true" /> Diagnóstico claro
                    antes do código
                  </span>
                  <span>
                    <Layers3 size={14} aria-hidden="true" /> Interfaces, APIs,
                    dados e IA integrados
                  </span>
                  <span>
                    <ShieldCheck size={14} aria-hidden="true" /> Segurança,
                    performance e manutenção
                  </span>
                </div>
              </div>
              <div className="about-body">
                <p className="lead">
                  A Salas Tech é uma prática independente de desenvolvimento
                  Full Stack e automação, fundada por Fernando Salas.
                </p>
                <p>
                  A trajetória combina formação em Direito, estudo contínuo em
                  tecnologia e projetos reais em produção. Essa perspectiva
                  ajuda a organizar problemas complexos, explicitar decisões
                  técnicas e construir soluções digitais sustentáveis.
                </p>
                <div className="about-facts">
                  <Link href="/empresa" className="about-fact-card">
                    <span className="about-fact-label">01 / BASE ↗</span>
                    <strong>
                      Brasília
                      <br />
                      Brasil (DF)
                    </strong>
                  </Link>
                  <Link href="/empresa" className="about-fact-card">
                    <span className="about-fact-label">02 / ATUAÇÃO ↗</span>
                    <strong>
                      Desde
                      <br />
                      junho de 2023
                    </strong>
                  </Link>
                  <Link href="/empresa" className="about-fact-card">
                    <span className="about-fact-label">03 / FOCO ↗</span>
                    <strong>
                      Web · Sistemas
                      <br />
                      Automação &amp; IA
                    </strong>
                  </Link>
                </div>
                <div className="about-actions">
                  <Link className="button button--about" href="/empresa">
                    Sobre a Salas Tech <ArrowUpRight size={15} />
                  </Link>
                  <Link
                    className="text-link about-resume-link"
                    href="/curriculo"
                  >
                    Conhecer o currículo <ArrowUpRight size={15} />
                  </Link>
                  <Link
                    className="text-link about-resume-link"
                    href="/processo"
                  >
                    Nosso processo <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="about-image">
                <Link
                  href="/empresa"
                  className="about-image-frame"
                  aria-label="Conhecer mais sobre a Salas Tech"
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
                    alt="Composição editorial sobre pensamento sistêmico"
                    width={640}
                    height={640}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="about-image-caption">
                    <span>
                      <i className="about-live-dot" /> SALAS TECH
                    </span>
                    <strong>VER PÁGINA SOBRE ↗</strong>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section id="artigos" className="articles-section section-pad">
            <div className="section-kicker">
              <span>05 / NOTAS TÉCNICAS</span>
              <span>
                APRENDER EM PÚBLICO <b>↗</b>
              </span>
            </div>
            <div className="articles-heading">
              <div>
                <p className="eyebrow">
                  <Terminal size={14} aria-hidden="true" /> ENGENHARIA, PRODUTO
                  &amp; DECISÕES REAIS
                </p>
                <h2>
                  Ideias que
                  <br />
                  <span>viram prática.</span>
                </h2>
              </div>
              <p>
                Notas técnicas com exemplos aplicáveis de código sobre React,
                Next.js, APIs, performance, acessibilidade e arquitetura de
                produto.
              </p>
            </div>
            <div
              className="filter-bar articles-filter-bar"
              role="group"
              aria-label="Filtrar notas técnicas por tema"
            >
              {homeNoteFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`filter-chip ${activeNoteFilter === filter ? "filter-chip--active" : ""}`}
                  aria-pressed={activeNoteFilter === filter}
                  onClick={() => setActiveNoteFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <motion.div layout className="articles-list">
              <AnimatePresence mode="popLayout">
                {filteredHomeArticles.map((article) => (
                  <motion.div
                    key={article.slug}
                    layout
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      className="article-row"
                      href={`/notas/${article.slug}`}
                    >
                      <span className="article-index">{article.index}</span>
                      <div className="article-main">
                        <div className="article-meta-row">
                          <span className="article-category">
                            <i aria-hidden="true" /> {article.category}
                          </span>
                          <span className="article-lab-badge">
                            <BookOpen size={11} aria-hidden="true" /> LAB +
                            CÓDIGO
                          </span>
                        </div>
                        <h3>{article.title}</h3>
                        <p>{article.excerpt}</p>
                      </div>
                      <div className="article-read-group">
                        <span className="article-read">{article.read}</span>
                        <span className="article-arrow-box" aria-hidden="true">
                          <ArrowUpRight size={17} />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            <div className="articles-footer-bar">
              <span className="articles-footer-count">
                EXIBINDO {filteredHomeArticles.length} DE {articles.length}{" "}
                NOTAS PUBLICADAS
              </span>
              <Link className="button button--notes" href="/notas">
                Explorar todas as {articles.length} notas técnicas{" "}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </section>

          <section id="contato" className="contact-section section-pad">
            <div className="section-kicker">
              <span>06 / CONTATO</span>
              <span>
                PRÓXIMO PROJETO <b>↗</b>
              </span>
            </div>
            <div className="contact-content">
              <div className="contact-message">
                <p className="eyebrow">
                  Salas Tech / Full Stack &amp; Automação
                </p>
                <h2>
                  Vamos transformar
                  <br />
                  uma necessidade
                  <br />
                  em <span>solução?</span>
                </h2>
                <a
                  className="button button--primary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("whatsapp_clicked", { source: "home_contact" })
                  }
                >
                  Falar pelo WhatsApp <MessageCircle size={17} />
                </a>
              </div>
              <div className="contact-signature" aria-hidden="true">
                <BrandMark />
                <div>
                  <span>PRÁTICA INDEPENDENTE</span>
                  <strong>FULL STACK</strong>
                  <strong>&amp; AUTOMAÇÃO</strong>
                  <small>BRASÍLIA · BRASIL / DESDE 2023</small>
                </div>
              </div>
            </div>
            <div className="contact-bottom">
              <span>
                <MapPin size={14} /> Taguatinga, Brasília–DF
              </span>
              <span>{CONTACT_EMAIL}</span>
              <span>DESDE 2023</span>
            </div>
          </section>
          <SiteFooter locale="pt" />
        </main>
      </div>
    </>
  );
}
