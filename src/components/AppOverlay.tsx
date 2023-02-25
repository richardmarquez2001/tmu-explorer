import { useRef } from "react";
import { InfoData, InfoLocations } from "../utils/InfoLocations";
export default function AppOverlay({
	updateLocation,
}: {
	updateLocation: (location: string) => void;
}) {
	const currentLoc = useRef<InfoData | null>(null);
	const propogateClick = (e: string) => {
		updateLocation(e);
		currentLoc.current = InfoLocations[e];
	};
	return (
		<div>
			<div className="screen-overlay-left">
				<h1 className="txt-lg">TMU-Explorer</h1>
				{/* Print listing of building options */}
				<div>
					{Object.keys(InfoLocations).map((location) => (
						<div
							className="txt-md info-option"
							onClick={() => propogateClick(location)}
						>
							{location}
						</div>
					))}
				</div>
			</div>
			{currentLoc.current?.data && (
				<div className="screen-overlay-right">
					<h2 className="txt-md">{currentLoc.current.data?.name}</h2>
					<div>
						<DetailOutput data={currentLoc.current.data?.available?.primary} />
						<DetailOutput
							data={currentLoc.current.data?.available?.secondary}
						/>
						<DetailOutput data={currentLoc.current.data?.available?.tertiary} />
						<DetailOutput data={currentLoc.current.data?.address} />
					</div>
					<div>
						<h3>About</h3>
						<div>{currentLoc.current.data?.about}</div>
					</div>
				</div>
			)}
		</div>
	);
}

function DetailOutput({ data }: { data: string | undefined }) {
	return (
		<>
			{data && (
				<div>
					<div>{data}</div>
				</div>
			)}
		</>
	);
}
