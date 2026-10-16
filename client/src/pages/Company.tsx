import {
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  MessageCircle,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { CONTACT_EMAIL, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/contact";
import { services } from "@/lib/services";
import { trackEvent } from "@/lib/analytics";

const process = [
  [
    "01",
    "Entender",
    "Mapeamos contexto, público, problema e o que precisa acontecer depois do clique.",
  ],
  [
    "02",
    "Estruturar",
    "Transformamos complexidade em arquitetura de informação, interface e prioridades.",
  ],
  [
    "03",
    "Construir",
    "Desenvolvemos com React, Next.js, TypeScript e Node.js, com atenção a detalhe e manutenção.",
  ],
  [
    "04",
    "Evoluir",
    "Validamos a experiência e deixamos um caminho claro para a próxima versão do produto.",
  ],
] as const;

const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "APIs REST",
  "Automação + IA",
];

export default function Company() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Salas Tech",
    description:
      "Desenvolvimento Full Stack e automação para sites, produtos web e sistemas.",
    url: `${siteUrl}/empresa`,
    email: CONTACT_EMAIL,
    telephone: WHATSAPP_NUMBER,
    sameAs: [
      "https://github.com/Salasfernando",
      "https://www.linkedin.com/in/salas-fernando",
      "https://www.instagram.com/salas_tech",
    ],
    knowsAbout: [
      "Sites institucionais",
      "Produtos web",
      "Sistemas",
      "Automação",
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
    ],
  };

  return (
    <>
      <SeoHead
        title="Salas Tech — Full Stack & Automação"
        description="Sites institucionais, produtos web, sistemas e automações desenvolvidos pela Salas Tech para tornar negócios e operações digitais mais claros."
        path="/empresa"
        jsonLd={jsonLd}
      />
      <main className="company-page">
        <header className="company-header">
          <BrandLockup href="/" />
          <nav aria-label="Navegação institucional">
            <Link href="/#servicos">
              Serviços <span>↗</span>
            </Link>
            <Link href="/#projetos">
              Projetos <span>↗</span>
            </Link>
            <Link href="/processo">
              Processo <span>↗</span>
            </Link>
            <Link href="/curriculo">
              Currículo <span>↗</span>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("whatsapp_clicked", { source: "company_header" })
              }
            >
              WhatsApp <span>↗</span>
            </a>
          </nav>
        </header>

        <section className="company-hero section-pad">
          <div className="company-hero-copy reveal-up">
            <p className="eyebrow">
              <span className="status-dot" /> SALAS TECH / FULL STACK &amp;
              AUTOMAÇÃO
            </p>
            <h1>
              Sites, sistemas
              <br />e automações
              <br />
              <span>que fazem avançar.</span>
            </h1>
            <p>
              A Salas Tech transforma necessidades de negócio em experiências
              digitais claras — da presença institucional aos produtos web e
              processos automatizados.
            </p>
            <div className="hero-actions">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="button button--primary"
                onClick={() =>
                  trackEvent("whatsapp_clicked", { source: "company_hero" })
                }
              >
                Falar sobre um projeto <MessageCircle size={17} />
              </a>
              <a href="#servicos" className="text-link">
                Conhecer os serviços <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="company-hero-art" aria-hidden="true">
            <div className="company-orbit company-orbit--one" />
            <div className="company-orbit company-orbit--two" />
            <img
              src="/assets/salas-tech-mark-512.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <span>
              ST / FULL STACK
              <br />
              01—2026
            </span>
          </div>
          <div className="company-meta">
            <span>TAGUATINGA · BRASÍLIA — DF</span>
            <span>WEB / SYSTEMS / AUTOMATION</span>
            <span>DESDE 2023</span>
          </div>
        </section>

        <section
          id="servicos"
          className="company-services section-pad section-light"
        >
          <div className="section-kicker">
            <span>01 / O QUE FAZEMOS</span>
            <span>
              CLAREZA ANTES DO CÓDIGO <b>↗</b>
            </span>
          </div>
          <div className="company-section-heading">
            <h2>
              Soluções digitais
              <br />
              <span>para o próximo passo.</span>
            </h2>
            <p>
              Escolhemos a forma certa de construir a partir do que sua empresa
              precisa comunicar, melhorar ou automatizar.
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
        </section>

        <section className="company-stack section-pad">
          <div className="section-kicker">
            <span>02 / COMO PENSAMOS</span>
            <span>
              FERRAMENTAS COM PROPÓSITO <b>↗</b>
            </span>
          </div>
          <div className="company-stack-grid">
            <div>
              <p className="display-note">/ base técnica</p>
              <h2>
                Tecnologia para
                <br />
                <span>fazer sentido.</span>
              </h2>
              <p className="lead">
                A stack é escolhida conforme o problema. Priorizamos clareza,
                manutenção e uma base que possa evoluir sem adicionar
                complexidade desnecessária.
              </p>
            </div>
            <div className="company-stack-list">
              {coreStack.map((item, index) => {
                const icons = [Layers3, Workflow, Code2, Sparkles, Check];
                const Icon = icons[index % icons.length];
                return (
                  <span key={item}>
                    <Icon size={16} aria-hidden="true" /> {item}
                  </span>
                );
              })}
            </div>
          </div>
        </section>

        <section className="company-process section-pad section-light">
          <div className="section-kicker">
            <span>03 / PROCESSO</span>
            <span>
              DO CONTEXTO AO PRODUTO <b>↗</b>
            </span>
          </div>
          <div className="process-list">
            {process.map(([index, title, copy]) => (
              <div className="process-row reveal-up" key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
                <ArrowUpRight size={19} aria-hidden="true" />
              </div>
            ))}
          </div>
          <p className="company-process-link">
            <Link className="text-link" href="/processo">
              Conhecer o processo completo <ArrowUpRight size={16} />
            </Link>
          </p>
        </section>

        <section className="company-cta section-pad">
          <div className="company-cta-mark">
            <img
              src="/assets/salas-tech-mark-512.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="eyebrow">Próximo problema / próxima construção</p>
          <h2>
            Vamos dar forma
            <br />à sua próxima <span>ideia?</span>
          </h2>
          <a
            className="button button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("whatsapp_clicked", { source: "company_footer" })
            }
          >
            Começar conversa <MessageCircle size={17} />
          </a>
        </section>
        <footer className="company-footer">
          <BrandLockup href="/" />
          <span>{CONTACT_EMAIL} · Brasília, Brasil · 2026</span>
          <Link href="/">Voltar ao portfólio ↗</Link>
        </footer>
      </main>
    </>
  );
}
