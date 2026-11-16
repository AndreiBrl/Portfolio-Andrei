import type { RefObject } from "react";

interface StationBackdropProps {
	shelterRef: RefObject<HTMLDivElement>;
	passengersLayerRef: RefObject<HTMLDivElement>;
	digitalTime: string;
}

export function StationBackdrop({
	shelterRef,
	passengersLayerRef,
	digitalTime,
}: StationBackdropProps) {
	return (
		<div className="station-backdrop" aria-hidden="true">
			<svg
				className="power-lines-svg"
				viewBox="0 0 1000 185"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<title>Fios elétricos</title>
				<path d="M 0,44 Q 96,28 192,16" fill="none" stroke="#23313B" strokeWidth="1.3" opacity="0.82" />
				<path d="M 0,54 Q 96,38 192,23" fill="none" stroke="#23313B" strokeWidth="1.15" opacity="0.82" />
				<path d="M 0,64 Q 96,48 192,30" fill="none" stroke="#23313B" strokeWidth="1.05" opacity="0.82" />

				<path d="M 192,16 Q 820,52 1500,20" fill="none" stroke="#23313B" strokeWidth="1.35" opacity="0.82" />
				<path d="M 192,23 Q 820,59 1500,27" fill="none" stroke="#23313B" strokeWidth="1.15" opacity="0.82" />
				<path d="M 192,30 Q 820,66 1500,34" fill="none" stroke="#23313B" strokeWidth="1.05" opacity="0.82" />
			</svg>

			<div className="utility-pole">
				<div className="pole-crossbar" />
				<div className="pole-lantern">
					<div className="pole-lantern-bulb" />
					<div className="pole-light-cone" />
				</div>
				<div className="pole-control-box" />
			</div>

			<div className="station-shelter" ref={shelterRef}>
				<div className="shelter-roof">
					<div className="roof-corrugation" />
				</div>

				<div className="station-night-spots">
					<div className="station-spot spot-1">
						<div className="spot-bulb" />
						<div className="spot-cone" />
					</div>
					<div className="station-spot spot-2">
						<div className="spot-bulb" />
						<div className="spot-cone" />
					</div>
					<div className="station-spot spot-3">
						<div className="spot-bulb" />
						<div className="spot-cone" />
					</div>
				</div>

				<div className="shelter-signs-group">
					<div className="shelter-hanging-sign">
						<span>ESTAÇÃO: BARBUTO</span>
					</div>
					<div className="shelter-digital-clock-sign">
						<span>{digitalTime}</span>
					</div>
				</div>

				<div className="shelter-pillars-row">
					<div className="shelter-pillar">
						<div className="pillar-base" />
						<div className="station-bush bush-left" />
					</div>
					<div className="shelter-pillar">
						<div className="pillar-base" />
					</div>
					<div className="shelter-pillar">
						<div className="pillar-base" />
						<div className="station-bush bush-right" />
					</div>
				</div>

				<div className="station-benches">
					<div className="station-bench" />
					<div className="station-bench" />
				</div>

				<div className="station-passengers-layer" ref={passengersLayerRef} />
			</div>
		</div>
	);
}
