"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import type { RefObject } from "react";

interface UseTribosAnimationParams {
	sectionRef: RefObject<HTMLElement | null>;
}

const SCALE_TARGETS = [
	{ selector: "[data-tribos='title']", start: "top 50%" },
	{ selector: "[data-tribos='conception']", start: "top 40%" },
	{ selector: "[data-tribos='tech']", start: "top 30%" },
	{ selector: "[data-tribos='cta']", start: "top 30%" },
] as const;

export function useTribosAnimation({ sectionRef }: UseTribosAnimationParams) {
	useGSAP(
		() => {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 50%",
						scrub: 1,
						end: "top 15%",
					},
				})
				.fromTo(
					"[data-tribos='gradient']",
					{ backgroundColor: "black" },
					{
						backgroundImage: "linear-gradient(to right, #64301a 0%, #3f2a1a 10%, #0b0b0b 100%)",
						duration: 3,
						ease: "none",
					},
				)
				.to("[data-tribos='gradient']", {
					backgroundImage: "linear-gradient(to right, #64301a 0%, #3f2a1a 30%, #0b0b0b 100%)",
					duration: 3,
					ease: "none",
				})
				.to("[data-tribos='gradient']", {
					backgroundImage: "linear-gradient(to right, #64301a 0%, #3f2a1a 40%, #0b0b0b 100%)",
					duration: 3,
					ease: "none",
				})
				.to("[data-tribos='gradient']", {
					backgroundImage: "linear-gradient(to right, #64301a 0%, #3f2a1a 50%, #0b0b0b 100%)",
					duration: 3,
					ease: "none",
				});

			gsap.fromTo(
				"[data-tribos='image']",
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 1,
					ease: "none",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 50%",
						scrub: 1,
						end: "top 15%",
					},
				},
			);

			for (const { selector, start } of SCALE_TARGETS) {
				gsap.fromTo(
					selector,
					{ scale: 0.5, opacity: 0 },
					{
						scale: 1,
						opacity: 1,
						duration: 1,
						ease: "none",
						scrollTrigger: {
							trigger: sectionRef.current,
							start,
							scrub: 1,
							end: "top 15%",
						},
					},
				);
			}
		},
		{ scope: sectionRef },
	);
}
