// Libraries
import * as TWEEN from "@tweenjs/tween.js";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useGLTF, useTexture, Text3D } from "@react-three/drei";
import { BufferGeometry, Mesh, Texture, Vector3 } from "three";

// Utils
import {InfoLocations} from "../../utils/InfoLocations";
import sources from "../../utils/sources";

function LocationDisplay({ location }: { location: string }) {
	const locationRef = useRef<any>();
	// useEffect(() => {}, [location]);

	useEffect(() => {
		locationRef.current!.scale.set(1, 0, 0.2);

		if (Object.keys(InfoLocations).includes(location) && locationRef.current) {
			const { header } = InfoLocations[location];
			const { x, y, z, rot } = header;

			locationRef.current.position.set(x, y, z);
			locationRef.current.rotation.set(0, rot ? rot : 0, 0);
			if (location != "RESET") {
				const keyframe = new Vector3(1, 1, 0.2);
				const initTween = new TWEEN.Tween(locationRef.current.scale)
					.to(keyframe, 1000)
					.easing(TWEEN.Easing.Quintic.InOut)
					.delay(500);

				initTween.start();
			}
		} else {
		}
	}, [location]);
	return (
		<>
			<Text3D
				ref={locationRef}
				// position={[locPos.current.x, locPos.current.y, locPos.current.z]}
				// rotation={[0, locRot.current, 0]}
				// scale={[1, 0, 0.2]}
				font="/fonts/oswald-font.json"
				size={0.75}
			>
				{location}
				<meshStandardMaterial attach="material" color="black" />
			</Text3D>
		</>
	);
}
export default function RenderField({ currentLoc }: { currentLoc: string }) {
	const group = useRef(null);
	const { nodes } = useGLTF("/rye.glb");

	const nodeObjects = useRef<
		{ name: string; map: Texture; pos: [x: number, y: number, z: number] }[]
	>([]);
	console.log(nodes);
	const Q13 = useTexture("/textures/bakedRight.jpg");
	const Q12 = useTexture("/textures/Q12.jpg");
	const Q21 = useTexture("/textures/Q21.jpg");
	const Q22Left = useTexture("/textures/Q22Left.jpg");
	const Q22Right = useTexture("/textures/Q22Right.jpg");
	const Q11 = useTexture("/textures/Q11.jpg");
	const Roads = useTexture("/textures/Roads.jpg");

	nodeObjects.current.push({ name: "RightSection", map: Q13, pos: [10, 0, 0] });
	nodeObjects.current.push({ name: "Q12", map: Q12, pos: [5, 0, 0] });
	nodeObjects.current.push({ name: "Q21", map: Q21, pos: [3, 0, 0] });
	nodeObjects.current.push({ name: "Q22Left", map: Q22Left, pos: [2, 0, 0] });
	nodeObjects.current.push({
		name: "Q22Right",
		map: Q22Right,
		pos: [10, 0, 0],
	});
	nodeObjects.current.push({ name: "Q11", map: Q11, pos: [1, 0, 0] });

	useLayoutEffect(() => {
		if (nodeObjects.current.length === sources.length) {
			nodeObjects.current.forEach((texture) => {
				texture.map.flipY = false;
			});
		}
		Roads.flipY = false;
	}, []);

	const childrenRef = useRef<any>([]);

	useEffect(() => {
		childrenRef.current = childrenRef.current.slice(0, 90);
	}, []);

	return (
		<group ref={group} dispose={null}>
			<LocationDisplay location={currentLoc} />
			{/* Interactable objects */}
			{nodeObjects.current.map((obj, i) => {
				return (
					<group>
						{/* Render mesh */}
						{nodes[obj.name].children.map((child, i) => {
							return (
								<mesh
									ref={(el) => (childrenRef.current[i] = el)}
									geometry={(child as Mesh).geometry}
								>
									<meshStandardMaterial map={obj.map} />
								</mesh>
							);
						})}
					</group>
				);
			})}
			{/* Roads */}
			<mesh geometry={(nodes["Roads"] as Mesh).geometry}>
				<meshStandardMaterial map={Roads} />
			</mesh>
		</group>
	);
}
