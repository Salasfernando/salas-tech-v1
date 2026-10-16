import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ExternalLink,
  Github,
} from "lucide-react";
import { Link, useRoute } from "wouter";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { trackEvent } from "@/lib/analytics";
import NotFound from "@/pages/NotFound";

const cases = {
  "etron-energy": {
    index: "02",
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
    index: "05",
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
    index: "04",
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
    index: "01",
    tag: "SAÚDE / EXPERIÊNCIA",
    title: "Lounge Odontologia",
    subtitle:
      "Meu principal projeto: cuidado clínico traduzido em uma experiência digital acolhedora.",
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
    index: "03",
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

type CaseKey = keyof typeof cases;
const caseInsights: Record<CaseKey, { tools: string[]; learnings: string[] }> =
  {
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
      tools: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "React Hook Form",
        "Zod",
      ],
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
export default function ProjectDetail() {
  const [, params] = useRoute("/projetos/:slug");
  const requestedSlug = params?.slug || "";
  if (!Object.hasOwn(cases, requestedSlug)) {
    return <NotFound />;
  }
  const projectKey = requestedSlug as CaseKey;
  const project = cases[projectKey];
  const insights = caseInsights[projectKey] || caseInsights["etron-energy"];
  const path = `/projetos/${projectKey}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projetos",
            item: `${siteUrl}/#projetos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `${siteUrl}${path}`,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: project.title,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        description: project.description,
        url: project.href,
        ...(project.code ? { codeRepository: project.code } : {}),
        creator: { "@type": "Organization", name: "Salas Tech", url: siteUrl },
        keywords: project.stack.join(", "),
      },
    ],
  };
  return (
    <>
      <SeoHead
        title={`${project.title} — Case study | Salas Tech`}
        description={project.description}
        path={path}
        jsonLd={jsonLd}
      />
      <div className="case-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para projetos
          </Link>
          <Link href="/" className="wordmark">
            <span>SALAS</span>
            <em>TECH</em>
          </Link>
          <span className="case-counter">{project.index} / 05</span>
        </header>
        <main className="case-main">
          <div className="case-kicker">
            <span>{project.index} / CASE STUDY</span>
            <span>{project.tag}</span>
          </div>
          <section className="case-hero">
            <div>
              <p className="eyebrow">
                <span className="status-dot" /> projeto em produção
              </p>
              <h1>
                {project.title}
                <span>.</span>
              </h1>
              <p className="case-subtitle">{project.subtitle}</p>
              <div className="case-actions">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button button--primary"
                  onClick={() =>
                    trackEvent("project_live_clicked", { project: projectKey })
                  }
                >
                  Visitar projeto <ExternalLink size={16} />
                </a>
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="case-code"
                    onClick={() =>
                      trackEvent("project_github_clicked", {
                        project: projectKey,
                      })
                    }
                  >
                    <Github size={16} /> ver repositório
                  </a>
                )}
              </div>
            </div>
            <div className="case-art">
              <img
                className="case-art-cover"
                src={project.cover}
                alt={`Arte visual específica do projeto ${project.title}`}
              />
              <div className="case-art-overlay" />
              <div className="case-art-grid" />
              <span>
                BUILD / 2026
                <br />
                SALAS TECH
              </span>
            </div>
          </section>
          <div
            className="case-dossier-signal"
            aria-label="Resumo técnico do case"
          >
            <div>
              <span>ROLE</span>
              <strong>FULL STACK / PRODUCT</strong>
            </div>
            <div>
              <span>SEGMENTO</span>
              <strong>{project.tag}</strong>
            </div>
            <div>
              <span>STACK</span>
              <strong>{project.stack.slice(0, 3).join(" · ")}</strong>
            </div>
            <div>
              <span>STATUS</span>
              <strong>
                <i /> LIVE / PUBLIC
              </strong>
            </div>
          </div>
          <section className="case-preview reveal-up">
            <div className="case-preview-head">
              <div>
                <span>/ preview ao vivo</span>
                <h2>
                  O projeto em <em>contexto.</em>
                </h2>
              </div>
              <a
                href={project.preview}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("project_preview_clicked", { project: projectKey })
                }
              >
                abrir em nova aba <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="case-preview-browser">
              <div className="preview-browser-bar">
                <span>
                  <i />
                  <i />
                  <i />
                </span>
                <small>{project.preview.replace("https://", "")}</small>
                <span className="preview-live">LIVE</span>
              </div>
              <a
                className="case-preview-image-link"
                href={project.preview}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackEvent("project_preview_clicked", { project: projectKey })
                }
              >
                <img
                  src={project.previewImage}
                  alt={`Prévia visual do site ${project.title}`}
                />
                <span>
                  abrir projeto <ArrowUpRight size={16} />
                </span>
              </a>
            </div>
          </section>
          <section className="case-body">
            <div className="case-label">/ o contexto</div>
            <div className="case-copy">
              <p className="case-lead">{project.description}</p>
              <p>
                {project.outcome} Cada escolha de interface parte de uma
                pergunta simples: como reduzir a distância entre o que o produto
                faz e o que a pessoa precisa entender?
              </p>
            </div>
            <aside className="case-spec">
              <span>STACK PRINCIPAL</span>
              {project.stack.map((item) => (
                <strong key={item}>
                  <Check size={14} /> {item}
                </strong>
              ))}
              {project.code && (
                <>
                  <span className="case-spec-divider">REPOSITÓRIO</span>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() =>
                      trackEvent("project_github_clicked", {
                        project: projectKey,
                      })
                    }
                  >
                    <Github size={14} /> GitHub oficial
                  </a>
                </>
              )}
              <span className="case-spec-divider">STATUS</span>
              <strong>
                <Check size={14} /> Live / public project
              </strong>
            </aside>
          </section>
          <section className="case-learning">
            <div className="case-learning-heading">
              <span>/ prática de construção</span>
              <h2>
                Ferramentas que
                <br />
                <em>viram aprendizado.</em>
              </h2>
              <p>
                Cada projeto também foi um laboratório: as escolhas técnicas
                respondem a um problema concreto e deixam uma próxima pergunta
                mais madura.
              </p>
            </div>
            <div className="case-learning-grid">
              <div>
                <span>FERRAMENTAS EM USO</span>
                {insights.tools.map((tool) => (
                  <strong key={tool}>
                    <Check size={14} /> {tool}
                  </strong>
                ))}
              </div>
              <div>
                <span>O QUE FICOU</span>
                {insights.learnings.map((learning) => (
                  <p key={learning}>
                    <Check size={14} /> {learning}
                  </p>
                ))}
              </div>
            </div>
          </section>
          <section className="case-next">
            <span>PRÓXIMO NA TRILHA</span>
            <Link
              href="/projetos/lounge-odontologia"
              className="case-next-link"
            >
              explorar outro projeto <ArrowUpRight size={17} />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
