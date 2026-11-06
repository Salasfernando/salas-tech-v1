export type HomeProject = {
  index: string;
  slug: CaseKey;
  featured?: boolean;
  title: string;
  type: string;
  description: string;
  stack: string;
  href: string;
  tag: string;
  previewImage: string;
  previewAlt: string;
};

export type EnglishProject = {
  index: string;
  slug: CaseKey;
  featured?: boolean;
  title: string;
  meta: string;
  href: string;
  image: string;
  alt: string;
};

export const projectCases = {
  "plataforma-atendimento-ia": {
    index: "01",
    tag: "IA & AUTOMAÇÃO / SAAS MULTI-EMPRESA",
    title: "Plataforma de Atendimento & CRM com IA",
    subtitle:
      "Sistema web para centralizar o atendimento de múltiplas empresas via WhatsApp, com assistentes de IA personalizados, conversas organizadas e transferência para atendimento humano.",
    description:
      "O painel reúne funil Kanban, gestão de contatos, responsáveis, prioridades, métricas e campanhas, mantendo os dados e as configurações de cada empresa separados em arquitetura multi-tenant.",
    outcome:
      "A integração com o WhatsApp utiliza a Evolution API. A IA Google Gemini auxilia nas respostas, na transcrição de áudios e na interpretação de imagens e documentos, enquanto uma fila persistente processa as mensagens em segundo plano com controle de tentativas e proteção contra reenvios incertos.",
    stack: [
      "Next.js & React",
      "TypeScript, JavaScript, SQL & CSS",
      "Node.js",
      "PostgreSQL (Supabase) & Prisma ORM",
      "Supabase Auth",
      "Google Gemini (@google/genai)",
      "Evolution API (WhatsApp)",
      "Redis & Fila Persistente",
      "Docker, Railway & Vercel",
      "Tailwind CSS & CSS Modules",
      "Node.js Test Runner & ESLint",
    ],
    href: "https://app.salastech.com.br/login",
    code: "",
    preview: "https://app.salastech.com.br/login",
    previewImage: "/assets/salas-tech-atendimento-preview.png",
    accent: "AI · CRM",
    cover: "/assets/salas-tech-atendimento-preview.png",
  },
  "etron-energy": {
    index: "03",
    tag: "ENERGIA / INSTITUCIONAL",
    title: "E-Tron Energy",
    subtitle:
      "Uma presença digital clara para uma empresa que transforma luz em energia.",
    description:
      "O desafio era apresentar uma solução de energia solar com clareza comercial e linguagem confiável, sem transformar a experiência em um catálogo genérico.",
    outcome:
      "Uma interface institucional direta, responsiva e orientada à descoberta do serviço.",
    stack: [
      "React 19.2",
      "TypeScript",
      "Vite 7",
      "Tailwind CSS 4",
      "Framer Motion",
      "Radix UI",
      "Lucide React",
      "Zod",
    ],
    href: "https://etron-energy.vercel.app",
    code: "",
    preview: "https://etron-energy.vercel.app",
    previewImage: "/assets/etron-energy_f8d34623.webp",
    accent: "ENERGY",
    cover: "/assets/etron-energy-cover.webp",
  },
  "etron-monitoramento": {
    index: "06",
    tag: "ENERGIA / PRODUTO",
    title: "E-Tron Monitoramento",
    subtitle: "Dados operacionais organizados para decisões mais rápidas.",
    description:
      "Um sistema de monitoramento exige mais do que uma tela bonita: a hierarquia precisa tornar o estado da operação legível e acionável.",
    outcome:
      "Uma base de produto para aproximar monitoramento, gestão e serviços de energia solar.",
    stack: [
      "Next.js 16.3",
      "React 19.2",
      "Tailwind CSS 4",
      "TypeScript 5",
      "React Hook Form",
      "Zod",
    ],
    href: "https://etron-monitoramento.vercel.app/monitoramento",
    code: "",
    preview: "https://etron-monitoramento.vercel.app/monitoramento",
    previewImage: "/assets/etron-monitoramento_b5650d38.webp",
    accent: "MONITOR",
    cover: "/assets/etron-monitoramento-cover.webp",
  },
  "noc-odontologia": {
    index: "05",
    tag: "SAÚDE / INSTITUCIONAL",
    title: "NOC Odontologia",
    subtitle:
      "Uma experiência digital orientada para tornar serviços e confiança clínica mais fáceis de encontrar.",
    description:
      "O projeto precisava equilibrar clareza de serviços, presença institucional e uma jornada simples para quem busca atendimento.",
    outcome:
      "Uma plataforma institucional responsiva com arquitetura de conteúdo, linguagem visual consistente e foco em usabilidade.",
    stack: [
      "React 19.2",
      "TypeScript",
      "Vite 7",
      "Tailwind CSS 4",
      "Framer Motion",
      "React Icons",
      "Zod",
    ],
    href: "https://noc-odontologia.vercel.app",
    code: "https://github.com/Salasfernando/noc-odontologia",
    preview: "https://noc-odontologia.vercel.app",
    previewImage: "/assets/noc-odontologia-preview.webp",
    accent: "NOC",
    cover: "/assets/noc-odontologia-cover.webp",
  },
  "lounge-odontologia": {
    index: "02",
    tag: "SAÚDE / EXPERIÊNCIA",
    title: "Lounge Odontologia",
    subtitle:
      "Cuidado clínico traduzido em uma experiência digital acolhedora.",
    description:
      "O projeto precisava equilibrar confiança profissional e proximidade humana, guiando o visitante por uma narrativa de cuidado.",
    outcome:
      "Um website institucional com foco em experiência, presença digital corporativa e navegação sem ruído.",
    stack: [
      "React 19",
      "Vite 6",
      "React Router 7",
      "React Slick",
      "React Icons",
      "ESLint",
    ],
    href: "https://www.loungeodontologia.com.br",
    code: "",
    preview: "https://www.loungeodontologia.com.br",
    previewImage: "/assets/lounge-odontologia-preview.webp",
    accent: "CARE",
    cover: "/assets/lounge-odontologia-cover.webp",
  },
  "unovitta-odontologia": {
    index: "04",
    tag: "SAÚDE / INSTITUCIONAL",
    title: "Unovitta Odontologia",
    subtitle: "Uma identidade digital própria para uma clínica em movimento.",
    description:
      "A arquitetura de conteúdo foi pensada para transformar informação clínica em uma jornada simples, confiável e humana.",
    outcome:
      "Uma presença digital corporativa com linguagem visual própria e foco na usabilidade.",
    stack: [
      "React 19.1",
      "TypeScript 5.8",
      "Vite 6",
      "React Router 7",
      "React Icons",
      "ESLint",
    ],
    href: "https://www.unovitta.com.br",
    code: "",
    preview: "https://www.unovitta.com.br",
    previewImage: "/assets/unovitta-preview.webp",
    accent: "SMILE",
    cover: "/assets/unovitta-odontologia-cover.webp",
  },
} as const;

export type CaseKey = keyof typeof projectCases;

export const orderedProjectKeys: readonly CaseKey[] = [
  "plataforma-atendimento-ia",
  "lounge-odontologia",
  "etron-energy",
  "unovitta-odontologia",
  "noc-odontologia",
  "etron-monitoramento",
];

export const caseInsights: Record<
  CaseKey,
  { tools: string[]; learnings: string[] }
> = {
  "plataforma-atendimento-ia": {
    tools: [
      "Next.js, React, TypeScript & Node.js",
      "PostgreSQL (Supabase), Supabase Auth & Prisma ORM",
      "Google Gemini (@google/genai) & Evolution API",
      "Docker, Railway, Redis & Vercel",
      "Tailwind CSS, CSS Modules & Node.js Test Runner",
    ],
    learnings: [
      "Como isolar dados, configurações, funil Kanban, campanhas e métricas em uma arquitetura multi-empresa segura.",
      "Como orquestrar a IA Google Gemini para apoiar respostas, transcrever áudios e interpretar imagens e documentos com transferência fluida para atendimento humano.",
      "Como estruturar uma fila persistente em segundo plano com controle de tentativas e proteção contra reenvios incertos no WhatsApp.",
    ],
  },
  "etron-energy": {
    tools: [
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Radix UI",
      "Lucide React",
      "Zod",
    ],
    learnings: [
      "Como transformar energia solar em uma narrativa digital clara.",
      "Como equilibrar conversão comercial, hierarquia visual e performance.",
      "Como usar movimento com intenção para orientar a leitura sem competir com a mensagem.",
    ],
  },
  "etron-monitoramento": {
    tools: ["Next.js", "Tailwind CSS", "TypeScript", "React Hook Form", "Zod"],
    learnings: [
      "Como tornar estados operacionais legíveis para decisões rápidas.",
      "Como estruturar formulários e validações em um fluxo de produto.",
      "Como aproximar dados, operação e serviço em uma mesma experiência.",
    ],
  },
  "noc-odontologia": {
    tools: ["Vite", "Tailwind CSS", "Framer Motion", "React Icons", "Zod"],
    learnings: [
      "Como construir confiança clínica sem sobrecarregar a navegação.",
      "Como organizar serviços e informação institucional em blocos escaneáveis.",
      "Como combinar precisão visual, acessibilidade e ritmo editorial.",
    ],
  },
  "lounge-odontologia": {
    tools: ["Vite", "React Router", "React Slick", "React Icons", "ESLint"],
    learnings: [
      "Como traduzir acolhimento clínico em uma experiência digital consistente.",
      "Como usar imagens, depoimentos institucionais e chamadas para guiar a jornada.",
      "Como transformar um projeto independente em uma presença corporativa viva.",
    ],
  },
  "unovitta-odontologia": {
    tools: ["Vite", "React Router", "TypeScript", "React Icons", "ESLint"],
    learnings: [
      "Como criar uma identidade própria para uma clínica em movimento.",
      "Como organizar conteúdo de saúde com clareza e proximidade.",
      "Como manter consistência entre linguagem visual, componentes e responsividade.",
    ],
  },
};

export const homeProjects: readonly HomeProject[] = [
  {
    index: "01",
    slug: "plataforma-atendimento-ia",
    featured: true,
    title: "Plataforma de Atendimento & CRM com IA",
    type: "SaaS Multi-empresa & Automação",
    description:
      "Sistema web para centralizar o atendimento via WhatsApp de múltiplas empresas, com assistentes Google Gemini, fila persistente e CRM Kanban.",
    stack:
      "Next.js · TypeScript · PostgreSQL · Prisma · Gemini AI · Evolution API · Redis",
    href: "https://app.salastech.com.br/login",
    tag: "IA & CRM",
    previewImage: "/assets/salas-tech-atendimento-preview.png",
    previewAlt:
      "Prévia da Plataforma de Atendimento Inteligente via WhatsApp e CRM da Salas Tech",
  },
  {
    index: "02",
    slug: "lounge-odontologia",
    featured: true,
    title: "Lounge Odontologia",
    type: "Experiência institucional",
    description:
      "Website corporativo criado para transformar cuidado clínico em uma experiência digital acolhedora.",
    stack: "React 19 · Vite · React Router · React Slick",
    href: "https://www.loungeodontologia.com.br",
    tag: "Saúde",
    previewImage: "/assets/lounge-odontologia-preview.webp",
    previewAlt: "Prévia pública do site Lounge Odontologia",
  },
  {
    index: "03",
    slug: "etron-energy",
    title: "E-Tron Energy",
    type: "Plataforma institucional",
    description:
      "Presença digital para uma empresa de energia solar, com foco em clareza comercial, performance e confiança.",
    stack: "React · TypeScript · Tailwind CSS",
    href: "https://etron-energy.vercel.app",
    tag: "Energia",
    previewImage: "/assets/etron-energy_f8d34623.webp",
    previewAlt: "Prévia do projeto E-Tron Energy",
  },
  {
    index: "04",
    slug: "unovitta-odontologia",
    title: "Unovitta Odontologia",
    type: "Presença digital",
    description:
      "Plataforma institucional com linguagem visual própria, arquitetura de conteúdo e navegação orientada.",
    stack: "React · TypeScript · Vite",
    href: "https://www.unovitta.com.br",
    tag: "Saúde",
    previewImage: "/assets/unovitta-preview.webp",
    previewAlt: "Prévia do projeto Unovitta Odontologia",
  },
  {
    index: "05",
    slug: "noc-odontologia",
    title: "NOC Odontologia",
    type: "Plataforma institucional",
    description:
      "Experiência digital que torna serviços e confiança clínica mais fáceis de encontrar.",
    stack: "React · TypeScript · Tailwind CSS",
    href: "https://noc-odontologia.vercel.app",
    tag: "Saúde",
    previewImage: "/assets/noc-odontologia-preview.webp",
    previewAlt: "Prévia do projeto NOC Odontologia",
  },
  {
    index: "06",
    slug: "etron-monitoramento",
    title: "E-Tron Monitoramento",
    type: "Sistema de monitoramento",
    description:
      "Interface para gestão e serviços de energia solar, aproximando operação, dados e tomada de decisão.",
    stack: "Next.js · React · TypeScript · Zod",
    href: "https://etron-monitoramento.vercel.app/monitoramento",
    tag: "Produto",
    previewImage: "/assets/etron-monitoramento_b5650d38.webp",
    previewAlt: "Prévia do projeto E-Tron Monitoramento",
  },
];

export const englishProjects: readonly EnglishProject[] = [
  {
    index: "01",
    slug: "plataforma-atendimento-ia",
    featured: true,
    title: "AI Customer Service & WhatsApp CRM",
    meta: "SaaS / AI & Automation",
    href: "https://app.salastech.com.br/login",
    image: "/assets/salas-tech-atendimento-preview.png",
    alt: "Preview of Salas Tech AI Customer Service and WhatsApp CRM platform",
  },
  {
    index: "02",
    slug: "lounge-odontologia",
    featured: true,
    title: "Lounge Odontologia",
    meta: "Healthcare / Experience",
    href: "https://www.loungeodontologia.com.br",
    image: "/assets/lounge-odontologia-preview.webp",
    alt: "Public preview of Lounge Odontologia website",
  },
  {
    index: "03",
    slug: "etron-energy",
    title: "E-Tron Energy",
    meta: "Energy / Institutional",
    href: "https://etron-energy.vercel.app",
    image: "/assets/etron-energy_f8d34623.webp",
    alt: "Preview of E-Tron Energy website",
  },
  {
    index: "04",
    slug: "unovitta-odontologia",
    title: "Unovitta Odontologia",
    meta: "Healthcare / Institutional",
    href: "https://www.unovitta.com.br",
    image: "/assets/unovitta-preview.webp",
    alt: "Preview of Unovitta Odontologia website",
  },
  {
    index: "05",
    slug: "noc-odontologia",
    title: "NOC Odontologia",
    meta: "Healthcare / Institutional",
    href: "https://noc-odontologia.vercel.app",
    image: "/assets/noc-odontologia-preview.webp",
    alt: "Preview of NOC Odontologia website",
  },
  {
    index: "06",
    slug: "etron-monitoramento",
    title: "E-Tron Monitoring",
    meta: "Energy / Product",
    href: "https://etron-monitoramento.vercel.app/monitoramento",
    image: "/assets/etron-monitoramento_b5650d38.webp",
    alt: "Preview of E-Tron Monitoring product",
  },
];

export const publishedProjects = [
  {
    slug: "plataforma-atendimento-ia",
    name: "Plataforma de Atendimento & CRM com IA",
    type: "SaaS Multi-empresa & IA",
  },
  {
    slug: "lounge-odontologia",
    name: "Lounge Odontologia",
    type: "Experiência institucional",
  },
  {
    slug: "unovitta-odontologia",
    name: "Unovitta Odontologia",
    type: "Site institucional",
  },
  {
    slug: "noc-odontologia",
    name: "NOC Odontologia",
    type: "Site institucional",
  },
  {
    slug: "etron-monitoramento",
    name: "E-Tron Monitoramento",
    type: "Produto web",
  },
] as const;
