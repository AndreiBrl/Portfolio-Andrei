import { ProjectPreviewCard } from "@/components/ui/ProjectPreviewCard";
import { PROFILE_DATA, PROJECT_PREVIEWS } from "@/data/portfolio";
import { forwardRef } from "react";

export const ProjectsShowcaseBlock = forwardRef<HTMLDivElement>(
	function ProjectsShowcaseBlock(_props, ref) {
		return (
			<div
				ref={ref}
				className="m-0 mb-[38vw] flex h-fit w-[100vw] flex-col items-center justify-center gap-[0.2vw] md:mb-0 md:h-full md:w-[29vw] md:pb-[9vw]"
			>
				<h1
					data-split="projetos"
					className="mb-[10vw] w-[100vw] pt-[2vw] text-center font-yeager text-[10vw] font-bold uppercase leading-[1.15] text-white [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] md:mb-0 md:w-auto md:pt-0 md:text-[6vw]"
				>
					{PROFILE_DATA.projectsHeading}
				</h1>

				<div className="group/projects flex w-fit flex-col items-center justify-center gap-[15vw] md:w-auto md:flex-row md:gap-0">
					{PROJECT_PREVIEWS.map((project) => (
						<ProjectPreviewCard key={project.id} project={project} />
					))}
				</div>
			</div>
		);
	},
);
