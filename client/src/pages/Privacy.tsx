import { ArrowLeft, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { privacySections } from "@/data/legal";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

export default function Privacy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Política de Privacidade Salas Tech",
    url: `${siteUrl}/privacidade`,
    inLanguage: "pt-BR",
    dateModified: "2026-10-13",
  };

  return (
    <>
      <SeoHead
        title="Política de Privacidade — Salas Tech"
        description="Informações sobre dados técnicos de navegação e contatos externos iniciados pelo visitante, com transparência sobre o fluxo sem formulário da Salas Tech."
        path="/privacidade"
        jsonLd={jsonLd}
      />
      <main className="legal-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para início
          </Link>
          <BrandLockup href="/" />
          <Link href="/termos-de-uso" className="case-back">
            termos de uso <ArrowUpRight size={15} />
          </Link>
        </header>
        <section className="legal-hero section-pad">
          <p className="eyebrow">
            <span className="status-dot" /> SALAS TECH / TRANSPARÊNCIA
          </p>
          <h1>
            Política de
            <br />
            <span>Privacidade.</span>
          </h1>
          <p>
            Como tratamos informações técnicas de navegação e contatos iniciados
            por você em canais externos.
          </p>
          <small>Última atualização: 13 de outubro de 2026</small>
        </section>
        <section className="legal-content section-pad">
          <div className="legal-notice">
            <strong>Minuta para revisão.</strong>
            <span>
              Este texto é uma base operacional. Antes da publicação definitiva,
              confirme o controlador, a hospedagem, as configurações reais de
              analytics e cookies, os prazos de retenção e os dados formais da
              empresa com orientação jurídica.
            </span>
          </div>
          {privacySections.map(([index, title, content]) => (
            <article className="legal-section" key={index}>
              <span>{index}</span>
              <div>
                <h2>{title}</h2>
                {content}
              </div>
            </article>
          ))}
        </section>
        <section className="legal-footer section-pad">
          <Mail size={18} />
          <div>
            <strong>Canal de privacidade</strong>
            <p>Solicitações sobre dados pessoais: {CONTACT_EMAIL}.</p>
          </div>
          <a
            className="button button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
    </>
  );
}
