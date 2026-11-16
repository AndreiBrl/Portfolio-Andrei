/* ==========================================================================
   CYBERPUNK MINIMALISTA 60/30/10 — 1 ANIMAÇÃO ASSINATURA POR SESSÃO (GSAP)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);

	// Seletor de Trios 60-30-10 no topo
	const trioButtons = document.querySelectorAll("[data-set-trio]");
	trioButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			const trio = btn.getAttribute("data-set-trio");
			document.documentElement.setAttribute("data-trio", trio);
			trioButtons.forEach((b) => b.classList.remove("active"));
			btn.classList.add("active");
		});
	});

	const mm = gsap.matchMedia();

	mm.add("(min-width: 901px)", () => {
		// ------------------------------------------------------------------
		// SESSÃO 1 (ANIMAÇÃO 1): Pin + Expansão da Barra 10% + Kanji Parallax
		// ------------------------------------------------------------------
		const tlHero = gsap.timeline({
			scrollTrigger: {
				trigger: "#sec-hero",
				start: "top top",
				pin: true,
				scrub: 1,
				end: "+=700",
				anticipatePin: 1,
			},
		});

		tlHero
			.to("#hero-spicy-bar", { width: "44vw", ease: "none" }, 0)
			.to("#hero-kanji-bg", { xPercent: 18, ease: "none" }, 0);

		// ------------------------------------------------------------------
		// SESSÃO 2 (ANIMAÇÃO 2): Pin + Rolagem Horizontal + Linha Laser 10%
		// ------------------------------------------------------------------
		const hSection = document.getElementById("sec-horizontal");
		const hTrack = document.getElementById("h-track");

		if (hSection && hTrack) {
			const tlHoriz = gsap.timeline({
				scrollTrigger: {
					trigger: hSection,
					start: "top top",
					pin: true,
					scrub: 1,
					end: () => `+=${window.innerWidth}`,
					invalidateOnRefresh: true,
				},
			});

			tlHoriz
				.to(hTrack, { xPercent: -50, ease: "none" }, 0)
				.to("#h-laser-line", { width: "100%", ease: "none" }, 0)
				.to("#h-kanji-bg", { xPercent: -30, ease: "none" }, 0);
		}

		// ------------------------------------------------------------------
		// SESSÃO 3 (ANIMAÇÃO 3): Pin + Scanner Vertical 10% + Steps Sequenciais
		// ------------------------------------------------------------------
		const steps = gsap.utils.toArray("[data-cesama-step]");
		gsap.set(steps, { opacity: 0.15, x: 60 });

		const tlCesama = gsap.timeline({
			scrollTrigger: {
				trigger: "#sistemaCesama",
				start: "top top",
				pin: true,
				scrub: 1,
				end: "+=900",
				anticipatePin: 1,
			},
		});

		tlCesama
			.to("#cesama-scanner", { height: "100%", ease: "none", duration: 3 }, 0)
			.to(steps, {
				opacity: 1,
				x: 0,
				stagger: 1,
				duration: 1,
				ease: "power2.out",
			}, 0);

		// ------------------------------------------------------------------
		// SESSÃO 4 (ANIMAÇÃO 4): Pin + Portal 30% que Expande no Scroll
		// ------------------------------------------------------------------
		const tlTribos = gsap.timeline({
			scrollTrigger: {
				trigger: "#tribos",
				start: "top top",
				pin: true,
				scrub: 1,
				end: "+=700",
				anticipatePin: 1,
			},
		});

		tlTribos.fromTo(
			"#tribos-portal",
			{ width: "52vw", height: "54vh" },
			{ width: "88vw", height: "80vh", ease: "none" },
		);
	});
});
