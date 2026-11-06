import { ArrowDownToLine, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { brandAssetsList } from "@/data/brandAssets";

export default function BrandAssets() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Materiais da marca — Salas Tech",
    url: `${siteUrl}/marca`,
    inLanguage: "pt-BR",
  };

  return (
    <>
      <SeoHead
        title="Materiais da marca — Salas Tech"
        description="Logo oficial, guia da marca e cartão de visita da Salas Tech para parceiros e fornecedores."
        path="/marca"
        jsonLd={jsonLd}
      />
      <main className="brand-assets-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para início
          </Link>
          <BrandLockup href="/" />
          <span className="case-counter">IDENTIDADE / 2026</span>
        </header>
        <section className="brand-assets-hero section-pad">
          <p className="eyebrow">
            <span className="status-dot" /> SALAS TECH / MATERIAIS OFICIAIS
          </p>
          <h1>
            Materiais da
            <br />
            <span>marca.</span>
          </h1>
          <p>
            Arquivos oficiais para parceiros, fornecedores e imprensa. Para
            preservar a identidade, consulte o guia antes de aplicar a marca.
          </p>
        </section>
        <section
          className="brand-assets-grid section-pad"
          aria-label="Downloads dos materiais da marca Salas Tech"
        >
          {brandAssetsList.map((asset) => (
            <article className="brand-asset-card" key={asset.index}>
              <span className="brand-asset-label">
                {asset.index} / {asset.label}
              </span>
              <div className="brand-asset-preview">
                <img src={asset.image} alt={asset.alt} decoding="async" />
              </div>
              <div className="brand-asset-info">
                <div>
                  <h2>{asset.title}</h2>
                  <p>{asset.format}</p>
                </div>
                <a
                  href={asset.href}
                  download
                  aria-label={`Baixar ${asset.title}`}
                >
                  <ArrowDownToLine size={18} />
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
