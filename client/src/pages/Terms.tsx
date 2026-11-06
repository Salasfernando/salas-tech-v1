import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { termsSections } from "@/data/legal";
import { WHATSAPP_URL } from "@/lib/contact";

export default function Terms() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Termos de Uso Salas Tech",
    url: `${siteUrl}/termos-de-uso`,
    inLanguage: "pt-BR",
    dateModified: "2026-10-13",
  };

  return (
    <>
      <SeoHead
        title="Termos de Uso — Salas Tech"
        description="Regras de navegação, conteúdo e contato externo pelo WhatsApp no site da Salas Tech."
        path="/termos-de-uso"
        jsonLd={jsonLd}
      />
      <main className="legal-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para início
          </Link>
          <BrandLockup href="/" />
          <Link href="/privacidade" className="case-back">
            privacidade <ArrowUpRight size={15} />
          </Link>
        </header>
        <section className="legal-hero section-pad">
          <p className="eyebrow">
            <span className="status-dot" /> SALAS TECH / USO RESPONSÁVEL
          </p>
          <h1>
            Termos de
            <br />
            <span>Uso.</span>
          </h1>
          <p>
            Regras para navegar, consultar projetos e iniciar uma conversa
            profissional com a Salas Tech.
          </p>
          <small>Última atualização: 13 de outubro de 2026</small>
        </section>
        <section className="legal-content section-pad">
          <div className="legal-notice">
            <strong>Minuta para revisão.</strong>
            <span>
              Este texto é uma base operacional e deve ser revisado por
              profissional jurídico antes da publicação definitiva,
              especialmente quanto à identificação formal da empresa e à
              legislação aplicável.
            </span>
          </div>
          {termsSections.map(([index, title, text]) => (
            <article className="legal-section" key={index}>
              <span>{index}</span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </section>
        <section className="legal-footer section-pad">
          <div>
            <strong>Tem um projeto em mente?</strong>
            <p>Inicie a conversa pelo canal oficial da Salas Tech.</p>
          </div>
          <a
            className="button button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> Falar no WhatsApp{" "}
            <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
    </>
  );
}
