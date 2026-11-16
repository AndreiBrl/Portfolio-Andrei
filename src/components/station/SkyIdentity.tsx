export function SkyIdentity() {
	return (
		<header className="sky-identity">
			<div className="cloud-name-container">
				<h1 className="cloud-signature-name">
					ANDREI
					<br />
					BARBUTO
				</h1>
				<p className="cloud-role-subtitle">Desenvolvedor Web &amp; Escritor</p>

				<nav className="sky-social-actions" aria-label="Currículo e LinkedIn">
					<a href="/curriculo.pdf" download className="btn-curriculo-dl" title="Baixar Currículo PDF">
						<span>Currículo</span>
						<svg
							viewBox="0 0 20 20"
							width="14"
							height="14"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.4"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<path d="M10 3v10m0 0l-4-4m4 4l4-4M4 17h12" />
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/andreibarbuto/"
						target="_blank"
						rel="noreferrer"
						className="btn-icon-linkedin"
						aria-label="LinkedIn"
						title="LinkedIn"
					>
						<img src="/img/linkedin.png" alt="LinkedIn" />
					</a>
				</nav>
			</div>
		</header>
	);
}
