import type { RefObject } from "react";
import { type ProjectId, WAGONS_CONFIG } from "@/data/ghibliStation";

interface TrainAssemblyProps {
	trainRef: RefObject<HTMLDivElement>;
	locoRef: RefObject<HTMLDivElement>;
	chimneyRef: RefObject<HTMLDivElement>;
	driverBubbleRef: RefObject<HTMLDivElement>;
	driverBubbleTextRef: RefObject<HTMLSpanElement>;
	activeProjectId: ProjectId | null;
	onMouseEnterTrain: () => void;
	onMouseLeaveTrain: () => void;
	onOpenProject: (projectId: ProjectId, originEl: HTMLElement | null) => void;
}

export function TrainAssembly({
	trainRef,
	locoRef,
	chimneyRef,
	driverBubbleRef,
	driverBubbleTextRef,
	activeProjectId,
	onMouseEnterTrain,
	onMouseLeaveTrain,
	onOpenProject,
}: TrainAssemblyProps) {
	return (
		<div className="railway-corridor">
			<div
				className="train-assembly"
				ref={trainRef}
				onMouseEnter={onMouseEnterTrain}
				onMouseLeave={onMouseLeaveTrain}
			>
				{/* LOCOMOTIVA */}
				<div className="train-locomotive" ref={locoRef}>
					<div className="loco-headlight-beam" aria-hidden="true" />

					<div className="driver-status-bubble" ref={driverBubbleRef} aria-live="polite">
						<span ref={driverBubbleTextRef}>Segura o trem, sô!</span>
					</div>

					<div className="locomotive-chimney" ref={chimneyRef}>
						<div className="chimney-rim" />
					</div>

					<div className="loco-roof" />

					<div className="loco-body">
						<div className="driver-cab-window" title="Maquinista Ghibli">
							<svg className="maquinista-svg" viewBox="0 0 110 78">
								<title>Maquinista</title>
								<rect x="0" y="0" width="110" height="78" className="cab-interior-bg" fill="#233746" />
								<circle cx="55" cy="40" r="38" className="cab-warm-glow" fill="rgba(255, 232, 163, 0.2)" />

								<g className="whistle-cord-group">
									<line x1="34" y1="0" x2="34" y2="28" stroke="#f2cd5c" strokeWidth="2.2" />
									<circle cx="34" cy="29" r="3.8" fill="#e65100" stroke="#1e2830" strokeWidth="1.2" />
								</g>

								<rect
									x="6"
									y="48"
									width="28"
									height="30"
									rx="3"
									fill="#37474f"
									stroke="#141b20"
									strokeWidth="1.5"
								/>

								<g className="brake-lever-group">
									<line
										x1="20"
										y1="54"
										x2="14"
										y2="26"
										stroke="#cfd8dc"
										strokeWidth="3.2"
										strokeLinecap="round"
									/>
									<circle cx="14" cy="25" r="4.8" fill="#ff5252" stroke="#141b20" strokeWidth="1.4" />
								</g>

								<g className="driver-character">
									<path
										d="M44,76 C44,54 52,48 64,48 C76,48 82,55 82,76 Z"
										fill="#1e3a5f"
										stroke="#121a21"
										strokeWidth="1.6"
									/>
									<polygon points="58,48 66,48 62,57" fill="#f2cd5c" />
									<circle cx="62" cy="34" r="12.5" fill="#ffe0bd" stroke="#121a21" strokeWidth="1.6" />
									<circle cx="56" cy="34" r="2.1" fill="#121a21" />
									<circle cx="56.7" cy="33.3" r="0.7" fill="#ffffff" />
									<ellipse cx="60" cy="38" rx="2.8" ry="1.5" fill="#ff8a80" opacity="0.65" />
									<path
										d="M51,39 Q55,37 59,40"
										fill="none"
										stroke="#3e2723"
										strokeWidth="2"
										strokeLinecap="round"
									/>
									<path
										d="M46,25 L76,25 L73,15 L51,15 Z"
										fill="#162c46"
										stroke="#121a21"
										strokeWidth="1.5"
									/>
									<rect x="48" y="22" width="26" height="3" fill="#f2cd5c" />
									<path d="M42,25 L56,25 L52,28 L42,27 Z" fill="#121a21" />
									<circle cx="58" cy="19" r="2" fill="#f2cd5c" />

									<g className="driver-arm">
										<path
											d="M56,54 Q38,52 18,32"
											fill="none"
											stroke="#1e3a5f"
											strokeWidth="6.5"
											strokeLinecap="round"
										/>
										<circle cx="18" cy="32" r="4.2" fill="#ffffff" stroke="#121a21" strokeWidth="1.4" />
									</g>
								</g>
							</svg>
						</div>

						<div className="loco-cabin-door">
							<div className="door-glass" />
						</div>
						<div className="jr-emblem">JR // 26</div>
						<div className="loco-yellow-stripe" />
						<div className="loco-headlight" />
					</div>

					<div className="train-undercarriage">
						<div className="wheel-bogie">
							<div className="train-wheel" />
							<div className="train-wheel" />
						</div>
						<div className="wheel-bogie">
							<div className="train-wheel" />
							<div className="train-wheel" />
						</div>
					</div>
				</div>

				{/* VAGÕES DE PROJETOS */}
				{WAGONS_CONFIG.map((wagon) => (
					<div key={wagon.id} className="contents">
						<div className="wagon-coupler" />

						<article
							className="train-wagon"
							data-project-id={wagon.id}
							onClick={(e) => {
								const signBtn = e.currentTarget.querySelector<HTMLElement>(".wagon-project-sign");
								onOpenProject(wagon.id, signBtn);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									const signBtn = e.currentTarget.querySelector<HTMLElement>(".wagon-project-sign");
									onOpenProject(wagon.id, signBtn);
								}
							}}
						>
							<button
								type="button"
								className={`wagon-project-sign${activeProjectId === wagon.id ? " is-active" : ""}`}
								aria-label={wagon.ariaLabel}
								onClick={(e) => {
									e.stopPropagation();
									onOpenProject(wagon.id, e.currentTarget);
								}}
							>
								<span className="sign-pin left" />
								<span className="sign-pin right" />
								<span className="sign-tag">{wagon.tag}</span>
								<strong className="sign-title">{wagon.title}</strong>
								<span className="sign-cta">{wagon.cta}</span>
							</button>

							<div className="wagon-roof">
								<div className="roof-ac-unit" />
							</div>

							<div className="wagon-body">
								<div className="wagon-door">
									<div className="door-window" />
									<div className="door-window" />
								</div>
								<div className="wagon-windows-row">
									<div className="passenger-window">
										<div className="window-rider" />
									</div>
									<div className="passenger-window">
										<div className="window-rider" />
									</div>
									<div className="passenger-window">
										<div className="window-rider" />
									</div>
								</div>
								<div className="wagon-door">
									<div className="door-window" />
									<div className="door-window" />
								</div>
								<div className="jr-mini-mark">JR</div>
								<div className="wagon-yellow-stripe" />
							</div>

							<div className="train-undercarriage">
								<div className="wheel-bogie">
									<div className="train-wheel" />
									<div className="train-wheel" />
								</div>
								<div className="wheel-bogie">
									<div className="train-wheel" />
									<div className="train-wheel" />
								</div>
							</div>
						</article>
					</div>
				))}
			</div>
		</div>
	);
}
