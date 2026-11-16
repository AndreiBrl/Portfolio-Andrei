import type { RefObject } from "react";

interface StationBackdropProps {
	shelterRef: RefObject<HTMLDivElement>;
	passengersLayerRef: RefObject<HTMLDivElement>;
}

export function StationBackdrop({ shelterRef, passengersLayerRef }: StationBackdropProps) {
	return (
		<div className="station-backdrop" aria-hidden="true">
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

				<div className="shelter-hanging-sign">
					<span>ESTAÇÃO: BARBUTO</span>
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
