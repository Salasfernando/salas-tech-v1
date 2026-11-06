import { Code2, Compass, Layers3, Rocket, type LucideIcon } from "lucide-react";

export const processStepsDetail: readonly [
  string,
  string,
  string,
  string,
  string,
  LucideIcon,
][] = [
  [
    "01",
    "DIAGNÓSTICO & ESCOPO",
    "Briefing",
    "Entender contexto, público, restrições e o resultado que precisa existir depois do lançamento.",
    "Perguntas certas antes de qualquer tela.",
    Compass,
  ],
  [
    "02",
    "ARQUITETURA & UX",
    "Arquitetura e protótipo",
    "Organizar conteúdo, fluxos e prioridades em uma estrutura que o usuário consiga percorrer sem esforço.",
    "Clareza para decidir o que entra.",
    Layers3,
  ],
  [
    "03",
    "ENGENHARIA FULL STACK",
    "Desenvolvimento",
    "Construir a experiência com React, TypeScript, Next.js, Node.js e integrações de IA/APIs, mantendo performance, acessibilidade e manutenção no centro.",
    "Código que sustenta a ideia.",
    Code2,
  ],
  [
    "04",
    "PRODUÇÃO & EVOLUÇÃO",
    "Entrega e evolução",
    "Publicar, validar a experiência em ambiente real e deixar um caminho claro para a próxima versão do produto.",
    "O lançamento é o começo do aprendizado.",
    Rocket,
  ],
];

export const companyProcessSteps = [
  [
    "01",
    "Entender",
    "Mapeamos contexto, público, problema e o que precisa acontecer depois do clique.",
  ],
  [
    "02",
    "Estruturar",
    "Transformamos complexidade em arquitetura de informação, interface e prioridades.",
  ],
  [
    "03",
    "Construir",
    "Desenvolvemos com React, Next.js, TypeScript e Node.js, com atenção a detalhe e manutenção.",
  ],
  [
    "04",
    "Evoluir",
    "Validamos a experiência e deixamos um caminho claro para a próxima versão do produto.",
  ],
] as const;

export const processPrinciples = [
  {
    kicker: "01 / INTERAÇÃO",
    titlePrefix: "Pessoas antes",
    titleHighlight: "de pixels.",
    description:
      "Uma interface é uma conversa. Antes de escolher cor, componente ou animação, definimos o que a pessoa precisa entender e fazer.",
  },
  {
    kicker: "02 / ENGENHARIA",
    titlePrefix: "Entrega com",
    titleHighlight: "responsabilidade.",
    description:
      "Performance, semântica, segurança e manutenção entram no escopo desde o primeiro commit — não como uma correção tardia.",
  },
  {
    kicker: "03 / ARQUITETURA",
    titlePrefix: "Decisões que",
    titleHighlight: "evoluem.",
    description:
      "Documentamos o suficiente para que o produto continue compreensível quando o próximo problema aparecer.",
  },
] as const;
