import { OrbitControls, Environment } from "@react-three/drei";
import RenderField from "./webgl/RenderField";
export default function Experience() {
	return (
		<>
			<OrbitControls
				enableDamping
				enableZoom
				enableRotate={true}
				dampingFactor={0.1}
				rotateSpeed={0.5}
			/>
			<camera position={[0, 10, 10]} />
			<axesHelper />
			<spotLight position={[0, 10, 0]} />
			<ambientLight intensity={1.0} />
			<RenderField />
		</>
	);
}
