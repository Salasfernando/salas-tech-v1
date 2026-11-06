import { Link } from "wouter";
import BrandLockup from "@/components/BrandLockup";

export default function SiteFooter({
  locale = "pt",
}: {
  locale?: "pt" | "en";
}) {
  const isEn = locale === "en";
  return (
    <footer className="footer">
      <div className="footer-main">
        <BrandLockup href={isEn ? "/en" : "#top"} className="footer-brand" />
        <nav
          className="footer-links"
          aria-label={isEn ? "Footer links" : "Links do rodapé"}
        >
          {isEn ? (
            <>
              <Link href="/">Português</Link>
              <Link href="/en/curriculo">Résumé</Link>
              <Link href="/cartao">Digital card</Link>
              <Link href="/marca">Brand assets</Link>
              <Link href="/privacidade">Privacy</Link>
              <Link href="/termos-de-uso">Terms</Link>
            </>
          ) : (
            <>
              <Link href="/empresa">Empresa</Link>
              <Link href="/processo">Processo</Link>
              <Link href="/curriculo">Currículo</Link>
              <Link href="/cartao">Cartão digital</Link>
              <Link href="/marca">Materiais da marca</Link>
              <Link href="/privacidade">Privacidade</Link>
              <Link href="/termos-de-uso">Termos de uso</Link>
            </>
          )}
          <a
            href="https://github.com/Salasfernando"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/salas-fernando"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/salas_tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>
      </div>
      <div className="footer-credit">
        <span>
          {isEn
            ? "Full Stack & Automation · Brasília, Brazil"
            : "Full Stack & Automação · Brasília, Brasil"}
        </span>
        <strong>
          {isEn ? "Developed by Salas Tech" : "Desenvolvido por Salas Tech"}
        </strong>
      </div>
    </footer>
  );
}
