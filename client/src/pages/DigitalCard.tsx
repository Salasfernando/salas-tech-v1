import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { digitalCardAssets } from "@/data/brandAssets";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

export default function DigitalCard() {
  const { mark, cardAsset, cardPreview, qrAsset } = digitalCardAssets;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Cartão Digital — Fernando Salas | Salas Tech",
    url: `${siteUrl}/cartao`,
    mainEntity: {
      "@type": "Person",
      name: "Fernando Salas Ferreira",
      jobTitle: "Proprietário e Desenvolvedor Full Stack",
      worksFor: { "@type": "Organization", name: "Salas Tech", url: siteUrl },
      email: CONTACT_EMAIL,
    },
  };

  return (
    <>
      <SeoHead
        title="Cartão Digital — Fernando Salas | Salas Tech"
        description="Cartão de visita digital e oficial de Fernando Salas — Salas Tech Full Stack & Automação."
        path="/cartao"
        type="profile"
        jsonLd={jsonLd}
      />
      <div className="card-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            ← voltar para home
          </Link>
          <BrandLockup href="/" />
          <a className="resume-download" href={cardAsset} download>
            <ArrowDownToLine size={15} /> baixar cartão SVG
          </a>
        </header>
        <main className="card-main">
          <div className="case-kicker">
            <span>IDENTIDADE / CARTÃO DIGITAL</span>
            <span>SALAS TECH · 2026</span>
          </div>
          <section className="digital-card">
            <div className="digital-card-art">
              <img
                src={mark}
                alt="Símbolo geométrico Salas Tech"
                decoding="async"
              />
            </div>
            <div className="digital-card-content">
              <p className="eyebrow">
                <span className="status-dot" /> Salas Tech / Full Stack &amp;
                Automação
              </p>
              <h1>
                Fernando
                <br />
                <span>Salas.</span>
              </h1>
              <p className="digital-card-role">
                Proprietário · Desenvolvedor Full Stack
              </p>
              <div className="digital-card-line" />
              <p className="digital-card-stack">
                Sites · Produtos web · Sistemas · Automação
              </p>
              <div className="digital-card-links">
                <a
                  className="digital-card-whatsapp"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={17} /> Falar pelo WhatsApp{" "}
                  <ArrowUpRight size={14} />
                </a>
                <span className="digital-card-email">
                  <Mail size={17} /> {CONTACT_EMAIL}
                </span>
                <a
                  href="https://github.com/Salasfernando"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={17} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/salas-fernando"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.instagram.com/salas_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={17} /> Instagram <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="digital-card-qr">
              <img
                src={qrAsset}
                alt="QR Code para salastech.com.br"
                loading="lazy"
                decoding="async"
              />
              <span>
                APONTE A CÂMERA
                <br />
                SALASTECH.COM.BR
              </span>
            </div>
            <div className="digital-card-footer">
              <span>FULL STACK &amp; AUTOMAÇÃO.</span>
              <span>BR · DF / 2026</span>
            </div>
          </section>
          <section
            className="card-print-preview"
            aria-labelledby="card-print-heading"
          >
            <div>
              <p className="display-note">/ arquivo da identidade</p>
              <h2 id="card-print-heading">Cartão de visita oficial.</h2>
              <p>
                Prévia em PNG para consulta e arquivo SVG disponível para
                baixar.
              </p>
              <a className="text-link" href={cardAsset} download>
                Baixar arquivo SVG <ArrowDownToLine size={16} />
              </a>
            </div>
            <a
              className="card-print-image"
              href={cardAsset}
              download
              aria-label="Baixar cartão de visita oficial em SVG"
            >
              <img
                src={cardPreview}
                alt="Cartão de visita oficial da Salas Tech"
                loading="lazy"
                decoding="async"
              />
            </a>
          </section>
          <div className="card-actions">
            <a
              className="button button--primary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> Conversar no WhatsApp
            </a>
            <a className="text-link" href={cardAsset} download>
              Baixar cartão de visita oficial <ArrowDownToLine size={16} />
            </a>
            <Link className="text-link" href="/curriculo">
              Ver currículo <ArrowUpRight size={16} />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
