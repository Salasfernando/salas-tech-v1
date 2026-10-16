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
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const mark = "/assets/salas-tech-mark-512.png";
const cardAsset = "/assets/cart%C3%A3o%20de%20visitas.svg";
const cardPreview = "/assets/cartao-de-visitas.png";
const qrAsset = "/assets/salas-tech-portfolio-qr_e789fa98.png";

export default function DigitalCard() {
  return (
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
                rel="noreferrer"
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
                rel="noreferrer"
              >
                <Github size={17} /> GitHub <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/salas-fernando"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
              </a>
              <a
                href="https://www.instagram.com/salas_tech"
                target="_blank"
                rel="noreferrer"
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
              Prévia em PNG para consulta e arquivo SVG disponível para baixar.
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
            rel="noreferrer"
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
  );
}
