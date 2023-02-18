import { useLayoutEffect, useRef } from "react";
import { Html, useGLTF, useTexture } from "@react-three/drei";
import { Mesh, Texture } from "three";

import { GroupProps, ThreeEvent } from "@react-three/fiber";
import sources from "../../utils/sources";

export default function RenderField(props: GroupProps) {
	const group = useRef(null);
	const { nodes } = useGLTF("/rye.glb");

	const nodeObjects = useRef<
		{ name: string; map: Texture; pos: [x: number, y: number, z: number] }[]
	>([]);

	const Q13 = useTexture("bakedRight.jpg");
	const Q12 = useTexture("Q12.jpg");
	const Q21 = useTexture("Q21.jpg");
	const Q22Left = useTexture("Q22Left.jpg");
	const Q22Right = useTexture("Q22Right.jpg");
	const Q11 = useTexture("Q11.jpg");
	const Roads = useTexture("Roads.jpg");

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

	const invokeHoverElemet = (e: ThreeEvent<PointerEvent>, isInit: boolean) => {
		const name = e.eventObject;
		console.log(e);
		let scaleAmount = 1.1;
		if (!isInit) {
			scaleAmount = 1;
		}
	};
	return (
		<group ref={group} dispose={null} {...props}>
			{/* Interactable objects */}
			{nodeObjects.current.map((obj) => {
				return (
					<group
						onPointerOver={(e) => invokeHoverElemet(e, true)}
						onPointerLeave={(e) => invokeHoverElemet(e, false)}
					>
						<Html position={obj.pos}>?</Html>
						{/* Render mesh */}
						{nodes[obj.name].children.map((child) => {
							return (
								<mesh geometry={(child as Mesh).geometry}>
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
