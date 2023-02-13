import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import {
	Mesh,
	MeshStandardMaterial,
	MeshToonMaterial,
	Scene,
	TextureLoader,
	Vector2,
} from "three";
import { GroupProps, useLoader } from "@react-three/fiber";
export default function RenderField(props: GroupProps) {
	const group = useRef(null);
	const { nodes } = useGLTF("/rye.glb");
	console.log(nodes);
	// return <primitive object={obj.scene} />;
	const getRandomColor = () => {
		return Math.random() * 0xffffff;
	};

	const Q13 = useLoader(TextureLoader, "bakedRight.jpg");
	Q13.flipY = false;
	Q13.encoding = THREE.sRGBEncoding;

	const Q12 = useLoader(TextureLoader, "Q12.jpg");
	Q12.flipY = false;
	Q12.encoding = THREE.sRGBEncoding;

	const Q21 = useLoader(TextureLoader, "Q21.jpg");
	Q21.flipY = false;
	Q21.encoding = THREE.sRGBEncoding;

	const Q22Left = useLoader(TextureLoader, "Q22Left.jpg");
	Q22Left.flipY = false;
	Q22Left.encoding = THREE.sRGBEncoding;

	const Q22Right = useLoader(TextureLoader, "Q22Right.jpg");
	Q22Right.flipY = false;
	Q22Right.encoding = THREE.sRGBEncoding;

	const Q11 = useLoader(TextureLoader, "Q11.jpg");
	Q11.flipY = false;
	Q11.encoding = THREE.sRGBEncoding;

	const Roads = useLoader(TextureLoader, "Roads.jpg");
	Roads.flipY = false;
	Roads.encoding = THREE.sRGBEncoding;

	return (
		<group ref={group} dispose={null} {...props}>
			{/* Right Section */}
			{nodes["RightSection"].children.map((child) => {
				return (
					<mesh geometry={(child as Mesh).geometry}>
						<meshStandardMaterial map={Q13} />
					</mesh>
				);
			})}
			{/* Q12 */}
			{nodes["Q12"].children.map((child) => {
				return (
					<mesh geometry={(child as Mesh).geometry}>
						<meshStandardMaterial map={Q12} />
					</mesh>
				);
			})}
			{/* Q21 */}
			{nodes["Q21"].children.map((child) => {
				return (
					<mesh geometry={(child as Mesh).geometry}>
						<meshStandardMaterial map={Q21} />
					</mesh>
				);
			})}
			{/* Q22 */}
			{nodes["Q22Left"].children.map((child) => {
				return (
					<mesh geometry={(child as Mesh).geometry}>
						<meshStandardMaterial map={Q22Left} />
					</mesh>
				);
			})}
			{nodes["Q22Right"].children.map((child) => {
				return (
					<mesh geometry={(child as Mesh).geometry}>
						<meshStandardMaterial map={Q22Right} />
					</mesh>
				);
			})}
			{nodes["Q11"].children.map((child) => {
				return (
					<mesh geometry={(child as Mesh).geometry}>
						<meshStandardMaterial map={Q11} />
					</mesh>
				);
			})}
			{/* Roads */}
			<mesh geometry={(nodes["Roads"] as Mesh).geometry}>
				<meshStandardMaterial map={Roads} />
			</mesh>
		</group>
	);
}
