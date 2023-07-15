import { useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as TWEEN from "@tweenjs/tween.js";

export default function AppLoader() {
	const [stopEnter, setStopEnter] = useState(true);
	const [cleanProgress, setCleanProgress] = useState(0);

	const { loaded, total } = useProgress();
	const loadOverlay = useRef<HTMLDivElement | null>(null);

	const exitMenu = () => {
		if (loadOverlay.current) {
			new TWEEN.Tween(loadOverlay.current.style)
				.to({ opacity: 0 }, 500)
				.delay(1500)
				.onComplete(() => {
					setStopEnter(false);
				})
				.start();
		}
	};
	useEffect(() => {
		setCleanProgress(Math.floor((loaded / (total === 0 ? 1 : total)) * 100));
		if (loaded / total === 1) {
			exitMenu();
		}
	}, [loaded, total]);

	return stopEnter ? (
		<div
			ref={loadOverlay}
			className="screen-overlay-full load-screen"
			style={{ fontSize: "4rem", backgroundColor: "white", opacity: 1 }}
		>
			<div>
				<div className="txt-lg">Explore the TMU Campus</div>
				<div className="progress-element row justify-center items-center">
					<div style={{ position: "relative" }}>
						<img
							className="loader-icon"
							src="/tmuBold.png"
							width={70}
							alt="tmu icon"
						/>
					</div>
					<div>
						<div style={{ width: "8rem" }}>{cleanProgress}%</div>
					</div>
				</div>
			</div>
		</div>
	) : null;
}
