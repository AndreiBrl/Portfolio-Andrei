// ==========================================================================
// ESTAÇÃO STUDIO GHIBLI MINIMALISTA — FÍSICA DE INÉRCIA, FUMAÇA & NUVENS
// - Trem infinito da direita para a esquerda
// - Freia suavemente com inércia real ao passar a mão na placa do vagão
// - Abre a placa em forma de nuvem Studio Ghibli
// - Ao fechar a nuvem, solta fumaça na chaminé e retoma marcha com inércia real
// ==========================================================================

const PROJECTS_CONTENT = {
  cesama: {
    wagonLabel: "VAGÃO 01 // SISTEMA DE GESTÃO HÍDRICA",
    title: "Sistema para Estação de Esgoto (Cesama)",
    mediaHtml: `
      <iframe
        src="https://www.youtube.com/embed/SbKSVSMG33Y?si=eu1nfMV0ejGvk9GO"
        title="Sistema Cesama - Gerenciamento de Análises"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `,
    description:
      "Criado para modernizar e agilizar o trabalho nas Estações de Tratamento de Esgoto (ETEs) da Cesama, automatizando a análise de amostras e o registro de dados. Conta com preenchimento dinâmico de parâmetros, regras de cálculo automáticas, filtros avançados e relatórios operacionais.",
    tags: ["Python", "Django", "SQL Server", "JavaScript", "HTML/CSS", "Git"],
    actionsHtml: `
      <a href="https://github.com/AndreiBrl" target="_blank" rel="noreferrer" class="cloud-primary-cta">
        Ver no GitHub →
      </a>
    `,
  },

  tribos: {
    wagonLabel: "VAGÃO 02 // OBRA LITERÁRIA & PLATAFORMA WEB",
    title: "Projeto Tribos Ancestrais",
    mediaHtml: `
      <img src="../img/gorila3.png" alt="Tribos Ancestrais" style="object-fit: contain; background: radial-gradient(circle, #2a6f97, #112a38); padding: 12px;" />
    `,
    description:
      "Obra literária original de Ficção Científica em construção, inspirada na cultura geek. Iniciada em 2022 e publicada na web com arquitetura moderna em React, Next.js e animações GSAP, oferecendo alto desempenho e um modo de leitura fluido pensado para dispositivos móveis.",
    tags: ["React", "Next.js", "GSAP", "Git", "Adobe Photoshop"],
    actionsHtml: `
      <a href="https://www.tribosancestrais.com.br" target="_blank" rel="noreferrer" class="cloud-primary-cta">
        Acessar Tribos Ancestrais →
      </a>
    `,
  },

  sobre: {
    wagonLabel: "VAGÃO 03 // O CRIADOR & CONTATO",
    title: "Andrei Barbuto — Desenvolvedor & Escritor",
    mediaHtml: `
      <img src="../img/ete_cesama.png" alt="Projetos de Andrei Barbuto" />
    `,
    description:
      "Desenvolvedor Web Full-Stack e Escritor de Ficção Científica em Juiz de Fora, MG. Apaixonado por transformar sistemas complexos em interfaces intuitivas e construir experiências digitais com identidade visual única.",
    tags: ["Full-Stack", "React / Next.js", "Python / Django", "TypeScript", "UI Motion"],
    actionsHtml: `
      <a href="../curriculo.pdf" download class="cloud-primary-cta">
        Baixar Currículo PDF ↓
      </a>
      <a href="https://www.linkedin.com/in/andreibarbuto/" target="_blank" rel="noreferrer" class="cloud-primary-cta" style="background:#1e2830;">
        LinkedIn →
      </a>
      <a href="https://github.com/AndreiBrl" target="_blank" rel="noreferrer" class="cloud-primary-cta" style="background:#1e2830;">
        GitHub →
      </a>
    `,
  },
};

window.addEventListener("load", () => {
  const trainEl = document.getElementById("ghibliTrain");
  const chimneyEl = document.getElementById("trainChimney");
  const steamCanvas = document.getElementById("chimneySteamCanvas");
  const ctx = steamCanvas.getContext("2d");

  const cloudOverlay = document.getElementById("cloudModalOverlay");
  const cloudDialog = document.getElementById("cloudDialog");
  const cloudInner = document.getElementById("cloudInnerContent");
  const closeCloudBtn = document.getElementById("closeCloudBtn");
  const signButtons = document.querySelectorAll(".wagon-project-sign");
  const wheelEls = document.querySelectorAll(".train-wheel");

  // Ajusta tamanho do canvas de fumaça
  function resizeCanvas() {
    steamCanvas.width = window.innerWidth;
    steamCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // =========================================================================
  // 1. SISTEMA DE PARTÍCULAS DE FUMAÇA STUDIO GHIBLI (CHAMINÉ)
  // =========================================================================
  const smokePuffs = [];

  function spawnChimneyPuff(options = {}) {
    if (!chimneyEl) return;
    const rect = chimneyEl.getBoundingClientRect();
    const originX = rect.left + rect.width * 0.5;
    const originY = rect.top + 2;

    const count = options.burst ? 7 : 2;
    for (let i = 0; i < count; i++) {
      smokePuffs.push({
        x: originX + (Math.random() - 0.5) * 10,
        y: originY + (Math.random() - 0.5) * 6,
        radius: (options.burst ? 12 : 8) + Math.random() * 10,
        maxRadius: (options.burst ? 48 : 30) + Math.random() * 24,
        // A fumaça sobe e deriva para a direita (já que o trem anda para a esquerda)
        vx: (options.burst ? 1.4 : 0.9) + Math.random() * 1.4 + currentSpeed * 0.35,
        vy: -(1.2 + Math.random() * 1.5),
        alpha: 0.92,
        growth: 0.38 + Math.random() * 0.25,
      });
    }
  }

  function updateAndDrawSmoke() {
    ctx.clearRect(0, 0, steamCanvas.width, steamCanvas.height);

    for (let i = smokePuffs.length - 1; i >= 0; i--) {
      const p = smokePuffs[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy *= 0.985; // desacelera subida suavemente
      p.vx *= 0.992;
      if (p.radius < p.maxRadius) {
        p.radius += p.growth;
      }
      p.alpha -= 0.0085;

      if (p.alpha <= 0.01) {
        smokePuffs.splice(i, 1);
        continue;
      }

      // Desenha bola de nuvem cel-shaded estilo Studio Ghibli
      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.shadowColor = "rgba(186, 230, 253, 0.7)";
      ctx.shadowBlur = 12;
      ctx.fill();

      // Sombra interna suave na base do puff de fumaça
      ctx.beginPath();
      ctx.arc(p.x + p.radius * 0.12, p.y + p.radius * 0.15, p.radius * 0.78, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(232, 246, 254, ${p.alpha * 0.55})`;
      ctx.fill();
      ctx.restore();
    }
  }

  // =========================================================================
  // 2. MOTOR DE FÍSICA E INÉRCIA DO TREM (DIREITA -> ESQUERDA INFINITO)
  // =========================================================================
  const CRUISE_SPEED = 2.65; // Velocidade de cruzeiro suave
  let trainX = window.innerWidth * 0.72; // Começa entrando pela direita
  let currentSpeed = CRUISE_SPEED;
  let wheelAngle = 0;

  // Estados: "CRUISING" | "BRAKING" | "STOPPED" | "ACCELERATING"
  let trainState = "CRUISING";
  let isCloudOpen = false;
  let hoverCooldownUntil = 0;
  let chugTimer = 0;

  function updateTrainPhysics() {
    const trainWidth = trainEl.offsetWidth || 1350;

    if (trainState === "CRUISING") {
      // Mantém velocidade de cruzeiro com leve suavização
      currentSpeed += (CRUISE_SPEED - currentSpeed) * 0.05;
      if (Math.random() < 0.04) {
        spawnChimneyPuff({ burst: false });
      }
    } else if (trainState === "BRAKING") {
      // Freia gentilmente com inércia real (atrito progressivo)
      currentSpeed *= 0.915;
      if (currentSpeed < 0.04) {
        currentSpeed = 0;
        trainState = "STOPPED";
      }
    } else if (trainState === "STOPPED") {
      currentSpeed = 0;
    } else if (trainState === "ACCELERATING") {
      // Inércia real de partida: começa bem pesado/lento e ganha embalo aos poucos
      const accelForce = 0.014 + currentSpeed * 0.022;
      currentSpeed = Math.min(CRUISE_SPEED, currentSpeed + accelForce);

      // Solta baforadas rítmicas de fumaça enquanto ganha velocidade ("chug... chug...")
      chugTimer++;
      if (chugTimer % 11 === 0) {
        spawnChimneyPuff({ burst: true });
      }

      if (currentSpeed >= CRUISE_SPEED - 0.05) {
        currentSpeed = CRUISE_SPEED;
        trainState = "CRUISING";
      }
    }

    // Move o trem da direita para a esquerda
    trainX -= currentSpeed;

    // Loop infinito: quando todo o trem passa da borda esquerda, reinicia à direita
    if (trainX < -trainWidth - 90) {
      trainX = window.innerWidth + 90;
    }

    // Inclinação sutil de inércia ao frear ou acelerar
    let pitchDeg = 0;
    if (trainState === "BRAKING") {
      pitchDeg = -currentSpeed * 0.18;
    } else if (trainState === "ACCELERATING") {
      pitchDeg = (CRUISE_SPEED - currentSpeed) * 0.16;
    }

    trainEl.style.transform = `translate3d(${trainX.toFixed(2)}px, 0, 0) rotate(${pitchDeg.toFixed(2)}deg)`;

    // Gira as rodas proporcionalmente à velocidade atual
    wheelAngle -= currentSpeed * 3.2;
    for (const wheel of wheelEls) {
      wheel.style.transform = `rotate(${wheelAngle.toFixed(1)}deg)`;
    }

    updateAndDrawSmoke();
    requestAnimationFrame(updateTrainPhysics);
  }

  requestAnimationFrame(updateTrainPhysics);

  // =========================================================================
  // 3. INTERAÇÃO: PASSAR A MÃO NA PLACA -> FREAR COM INÉRCIA & ABRIR NUVEM
  // =========================================================================
  function openProjectCloud(projectId, signEl) {
    if (isCloudOpen) return;
    const data = PROJECTS_CONTENT[projectId];
    if (!data) return;

    isCloudOpen = true;
    trainState = "BRAKING";

    // Destaca a placa ativa
    signButtons.forEach((btn) => btn.classList.remove("is-active"));
    signEl.classList.add("is-active");

    // Pequeno sopro de vapor do freio
    spawnChimneyPuff({ burst: false });

    // Preenche o conteúdo da nuvem Studio Ghibli
    cloudInner.innerHTML = `
      <div class="cloud-project-header">
        <span class="cloud-wagon-pill">${data.wagonLabel}</span>
      </div>
      <h2 class="cloud-project-title">${data.title}</h2>
      <div class="cloud-project-grid">
        <div class="cloud-media-box">
          ${data.mediaHtml}
        </div>
        <div class="cloud-text-col">
          <p class="cloud-desc">${data.description}</p>
          <div class="cloud-tech-tags">
            ${data.tags.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="cloud-actions-row">
            ${data.actionsHtml}
          </div>
        </div>
      </div>
    `;

    // Calcula a posição da placa do vagão para a nuvem nascer graciosamente dela
    const signRect = signEl.getBoundingClientRect();
    const startX = signRect.left + signRect.width / 2 - window.innerWidth / 2;
    const startY = signRect.top + signRect.height / 2 - window.innerHeight / 2;

    cloudOverlay.classList.add("is-open");
    cloudOverlay.setAttribute("aria-hidden", "false");

    gsap.killTweensOf([cloudOverlay, cloudDialog]);

    gsap.to(cloudOverlay, {
      opacity: 1,
      duration: 0.45,
      ease: "power2.out",
    });

    gsap.fromTo(
      cloudDialog,
      {
        x: startX * 0.45,
        y: startY * 0.55,
        scale: 0.25,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.78,
        ease: "back.out(1.28)",
      }
    );
  }

  // =========================================================================
  // 4. FECHAR A NUVEM -> SOLTAR FUMAÇA NA CHAMINÉ & VOLTAR COM INÉRCIA REAL
  // =========================================================================
  function closeProjectCloud() {
    if (!isCloudOpen) return;
    isCloudOpen = false;
    hoverCooldownUntil = performance.now() + 1200; // Evita reabrir no mesmo instante

    signButtons.forEach((btn) => btn.classList.remove("is-active"));

    gsap.killTweensOf([cloudOverlay, cloudDialog]);

    gsap.to(cloudDialog, {
      y: -35,
      scale: 0.82,
      opacity: 0,
      duration: 0.42,
      ease: "power2.in",
    });

    gsap.to(cloudOverlay, {
      opacity: 0,
      duration: 0.45,
      ease: "power2.inOut",
      onComplete: () => {
        cloudOverlay.classList.remove("is-open");
        cloudOverlay.setAttribute("aria-hidden", "true");
        cloudInner.innerHTML = ""; // Para vídeos em reprodução
      },
    });

    // Solta uma grande baforada de fumaça branca na chaminé e inicia aceleração com inércia!
    chugTimer = 0;
    spawnChimneyPuff({ burst: true });
    setTimeout(() => spawnChimneyPuff({ burst: true }), 180);
    setTimeout(() => spawnChimneyPuff({ burst: true }), 380);

    trainState = "ACCELERATING";
  }

  // Eventos nas placas dos vagões (hover com o mouse e clique para mobile/desktop)
  signButtons.forEach((btn) => {
    const projectId = btn.getAttribute("data-sign");

    btn.addEventListener("mouseenter", () => {
      if (performance.now() < hoverCooldownUntil) return;
      openProjectCloud(projectId, btn);
    });

    btn.addEventListener("click", () => {
      openProjectCloud(projectId, btn);
    });
  });

  // Eventos para fechar a nuvem
  closeCloudBtn.addEventListener("click", closeProjectCloud);

  cloudOverlay.addEventListener("click", (e) => {
    if (e.target === cloudOverlay) {
      closeProjectCloud();
    }
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isCloudOpen) {
      closeProjectCloud();
    }
  });
});
