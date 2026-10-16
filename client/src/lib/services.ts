import {
  Code2,
  Globe2,
  Layers3,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  index: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: readonly Service[] = [
  {
    index: "01",
    slug: "sites-institucionais",
    title: "Sites institucionais",
    description:
      "Presença digital clara, responsiva e preparada para apresentar sua empresa, gerar confiança e facilitar o próximo contato.",
    icon: Globe2,
  },
  {
    index: "02",
    slug: "produtos-web",
    title: "Produtos web",
    description:
      "Aplicações e experiências digitais desenhadas em torno das necessidades de quem usa e dos objetivos do negócio.",
    icon: Layers3,
  },
  {
    index: "03",
    slug: "sistemas-e-operacao",
    title: "Sistemas e operação",
    description:
      "Ferramentas, painéis e fluxos que ajudam a organizar informação, acompanhar operações e apoiar decisões.",
    icon: Code2,
  },
  {
    index: "04",
    slug: "automacao",
    title: "Automação",
    description:
      "Processos e integrações para reduzir tarefas repetitivas e conectar etapas do trabalho com mais consistência.",
    icon: Workflow,
  },
];
