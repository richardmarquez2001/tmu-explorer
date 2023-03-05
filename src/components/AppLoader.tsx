import { useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as TWEEN from "@tweenjs/tween.js";
import { useFrame } from "@react-three/fiber";
export default function AppLoader() {
	const [stopEnter, setStopEnter] = useState(true);
	const { loaded } = useProgress();
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
	const [cleanProgress, setCleanProgress] = useState(0);
	useEffect(() => {
		setCleanProgress(Math.floor((loaded / 11) * 100));
		if (loaded > 8) {
			exitMenu();
		}
	}, [loaded]);

	return stopEnter ? (
		<div
			ref={loadOverlay}
			className="screen-overlay-full load-screen"
			style={{ fontSize: "4rem", backgroundColor: "white", opacity: 1 }}
		>
			<div>
				<div className="txt-lg">Explore the TMU Campus</div>
				<div className="progress-element row justify-center items-center">
					<img className="loader-icon" src="/tmuBold.png" width={70} />
					<div>
						<div style={{ width: "8rem" }}>{cleanProgress}%</div>
					</div>
				</div>
			</div>
		</div>
	) : null;
}
