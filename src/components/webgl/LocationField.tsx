// Libraries
import * as TWEEN from "@tweenjs/tween.js";
import { useEffect, useRef, useState } from "react";
import { Html, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

// Utils
import { InfoLocations } from "../../utils/InfoLocations";
import { useFrame, useThree } from "@react-three/fiber";
import { useStore } from "../../store/LocatonStore";

export default function LocationField() {
	const infoRef = useRef<any>();

	const controlRef = useRef<any>();
	const cameraRef = useRef<any>();
	const currentTween = useRef<any>();

	// Handle fps tracking
	const frameCount = useRef(0);
	const prevTime = useRef(0);
	const [fps, setFps] = useState(0);
	const [showFpsAlert, setShowFpsAlert] = useState(false);

	useThree((state) => (cameraRef.current = state.camera));

	const camPosition = useThree((state) => state.camera);
	const location = useStore((state) => state.currentLocation);
	const setFpsWarning = useStore((state) => state.updateFpsWarning);

	const resetElements = () => {
		infoRef.current!.scale.set(1, 0, 0.2);
		if (currentTween.current) {
			currentTween.current.stop();
		}
	};

	useEffect(() => {
		resetElements();
		if (controlRef.current)
			new TWEEN.Tween(controlRef.current.target)
				.to({ x: 2, y: 0, z: 0 })
				.easing(TWEEN.Easing.Quintic.InOut)
				.start();

		if (Object.keys(InfoLocations).includes(location) && infoRef.current) {
			const { target, pos } = InfoLocations[location];
			const keyframe = {
				position: new Vector3(pos.x, pos.y, pos.z),
				focalPoint: new Vector3(target.x, target.y, target.z),
			};
			// Tween camera position & focal point
			if (controlRef.current) {
				const posTween = new TWEEN.Tween(camPosition.position)
					.to(keyframe.position, 2500)
					.easing(TWEEN.Easing.Quintic.InOut);
				const focTween = new TWEEN.Tween(controlRef.current.target)
					.to(keyframe.focalPoint, 2000)
					.easing(TWEEN.Easing.Quintic.InOut);
				focTween.start();
				posTween.start();
				const { header, pos } = InfoLocations[location];
				const { x, y, z } = header;

				infoRef.current.position.set(x, y, z);
				infoRef.current.rotation.y =
					header.overrideRot || Math.atan2(pos.x - x, pos.z - z);

				if (location !== "RESET") {
					const keyframe = new Vector3(1, 1, 0.2);
					currentTween.current = new TWEEN.Tween(infoRef.current.scale)
						.to(keyframe, 1000)
						.easing(TWEEN.Easing.Quintic.InOut)
						.delay(1200);

					currentTween.current.start();
				}
			}
		} else {
			camPosition.position.set(2, 4, -13);
		}
	}, [location]);

	const handleFPSCall = () => {
		// Edge case where startup causes fps to start at small number
		if (fps < 30 && fps > 2 && !showFpsAlert) {
			setFpsWarning(true);
			setShowFpsAlert(true);
		}
	};

	useFrame(() => {
		frameCount.current += 1;
		const time = performance.now();
		const deltaTime = time - prevTime.current;

		if (deltaTime >= 1000) {
			setFps((frameCount.current / deltaTime) * 1000);
			frameCount.current = 0;
			prevTime.current = time;
		}
		handleFPSCall();

		// Every frame update the tween and orbit controls
		TWEEN.update();
		if (controlRef.current) {
			controlRef.current.update();
		}
	});

	return (
		<>
			<OrbitControls
				makeDefault
				ref={controlRef}
				enableDamping
				enableZoom
				maxPolarAngle={Math.PI / 2.05}
				maxDistance={20}
				minDistance={6}
				enableRotate={true}
				enablePan={false}
				dampingFactor={0.1}
				rotateSpeed={0.5}
			/>
			<mesh ref={infoRef}>
				<Html
					distanceFactor={InfoLocations[location]?.header?.distance || 3}
					position={[0, 0, 0.1]}
					transform
				>
					{location !== "RESET" && location !== "" && (
						<div
							className={`info-bubble-${InfoLocations[location].header.placement}`}
							style={{ maxWidth: "20.5rem" }}
						>
							{InfoLocations[location].data?.name}
						</div>
					)}
				</Html>
				<planeGeometry args={[2, 1.5]} />
				<meshPhongMaterial opacity={0} transparent />
			</mesh>
		</>
	);
}
