import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
  Layers3,
  Sparkles,
} from "lucide-react";
import { lazy, Suspense } from "react";
import { Link, useRoute } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import {
  caseInsights,
  orderedProjectKeys,
  projectCases,
  type CaseKey,
} from "@/data/projects";
import { trackEvent } from "@/lib/analytics";
import NotFound from "@/pages/NotFound";

const NetworkScene3D = lazy(() => import("@/components/NetworkScene3D"));

export default function ProjectDetail() {
  const [, params] = useRoute("/projetos/:slug");
  const requestedSlug = params?.slug || "";
  if (!Object.hasOwn(projectCases, requestedSlug)) {
    return <NotFound />;
  }
  const projectKey = requestedSlug as CaseKey;
  const project = projectCases[projectKey];
  const insights = caseInsights[projectKey] || caseInsights["etron-energy"];
  const currentIdx = orderedProjectKeys.indexOf(projectKey);
  const nextKey =
    orderedProjectKeys[(currentIdx + 1) % orderedProjectKeys.length];
  const nextProject = projectCases[nextKey];
  const path = `/projetos/${projectKey}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projetos",
            item: `${siteUrl}/#projetos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteUrl}${path}`,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: project.title,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        description: project.description,
        url: project.href,
        ...(project.code ? { codeRepository: project.code } : {}),
        creator: { "@type": "Organization", name: "Salas Tech", url: siteUrl },
        keywords: project.stack.join(", "),
      },
    ],
  };

  return (
    <>
      <SeoHead
        title={`${project.title} — Case study | Salas Tech`}
        description={project.description}
        path={path}
        jsonLd={jsonLd}
      />
      <div className="case-page">
        <header className="case-header">
          <Link href="/#projetos" className="case-back">
            <ArrowLeft size={16} /> voltar para projetos
          </Link>
          <BrandLockup href="/" />
          <nav className="case-header-nav" aria-label="Navegação rápida">
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#projetos">Projetos</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/processo">Processo</Link>
            <Link href="/curriculo">Currículo</Link>
            <span className="case-counter">{project.index} / 06</span>
          </nav>
        </header>
        <main className="case-main">
          <div className="case-kicker">
            <span>{project.index} / CASE STUDY</span>
            <span>{project.tag}</span>
          </div>
          <section className="case-hero">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> projeto em produção ·{" "}
                {project.accent}
              </p>
              <h1>
                {project.title}
                <span>.</span>
              </h1>
              <p className="case-subtitle">{project.subtitle}</p>
              <div className="case-actions">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--primary"
                  onClick={() =>
                    trackEvent("project_live_clicked", { project: projectKey })
                  }
                >
                  Visitar projeto <ExternalLink size={16} />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-code"
                    onClick={() =>
                      trackEvent("project_github_clicked", {
                        project: projectKey,
                      })
                    }
                  >
                    <Github size={16} /> ver repositório
                  </a>
                )}
              </div>
            </div>
            <div className="case-art case-art--3d">
              <img
                className="case-art-cover"
                src={project.cover}
                alt={`Arte visual específica do projeto ${project.title}`}
              />
              <div className="case-art-overlay" />
              <div className="case-art-grid" />
              <Suspense fallback={null}>
                <NetworkScene3D
                  variant="case"
                  hudLabel={`CASE.${project.index} // ${project.accent}`}
                />
              </Suspense>
              <strong className="case-art-watermark" aria-hidden="true">
                {project.accent}
              </strong>
              <span>
                BUILD / 2026
                <br />
                SALAS TECH · 3D CORE
              </span>
            </div>
          </section>
          <div
            className="case-dossier-signal"
            aria-label="Resumo técnico do case"
          >
            <div className="case-signal-card">
              <span>01 / ROLE</span>
              <strong>FULL STACK / PRODUCT</strong>
            </div>
            <div className="case-signal-card">
              <span>02 / SEGMENTO</span>
              <strong>{project.tag}</strong>
            </div>
            <div className="case-signal-card">
              <span>03 / STACK</span>
              <strong>{project.stack.slice(0, 3).join(" · ")}</strong>
            </div>
            <div className="case-signal-card">
              <span>04 / STATUS</span>
              <strong>
                <i /> LIVE / PUBLIC
              </strong>
            </div>
          </div>
          <section className="case-preview reveal-up">
            <div className="case-preview-head">
              <div>
                <span>/ preview ao vivo</span>
                <h2>
                  O projeto em <em>contexto.</em>
                </h2>
              </div>
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("project_preview_clicked", { project: projectKey })
                }
              >
                abrir em nova aba <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="case-preview-browser">
              <div className="preview-browser-bar">
                <span>
                  <i />
                  <i />
                  <i />
                </span>
                <small>{project.preview.replace("https://", "")}</small>
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="preview-live preview-live--link"
                >
                  ABRIR AO VIVO ↗
                </a>
              </div>
              <a
                className="case-preview-image-link"
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("project_preview_clicked", { project: projectKey })
                }
              >
                <img
                  src={project.previewImage}
                  alt={`Prévia visual do site ${project.title}`}
                />
                <span>
                  interagir com o projeto ao vivo <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </section>
          <section className="case-body">
            <div className="case-label">
              <Layers3 size={16} aria-hidden="true" /> / arquitetura &amp;
              contexto
            </div>
            <div className="case-copy">
              <p className="case-lead">{project.description}</p>
              <p>
                {project.outcome} Cada escolha de interface parte de uma
                pergunta simples: como reduzir a distância entre o que o produto
                faz e o que a pessoa precisa entender?
              </p>
            </div>
            <aside className="case-spec">
              <span>STACK &amp; TECNOLOGIAS</span>
              {project.stack.map((item) => (
                <strong key={item}>
                  <Check size={14} /> {item}
                </strong>
              ))}
              {project.code && (
                <>
                  <span className="case-spec-divider">REPOSITÓRIO</span>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("project_github_clicked", {
                        project: projectKey,
                      })
                    }
                  >
                    <Github size={14} /> GitHub oficial
                  </a>
                </>
              )}
              <span className="case-spec-divider">STATUS</span>
              <strong>
                <Check size={14} /> Live / public project
              </strong>
            </aside>
          </section>
          <section className="case-learning">
            <div className="case-learning-heading">
              <span>
                <Sparkles size={13} aria-hidden="true" /> / prática de
                construção
              </span>
              <h2>
                Ferramentas que
                <br />
                <em>viram aprendizado.</em>
              </h2>
              <p>
                Cada projeto também foi um laboratório: as escolhas técnicas
                respondem a um problema concreto e deixam uma próxima pergunta
                mais madura.
              </p>
            </div>
            <div className="case-learning-grid">
              <div className="case-learning-card">
                <span>FERRAMENTAS EM USO</span>
                {insights.tools.map((tool) => (
                  <strong key={tool}>
                    <Check size={14} /> {tool}
                  </strong>
                ))}
              </div>
              <div className="case-learning-card">
                <span>O QUE FICOU</span>
                {insights.learnings.map((learning) => (
                  <p key={learning}>
                    <Check size={14} /> {learning}
                  </p>
                ))}
              </div>
            </div>
          </section>
          <section className="case-switcher" aria-label="Todos os projetos">
            <div className="case-switcher-head">
              <span>NAVEGAR PELOS CASES PUBLICADOS (06)</span>
              <Link href="/#projetos">
                ver lista na home <ArrowUpRight size={14} />
              </Link>
            </div>
            <div className="case-switcher-grid">
              {orderedProjectKeys.map((key) => {
                const item = projectCases[key];
                const isActive = key === projectKey;
                return (
                  <Link
                    key={key}
                    href={`/projetos/${key}`}
                    className={`case-switcher-card ${isActive ? "case-switcher-card--active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>
                      {item.index} · {item.accent}
                    </span>
                    <strong>{item.title}</strong>
                    <small>{item.tag}</small>
                  </Link>
                );
              })}
            </div>
          </section>
          <section className="case-next">
            <span>PRÓXIMO NA TRILHA</span>
            <Link href={`/projetos/${nextKey}`} className="case-next-link">
              explorar {nextProject.title} <ArrowUpRight size={17} />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
