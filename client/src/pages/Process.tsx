import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  Compass,
  Layers3,
  MessageCircle,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { WHATSAPP_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const steps: readonly [string, string, string, string, LucideIcon][] = [
  [
    "01",
    "Briefing",
    "Entender contexto, público, restrições e o resultado que precisa existir depois do lançamento.",
    "Perguntas certas antes de qualquer tela.",
    Compass,
  ],
  [
    "02",
    "Arquitetura e protótipo",
    "Organizar conteúdo, fluxos e prioridades em uma estrutura que o usuário consiga percorrer sem esforço.",
    "Clareza para decidir o que entra.",
    Layers3,
  ],
  [
    "03",
    "Desenvolvimento",
    "Construir a experiência com React, TypeScript, Next.js ou Vite, mantendo performance, acessibilidade e manutenção no centro.",
    "Código que sustenta a ideia.",
    Code2,
  ],
  [
    "04",
    "Entrega e evolução",
    "Publicar, validar a experiência e deixar um caminho claro para a próxima versão do produto.",
    "O lançamento é o começo do aprendizado.",
    Rocket,
  ],
];

export default function Process() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Processo de desenvolvimento da Salas Tech",
    description: "Da descoberta à evolução de produtos digitais.",
    url: `${siteUrl}/processo`,
    step: steps.map(([name, title, text]) => ({
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
          <Link href="/empresa" className="case-back">
            <ArrowLeft size={16} /> voltar para empresa
          </Link>
          <BrandLockup href="/" />
          <span className="case-counter">PROCESS / 04</span>
        </header>
        <section className="process-hero section-pad">
          <p className="eyebrow">
            <span className="status-dot" /> SALAS TECH / COMO CONSTRUÍMOS
          </p>
          <h1>
            Clareza antes
            <br />
            do <span>código.</span>
          </h1>
          <p>
            Um processo bom não cria burocracia. Ele reduz incerteza, dá nome às
            decisões e transforma uma necessidade de negócio em algo que as
            pessoas conseguem usar.
          </p>
          <a href="#etapas" className="button button--primary">
            Ver as etapas <ArrowUpRight size={16} />
          </a>
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
            {steps.map(([index, title, text, note, Icon]) => (
              <article className="process-step-row reveal-up" key={index}>
                <span className="process-step-index">{index}</span>
                <div className="process-step-icon">
                  <Icon size={21} />
                </div>
                <div>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <small>
                    <Sparkles size={13} /> {note}
                  </small>
                </div>
                <Check className="process-step-check" size={18} />
              </article>
            ))}
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
            <article>
              <span>01</span>
              <h2>
                Pessoas antes
                <br />
                <em>de pixels.</em>
              </h2>
              <p>
                Uma interface é uma conversa. Antes de escolher cor, componente
                ou animação, definimos o que a pessoa precisa entender e fazer.
              </p>
            </article>
            <article>
              <span>02</span>
              <h2>
                Entrega com
                <br />
                <em>responsabilidade.</em>
              </h2>
              <p>
                Performance, semântica, segurança e manutenção entram no escopo
                desde o primeiro commit — não como uma correção tardia.
              </p>
            </article>
            <article>
              <span>03</span>
              <h2>
                Decisões que
                <br />
                <em>evoluem.</em>
              </h2>
              <p>
                Documentamos o suficiente para que o produto continue
                compreensível quando o próximo problema aparecer.
              </p>
            </article>
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
            rel="noreferrer"
            onClick={() => trackEvent("process_cta_clicked")}
          >
            <MessageCircle size={17} /> Falar pelo WhatsApp
          </a>
        </section>
      </main>
    </>
  );
}
