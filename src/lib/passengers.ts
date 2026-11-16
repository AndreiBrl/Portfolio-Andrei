export type PassengerType = "child" | "elder" | "athlete" | "commuter";

/** Cria o SVG minimalista dos passageiros (criança, idoso c/ muleta, atleta, viajante). */
export function createPassengerSvg(type: PassengerType, isSitting = false): string {
	const legY = isSitting ? 37 : 42;

	if (type === "child") {
		return `
      <svg viewBox="0 0 28 44">
        <g class="pax-body-group">
          <g class="pax-leg-left">
            <line x1="12" y1="31" x2="11" y2="${isSitting ? 38 : 42}" stroke="#1c262e" stroke-width="2.6" stroke-linecap="round"/>
          </g>
          <g class="pax-leg-right">
            <line x1="16" y1="31" x2="17" y2="${isSitting ? 38 : 42}" stroke="#1c262e" stroke-width="2.6" stroke-linecap="round"/>
          </g>
          <rect x="16" y="21" width="6" height="9" rx="2" fill="#e53935" stroke="#1c262e" stroke-width="1.4"/>
          <path d="M9,32 L11,20 L17,20 L19,32 Z" fill="#29b6f6" stroke="#1c262e" stroke-width="1.5"/>
          <circle cx="14" cy="15" r="5" fill="#ffe0bd" stroke="#1c262e" stroke-width="1.5"/>
          <path d="M8,14 C8,9 20,9 20,14 Z" fill="#fdd835" stroke="#1c262e" stroke-width="1.4"/>
          <line x1="6" y1="14" x2="22" y2="14" stroke="#1c262e" stroke-width="1.6" stroke-linecap="round"/>
        </g>
      </svg>
    `;
	}

	if (type === "elder") {
		return `
      <svg viewBox="0 0 28 44">
        <g class="pax-body-group">
          <g class="pax-leg-left">
            <line x1="12" y1="28" x2="11" y2="${legY}" stroke="#37474f" stroke-width="2.8" stroke-linecap="round"/>
          </g>
          <g class="pax-leg-right">
            <line x1="16" y1="28" x2="16" y2="${legY}" stroke="#37474f" stroke-width="2.8" stroke-linecap="round"/>
          </g>
          <line x1="6" y1="22" x2="4" y2="42" stroke="#8d6e63" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M4,22 Q7,20 9,22" fill="none" stroke="#5d4037" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M8,29 C8,18 12,16 17,17 L19,29 Z" fill="#8d6e63" stroke="#1c262e" stroke-width="1.5"/>
          <circle cx="13" cy="11.5" r="5.2" fill="#ffe0bd" stroke="#1c262e" stroke-width="1.5"/>
          <path d="M9,9 C11,5 17,5 18,10" fill="#eceff1" stroke="#1c262e" stroke-width="1.3"/>
          <path d="M12,20 L6,22" stroke="#8d6e63" stroke-width="2.6" stroke-linecap="round"/>
        </g>
      </svg>
    `;
	}

	if (type === "athlete") {
		return `
      <svg viewBox="0 0 28 44">
        <g class="pax-body-group">
          <g class="pax-leg-left">
            <line x1="11" y1="27" x2="10" y2="${legY}" stroke="#ffe0bd" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="10" cy="${isSitting ? 38 : 42}" r="2" fill="#ff5252"/>
          </g>
          <g class="pax-leg-right">
            <line x1="17" y1="27" x2="18" y2="${legY}" stroke="#ffe0bd" stroke-width="2.8" stroke-linecap="round"/>
            <circle cx="18" cy="${isSitting ? 38 : 42}" r="2" fill="#ff5252"/>
          </g>
          <rect x="9.5" y="16" width="9" height="10" rx="2" fill="#ff7043" stroke="#1c262e" stroke-width="1.5"/>
          <rect x="9.5" y="24" width="9" height="5" rx="1" fill="#1e293b" stroke="#1c262e" stroke-width="1.4"/>
          <circle cx="14" cy="10" r="5.2" fill="#ffe0bd" stroke="#1c262e" stroke-width="1.5"/>
          <rect x="8.8" y="7.5" width="10.4" height="2.4" fill="#ef4444" stroke="#1c262e" stroke-width="1"/>
        </g>
      </svg>
    `;
	}

	return `
    <svg viewBox="0 0 28 44">
      <g class="pax-body-group">
        <g class="pax-leg-left">
          <line x1="12" y1="28" x2="11" y2="${legY}" stroke="#1c262e" stroke-width="2.6" stroke-linecap="round"/>
        </g>
        <g class="pax-leg-right">
          <line x1="16" y1="28" x2="17" y2="${legY}" stroke="#1c262e" stroke-width="2.6" stroke-linecap="round"/>
        </g>
        <path d="M8,30 L10,16 L18,16 L20,30 Z" fill="#26a69a" stroke="#1c262e" stroke-width="1.5"/>
        <rect x="19" y="25" width="6" height="5" rx="1" fill="#f59e0b" stroke="#1c262e" stroke-width="1.3"/>
        <circle cx="14" cy="10.5" r="5.2" fill="#ffe0bd" stroke="#1c262e" stroke-width="1.5"/>
        <path d="M9,9 C10,5 18,5 19,9 Z" fill="#263238"/>
      </g>
    </svg>
  `;
}

/** Silhueta do passageiro sentado na janela do vagão após embarcar. */
export function createWindowRiderSvg(type: PassengerType): string {
	const colors: Record<PassengerType, { hat: string; shirt: string }> = {
		child: { hat: "#fdd835", shirt: "#29b6f6" },
		elder: { hat: "#eceff1", shirt: "#8d6e63" },
		athlete: { hat: "#ef4444", shirt: "#ff7043" },
		commuter: { hat: "#263238", shirt: "#26a69a" },
	};
	const c = colors[type];
	return `
    <svg viewBox="0 0 24 22">
      <path d="M5,22 C5,15 19,15 19,22 Z" fill="${c.shirt}" stroke="#141b20" stroke-width="1.3"/>
      <circle cx="12" cy="10" r="4.5" fill="#ffe0bd" stroke="#141b20" stroke-width="1.3"/>
      <path d="M7.5,9 C8.5,5 15.5,5 16.5,9 Z" fill="${c.hat}" stroke="#141b20" stroke-width="1"/>
    </svg>
  `;
}
