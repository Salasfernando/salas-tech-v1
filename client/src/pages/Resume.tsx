import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Github,
  Linkedin,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const cvUrl = "/assets/fernando-salas-curriculo-v4.pdf";
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "APIs REST",
  "Automação de processos",
  "Fluxos de IA",
  "Git / GitHub",
  "Vercel",
];

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
            <span>ATUALIZADO EM 2026</span>
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
                Construo sites, produtos web, sistemas e automações. Combino
                desenvolvimento Full Stack com atenção à experiência, à operação
                e a fluxos digitais que resolvem necessidades reais.
              </p>
              <div className="resume-links">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle size={16} /> WhatsApp{" "}
                  <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://github.com/Salasfernando"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://www.linkedin.com/in/salas-fernando"
                  target="_blank"
                  rel="noreferrer"
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
          </section>
          <section className="resume-grid">
            <div className="resume-label">/ experiência</div>
            <div className="resume-entry">
              <div>
                <span>JUN 2023 — PRESENTE</span>
                <h2>Salas Tech</h2>
                <p>Proprietário · Desenvolvedor Full Stack</p>
              </div>
              <div className="resume-detail">
                <p>
                  Conduzo projetos digitais da compreensão do problema à
                  entrega: sites institucionais, produtos web, sistemas e
                  automações para negócios.
                </p>
                <div className="resume-checks">
                  <span>
                    <Check size={14} /> Interfaces e aplicações com React,
                    Next.js e TypeScript
                  </span>
                  <span>
                    <Check size={14} /> Back-end, bancos relacionais, Prisma e
                    APIs REST
                  </span>
                  <span>
                    <Check size={14} /> Automação de processos e fluxos de
                    trabalho com IA
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="resume-grid">
            <div className="resume-label">/ formação</div>
            <div className="resume-education">
              <div>
                <span>EM ANDAMENTO · 2º SEMESTRE</span>
                <h2>ADS · UNINTER</h2>
                <p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
              </div>
              <div>
                <span>2017 — 2023</span>
                <h2>Direito · UNIP</h2>
                <p>Bacharelado em Direito</p>
              </div>
              <div>
                <span>FORMAÇÃO COMPLEMENTAR</span>
                <h2>Desenvolvimento Full Stack</h2>
                <p>Sujeito Programador</p>
              </div>
            </div>
          </section>
          <section className="resume-grid">
            <div className="resume-label">/ competências</div>
            <div className="resume-tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
          <div className="resume-bottom">
            <a className="button button--primary" href={cvUrl} download>
              Baixar currículo completo <ArrowDownToLine size={17} />
            </a>
            <Link href="/" className="case-back">
              voltar para o portfólio <ArrowUpRight size={15} />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
