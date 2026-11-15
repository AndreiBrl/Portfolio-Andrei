import type { SocialLink } from "@/data/portfolio";
import Image from "next/image";

interface SocialButtonProps {
	item: SocialLink;
}

export function SocialButton({ item }: SocialButtonProps) {
	const iconDimensions =
		item.iconSize === "lg"
			? "h-[6vw] w-[6vw] md:h-[3vw] md:w-[3vw]"
			: "h-[4vw] w-[4vw] md:h-[2vw] md:w-[2vw]";

	const cardContent = (
		<Image
			loading="lazy"
			src={item.iconSrc}
			alt={item.title}
			width={200}
			height={200}
			quality={100}
			className={iconDimensions}
		/>
	);

	if (item.download) {
		return (
			<a href={item.href} download>
				<div
					data-social-card
					title={item.title}
					className="flex h-[10vw] w-[10vw] cursor-pointer items-center justify-center rounded-[5px] bg-dark-card transition-all duration-500 [transition-timing-function:cubic-bezier(0.87,-0.38,0.3,1.54)] hover:!scale-0 hover:bg-dark-card md:h-[5vw] md:w-[5vw] md:hover:!scale-125 md:hover:bg-crimson"
				>
					{cardContent}
				</div>
			</a>
		);
	}

	return (
		<div
			data-social-card
			title={item.title}
			className="flex h-[10vw] w-[10vw] cursor-pointer items-center justify-center rounded-[5px] bg-dark-card transition-all duration-500 [transition-timing-function:cubic-bezier(0.87,-0.38,0.3,1.54)] hover:!scale-0 hover:bg-dark-card md:h-[5vw] md:w-[5vw] md:hover:!scale-125 md:hover:bg-crimson"
		>
			<a
				href={item.href}
				target={item.external ? "_blank" : undefined}
				rel={item.external ? "noreferrer" : undefined}
			>
				{cardContent}
			</a>
		</div>
	);
}
