import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { notesContent, noteSnippets, type NoteSlug } from "@/data/notesContent";
import { trackEvent } from "@/lib/analytics";
import NotFound from "@/pages/NotFound";

export default function ArticleDetail() {
  const [, params] = useRoute("/notas/:slug");
  const requestedSlug = params?.slug || "";
  const hasNote = Object.hasOwn(notesContent, requestedSlug);
  const slug = (hasNote ? requestedSlug : "tipagem-produto") as NoteSlug;
  const note = notesContent[slug];
  const snippet = noteSnippets[slug] || noteSnippets["tipagem-produto"];
  const [copied, setCopied] = useState(false);
  const [noteCopied, setNoteCopied] = useState(false);
  const [codeOpen, setCodeOpen] = useState(false);

  useEffect(() => {
    if (!codeOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCodeOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [codeOpen]);

  if (!hasNote) {
    return <NotFound />;
  }

  const code = snippet.code.replaceAll("\\n", "\n");
  const copyCode = async () => {
    await navigator.clipboard?.writeText(code);
    trackEvent("note_code_copied", { note: slug });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  const copyNoteLink = async () => {
    const noteUrl = `${siteUrl}/notas/${slug}`;
    try {
      await navigator.clipboard.writeText(noteUrl);
    } catch {
      const input = document.createElement("textarea");
      input.value = noteUrl;
      input.setAttribute("readonly", "true");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    trackEvent("note_link_copied", { note: slug });
    setNoteCopied(true);
    window.setTimeout(() => setNoteCopied(false), 2400);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: note.title,
        description: note.intro,
        author: { "@type": "Person", name: "Fernando Salas" },
        publisher: { "@type": "Organization", name: "Salas Tech" },
        inLanguage: "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Notas",
            item: `${siteUrl}/#artigos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: note.title,
            item: `${siteUrl}/notas/${slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <SeoHead
        title={`${note.title} | Salas Tech`}
        description={note.intro}
        path={`/notas/${slug}`}
        image={`${siteUrl}/assets/Logo%20Salas%20Tech.png`}
        imageAlt={`Logo oficial da Salas Tech — nota técnica ${note.title}`}
        jsonLd={jsonLd}
      />
      <div className="note-page">
        <header className="case-header">
          <Link href="/#artigos" className="case-back">
            <ArrowLeft size={16} /> voltar para notas
          </Link>
          <BrandLockup href="/" />
          <span className="case-counter">{note.index} / 10</span>
        </header>
        <main className="note-main">
          <div className="case-kicker">
            <span>{note.index} / TECH NOTE</span>
            <span>{note.category}</span>
          </div>
          <div className="note-dossier-signal" aria-label="Metadados da nota">
            <span>
              <b>FORMAT</b> TECHNICAL NOTE
            </span>
            <span>
              <b>TOPIC</b> {note.category}
            </span>
            <span>
              <b>AUTHOR</b> FERNANDO SALAS
            </span>
            <span>
              <b>READING</b> {snippet.language} / 2026
            </span>
          </div>
          <article className="note-article">
            <p className="eyebrow">
              <span className="status-dot" /> nota de aprendizado
            </p>
            <h1>
              {note.title}
              <span>.</span>
            </h1>
            <p className="note-intro">{note.intro}</p>
            <div className="note-meta">
              <span>FERNANDO SALAS</span>
              <span>NOTA {note.index}</span>
              <span>2026</span>
            </div>
            {note.sections.map((section, sectionIndex) => (
              <section className="note-section" key={section.heading}>
                <div className="note-section-label">
                  <CheckCircle2 size={15} /> ideia{" "}
                  {String(sectionIndex + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </div>
              </section>
            ))}
            <section className="code-lab">
              <div className="code-lab-header">
                <span>LAB / EXEMPLO APLICÁVEL</span>
                <div className="code-lab-actions">
                  <button type="button" onClick={() => setCodeOpen(true)}>
                    expandir código
                  </button>
                  <button type="button" onClick={copyCode}>
                    {copied ? (
                      <>
                        <Check size={14} /> copiado
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> copiar código
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="code-tabs">
                <span className="code-tab code-tab--active">
                  {snippet.language}
                </span>
                <span className="code-tab">exemplo</span>
              </div>
              <pre>
                <code>{code}</code>
              </pre>
            </section>
            <AnimatePresence>
              {codeOpen && (
                <motion.div
                  className="code-modal-backdrop"
                  role="presentation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onMouseDown={(event) => {
                    if (event.target === event.currentTarget)
                      setCodeOpen(false);
                  }}
                >
                  <motion.section
                    className="code-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="code-modal-title"
                    initial={{ opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: 10 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="code-modal-header">
                      <div>
                        <span>LAB / EXEMPLO APLICÁVEL</span>
                        <h2 id="code-modal-title">
                          {snippet.language}
                          <span>.</span>
                        </h2>
                      </div>
                      <button
                        type="button"
                        className="code-modal-close"
                        onClick={() => setCodeOpen(false)}
                        aria-label="Fechar exemplo de código"
                      >
                        ×
                      </button>
                    </div>
                    <pre>
                      <code>{code}</code>
                    </pre>
                    <button
                      type="button"
                      className="button button--primary code-modal-copy"
                      onClick={copyCode}
                    >
                      {copied ? "Código copiado" : "Copiar código"}{" "}
                      <Copy size={15} />
                    </button>
                  </motion.section>
                </motion.div>
              )}
            </AnimatePresence>
            {noteCopied && (
              <div
                className="copy-success-toast"
                role="status"
                aria-live="polite"
              >
                <Check size={16} /> Link da nota copiado
              </div>
            )}
            <div className="note-footer">
              <span>APRENDER EM PÚBLICO / SALAS TECH</span>
              <div className="note-footer-actions">
                <button
                  className="note-copy-link"
                  type="button"
                  onClick={copyNoteLink}
                >
                  <Copy size={14} /> copiar link da nota
                </button>
                <Link href="/#artigos">
                  ver outras notas <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
