import {
  Code2,
  Globe2,
  Layers3,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type EnglishServiceItem = {
  index: string;
  slug: string;
  title: string;
  copy: string;
  icon: LucideIcon;
};

export const englishServices: readonly EnglishServiceItem[] = [
  {
    index: "01",
    slug: "sites-institucionais",
    title: "Institutional websites",
    copy: "Clear, responsive websites that present your business, build trust and make the next step easy.",
    icon: Globe2,
  },
  {
    index: "02",
    slug: "produtos-web",
    title: "Web products",
    copy: "Applications and digital experiences shaped around the people who use them and the goals they support.",
    icon: Layers3,
  },
  {
    index: "03",
    slug: "sistemas-e-operacao",
    title: "Systems & operations",
    copy: "Tools, dashboards and workflows that organize information and support day-to-day decisions.",
    icon: Code2,
  },
  {
    index: "04",
    slug: "automacao",
    title: "Automation",
    copy: "Processes and integrations that reduce repetitive work and connect business steps more consistently.",
    icon: Workflow,
  },
];

export const serviceDetails = {
  "sites-institucionais": {
    lead: "Uma presença digital que apresenta seu negócio com clareza e transforma informação em um próximo passo fácil de encontrar.",
    focus: [
      "Planejamento, produção e organização de conteúdo para comunicar com clareza os serviços e diferenciais da empresa.",
      "Design responsivo e desenvolvimento de sites institucionais alinhados à identidade da marca.",
      "Configuração de CMS para que a equipe possa atualizar conteúdos com autonomia, quando o projeto pedir.",
      "SEO técnico, publicação, hospedagem e suporte para manter o site acessível, encontrável e atualizado.",
    ],
    projects: ["lounge-odontologia", "unovitta-odontologia", "noc-odontologia"],
  },
  "produtos-web": {
    lead: "Produtos digitais começam por entender quem usa, qual problema precisa ser resolvido e como a experiência pode evoluir.",
    focus: [
      "Mapeamento de necessidades, objetivos do produto e fluxos prioritários.",
      "Experiências com login e áreas autenticadas, conforme os papéis e as jornadas necessárias.",
      "Dashboards e interfaces para apresentar dados e estados do produto com clareza.",
      "Integração com APIs e serviços externos, incluindo fluxos de pagamento conforme o escopo.",
    ],
    projects: ["plataforma-atendimento-ia", "etron-monitoramento"],
  },
  "sistemas-e-operacao": {
    lead: "Sistemas para organizar informações e tornar processos operacionais mais visíveis para quem precisa agir e decidir.",
    focus: [
      "Entendimento do fluxo de trabalho e das informações que apoiam a operação.",
      "Painéis operacionais e relatórios para acompanhar dados, atividades e estados relevantes.",
      "Permissões e níveis de acesso de acordo com as responsabilidades de cada perfil.",
      "Integrações entre sistemas e APIs, com desenvolvimento atento à manutenção e evolução.",
    ],
    projects: ["plataforma-atendimento-ia", "etron-monitoramento"],
  },
  automacao: {
    lead: "Automação começa pela compreensão do processo: quais etapas se repetem, onde há retrabalho e como conectar o fluxo com consistência.",
    focus: [
      "Mapeamento das etapas do processo e dos pontos de intervenção manual.",
      "Automação de rotinas repetitivas e conexão de etapas entre ferramentas e serviços.",
      "Integrações por APIs e fluxos de WhatsApp para conectar ferramentas e apoiar comunicação e atendimento.",
      "Aplicação de inteligência artificial quando fizer sentido, com acompanhamento dos estados para manter a automação compreensível e sustentável.",
    ],
    projects: ["plataforma-atendimento-ia"],
  },
} as const;

export const serviceSteps = [
  ["01", "Entender", "Contexto, público, problema e resultado esperado."],
  ["02", "Estruturar", "Conteúdo, fluxos, interface e prioridades."],
  [
    "03",
    "Construir",
    "Desenvolvimento com atenção à experiência e manutenção.",
  ],
  ["04", "Evoluir", "Validação e um caminho claro para os próximos passos."],
] as const;
