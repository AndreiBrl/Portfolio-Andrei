import { SocialButton } from "@/components/ui/SocialButton";
import { PROFILE_DATA, SOCIAL_LINKS } from "@/data/portfolio";
import { forwardRef } from "react";

export const ProfileIntroBlock = forwardRef<HTMLDivElement>(
	function ProfileIntroBlock(_props, ref) {
		return (
			<div
				ref={ref}
				className="mt-0 h-fit pt-[5vw] text-center md:mt-[20vw] md:flex md:h-full md:w-[100vw] md:flex-col md:items-center md:pt-0 md:text-left"
			>
				<h1
					data-split="andrei"
					className="m-0 pt-[2vw] font-yeager text-[10vw] font-bold uppercase leading-[1.15] text-white [clip-path:polygon(0_0,100%_0,100%_100%,0%_100%)] md:pt-0 md:text-[6vw]"
				>
					{PROFILE_DATA.name}
				</h1>

				<div className="grid grid-cols-2 gap-[5vw] md:flex md:w-1/2 md:justify-between md:gap-0">
					<div className="grid w-fit grid-cols-[10vw_10vw_10vw] gap-[1vw] rounded-[5px] [perspective:500px] md:grid-cols-[5vw_5vw_5vw] md:gap-[0.2vw]">
						{SOCIAL_LINKS.map((item) => (
							<SocialButton key={item.id} item={item} />
						))}
					</div>

					<div>
						<h2
							data-split="japa"
							className="m-0 p-0 font-yeager text-[4vw] font-bold uppercase leading-[1.2] text-black md:text-[2vw]"
						>
							{PROFILE_DATA.japaneseName}
						</h2>
						{PROFILE_DATA.roles.map((role) => (
							<h2
								key={role}
								data-split="subtitulo"
								className="m-0 p-0 font-yeager text-[4vw] font-bold uppercase leading-[1.2] text-black md:text-[2vw]"
							>
								{role}
							</h2>
						))}
					</div>
				</div>
			</div>
		);
	},
);
