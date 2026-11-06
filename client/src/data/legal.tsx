import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/contact";

export const privacySections: readonly [string, string, ReactNode][] = [
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

export const termsSections: readonly [string, string, string][] = [
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
