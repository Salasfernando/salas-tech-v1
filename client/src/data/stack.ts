import {
  Code2,
  Database,
  Globe2,
  Layers3,
  Server,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type StackItem = {
  name: string;
  domain: string;
  note: string;
  icon: LucideIcon;
};

export const techStackPt: readonly StackItem[] = [
  {
    name: "React",
    domain: "INTERFACE & UI",
    note: "Interfaces e aplicações web modulares",
    icon: Layers3,
  },
  {
    name: "Next.js",
    domain: "FULL STACK & SSR",
    note: "Produtos preparados para performance e evolução",
    icon: Globe2,
  },
  {
    name: "TypeScript",
    domain: "ARQUITETURA & TIPAGEM",
    note: "Contratos claros antes da complexidade crescer",
    icon: Code2,
  },
  {
    name: "GSAP · Framer Motion · Three.js",
    domain: "WEBGL 3D & MOTION",
    note: "Transições coreografadas, física fluida e cenas 3D interativas",
    icon: Sparkles,
  },
  {
    name: "Node.js",
    domain: "APIS & BACK-END",
    note: "APIs REST, integrações e regras de produto",
    icon: Server,
  },
  {
    name: "PostgreSQL + Prisma",
    domain: "DADOS & MODELAGEM",
    note: "Persistência relacional consistente e segura",
    icon: Database,
  },
  {
    name: "Automação + IA",
    domain: "WORKFLOWS & OPERAÇÃO",
    note: "Fluxos inteligentes conectados à rotina do negócio",
    icon: Workflow,
  },
];

export const techStackEn: readonly StackItem[] = [
  {
    name: "React",
    domain: "INTERFACE & UI",
    note: "Modular web interfaces and applications",
    icon: Layers3,
  },
  {
    name: "Next.js",
    domain: "FULL STACK & SSR",
    note: "Products structured for performance and evolution",
    icon: Globe2,
  },
  {
    name: "TypeScript",
    domain: "ARCHITECTURE & TYPES",
    note: "Clear contracts before complexity grows",
    icon: Code2,
  },
  {
    name: "GSAP · Framer Motion · Three.js",
    domain: "WEBGL 3D & MOTION",
    note: "Choreographed transitions, fluid physics and 3D scenes",
    icon: Sparkles,
  },
  {
    name: "Node.js",
    domain: "APIS & BACK-END",
    note: "REST APIs, integrations and product services",
    icon: Server,
  },
  {
    name: "PostgreSQL + Prisma",
    domain: "DATA & MODELING",
    note: "Consistent relational data and schema design",
    icon: Database,
  },
  {
    name: "Automation + AI workflows",
    domain: "WORKFLOWS & OPERATIONS",
    note: "Processes connected to real business operations",
    icon: Workflow,
  },
];

export const companyCoreStack: readonly string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "GSAP & Framer Motion",
  "Three.js & WebGL",
  "APIs REST",
  "Automação + IA",
];
