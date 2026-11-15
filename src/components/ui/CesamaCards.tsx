import type { CesamaData, CesamaLabeledItem } from "@/data/portfolio";

const BASE_CARD_CLASS =
	"w-[80vw] rounded-[10px] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.08)] md:w-auto";

interface CesamaVideoCardProps {
	data: CesamaData["videoCard"];
}

export function CesamaVideoCard({ data }: CesamaVideoCardProps) {
	return (
		<div data-cesama-card="1" className={`${BASE_CARD_CLASS} font-geist`}>
			<div className="rounded-t-[10px] bg-cesama-blue pb-[0.5vw] pl-[1vw] pr-0 pt-[1vw] text-left">
				<h6 className="m-0 text-[3vw] font-bold md:text-[1vw]">{data.subtitle}</h6>
				<h1 className="mb-0 w-fit text-[5vw] font-bold leading-[1.15] md:w-auto md:text-[2em]">
					{data.title}
				</h1>
			</div>
			<iframe
				width="430"
				height="215"
				src={data.youtubeEmbedUrl}
				title={data.youtubeTitle}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
				className="mx-auto my-[5vw] h-[40vw] w-[75vw] rounded-[10px] border-0 md:my-[1vw] md:h-[215px] md:w-[430px]"
			/>
		</div>
	);
}

interface CesamaOverviewCardProps {
	data: CesamaData["overviewCard"];
}

export function CesamaOverviewCard({ data }: CesamaOverviewCardProps) {
	return (
		<div data-cesama-card="2" className={BASE_CARD_CLASS}>
			<div className="rounded-t-[10px] bg-cesama-green pb-[0.5vw] pl-[1vw] pr-0 pt-[1vw] text-center">
				<h1 className="mb-[1vw] font-geist text-[5vw] font-bold leading-[1.15] md:text-[2em]">
					{data.title}
				</h1>
			</div>
			<p className="m-0 p-[3vw] text-justify text-[3vw] md:p-[1vw] md:text-[1.3vw]">
				{data.description}
			</p>
		</div>
	);
}

interface CesamaGridCardProps {
	cardIndex: 3 | 4;
	title: string;
	headerBgClass: string;
	items: CesamaLabeledItem[];
}

export function CesamaGridCard({ cardIndex, title, headerBgClass, items }: CesamaGridCardProps) {
	return (
		<div data-cesama-card={cardIndex} className={BASE_CARD_CLASS}>
			<div
				className={`rounded-t-[10px] pb-[0.5vw] pl-[1vw] pr-0 pt-[1vw] text-center ${headerBgClass}`}
			>
				<h1 className="mb-[1vw] font-geist text-[5vw] font-bold leading-[1.15] md:text-[2em]">
					{title}
				</h1>
			</div>
			<div className="grid grid-cols-2">
				{items.map((item) => (
					<p
						key={item.label}
						className="m-0 p-[3vw] text-left text-[3vw] md:p-[1vw] md:text-center md:text-[1.1vw]"
					>
						<b className="font-bold">{item.label}</b> {item.description}
					</p>
				))}
			</div>
		</div>
	);
}
