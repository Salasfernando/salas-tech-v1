import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

let activeScrollFrame = 0;

function stopActiveScroll() {
  if (activeScrollFrame) {
    window.cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = 0;
  }
}

function getTarget(hash: string): HTMLElement | null {
  if (!hash || !hash.startsWith("#") || hash === "#") return null;
  const id = decodeURIComponent(hash.slice(1));
  if (id === "top") {
    return document.getElementById("top") || document.documentElement;
  }
  return document.getElementById(id);
}

function getTargetTop(target: HTMLElement): number {
  if (target === document.documentElement || target.id === "top") {
    return 0;
  }
  const headerOffset = 92;
  const rect = target.getBoundingClientRect();
  return Math.max(0, rect.top + window.scrollY - headerOffset);
}

function animateScrollToElement(target: HTMLElement, immediate = false) {
  stopActiveScroll();

  if (immediate) {
    const top = getTargetTop(target);
    window.scrollTo({ top, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = top;
    document.body.scrollTop = top;
    return;
  }

  const startY = window.scrollY || document.documentElement.scrollTop || 0;
  const startTime = performance.now();
  const duration = 540;

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    // Cubic ease-out: 1 - (1 - t)^3
    const eased = 1 - Math.pow(1 - progress, 3);
    // Re-read target position dynamically so layout shifts never cause missed landings
    const targetY = getTargetTop(target);
    const nextY = startY + (targetY - startY) * eased;

    window.scrollTo(0, nextY);
    document.documentElement.scrollTop = nextY;

    if (progress < 1) {
      activeScrollFrame = window.requestAnimationFrame(step);
    } else {
      const finalY = getTargetTop(target);
      window.scrollTo(0, finalY);
      document.documentElement.scrollTop = finalY;
      activeScrollFrame = 0;
    }
  };

  activeScrollFrame = window.requestAnimationFrame(step);
}

export default function SmoothScroll() {
  const [location, navigate] = useLocation();
  const pendingHashRef = useRef<string | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleUserInterrupt = () => {
      stopActiveScroll();
    };

    const handleClick = (event: MouseEvent) => {
      const source = event.target as Element | null;
      const link = source?.closest<HTMLAnchorElement>("a[href]");
      const rawHref = link?.getAttribute("href");
      if (
        !link ||
        !rawHref ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!rawHref.includes("#")) {
        return;
      }

      const hashIndex = rawHref.indexOf("#");
      const pathPart = rawHref.slice(0, hashIndex);
      const hashPart = rawHref.slice(hashIndex);
      if (!hashPart || hashPart === "#") {
        return;
      }

      const targetPath = pathPart || window.location.pathname || "/";
      const currentPath = window.location.pathname || "/";

      // Case A: Same-page section navigation (e.g. "#servicos" or "/#servicos" while on "/")
      if (targetPath === currentPath) {
        const target = getTarget(hashPart);
        if (!target) {
          // Wait: if we are on "/empresa" and clicked "/#servicos" or "/#projetos",
          // if the target only exists on "/", navigate to "/"!
          if (pathPart === "/") {
            event.preventDefault();
            event.stopPropagation();
            pendingHashRef.current = hashPart;
            navigate("/");
          }
          return;
        }

        // Special case: on "/empresa", clicking "/#servicos" in the top nav should go to Home #servicos
        // if the link explicitly points to "/#servicos" rather than "#servicos"
        if (currentPath !== "/" && pathPart === "/") {
          event.preventDefault();
          event.stopPropagation();
          pendingHashRef.current = hashPart;
          navigate("/");
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        const nextUrl =
          currentPath === "/" ? `/${hashPart}` : `${currentPath}${hashPart}`;
        window.history.replaceState(null, "", nextUrl);
        animateScrollToElement(target, reducedMotion.matches);
        return;
      }

      // Case B: Cross-route hash navigation (e.g. clicking "/#servicos", "/#projetos", "/#sobre" from "/processo")
      event.preventDefault();
      event.stopPropagation();
      pendingHashRef.current = hashPart;
      navigate(targetPath);
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        const target = getTarget(window.location.hash);
        if (target) {
          animateScrollToElement(target, reducedMotion.matches);
        }
      }
    };

    window.addEventListener("wheel", handleUserInterrupt, { passive: true });
    window.addEventListener("touchmove", handleUserInterrupt, {
      passive: true,
    });
    document.addEventListener("click", handleClick, true);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      stopActiveScroll();
      window.removeEventListener("wheel", handleUserInterrupt);
      window.removeEventListener("touchmove", handleUserInterrupt);
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [navigate]);

  // Execute pending or URL hash scroll whenever route changes
  useEffect(() => {
    const hashToScroll = pendingHashRef.current || window.location.hash;
    if (!hashToScroll || hashToScroll === "#") return;

    pendingHashRef.current = null;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let attempts = 0;
    const maxAttempts = 20;

    const tryScroll = () => {
      attempts += 1;
      const target = getTarget(hashToScroll);
      if (target) {
        const currentPath = window.location.pathname || "/";
        const nextUrl =
          currentPath === "/"
            ? `/${hashToScroll}`
            : `${currentPath}${hashToScroll}`;
        window.history.replaceState(null, "", nextUrl);
        animateScrollToElement(target, reducedMotion);
        return true;
      }
      return false;
    };

    if (tryScroll()) return;

    const timer = window.setInterval(() => {
      if (tryScroll() || attempts >= maxAttempts) {
        window.clearInterval(timer);
      }
    }, 40);

    return () => window.clearInterval(timer);
  }, [location]);

  return null;
}
