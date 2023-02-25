import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Matrix4, Mesh } from "three";
import { InfoLocations } from "../../utils/InfoLocations";

export default function InfoField() {
	const { nodes } = useGLTF("/info.glb");

	useEffect(() => {
		if (ref.current) {
			ref.current.setMatrixAt(0, new Matrix4());
		}
	}, []);

	const rotateDegree = useRef<number>(0);
	useFrame(() => {
		rotateDegree.current += 0.03;
		ref.current.rotation.y = rotateDegree.current;
	});

	const ref = useRef<any>();
	useEffect(() => {
		console.log(ref.current);
	}, [ref.current]);
	const buildingNames = Object.keys(InfoLocations);
	return (
		<group>
			{buildingNames.map((name, i) => {
				const { pos } = InfoLocations[name];
				const { x, y, z } = pos;
				return (
					<instancedMesh
						ref={ref}
						position={[x, y, z]}
						args={[undefined, undefined, 6]}
					>
						{nodes["InfoFloat"].children.map((child, i) => {
							return (
								<mesh
									receiveShadow
									castShadow
									geometry={(child as Mesh).geometry}
									material={(child as Mesh).material}
								></mesh>
							);
						})}
					</instancedMesh>
				);
			})}
		</group>
	);
}
