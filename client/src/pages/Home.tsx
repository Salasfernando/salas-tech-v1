import {
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Linkedin,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { articles } from "@/lib/articles";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";
import { services } from "@/lib/services";
import { trackEvent } from "@/lib/analytics";

const projects = [
  {
    index: "01",
    slug: "lounge-odontologia",
    featured: true,
    title: "Lounge Odontologia",
    type: "Experiência institucional",
    description:
      "Website corporativo criado para transformar cuidado clínico em uma experiência digital acolhedora.",
    stack: "React 19 · Vite · React Router · React Slick",
    href: "https://www.loungeodontologia.com.br",
    tag: "Saúde",
    previewImage: "/assets/lounge-odontologia-preview.webp",
    previewAlt: "Prévia pública do site Lounge Odontologia",
  },
  {
    index: "02",
    slug: "etron-energy",
    title: "E-Tron Energy",
    type: "Plataforma institucional",
    description:
      "Presença digital para uma empresa de energia solar, com foco em clareza comercial, performance e confiança.",
    stack: "React · TypeScript · Tailwind CSS",
    href: "https://etron-energy.vercel.app",
    tag: "Energia",
    previewImage: "/assets/etron-energy_f8d34623.webp",
    previewAlt: "Prévia do projeto E-Tron Energy",
  },
  {
    index: "03",
    slug: "unovitta-odontologia",
    title: "Unovitta Odontologia",
    type: "Presença digital",
    description:
      "Plataforma institucional com linguagem visual própria, arquitetura de conteúdo e navegação orientada.",
    stack: "React · TypeScript · Vite",
    href: "https://www.unovitta.com.br",
    tag: "Saúde",
    previewImage: "/assets/unovitta-preview.webp",
    previewAlt: "Prévia do projeto Unovitta Odontologia",
  },
  {
    index: "04",
    slug: "noc-odontologia",
    title: "NOC Odontologia",
    type: "Plataforma institucional",
    description:
      "Experiência digital que torna serviços e confiança clínica mais fáceis de encontrar.",
    stack: "React · TypeScript · Tailwind CSS",
    href: "https://noc-odontologia.vercel.app",
    tag: "Saúde",
    previewImage: "/assets/noc-odontologia-preview.webp",
    previewAlt: "Prévia do projeto NOC Odontologia",
  },
  {
    index: "05",
    slug: "etron-monitoramento",
    title: "E-Tron Monitoramento",
    type: "Sistema de monitoramento",
    description:
      "Interface para gestão e serviços de energia solar, aproximando operação, dados e tomada de decisão.",
    stack: "Next.js · React · TypeScript · Zod",
    href: "https://etron-monitoramento.vercel.app/monitoramento",
    tag: "Produto",
    previewImage: "/assets/etron-monitoramento_b5650d38.webp",
    previewAlt: "Prévia do projeto E-Tron Monitoramento",
  },
];

const stack = [
  { name: "React", note: "Interfaces e aplicações web" },
  { name: "Next.js", note: "Produtos preparados para evoluir" },
  { name: "TypeScript", note: "Clareza antes da complexidade" },
  { name: "Node.js", note: "APIs e serviços de produto" },
  { name: "PostgreSQL + Prisma", note: "Dados relacionais e modelagem" },
  { name: "Automação + IA", note: "Fluxos conectados ao trabalho" },
];

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <img
      className={`official-mark ${small ? "official-mark--small" : ""}`}
      src={
        small
          ? "/assets/salas-tech-mark-192.png"
          : "/assets/salas-tech-mark-512.png"
      }
      alt=""
      aria-hidden="true"
      decoding="async"
    />
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const visual = heroVisualRef.current;
    if (
      !visual ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const offset = Math.max(-12, Math.min(12, window.scrollY * 0.035));
      visual.style.setProperty("--hero-parallax-y", `${offset}px`);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
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
        <aside className="side-rail">
          <a href="#top" className="rail-logo" aria-label="Salas Tech — início">
            <BrandMark small />
          </a>
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
              aria-label="GitHub Salas Tech"
            >
              <Github size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/salas-fernando"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Fernando Salas"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://www.instagram.com/salas_tech"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Salas Tech"
            >
              ◎
            </a>
          </div>
        </aside>
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
                  rel="noreferrer"
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
            <div ref={heroVisualRef} className="hero-visual" aria-hidden="true">
              <img
                src="/assets/salas-tech-network-hero_fbaebdef.png"
                alt=""
                fetchPriority="high"
                decoding="async"
              />
            </div>
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
              {projects.map((project) => (
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
                      loading="lazy"
                      decoding="async"
                    />
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
              {stack.map((item, index) => (
                <div className="stack-row" key={item.name}>
                  <span className="stack-index">0{index + 1}</span>
                  <Code2 size={18} className="stack-icon" aria-hidden="true" />
                  <h3>{item.name}</h3>
                  <p>{item.note}</p>
                  <Check size={17} className="stack-check" aria-hidden="true" />
                </div>
              ))}
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
                <p className="display-note">/ quem está por trás</p>
                <h2>
                  Raciocínio em
                  <br />
                  <span>movimento.</span>
                </h2>
              </div>
              <div className="about-body">
                <p className="lead">
                  A Salas Tech é uma prática independente de desenvolvimento
                  Full Stack e automação, fundada por Fernando Salas.
                </p>
                <p>
                  A trajetória combina formação em Direito, estudo contínuo em
                  tecnologia e projetos reais. Essa perspectiva ajuda a
                  organizar problemas, explicitar decisões e construir soluções
                  digitais sustentáveis.
                </p>
                <div className="about-facts">
                  <div>
                    <span>BASE</span>
                    <strong>
                      Brasília
                      <br />
                      Brasil
                    </strong>
                  </div>
                  <div>
                    <span>ATUAÇÃO</span>
                    <strong>
                      Desde
                      <br />
                      junho de 2023
                    </strong>
                  </div>
                  <div>
                    <span>FOCO</span>
                    <strong>
                      Web · Sistemas
                      <br />
                      Automação
                    </strong>
                  </div>
                </div>
                <Link className="text-link about-resume-link" href="/curriculo">
                  Conhecer o currículo <ArrowUpRight size={15} />
                </Link>
              </div>
              <div className="about-image">
                <img
                  src="/assets/salas-tech-thinking-system_6c46407b.png"
                  alt="Composição editorial sobre pensamento sistêmico"
                  loading="lazy"
                  decoding="async"
                />
                <span>
                  SALAS TECH
                  <br />
                  FULL STACK &amp; AUTOMAÇÃO
                </span>
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
              <h2>
                Ideias que
                <br />
                <span>viram prática.</span>
              </h2>
              <p>
                Notas sobre React, Next.js, produto, acessibilidade e decisões
                de engenharia.
              </p>
            </div>
            <div className="articles-list">
              {articles.slice(0, 3).map((article) => (
                <Link
                  className="article-row"
                  href={`/notas/${article.slug}`}
                  key={article.index}
                >
                  <span className="article-index">{article.index}</span>
                  <div>
                    <span className="article-category">{article.category}</span>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                  </div>
                  <span className="article-read">{article.read} ↗</span>
                </Link>
              ))}
            </div>
            <Link className="text-link notes-archive-link" href="/notas">
              Ver todas as notas técnicas <ArrowUpRight size={15} />
            </Link>
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
                <p className="eyebrow">Salas Tech / Full Stack &amp; Automação</p>
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
                  rel="noreferrer"
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
          <footer className="footer">
            <div className="footer-main">
              <BrandLockup href="#top" className="footer-brand" />
              <nav className="footer-links" aria-label="Links do rodapé">
                <Link href="/empresa">Empresa</Link>
                <Link href="/processo">Processo</Link>
                <Link href="/curriculo">Currículo</Link>
                <Link href="/cartao">Cartão digital</Link>
                <Link href="/marca">Materiais da marca</Link>
                <Link href="/privacidade">Privacidade</Link>
                <Link href="/termos-de-uso">Termos de uso</Link>
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
              <span>Full Stack &amp; Automação · Brasília, Brasil</span>
              <strong>Desenvolvido por Salas Tech</strong>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
