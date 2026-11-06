import { ArrowLeft, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { lazy, Suspense } from "react";
import { Link, useRoute } from "wouter";
import BrandLockup from "@/components/BrandLockup";
import SeoHead, { siteUrl } from "@/components/SeoHead";
import { publishedProjects } from "@/data/projects";
import { serviceDetails, serviceSteps } from "@/data/servicesDetail";
import { trackEvent } from "@/lib/analytics";
import { WHATSAPP_URL } from "@/lib/contact";
import { services } from "@/lib/services";
import NotFound from "@/pages/NotFound";

const NetworkScene3D = lazy(() => import("@/components/NetworkScene3D"));

export default function ServiceDetail() {
  const [, params] = useRoute("/servicos/:slug");
  const service = services.find((item) => item.slug === params?.slug);
  if (!service || !Object.hasOwn(serviceDetails, service.slug)) {
    return <NotFound />;
  }

  const detail = serviceDetails[service.slug as keyof typeof serviceDetails];
  const relatedProjects = publishedProjects.filter((project) =>
    detail.projects.some((slug) => slug === project.slug),
  );
  const Icon = service.icon;
  const path = `/servicos/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: detail.lead,
    url: `${siteUrl}${path}`,
    provider: { "@type": "Organization", name: "Salas Tech", url: siteUrl },
  };

  return (
    <>
      <SeoHead
        title={`${service.title} — Salas Tech`}
        description={detail.lead}
        path={path}
        jsonLd={jsonLd}
      />
      <main className="service-detail-page">
        <header className="case-header">
          <Link href="/#servicos" className="case-back">
            <ArrowLeft size={16} /> voltar para serviços
          </Link>
          <BrandLockup href="/" />
          <nav className="case-header-nav" aria-label="Navegação rápida">
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#projetos">Projetos</Link>
            <Link href="/#sobre">Sobre</Link>
            <Link href="/processo">Processo</Link>
            <Link href="/curriculo">Currículo</Link>
            <span className="case-counter">SERVIÇO / {service.index}</span>
          </nav>
        </header>

        <section className="service-detail-hero section-pad">
          <div className="service-detail-copy">
            <p className="eyebrow">
              <span className="status-dot" /> SALAS TECH / SERVIÇOS
            </p>
            <p className="service-detail-index">{service.index} / 04</p>
            <h1>
              {service.title}
              <span>.</span>
            </h1>
            <p className="service-detail-lead">{detail.lead}</p>
            <div className="service-detail-actions">
              <a
                className="button button--primary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("service_contact_clicked", {
                    service: service.slug,
                  })
                }
              >
                <MessageCircle size={17} /> Conversar sobre este serviço
              </a>
              <Link className="service-detail-secondary" href="/processo">
                Conhecer o processo <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
          <div
            className="service-detail-art service-detail-art--3d"
            aria-hidden="true"
          >
            <Suspense fallback={null}>
              <NetworkScene3D
                variant="case"
                hudLabel={`SERVICE.${service.index} // 3D`}
              />
            </Suspense>
            <span className="service-detail-art-index">{service.index}</span>
            <span className="service-detail-art-icon">
              <Icon size={54} strokeWidth={1.2} />
            </span>
            <span className="service-detail-art-caption">
              SALAS TECH / DIGITAL
            </span>
          </div>
        </section>

        <section className="service-detail-focus section-pad section-light">
          <div className="section-kicker">
            <span>01 / ESCOPO</span>
            <span>
              O QUE PODEMOS CONSTRUIR <b>↗</b>
            </span>
          </div>
          <div className="service-detail-focus-heading">
            <h2>
              Trabalho pensado
              <br />
              para o seu <em>contexto.</em>
            </h2>
            <p>{service.description}</p>
          </div>
          <ul className="service-detail-list">
            {detail.focus.map((item) => (
              <li key={item}>
                <Check size={17} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="service-detail-note">
            O escopo final é definido a partir do contexto, das prioridades e
            dos requisitos de cada projeto.
          </p>
        </section>

        <section className="service-detail-process section-pad">
          <div className="section-kicker">
            <span>02 / COMO ACONTECE</span>
            <span>
              DO CONTEXTO À ENTREGA <b>↗</b>
            </span>
          </div>
          <h2>
            Etapas claras.
            <br />
            <em>Decisões melhores.</em>
          </h2>
          <div className="service-detail-steps">
            {serviceSteps.map(([index, title, text]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <Link className="service-detail-secondary" href="/processo">
            Ver o processo completo <ArrowUpRight size={16} />
          </Link>
        </section>

        {relatedProjects.length > 0 && (
          <section className="service-detail-projects section-pad section-light">
            <div className="section-kicker">
              <span>03 / PROJETOS PUBLICADOS</span>
              <span>
                EXEMPLOS RELACIONADOS <b>↗</b>
              </span>
            </div>
            <h2>
              Veja em <em>contexto.</em>
            </h2>
            <div className="service-detail-project-list">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projetos/${project.slug}`}
                  className="service-detail-project"
                >
                  <span>{project.type}</span>
                  <strong>{project.name}</strong>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="service-detail-cta section-pad">
          <p className="eyebrow">PRÓXIMO PASSO / UMA CONVERSA</p>
          <h2>
            Vamos entender
            <br />o que você <em>precisa.</em>
          </h2>
          <a
            className="button button--primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("service_footer_contact_clicked", {
                service: service.slug,
              })
            }
          >
            <MessageCircle size={17} /> Falar pelo WhatsApp
          </a>
        </section>
      </main>
    </>
  );
}
