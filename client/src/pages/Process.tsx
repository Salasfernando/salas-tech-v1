import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Compass,
  Layers3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { lazy, Suspense } from "react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { processPrinciples, processStepsDetail } from "@/data/process";
import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_URL } from "@/lib/contact";

const NetworkScene3D = lazy(() => import("@/components/NetworkScene3D"));

export default function Process() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Processo de desenvolvimento da Salas Tech",
    description: "Da descoberta à evolução de produtos digitais.",
    url: `${siteUrl}/processo`,
    step: processStepsDetail.map(([name, , title, text]) => ({
      "@type": "HowToStep",
      position: name,
      name: title,
      text,
    })),
  };

  return (
    <>
      <SeoHead
        title="Processo de trabalho — Salas Tech"
        description="Conheça o processo da Salas Tech para transformar contexto, arquitetura, desenvolvimento e evolução em soluções digitais."
        path="/processo"
        jsonLd={jsonLd}
      />
      <main className="process-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para início
          </Link>
          <BrandLockup href="/" />
          <nav className="case-header-nav" aria-label="Navegação rápida">
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#projetos">Projetos</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/processo" aria-current="page">
              Processo
            </Link>
            <Link href="/curriculo">Currículo</Link>
            <span className="case-counter">PROCESS / 04</span>
          </nav>
        </header>

        <section className="process-hero section-pad">
          <div className="process-hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> SALAS TECH / COMO CONSTRUÍMOS
            </p>
            <h1>
              Clareza antes
              <br />
              do <span>código.</span>
            </h1>
            <p className="process-hero-intro">
              Um processo bom não cria burocracia. Ele reduz incerteza, dá nome
              às decisões e transforma uma necessidade de negócio em algo que as
              pessoas conseguem usar.
            </p>
            <div className="process-hero-pills">
              <span>
                <Compass size={13} aria-hidden="true" /> 04 ETAPAS ESTRUTURADAS
              </span>
              <span>
                <Layers3 size={13} aria-hidden="true" /> ARQUITETURA &amp;
                CÓDIGO LIMPO
              </span>
              <span>
                <ShieldCheck size={13} aria-hidden="true" /> PRODUÇÃO &amp;
                EVOLUÇÃO
              </span>
            </div>
            <div className="hero-actions">
              <a href="#etapas" className="button button--primary">
                Ver as etapas <ArrowUpRight size={16} />
              </a>
              <Link href="/#projetos" className="text-link">
                Ver projetos publicados <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
          <Suspense
            fallback={<div className="hero-visual" aria-hidden="true" />}
          >
            <NetworkScene3D
              variant="hero"
              hudLabel="SALAS.TECH // PROCESS.3D"
            />
          </Suspense>
        </section>

        <section
          id="etapas"
          className="process-steps section-pad section-light"
        >
          <div className="section-kicker">
            <span>01 / ETAPAS</span>
            <span>
              DO CONTEXTO AO PRODUTO <b>↗</b>
            </span>
          </div>
          <div className="process-step-list">
            {processStepsDetail.map(
              ([index, domain, title, text, note, Icon]) => (
                <article className="process-step-row" key={index}>
                  <span className="process-step-index">{index}</span>
                  <div className="process-step-icon">
                    <Icon size={21} />
                  </div>
                  <div className="process-step-main">
                    <span className="process-step-domain">{domain}</span>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <small>
                      <Sparkles size={13} /> {note}
                    </small>
                    <div className="stack-meter" aria-hidden="true">
                      <span className="stack-meter-fill" />
                    </div>
                  </div>
                  <Check className="process-step-check" size={18} />
                </article>
              ),
            )}
          </div>
        </section>

        <section className="process-principles section-pad">
          <div className="section-kicker">
            <span>02 / PRINCÍPIOS</span>
            <span>
              O QUE NÃO MUDA <b>↗</b>
            </span>
          </div>
          <div className="principles-grid">
            {processPrinciples.map((principle) => (
              <article className="principle-card" key={principle.kicker}>
                <span>{principle.kicker}</span>
                <h2>
                  {principle.titlePrefix}
                  <br />
                  <em>{principle.titleHighlight}</em>
                </h2>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-cta section-pad">
          <p className="eyebrow">Próximo problema / próxima construção</p>
          <h2>
            Tem uma ideia
            <br />
            pedindo <span>estrutura?</span>
          </h2>
          <a
            className="button button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("process_cta_clicked")}
          >
            <MessageCircle size={17} /> Falar pelo WhatsApp
          </a>
        </section>
      </main>
    </>
  );
}
