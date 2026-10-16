import { ArrowLeft, ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/contact";

const sections: readonly [string, string, ReactNode][] = [
  [
    "01",
    "Quem controla os dados",
    <p key="controller">
      A <strong>Salas Tech</strong>, representada por Fernando Salas, é
      responsável pelas decisões sobre o tratamento de dados relacionado a este
      site. Para dúvidas ou solicitações sobre privacidade, utilize o endereço{" "}
      <strong>{CONTACT_EMAIL}</strong>.
    </p>,
  ],
  [
    "02",
    "Quais dados podem ser tratados",
    <>
      <p key="data-intro">
        Esta versão do site não oferece um formulário de briefing nem coleta
        nome, e-mail, prazo ou arquivos de projeto. Durante a navegação,
        provedores técnicos podem processar informações necessárias para
        entregar e proteger as páginas. Se você escolher iniciar uma conversa
        pelo WhatsApp, as informações que decidir compartilhar serão tratadas
        também conforme as regras desse serviço.
      </p>
      <p key="data-note">
        O site não prepara mensagens por e-mail nem envia dados de briefing a
        partir de um formulário.
      </p>
    </>,
  ],
  [
    "03",
    "Finalidades e bases legais",
    <p key="purpose">
      As informações técnicas de navegação podem ser utilizadas para
      disponibilizar, proteger e compreender o funcionamento do site, conforme a
      configuração efetiva dos serviços. Uma conversa comercial só começa quando
      a própria pessoa escolhe abrir o WhatsApp e enviar uma mensagem. A
      definição das bases legais e dos prazos aplicáveis deve ser revisada pelo
      controlador com orientação jurídica antes da publicação definitiva.
    </p>,
  ],
  [
    "04",
    "Compartilhamento e fornecedores",
    <p key="sharing">
      O site depende de serviços de hospedagem e entrega de páginas. Recursos de
      analytics, cookies não essenciais, armazenamento adicional ou provedores
      de e-mail não são presumidos por este texto e devem ser incluídos nesta
      política somente após confirmação de sua configuração e finalidade. O
      WhatsApp é um serviço externo, sujeito a seus próprios termos e avisos de
      privacidade.
    </p>,
  ],
  [
    "05",
    "Retenção e eliminação",
    <p key="retention">
      O site não armazena briefings enviados por formulário. Informações
      técnicas podem permanecer nos serviços de infraestrutura conforme suas
      configurações e obrigações aplicáveis. Solicitações de eliminação ou
      limitação serão analisadas conforme a legislação e os dados efetivamente
      tratados.
    </p>,
  ],
  [
    "06",
    "Direitos do titular",
    <p key="rights">
      Você pode solicitar informações ou exercer os direitos previstos na Lei
      Geral de Proteção de Dados, conforme aplicáveis. Entre em contato pelo
      endereço <strong>{CONTACT_EMAIL}</strong>. Podemos solicitar informações
      adicionais para confirmar a identidade e proteger os dados.
    </p>,
  ],
  [
    "07",
    "Segurança e incidentes",
    <p key="security">
      São adotadas medidas técnicas e administrativas compatíveis com a natureza
      do site e os riscos envolvidos. Nenhum ambiente conectado é completamente
      livre de riscos; caso identifique uma situação de segurança, utilize o
      canal de privacidade para que ela seja avaliada.
    </p>,
  ],
  [
    "08",
    "Cookies, analytics e links externos",
    <p key="cookies">
      A configuração de cookies e analytics depende dos recursos efetivamente
      habilitados no ambiente de produção e deve ser confirmada antes da
      publicação definitiva desta minuta. Links para sites e serviços de
      terceiros possuem políticas próprias; consulte os documentos desses
      serviços antes de compartilhar informações.
    </p>,
  ],
  [
    "09",
    "Dados de crianças e adolescentes",
    <p key="children">
      Este site não é direcionado a crianças. Se você entender que dados de uma
      criança ou adolescente foram tratados de forma inadequada, entre em
      contato para que a situação seja avaliada.
    </p>,
  ],
  [
    "10",
    "Atualizações e legislação",
    <p key="updates">
      Esta política pode ser atualizada para refletir mudanças no site, nos
      fornecedores ou na legislação. A versão vigente será publicada nesta
      página com a data de atualização. A base legal inclui a Lei nº 13.709/2018
      (LGPD) e as normas aplicáveis ao tratamento de dados pessoais.
    </p>,
  ],
];

export default function Privacy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Política de Privacidade Salas Tech",
    url: `${siteUrl}/privacidade`,
    inLanguage: "pt-BR",
    dateModified: "2026-10-13",
  };
  return (
    <>
      <SeoHead
        title="Política de Privacidade — Salas Tech"
        description="Informações sobre dados técnicos de navegação e contatos externos iniciados pelo visitante, com transparência sobre o fluxo sem formulário da Salas Tech."
        path="/privacidade"
        jsonLd={jsonLd}
      />
      <main className="legal-page">
        <header className="case-header">
          <Link href="/" className="case-back">
            <ArrowLeft size={16} /> voltar para início
          </Link>
          <BrandLockup href="/" />
          <Link href="/termos-de-uso" className="case-back">
            termos de uso <ArrowUpRight size={15} />
          </Link>
        </header>
        <section className="legal-hero section-pad">
          <p className="eyebrow">
            <span className="status-dot" /> SALAS TECH / TRANSPARÊNCIA
          </p>
          <h1>
            Política de
            <br />
            <span>Privacidade.</span>
          </h1>
          <p>
            Como tratamos informações técnicas de navegação e contatos iniciados
            por você em canais externos.
          </p>
          <small>Última atualização: 13 de outubro de 2026</small>
        </section>
        <section className="legal-content section-pad">
          <div className="legal-notice">
            <strong>Minuta para revisão.</strong>
            <span>
              Este texto é uma base operacional. Antes da publicação definitiva,
              confirme o controlador, a hospedagem, as configurações reais de
              analytics e cookies, os prazos de retenção e os dados formais da
              empresa com orientação jurídica.
            </span>
          </div>
          {sections.map(([index, title, content]) => (
            <article className="legal-section" key={index}>
              <span>{index}</span>
              <div>
                <h2>{title}</h2>
                {content}
              </div>
            </article>
          ))}
        </section>
        <section className="legal-footer section-pad">
          <Mail size={18} />
          <div>
            <strong>Canal de privacidade</strong>
            <p>Solicitações sobre dados pessoais: {CONTACT_EMAIL}.</p>
          </div>
          <a
            className="button button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
    </>
  );
}
