"use client";

import { CesamaGridCard, CesamaOverviewCard, CesamaVideoCard } from "@/components/ui/CesamaCards";
import { CESAMA_DATA } from "@/data/portfolio";
import { useCesamaAnimation } from "@/hooks/useCesamaAnimation";
import Image from "next/image";
import { useRef } from "react";

export function ProjectCesama() {
	const sectionRef = useRef<HTMLElement>(null);

	useCesamaAnimation({ sectionRef });

	return (
		<section
			ref={sectionRef}
			id={CESAMA_DATA.sectionId}
			className="relative h-fit bg-black p-[6vw]"
		>
			<div className="mx-auto box-content h-fit w-[90%] rounded-[45px] bg-cesama-bg px-[5vw] pb-[5vw] pt-0 text-center md:h-full">
				<Image
					loading="lazy"
					src={CESAMA_DATA.logoSrc}
					alt={CESAMA_DATA.logoAlt}
					width={150}
					height={100}
					quality={100}
					className="mx-auto"
				/>

				<div className="grid grid-cols-1 gap-[5vw] md:grid-cols-2 md:gap-[2vw]">
					<CesamaVideoCard data={CESAMA_DATA.videoCard} />
					<CesamaOverviewCard data={CESAMA_DATA.overviewCard} />
					<CesamaGridCard
						cardIndex={3}
						title={CESAMA_DATA.featuresCard.title}
						headerBgClass="bg-cesama-yellow"
						items={CESAMA_DATA.featuresCard.items}
					/>
					<CesamaGridCard
						cardIndex={4}
						title={CESAMA_DATA.technologiesCard.title}
						headerBgClass="bg-cesama-gray"
						items={CESAMA_DATA.technologiesCard.items}
					/>
				</div>
			</div>
		</section>
	);
}
