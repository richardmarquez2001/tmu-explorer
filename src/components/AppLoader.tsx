import { useProgress } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as TWEEN from "@tweenjs/tween.js";
import { Dialog, DialogTitle, Button } from "@mui/material";
import ControlPanel from "./ControlPanel";
import FpsWarningPanel from "./FpsWarningPanel";
export default function AppLoader() {
	const [stopEnter, setStopEnter] = useState(true);
	const [passUser, setPassUser] = useState(false);
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
				<div className="txt-lg txt-center">Explore the TMU Campus</div>
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
				<div className="txt-disclaimer txt-center">
					This website is not affiliated with Toronto Metropolitan University
				</div>
			</div>
		</div>
	) : (
		<>
			<FpsWarningPanel canShow={passUser} />
			<Dialog open={!stopEnter && !passUser}>
				<div className="glass-back" style={{ width: "36rem", height: "20rem" }}>
					<DialogTitle sx={{ background: "#0049cf", color: "#fff" }}>
						CONTROLS
					</DialogTitle>
					<div className="row justify-center items-center">
						<ControlPanel />
					</div>

					<div
						style={{
							position: "absolute",
							bottom: 0,
							left: 0,
							right: 0,
							margin: "auto",
							width: "max-content",
							padding: 20,
						}}
					>
						<Button
							variant="outlined"
							color="primary"
							onClick={() => setPassUser(true)}
						>
							Makes sense to me!
						</Button>
					</div>
				</div>
			</Dialog>
		</>
	);
}
