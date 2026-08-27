"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SiteMotion() {
  useGSAP(() => {
    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".image-reveal").forEach((element) => {
        const image = element.querySelector("img");

        if (!image) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          })
          .fromTo(
            image,
            { scale: 0.9, opacity: 0.64 },
            { scale: 1, opacity: 1, ease: "none", duration: 0.55 },
          )
          .to(image, {
            scale: 1.035,
            opacity: 0.38,
            ease: "none",
            duration: 0.45,
          });
      });

      gsap.fromTo(
        ".proofCard",
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.52,
          stagger: { each: 0.08, from: "start", grid: "auto" },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".proofGrid",
            start: "top 82%",
            once: true,
          },
        },
      );
    });

    media.add(
      "(min-width: 901px) and (prefers-reduced-motion: no-preference)",
      () => {
        ScrollTrigger.create({
          trigger: ".approachChapter",
          start: "top 116px",
          end: "bottom bottom",
          pin: ".approachVisual",
          pinSpacing: false,
        });
      },
    );

    return () => media.revert();
  }, []);

  return null;
}
