import { useEffect } from "react";

function getTarget(hash: string) {
  if (!hash.startsWith("#") || hash === "#") return null;
  const id = decodeURIComponent(hash.slice(1));
  return document.getElementById(id);
}

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scrollToHash = (
      hash: string,
      behavior: ScrollBehavior = reducedMotion.matches ? "auto" : "smooth",
    ) => {
      const target = getTarget(hash);
      if (!target) return false;
      target.scrollIntoView({ behavior, block: "start" });
      return true;
    };

    const handleClick = (event: MouseEvent) => {
      const source = event.target as Element | null;
      const link = source?.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (
        !link ||
        !hash ||
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      if (!scrollToHash(hash)) return;
      event.preventDefault();
      window.history.pushState(null, "", hash);
    };

    const handleHashChange = () => scrollToHash(window.location.hash);
    document.addEventListener("click", handleClick);
    window.addEventListener("hashchange", handleHashChange);
    const initialHashTimer = window.setTimeout(() => {
      if (window.location.hash) scrollToHash(window.location.hash, "auto");
    }, 80);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("hashchange", handleHashChange);
      window.clearTimeout(initialHashTimer);
    };
  }, []);

  return null;
}
