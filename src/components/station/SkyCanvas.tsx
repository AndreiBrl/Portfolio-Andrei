import type { RefObject } from "react";

interface SkyCanvasProps {
	starsFieldRef: RefObject<HTMLDivElement>;
	sunRef: RefObject<HTMLDivElement>;
	moonRef: RefObject<HTMLDivElement>;
	moonLitPathRef: RefObject<SVGPathElement>;
}

export function SkyCanvas({ starsFieldRef, sunRef, moonRef, moonLitPathRef }: SkyCanvasProps) {
	return (
		<div className="sky-canvas" aria-hidden="true">
			<div className="stars-field" ref={starsFieldRef} />

			<div className="celestial-layer">
				<div className="celestial-sun" ref={sunRef}>
					<div className="sun-halo" />
					<div className="sun-core" />
				</div>

				<div className="celestial-moon" ref={moonRef}>
					<div className="moon-halo" />
					<svg className="moon-svg" viewBox="0 0 100 100">
						<title>Lua</title>
						<defs>
							<radialGradient id="moonSurfaceGrad" cx="38%" cy="35%" r="65%">
								<stop offset="0%" stopColor="#FFFDF5" />
								<stop offset="70%" stopColor="#F6EBC1" />
								<stop offset="100%" stopColor="#E5D296" />
							</radialGradient>
							<clipPath id="moonDiskClip">
								<circle cx="50" cy="50" r="42" />
							</clipPath>
						</defs>
						<circle cx="50" cy="50" r="42" fill="rgba(210, 228, 255, 0.12)" />
						<g clipPath="url(#moonDiskClip)">
							<path ref={moonLitPathRef} d="" fill="url(#moonSurfaceGrad)" />
							<circle cx="38" cy="36" r="6.5" fill="rgba(205, 185, 130, 0.28)" />
							<circle cx="62" cy="44" r="9" fill="rgba(205, 185, 130, 0.22)" />
							<circle cx="46" cy="64" r="5" fill="rgba(205, 185, 130, 0.25)" />
						</g>
					</svg>
				</div>
			</div>

			<svg className="sky-contrails" viewBox="0 0 1920 1080" preserveAspectRatio="none">
				<title>Rastros no céu</title>
				<path
					d="M -80,175 Q 680,10 1980,42"
					fill="none"
					stroke="rgba(255, 255, 255, 0.85)"
					strokeWidth="2.2"
					strokeLinecap="round"
				/>
				<path
					d="M -60,330 Q 430,485 1100,500"
					fill="none"
					stroke="rgba(255, 255, 255, 0.68)"
					strokeWidth="1.4"
					strokeLinecap="round"
				/>
				<path
					d="M -40,820 Q 880,780 1890,715"
					fill="none"
					stroke="rgba(255, 255, 255, 0.5)"
					strokeWidth="5"
					strokeLinecap="round"
					strokeDasharray="2 3"
				/>
			</svg>

			<div className="seagulls-flock flock-upper">
				<svg viewBox="0 0 120 70" className="seagull-svg">
					<title>Gaivotas</title>
					<path
						d="M25,18 Q32,8 39,16 Q46,8 53,18"
						fill="none"
						stroke="#fff"
						strokeWidth="2.4"
						strokeLinecap="round"
					/>
					<path
						d="M18,28 Q24,20 30,27 Q36,20 42,28"
						fill="none"
						stroke="#fff"
						strokeWidth="2.2"
						strokeLinecap="round"
					/>
					<path
						d="M48,26 Q53,19 58,25 Q63,19 68,26"
						fill="none"
						stroke="#fff"
						strokeWidth="2"
						strokeLinecap="round"
					/>
					<path
						d="M30,44 Q35,37 40,43 Q45,37 50,44"
						fill="none"
						stroke="#fff"
						strokeWidth="2.1"
						strokeLinecap="round"
					/>
					<path
						d="M6,58 Q11,51 16,57 Q21,51 26,58"
						fill="none"
						stroke="#fff"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			<div className="seagulls-flock flock-lower">
				<svg viewBox="0 0 100 50" className="seagull-svg">
					<title>Gaivotas</title>
					<path
						d="M10,28 Q16,19 22,26 Q28,19 34,28"
						fill="none"
						stroke="#fff"
						strokeWidth="2.2"
						strokeLinecap="round"
					/>
					<path
						d="M38,20 Q44,12 50,19 Q56,12 62,20"
						fill="none"
						stroke="#fff"
						strokeWidth="2.2"
						strokeLinecap="round"
					/>
					<path
						d="M72,22 Q77,15 82,21 Q87,15 92,22"
						fill="none"
						stroke="#fff"
						strokeWidth="2"
						strokeLinecap="round"
					/>
				</svg>
			</div>

			<div className="horizon-cumulus cumulus-right">
				<svg viewBox="0 0 680 420" fill="none">
					<title>Nuvens no horizonte</title>
					<path
						className="cloud-svg-shade"
						d="M140,420 C120,360 175,310 230,315 C245,255 315,220 380,235 C415,155 510,125 585,155 C625,115 680,130 680,130 L680,420 Z"
						fill="var(--cumulus-shade, #B8E7FA)"
						opacity="0.78"
					/>
					<path
						className="cloud-svg-body"
						d="M80,420 C65,365 115,320 175,325 C195,260 270,225 335,245 C365,150 475,105 565,135 C610,85 680,95 680,95 L680,420 Z"
						fill="var(--cumulus-body, #FFFFFF)"
						opacity="0.96"
					/>
				</svg>
			</div>

			<div className="horizon-cumulus cumulus-left">
				<svg viewBox="0 0 500 260" fill="none">
					<title>Nuvens no horizonte</title>
					<path
						className="cloud-svg-body"
						d="M0,120 C55,110 110,140 135,175 C185,155 250,175 275,215 C330,195 410,215 445,260 L0,260 Z"
						fill="var(--cumulus-body, #FFFFFF)"
						opacity="0.88"
					/>
				</svg>
			</div>
		</div>
	);
}
