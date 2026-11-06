import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { articles } from "@/lib/articles";
import {
  buildCategoryUrl,
  filterArticles,
  getNoteFilterFromSearch,
  noteFilters,
  type NoteFilter,
} from "@/lib/noteFilters";

export default function NotesArchive() {
  const [activeFilter, setActiveFilter] = useState<NoteFilter>(() =>
    typeof window !== "undefined"
      ? getNoteFilterFromSearch(window.location.search)
      : "Todas",
  );

  useEffect(() => {
    const syncFilter = () => {
      setActiveFilter(getNoteFilterFromSearch(window.location.search));
    };
    window.addEventListener("popstate", syncFilter);
    return () => window.removeEventListener("popstate", syncFilter);
  }, []);

  const handleSelectFilter = (filter: NoteFilter) => {
    setActiveFilter(filter);
    if (typeof window !== "undefined") {
      const nextUrl = buildCategoryUrl(window.location.href, filter);
      window.history.replaceState(null, "", nextUrl);
    }
  };

  const visibleArticles = filterArticles(articles, activeFilter);

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
          <div
            className="filter-bar"
            role="group"
            aria-label="Filtrar notas por categoria"
          >
            {noteFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filter-chip ${activeFilter === filter ? "filter-chip--active" : ""}`}
                aria-pressed={activeFilter === filter}
                onClick={() => handleSelectFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <motion.div layout className="articles-list">
            <AnimatePresence mode="popLayout">
              {visibleArticles.map((article) => (
                <motion.div
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link className="article-row" href={`/notas/${article.slug}`}>
                    <span className="article-index">{article.index}</span>
                    <div>
                      <span className="article-category">
                        {article.category}
                      </span>
                      <h2>{article.title}</h2>
                      <p>{article.excerpt}</p>
                    </div>
                    <span className="article-read">
                      {article.read} <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>
    </>
  );
}
