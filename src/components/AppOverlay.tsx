import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { InfoData, InfoLocations } from "../utils/InfoLocations";
import * as TWEEN from "@tweenjs/tween.js";
export default function AppOverlay({
	updateLocation,
}: {
	updateLocation: (location: string) => void;
}) {
	const currentLoc = useRef<InfoData | null>(null);
	const rightPanel = useRef<HTMLDivElement>(null);

	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const isEmptyView = (e: string) => {
		return currentLoc.current === null || e !== "RESET";
	};

	const attemptReset = (e: string) => {
		if (e === "RESET") {
			rightPanel.current?.style.setProperty("opacity", "0");
		}
	};
	const propogateClick = (e: string) => {
		updateLocation(e);
		attemptReset(e);
		if (isEmptyView(e) && rightPanel.current) {
			new TWEEN.Tween(rightPanel?.current.style)
				.to({ opacity: 1 }, 500)
				.start();
		}
		currentLoc.current = InfoLocations[e];
	};

	useLayoutEffect(() => {
		rightPanel.current?.style.setProperty("opacity", "0");
	}, []);

	window.addEventListener("resize", () => {
		setScreenWidth(window.innerWidth);
	});

	return (
		<div>
			{/* Mobile overlay */}
			{screenWidth < 600 && (
				<div className="screen-overlay-full mobile-screen">
					<div>Recommended experience on desktop</div>
				</div>
			)}
			<div className="screen-overlay-left">
				<div className="row justify-center items-center">
					<img src="/tmuBold.png" width={60} />
					<h1 className="txt-lg" style={{ color: "#003594" }}>
						TMU-Explorer
					</h1>
				</div>
				{/* Print listing of building options */}
				<div>
					{Object.keys(InfoLocations).map((location) => (
						<div
							key={location}
							className="txt-md info-option"
							onClick={() => propogateClick(location)}
						>
							{location}
						</div>
					))}
				</div>
			</div>
			<div ref={rightPanel} className="screen-overlay-right">
				<div className="txt-md txt-bold">{currentLoc.current?.data?.name}</div>
				<div className="txt-sm">
					<DetailOutput data={currentLoc.current?.data?.address} />
				</div>
				<div style={{ paddingTop: 25 }}>
					<DetailOutput data={currentLoc.current?.data?.available?.primary} />
					<DetailOutput data={currentLoc.current?.data?.available?.secondary} />
					<DetailOutput data={currentLoc.current?.data?.available?.tertiary} />
				</div>
				<div>
					<h3>About</h3>
					<div className="scrollable-body">
						{currentLoc.current?.data?.about}
					</div>
				</div>
			</div>
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
