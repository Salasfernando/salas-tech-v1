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
  resumeChecksEn,
  resumeEducationEn,
  resumeMetricsEn,
  resumeProjectsEn,
  resumeSkillsEn,
} from "@/data/resume";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const NetworkScene3D = lazy(() => import("@/components/NetworkScene3D"));

export default function EnglishResume() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Fernando Salas Ferreira Résumé",
    url: `${siteUrl}/en/curriculo`,
    mainEntity: {
      "@type": "Person",
      name: "Fernando Salas Ferreira",
      jobTitle: "Founder and Full Stack Developer",
      worksFor: { "@type": "Organization", name: "Salas Tech" },
      email: CONTACT_EMAIL,
      sameAs: [
        "https://github.com/Salasfernando",
        "https://www.linkedin.com/in/salas-fernando",
      ],
    },
    inLanguage: "en",
  };

  return (
    <>
      <SeoHead
        title="Fernando Salas Ferreira — Résumé | Salas Tech"
        description="Fernando Salas Ferreira is the founder and Full Stack Developer at Salas Tech, working across websites, web products, systems and automation since June 2023."
        path="/en/curriculo"
        type="profile"
        jsonLd={jsonLd}
      />
      <div className="resume-page">
        <header className="case-header">
          <Link href="/en" className="case-back">
            <ArrowLeft size={16} /> back to home
          </Link>
          <BrandLockup href="/en" />
          <div className="resume-header-actions">
            <Link href="/en#services-en">Services</Link>
            <Link href="/en#work-en">Work</Link>
            <Link href="/en#about-en">About</Link>
            <Link href="/processo">Process</Link>
            <Link href="/curriculo">
              PT <span>↗</span>
            </Link>
            <a href={cvUrl} download>
              <ArrowDownToLine size={15} /> download PDF (PT)
            </a>
          </div>
        </header>
        <main className="resume-main">
          <div className="case-kicker">
            <span>CV / FERNANDO SALAS FERREIRA</span>
            <span>UPDATED 2026 · SALAS TECH</span>
          </div>
          <section className="resume-hero">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> founder / Full Stack Developer
              </p>
              <h1>
                Fernando
                <br />
                <span>Salas.</span>
              </h1>
              <p>
                I build websites, web products, multi-tenant SaaS platforms and
                AI-powered automation. My work combines Full Stack engineering
                with attention to architecture, operations and digital workflows
                that solve real business problems.
              </p>
              <div className="resume-metrics">
                {resumeMetricsEn.map((metric) => (
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
                  <MapPin size={14} /> Taguatinga, Brasília–DF, Brazil
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
                  SINCE 2023
                </span>
              </div>
            </div>
          </section>

          <section className="resume-grid">
            <div className="resume-label">
              <Layers3 size={15} aria-hidden="true" /> / experience
            </div>
            <div className="resume-entry resume-card-interactive">
              <div>
                <span>JUN 2023 — PRESENT</span>
                <h2>Salas Tech</h2>
                <p>Founder · Full Stack &amp; Automation Developer</p>
              </div>
              <div className="resume-detail">
                <p>
                  I lead digital projects from problem definition through
                  production delivery: multi-tenant SaaS platforms with AI and
                  CRM, web products, operational systems, institutional websites
                  and intelligent automation.
                </p>
                <div className="resume-checks">
                  {resumeChecksEn.map((check) => (
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
              <FolderGit2 size={15} aria-hidden="true" /> / featured projects
            </div>
            <div className="resume-projects-list">
              {resumeProjectsEn.map((project) => (
                <article className="resume-project-card" key={project.slug}>
                  <div className="resume-project-head">
                    <span>
                      {project.index} · {project.role}
                    </span>
                    <div className="resume-project-links">
                      <Link href={`/projetos/${project.slug}`}>
                        case study <ArrowUpRight size={13} />
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        live preview <ArrowUpRight size={13} />
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
              <Code2 size={15} aria-hidden="true" /> / education
            </div>
            <div className="resume-education">
              {resumeEducationEn.map((edu) => (
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
              <Sparkles size={15} aria-hidden="true" /> / core skills
            </div>
            <div className="resume-tags">
              {resumeSkillsEn.map((skill) => (
                <span key={skill}>
                  <i aria-hidden="true" /> {skill}
                </span>
              ))}
            </div>
          </section>

          <div className="resume-bottom">
            <a className="button button--primary" href={cvUrl} download>
              Download full résumé (Portuguese) <ArrowDownToLine size={17} />
            </a>
            <Link href="/en#work-en" className="case-back">
              explore selected work <ArrowUpRight size={15} />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
