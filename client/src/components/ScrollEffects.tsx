import { useEffect } from "react";

const revealSelector = [
  ".hero-copy > *",
  ".hero-visual",
  ".section-kicker",
  ".about-grid > *",
  ".stack-intro > *",
  ".stack-row",
  ".stack-footer",
  ".articles-heading > *",
  ".article-row",
  ".projects-heading > *",
  ".project-row",
  ".contact-content > *",
  ".contact-bottom > *",
  ".company-hero-copy > *",
  ".company-hero-art",
  ".company-meta > *",
  ".company-section-heading > *",
  ".service-card",
  ".company-stack-grid > *",
  ".process-row",
  ".company-cta > *",
  ".case-hero > *",
  ".case-preview-head > *",
  ".case-preview-browser",
  ".digital-card-art",
  ".digital-card-content > *",
  ".digital-card-qr",
  ".resume-hero > *",
  ".resume-stamp",
  ".resume-entry",
  ".resume-education > *",
  ".note-article > *",
  ".footer",
].join(", ");

export default function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const observed = new WeakSet<Element>();
    let refreshFrame = 0;

    const showImmediately = () =>
      document
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((element) => element.classList.add("motion-reveal--visible"));

    if (reducedMotion || !("IntersectionObserver" in window)) {
      showImmediately();
      return;
    }

    document.documentElement.classList.add("motion-active");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("motion-reveal--visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    const collect = () => {
      document
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((element) => {
          if (observed.has(element)) return;
          observed.add(element);
          element.classList.add("motion-reveal");
          observer.observe(element);
        });
    };

    const scheduleCollect = () => {
      if (refreshFrame) return;
      refreshFrame = window.requestAnimationFrame(() => {
        refreshFrame = 0;
        collect();
      });
    };

    collect();
    const mutationObserver = new MutationObserver(scheduleCollect);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (refreshFrame) window.cancelAnimationFrame(refreshFrame);
      observer.disconnect();
      mutationObserver.disconnect();
      document.documentElement.classList.remove("motion-active");
    };
  }, []);

  return null;
}
