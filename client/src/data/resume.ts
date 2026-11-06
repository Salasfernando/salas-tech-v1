export const cvUrl = "/assets/fernando-salas-curriculo-v4.pdf";

export const resumeSkillsPt: readonly string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "PostgreSQL (Supabase)",
  "Supabase Auth",
  "Prisma ORM",
  "Redis & Filas Persistentes",
  "Google Gemini (@google/genai)",
  "Evolution API (WhatsApp)",
  "GSAP & ScrollTrigger",
  "Framer Motion",
  "Three.js (WebGL)",
  "Tailwind CSS & CSS Modules",
  "APIs REST",
  "Automação & IA",
  "Docker & Railway",
  "Vercel",
  "Node.js Test Runner",
  "ESLint",
  "Git & GitHub",
];

export const resumeSkillsEn: readonly string[] = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "SQL",
  "PostgreSQL (Supabase)",
  "Supabase Auth",
  "Prisma ORM",
  "Redis & Persistent Queues",
  "Google Gemini (@google/genai)",
  "Evolution API (WhatsApp)",
  "GSAP & ScrollTrigger",
  "Framer Motion",
  "Three.js (WebGL)",
  "Tailwind CSS & CSS Modules",
  "REST APIs",
  "Automation & AI Workflows",
  "Docker & Railway",
  "Vercel",
  "Node.js Test Runner",
  "ESLint",
  "Git & GitHub",
];

export const resumeMetricsPt = [
  { label: "01 / ATUAÇÃO", value: "Desde Junho de 2023" },
  { label: "02 / PRODUÇÃO", value: "+6 Produtos & Sistemas" },
  { label: "03 / ESPECIALIDADE", value: "Full Stack · IA · Automação" },
] as const;

export const resumeMetricsEn = [
  { label: "01 / ACTIVE", value: "Since June 2023" },
  { label: "02 / PRODUCTION", value: "+6 Products & Systems" },
  { label: "03 / FOCUS", value: "Full Stack · AI · Automation" },
] as const;

export const resumeChecksPt: readonly string[] = [
  "Arquitetura e desenvolvimento completo de aplicações web, plataformas SaaS multi-empresa, CRMs e sites institucionais com React, Next.js, TypeScript, Tailwind CSS e CSS Modules",
  "Modelagem relacional, autenticação e back-end com Node.js, PostgreSQL (Supabase), Supabase Auth, Prisma ORM, Redis e filas persistentes em segundo plano com controle de tentativas",
  "Orquestração de IA e mensageria com Google Gemini (@google/genai) e Evolution API (WhatsApp) para atendimento automatizado, transcrição de áudio, leitura de documentos e transferência humana",
  "Interfaces interativas com WebGL 3D (Three.js), animações coreografadas (GSAP, Framer Motion), testes automatizados (Node.js Test Runner) e deploy contínuo em Vercel, Railway e Docker",
];

export const resumeChecksEn: readonly string[] = [
  "End-to-end architecture and development of web applications, multi-tenant SaaS platforms, CRMs and institutional websites with React, Next.js, TypeScript, Tailwind CSS and CSS Modules",
  "Relational data modeling, authentication and back-end services with Node.js, PostgreSQL (Supabase), Supabase Auth, Prisma ORM, Redis and persistent background queues with retry control",
  "AI and messaging orchestration with Google Gemini (@google/genai) and Evolution API (WhatsApp) for automated support, audio transcription, document analysis and human handoff",
  "Interactive interfaces with WebGL 3D (Three.js), choreographed motion (GSAP, Framer Motion), automated testing (Node.js Test Runner) and continuous delivery on Vercel, Railway and Docker",
];

export type ResumeProjectHighlight = {
  index: string;
  slug: string;
  title: string;
  role: string;
  summary: string;
  stack: string;
  liveUrl: string;
};

export const resumeProjectsPt: readonly ResumeProjectHighlight[] = [
  {
    index: "01",
    slug: "plataforma-atendimento-ia",
    title: "Plataforma de Atendimento Inteligente via WhatsApp & CRM",
    role: "SaaS Multi-empresa · IA & Automação",
    summary:
      "Sistema web para centralizar o atendimento de múltiplas empresas com assistentes Google Gemini personalizados, transcrição de áudio, leitura de imagens/documentos, fila persistente em segundo plano, funil Kanban, métricas e campanhas.",
    stack:
      "Next.js · React · TypeScript · Node.js · PostgreSQL (Supabase) · Prisma · Gemini (@google/genai) · Evolution API · Redis · Docker · Railway · Vercel",
    liveUrl: "https://app.salastech.com.br/login",
  },
  {
    index: "02",
    slug: "etron-monitoramento",
    title: "E-Tron Energy & E-Tron Monitoramento",
    role: "Plataforma Institucional & Sistema de Monitoramento",
    summary:
      "Ecossistema digital para empresa de energia solar, combinando plataforma comercial de alta conversão e sistema de monitoramento operacional para gestão e tomada de decisão.",
    stack:
      "Next.js · React 19 · TypeScript · Tailwind CSS · React Hook Form · Zod",
    liveUrl: "https://etron-monitoramento.vercel.app/monitoramento",
  },
  {
    index: "03",
    slug: "lounge-odontologia",
    title: "Lounge Odontologia, Unovitta & NOC Odontologia",
    role: "Plataformas Digitais para o Setor de Saúde",
    summary:
      "Websites corporativos e plataformas institucionais projetados para traduzir confiança clínica, organizar serviços e acelerar o agendamento de pacientes.",
    stack:
      "React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion · SEO Técnico",
    liveUrl: "https://www.loungeodontologia.com.br",
  },
];

export const resumeProjectsEn: readonly ResumeProjectHighlight[] = [
  {
    index: "01",
    slug: "plataforma-atendimento-ia",
    title: "Intelligent WhatsApp Customer Service & CRM Platform",
    role: "Multi-tenant SaaS · AI & Automation",
    summary:
      "Web platform centralizing multi-company WhatsApp customer service with custom Google Gemini assistants, audio transcription, image/document interpretation, persistent background queues, Kanban CRM, metrics and campaigns.",
    stack:
      "Next.js · React · TypeScript · Node.js · PostgreSQL (Supabase) · Prisma · Gemini (@google/genai) · Evolution API · Redis · Docker · Railway · Vercel",
    liveUrl: "https://app.salastech.com.br/login",
  },
  {
    index: "02",
    slug: "etron-monitoramento",
    title: "E-Tron Energy & E-Tron Monitoring",
    role: "Institutional Platform & Operations System",
    summary:
      "Digital ecosystem for a solar energy company combining a high-conversion commercial website with an operational monitoring interface for management and decision-making.",
    stack:
      "Next.js · React 19 · TypeScript · Tailwind CSS · React Hook Form · Zod",
    liveUrl: "https://etron-monitoramento.vercel.app/monitoramento",
  },
  {
    index: "03",
    slug: "lounge-odontologia",
    title: "Lounge Odontologia, Unovitta & NOC Odontologia",
    role: "Digital Platforms for Healthcare",
    summary:
      "Corporate websites and institutional platforms designed to convey clinical trust, structure services and streamline patient conversion.",
    stack:
      "React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion · Technical SEO",
    liveUrl: "https://www.loungeodontologia.com.br",
  },
];

export const resumeEducationPt = [
  {
    period: "EM ANDAMENTO · 2º SEMESTRE",
    title: "ADS · UNINTER",
    subtitle: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
  },
  {
    period: "2017 — 2023",
    title: "Direito · UNIP",
    subtitle: "Bacharelado em Direito",
  },
  {
    period: "FORMAÇÃO COMPLEMENTAR",
    title: "Desenvolvimento Full Stack",
    subtitle: "Sujeito Programador",
  },
] as const;

export const resumeEducationEn = [
  {
    period: "IN PROGRESS · 2ND SEMESTER",
    title: "Systems Analysis & Development · UNINTER",
    subtitle: "Technology degree",
  },
  {
    period: "2017 — 2023",
    title: "Law · UNIP",
    subtitle: "Bachelor of Law",
  },
  {
    period: "ADDITIONAL TRAINING",
    title: "Full Stack Development",
    subtitle: "Sujeito Programador",
  },
] as const;
