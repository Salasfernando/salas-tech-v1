export type ArticleSummary = {
  index: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  read: string;
};

export const articles: ArticleSummary[] = [
  {
    index: "01",
    slug: "tipagem-produto",
    category: "REACT / FUNDAMENTOS",
    title: "Por que tipagem muda a conversa com o produto",
    excerpt:
      "TypeScript não é só uma camada de segurança: é uma forma de tornar decisões de interface mais claras antes do código crescer.",
    read: "6 min de leitura",
  },
  {
    index: "02",
    slug: "performance-arquitetura",
    category: "NEXT.JS / PERFORMANCE",
    title: "Performance começa na arquitetura",
    excerpt:
      "Uma página rápida nasce de escolhas de conteúdo, carregamento e responsabilidade — não apenas de uma métrica no final.",
    read: "8 min de leitura",
  },
  {
    index: "03",
    slug: "direito-codigo",
    category: "CARREIRA / PROCESSO",
    title: "Do Direito ao código: aprender por problemas",
    excerpt:
      "A transição para tecnologia ficou mais concreta quando cada estudo passou a responder a um problema real de negócio.",
    read: "5 min de leitura",
  },
  {
    index: "04",
    slug: "api-como-contrato",
    category: "NODE / API",
    title: "Uma API também é uma decisão de produto",
    excerpt:
      "Rotas, respostas e erros formam uma experiência para quem integra o sistema — não são apenas detalhes de backend.",
    read: "7 min de leitura",
  },
  {
    index: "05",
    slug: "componentes-consistentes",
    category: "REACT / UI",
    title: "Consistência nasce de componentes com contexto",
    excerpt:
      "Uma biblioteca visual útil não repete formas: ela preserva decisões e deixa o próximo fluxo mais simples.",
    read: "6 min de leitura",
  },
  {
    index: "06",
    slug: "deploy-sem-surpresa",
    category: "VERCEL / PROCESSO",
    title: "Deploy sem surpresa começa antes do deploy",
    excerpt:
      "Ambiente, variáveis e observabilidade fazem parte do produto quando a interface precisa chegar inteira ao usuário.",
    read: "5 min de leitura",
  },
  {
    index: "07",
    slug: "acessibilidade-na-pratica",
    category: "UI / ACESSIBILIDADE",
    title: "Acessibilidade começa no componente",
    excerpt:
      "Contraste, foco, semântica e teclado transformam uma interface bonita em uma experiência realmente utilizável.",
    read: "7 min de leitura",
  },
  {
    index: "08",
    slug: "estados-de-carregamento",
    category: "REACT / UX",
    title: "Estados de carregamento também comunicam",
    excerpt:
      "Loading, vazio e erro precisam orientar a próxima ação — não apenas ocupar o espaço enquanto o dado chega.",
    read: "6 min de leitura",
  },
  {
    index: "09",
    slug: "seo-tecnico-na-interface",
    category: "SEO / NEXT.JS",
    title: "SEO técnico faz parte da interface",
    excerpt:
      "Metadados, headings, links e performance ajudam o conteúdo a ser encontrado e compreendido por pessoas e buscadores.",
    read: "8 min de leitura",
  },
  {
    index: "10",
    slug: "dados-com-firebase",
    category: "FIREBASE / PRODUTO",
    title: "Dados conectados exigem estados claros",
    excerpt:
      "Quando o produto depende de dados remotos, sincronização, permissões e feedback precisam aparecer na experiência.",
    read: "7 min de leitura",
  },
];
