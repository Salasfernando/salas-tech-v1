# PRD — Rebranding e reposicionamento do site Salas Tech

> Tipo: Feature · Data: 2026-10-13  
> Status: Pronto para planejamento

## Visão geral e objetivo

O site existente apresenta principalmente Fernando como desenvolvedor individual e combina elementos visuais de versões anteriores da marca. A nova identidade posiciona a **Salas Tech — Full Stack & Automação** como a oferta principal para empresas que precisam de sites, produtos web, sistemas ou automação. O portfólio deve atuar como prova concreta da capacidade da marca, e não como a mensagem principal.

O objetivo é rebrandear todas as rotas atuais, organizar o conteúdo em torno da marca e dos serviços, atualizar a página de currículo com os dados do currículo fornecido e tornar o WhatsApp o caminho principal de contato. O resultado deve permanecer preparado para a hospedagem atual na Vercel.

## Contexto do projeto

- O projeto é um site existente em React 19, TypeScript e Vite, com roteamento por cliente e configuração de build/fallback para Vercel. A home atual prioriza o perfil pessoal; a página `/empresa` já contém uma narrativa de marca e serviços que pode servir de conteúdo de apoio.
- O formulário atual aparece na home e em `/orcamento`. Ele apenas prepara um link `mailto:` no navegador e exige que a pessoa anexe manualmente os arquivos selecionados; não envia dados diretamente ao servidor. O usuário decidiu removê-lo nesta versão, sem configurar provedor de e-mail.
- O botão flutuante de WhatsApp já usa o número **+55 61 98103-3420**. A decisão confirmada é priorizar esse canal e fazer `/orcamento` encaminhar para a conversa.
- As rotas existentes a cobrir são: `/`, `/empresa`, `/en`, `/projetos/:slug`, `/curriculo`, `/en/curriculo`, `/cartao`, `/notas/:slug`, `/manutencao`, `/processo`, `/orcamento`, `/privacidade`, `/termos-de-uso`, `/404` e a rota de fallback para páginas não encontradas.
- O guia visual fornecido define o logotipo oficial e a assinatura **“Full Stack & Automação”**; TT Lakes Neue para títulos e nome da marca; uma família sans-serif complementar para textos; e a paleta Azul-Marinho Profundo `#0B192C`, Ciano Elétrico `#00E5FF`, Cinza Ardósia `#334155` e Branco Gelo `#F8FAFC`. A composição deve manter contraste alto. O sistema atual usa cores antigas, incluindo laranja, que não fazem parte da paleta especificada.
- O currículo anexado identifica Fernando Salas Ferreira, sua atuação como proprietário/desenvolvedor da Salas Tech desde junho de 2023, formação em ADS na UNINTER (em andamento, 2º semestre) e Direito na UNIP (2017–2023), além de competências em React, Next.js, TypeScript, Node.js, PostgreSQL, Prisma, APIs REST, automação e fluxos de IA. O currículo atual do site informa início em 2024 e oferece um PDF anterior. O usuário confirmou que o PDF baixável deve ser substituído pelo anexo mais recente.
- O currículo destaca Salas Tech, E-Tron Energy, E-Tron Monitoramento, Lounge Odontologia e Unovitta Odontologia. O site atual também contém o case NOC Odontologia. A consulta de metadados públicos do GitHub encontrou o repositório oficial `noc-odontologia` como candidato público alinhado ao portfólio; `Salasfernando/lounge-v2`, selecionado para esta tarefa, é privado.

## Decisões do produto

1. **Rebranding de todas as rotas listadas**, preservando as respectivas funções e os conteúdos atuais que continuam úteis. Isso inclui currículo nas versões PT/EN, detalhes de projetos, notas técnicas, cartão digital, processo, páginas legais, manutenção e erro/404.
2. **Marca e serviços primeiro.** A home deve apresentar a Salas Tech e explicar claramente as ofertas de sites institucionais, produtos web, sistemas/operação e automação. O portfólio vem como evidência dessas capacidades; o perfil de Fernando e o currículo continuam acessíveis como conteúdo de apoio.
3. **Aplicação do novo brand kit.** Usar o símbolo e o logotipo oficiais, a assinatura “Full Stack & Automação”, a paleta e a hierarquia tipográfica acima. Não reutilizar o laranja como cor da marca. As páginas podem alternar fundos escuros e áreas claras usando os tons oficiais e mantendo legibilidade.
4. **WhatsApp como CTA principal.** Unificar os contatos principais em torno de `https://wa.me/5561981033420`. A rota `/orcamento` deve encaminhar diretamente para essa conversa, em vez de exibir formulário. O CTA deve permanecer claro nas páginas comerciais e em inglês.
5. **Nenhum formulário nesta versão.** Remover o formulário da home e de `/orcamento`, incluindo campos, seleção de arquivos, consentimento de envio e preparação de `mailto:`. Não introduzir API de envio, CRM ou provedor de e-mail. O endereço **contato@salastech.com.br** pode ser mantido como dado de contato do currículo/cartão; o WhatsApp segue como ação primária.
6. **Currículo alinhado ao arquivo fornecido.** Atualizar a página PT e sua versão EN com os fatos presentes no currículo, corrigir o início da experiência na Salas Tech para junho de 2023 e substituir o arquivo oferecido para download pelo PDF anexado. Preservar conteúdos úteis existentes que não sejam contraditos pelo currículo fornecido.
7. **Portfólio como prova de trabalho.** Manter os projetos úteis já apresentados e priorizar os destacados no currículo. Mostrar links de código somente quando o repositório for público e corresponder à versão oficial do projeto; não expor repositórios privados. Os links para demonstrações públicas dos projetos podem permanecer.
8. **Conteúdo em português e inglês.** Manter as rotas `/en` e `/en/curriculo`, com conteúdo equivalente e atualizado, respeitando a identidade visual comum.
9. **Páginas legais coerentes com o novo contato.** Atualizar as referências ao formulário, a anexos por e-mail e ao fluxo `mailto:` em Privacidade e Termos, sem afirmar que o site coleta dados de briefing por formulário. Manter os avisos de minuta/revisão já existentes.

## Histórias de usuário

- Como representante de uma empresa, quero entender rapidamente quais problemas a Salas Tech resolve e iniciar uma conversa pelo WhatsApp, para avaliar um projeto.
- Como potencial cliente, quero consultar projetos reais e seus resultados/links disponíveis, para avaliar a experiência da Salas Tech antes do contato.
- Como visitante ou recrutador, quero consultar o currículo atualizado de Fernando e baixar o PDF correspondente, para conhecer sua experiência e formação.
- Como visitante que prefere inglês, quero encontrar a mesma proposta, os projetos e as informações profissionais em inglês, para avaliar a Salas Tech sem perder contexto.
- Como visitante, quero acessar as notas técnicas, o cartão digital, o processo e as páginas legais, para consultar informações de apoio com a mesma identidade visual.

## Regras de negócio e dados

- O destino principal de contato é o WhatsApp **+55 61 98103-3420**; as chamadas principais devem apontar para esse número. A rota `/orcamento` não coleta nem envia dados no site: encaminha a pessoa à conversa externa.
- O site não deve renderizar formulário de orçamento nem solicitar nome, e-mail, prazo, descrição, consentimento ou arquivos para iniciar o contato.
- Quando exibidos, os dados profissionais devem corresponder ao currículo fornecido: **Fernando Salas Ferreira**; proprietário/desenvolvedor Full Stack na Salas Tech desde **junho de 2023**; localização **Taguatinga, Brasília–DF**; contato **contato@salastech.com.br**; LinkedIn e GitHub informados no currículo; formação em ADS na UNINTER (em andamento, 2º semestre) e Direito na UNIP (2017–2023). Não inventar métricas, resultados, certificações ou datas ausentes das fontes fornecidas.
- A página de currículo e o PDF para download devem representar a mesma versão profissional. A versão em inglês deve refletir os mesmos fatos essenciais.
- Manter os cases existentes úteis — incluindo Lounge Odontologia, E-Tron Energy, E-Tron Monitoramento, Unovitta Odontologia e NOC Odontologia — e permitir acesso às suas demonstrações existentes. O botão para código-fonte só aparece para repositório público e oficial; o repositório privado `lounge-v2` não deve ser apresentado como link público de código.
- O uso da marca deve respeitar o logotipo oficial, as cores e a hierarquia tipográfica do guia. Textos, metadados e chamadas não podem sugerir uma paleta ou assinatura antiga.
- Privacidade e Termos continuam disponíveis e identificam corretamente que o contato comercial é iniciado fora do site pelo WhatsApp. As páginas continuam marcadas como minutas para revisão, sem declarar políticas de retenção ou fornecedores que não foram confirmados.

## Fluxos

### Descobrir serviços e iniciar contato

1. A pessoa acessa a home e encontra primeiro a proposta da Salas Tech e os serviços de sites, produtos web, sistemas/operação e automação.
2. A pessoa consulta os projetos apresentados como prova e pode abrir uma demonstração disponível.
3. A pessoa seleciona o CTA principal de WhatsApp e é encaminhada à conversa com o número oficial.

### Acessar `/orcamento`

1. A pessoa navega para `/orcamento` por um link antigo ou diretamente.
2. O site encaminha a pessoa ao WhatsApp oficial, sem exibir ou solicitar dados de briefing.

### Consultar currículo

1. A pessoa abre `/curriculo` ou `/en/curriculo`.
2. A página apresenta experiência, competências, formação e contatos coerentes com o currículo atualizado.
3. Ao selecionar o download, a pessoa recebe o PDF anexado pelo usuário como versão atual.

### Navegar em conteúdos de apoio

1. A pessoa abre um case, nota técnica, cartão digital, página de processo, página legal, manutenção ou erro.
2. A rota preserva sua finalidade, oferece navegação consistente com a marca e mantém os links funcionais para retornar, consultar conteúdo relacionado ou falar pelo canal principal.

## Critérios de aceite

- Dado que uma empresa acessa `/`, quando a página carrega, então a mensagem principal comunica a Salas Tech e seus serviços antes de apresentar Fernando como indivíduo.
- Dado que a home apresenta os serviços, quando o visitante percorre a página, então encontra sites institucionais, produtos web, sistemas/operação e automação, seguidos do portfólio como prova.
- Dado que qualquer página usa a identidade visual, quando ela é renderizada em fundo escuro ou claro, então usa o logotipo oficial, a paleta do guia e contraste legível, sem reintroduzir o laranja antigo.
- Dado que o visitante seleciona um CTA principal de contato, quando a ação é ativada, então abre o WhatsApp `wa.me/5561981033420`.
- Dado que o visitante acessa `/orcamento`, quando a rota é carregada, então é encaminhado ao mesmo WhatsApp e nenhum formulário é exibido.
- Dado que o visitante está na home ou em `/orcamento`, quando procura enviar um briefing, então não encontra campos, upload de arquivos, consentimento de formulário, geração de `mailto:` ou dependência de provedor de e-mail.
- Dado que a pessoa abre `/curriculo`, quando consulta a experiência, então a atuação na Salas Tech começa em junho de 2023 e as informações correspondem ao currículo fornecido; ao baixar o arquivo, recebe o PDF anexado.
- Dado que a pessoa acessa um case, quando consulta a demonstração e o código, então os links de demonstração continuam funcionais e um link para repositório só é mostrado se o repositório for público e oficial.
- Dado que a pessoa acessa `/en` ou `/en/curriculo`, quando navega e inicia contato, então encontra a proposta e os dados essenciais em inglês e o CTA de WhatsApp funcional.
- Dado que a pessoa acessa qualquer uma das rotas atuais — inclusive notas, cartão digital, processo, manutenção, privacidade, termos e 404 — quando navega, então a rota continua funcionando e a identidade atualizada permanece consistente.
- Dado que os textos legais mencionam contato ou coleta de dados, quando são atualizados, então não descrevem o formulário removido nem o envio de anexos por `mailto:` e preservam o aviso de minuta para revisão.
- Dado que o projeto é construído para implantação, quando os comandos e as regras atuais de Vercel são usados, então o site mantém o build e o fallback de rotas existentes, sem exigir novo provedor externo para contato.

## Stack e restrições técnicas decididas

- Manter a stack atual: React 19, TypeScript, Vite 7, roteamento existente com Wouter e pnpm. O redesign não exige troca de framework.
- Manter a preparação para Vercel: Node 24.x, `pnpm build`, saída estática atual, `vercel.json` e fallback para as rotas da aplicação; preservar `VITE_SITE_URL` para o domínio configurado.
- Não adicionar provedor de e-mail, API de envio, CRM ou armazenamento de dados do formulário nesta versão. O site não deve depender de um aplicativo de e-mail para o fluxo de orçamento.
- O brand kit especifica TT Lakes Neue para títulos e nome da marca e uma sans-serif complementar para textos; qualquer disponibilidade/licença de arquivo de fonte deve respeitar os recursos já fornecidos ao projeto, sem presumir um novo serviço externo.
