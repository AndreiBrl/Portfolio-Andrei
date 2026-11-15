"use client";

import { ProfileIntroBlock } from "@/components/ui/ProfileIntroBlock";
import { ProjectsShowcaseBlock } from "@/components/ui/ProjectsShowcaseBlock";
import { useHorizontalShowcaseAnimation } from "@/hooks/useHorizontalShowcaseAnimation";
import { useRef } from "react";

export function HorizontalShowcase() {
	const sectionRef = useRef<HTMLElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);
	const titlesTriggerRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);

	useHorizontalShowcaseAnimation({
		sectionRef,
		trackRef,
		titlesTriggerRef,
		projectsRef,
	});

	return (
		<section
			ref={sectionRef}
			className="relative flex h-fit w-full items-center justify-center bg-black pt-[20vw] md:h-screen md:w-[130%] md:items-stretch md:justify-start md:pt-0"
		>
			<div
				ref={trackRef}
				className="m-0 flex h-fit w-full flex-col items-center gap-[20vw] p-0 md:ml-[10vw] md:h-full md:flex-row md:justify-around md:gap-0 md:pb-[5vw]"
			>
				<ProfileIntroBlock ref={titlesTriggerRef} />
				<ProjectsShowcaseBlock ref={projectsRef} />
			</div>
		</section>
	);
}
