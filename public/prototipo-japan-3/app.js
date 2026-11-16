// ==========================================================================
// ESTAÇÃO STUDIO GHIBLI III (ASSETS EDITION)
// Utilizando Assets Vetoriais Gratuitos da Internet (Google Noto Vector Assets)
// para pessoas (crianças, idosos com bengala/muleta, atletas, viajantes),
// maquinista, casas japonesas, castelo, Torii, lanternas, árvores, nuvens e sol!
// ==========================================================================

const PROJECTS_CONTENT = {
  cesama: {
    wagonLabel: "VAGÃO 01 // ETE CESAMA",
    title: "Gerenciamento de Análises — Cesama",
    mediaHtml: `
      <iframe
        src="https://www.youtube.com/embed/SbKSVSMG33Y?si=eu1nfMV0ejGvk9GO"
        title="Sistema Cesama - Gerenciamento de Análises"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `,
    description:
      "Software criado para modernizar o trabalho nas Estações de Tratamento de Esgoto (ETEs) da Cesama, automatizando a análise de amostras e o registro de dados.",
    featuresTitle: "Telas & Funcionalidades",
    features: [
      {
        label: "Home",
        text: "Rotinas pendentes e parâmetros com acesso rápido.",
      },
      {
        label: "Rotinas",
        text: "Cálculo automático por parâmetro e observações.",
      },
      {
        label: "Consultas",
        text: "Filtros avançados para rotinas pendentes ou concluídas.",
      },
      {
        label: "Relatórios",
        text: "Relatórios externos dinâmicos e comparativos.",
      },
    ],
    tags: ["Python", "Django", "SQL Server", "JavaScript", "HTML/CSS", "Git"],
    actionsHtml: `
      <a href="https://github.com/AndreiBrl" target="_blank" rel="noreferrer" class="btn-icon-git" title="GitHub">
        <img src="../img/github.png" alt="GitHub" />
      </a>
    `,
  },

  tribos: {
    wagonLabel: "VAGÃO 02 // OBRA SCI-FI & WEB",
    title: "Projeto Tribos Ancestrais",
    mediaHtml: `
      <img src="../img/gorila3.png" alt="Tribos Ancestrais" style="object-fit: contain; background: radial-gradient(circle, #2a6f97, #112a38); padding: 8px;" />
    `,
    description:
      "Obra literária autoral de Ficção Científica iniciada em 2022 e publicada na web com arquitetura moderna focada em performance e leitura mobile.",
    featuresTitle: "Destaques do Projeto",
    features: [
      {
        label: "Obra Autoral",
        text: "Universo sci-fi original inspirado na cultura geek.",
      },
      {
        label: "Performance",
        text: "Refatorado para carregamento rápido de ilustrações.",
      },
      {
        label: "Mobile-First",
        text: "Design de leitura confortável pelo celular.",
      },
      {
        label: "Imersão",
        text: "Animações fluidas com React, Next.js e GSAP.",
      },
    ],
    tags: ["React", "Next.js", "GSAP", "Git", "Photoshop"],
    actionsHtml: `
      <a href="https://www.tribosancestrais.com.br" target="_blank" rel="noreferrer" class="cloud-primary-cta">
        Acessar Site →
      </a>
      <a href="https://github.com/AndreiBrl" target="_blank" rel="noreferrer" class="btn-icon-git" title="GitHub">
        <img src="../img/github.png" alt="GitHub" />
      </a>
    `,
  },

  sobre: {
    wagonLabel: "VAGÃO 03 // O AUTOR",
    title: "Andrei Barbuto — Dev Web & Escritor",
    mediaHtml: `
      <img src="../img/ete_cesama.png" alt="Projetos de Andrei Barbuto" />
    `,
    description:
      "Desenvolvedor Full-Stack e Escritor em Juiz de Fora, MG. Criando sistemas robustos e experiências digitais com identidade visual única.",
    featuresTitle: "Especialidades",
    features: [
      {
        label: "Front-End",
        text: "React, Next.js, TypeScript, Tailwind e GSAP.",
      },
      {
        label: "Back-End",
        text: "Python, Django e bancos SQL Server.",
      },
      {
        label: "UI & Motion",
        text: "Interfaces interativas e direção de arte.",
      },
      {
        label: "Literatura",
        text: "Autor da obra sci-fi Tribos Ancestrais.",
      },
    ],
    tags: ["React", "Next.js", "TypeScript", "Python", "Django", "SQL", "GSAP"],
    actionsHtml: `
      <a href="https://github.com/AndreiBrl" target="_blank" rel="noreferrer" class="btn-icon-git" title="GitHub">
        <img src="../img/github.png" alt="GitHub" />
      </a>
    `,
  },
};

const DRIVER_STOP_LINES = [
  "Parada pra café com pão de queijo!",
  "Última estação...",
  "Parada para lanche...",
  "Parada pro cafezinho...",
  "Segura o trem, sô!",
  "Uai, puxando o freio!",
  "Vai um pão de queijo aí?",
];

const DRIVER_DEPART_LINES = [
  "Próxima parada: Disneylândia!",
  "Ponto final: Guarapari!",
  "Partiu Guarapari! 💨",
  "Chaminé no talo, sô!",
  "Trem bão demais da conta!",
  "Bora que o café esfria!",
];

// ==========================================================================
// CATÁLOGO DE ASSETS VETORIAIS GRATUITOS DA INTERNET (Google Noto Emoji CDN)
// ==========================================================================
const NOTO_CDN = "https://cdn.jsdelivr.net/gh/googlefonts/noto-emoji@main/svg";

const PASSENGER_ASSETS_CATALOG = [
  {
    type: "child_boy",
    standingUrl: `${NOTO_CDN}/emoji_u1f9cd.svg`,
    walkingUrl: `${NOTO_CDN}/emoji_u1f6b6.svg`,
    sittingUrl: `${NOTO_CDN}/emoji_u1f9d2.svg`,
    windowHeadUrl: `${NOTO_CDN}/emoji_u1f466.svg`,
    speed: 0.017,
  },
  {
    type: "child_girl",
    standingUrl: `${NOTO_CDN}/emoji_u1f9cd_200d_2640.svg`,
    walkingUrl: `${NOTO_CDN}/emoji_u1f6b6_200d_2640.svg`,
    sittingUrl: `${NOTO_CDN}/emoji_u1f467.svg`,
    windowHeadUrl: `${NOTO_CDN}/emoji_u1f467.svg`,
    speed: 0.017,
  },
  {
    type: "elder_cane",
    standingUrl: `${NOTO_CDN}/emoji_u1f9d1_200d_1f9af.svg`,
    walkingUrl: `${NOTO_CDN}/emoji_u1f9d1_200d_1f9af.svg`,
    sittingUrl: `${NOTO_CDN}/emoji_u1f474.svg`,
    windowHeadUrl: `${NOTO_CDN}/emoji_u1f474.svg`,
    speed: 0.011,
  },
  {
    type: "elder_woman",
    standingUrl: `${NOTO_CDN}/emoji_u1f469_200d_1f9af.svg`,
    walkingUrl: `${NOTO_CDN}/emoji_u1f469_200d_1f9af.svg`,
    sittingUrl: `${NOTO_CDN}/emoji_u1f475.svg`,
    windowHeadUrl: `${NOTO_CDN}/emoji_u1f475.svg`,
    speed: 0.011,
  },
  {
    type: "wheelchair",
    standingUrl: `${NOTO_CDN}/emoji_u1f9d1_200d_1f9bd.svg`,
    walkingUrl: `${NOTO_CDN}/emoji_u1f9d1_200d_1f9bd.svg`,
    sittingUrl: `${NOTO_CDN}/emoji_u1f9d1_200d_1f9bd.svg`,
    windowHeadUrl: `${NOTO_CDN}/emoji_u1f9d1.svg`,
    speed: 0.015,
  },
  {
    type: "wheelchair_woman",
    standingUrl: `${NOTO_CDN}/emoji_u1f469_200d_1f9bd.svg`,
    walkingUrl: `${NOTO_CDN}/emoji_u1f469_200d_1f9bd.svg`,
    sittingUrl: `${NOTO_CDN}/emoji_u1f469_200d_1f9bd.svg`,
    windowHeadUrl: `${NOTO_CDN}/emoji_u1f469.svg`,
    speed: 0.015,
  },
];

function createPassengerAssetHtml(assetItem, behavior) {
  let url = assetItem.standingUrl;
  if (behavior === "walking") url = assetItem.walkingUrl;
  if (behavior === "sitting") url = assetItem.sittingUrl;
  return `<img src="${url}" alt="Passageiro" class="pax-asset-img" />`;
}

function createWindowRiderAssetHtml(assetItem) {
  return `<img src="${assetItem.windowHeadUrl}" alt="Passageiro na janela" />`;
}

// ==========================================================================
// UTILITÁRIOS DE COR E CÁLCULO LUNAR ASTRONÔMICO
// ==========================================================================
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function rgbToHex([r, g, b]) {
  const toHex = (n) => Math.round(Math.max(0, Math.min(255, n))).toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function lerpColor(hexA, hexB, t) {
  const a = hexToRgb(hexA);
  const b = hexToRgb(hexB);
  return rgbToHex([
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ]);
}

function getRealLunarPhase(date = new Date()) {
  const SYNODIC_MONTH = 29.53058867;
  const knownNewMoonMs = Date.UTC(2000, 0, 6, 18, 14, 0);
  const diffDays = (date.getTime() - knownNewMoonMs) / 86400000;
  const phaseRatio = ((diffDays % SYNODIC_MONTH) + SYNODIC_MONTH) % SYNODIC_MONTH / SYNODIC_MONTH;

  let name = "Lua Cheia";
  let emoji = "🌕";

  if (phaseRatio < 0.04 || phaseRatio >= 0.96) {
    name = "Lua Nova";
    emoji = "🌑";
  } else if (phaseRatio < 0.22) {
    name = "Lua Crescente";
    emoji = "🌒";
  } else if (phaseRatio < 0.28) {
    name = "Quarto Crescente";
    emoji = "🌓";
  } else if (phaseRatio < 0.46) {
    name = "Gibosa Crescente";
    emoji = "🌔";
  } else if (phaseRatio < 0.54) {
    name = "Lua Cheia";
    emoji = "🌕";
  } else if (phaseRatio < 0.72) {
    name = "Gibosa Minguante";
    emoji = "🌖";
  } else if (phaseRatio < 0.78) {
    name = "Quarto Minguante";
    emoji = "🌗";
  } else {
    name = "Lua Minguante";
    emoji = "🌘";
  }

  return { phaseRatio, name, emoji };
}

function buildMoonSvgPath(phaseRatio) {
  const r = 42;
  const cx = 50;
  const cy = 50;
  const p = phaseRatio < 0.03 || phaseRatio > 0.97 ? 0.06 : phaseRatio;

  if (Math.abs(p - 0.5) < 0.025) {
    return `M ${cx},${cy - r} A ${r},${r} 0 1,1 ${cx},${cy + r} A ${r},${r} 0 1,1 ${cx},${cy - r} Z`;
  }

  if (p < 0.5) {
    const k = Math.cos(p * 2 * Math.PI);
    const rx = Math.abs(k) * r;
    const sweepTerminator = k > 0 ? 0 : 1;
    return `M ${cx},${cy - r} A ${r},${r} 0 0,1 ${cx},${cy + r} A ${rx.toFixed(2)},${r} 0 0,${sweepTerminator} ${cx},${cy - r} Z`;
  } else {
    const k = Math.cos((p - 0.5) * 2 * Math.PI);
    const rx = Math.abs(k) * r;
    const sweepTerminator = k > 0 ? 1 : 0;
    return `M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${cy + r} A ${rx.toFixed(2)},${r} 0 0,${sweepTerminator} ${cx},${cy - r} Z`;
  }
}

const SKY_KEYFRAMES = [
  {
    hour: 0,
    zenith: "#071120",
    mid: "#10233f",
    horizon: "#1c365c",
    oceanDeep: "#09192e",
    oceanSurface: "#163154",
    cloudBody: "#455d80",
    cloudShade: "#2a3d59",
    nightOpacity: 1,
    contrailOpacity: 0.14,
  },
  {
    hour: 5,
    zenith: "#0c182e",
    mid: "#193054",
    horizon: "#334d73",
    oceanDeep: "#0f223d",
    oceanSurface: "#223f66",
    cloudBody: "#5c7396",
    cloudShade: "#3b4f70",
    nightOpacity: 0.9,
    contrailOpacity: 0.22,
  },
  {
    hour: 6.1,
    zenith: "#2c4678",
    mid: "#80759c",
    horizon: "#f7b176",
    oceanDeep: "#25496e",
    oceanSurface: "#d9936c",
    cloudBody: "#ffe3cc",
    cloudShade: "#e5a898",
    nightOpacity: 0.25,
    contrailOpacity: 0.55,
  },
  {
    hour: 7.4,
    zenith: "#258dc1",
    mid: "#46afdf",
    horizon: "#87d5f5",
    oceanDeep: "#3198c8",
    oceanSurface: "#69c5eb",
    cloudBody: "#ffffff",
    cloudShade: "#b8e7fa",
    nightOpacity: 0,
    contrailOpacity: 0.85,
  },
  {
    hour: 16.2,
    zenith: "#258dc1",
    mid: "#46afdf",
    horizon: "#87d5f5",
    oceanDeep: "#3198c8",
    oceanSurface: "#69c5eb",
    cloudBody: "#ffffff",
    cloudShade: "#b8e7fa",
    nightOpacity: 0,
    contrailOpacity: 0.85,
  },
  {
    hour: 17.75,
    zenith: "#283d6b",
    mid: "#c96757",
    horizon: "#f7b267",
    oceanDeep: "#223b5e",
    oceanSurface: "#e08758",
    cloudBody: "#ffdfd1",
    cloudShade: "#d98279",
    nightOpacity: 0.38,
    contrailOpacity: 0.65,
  },
  {
    hour: 18.6,
    zenith: "#0f203c",
    mid: "#233d63",
    horizon: "#4a5c80",
    oceanDeep: "#102340",
    oceanSurface: "#26446b",
    cloudBody: "#667d9e",
    cloudShade: "#415575",
    nightOpacity: 0.88,
    contrailOpacity: 0.25,
  },
  {
    hour: 19.5,
    zenith: "#071120",
    mid: "#10233f",
    horizon: "#1c365c",
    oceanDeep: "#09192e",
    oceanSurface: "#163154",
    cloudBody: "#455d80",
    cloudShade: "#2a3d59",
    nightOpacity: 1,
    contrailOpacity: 0.14,
  },
  {
    hour: 24,
    zenith: "#071120",
    mid: "#10233f",
    horizon: "#1c365c",
    oceanDeep: "#09192e",
    oceanSurface: "#163154",
    cloudBody: "#455d80",
    cloudShade: "#2a3d59",
    nightOpacity: 1,
    contrailOpacity: 0.14,
  },
];

window.addEventListener("load", () => {
  const rootStyle = document.documentElement.style;
  const trainEl = document.getElementById("ghibliTrain");
  const locoEl = document.getElementById("trainLocomotive");
  const chimneyEl = document.getElementById("trainChimney");
  const driverBubble = document.getElementById("driverBubble");
  const driverBubbleText = document.getElementById("driverBubbleText");

  const starsField = document.getElementById("starsField");
  const sunEl = document.getElementById("celestialSun");
  const moonEl = document.getElementById("celestialMoon");
  const moonLitPath = document.getElementById("moonLitPath");

  const clockWidget = document.getElementById("clockWidget");
  const clockTrigger = document.getElementById("clockTrigger");
  const clockDrawer = document.getElementById("clockDrawer");
  const clockDigital = document.getElementById("clockDigitalDisplay");
  const clockPeriodLabel = document.getElementById("clockPeriodLabel");
  const moonPhaseEmoji = document.getElementById("moonPhaseEmoji");
  const moonPhaseName = document.getElementById("moonPhaseName");
  const timeScrubber = document.getElementById("timeScrubber");
  const clockSyncBtn = document.getElementById("clockSyncBtn");

  const signalHandBtn = document.getElementById("signalHandBtn");
  const addPassengerBtn = document.getElementById("addPassengerBtn");
  const passengerCountBadge = document.getElementById("passengerCountBadge");
  const stationPassengersLayer = document.getElementById("stationPassengersLayer");
  const stationShelter = document.getElementById("stationShelter");
  const windowRiderSlots = Array.from(document.querySelectorAll(".window-rider"));

  const steamCanvas = document.getElementById("chimneySteamCanvas");
  const ctx = steamCanvas.getContext("2d");

  const cloudOverlay = document.getElementById("cloudModalOverlay");
  const cloudDialog = document.getElementById("cloudDialog");
  const cloudWagonPill = document.getElementById("cloudWagonPill");
  const cloudInner = document.getElementById("cloudInnerContent");
  const closeCloudBtn = document.getElementById("closeCloudBtn");
  const signButtons = document.querySelectorAll(".wagon-project-sign");
  const wagonEls = document.querySelectorAll(".train-wagon");
  const wheelEls = document.querySelectorAll(".train-wheel");

  function resizeCanvas() {
    steamCanvas.width = window.innerWidth;
    steamCanvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // =========================================================================
  // 0. ESTRELAS & FASE REAL DA LUA PELA DATA DO PC
  // =========================================================================
  for (let i = 0; i < 68; i++) {
    const star = document.createElement("div");
    star.className = "star-dot";
    const size = Math.random() * 2.4 + 1.1;
    star.style.width = `${size.toFixed(1)}px`;
    star.style.height = `${size.toFixed(1)}px`;
    star.style.left = `${(Math.random() * 98 + 1).toFixed(2)}%`;
    star.style.top = `${(Math.random() * 72 + 2).toFixed(2)}%`;
    star.style.animationDelay = `${(Math.random() * 4).toFixed(2)}s`;
    starsField.appendChild(star);
  }

  function applyLunarPhaseFromDate(dateObj) {
    const lunar = getRealLunarPhase(dateObj);
    moonPhaseEmoji.textContent = lunar.emoji;
    moonPhaseName.textContent = lunar.name;
    moonLitPath.setAttribute("d", buildMoonSvgPath(lunar.phaseRatio));
  }

  applyLunarPhaseFromDate(new Date());

  clockTrigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = clockDrawer.classList.toggle("is-open");
    clockDrawer.setAttribute("aria-hidden", String(!isOpen));
  });

  window.addEventListener("click", (e) => {
    if (!clockWidget.contains(e.target)) {
      clockDrawer.classList.remove("is-open");
      clockDrawer.setAttribute("aria-hidden", "true");
    }
  });

  // =========================================================================
  // 1. MOTOR DE HORÁRIO DO DIA (RELÓGIO DO PC + ARCO DO SOL E DA LUA)
  // =========================================================================
  let isSyncedWithPC = true;
  let manualMinutes = 12 * 60;

  function getPoeticPeriodPhrase(hour) {
    if (hour >= 5.5 && hour < 7.2) return "Amanhecer na estação";
    if (hour >= 7.2 && hour < 12) return "Manhã na estação";
    if (hour >= 12 && hour < 16.5) return "Tarde na estação";
    if (hour >= 16.5 && hour < 18.2) return "Entardecer na estação";
    if (hour >= 18.2 && hour < 19.3) return "Crepúsculo na estação";
    return "Noite na estação";
  }

  function updateSkyAndCelestialBodies(decimalHour) {
    const h = Math.floor(decimalHour) % 24;
    const m = Math.floor((decimalHour - Math.floor(decimalHour)) * 60);
    clockDigital.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    clockPeriodLabel.textContent = getPoeticPeriodPhrase(decimalHour);

    if (isSyncedWithPC) {
      timeScrubber.value = String(h * 60 + m);
    }

    let kfA = SKY_KEYFRAMES[0];
    let kfB = SKY_KEYFRAMES[SKY_KEYFRAMES.length - 1];
    for (let i = 0; i < SKY_KEYFRAMES.length - 1; i++) {
      if (decimalHour >= SKY_KEYFRAMES[i].hour && decimalHour <= SKY_KEYFRAMES[i + 1].hour) {
        kfA = SKY_KEYFRAMES[i];
        kfB = SKY_KEYFRAMES[i + 1];
        break;
      }
    }

    const span = Math.max(0.0001, kfB.hour - kfA.hour);
    const t = Math.max(0, Math.min(1, (decimalHour - kfA.hour) / span));

    rootStyle.setProperty("--sky-zenith", lerpColor(kfA.zenith, kfB.zenith, t));
    rootStyle.setProperty("--sky-mid", lerpColor(kfA.mid, kfB.mid, t));
    rootStyle.setProperty("--sky-horizon", lerpColor(kfA.horizon, kfB.horizon, t));
    rootStyle.setProperty("--ocean-deep", lerpColor(kfA.oceanDeep, kfB.oceanDeep, t));
    rootStyle.setProperty("--ocean-surface", lerpColor(kfA.oceanSurface, kfB.oceanSurface, t));
    rootStyle.setProperty("--cumulus-body", lerpColor(kfA.cloudBody, kfB.cloudBody, t));
    rootStyle.setProperty("--cumulus-shade", lerpColor(kfA.cloudShade, kfB.cloudShade, t));

    const nightOpacity = kfA.nightOpacity + (kfB.nightOpacity - kfA.nightOpacity) * t;
    const contrailOpacity = kfA.contrailOpacity + (kfB.contrailOpacity - kfA.contrailOpacity) * t;
    rootStyle.setProperty("--night-opacity", nightOpacity.toFixed(3));
    rootStyle.setProperty("--contrail-opacity", contrailOpacity.toFixed(3));

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const horizonY = vh * 0.81;
    const zenithY = vh * 0.14;

    if (decimalHour >= 5.25 && decimalHour <= 18.75) {
      const sunProgress = (decimalHour - 5.5) / 13;
      const clampedSun = Math.max(0, Math.min(1, sunProgress));
      const sunX = vw * (0.88 - clampedSun * 0.76);
      const sunArc = Math.sin(clampedSun * Math.PI);
      const sunY = horizonY - sunArc * (horizonY - zenithY);

      let sunAlpha = 1;
      if (sunProgress < 0.05) sunAlpha = Math.max(0, (sunProgress + 0.02) / 0.07);
      if (sunProgress > 0.95) sunAlpha = Math.max(0, (1.02 - sunProgress) / 0.07);

      sunEl.style.opacity = sunAlpha.toFixed(2);
      sunEl.style.transform = `translate3d(${sunX.toFixed(1)}px, ${sunY.toFixed(1)}px, 0)`;
    } else {
      sunEl.style.opacity = "0";
    }

    const isNightWindow = decimalHour >= 17.75 || decimalHour <= 6.25;
    if (isNightWindow) {
      const nightHoursSince18 = decimalHour >= 17.75 ? decimalHour - 18 : decimalHour + 6;
      const moonProgress = nightHoursSince18 / 12;
      const clampedMoon = Math.max(0, Math.min(1, moonProgress));
      const moonX = vw * (0.88 - clampedMoon * 0.76);
      const moonArc = Math.sin(clampedMoon * Math.PI);
      const moonY = horizonY - moonArc * (horizonY - zenithY);

      let moonAlpha = 1;
      if (moonProgress < 0.05) moonAlpha = Math.max(0, (moonProgress + 0.02) / 0.07);
      if (moonProgress > 0.95) moonAlpha = Math.max(0, (1.02 - moonProgress) / 0.07);

      moonEl.style.opacity = moonAlpha.toFixed(2);
      moonEl.style.transform = `translate3d(${moonX.toFixed(1)}px, ${moonY.toFixed(1)}px, 0)`;
    } else {
      moonEl.style.opacity = "0";
    }
  }

  function tickClock() {
    if (isSyncedWithPC) {
      const now = new Date();
      const decHour = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
      updateSkyAndCelestialBodies(decHour);
    }
  }

  tickClock();
  setInterval(tickClock, 1000);

  timeScrubber.addEventListener("input", (e) => {
    isSyncedWithPC = false;
    clockSyncBtn.classList.remove("is-synced");
    clockSyncBtn.textContent = "↺ Voltar ao horário do PC";
    manualMinutes = Number(e.target.value);
    updateSkyAndCelestialBodies(manualMinutes / 60);
  });

  clockSyncBtn.addEventListener("click", () => {
    isSyncedWithPC = true;
    clockSyncBtn.classList.add("is-synced");
    clockSyncBtn.textContent = "● Sincronizado com o PC";
    tickClock();
  });

  // =========================================================================
  // 2. FALAS DO MAQUINISTA (Apenas 1 fala por parada e 1 por partida)
  // =========================================================================
  let bubbleWanted = false;
  let bubbleAutoHideTimer = null;

  function pickRandomLine(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function sayDriverLineOnce(linesArray, durationMs = 3600) {
    if (!driverBubble || !driverBubbleText) return;
    const text = pickRandomLine(linesArray);

    clearTimeout(bubbleAutoHideTimer);
    driverBubbleText.textContent = text;
    bubbleWanted = true;

    bubbleAutoHideTimer = setTimeout(() => {
      bubbleWanted = false;
    }, durationMs);
  }

  function silenceDriverBubble() {
    clearTimeout(bubbleAutoHideTimer);
    bubbleWanted = false;
    driverBubble.classList.remove("is-visible");
  }

  function updateDriverBubbleVisibility() {
    if (!locoEl || !driverBubble) return;

    if (!bubbleWanted || isCloudOpen) {
      driverBubble.classList.remove("is-visible");
      return;
    }

    const locoRect = locoEl.getBoundingClientRect();
    const cabCenterX = locoRect.left + locoRect.width * 0.35;
    const margin = window.innerWidth < 768 ? 45 : 85;
    const isInsideVisibleStage =
      cabCenterX > margin && cabCenterX < window.innerWidth - margin;

    if (isInsideVisibleStage) {
      driverBubble.classList.add("is-visible");
    } else {
      driverBubble.classList.remove("is-visible");
    }
  }

  // =========================================================================
  // 3. PASSAGEIROS COM ASSETS VETORIAIS GRATUITOS + EMBARQUE NAS JANELAS
  // =========================================================================
  const waitingPassengers = [];
  const benchSeats = [
    { percent: 22, occupied: false },
    { percent: 31, occupied: false },
    { percent: 65, occupied: false },
    { percent: 75, occupied: false },
  ];
  let isCompulsoryBoardingStop = false;
  let isBoardingAnimationRunning = false;
  let nextWindowSlotIndex = 0;

  function updatePassengerBadge() {
    passengerCountBadge.textContent = String(waitingPassengers.length);
  }

  function addPassengerToStation() {
    const assetItem =
      PASSENGER_ASSETS_CATALOG[Math.floor(Math.random() * PASSENGER_ASSETS_CATALOG.length)];

    const freeBench = benchSeats.find((b) => !b.occupied);
    const rollBehavior = Math.random();
    let behavior = "standing";
    let xPercent = 12 + Math.random() * 76;
    let benchRef = null;

    if (freeBench && rollBehavior < 0.32) {
      behavior = "sitting";
      xPercent = freeBench.percent;
      freeBench.occupied = true;
      benchRef = freeBench;
    } else if (rollBehavior < 0.72) {
      behavior = "walking";
    }

    const el = document.createElement("div");
    el.className = `station-passenger is-${behavior}`;
    el.innerHTML = createPassengerAssetHtml(assetItem, behavior);
    el.style.left = `${xPercent.toFixed(1)}%`;

    gsap.fromTo(
      el,
      { scale: 0, opacity: 0, y: 10 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.6)" }
    );

    stationPassengersLayer.appendChild(el);

    waitingPassengers.push({
      el,
      assetItem,
      behavior,
      xPercent,
      minX: Math.max(10, xPercent - 12),
      maxX: Math.min(88, xPercent + 12),
      dir: Math.random() > 0.5 ? 1 : -1,
      speed: assetItem.speed,
      pauseFrames: 0,
      benchRef,
      boarding: false,
    });

    updatePassengerBadge();
  }

  addPassengerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    addPassengerToStation();
  });

  function updateStationPassengersWalk() {
    for (const pax of waitingPassengers) {
      if (pax.behavior === "walking" && !pax.boarding) {
        if (pax.pauseFrames > 0) {
          pax.pauseFrames--;
          if (pax.pauseFrames === 0) {
            pax.el.classList.remove("is-standing");
            pax.el.classList.add("is-walking");
            pax.el.innerHTML = createPassengerAssetHtml(pax.assetItem, "walking");
          }
          continue;
        }

        pax.xPercent += pax.speed * pax.dir;
        if (pax.xPercent >= pax.maxX) {
          pax.xPercent = pax.maxX;
          pax.dir = -1;
          pax.pauseFrames = 90 + Math.floor(Math.random() * 80);
          pax.el.classList.remove("is-walking");
          pax.el.classList.add("is-standing");
          pax.el.innerHTML = createPassengerAssetHtml(pax.assetItem, "standing");
        } else if (pax.xPercent <= pax.minX) {
          pax.xPercent = pax.minX;
          pax.dir = 1;
          pax.pauseFrames = 90 + Math.floor(Math.random() * 80);
          pax.el.classList.remove("is-walking");
          pax.el.classList.add("is-standing");
          pax.el.innerHTML = createPassengerAssetHtml(pax.assetItem, "standing");
        }
        pax.el.style.left = `${pax.xPercent.toFixed(2)}%`;
        // Os assets do Noto apontam para a esquerda por padrão (-1 = direita, 1 = esquerda)
        pax.el.style.transform = `scaleX(${pax.dir === 1 ? -1 : 1})`;
      }
    }
  }

  function boardAllWaitingPassengers() {
    if (isBoardingAnimationRunning || waitingPassengers.length === 0) return;
    isBoardingAnimationRunning = true;

    const passengersToBoard = waitingPassengers.splice(0, waitingPassengers.length);
    updatePassengerBadge();

    const trainRect = trainEl.getBoundingClientRect();
    const shelterRect = stationShelter.getBoundingClientRect();

    passengersToBoard.forEach((pax, idx) => {
      pax.boarding = true;
      if (pax.benchRef) pax.benchRef.occupied = false;

      if (pax.behavior === "sitting") {
        pax.el.innerHTML = createPassengerAssetHtml(pax.assetItem, "standing");
        pax.el.classList.remove("is-sitting");
        pax.el.classList.add("is-standing");
      }

      const paxRect = pax.el.getBoundingClientRect();
      const paxCenterX = paxRect.left + paxRect.width / 2;

      const isAlreadyBehindTrain =
        paxCenterX >= trainRect.left + trainRect.width * 0.04 &&
        paxCenterX <= trainRect.right - trainRect.width * 0.02;

      const delay = idx * 0.16;

      if (isAlreadyBehindTrain) {
        pax.el.classList.remove("is-walking");
        pax.el.classList.add("is-standing");

        gsap.to(pax.el, {
          y: -8,
          opacity: 0,
          duration: 0.45,
          delay: delay + 0.15,
          ease: "power2.out",
          onComplete: () => {
            pax.el.remove();
            seatPassengerInNearestWindow(pax.assetItem, paxCenterX);
          },
        });
      } else {
        const targetScreenX =
          paxCenterX < trainRect.left + trainRect.width * 0.04
            ? trainRect.left + trainRect.width * 0.15
            : trainRect.right - trainRect.width * 0.1;
        const targetPercent = Math.max(
          8,
          Math.min(90, ((targetScreenX - shelterRect.left) / shelterRect.width) * 100)
        );
        const distancePercent = Math.abs(targetPercent - pax.xPercent);
        const walkDuration = Math.max(0.5, distancePercent * 0.045);
        const walkDir = targetPercent >= pax.xPercent ? 1 : -1;

        pax.el.innerHTML = createPassengerAssetHtml(pax.assetItem, "walking");
        pax.el.classList.remove("is-standing");
        pax.el.classList.add("is-walking");
        pax.el.style.transform = `scaleX(${walkDir === 1 ? -1 : 1})`;

        gsap.to(pax.el, {
          left: `${targetPercent.toFixed(1)}%`,
          duration: walkDuration,
          delay,
          ease: "none",
          onComplete: () => {
            pax.el.classList.remove("is-walking");
            pax.el.classList.add("is-standing");
            gsap.to(pax.el, {
              y: -8,
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                pax.el.remove();
                seatPassengerInNearestWindow(pax.assetItem, targetScreenX);
              },
            });
          },
        });
      }
    });

    const totalBoardDurationMs = 950 + passengersToBoard.length * 160;
    setTimeout(() => {
      isBoardingAnimationRunning = false;
      isCompulsoryBoardingStop = false;
      syncSignalHandVisual();

      if (waitingPassengers.length > 0) {
        isCompulsoryBoardingStop = true;
        syncSignalHandVisual();
        boardAllWaitingPassengers();
      } else {
        releaseBrakesAndDepart();
      }
    }, totalBoardDurationMs);
  }

  function seatPassengerInNearestWindow(assetItem, boardScreenX) {
    let bestSlot = null;
    let bestDist = Infinity;

    for (const slot of windowRiderSlots) {
      if (!slot.classList.contains("is-occupied")) {
        const r = slot.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const dist = Math.abs(cx - boardScreenX);
        if (dist < bestDist) {
          bestDist = dist;
          bestSlot = slot;
        }
      }
    }

    if (!bestSlot) {
      bestSlot = windowRiderSlots[nextWindowSlotIndex % windowRiderSlots.length];
      nextWindowSlotIndex++;
    }

    if (bestSlot) {
      bestSlot.innerHTML = createWindowRiderAssetHtml(assetItem);
      bestSlot.classList.add("is-occupied");
    }
  }

  function clearTrainWindowRiders() {
    nextWindowSlotIndex = 0;
    windowRiderSlots.forEach((slot) => {
      slot.classList.remove("is-occupied");
      slot.innerHTML = "";
    });
  }

  // =========================================================================
  // 4. BOTÃO 1: MÃO DE SINAL DE TRÂNSITO (VERDE <-> FLIP SUAVE VERMELHO)
  // =========================================================================
  let isManualRedSignal = false;

  function syncSignalHandVisual() {
    const shouldShowRed = isManualRedSignal || isCompulsoryBoardingStop;
    if (shouldShowRed) {
      signalHandBtn.classList.add("is-red");
    } else {
      signalHandBtn.classList.remove("is-red");
    }
  }

  signalHandBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    isManualRedSignal = !isManualRedSignal;
    syncSignalHandVisual();

    if (isManualRedSignal) {
      engageTrainBrakes();
    } else if (!isCompulsoryBoardingStop && !isCloudOpen && !isMouseOverTrain) {
      releaseBrakesAndDepart();
    }
  });

  // =========================================================================
  // 5. PARTÍCULAS DE FUMAÇA STUDIO GHIBLI (CHAMINÉ)
  // =========================================================================
  const smokePuffs = [];

  function spawnChimneyPuff(options = {}) {
    if (!chimneyEl) return;
    const rect = chimneyEl.getBoundingClientRect();
    if (rect.right < -20 || rect.left > window.innerWidth + 20) return;

    const originX = rect.left + rect.width * 0.5;
    const originY = rect.top + 2;

    const count = options.burst ? 8 : 2;
    for (let i = 0; i < count; i++) {
      smokePuffs.push({
        x: originX + (Math.random() - 0.5) * 6,
        y: originY + (Math.random() - 0.5) * 4,
        radius: (options.burst ? 8 : 5) + Math.random() * 6,
        maxRadius: (options.burst ? 36 : 20) + Math.random() * 16,
        vx: (options.burst ? 1.0 : 0.6) + Math.random() * 1.0 + currentSpeed * 0.3,
        vy: -(0.9 + Math.random() * 1.25),
        alpha: 0.92,
        growth: 0.3 + Math.random() * 0.2,
      });
    }
  }

  function updateAndDrawSmoke() {
    ctx.clearRect(0, 0, steamCanvas.width, steamCanvas.height);

    for (let i = smokePuffs.length - 1; i >= 0; i--) {
      const p = smokePuffs[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy *= 0.986;
      p.vx *= 0.992;
      if (p.radius < p.maxRadius) {
        p.radius += p.growth;
      }
      p.alpha -= 0.0085;

      if (p.alpha <= 0.01) {
        smokePuffs.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
      ctx.shadowColor = "rgba(186, 230, 253, 0.65)";
      ctx.shadowBlur = 8;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(p.x + p.radius * 0.12, p.y + p.radius * 0.15, p.radius * 0.76, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(225, 245, 254, ${p.alpha * 0.55})`;
      ctx.fill();
      ctx.restore();
    }
  }

  // =========================================================================
  // 6. FÍSICA DO TREM + PARADA OBRIGATÓRIA NA ESTAÇÃO (DESKTOP & CELULAR)
  // =========================================================================
  const CRUISE_SPEED = 1.18;
  let trainX = window.innerWidth * 0.65;
  let currentSpeed = CRUISE_SPEED;
  let wheelAngle = 0;

  let trainState = "CRUISING";
  let isMouseOverTrain = false;
  let isCloudOpen = false;
  let chugTimer = 0;

  function engageTrainBrakes() {
    if (trainState === "BRAKING" || trainState === "STOPPED") return;

    trainState = "BRAKING";
    trainEl.classList.remove("is-whistling");
    trainEl.classList.add("is-braking");

    sayDriverLineOnce(DRIVER_STOP_LINES, 3800);
    spawnChimneyPuff({ burst: false });
  }

  function releaseBrakesAndDepart() {
    if (isMouseOverTrain || isCloudOpen || isManualRedSignal || isCompulsoryBoardingStop) {
      return;
    }
    if (trainState === "CRUISING" || trainState === "ACCELERATING") return;

    trainState = "ACCELERATING";
    trainEl.classList.remove("is-braking");
    trainEl.classList.add("is-whistling");

    sayDriverLineOnce(DRIVER_DEPART_LINES, 3800);

    chugTimer = 0;
    spawnChimneyPuff({ burst: true });
    setTimeout(() => {
      if (trainState === "ACCELERATING") spawnChimneyPuff({ burst: true });
    }, 200);
    setTimeout(() => {
      if (trainState === "ACCELERATING") spawnChimneyPuff({ burst: true });
    }, 420);
  }

  function isTrainAlignedWithStation() {
    if (!stationShelter || !trainEl) return false;
    const shelterRect = stationShelter.getBoundingClientRect();
    const trainRect = trainEl.getBoundingClientRect();

    const overlapLeft = Math.max(trainRect.left, shelterRect.left);
    const overlapRight = Math.min(trainRect.right, shelterRect.right);
    const overlapWidth = overlapRight - overlapLeft;

    return overlapWidth >= shelterRect.width * 0.35;
  }

  function checkCompulsoryPassengerStop() {
    if (waitingPassengers.length === 0 || isCompulsoryBoardingStop) return;
    if (!stationShelter || !locoEl) return;

    const shelterRect = stationShelter.getBoundingClientRect();
    const locoRect = locoEl.getBoundingClientRect();

    const triggerZoneLeft = shelterRect.left - shelterRect.width * 0.35;
    const triggerZoneRight = shelterRect.left + shelterRect.width * 0.55;

    if (locoRect.left >= triggerZoneLeft && locoRect.left <= triggerZoneRight) {
      isCompulsoryBoardingStop = true;
      syncSignalHandVisual();
      engageTrainBrakes();
    }
  }

  function updateTrainPhysics() {
    const trainWidth = trainEl.offsetWidth || 960;

    updateStationPassengersWalk();
    checkCompulsoryPassengerStop();

    if (trainState === "CRUISING") {
      currentSpeed += (CRUISE_SPEED - currentSpeed) * 0.04;
      if (Math.random() < 0.026) {
        spawnChimneyPuff({ burst: false });
      }
    } else if (trainState === "BRAKING") {
      currentSpeed *= 0.952;

      if (Math.random() < 0.1) {
        spawnChimneyPuff({ burst: false });
      }

      if (currentSpeed <= 0.045) {
        currentSpeed = 0;
        trainState = "STOPPED";

        if (
          waitingPassengers.length > 0 &&
          (isCompulsoryBoardingStop || isTrainAlignedWithStation())
        ) {
          isCompulsoryBoardingStop = true;
          syncSignalHandVisual();
          boardAllWaitingPassengers();
        }
      }
    } else if (trainState === "STOPPED") {
      currentSpeed = 0;
      if (
        waitingPassengers.length > 0 &&
        !isBoardingAnimationRunning &&
        (isCompulsoryBoardingStop || isTrainAlignedWithStation())
      ) {
        isCompulsoryBoardingStop = true;
        syncSignalHandVisual();
        boardAllWaitingPassengers();
      }
    } else if (trainState === "ACCELERATING") {
      const accelForce = 0.0055 + currentSpeed * 0.016;
      currentSpeed = Math.min(CRUISE_SPEED, currentSpeed + accelForce);

      chugTimer++;
      if (chugTimer % 14 === 0) {
        spawnChimneyPuff({ burst: true });
      }

      if (currentSpeed >= CRUISE_SPEED - 0.03) {
        currentSpeed = CRUISE_SPEED;
        trainState = "CRUISING";
        trainEl.classList.remove("is-whistling");
      }
    }

    trainX -= currentSpeed;

    const isMobile = window.innerWidth <= 768;
    const scaleFactor = isMobile ? 0.66 : 1;
    if (trainX * scaleFactor <= -trainWidth * scaleFactor) {
      trainX = window.innerWidth / scaleFactor;
      clearTrainWindowRiders();
    }

    let pitchDeg = 0;
    if (trainState === "BRAKING") {
      pitchDeg = -currentSpeed * 0.32;
    } else if (trainState === "ACCELERATING") {
      pitchDeg = (CRUISE_SPEED - currentSpeed) * 0.25;
    }

    trainEl.style.transform = `translate3d(${trainX.toFixed(2)}px, 0, 0) rotate(${pitchDeg.toFixed(2)}deg)`;

    wheelAngle -= currentSpeed * 3.4;
    for (const wheel of wheelEls) {
      wheel.style.transform = `rotate(${wheelAngle.toFixed(1)}deg)`;
    }

    updateDriverBubbleVisibility();
    updateAndDrawSmoke();
    requestAnimationFrame(updateTrainPhysics);
  }

  requestAnimationFrame(updateTrainPhysics);

  // =========================================================================
  // 7. EVENTOS DE HOVER NO TREM E CLIQUE NAS PLACAS (COM BOTTOM SHEET NO CELULAR)
  // =========================================================================
  trainEl.addEventListener("mouseenter", () => {
    isMouseOverTrain = true;
    engageTrainBrakes();
  });

  trainEl.addEventListener("mouseleave", () => {
    isMouseOverTrain = false;
    if (!isCloudOpen && !isManualRedSignal && !isCompulsoryBoardingStop) {
      releaseBrakesAndDepart();
    }
  });

  function openCloudModalOnClick(projectId, signEl) {
    const data = PROJECTS_CONTENT[projectId];
    if (!data) return;

    isCloudOpen = true;
    engageTrainBrakes();
    silenceDriverBubble();

    signButtons.forEach((btn) => btn.classList.remove("is-active"));
    if (signEl) signEl.classList.add("is-active");

    cloudWagonPill.textContent = data.wagonLabel;

    cloudInner.innerHTML = `
      <h2 class="cloud-project-title">${data.title}</h2>
      <div class="cloud-project-grid">
        <div class="cloud-media-col">
          <div class="cloud-media-box">
            ${data.mediaHtml}
          </div>
          <p class="cloud-desc">${data.description}</p>
        </div>

        <div class="cloud-text-col">
          <div class="cloud-features-box">
            <span class="cloud-features-title">✦ ${data.featuresTitle}</span>
            <ul class="cloud-features-list">
              ${data.features
                .map(
                  (f) => `
                <li>
                  <strong>${f.label}:</strong> ${f.text}
                </li>
              `
                )
                .join("")}
            </ul>
          </div>

          <div class="cloud-bottom-bar">
            <div class="cloud-tech-tags">
              ${data.tags.map((t) => `<span>${t}</span>`).join("")}
            </div>
            <div class="cloud-actions-row">
              ${data.actionsHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    const originEl = signEl || trainEl;
    const signRect = originEl.getBoundingClientRect();
    const startX = signRect.left + signRect.width / 2 - window.innerWidth / 2;
    const startY = signRect.top + signRect.height / 2 - window.innerHeight / 2;

    cloudOverlay.classList.add("is-open");
    cloudOverlay.setAttribute("aria-hidden", "false");

    gsap.killTweensOf([cloudOverlay, cloudDialog]);

    gsap.to(cloudOverlay, {
      opacity: 1,
      duration: 0.35,
      ease: "power2.out",
    });

    const isMobileSheet = window.innerWidth <= 768;
    if (isMobileSheet) {
      gsap.fromTo(
        cloudDialog,
        {
          x: 0,
          yPercent: 100,
          y: 0,
          scale: 1,
          opacity: 1,
        },
        {
          x: 0,
          yPercent: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.46,
          ease: "power3.out",
        }
      );
    } else {
      gsap.fromTo(
        cloudDialog,
        {
          x: startX * 0.45,
          y: startY * 0.55,
          yPercent: 0,
          scale: 0.22,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          duration: 0.72,
          ease: "back.out(1.25)",
        }
      );
    }
  }

  signButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const projectId = btn.getAttribute("data-sign");
      openCloudModalOnClick(projectId, btn);
    });
  });

  wagonEls.forEach((wagon) => {
    wagon.addEventListener("click", () => {
      const projectId = wagon.getAttribute("data-project-id");
      const signEl = wagon.querySelector(".wagon-project-sign");
      openCloudModalOnClick(projectId, signEl);
    });
  });

  function closeProjectCloud() {
    if (!isCloudOpen) return;
    isCloudOpen = false;
    isMouseOverTrain = false;

    signButtons.forEach((btn) => btn.classList.remove("is-active"));

    gsap.killTweensOf([cloudOverlay, cloudDialog]);

    const isMobileSheet = window.innerWidth <= 768;
    if (isMobileSheet) {
      gsap.to(cloudDialog, {
        yPercent: 100,
        duration: 0.34,
        ease: "power3.in",
      });
    } else {
      gsap.to(cloudDialog, {
        y: -30,
        scale: 0.82,
        opacity: 0,
        duration: 0.34,
        ease: "power2.in",
      });
    }

    gsap.to(cloudOverlay, {
      opacity: 0,
      duration: 0.36,
      ease: "power2.inOut",
      onComplete: () => {
        cloudOverlay.classList.remove("is-open");
        cloudOverlay.setAttribute("aria-hidden", "true");
        cloudInner.innerHTML = "";
        releaseBrakesAndDepart();
      },
    });
  }

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
