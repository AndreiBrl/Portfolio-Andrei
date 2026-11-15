"use client";

import { gsap, useGSAP } from "@/lib/gsap";
import type { RefObject } from "react";
import SplitType from "split-type";

interface UseHorizontalShowcaseAnimationParams {
	sectionRef: RefObject<HTMLElement | null>;
	trackRef: RefObject<HTMLDivElement | null>;
	titlesTriggerRef: RefObject<HTMLDivElement | null>;
	projectsRef: RefObject<HTMLDivElement | null>;
}

export function useHorizontalShowcaseAnimation({
	sectionRef,
	trackRef,
	titlesTriggerRef,
	projectsRef,
}: UseHorizontalShowcaseAnimationParams) {
	useGSAP(
		() => {
			const splitAndrei = new SplitType("[data-split='andrei']", {
				types: "chars",
				charClass: "char-andrei",
			});
			const splitProjetos = new SplitType("[data-split='projetos']", {
				types: "chars",
				charClass: "char-projeto",
			});
			const splitJapa = new SplitType("[data-split='japa']", {
				types: "chars",
				charClass: "char-japa",
			});
			const splitSubtitulo = new SplitType("[data-split='subtitulo']", {
				types: "chars",
				charClass: "char-subtitulo",
			});

			gsap.fromTo(
				".char-andrei",
				{ y: 50, opacity: 0 },
				{
					y: -10,
					opacity: 1,
					stagger: 0.05,
					delay: 0.2,
					ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
					scrollTrigger: {
						trigger: titlesTriggerRef.current,
						start: "top center",
						scrub: 1,
						end: "bottom 400px",
					},
				},
			);

			const mm = gsap.matchMedia();

			mm.add("(min-width: 768px)", () => {
				gsap.to(".char-japa", {
					color: "#c03654",
					textShadow: "0 0 5px #c03654, 0 0 10px #c03654, 0 0 15px #c03654",
					stagger: 0.05,
					delay: 0.2,
					ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
					scrollTrigger: {
						trigger: titlesTriggerRef.current,
						start: "top 200px",
						scrub: 1,
						end: "bottom 300px",
					},
				});

				gsap.to(".char-subtitulo", {
					color: "white",
					textShadow: "0 0 5px #fff",
					stagger: 0.05,
					delay: 0.2,
					ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
					scrollTrigger: {
						trigger: titlesTriggerRef.current,
						start: "top 50px",
						scrub: 1,
						end: "bottom 300px",
					},
				});
			});

			mm.add("(max-width: 767px)", () => {
				gsap.to(".char-japa", {
					color: "#c03654",
					textShadow: "0 0 5px #c03654, 0 0 10px #c03654, 0 0 15px #c03654",
					stagger: 0.05,
					delay: 0.2,
					ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
					scrollTrigger: {
						trigger: titlesTriggerRef.current,
						start: "top center",
						scrub: 1,
						end: "bottom 300px",
					},
				});

				gsap.to(".char-subtitulo", {
					color: "white",
					textShadow: "0 0 5px #fff",
					stagger: 0.05,
					delay: 0.2,
					ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
					scrollTrigger: {
						trigger: titlesTriggerRef.current,
						start: "top 400px",
						scrub: 1,
						end: "bottom 300px",
					},
				});
			});

			gsap
				.timeline({
					scrollTrigger: {
						trigger: titlesTriggerRef.current,
						start: "top center",
						scrub: 1,
						end: "top 10%",
					},
				})
				.fromTo(
					"[data-social-card]",
					{ x: -100, opacity: 0 },
					{
						x: -10,
						stagger: 0.1,
						delay: 0.2,
						ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
					},
				)
				.to("[data-social-card]", {
					x: 20,
					opacity: 1,
					stagger: 0.05,
					delay: 0.2,
					duration: 1,
				})
				.to("[data-social-card]", {
					stagger: 0.5,
					boxShadow: "0 0 5px #c03654, 0 0 10px #c03654, 0 0 15px #c03654",
					delay: 0.2,
					duration: 1,
				});

			mm.add("(min-width: 769px)", () => {
				gsap.fromTo(
					".char-projeto",
					{ y: 50, opacity: 0 },
					{
						y: -10,
						opacity: 1,
						stagger: 0.05,
						delay: 0.2,
						ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
						scrollTrigger: {
							trigger: projectsRef.current,
							start: "bottom -500px",
							scrub: 1,
							end: "bottom -800px",
						},
					},
				);

				gsap
					.timeline({
						scrollTrigger: {
							trigger: projectsRef.current,
							start: "bottom -500px",
							scrub: 1,
							end: "bottom 800px",
						},
					})
					.fromTo(
						"[data-project-card]",
						{ x: -50, opacity: 0 },
						{
							x: -10,
							stagger: 0.1,
							delay: 0.2,
							ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
						},
					)
					.to("[data-project-card]", {
						x: 20,
						opacity: 1,
						stagger: 0.09,
						delay: 0.2,
						duration: 1,
					})
					.to("[data-project-card]", {
						stagger: 0.5,
						delay: 0.2,
						duration: 1,
					});

				const totalWidth = sectionRef.current?.offsetWidth ?? 0;
				gsap.to(trackRef.current, {
					xPercent: -55,
					ease: "none",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top top",
						pin: sectionRef.current,
						scrub: 1,
						end: () => `+=${totalWidth}`,
					},
				});
			});

			mm.add("(max-width: 768px)", () => {
				gsap.fromTo(
					".char-projeto",
					{ y: 50, opacity: 0 },
					{
						y: -10,
						opacity: 1,
						stagger: 0.05,
						delay: 0.2,
						ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
						scrollTrigger: {
							trigger: projectsRef.current,
							start: "top center",
							scrub: 1,
							end: "top 300px",
						},
					},
				);

				gsap
					.timeline({
						scrollTrigger: {
							trigger: projectsRef.current,
							start: "top center",
							scrub: 1,
							end: "top 200px",
						},
					})
					.fromTo(
						"[data-project-card]",
						{ opacity: 0 },
						{
							opacity: 1,
							stagger: 0.1,
							delay: 0.2,
							ease: "none",
						},
					);
			});

			return () => {
				splitAndrei.revert();
				splitProjetos.revert();
				splitJapa.revert();
				splitSubtitulo.revert();
			};
		},
		{ scope: sectionRef },
	);
}
