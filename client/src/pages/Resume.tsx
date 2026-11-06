import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  FolderGit2,
  Github,
  Layers3,
  Linkedin,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { lazy, Suspense } from "react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import {
  cvUrl,
  resumeChecksPt,
  resumeEducationPt,
  resumeMetricsPt,
  resumeProjectsPt,
  resumeSkillsPt,
} from "@/data/resume";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const NetworkScene3D = lazy(() => import("@/components/NetworkScene3D"));

export default function Resume() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Currículo de Fernando Salas Ferreira",
    url: `${siteUrl}/curriculo`,
    mainEntity: {
      "@type": "Person",
      name: "Fernando Salas Ferreira",
      jobTitle: "Proprietário e Desenvolvedor Full Stack",
      worksFor: { "@type": "Organization", name: "Salas Tech" },
      email: CONTACT_EMAIL,
      sameAs: [
        "https://github.com/Salasfernando",
        "https://www.linkedin.com/in/salas-fernando",
      ],
    },
  };

  return (
    <>
      <SeoHead
        title="Fernando Salas Ferreira — Currículo | Salas Tech"
        description="Currículo profissional de Fernando Salas Ferreira: proprietário e desenvolvedor Full Stack na Salas Tech desde junho de 2023."
        path="/curriculo"
        type="profile"
        jsonLd={jsonLd}
      />
      <div className="resume-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para home
          </Link>
          <BrandLockup href="/" />
          <div className="resume-header-actions">
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#projetos">Projetos</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/processo">Processo</Link>
            <Link href="/en/curriculo">
              EN <span>↗</span>
            </Link>
            <a href={cvUrl} download>
              <ArrowDownToLine size={15} /> baixar PDF
            </a>
          </div>
        </header>
        <main className="resume-main">
          <div className="case-kicker">
            <span>CV / FERNANDO SALAS FERREIRA</span>
            <span>ATUALIZADO EM 2026 · SALAS TECH</span>
          </div>
          <section className="resume-hero">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> proprietário / desenvolvedor
                Full Stack
              </p>
              <h1>
                Fernando
                <br />
                <span>Salas.</span>
              </h1>
              <p>
                Construo sites, produtos web, sistemas SaaS multi-empresa e
                automações com Inteligência Artificial. Combino desenvolvimento
                Full Stack com atenção à arquitetura, à operação e a fluxos
                digitais que resolvem necessidades reais.
              </p>
              <div className="resume-metrics">
                {resumeMetricsPt.map((metric) => (
                  <div className="resume-metric-card" key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
              <div className="resume-links">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} /> WhatsApp{" "}
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://github.com/Salasfernando"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/salas-fernando"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="resume-contact-details">
                <span>
                  <MapPin size={14} /> Taguatinga, Brasília–DF
                </span>
                <span>{CONTACT_EMAIL}</span>
              </div>
            </div>
            <div className="resume-visual-3d" aria-hidden="true">
              <Suspense fallback={null}>
                <NetworkScene3D variant="resume" />
              </Suspense>
              <div className="resume-stamp">
                <strong>
                  FULL
                  <br />
                  STACK
                  <br />+ AUTO
                </strong>
                <span>
                  BR · DF
                  <br />
                  DESDE 2023
                </span>
              </div>
            </div>
          </section>

          <section className="resume-grid">
            <div className="resume-label">
              <Layers3 size={15} aria-hidden="true" /> / experiência
            </div>
            <div className="resume-entry resume-card-interactive">
              <div>
                <span>JUN 2023 — PRESENTE</span>
                <h2>Salas Tech</h2>
                <p>Proprietário · Desenvolvedor Full Stack &amp; Automação</p>
              </div>
              <div className="resume-detail">
                <p>
                  Conduzo projetos digitais da compreensão do problema à entrega
                  em produção: plataformas SaaS multi-empresa com IA e CRM,
                  produtos web, sistemas operacionais, sites institucionais e
                  automações inteligentes.
                </p>
                <div className="resume-checks">
                  {resumeChecksPt.map((check) => (
                    <span key={check}>
                      <Check size={14} /> {check}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="resume-grid">
            <div className="resume-label">
              <FolderGit2 size={15} aria-hidden="true" /> / projetos em destaque
            </div>
            <div className="resume-projects-list">
              {resumeProjectsPt.map((project) => (
                <article className="resume-project-card" key={project.slug}>
                  <div className="resume-project-head">
                    <span>
                      {project.index} · {project.role}
                    </span>
                    <div className="resume-project-links">
                      <Link href={`/projetos/${project.slug}`}>
                        ver case <ArrowUpRight size={13} />
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        abrir ao vivo <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <small>{project.stack}</small>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-grid">
            <div className="resume-label">
              <Code2 size={15} aria-hidden="true" /> / formação
            </div>
            <div className="resume-education">
              {resumeEducationPt.map((edu) => (
                <div className="resume-edu-card" key={edu.title}>
                  <span>{edu.period}</span>
                  <h2>{edu.title}</h2>
                  <p>{edu.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-grid">
            <div className="resume-label">
              <Sparkles size={15} aria-hidden="true" /> / competências
            </div>
            <div className="resume-tags">
              {resumeSkillsPt.map((skill) => (
                <span key={skill}>
                  <i aria-hidden="true" /> {skill}
                </span>
              ))}
            </div>
          </section>

          <div className="resume-bottom">
            <a className="button button--primary" href={cvUrl} download>
              Baixar currículo completo <ArrowDownToLine size={17} />
            </a>
            <Link href="/#projetos" className="case-back">
              explorar projetos publicados <ArrowUpRight size={15} />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
