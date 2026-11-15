"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import type { RefObject } from "react";

interface UseCesamaAnimationParams {
	sectionRef: RefObject<HTMLElement | null>;
}

const CARD_ANIMATIONS = [
	{ cardIndex: 1, fromY: 200, start: "top 50%", end: "top 5%" },
	{ cardIndex: 2, fromY: 175, start: "top 30%", end: "top top" },
	{ cardIndex: 3, fromY: 100, start: "top 25%", end: "top top" },
	{ cardIndex: 4, fromY: 50, start: "top 20%", end: "top -10%" },
] as const;

export function useCesamaAnimation({ sectionRef }: UseCesamaAnimationParams) {
	useGSAP(
		() => {
			for (const { cardIndex, fromY, start, end } of CARD_ANIMATIONS) {
				gsap.fromTo(
					`[data-cesama-card='${cardIndex}']`,
					{ opacity: 0, y: fromY },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "none",
						scrollTrigger: {
							trigger: sectionRef.current,
							start,
							scrub: 0.5,
							end,
						},
					},
				);
			}
		},
		{ scope: sectionRef },
	);
}
