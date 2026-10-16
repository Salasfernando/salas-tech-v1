import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { WHATSAPP_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

export default function QuotePage() {
  useEffect(() => {
    trackEvent("quote_route_redirected_to_whatsapp");
    window.location.replace(WHATSAPP_URL);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contato Salas Tech",
    description: "Contato comercial pelo WhatsApp oficial da Salas Tech.",
    url: `${siteUrl}/orcamento`,
  };
  return (
    <>
      <SeoHead
        title="Contato pelo WhatsApp — Salas Tech"
        description="A rota de orçamento da Salas Tech encaminha a conversa diretamente ao WhatsApp oficial, sem formulário."
        path="/orcamento"
        jsonLd={jsonLd}
      />
      <main className="quote-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para início
          </Link>
          <BrandLockup href="/" />
          <Link href="/processo" className="case-back">
            ver processo <ArrowUpRight size={15} />
          </Link>
        </header>
        <section className="quote-page-main section-pad">
          <div className="quote-page-intro">
            <p className="eyebrow">
              <span className="status-dot" /> SALAS TECH / PRIMEIRO CONTATO
            </p>
            <h1>
              Vamos conversar
              <br />
              sobre seu <span>projeto.</span>
            </h1>
            <p
              className="quote-redirect-message"
              role="status"
              aria-live="polite"
            >
              Estamos abrindo o WhatsApp da Salas Tech. Nenhum dado é solicitado
              ou armazenado por este site.
            </p>
            <div className="quote-redirect-actions">
              <a
                className="button button--primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Continuar no WhatsApp
              </a>
              <Link className="text-link" href="/">
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
