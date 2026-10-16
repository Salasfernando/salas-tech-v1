import { ArrowLeft, Home, RefreshCw, Wrench } from "lucide-react";
import { Link } from "wouter";
import SeoHead, { siteUrl } from "@/components/SeoHead";

export default function Maintenance() {
  return (
    <>
      <SeoHead
        title="Salas Tech — Manutenção programada"
        description="A Salas Tech está passando por uma atualização técnica breve. Em instantes, a experiência estará disponível novamente."
        path="/manutencao"
        noIndex
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Manutenção programada",
          url: `${siteUrl}/manutencao`,
        }}
      />
      <main className="maintenance-page">
        <div className="maintenance-grid" aria-hidden="true" />
        <header className="maintenance-header">
          <Link href="/" className="wordmark">
            <span>SALAS</span>
            <em>TECH</em>
          </Link>
          <span>
            <span className="status-dot" /> sistema em atualização
          </span>
        </header>
        <section className="maintenance-main">
          <div className="maintenance-icon">
            <Wrench size={28} />
          </div>
          <p className="eyebrow">/ maintenance mode</p>
          <h1>
            Uma pausa para
            <br />
            <span>ficar melhor.</span>
          </h1>
          <p>
            Estamos aplicando melhorias de performance e segurança. O conteúdo
            volta em instantes, com a mesma clareza de sempre.
          </p>
          <div className="maintenance-actions">
            <button
              className="button button--primary"
              onClick={() => window.location.reload()}
            >
              <RefreshCw size={16} /> Tentar novamente
            </button>
            <Link href="/" className="text-link">
              <Home size={16} /> Voltar para home
            </Link>
          </div>
        </section>
        <footer className="maintenance-footer">
          <Link href="/" className="case-back">
            <ArrowLeft size={15} /> sair da manutenção
          </Link>
          <span>DESIGNED TO RECOVER GRACEFULLY · 2026</span>
        </footer>
      </main>
    </>
  );
}
