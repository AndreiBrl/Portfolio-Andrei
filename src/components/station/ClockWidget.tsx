import type { RefObject } from "react";
import type { LunarPhaseInfo } from "@/lib/astronomy";

interface ClockWidgetProps {
	widgetRef: RefObject<HTMLElement>;
	periodLabel: string;
	digitalTime: string;
	isDrawerOpen: boolean;
	isSignalRed: boolean;
	passengerCount: number;
	lunarPhase: LunarPhaseInfo;
	scrubberMinutes: number;
	isSyncedWithPC: boolean;
	onToggleDrawer: () => void;
	onToggleSignal: () => void;
	onAddPassenger: () => void;
	onScrubTime: (minutes: number) => void;
	onSyncWithPC: () => void;
}

export function ClockWidget({
	widgetRef,
	periodLabel,
	digitalTime,
	isDrawerOpen,
	isSignalRed,
	passengerCount,
	lunarPhase,
	scrubberMinutes,
	isSyncedWithPC,
	onToggleDrawer,
	onToggleSignal,
	onAddPassenger,
	onScrubTime,
	onSyncWithPC,
}: ClockWidgetProps) {
	return (
		<aside className="ghibli-clock-widget" ref={widgetRef} aria-label="Relógio e Controles da Estação">
			{/* Apenas o relógio e o botão de Config ao lado */}
			<div className="clock-header-bar">
				<button
					type="button"
					className="clock-minimal-trigger"
					onClick={onToggleDrawer}
					title="Clique para abrir configurações da estação e horário"
				>
					<span className="clock-poetic-phrase">{periodLabel}</span>
					<span className="clock-ghibli-time">{digitalTime}</span>
				</button>

				<button
					type="button"
					className={`clock-config-btn${isDrawerOpen ? " is-active" : ""}`}
					onClick={onToggleDrawer}
					aria-label="Configurações da estação"
					title="Configurações da estação"
				>
					<svg
						viewBox="0 0 24 24"
						width="18"
						height="18"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="3" />
						<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
					</svg>
				</button>
			</div>

			{/* Modal de Gerenciamento (Sinal, Passageiros, Fase da Lua e Viajar no Tempo) */}
			<div
				className={`clock-drawer${isDrawerOpen ? " is-open" : ""}`}
				aria-hidden={String(!isDrawerOpen) as "true" | "false"}
			>
				<div className="drawer-moon-row">
					<span className="moon-phase-icon">{lunarPhase.emoji}</span>
					<span className="moon-phase-name">{lunarPhase.name}</span>
				</div>

				{/* Controles de Sinal e Passageiros dentro do modal de config */}
				<div className="station-command-buttons">
					<button
						type="button"
						className={`signal-hand-btn${isSignalRed ? " is-red" : ""}`}
						onClick={onToggleSignal}
						aria-label="Sinal do Trem: Verde (Andando) ou Vermelho (Parado)"
						title="Clique para parar ou liberar o trem"
					>
						<div className="signal-flip-card">
							<div className="signal-face signal-face-green">
								<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
									<path d="M18 8.5V4a1.5 1.5 0 0 0-3 0v4.5h-.5V2.5a1.5 1.5 0 0 0-3 0V8.5H11V3.5a1.5 1.5 0 0 0-3 0v6.5h-.5V6a1.5 1.5 0 0 0-3 0v8.5A6.5 6.5 0 0 0 11 21h1.5a6.5 6.5 0 0 0 6.5-6.5v-4.5a1.5 1.5 0 0 0-1-1.5Z" />
								</svg>
							</div>
							<div className="signal-face signal-face-red">
								<svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
									<path d="M18 8.5V4a1.5 1.5 0 0 0-3 0v4.5h-.5V2.5a1.5 1.5 0 0 0-3 0V8.5H11V3.5a1.5 1.5 0 0 0-3 0v6.5h-.5V6a1.5 1.5 0 0 0-3 0v8.5A6.5 6.5 0 0 0 11 21h1.5a6.5 6.5 0 0 0 6.5-6.5v-4.5a1.5 1.5 0 0 0-1-1.5Z" />
								</svg>
							</div>
						</div>
					</button>

					<button
						type="button"
						className="add-passenger-btn"
						onClick={onAddPassenger}
						aria-label="Adicionar passageiro na estação"
						title="Adicionar passageiro na estação (o trem vai parar para buscá-los!)"
					>
						<svg
							viewBox="0 0 24 24"
							width="17"
							height="17"
							fill="none"
							stroke="currentColor"
							strokeWidth="2.3"
							strokeLinecap="round"
							strokeLinejoin="round"
							aria-hidden="true"
						>
							<circle cx="10" cy="7" r="4" />
							<path d="M3 20v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1" />
							<line x1="19" y1="8" x2="19" y2="14" />
							<line x1="16" y1="11" x2="22" y2="11" />
						</svg>
						<span>+ Pessoa</span>
						<span className="passenger-count-badge">{passengerCount}</span>
					</button>
				</div>

				<label className="drawer-slider-label" htmlFor="timeScrubber">
					Viajar no tempo (24h):
				</label>
				<div className="clock-slider-row">
					<input
						type="range"
						id="timeScrubber"
						className="time-scrubber"
						min={0}
						max={1439}
						step={1}
						value={scrubberMinutes}
						onChange={(e) => onScrubTime(Number(e.target.value))}
						aria-label="Explorar horário do dia"
					/>
				</div>

				<button
					type="button"
					className={`clock-sync-btn${isSyncedWithPC ? " is-synced" : ""}`}
					onClick={onSyncWithPC}
				>
					{isSyncedWithPC ? "● Sincronizado com o PC" : "↺ Voltar ao horário do PC"}
				</button>
			</div>
		</aside>
	);
}
