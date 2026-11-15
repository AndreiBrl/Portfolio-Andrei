"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import type { RefObject } from "react";

interface UseHeroAnimationParams {
	sectionRef: RefObject<HTMLElement | null>;
	redBarRef: RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation({ sectionRef, redBarRef }: UseHeroAnimationParams) {
	useGSAP(
		() => {
			const mm = gsap.matchMedia();

			mm.add("(min-width: 768px)", () => {
				gsap.to(redBarRef.current, {
					width: "30vw",
					ease: "none",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top top",
						pin: true,
						scrub: 1,
						end: "bottom 200px",
						anticipatePin: 1,
					},
				});
			});

			mm.add("(max-width: 767px)", () => {
				gsap.to(redBarRef.current, {
					width: "78vw",
					ease: "none",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top top",
						pin: true,
						scrub: 1,
						end: "bottom 500px",
						anticipatePin: 1,
					},
				});
			});
		},
		{ scope: sectionRef },
	);
}
