import { ArrowLeft, Bug, Code2, Home, RotateCcw, Terminal } from "lucide-react";
import { Link, useLocation } from "wouter";
import SeoHead, { siteUrl } from "@/components/SeoHead";

export default function NotFound() {
  const [location] = useLocation();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Página não encontrada — Salas Tech",
    url: `${siteUrl}${location}`,
  };
  return (
    <>
      <SeoHead
        title="Página não encontrada — Salas Tech"
        description="O endereço solicitado não existe. Volte à página inicial da Salas Tech para continuar."
        path={location}
        noIndex
        jsonLd={jsonLd}
      />
      <main className="not-found-page">
      <div className="not-found-grid" aria-hidden="true" />
      <header className="not-found-header">
        <Link href="/" className="wordmark">
          <span>SALAS</span>
          <em>TECH</em>
        </Link>
        <span className="not-found-status">
          <span className="status-dot" /> runtime / route not found
        </span>
      </header>
      <section className="not-found-main">
        <div className="not-found-terminal">
          <div className="not-found-terminal-bar">
            <span>
              <i />
              <i />
              <i />
            </span>
            <span>salas-tech://404</span>
            <span>READ ONLY</span>
          </div>
          <div className="not-found-code">
            <p>
              <span className="code-muted">$</span> locate{" "}
              <strong>{location}</strong>
            </p>
            <p>
              <span className="code-cyan">✕</span> route not found in production
              build
            </p>
            <p>
              <span className="code-cyan">→</span> returning a useful interface
              instead of a blank screen
            </p>
            <div className="code-divider" />
            <p>
              <span className="code-muted">const</span> nextMove{" "}
              <span className="code-cyan">=</span>{" "}
              <span className="code-cyan">"go_back_and_build"</span>
              <span className="code-cyan">;</span>
            </p>
            <p className="code-cursor">▮</p>
          </div>
        </div>
        <div className="not-found-copy">
          <p className="eyebrow">
            <Bug size={14} /> 404 / PAGE NOT FOUND
          </p>
          <h1>
            Essa rota
            <br />
            <span>bugou.</span>
          </h1>
          <p>
            Mas fica tranquilo: nenhum deploy foi ferido. O endereço que você
            tentou acessar não existe — ou decidiu tirar um day off.
          </p>
          <div className="not-found-actions">
            <Link href="/" className="button button--primary">
              <Home size={16} /> Voltar para home
            </Link>
            <button
              className="not-found-reload"
              onClick={() => window.history.back()}
            >
              <ArrowLeft size={15} /> página anterior
            </button>
          </div>
        </div>
        <div className="not-found-facts">
          <span>
            <Terminal size={14} /> ERROR_CODE: 404
          </span>
          <span>
            <Code2 size={14} /> STATUS: RECOVERABLE
          </span>
          <span>
            <RotateCcw size={14} /> ACTION: NAVIGATE_HOME
          </span>
        </div>
      </section>
      <footer className="not-found-footer">
        <span>FERNANDO SALAS / SALAS TECH</span>
        <span>DESIGNED TO FAIL GRACEFULLY · 2026</span>
      </footer>
      </main>
    </>
  );
}
