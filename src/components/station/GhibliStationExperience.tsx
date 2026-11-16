"use client";

import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	DRIVER_DEPART_LINES,
	DRIVER_STOP_LINES,
	type ProjectId,
} from "@/data/ghibliStation";
import {
	type LunarPhaseInfo,
	buildMoonSvgPath,
	computeSkyAtmosphere,
	getPoeticPeriodPhrase,
	getRealLunarPhase,
} from "@/lib/astronomy";
import {
	type PassengerType,
	createPassengerSvg,
	createWindowRiderSvg,
} from "@/lib/passengers";
import { ClockWidget } from "./ClockWidget";
import { CloudModal } from "./CloudModal";
import { SkyCanvas } from "./SkyCanvas";
import { SkyIdentity } from "./SkyIdentity";
import { StationBackdrop } from "./StationBackdrop";
import { TrainAssembly } from "./TrainAssembly";

interface SmokePuff {
	x: number;
	y: number;
	radius: number;
	maxRadius: number;
	vx: number;
	vy: number;
	alpha: number;
	growth: number;
}

interface BenchSeat {
	percent: number;
	occupied: boolean;
}

interface WaitingPassenger {
	el: HTMLDivElement;
	type: PassengerType;
	behavior: "standing" | "walking" | "sitting";
	xPercent: number;
	minX: number;
	maxX: number;
	dir: 1 | -1;
	speed: number;
	pauseFrames: number;
	benchRef: BenchSeat | null;
	boarding: boolean;
}

type TrainState = "CRUISING" | "BRAKING" | "STOPPED" | "ACCELERATING";

const getCruiseSpeed = () => (typeof window !== "undefined" && window.innerWidth <= 768 ? 1.18 : 1.55);

export function GhibliStationExperience() {
	// Refs de elementos DOM
	const starsFieldRef = useRef<HTMLDivElement>(null);
	const sunRef = useRef<HTMLDivElement>(null);
	const moonRef = useRef<HTMLDivElement>(null);
	const moonLitPathRef = useRef<SVGPathElement>(null);
	const clockWidgetRef = useRef<HTMLElement>(null);

	const shelterRef = useRef<HTMLDivElement>(null);
	const passengersLayerRef = useRef<HTMLDivElement>(null);
	const steamCanvasRef = useRef<HTMLCanvasElement>(null);

	const trainRef = useRef<HTMLDivElement>(null);
	const locoRef = useRef<HTMLDivElement>(null);
	const chimneyRef = useRef<HTMLDivElement>(null);
	const driverBubbleRef = useRef<HTMLDivElement>(null);
	const driverBubbleTextRef = useRef<HTMLSpanElement>(null);

	const cloudOverlayRef = useRef<HTMLDivElement>(null);
	const cloudDialogRef = useRef<HTMLDivElement>(null);

	// Estados de UI
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isSyncedWithPC, setIsSyncedWithPC] = useState(true);
	const [scrubberMinutes, setScrubberMinutes] = useState(12 * 60);
	const [digitalTime, setDigitalTime] = useState("12:00");
	const [periodLabel, setPeriodLabel] = useState("Tarde na estação");
	const [lunarPhase, setLunarPhase] = useState<LunarPhaseInfo>(() => getRealLunarPhase(new Date()));

	const [isManualRedSignal, setIsManualRedSignal] = useState(false);
	const [isCompulsoryStopUI, setIsCompulsoryStopUI] = useState(false);
	const [passengerCount, setPassengerCount] = useState(0);

	const [activeProjectId, setActiveProjectId] = useState<ProjectId | null>(null);
	const [isCloudOpen, setIsCloudOpen] = useState(false);

	// Refs mutáveis para física em 60fps sem re-renders desnecessários
	const physicsRef = useRef({
		trainX: 700,
		currentSpeed: 1.55,
		wheelAngle: 0,
		trainState: "CRUISING" as TrainState,
		isMouseOverTrain: false,
		isCloudOpen: false,
		isManualRedSignal: false,
		isCompulsoryBoardingStop: false,
		isBoardingAnimationRunning: false,
		chugTimer: 0,
		nextWindowSlotIndex: 0,
		bubbleWanted: false,
		bubbleTimer: null as ReturnType<typeof setTimeout> | null,
		isSyncedWithPC: true,
	});

	const smokePuffsRef = useRef<SmokePuff[]>([]);
	const waitingPassengersRef = useRef<WaitingPassenger[]>([]);
	const benchSeatsRef = useRef<BenchSeat[]>([
		{ percent: 22, occupied: false },
		{ percent: 31, occupied: false },
		{ percent: 65, occupied: false },
		{ percent: 75, occupied: false },
	]);

	// Sincroniza estado booleano com refs
	useEffect(() => {
		physicsRef.current.isCloudOpen = isCloudOpen;
	}, [isCloudOpen]);

	useEffect(() => {
		physicsRef.current.isSyncedWithPC = isSyncedWithPC;
	}, [isSyncedWithPC]);

	// =========================================================================
	// CÉU, SOL, LUA E RELÓGIO
	// =========================================================================
	const updateSkyAndCelestialBodies = useCallback((decimalHour: number) => {
		const rootStyle = document.documentElement.style;
		const h = Math.floor(decimalHour) % 24;
		const m = Math.floor((decimalHour - Math.floor(decimalHour)) * 60);

		setDigitalTime(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
		setPeriodLabel(getPoeticPeriodPhrase(decimalHour));

		if (physicsRef.current.isSyncedWithPC) {
			setScrubberMinutes(h * 60 + m);
		}

		const atm = computeSkyAtmosphere(decimalHour);
		rootStyle.setProperty("--sky-zenith", atm.zenith);
		rootStyle.setProperty("--sky-mid", atm.mid);
		rootStyle.setProperty("--sky-horizon", atm.horizon);
		rootStyle.setProperty("--ocean-deep", atm.oceanDeep);
		rootStyle.setProperty("--ocean-surface", atm.oceanSurface);
		rootStyle.setProperty("--cumulus-body", atm.cloudBody);
		rootStyle.setProperty("--cumulus-shade", atm.cloudShade);
		rootStyle.setProperty("--night-opacity", atm.nightOpacity.toFixed(3));
		rootStyle.setProperty("--contrail-opacity", atm.contrailOpacity.toFixed(3));

		const vw = window.innerWidth;
		const vh = window.innerHeight;
		const horizonY = vh * 0.81;
		const zenithY = vh * 0.14;

		const sunEl = sunRef.current;
		if (sunEl) {
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
		}

		const moonEl = moonRef.current;
		if (moonEl) {
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
	}, []);

	// Inicialização das estrelas, lua e relógio
	useEffect(() => {
		const starsContainer = starsFieldRef.current;
		if (starsContainer && starsContainer.children.length === 0) {
			for (let i = 0; i < 68; i++) {
				const star = document.createElement("div");
				star.className = "star-dot";
				const size = Math.random() * 2.4 + 1.1;
				star.style.width = `${size.toFixed(1)}px`;
				star.style.height = `${size.toFixed(1)}px`;
				star.style.left = `${(Math.random() * 98 + 1).toFixed(2)}%`;
				star.style.top = `${(Math.random() * 72 + 2).toFixed(2)}%`;
				star.style.animationDelay = `${(Math.random() * 4).toFixed(2)}s`;
				starsContainer.appendChild(star);
			}
		}

		const now = new Date();
		const phase = getRealLunarPhase(now);
		setLunarPhase(phase);
		if (moonLitPathRef.current) {
			moonLitPathRef.current.setAttribute("d", buildMoonSvgPath(phase.phaseRatio));
		}

		const tick = () => {
			if (physicsRef.current.isSyncedWithPC) {
				const current = new Date();
				const decHour =
					current.getHours() + current.getMinutes() / 60 + current.getSeconds() / 3600;
				updateSkyAndCelestialBodies(decHour);
			}
		};

		tick();
		const intervalId = setInterval(tick, 1000);
		return () => clearInterval(intervalId);
	}, [updateSkyAndCelestialBodies]);

	// Fecha gaveta do relógio ao clicar fora
	useEffect(() => {
		const handleOutsideClick = (e: MouseEvent) => {
			if (clockWidgetRef.current && !clockWidgetRef.current.contains(e.target as Node)) {
				setIsDrawerOpen(false);
			}
		};
		window.addEventListener("click", handleOutsideClick);
		return () => window.removeEventListener("click", handleOutsideClick);
	}, []);

	// =========================================================================
	// FALAS DO MAQUINISTA & FUMAÇA DA CHAMINÉ
	// =========================================================================
	const sayDriverLineOnce = useCallback((linesArray: string[], durationMs = 3800) => {
		const textEl = driverBubbleTextRef.current;
		if (!textEl) return;
		const text = linesArray[Math.floor(Math.random() * linesArray.length)];

		if (physicsRef.current.bubbleTimer) {
			clearTimeout(physicsRef.current.bubbleTimer);
		}

		textEl.textContent = text;
		physicsRef.current.bubbleWanted = true;
		physicsRef.current.bubbleTimer = setTimeout(() => {
			physicsRef.current.bubbleWanted = false;
		}, durationMs);
	}, []);

	const silenceDriverBubble = useCallback(() => {
		if (physicsRef.current.bubbleTimer) {
			clearTimeout(physicsRef.current.bubbleTimer);
		}
		physicsRef.current.bubbleWanted = false;
		driverBubbleRef.current?.classList.remove("is-visible");
	}, []);

	const spawnChimneyPuff = useCallback((options: { burst?: boolean } = {}) => {
		const chimneyEl = chimneyRef.current;
		if (!chimneyEl) return;
		const rect = chimneyEl.getBoundingClientRect();
		if (rect.right < -20 || rect.left > window.innerWidth + 20) return;

		const originX = rect.left + rect.width * 0.5;
		const originY = rect.top + 2;
		const count = options.burst ? 8 : 2;

		for (let i = 0; i < count; i++) {
			smokePuffsRef.current.push({
				x: originX + (Math.random() - 0.5) * 6,
				y: originY + (Math.random() - 0.5) * 4,
				radius: (options.burst ? 8 : 5) + Math.random() * 6,
				maxRadius: (options.burst ? 36 : 20) + Math.random() * 16,
				vx:
					(options.burst ? 1.0 : 0.6) +
					Math.random() * 1.0 +
					physicsRef.current.currentSpeed * 0.3,
				vy: -(0.9 + Math.random() * 1.25),
				alpha: 0.92,
				growth: 0.3 + Math.random() * 0.2,
			});
		}
	}, []);

	// =========================================================================
	// CONTROLE DO TREM (FREAR / PARTIR)
	// =========================================================================
	const engageTrainBrakes = useCallback(() => {
		const p = physicsRef.current;
		if (p.trainState === "BRAKING" || p.trainState === "STOPPED") return;

		p.trainState = "BRAKING";
		trainRef.current?.classList.remove("is-whistling");
		trainRef.current?.classList.add("is-braking");

		sayDriverLineOnce(DRIVER_STOP_LINES, 3800);
		spawnChimneyPuff({ burst: false });
	}, [sayDriverLineOnce, spawnChimneyPuff]);

	const releaseBrakesAndDepart = useCallback(() => {
		const p = physicsRef.current;
		if (
			p.isMouseOverTrain ||
			p.isCloudOpen ||
			p.isManualRedSignal ||
			p.isCompulsoryBoardingStop
		) {
			return;
		}
		if (p.trainState === "CRUISING" || p.trainState === "ACCELERATING") return;

		p.trainState = "ACCELERATING";
		trainRef.current?.classList.remove("is-braking");
		trainRef.current?.classList.add("is-whistling");

		sayDriverLineOnce(DRIVER_DEPART_LINES, 3800);

		p.chugTimer = 0;
		spawnChimneyPuff({ burst: true });
		setTimeout(() => {
			if (physicsRef.current.trainState === "ACCELERATING") spawnChimneyPuff({ burst: true });
		}, 200);
		setTimeout(() => {
			if (physicsRef.current.trainState === "ACCELERATING") spawnChimneyPuff({ burst: true });
		}, 420);
	}, [sayDriverLineOnce, spawnChimneyPuff]);

	// =========================================================================
	// PASSAGEIROS NA ESTAÇÃO & EMBARQUE NAS JANELAS
	// =========================================================================
	const seatPassengerInNearestWindow = useCallback(
		(type: PassengerType, boardScreenX: number) => {
			const trainEl = trainRef.current;
			if (!trainEl) return;
			const slots = Array.from(trainEl.querySelectorAll<HTMLElement>(".window-rider"));
			let bestSlot: HTMLElement | null = null;
			let bestDist = Number.POSITIVE_INFINITY;

			for (const slot of slots) {
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

			if (!bestSlot && slots.length > 0) {
				bestSlot = slots[physicsRef.current.nextWindowSlotIndex % slots.length];
				physicsRef.current.nextWindowSlotIndex++;
			}

			if (bestSlot) {
				bestSlot.innerHTML = createWindowRiderSvg(type);
				bestSlot.classList.add("is-occupied");
			}
		},
		[],
	);

	const boardAllWaitingPassengers = useCallback(() => {
		const p = physicsRef.current;
		if (p.isBoardingAnimationRunning || waitingPassengersRef.current.length === 0) return;
		const trainEl = trainRef.current;
		const shelterEl = shelterRef.current;
		if (!trainEl || !shelterEl) return;

		p.isBoardingAnimationRunning = true;

		const passengersToBoard = waitingPassengersRef.current.splice(
			0,
			waitingPassengersRef.current.length,
		);
		setPassengerCount(0);

		const trainRect = trainEl.getBoundingClientRect();
		const shelterRect = shelterEl.getBoundingClientRect();

		passengersToBoard.forEach((pax, idx) => {
			pax.boarding = true;
			if (pax.benchRef) pax.benchRef.occupied = false;

			if (pax.behavior === "sitting") {
				pax.el.innerHTML = createPassengerSvg(pax.type, false);
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
						seatPassengerInNearestWindow(pax.type, paxCenterX);
					},
				});
			} else {
				const targetScreenX =
					paxCenterX < trainRect.left + trainRect.width * 0.04
						? trainRect.left + trainRect.width * 0.15
						: trainRect.right - trainRect.width * 0.1;
				const targetPercent = Math.max(
					8,
					Math.min(90, ((targetScreenX - shelterRect.left) / shelterRect.width) * 100),
				);
				const distancePercent = Math.abs(targetPercent - pax.xPercent);
				const walkDuration = Math.max(0.5, distancePercent * 0.045);
				const walkDir = targetPercent >= pax.xPercent ? 1 : -1;

				pax.el.classList.remove("is-standing");
				pax.el.classList.add("is-walking");
				pax.el.style.transform = `scaleX(${walkDir})`;

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
								seatPassengerInNearestWindow(pax.type, targetScreenX);
							},
						});
					},
				});
			}
		});

		const totalBoardDurationMs = 950 + passengersToBoard.length * 160;
		setTimeout(() => {
			physicsRef.current.isBoardingAnimationRunning = false;
			physicsRef.current.isCompulsoryBoardingStop = false;
			setIsCompulsoryStopUI(false);

			if (waitingPassengersRef.current.length > 0) {
				physicsRef.current.isCompulsoryBoardingStop = true;
				setIsCompulsoryStopUI(true);
				boardAllWaitingPassengers();
			} else {
				releaseBrakesAndDepart();
			}
		}, totalBoardDurationMs);
	}, [releaseBrakesAndDepart, seatPassengerInNearestWindow]);

	const handleAddPassenger = useCallback(() => {
		const layer = passengersLayerRef.current;
		if (!layer) return;

		const types: PassengerType[] = ["child", "elder", "athlete", "commuter"];
		const type = types[Math.floor(Math.random() * types.length)];

		const freeBench = benchSeatsRef.current.find((b) => !b.occupied) ?? null;
		const rollBehavior = Math.random();
		let behavior: "standing" | "walking" | "sitting" = "standing";
		let xPercent = 12 + Math.random() * 76;
		let benchRef: BenchSeat | null = null;

		if (freeBench && rollBehavior < 0.34) {
			behavior = "sitting";
			xPercent = freeBench.percent;
			freeBench.occupied = true;
			benchRef = freeBench;
		} else if (rollBehavior < 0.72) {
			behavior = "walking";
		}

		const el = document.createElement("div");
		el.className = `station-passenger is-${behavior}`;
		el.innerHTML = createPassengerSvg(type, behavior === "sitting");
		el.style.left = `${xPercent.toFixed(1)}%`;

		gsap.fromTo(
			el,
			{ scale: 0, opacity: 0, y: 10 },
			{ scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.6)" },
		);

		layer.appendChild(el);

		const paxSpeed = type === "elder" ? 0.012 : type === "athlete" ? 0.024 : 0.018;
		waitingPassengersRef.current.push({
			el,
			type,
			behavior,
			xPercent,
			minX: Math.max(10, xPercent - 12),
			maxX: Math.min(88, xPercent + 12),
			dir: Math.random() > 0.5 ? 1 : -1,
			speed: paxSpeed,
			pauseFrames: 0,
			benchRef,
			boarding: false,
		});

		setPassengerCount(waitingPassengersRef.current.length);
	}, []);

	// =========================================================================
	// LOOP DE FÍSICA 60FPS (TREM + PASSAGEIROS + FUMAÇA + BALÃO)
	// =========================================================================
	useEffect(() => {
		const canvas = steamCanvasRef.current;
		const ctx = canvas?.getContext("2d") ?? null;

		const resizeCanvas = () => {
			if (!canvas) return;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		physicsRef.current.trainX = window.innerWidth * 0.65;
		let animFrameId = 0;

		const isTrainAlignedWithStation = () => {
			const shelterEl = shelterRef.current;
			const trainEl = trainRef.current;
			if (!shelterEl || !trainEl) return false;
			const shelterRect = shelterEl.getBoundingClientRect();
			const trainRect = trainEl.getBoundingClientRect();
			const overlapLeft = Math.max(trainRect.left, shelterRect.left);
			const overlapRight = Math.min(trainRect.right, shelterRect.right);
			return overlapRight - overlapLeft >= shelterRect.width * 0.35;
		};

		const checkCompulsoryPassengerStop = () => {
			const p = physicsRef.current;
			if (waitingPassengersRef.current.length === 0 || p.isCompulsoryBoardingStop) return;
			const shelterEl = shelterRef.current;
			const locoEl = locoRef.current;
			if (!shelterEl || !locoEl) return;

			const shelterRect = shelterEl.getBoundingClientRect();
			const locoRect = locoEl.getBoundingClientRect();
			const triggerZoneLeft = shelterRect.left - shelterRect.width * 0.35;
			const triggerZoneRight = shelterRect.left + shelterRect.width * 0.55;

			if (locoRect.left >= triggerZoneLeft && locoRect.left <= triggerZoneRight) {
				p.isCompulsoryBoardingStop = true;
				setIsCompulsoryStopUI(true);
				engageTrainBrakes();
			}
		};

		const clearTrainWindowRiders = () => {
			physicsRef.current.nextWindowSlotIndex = 0;
			const trainEl = trainRef.current;
			if (!trainEl) return;
			const slots = Array.from(trainEl.querySelectorAll<HTMLElement>(".window-rider"));
			for (const slot of slots) {
				slot.classList.remove("is-occupied");
				slot.innerHTML = "";
			}
		};

		const updateStationPassengersWalk = () => {
			for (const pax of waitingPassengersRef.current) {
				if (pax.behavior === "walking" && !pax.boarding) {
					if (pax.pauseFrames > 0) {
						pax.pauseFrames--;
						if (pax.pauseFrames === 0) {
							pax.el.classList.remove("is-standing");
							pax.el.classList.add("is-walking");
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
					} else if (pax.xPercent <= pax.minX) {
						pax.xPercent = pax.minX;
						pax.dir = 1;
						pax.pauseFrames = 90 + Math.floor(Math.random() * 80);
						pax.el.classList.remove("is-walking");
						pax.el.classList.add("is-standing");
					}
					pax.el.style.left = `${pax.xPercent.toFixed(2)}%`;
					pax.el.style.transform = `scaleX(${pax.dir})`;
				}
			}
		};

		const updateDriverBubbleVisibility = () => {
			const locoEl = locoRef.current;
			const bubbleEl = driverBubbleRef.current;
			if (!locoEl || !bubbleEl) return;

			if (!physicsRef.current.bubbleWanted || physicsRef.current.isCloudOpen) {
				bubbleEl.classList.remove("is-visible");
				return;
			}

			const locoRect = locoEl.getBoundingClientRect();
			const cabCenterX = locoRect.left + locoRect.width * 0.35;
			const margin = window.innerWidth < 768 ? 45 : 85;
			if (cabCenterX > margin && cabCenterX < window.innerWidth - margin) {
				bubbleEl.classList.add("is-visible");
			} else {
				bubbleEl.classList.remove("is-visible");
			}
		};

		const updateAndDrawSmoke = () => {
			if (!ctx || !canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			const puffs = smokePuffsRef.current;
			for (let i = puffs.length - 1; i >= 0; i--) {
				const puff = puffs[i];
				puff.x += puff.vx;
				puff.y += puff.vy;
				puff.vy *= 0.986;
				puff.vx *= 0.992;
				if (puff.radius < puff.maxRadius) puff.radius += puff.growth;
				puff.alpha -= 0.0085;

				if (puff.alpha <= 0.01) {
					puffs.splice(i, 1);
					continue;
				}

				ctx.save();
				ctx.beginPath();
				ctx.arc(puff.x, puff.y, puff.radius, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(255, 255, 255, ${puff.alpha})`;
				ctx.shadowColor = "rgba(186, 230, 253, 0.65)";
				ctx.shadowBlur = 8;
				ctx.fill();

				ctx.beginPath();
				ctx.arc(
					puff.x + puff.radius * 0.12,
					puff.y + puff.radius * 0.15,
					puff.radius * 0.76,
					0,
					Math.PI * 2,
				);
				ctx.fillStyle = `rgba(225, 245, 254, ${puff.alpha * 0.55})`;
				ctx.fill();
				ctx.restore();
			}
		};

		const step = () => {
			const p = physicsRef.current;
			const trainEl = trainRef.current;
			const targetCruiseSpeed = getCruiseSpeed();
			if (trainEl) {
				const trainWidth = trainEl.offsetWidth || 960;

				updateStationPassengersWalk();
				checkCompulsoryPassengerStop();

				if (p.trainState === "CRUISING") {
					p.currentSpeed += (targetCruiseSpeed - p.currentSpeed) * 0.04;
					if (Math.random() < 0.026) spawnChimneyPuff({ burst: false });
				} else if (p.trainState === "BRAKING") {
					p.currentSpeed *= 0.952;
					if (Math.random() < 0.1) spawnChimneyPuff({ burst: false });

					if (p.currentSpeed <= 0.045) {
						p.currentSpeed = 0;
						p.trainState = "STOPPED";

						if (
							waitingPassengersRef.current.length > 0 &&
							(p.isCompulsoryBoardingStop || isTrainAlignedWithStation())
						) {
							p.isCompulsoryBoardingStop = true;
							setIsCompulsoryStopUI(true);
							boardAllWaitingPassengers();
						}
					}
				} else if (p.trainState === "STOPPED") {
					p.currentSpeed = 0;
					if (
						waitingPassengersRef.current.length > 0 &&
						!p.isBoardingAnimationRunning &&
						(p.isCompulsoryBoardingStop || isTrainAlignedWithStation())
					) {
						p.isCompulsoryBoardingStop = true;
						setIsCompulsoryStopUI(true);
						boardAllWaitingPassengers();
					}
				} else if (p.trainState === "ACCELERATING") {
					const accelForce = 0.0055 + p.currentSpeed * 0.016;
					p.currentSpeed = Math.min(targetCruiseSpeed, p.currentSpeed + accelForce);

					p.chugTimer++;
					if (p.chugTimer % 14 === 0) spawnChimneyPuff({ burst: true });

					if (p.currentSpeed >= targetCruiseSpeed - 0.03) {
						p.currentSpeed = targetCruiseSpeed;
						p.trainState = "CRUISING";
						trainEl.classList.remove("is-whistling");
					}
				}

				p.trainX -= p.currentSpeed;

				const isMobile = window.innerWidth <= 768;
				const scaleFactor = isMobile ? 0.66 : 1;
				if (p.trainX * scaleFactor <= -trainWidth * scaleFactor) {
					p.trainX = window.innerWidth / scaleFactor;
					clearTrainWindowRiders();
				}

				let pitchDeg = 0;
				if (p.trainState === "BRAKING") {
					pitchDeg = -p.currentSpeed * 0.32;
				} else if (p.trainState === "ACCELERATING") {
					pitchDeg = (targetCruiseSpeed - p.currentSpeed) * 0.25;
				}

				trainEl.style.transform = `translate3d(${p.trainX.toFixed(2)}px, 0, 0) rotate(${pitchDeg.toFixed(2)}deg)`;

				p.wheelAngle -= p.currentSpeed * 3.4;
				const wheels = Array.from(trainEl.querySelectorAll<HTMLElement>(".train-wheel"));
				for (const wheel of wheels) {
					wheel.style.transform = `rotate(${p.wheelAngle.toFixed(1)}deg)`;
				}
			}

			updateDriverBubbleVisibility();
			updateAndDrawSmoke();
			animFrameId = requestAnimationFrame(step);
		};

		animFrameId = requestAnimationFrame(step);

		return () => {
			cancelAnimationFrame(animFrameId);
			window.removeEventListener("resize", resizeCanvas);
		};
	}, [boardAllWaitingPassengers, engageTrainBrakes, spawnChimneyPuff]);

	// =========================================================================
	// HANDLERS DE INTERAÇÃO (SINAL, RELÓGIO, MODAL NUVEM / BOTTOM SHEET)
	// =========================================================================
	const handleToggleSignal = () => {
		const nextRed = !isManualRedSignal;
		physicsRef.current.isManualRedSignal = nextRed;
		setIsManualRedSignal(nextRed);

		if (nextRed) {
			engageTrainBrakes();
		} else if (
			!physicsRef.current.isCompulsoryBoardingStop &&
			!physicsRef.current.isCloudOpen &&
			!physicsRef.current.isMouseOverTrain
		) {
			releaseBrakesAndDepart();
		}
	};

	const handleScrubTime = (minutes: number) => {
		physicsRef.current.isSyncedWithPC = false;
		setIsSyncedWithPC(false);
		setScrubberMinutes(minutes);
		updateSkyAndCelestialBodies(minutes / 60);
	};

	const handleSyncWithPC = () => {
		physicsRef.current.isSyncedWithPC = true;
		setIsSyncedWithPC(true);
		const now = new Date();
		updateSkyAndCelestialBodies(
			now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600,
		);
	};

	const handleOpenProject = useCallback(
		(projectId: ProjectId, originEl: HTMLElement | null) => {
			physicsRef.current.isCloudOpen = true;
			setIsCloudOpen(true);
			setActiveProjectId(projectId);
			engageTrainBrakes();
			silenceDriverBubble();

			const overlayEl = cloudOverlayRef.current;
			const dialogEl = cloudDialogRef.current;
			if (!overlayEl || !dialogEl) return;

			const refEl = originEl ?? trainRef.current;
			const signRect = refEl?.getBoundingClientRect();
			const startX = signRect
				? signRect.left + signRect.width / 2 - window.innerWidth / 2
				: 0;
			const startY = signRect
				? signRect.top + signRect.height / 2 - window.innerHeight / 2
				: 0;

			gsap.killTweensOf([overlayEl, dialogEl]);
			gsap.to(overlayEl, {
				opacity: 1,
				duration: 0.35,
				ease: "power2.out",
			});

			const isMobileSheet = window.innerWidth <= 768;
			if (isMobileSheet) {
				gsap.fromTo(
					dialogEl,
					{ x: 0, yPercent: 100, y: 0, scale: 1, opacity: 1 },
					{ x: 0, yPercent: 0, y: 0, scale: 1, opacity: 1, duration: 0.46, ease: "power3.out" },
				);
			} else {
				gsap.fromTo(
					dialogEl,
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
					},
				);
			}
		},
		[engageTrainBrakes, silenceDriverBubble],
	);

	const handleCloseCloud = useCallback(() => {
		if (!physicsRef.current.isCloudOpen) return;
		physicsRef.current.isCloudOpen = false;
		physicsRef.current.isMouseOverTrain = false;

		const overlayEl = cloudOverlayRef.current;
		const dialogEl = cloudDialogRef.current;
		if (!overlayEl || !dialogEl) {
			setIsCloudOpen(false);
			setActiveProjectId(null);
			releaseBrakesAndDepart();
			return;
		}

		gsap.killTweensOf([overlayEl, dialogEl]);

		const isMobileSheet = window.innerWidth <= 768;
		if (isMobileSheet) {
			gsap.to(dialogEl, {
				yPercent: 100,
				duration: 0.34,
				ease: "power3.in",
			});
		} else {
			gsap.to(dialogEl, {
				y: -30,
				scale: 0.82,
				opacity: 0,
				duration: 0.34,
				ease: "power2.in",
			});
		}

		gsap.to(overlayEl, {
			opacity: 0,
			duration: 0.36,
			ease: "power2.inOut",
			onComplete: () => {
				setIsCloudOpen(false);
				setActiveProjectId(null);
				releaseBrakesAndDepart();
			},
		});
	}, [releaseBrakesAndDepart]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && physicsRef.current.isCloudOpen) {
				handleCloseCloud();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleCloseCloud]);

	return (
		<main className="ghibli-world">
			<SkyCanvas
				starsFieldRef={starsFieldRef}
				sunRef={sunRef}
				moonRef={moonRef}
				moonLitPathRef={moonLitPathRef}
			/>

			<SkyIdentity />

			<ClockWidget
				widgetRef={clockWidgetRef}
				periodLabel={periodLabel}
				digitalTime={digitalTime}
				isDrawerOpen={isDrawerOpen}
				isSignalRed={isManualRedSignal || isCompulsoryStopUI}
				passengerCount={passengerCount}
				lunarPhase={lunarPhase}
				scrubberMinutes={scrubberMinutes}
				isSyncedWithPC={isSyncedWithPC}
				onToggleDrawer={() => setIsDrawerOpen((prev) => !prev)}
				onToggleSignal={handleToggleSignal}
				onAddPassenger={handleAddPassenger}
				onScrubTime={handleScrubTime}
				onSyncWithPC={handleSyncWithPC}
			/>

			<div className="seaside-stage">
				<div className="ocean-horizon" aria-hidden="true">
					<div className="ocean-shimmer" />
				</div>

				<svg className="power-lines-svg" viewBox="0 0 1920 260" preserveAspectRatio="none" aria-hidden="true">
					<title>Fios elétricos</title>
					<path d="M 0,92 Q 190,68 370,38" fill="none" stroke="#23313B" strokeWidth="1.5" opacity="0.82" />
					<path d="M 0,106 Q 190,82 370,50" fill="none" stroke="#23313B" strokeWidth="1.3" opacity="0.82" />
					<path d="M 0,120 Q 190,96 370,62" fill="none" stroke="#23313B" strokeWidth="1.2" opacity="0.82" />

					<path d="M 370,38 Q 1120,86 1920,52" fill="none" stroke="#23313B" strokeWidth="1.6" opacity="0.82" />
					<path d="M 370,50 Q 1120,98 1920,64" fill="none" stroke="#23313B" strokeWidth="1.3" opacity="0.82" />
					<path d="M 370,62 Q 1120,110 1920,76" fill="none" stroke="#23313B" strokeWidth="1.2" opacity="0.82" />
				</svg>

				<StationBackdrop shelterRef={shelterRef} passengersLayerRef={passengersLayerRef} />

				<canvas id="chimneySteamCanvas" ref={steamCanvasRef} aria-hidden="true" />

				<TrainAssembly
					trainRef={trainRef}
					locoRef={locoRef}
					chimneyRef={chimneyRef}
					driverBubbleRef={driverBubbleRef}
					driverBubbleTextRef={driverBubbleTextRef}
					activeProjectId={activeProjectId}
					onMouseEnterTrain={() => {
						physicsRef.current.isMouseOverTrain = true;
						engageTrainBrakes();
					}}
					onMouseLeaveTrain={() => {
						physicsRef.current.isMouseOverTrain = false;
						if (
							!physicsRef.current.isCloudOpen &&
							!physicsRef.current.isManualRedSignal &&
							!physicsRef.current.isCompulsoryBoardingStop
						) {
							releaseBrakesAndDepart();
						}
					}}
					onOpenProject={handleOpenProject}
				/>

				<div className="station-platform-floor" aria-hidden="true" />
				<div className="station-asphalt-edge" aria-hidden="true" />
			</div>

			<CloudModal
				overlayRef={cloudOverlayRef}
				dialogRef={cloudDialogRef}
				isOpen={isCloudOpen}
				projectId={activeProjectId}
				onClose={handleCloseCloud}
			/>
		</main>
	);
}
