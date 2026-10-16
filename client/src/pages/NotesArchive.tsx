import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { articles } from "@/lib/articles";

export default function NotesArchive() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Notas técnicas — Salas Tech",
    url: `${siteUrl}/notas`,
    inLanguage: "pt-BR",
  };

  return (
    <>
      <SeoHead
        title="Notas técnicas — Salas Tech"
        description="Artigos sobre engenharia de software, produto, acessibilidade e decisões de desenvolvimento."
        path="/notas"
        jsonLd={jsonLd}
      />
      <main className="notes-archive-page">
        <header className="case-header">
          <Link href="/#artigos" className="case-back">
            <ArrowLeft size={16} /> voltar para início
          </Link>
          <BrandLockup href="/" />
          <span className="case-counter">SALAS TECH / NOTAS</span>
        </header>
        <section className="articles-section section-pad notes-archive-content">
          <div className="section-kicker">
            <span>ENGENHARIA / PRODUTO</span>
            <span>APRENDER EM PÚBLICO</span>
          </div>
          <div className="articles-heading">
            <h1>
              Notas <span>técnicas.</span>
            </h1>
            <p>
              Ideias e decisões sobre desenvolvimento, experiência e produto.
            </p>
          </div>
          <div className="articles-list">
            {articles.map((article) => (
              <Link
                className="article-row"
                href={`/notas/${article.slug}`}
                key={article.slug}
              >
                <span className="article-index">{article.index}</span>
                <div>
                  <span className="article-category">{article.category}</span>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                </div>
                <span className="article-read">
                  {article.read} <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
