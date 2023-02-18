import { OrbitControls, Environment } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import RenderField from "./webgl/RenderField";
export default function Experience() {
	const cam = useThree((state) => state.camera);

	cam.position.set(0, 10, 0);
	return (
		<>
			<OrbitControls
				enableDamping
				enableZoom
				enableRotate={true}
				dampingFactor={0.1}
				rotateSpeed={0.5}
			/>
			<axesHelper />
			<spotLight position={[0, 10, 0]} />
			<ambientLight intensity={1.0} />
			<RenderField />
		</>
	);
}
