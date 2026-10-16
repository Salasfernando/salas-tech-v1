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
  "REST APIs",
  "Process automation",
  "AI workflows",
  "Git / GitHub",
  "Vercel",
];

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
            <span>UPDATED 2026</span>
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
                I build websites, web products, systems and automation. My work
                combines Full Stack development with attention to user
                experience, operations and digital workflows that address real
                needs.
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
                  <MapPin size={14} /> Taguatinga, Brasília–DF, Brazil
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
                SINCE 2023
              </span>
            </div>
          </section>
          <section className="resume-grid">
            <div className="resume-label">/ experience</div>
            <div className="resume-entry">
              <div>
                <span>JUN 2023 — PRESENT</span>
                <h2>Salas Tech</h2>
                <p>Founder · Full Stack Developer</p>
              </div>
              <div className="resume-detail">
                <p>
                  I lead digital projects from problem definition through
                  delivery: institutional websites, web products, systems and
                  automation for businesses.
                </p>
                <div className="resume-checks">
                  <span>
                    <Check size={14} /> Interfaces and applications with React,
                    Next.js and TypeScript
                  </span>
                  <span>
                    <Check size={14} /> Back-end, relational databases, Prisma
                    and REST APIs
                  </span>
                  <span>
                    <Check size={14} /> Process automation and AI-enabled
                    workflows
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="resume-grid">
            <div className="resume-label">/ education</div>
            <div className="resume-education">
              <div>
                <span>IN PROGRESS · 2ND SEMESTER</span>
                <h2>Systems Analysis &amp; Development · UNINTER</h2>
                <p>Technology degree</p>
              </div>
              <div>
                <span>2017 — 2023</span>
                <h2>Law · UNIP</h2>
                <p>Bachelor of Law</p>
              </div>
              <div>
                <span>ADDITIONAL TRAINING</span>
                <h2>Full Stack Development</h2>
                <p>Sujeito Programador</p>
              </div>
            </div>
          </section>
          <section className="resume-grid">
            <div className="resume-label">/ core skills</div>
            <div className="resume-tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </section>
          <div className="resume-bottom">
            <a className="button button--primary" href={cvUrl} download>
              Download full résumé (Portuguese) <ArrowDownToLine size={17} />
            </a>
            <Link href="/en" className="case-back">
              back to portfolio <ArrowUpRight size={15} />
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
