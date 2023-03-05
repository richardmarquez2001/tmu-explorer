// Libraries
import * as TWEEN from "@tweenjs/tween.js";
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import { Fog, Vector3 } from "three/src/Three";

// Components
import RenderField from "./webgl/RenderField";

// Utils
import { InfoLocations } from "../utils/InfoLocations";

export default function Experience({ location }: { location: string }) {
	const camPosition = useThree((state) => state.camera);
	const controlRef = useRef<any>();

	useEffect(() => {
		// If we have a valid location navigate to it (Check InfoLocations.ts)
		if (Object.keys(InfoLocations).includes(location)) {
			const { target, pos } = InfoLocations[location];
			const keyframe = {
				position: new Vector3(pos.x, pos.y, pos.z),
				focalPoint: new Vector3(target.x, target.y, target.z),
			};
			// Tween camera position & focal point
			if (controlRef.current) {
				const posTween = new TWEEN.Tween(camPosition.position)
					.to(keyframe.position, 1000)
					.easing(TWEEN.Easing.Quintic.InOut);
				const focTween = new TWEEN.Tween(controlRef.current.target)
					.to(keyframe.focalPoint, 1000)
					.easing(TWEEN.Easing.Quintic.InOut);
				focTween.start();
				posTween.start();
			}
		} else {
			camPosition.position.set(0, 8, -8);
		}
	}, [location]);

	useLayoutEffect(() => {}, []);
	useFrame(() => {
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
				enableRotate={true}
				dampingFactor={0.1}
				rotateSpeed={0.5}
			/>
			{/* <spotLight position={[0, 10, 0]} /> */}
			<ambientLight intensity={1.75} />
			<RenderField currentLoc={location} />
		</>
	);
}
