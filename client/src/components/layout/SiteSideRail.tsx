import { Github, Linkedin } from "lucide-react";
import { Link } from "wouter";
import BrandMark from "@/components/BrandMark";

export default function SiteSideRail({
  locale = "pt",
}: {
  locale?: "pt" | "en";
}) {
  const isEn = locale === "en";
  return (
    <aside className="side-rail">
      {isEn ? (
        <Link href="/en" className="rail-logo" aria-label="Salas Tech home">
          <BrandMark small />
        </Link>
      ) : (
        <a href="#top" className="rail-logo" aria-label="Salas Tech — início">
          <BrandMark small />
        </a>
      )}
      <div className="rail-line" />
      <span className="rail-caption">
        FULL STACK
        <br />
        &amp; AUTO
      </span>
      <div className="rail-socials">
        <a
          href="https://github.com/Salasfernando"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isEn ? "GitHub" : "GitHub Salas Tech"}
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/salas-fernando"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isEn ? "LinkedIn" : "LinkedIn Fernando Salas"}
        >
          <Linkedin size={16} />
        </a>
        <a
          href="https://www.instagram.com/salas_tech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={isEn ? "Instagram" : "Instagram Salas Tech"}
        >
          ◎
        </a>
      </div>
    </aside>
  );
}
