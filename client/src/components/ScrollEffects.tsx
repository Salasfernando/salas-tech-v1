import { useEffect } from "react";
import { useLocation } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  ".process-step-row",
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
  ".resume-project-card",
  ".resume-education > *",
  ".note-article > *",
  ".brand-asset-card",
  ".footer",
].join(", ");

export default function ScrollEffects() {
  const [location] = useLocation();

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const showImmediately = () => {
      document
        .querySelectorAll<HTMLElement>(revealSelector)
        .forEach((element) => {
          element.classList.add("motion-reveal--visible");
          gsap.set(element, { clearProps: "opacity,transform" });
        });
    };

    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      showImmediately();
      return;
    }

    document.documentElement.classList.add("motion-active");

    const animated = new WeakSet<Element>();
    const cleanups: (() => void)[] = [];

    const ctx = gsap.context(() => {
      // 1. Top scroll progress bar driven by GSAP ScrollTrigger
      const progressBar = document.querySelector<HTMLElement>(
        ".gsap-scroll-progress",
      );
      if (progressBar) {
        gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });
        gsap.to(progressBar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.15,
          },
        });
      }

      const animateElements = () => {
        // 2. Hero immediate staggered entrance
        const heroItems = Array.from(
          document.querySelectorAll<HTMLElement>(
            ".hero-copy > *, .company-hero-copy > *, .case-hero > div > *, .service-detail-copy > *, .process-hero-copy > *, .resume-hero > div:first-child > *",
          ),
        ).filter((el) => !animated.has(el));

        if (heroItems.length > 0) {
          heroItems.forEach((el) => {
            animated.add(el);
            el.classList.add("motion-reveal--visible");
          });
          gsap.fromTo(
            heroItems,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.09,
              ease: "power3.out",
              overwrite: "auto",
            },
          );
        }

        // 3. Dedicated Staggered Animation for Service Cards ("Tecnologia para o próximo passo")
        document
          .querySelectorAll<HTMLElement>(".service-grid")
          .forEach((grid) => {
            const cards = Array.from(
              grid.querySelectorAll<HTMLElement>(".service-card"),
            ).filter((el) => !animated.has(el));

            if (cards.length > 0) {
              cards.forEach((card) => {
                animated.add(card);
                card.classList.add("motion-reveal");
              });

              gsap.fromTo(
                cards,
                { opacity: 0, y: 42, scale: 0.96 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.95,
                  stagger: 0.14,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: grid,
                    start: "top 86%",
                    once: true,
                    onEnter: () =>
                      cards.forEach((c) =>
                        c.classList.add("motion-reveal--visible"),
                      ),
                  },
                },
              );
            }
          });

        // 4. Dedicated Animation for Projects ("Projetos que fazem acontecer")
        document
          .querySelectorAll<HTMLElement>(".project-row")
          .forEach((row, idx) => {
            if (animated.has(row)) return;
            animated.add(row);
            row.classList.add("motion-reveal");

            const preview = row.querySelector<HTMLElement>(".project-preview");

            gsap.fromTo(
              row,
              { opacity: 0, y: 36 },
              {
                opacity: 1,
                y: 0,
                duration: 0.95,
                delay: (idx % 3) * 0.06,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: row,
                  start: "top 88%",
                  once: true,
                  onEnter: () => row.classList.add("motion-reveal--visible"),
                },
              },
            );

            if (preview) {
              gsap.fromTo(
                preview,
                { scale: 0.9, opacity: 0.4 },
                {
                  scale: 1,
                  opacity: 1,
                  duration: 1.1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: row,
                    start: "top 88%",
                    once: true,
                  },
                },
              );
            }
          });

        // 5. Dedicated Unhurried Animation for Stack & Process Steps ("Uma base para evoluir produtos" & "/processo")
        document
          .querySelectorAll<HTMLElement>(".stack-row, .process-step-row")
          .forEach((row, idx) => {
            if (animated.has(row)) return;
            animated.add(row);
            row.classList.add("motion-reveal");

            const meterFill =
              row.querySelector<HTMLElement>(".stack-meter-fill");

            gsap.fromTo(
              row,
              { opacity: 0, x: -24, y: 14 },
              {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1.05,
                delay: (idx % 4) * 0.08,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: row,
                  start: "top 90%",
                  once: true,
                  onEnter: () => row.classList.add("motion-reveal--visible"),
                },
              },
            );

            if (meterFill) {
              gsap.fromTo(
                meterFill,
                { scaleX: 0, transformOrigin: "left center" },
                {
                  scaleX: 1,
                  duration: 1.45,
                  delay: 0.2 + (idx % 4) * 0.09,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: row,
                    start: "top 90%",
                    once: true,
                  },
                },
              );
            }
          });

        // 6. Scroll-triggered reveals for remaining sections
        const remaining = Array.from(
          document.querySelectorAll<HTMLElement>(revealSelector),
        ).filter((el) => !animated.has(el));

        remaining.forEach((element) => {
          animated.add(element);
          element.classList.add("motion-reveal");

          gsap.fromTo(
            element,
            { opacity: 0, y: 26 },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              scrollTrigger: {
                trigger: element,
                start: "top 89%",
                once: true,
                onEnter: () => element.classList.add("motion-reveal--visible"),
              },
            },
          );
        });

        // 7. Desktop fine-pointer interactions (Magnetic buttons, 3D Card Tilt & Spotlight)
        if (window.matchMedia("(pointer: fine)").matches) {
          document
            .querySelectorAll<HTMLElement>(".button--primary")
            .forEach((btn) => {
              if (btn.dataset.gsapMagnetic === "true") return;
              btn.dataset.gsapMagnetic = "true";

              const onMove = (e: MouseEvent) => {
                const rect = btn.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                gsap.to(btn, {
                  x: dx * 0.14,
                  y: dy * 0.18,
                  duration: 0.35,
                  ease: "power2.out",
                });
              };

              const onLeave = () => {
                gsap.to(btn, {
                  x: 0,
                  y: 0,
                  duration: 0.55,
                  ease: "elastic.out(1, 0.5)",
                });
              };

              btn.addEventListener("mousemove", onMove);
              btn.addEventListener("mouseleave", onLeave);
              cleanups.push(() => {
                btn.removeEventListener("mousemove", onMove);
                btn.removeEventListener("mouseleave", onLeave);
                delete btn.dataset.gsapMagnetic;
              });
            });

          // Interactive 3D perspective tilt + spotlight on Cards & 3D Frames across all routes
          document
            .querySelectorAll<HTMLElement>(
              ".service-card, .about-image-frame, .case-art--3d, .service-detail-art--3d, .principle-card, .case-learning-card, .resume-edu-card, .resume-card-interactive, .resume-project-card",
            )
            .forEach((card) => {
              if (card.dataset.gsapTilt === "true") return;
              card.dataset.gsapTilt = "true";

              const onCardMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const nx = x / rect.width - 0.5;
                const ny = y / rect.height - 0.5;

                card.style.setProperty("--spotlight-x", `${x}px`);
                card.style.setProperty("--spotlight-y", `${y}px`);

                gsap.to(card, {
                  rotateY: nx * 5.5,
                  rotateX: -ny * 5.5,
                  y: -6,
                  transformPerspective: 960,
                  duration: 0.5,
                  ease: "power2.out",
                  overwrite: "auto",
                });
              };

              const onCardLeave = () => {
                gsap.to(card, {
                  rotateY: 0,
                  rotateX: 0,
                  y: 0,
                  duration: 0.7,
                  ease: "power3.out",
                  overwrite: "auto",
                });
              };

              card.addEventListener("mousemove", onCardMove, { passive: true });
              card.addEventListener("mouseleave", onCardLeave);
              cleanups.push(() => {
                card.removeEventListener("mousemove", onCardMove);
                card.removeEventListener("mouseleave", onCardLeave);
                delete card.dataset.gsapTilt;
              });
            });

          // Interactive cursor spotlight & preview parallax on Project Rows & other cards
          document
            .querySelectorAll<HTMLElement>(
              ".project-row, .stack-row, .article-row, .about-fact-card, .brand-asset-card, .digital-card, .case-signal-card, .case-switcher-card, .process-step-row, .resume-metric-card, .service-detail-project",
            )
            .forEach((card) => {
              if (card.dataset.gsapSpotlight === "true") return;
              card.dataset.gsapSpotlight = "true";

              const preview =
                card.querySelector<HTMLElement>(".project-preview");

              const onCardMove = (e: MouseEvent) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--spotlight-x", `${x}px`);
                card.style.setProperty("--spotlight-y", `${y}px`);

                if (preview) {
                  const nx = x / rect.width - 0.5;
                  const ny = y / rect.height - 0.5;
                  gsap.to(preview, {
                    x: nx * 10,
                    y: ny * 6 - 3,
                    duration: 0.55,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                }
              };

              const onCardLeave = () => {
                if (preview) {
                  gsap.to(preview, {
                    x: 0,
                    y: 0,
                    duration: 0.65,
                    ease: "power3.out",
                    overwrite: "auto",
                  });
                }
              };

              card.addEventListener("mousemove", onCardMove, { passive: true });
              card.addEventListener("mouseleave", onCardLeave);
              cleanups.push(() => {
                card.removeEventListener("mousemove", onCardMove);
                card.removeEventListener("mouseleave", onCardLeave);
                delete card.dataset.gsapSpotlight;
              });
            });
        }

        ScrollTrigger.refresh();
      };

      animateElements();

      let frame = 0;
      const mutationObserver = new MutationObserver(() => {
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          animateElements();
        });
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });

      cleanups.push(() => {
        if (frame) window.cancelAnimationFrame(frame);
        mutationObserver.disconnect();
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
      ctx.revert();
      document.documentElement.classList.remove("motion-active");
    };
  }, [location]);

  return <div className="gsap-scroll-progress" aria-hidden="true" />;
}
