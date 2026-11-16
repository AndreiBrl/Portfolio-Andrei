import type { RefObject } from "react";
import { PROJECTS_CONTENT, type ProjectId } from "@/data/ghibliStation";

interface CloudModalProps {
	overlayRef: RefObject<HTMLDivElement>;
	dialogRef: RefObject<HTMLDivElement>;
	isOpen: boolean;
	projectId: ProjectId | null;
	onClose: () => void;
}

export function CloudModal({
	overlayRef,
	dialogRef,
	isOpen,
	projectId,
	onClose,
}: CloudModalProps) {
	const data = projectId ? PROJECTS_CONTENT[projectId] : null;

	return (
		<div
			className={`ghibli-cloud-overlay${isOpen ? " is-open" : ""}`}
			ref={overlayRef}
			aria-hidden={String(!isOpen) as "true" | "false"}
			onClick={(e) => {
				if (e.target === overlayRef.current) {
					onClose();
				}
			}}
			onKeyDown={(e) => {
				if (e.key === "Escape") onClose();
			}}
		>
			<div className="ghibli-cloud-dialog" ref={dialogRef} role="dialog" aria-modal="true">
				<svg className="cloud-shape-bg" viewBox="0 0 1200 780" preserveAspectRatio="none" aria-hidden="true">
					<path
						d="M 95,720
               C 25,715 5,640 28,565
               C -5,485 10,360 55,305
               C 30,210 85,115 185,115
               C 235,40 365,20 465,68
               C 545,15 685,15 765,68
               C 865,20 995,40 1045,115
               C 1145,115 1195,210 1170,305
               C 1210,375 1205,495 1168,565
               C 1195,645 1165,720 1090,720
               Z"
						fill="#CDECFB"
					/>
					<path
						d="M 105,698
               C 35,692 15,620 38,545
               C 5,465 20,345 65,290
               C 40,195 95,102 195,102
               C 245,30 375,12 470,58
               C 550,8 685,8 765,58
               C 860,12 985,30 1035,102
               C 1135,102 1185,195 1160,290
               C 1200,360 1195,475 1158,545
               C 1185,625 1155,698 1080,698
               Z"
						fill="#FFFFFF"
					/>
				</svg>

				<div className="cloud-inner-wrapper">
					<div className="cloud-top-bar">
						<span className="cloud-wagon-pill">{data ? data.wagonLabel : "VAGÃO 01"}</span>
						<button
							type="button"
							className="close-cloud-btn"
							onClick={onClose}
							aria-label="Fechar nuvem"
							title="Fechar nuvem"
						>
							✕
						</button>
					</div>

					{data && (
						<div className="cloud-inner-content">
							<h2 className="cloud-project-title">{data.title}</h2>
							<div className="cloud-project-grid">
								<div className="cloud-media-col">
									<div
										className={`cloud-media-box${data.imageStyle === "avatar" ? " is-avatar" : ""}`}
									>
										{data.mediaType === "youtube" ? (
											<iframe
												src={data.mediaSrc}
												title={data.mediaAlt}
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
												allowFullScreen
											/>
										) : (
											<img
												src={data.mediaSrc}
												alt={data.mediaAlt}
												style={
													data.imageStyle === "contain-dark"
														? {
																objectFit: "contain",
																background: "radial-gradient(circle, #2a6f97, #112a38)",
																padding: "8px",
															}
														: data.imageStyle === "avatar"
															? {
																	objectFit: "cover",
																	objectPosition: "top center",
																}
															: undefined
												}
											/>
										)}
									</div>
									<p className="cloud-desc">{data.description}</p>
								</div>

								<div className="cloud-text-col">
									<div className="cloud-features-box">
										<span className="cloud-features-title">✦ {data.featuresTitle}</span>
										<ul className="cloud-features-list">
											{data.features.map((f) => (
												<li key={f.label}>
													<strong>{f.label}:</strong> {f.text}
												</li>
											))}
										</ul>
									</div>

									<div className="cloud-bottom-bar">
										<div className="cloud-tech-tags">
											{data.tags.map((tag) => (
												<span key={tag}>{tag}</span>
											))}
										</div>
										<div className="cloud-actions-row">
											{data.siteHref && (
												<a
													href={data.siteHref}
													target="_blank"
													rel="noreferrer"
													className="cloud-primary-cta"
												>
													{data.siteLabel}
												</a>
											)}
											{data.showGithub && (
												<a
													href="https://github.com/AndreiBrl"
													target="_blank"
													rel="noreferrer"
													className="btn-icon-git"
													title="GitHub"
													aria-label="GitHub"
												>
													<img src="/img/github.png" alt="GitHub" />
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
