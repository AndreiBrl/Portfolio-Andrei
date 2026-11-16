import { SKY_KEYFRAMES } from "@/data/ghibliStation";

export interface LunarPhaseInfo {
	phaseRatio: number;
	name: string;
	emoji: string;
}

export interface SkyAtmosphere {
	zenith: string;
	mid: string;
	horizon: string;
	oceanDeep: string;
	oceanSurface: string;
	cloudBody: string;
	cloudShade: string;
	nightOpacity: number;
	contrailOpacity: number;
}

function hexToRgb(hex: string): [number, number, number] {
	const clean = hex.replace("#", "");
	const num = Number.parseInt(clean, 16);
	return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function rgbToHex([r, g, b]: [number, number, number]): string {
	const toHex = (n: number) =>
		Math.round(Math.max(0, Math.min(255, n)))
			.toString(16)
			.padStart(2, "0");
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function lerpColor(hexA: string, hexB: string, t: number): string {
	const a = hexToRgb(hexA);
	const b = hexToRgb(hexB);
	return rgbToHex([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]);
}

/** Calcula a fase real da Lua para a data fornecida (Ciclo Sinódico = 29.53058867 dias). */
export function getRealLunarPhase(date = new Date()): LunarPhaseInfo {
	const synodicMonth = 29.53058867;
	const knownNewMoonMs = Date.UTC(2000, 0, 6, 18, 14, 0);
	const diffDays = (date.getTime() - knownNewMoonMs) / 86400000;
	const phaseRatio = (((diffDays % synodicMonth) + synodicMonth) % synodicMonth) / synodicMonth;

	if (phaseRatio < 0.04 || phaseRatio >= 0.96) return { phaseRatio, name: "Lua Nova", emoji: "🌑" };
	if (phaseRatio < 0.22) return { phaseRatio, name: "Lua Crescente", emoji: "🌒" };
	if (phaseRatio < 0.28) return { phaseRatio, name: "Quarto Crescente", emoji: "🌓" };
	if (phaseRatio < 0.46) return { phaseRatio, name: "Gibosa Crescente", emoji: "🌔" };
	if (phaseRatio < 0.54) return { phaseRatio, name: "Lua Cheia", emoji: "🌕" };
	if (phaseRatio < 0.72) return { phaseRatio, name: "Gibosa Minguante", emoji: "🌖" };
	if (phaseRatio < 0.78) return { phaseRatio, name: "Quarto Minguante", emoji: "🌗" };
	return { phaseRatio, name: "Lua Minguante", emoji: "🌘" };
}

/** Gera o caminho SVG exato da parte iluminada da Lua conforme a fase real. */
export function buildMoonSvgPath(phaseRatio: number): string {
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
	}

	const k = Math.cos((p - 0.5) * 2 * Math.PI);
	const rx = Math.abs(k) * r;
	const sweepTerminator = k > 0 ? 1 : 0;
	return `M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${cy + r} A ${rx.toFixed(2)},${r} 0 0,${sweepTerminator} ${cx},${cy - r} Z`;
}

export function getPoeticPeriodPhrase(hour: number): string {
	if (hour >= 5.5 && hour < 7.2) return "Amanhecer na estação";
	if (hour >= 7.2 && hour < 12) return "Manhã na estação";
	if (hour >= 12 && hour < 16.5) return "Tarde na estação";
	if (hour >= 16.5 && hour < 18.2) return "Entardecer na estação";
	if (hour >= 18.2 && hour < 19.3) return "Crepúsculo na estação";
	return "Noite na estação";
}

export function computeSkyAtmosphere(decimalHour: number): SkyAtmosphere {
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

	return {
		zenith: lerpColor(kfA.zenith, kfB.zenith, t),
		mid: lerpColor(kfA.mid, kfB.mid, t),
		horizon: lerpColor(kfA.horizon, kfB.horizon, t),
		oceanDeep: lerpColor(kfA.oceanDeep, kfB.oceanDeep, t),
		oceanSurface: lerpColor(kfA.oceanSurface, kfB.oceanSurface, t),
		cloudBody: lerpColor(kfA.cloudBody, kfB.cloudBody, t),
		cloudShade: lerpColor(kfA.cloudShade, kfB.cloudShade, t),
		nightOpacity: kfA.nightOpacity + (kfB.nightOpacity - kfA.nightOpacity) * t,
		contrailOpacity: kfA.contrailOpacity + (kfB.contrailOpacity - kfA.contrailOpacity) * t,
	};
}
