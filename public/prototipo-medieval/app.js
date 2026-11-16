// ==========================================================================
// CODEX ARCANUM — GSAP SCROLLTRIGGER + FLOATING EMBER CANVAS
// 1 animação controlada pelo scroll (pin + scrub) em cada um dos 4 capítulos
// ==========================================================================

gsap.registerPlugin(ScrollTrigger);

// --------------------------------------------------------------------------
// 0. Partículas de Brasas e Cinzas Douradas (Estilo Elden Ring / Dark Souls)
// --------------------------------------------------------------------------
function initEmberParticles() {
  const canvas = document.getElementById("emberCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 42 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.9 + 0.6,
    speedY: -(Math.random() * 0.45 + 0.15),
    speedX: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.65 + 0.15,
    isCrimson: Math.random() > 0.68, // ~32% brasas carmesim (10% accent), resto ouro velho (30%)
  }));

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
      p.y += p.speedY;
      p.x += p.speedX;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.isCrimson
        ? `rgba(230, 25, 56, ${p.alpha})`
        : `rgba(200, 168, 107, ${p.alpha})`;
      ctx.shadowBlur = p.isCrimson ? 10 : 6;
      ctx.shadowColor = p.isCrimson ? "#e61938" : "#c8a86b";
      ctx.fill();
    }

    requestAnimationFrame(render);
  }

  render();
}

// --------------------------------------------------------------------------
// 1. Animações de Scroll dos 4 Capítulos
// --------------------------------------------------------------------------
window.addEventListener("load", () => {
  initEmberParticles();

  // =========================================================================
  // CAPÍTULO I (HERO): O Estandarte Carmesim (10%) desenrola sobre
  // "BEM VINDO, VISITANTE" enquanto o Astrolábio de Ouro (30%) gira
  // =========================================================================
  const heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cap-1",
      start: "top top",
      end: "+=1100",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  heroTl
    .to(
      "#heroCrimsonMask",
      {
        clipPath: "inset(0 0% 0 0)",
        ease: "power2.inOut",
      },
      0
    )
    .to(
      "#heroAstrolabe",
      {
        rotation: 95,
        scale: 1.08,
        ease: "none",
      },
      0
    );

  // =========================================================================
  // CAPÍTULO II (HORIZONTAL SCROLL): Salão das Relíquias + Fio de Sangue (10%)
  // =========================================================================
  const reliquarySection = document.querySelector("#cap-2");
  const reliquaryTrack = document.querySelector("#reliquaryTrack");

  if (reliquarySection && reliquaryTrack) {
    const getScrollAmount = () =>
      Math.max(0, reliquaryTrack.scrollWidth - window.innerWidth);

    const horizontalTl = gsap.timeline({
      scrollTrigger: {
        trigger: reliquarySection,
        start: "top top",
        end: () => `+=${getScrollAmount() + 450}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    horizontalTl
      .to(
        reliquaryTrack,
        {
          x: () => -getScrollAmount(),
          ease: "none",
        },
        0
      )
      .to(
        "#horizontalBloodline",
        {
          scaleX: 1,
          ease: "none",
        },
        0
      );
  }

  // =========================================================================
  // CAPÍTULO III (CESAMA): A Espinha Rúnica Carmesim (10%) desce e ilumina
  // cada um dos 3 Pergaminhos Dourados (30%) em sequência
  // =========================================================================
  const scrollCards = gsap.utils.toArray(".illuminated-scroll");

  gsap.set(scrollCards, {
    opacity: 0.25,
    x: 36,
  });

  const cesamaTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cap-3",
      start: "top top",
      end: "+=1350",
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });

  cesamaTl.to(
    "#cesamaRuneSpine",
    {
      scaleY: 1,
      duration: 3,
      ease: "none",
    },
    0
  );

  scrollCards.forEach((card, index) => {
    cesamaTl.to(
      card,
      {
        opacity: 1,
        x: 0,
        duration: 0.85,
        ease: "power2.out",
        onStart: () => card.classList.add("is-ignited"),
        onReverseComplete: () => card.classList.remove("is-ignited"),
      },
      index * 0.95
    );
  });

  // =========================================================================
  // CAPÍTULO IV (TRIBOS ANCESTRAIS): O Cofre/Santuário Dourado (30%) se abre
  // via clip-path revelando o Arco Gótico e o Botão Carmesim Real (10%)
  // =========================================================================
  const vault = document.querySelector("#tribosGateVault");
  const archFrame = document.querySelector(".gothic-arch-frame");

  gsap.set(vault, {
    clipPath: "inset(16% 18% 16% 18%)",
    scale: 0.92,
  });

  gsap.set(archFrame, {
    y: 45,
    scale: 0.9,
  });

  const tribosTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#cap-4",
      start: "top top",
      end: "+=1050",
      pin: true,
      scrub: 1,
      anticipatePin: 1,
    },
  });

  tribosTl
    .to(
      vault,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        ease: "power2.out",
      },
      0
    )
    .to(
      archFrame,
      {
        y: 0,
        scale: 1,
        ease: "power2.out",
      },
      0
    );
});
