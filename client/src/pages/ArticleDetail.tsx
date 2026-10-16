import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
} from "lucide-react";
import { useState } from "react";
import { Link, useRoute } from "wouter";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { trackEvent } from "@/lib/analytics";
import NotFound from "@/pages/NotFound";

const notes = {
  "tipagem-produto": {
    index: "01",
    category: "REACT / FUNDAMENTOS",
    title: "Por que tipagem muda a conversa com o produto",
    intro:
      "TypeScript não é só uma camada de segurança: é uma forma de tornar decisões de interface mais claras antes do código crescer.",
    sections: [
      {
        heading: "O problema antes do código",
        text: "Quando uma interface cresce sem um contrato claro, pequenas mudanças de conteúdo ou estado começam a espalhar dúvida. O componente funciona, mas ninguém sabe exatamente o que ele aceita, devolve ou garante.",
      },
      {
        heading: "A tipagem como conversa",
        text: "Definir tipos para dados, propriedades e estados cria uma linguagem compartilhada entre interface e regra de negócio. Isso torna as decisões mais explícitas e reduz o espaço para interpretações diferentes.",
      },
      {
        heading: "Uma prática simples",
        text: "Comece tipando as fronteiras: respostas de API, props de componentes e estados que mudam a interface. A tipagem mais valiosa é aquela que deixa a próxima decisão mais fácil para outra pessoa.",
      },
    ],
  },
  "performance-arquitetura": {
    index: "02",
    category: "NEXT.JS / PERFORMANCE",
    title: "Performance começa na arquitetura",
    intro:
      "Uma página rápida nasce de escolhas de conteúdo, carregamento e responsabilidade — não apenas de uma métrica no final.",
    sections: [
      {
        heading: "Velocidade é percepção",
        text: "O usuário percebe quando a interface organiza a espera, entrega o essencial primeiro e evita movimentos inesperados. Performance, nesse sentido, é uma decisão de experiência.",
      },
      {
        heading: "Responsabilidade bem distribuída",
        text: "Separar o que precisa ser renderizado, carregado ou interagido ajuda a reduzir custo sem sacrificar clareza. A arquitetura deve servir a jornada, não apenas a estrutura do código.",
      },
      {
        heading: "O diagnóstico antes da otimização",
        text: "Antes de trocar ferramentas, observe o caminho crítico: o que bloqueia a primeira leitura, o que pode ser adiado e quais recursos realmente sustentam a próxima ação?",
      },
    ],
  },
  "direito-codigo": {
    index: "03",
    category: "CARREIRA / PROCESSO",
    title: "Do Direito ao código: aprender por problemas",
    intro:
      "A transição para tecnologia ficou mais concreta quando cada estudo passou a responder a um problema real de negócio.",
    sections: [
      {
        heading: "A mudança de linguagem",
        text: "O Direito me ensinou a organizar argumentos, investigar contexto e cuidar das consequências de uma decisão. Na tecnologia, essas habilidades continuam úteis — apenas mudam os artefatos.",
      },
      {
        heading: "Projetos como laboratório",
        text: "Construir projetos independentes tornou o aprendizado observável. Cada tela, API ou deploy passou a responder a uma pergunta concreta, em vez de ser apenas um exercício isolado.",
      },
      {
        heading: "Continuar em movimento",
        text: "A formação técnica é contínua. O objetivo não é conhecer todas as respostas, mas criar um processo confiável para investigar, testar, explicar e melhorar.",
      },
    ],
  },
  "api-como-contrato": {
    index: "04",
    category: "NODE / API",
    title: "Uma API também é uma decisão de produto",
    intro:
      "Rotas, respostas e erros formam uma experiência para quem integra o sistema — não são apenas detalhes de backend.",
    sections: [
      {
        heading: "O contrato aparece na borda",
        text: "Quem consome uma API precisa saber o que enviar, o que receber e como reagir quando algo não acontece. Esse contrato é uma parte real da experiência do produto.",
      },
      {
        heading: "Erros também comunicam",
        text: "Uma resposta de erro consistente reduz o tempo de investigação e ajuda o front-end a tomar decisões melhores. Clareza aqui economiza conversa depois.",
      },
      {
        heading: "Pensar antes de expor",
        text: "Antes de criar uma nova rota, pergunte qual decisão ela habilita. Uma API bem desenhada não expõe tudo: ela organiza o que o produto precisa saber.",
      },
    ],
  },
  "componentes-consistentes": {
    index: "05",
    category: "REACT / UI",
    title: "Consistência nasce de componentes com contexto",
    intro:
      "Uma biblioteca visual útil não repete formas: ela preserva decisões e deixa o próximo fluxo mais simples.",
    sections: [
      {
        heading: "Repetição não é sistema",
        text: "Copiar o mesmo botão em vários arquivos cria semelhança, mas não necessariamente consistência. O sistema precisa explicar quando e por que cada componente existe.",
      },
      {
        heading: "Contexto é parte da API",
        text: "Estados, conteúdo e acessibilidade precisam viajar junto com o componente. Assim, a interface mantém intenção mesmo quando muda de tela.",
      },
      {
        heading: "Comece pelo que se repete",
        text: "Mapeie os padrões que já aparecem no produto e transforme-os em decisões compartilhadas. O melhor sistema nasce da prática, não de uma coleção abstrata.",
      },
    ],
  },
  "deploy-sem-surpresa": {
    index: "06",
    category: "VERCEL / PROCESSO",
    title: "Deploy sem surpresa começa antes do deploy",
    intro:
      "Ambiente, variáveis e observabilidade fazem parte do produto quando a interface precisa chegar inteira ao usuário.",
    sections: [
      {
        heading: "O ambiente também é código",
        text: "Uma aplicação depende de mais do que seus componentes. Variáveis, domínios e comandos de build precisam ser entendidos como parte da entrega.",
      },
      {
        heading: "Pequenos checks evitam grandes dúvidas",
        text: "Validar links, estados vazios e o caminho principal antes de publicar reduz a distância entre o que funcionou localmente e o que a pessoa realmente verá.",
      },
      {
        heading: "Entregar é observar",
        text: "Depois do deploy, a próxima pergunta é como saber se tudo continua funcionando. Um processo simples de acompanhamento dá confiança para evoluir.",
      },
    ],
  },
  "acessibilidade-na-pratica": {
    index: "07",
    category: "UI / ACESSIBILIDADE",
    title: "Acessibilidade começa no componente",
    intro:
      "A interface só está completa quando pessoas com diferentes formas de navegar conseguem entender, operar e recuperar o fluxo.",
    sections: [
      {
        heading: "Semântica reduz esforço",
        text: "Uma hierarquia correta de headings, landmarks e botões comunica intenção para leitores de tela, teclado e também para quem percorre a página rapidamente.",
      },
      {
        heading: "Foco é parte do design",
        text: "Estados de foco visíveis, ordem lógica de tabulação e áreas de clique confortáveis transformam a navegação por teclado em uma experiência previsível.",
      },
      {
        heading: "Contraste e movimento têm contexto",
        text: "Cores precisam manter leitura, enquanto animações devem respeitar redução de movimento. Acessibilidade não é uma camada posterior: ela orienta a decisão visual desde o início.",
      },
    ],
  },
  "estados-de-carregamento": {
    index: "08",
    category: "REACT / UX",
    title: "Estados de carregamento também comunicam",
    intro:
      "Loading, vazio e erro são momentos do produto: cada um deve explicar o que está acontecendo e qual é a próxima ação possível.",
    sections: [
      {
        heading: "O vazio não é um buraco",
        text: "Uma lista sem resultados pode ser o estado inicial, uma busca sem correspondência ou uma falha de permissão. A interface precisa distinguir esses contextos.",
      },
      {
        heading: "Feedback reduz ansiedade",
        text: "Skeletons, indicadores e mensagens curtas ajudam a pessoa a formar expectativa sem prometer um resultado que ainda não existe. O feedback deve aparecer perto da área afetada.",
      },
      {
        heading: "Erro precisa abrir uma saída",
        text: "Uma mensagem útil explica o impacto e oferece recuperação: tentar novamente, revisar um filtro ou procurar ajuda. O erro deixa de ser um beco sem saída.",
      },
    ],
  },
  "seo-tecnico-na-interface": {
    index: "09",
    category: "SEO / NEXT.JS",
    title: "SEO técnico faz parte da interface",
    intro:
      "Ser encontrado depende de conteúdo compreensível, HTML estruturado, performance e sinais consistentes para buscadores e pessoas.",
    sections: [
      {
        heading: "A página precisa dizer o que é",
        text: "Title, description, headings, canonical e dados estruturados formam uma camada de contexto. Eles ajudam cada rota a ter uma identidade própria nos resultados.",
      },
      {
        heading: "Links constroem caminhos",
        text: "Âncoras descritivas, rotas estáveis e uma arquitetura interna coerente conectam conteúdos e tornam a navegação mais útil para o visitante e para o rastreamento.",
      },
      {
        heading: "Performance é parte da descoberta",
        text: "Imagens adequadas, carregamento progressivo e uma experiência estável reduzem atrito. SEO técnico é, em grande parte, remover obstáculos para a compreensão.",
      },
    ],
  },
  "dados-com-firebase": {
    index: "10",
    category: "FIREBASE / PRODUTO",
    title: "Dados conectados exigem estados claros",
    intro:
      "Quando uma interface depende de dados remotos, sincronização, permissões e feedback precisam fazer parte da experiência visível.",
    sections: [
      {
        heading: "A leitura começa com confiança",
        text: "A pessoa precisa saber quando os dados estão atualizados, quando estão sendo carregados e quando uma alteração foi persistida. Sem esse contexto, o sistema parece instável.",
      },
      {
        heading: "Permissão também é produto",
        text: "Autenticação e regras de acesso não devem aparecer apenas como um erro técnico. A interface pode explicar o que está disponível e como solicitar o próximo nível de acesso.",
      },
      {
        heading: "Sincronizar é comunicar",
        text: "Atualizações otimistas, confirmações e tratamento de falhas precisam ser escolhidos conforme o risco da ação. Quanto maior o impacto, mais explícito deve ser o feedback.",
      },
    ],
  },
} as const;

const snippets = {
  "tipagem-produto": {
    language: "TypeScript",
    code: "type Project = {\n  title: string;\n  stack: string[];\n  featured?: boolean;\n};\n\nfunction ProjectCard({ project }: { project: Project }) {\n  return <h3>{project.title}</h3>;\n}",
  },
  "performance-arquitetura": {
    language: "Next.js",
    code: "export default async function Page() {\n  const data = await getProject();\n\n  return (\n    <main>\n      <ProjectHero data={data} />\n    </main>\n  );\n}",
  },
  "direito-codigo": {
    language: "Processo",
    code: "const problema = entenderContexto();\nconst hipótese = transformarEmFluxo(problema);\nconst produto = testarComPessoas(hipótese);\n\nexport default produto;",
  },
  "api-como-contrato": {
    language: "Node.js",
    code: 'app.get("/projects/:id", async (req, res) => {\n  const project = await findProject(req.params.id);\n  return res.json(project);\n});',
  },
  "componentes-consistentes": {
    language: "React",
    code: 'function Button({ variant = "primary", children }) {\n  return (\n    <button className={`button button--${variant}`}>\n      {children}\n    </button>\n  );\n}',
  },
  "deploy-sem-surpresa": {
    language: "Deploy",
    code: 'const checks = [\n  "build",\n  "links",\n  "environment",\n  "responsive",\n];\n\nawait runBeforeDeploy(checks);',
  },
  "acessibilidade-na-pratica": {
    language: "HTML / CSS",
    code: '<button className="button" aria-label="Abrir menu">\n  <MenuIcon aria-hidden="true" />\n</button>',
  },
  "estados-de-carregamento": {
    language: "React",
    code: "if (loading) return <ProjectSkeleton />;\nif (error) return <RetryMessage onRetry={reload} />;\nif (!items.length) return <EmptyState />;",
  },
  "seo-tecnico-na-interface": {
    language: "Next.js",
    code: 'export const metadata = {\n  title: "Projetos | Salas Tech",\n  description: "Interfaces e sistemas construídos com intenção.",\n};',
  },
  "dados-com-firebase": {
    language: "Firebase",
    code: "const unsubscribe = onSnapshot(queryRef, (snapshot) => {\n  setProjects(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));\n});",
  },
} as const;

export default function ArticleDetail() {
  const [, params] = useRoute("/notas/:slug");
  const requestedSlug = params?.slug || "";
  const hasNote = Object.hasOwn(notes, requestedSlug);
  const slug = (hasNote ? requestedSlug : "tipagem-produto") as keyof typeof notes;
  const note = notes[slug];
  const snippet = snippets[slug] || snippets["tipagem-produto"];
  const [copied, setCopied] = useState(false);
  const [noteCopied, setNoteCopied] = useState(false);
  const [codeOpen, setCodeOpen] = useState(false);
  if (!hasNote) {
    return <NotFound />;
  }
  const code = snippet.code.replaceAll("\\n", "\n");
  const copyCode = async () => {
    await navigator.clipboard?.writeText(code);
    trackEvent("note_code_copied", { note: slug });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  const copyNoteLink = async () => {
    const noteUrl = `${siteUrl}/notas/${slug}`;
    try {
      await navigator.clipboard.writeText(noteUrl);
    } catch {
      const input = document.createElement("textarea");
      input.value = noteUrl;
      input.setAttribute("readonly", "true");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    trackEvent("note_link_copied", { note: slug });
    setNoteCopied(true);
    window.setTimeout(() => setNoteCopied(false), 2400);
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: note.title,
        description: note.intro,
        author: { "@type": "Person", name: "Fernando Salas" },
        publisher: { "@type": "Organization", name: "Salas Tech" },
        inLanguage: "pt-BR",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Notas",
            item: `${siteUrl}/#artigos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: note.title,
            item: `${siteUrl}/notas/${slug}`,
          },
        ],
      },
    ],
  };
  return (
    <>
      <SeoHead
        title={`${note.title} | Salas Tech`}
        description={note.intro}
        path={`/notas/${slug}`}
        image={`${siteUrl}/assets/Logo%20Salas%20Tech.png`}
        imageAlt={`Logo oficial da Salas Tech — nota técnica ${note.title}`}
        jsonLd={jsonLd}
      />
      <div className="note-page">
        <header className="case-header">
          <Link href="/#artigos" className="case-back">
            <ArrowLeft size={16} /> voltar para notas
          </Link>
          <Link href="/" className="wordmark">
            <span>SALAS</span>
            <em>TECH</em>
          </Link>
          <span className="case-counter">{note.index} / 10</span>
        </header>
        <main className="note-main">
          <div className="case-kicker">
            <span>{note.index} / TECH NOTE</span>
            <span>{note.category}</span>
          </div>
          <div className="note-dossier-signal" aria-label="Metadados da nota">
            <span>
              <b>FORMAT</b> TECHNICAL NOTE
            </span>
            <span>
              <b>TOPIC</b> {note.category}
            </span>
            <span>
              <b>AUTHOR</b> FERNANDO SALAS
            </span>
            <span>
              <b>READING</b> {snippet.language} / 2026
            </span>
          </div>
          <article className="note-article">
            <p className="eyebrow">
              <span className="status-dot" /> nota de aprendizado
            </p>
            <h1>
              {note.title}
              <span>.</span>
            </h1>
            <p className="note-intro">{note.intro}</p>
            <div className="note-meta">
              <span>FERNANDO SALAS</span>
              <span>NOTA {note.index}</span>
              <span>2026</span>
            </div>
            {note.sections.map((section, sectionIndex) => (
              <section className="note-section" key={section.heading}>
                <div className="note-section-label">
                  <CheckCircle2 size={15} /> ideia{" "}
                  {String(sectionIndex + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2>{section.heading}</h2>
                  <p>{section.text}</p>
                </div>
              </section>
            ))}
            <section className="code-lab">
              <div className="code-lab-header">
                <span>LAB / EXEMPLO APLICÁVEL</span>
                <div className="code-lab-actions">
                  <button onClick={() => setCodeOpen(true)}>
                    expandir código
                  </button>
                  <button onClick={copyCode}>
                    {copied ? (
                      <>
                        <Check size={14} /> copiado
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> copiar código
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="code-tabs">
                <span className="code-tab code-tab--active">
                  {snippet.language}
                </span>
                <span className="code-tab">exemplo</span>
              </div>
              <pre>
                <code>{code}</code>
              </pre>
            </section>
            {codeOpen && (
              <div
                className="code-modal-backdrop"
                role="presentation"
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) setCodeOpen(false);
                }}
              >
                <section
                  className="code-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="code-modal-title"
                >
                  <div className="code-modal-header">
                    <div>
                      <span>LAB / EXEMPLO APLICÁVEL</span>
                      <h2 id="code-modal-title">
                        {snippet.language}
                        <span>.</span>
                      </h2>
                    </div>
                    <button
                      className="code-modal-close"
                      onClick={() => setCodeOpen(false)}
                      aria-label="Fechar exemplo de código"
                    >
                      ×
                    </button>
                  </div>
                  <pre>
                    <code>{code}</code>
                  </pre>
                  <button
                    className="button button--primary code-modal-copy"
                    onClick={copyCode}
                  >
                    {copied ? "Código copiado" : "Copiar código"}{" "}
                    <Copy size={15} />
                  </button>
                </section>
              </div>
            )}
            {noteCopied && (
              <div
                className="copy-success-toast"
                role="status"
                aria-live="polite"
              >
                <Check size={16} /> Link da nota copiado
              </div>
            )}
            <div className="note-footer">
              <span>APRENDER EM PÚBLICO / SALAS TECH</span>
              <div className="note-footer-actions">
                <button
                  className="note-copy-link"
                  type="button"
                  onClick={copyNoteLink}
                >
                  <Copy size={14} /> copiar link da nota
                </button>
                <Link href="/#artigos">
                  ver outras notas <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        </main>
      </div>
    </>
  );
}
