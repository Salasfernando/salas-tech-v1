import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const terms = [
  [
    "01",
    "Acesso e aceite",
    "Ao acessar o site, você declara que utilizará as páginas, os projetos e os canais de contato de forma legítima e respeitará estes Termos de Uso e a Política de Privacidade.",
  ],
  [
    "02",
    "Uso do site",
    "O conteúdo apresenta a Salas Tech, seus serviços, projetos, notas técnicas e formas de contato. Não utilize o site para tentar comprometer sistemas, enviar spam, distribuir conteúdo ilícito ou violar direitos de terceiros.",
  ],
  [
    "03",
    "Contato e informações compartilhadas",
    "O site não oferece formulário de briefing nem upload de arquivos. O contato comercial é iniciado fora do site pelo WhatsApp. Compartilhe apenas informações e documentos que você tenha autorização para enviar e evite dados sensíveis ou informações desnecessárias.",
  ],
  [
    "04",
    "Propriedade intelectual",
    "Textos, identidade visual, código, imagens e demais elementos do site pertencem à Salas Tech ou são utilizados com autorização. É permitido compartilhar links; reprodução, redistribuição ou uso comercial dependem de autorização prévia, salvo hipóteses legais.",
  ],
  [
    "05",
    "Projetos e links externos",
    "As páginas de projetos podem apontar para sites, demonstrações públicas e serviços de terceiros. Cada ambiente possui suas próprias regras, disponibilidade e política de privacidade. A Salas Tech não controla alterações feitas nesses ambientes externos.",
  ],
  [
    "06",
    "Disponibilidade e responsabilidade",
    "Buscamos manter as informações corretas e o site disponível, mas conteúdos, links e funcionalidades podem ser alterados ou interrompidos para manutenção. Uma conversa iniciada pelo WhatsApp não cria, por si só, obrigação de contratação.",
  ],
  [
    "07",
    "Atualizações e contato",
    `Estes termos podem ser atualizados para refletir mudanças no site ou na operação. A versão vigente ficará publicada nesta página. Para dúvidas, utilize ${CONTACT_EMAIL}.`,
  ],
];

export default function Terms() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Termos de Uso Salas Tech",
    url: `${siteUrl}/termos-de-uso`,
    inLanguage: "pt-BR",
    dateModified: "2026-10-13",
  };
  return (
    <>
      <SeoHead
        title="Termos de Uso — Salas Tech"
        description="Regras de navegação, conteúdo e contato externo pelo WhatsApp no site da Salas Tech."
        path="/termos-de-uso"
        jsonLd={jsonLd}
      />
      <main className="legal-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para início
          </Link>
          <BrandLockup href="/" />
          <Link href="/privacidade" className="case-back">
            privacidade <ArrowUpRight size={15} />
          </Link>
        </header>
        <section className="legal-hero section-pad">
          <p className="eyebrow">
            <span className="status-dot" /> SALAS TECH / USO RESPONSÁVEL
          </p>
          <h1>
            Termos de
            <br />
            <span>Uso.</span>
          </h1>
          <p>
            Regras para navegar, consultar projetos e iniciar uma conversa
            profissional com a Salas Tech.
          </p>
          <small>Última atualização: 13 de outubro de 2026</small>
        </section>
        <section className="legal-content section-pad">
          <div className="legal-notice">
            <strong>Minuta para revisão.</strong>
            <span>
              Este texto é uma base operacional e deve ser revisado por
              profissional jurídico antes da publicação definitiva,
              especialmente quanto à identificação formal da empresa e à
              legislação aplicável.
            </span>
          </div>
          {terms.map(([index, title, text]) => (
            <article className="legal-section" key={index}>
              <span>{index}</span>
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </section>
        <section className="legal-footer section-pad">
          <div>
            <strong>Tem um projeto em mente?</strong>
            <p>Inicie a conversa pelo canal oficial da Salas Tech.</p>
          </div>
          <a
            className="button button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> Falar no WhatsApp{" "}
            <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
    </>
  );
}
