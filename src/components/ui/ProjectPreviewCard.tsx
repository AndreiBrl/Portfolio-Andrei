import type { ProjectPreview } from "@/data/portfolio";
import Image from "next/image";

interface ProjectPreviewCardProps {
	project: ProjectPreview;
}

export function ProjectPreviewCard({ project }: ProjectPreviewCardProps) {
	return (
		<a href={project.href} className="text-inherit no-underline">
			<div
				data-project-card
				className="group/box relative flex h-[37vw] w-[80vw] cursor-pointer items-center justify-center overflow-visible rounded-[5px] md:h-[20vw] md:w-[7vw] md:transition-all md:duration-[600ms] md:[transition-timing-function:cubic-bezier(0.87,-0.38,0.3,1.54)] md:group-hover/projects:grayscale md:hover:!w-[20vw] md:hover:!grayscale-0"
			>
				<Image
					loading="lazy"
					src={project.imageSrc}
					alt={project.imageAlt}
					width={200}
					height={200}
					quality={100}
					className="m-[5vw] h-[124%] w-[30vw] rounded-[20vw] object-cover md:h-full md:w-full md:rounded-[5px]"
				/>
				<div className="relative flex h-[30vw] w-fit flex-col items-center justify-center gap-[8vw] overflow-visible opacity-100 transition-all duration-700 ease-in-out md:absolute md:bottom-0 md:h-0 md:w-[97%] md:flex-row md:gap-0 md:overflow-hidden md:bg-[#000000e0] md:pl-[0.5vw] md:opacity-0 md:duration-200 md:group-hover/box:h-[5vw] md:group-hover/box:overflow-visible md:group-hover/box:opacity-100">
					<h1 className="text-center font-geist text-[4vw] font-bold text-white opacity-100 transition-all delay-500 duration-1000 ease-in-out md:text-[1.3vw] md:opacity-0 md:duration-300 md:group-hover/box:opacity-100">
						{project.title}
					</h1>
					<div className="block w-fit rounded-[15px] bg-white p-[2vw] md:hidden">
						<h1 className="font-geist text-[4vw] font-bold text-black no-underline">
							{project.ctaLabel}
						</h1>
					</div>
				</div>
			</div>
		</a>
	);
}
