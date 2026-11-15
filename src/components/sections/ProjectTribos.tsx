"use client";

import { TribosContentBlock } from "@/components/ui/TribosContentBlock";
import { TRIBOS_DATA } from "@/data/portfolio";
import { useTribosAnimation } from "@/hooks/useTribosAnimation";
import Image from "next/image";
import { useRef } from "react";

export function ProjectTribos() {
	const sectionRef = useRef<HTMLElement>(null);

	useTribosAnimation({ sectionRef });

	return (
		<section
			ref={sectionRef}
			id={TRIBOS_DATA.sectionId}
			className="box-content flex h-fit w-auto items-center justify-center bg-black p-[6vw] md:h-screen"
		>
			<div
				data-tribos="gradient"
				className="flex h-fit w-full flex-col-reverse items-center justify-center gap-[3vw] rounded-[45px] p-[7vw] md:h-full md:flex-row md:p-0"
			>
				<Image
					loading="lazy"
					src={TRIBOS_DATA.imageSrc}
					alt={TRIBOS_DATA.imageAlt}
					width={600}
					height={600}
					data-tribos="image"
					className="h-[60vw] w-[60vw] rounded-[20px] [transform:rotateY(180deg)] md:h-[30vw] md:w-[30vw]"
				/>
				<TribosContentBlock />
			</div>
		</section>
	);
}
