import { TRIBOS_DATA } from "@/data/portfolio";

export function TribosContentBlock() {
	return (
		<div className="mt-[3vw] flex w-full flex-col justify-center gap-[1vw] md:mt-0 md:w-[40vw]">
			<div
				data-tribos="title"
				className="flex w-full flex-col justify-start rounded-[10px] font-geist text-beige md:text-[1.8vw]"
			>
				<h6 className="m-0 p-0 font-yeagerLight text-[3vw] font-bold text-beige md:text-[1vw]">
					{TRIBOS_DATA.subtitle}
				</h6>
				<h1 className="m-0 text-[7vw] font-bold leading-[1.15] md:text-[3.6vw]">
					{TRIBOS_DATA.title}
				</h1>
			</div>

			<div className="flex w-full gap-[1vw]">
				<div data-tribos="conception" className="rounded-[10px] p-[1vw] text-[1vw] text-gold">
					<h1 className="m-0 font-potta text-[6vw] font-normal leading-[1.15] md:text-[2vw]">
						{TRIBOS_DATA.conceptionTitle}
					</h1>
					<p className="my-[1em] w-full text-[3vw] leading-[1.35] text-beige md:w-[27vw] md:text-[0.9vw]">
						{TRIBOS_DATA.conceptionParagraphs[0]}
						<br />
						<br />
						{TRIBOS_DATA.conceptionParagraphs[1]}
					</p>
				</div>
			</div>

			<div
				data-tribos="cta"
				className="w-fit transition-transform duration-500 [transition-timing-function:cubic-bezier(0.65,-0.25,0.25,1.25)] hover:scale-110"
			>
				<a
					href={TRIBOS_DATA.ctaHref}
					target="_blank"
					rel="noreferrer"
					className="cursor-pointer no-underline"
				>
					<h1 className="m-0 rounded-[10px] bg-white p-[1.5vw] text-[5vw] font-bold leading-[1.15] text-black md:p-[0.5vw] md:text-[1.5vw]">
						{TRIBOS_DATA.ctaLabel}
					</h1>
				</a>
			</div>

			<div data-tribos="tech" className="rounded-[10px] text-gold">
				<h1 className="m-0 font-potta text-[7vw] font-normal leading-[1.15] md:text-[2vw]">
					{TRIBOS_DATA.technologiesTitle}
				</h1>
				<div className="grid grid-cols-2 gap-[1vw] text-left md:grid-cols-[13vw_13vw] md:gap-0">
					{TRIBOS_DATA.technologies.map((tech) => (
						<p key={tech} className="m-0 text-[3vw] text-beige md:text-[1vw]">
							{tech}
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
