import { Link } from "wouter";

const mark = "/assets/salas-tech-mark-192.png";

type BrandLockupProps = {
  href?: string;
  className?: string;
  compact?: boolean;
};

export default function BrandLockup({
  href = "/",
  className = "",
  compact = false,
}: BrandLockupProps) {
  const content = (
    <>
      <img
        src={mark}
        alt=""
        aria-hidden="true"
        width={36}
        height={36}
        decoding="async"
      />
      <span className="brand-lockup__name">
        <strong>SALAS</strong>
        <em>TECH</em>
      </span>
    </>
  );

  return href ? (
    <Link
      href={href}
      className={`brand-lockup ${compact ? "brand-lockup--compact" : ""} ${className}`}
      aria-label="Salas Tech — Full Stack e Automação"
    >
      {content}
    </Link>
  ) : (
    <span
      className={`brand-lockup ${compact ? "brand-lockup--compact" : ""} ${className}`}
    >
      {content}
    </span>
  );
}
