"use client";

import { HERO_DATA } from "@/data/portfolio";
import { gsap, useGSAP } from "@/lib/gsap";
import Image from "next/image";
import { useRef } from "react";

export function HeroSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const redBarRef = useRef<HTMLDivElement>(null);

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

	return (
		<section
			ref={sectionRef}
			className="relative flex h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-cream p-0 md:h-screen md:gap-[5vw]"
		>
			<div className="relative flex h-[64%] flex-col-reverse items-center justify-center gap-[4vw] p-[1vw] md:h-auto md:flex-row md:gap-0">
				<Image
					src={HERO_DATA.imageSrc}
					alt={HERO_DATA.imageAlt}
					width={600}
					height={600}
					priority
					className="h-[70vw] w-[70vw] opacity-0 animate-desenhoAparece md:h-[27vw] md:w-[27vw]"
				/>
				<div className="ml-[7vw] w-full md:ml-0 md:w-auto">
					<div
						ref={redBarRef}
						className="w-[40vw] rounded-[2px] bg-crimson pl-[0.5vw] opacity-0 animate-desenhoAparece md:w-[14.8vw]"
					>
						<h1 className="z-[2] w-[100vw] bg-transparent font-geist text-[6.5vw] font-bold uppercase leading-[1.15] opacity-0 animate-desenhoAparece md:w-[30vw] md:text-[2.5vw]">
							{HERO_DATA.title}
						</h1>
					</div>
					<p className="my-[1em] ml-[4vw] text-[3.5vw] opacity-0 animate-desenhoAparece md:ml-0 md:text-[2vw]">
						{HERO_DATA.subtitle}
					</p>
				</div>
			</div>

			<div className="flex w-[20vw] flex-col items-center text-center opacity-0 animate-desenhoAparece">
				<h1 className="text-[3vw] font-bold text-[#656565] md:text-[1vw]">
					{HERO_DATA.scrollText}
				</h1>
				<Image
					src={HERO_DATA.scrollArrowSrc}
					alt=""
					width={200}
					height={200}
					className="mx-auto h-[14.5vw] w-[14.5vw] animate-moveArrow md:h-[2.5vw] md:w-[2.5vw]"
				/>
			</div>
		</section>
	);
}
