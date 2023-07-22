// Libraries
import { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { BufferGeometry, Group, Mesh } from "three";

// Utils
import sources from "../../utils/sources";

export function Field({
	textureId,
	geometry,
}: {
	textureId: string;
	geometry: BufferGeometry;
}) {
	const map = useTexture(`/textures/${textureId}.jpg`);

	map.flipY = false;

	return (
		<mesh geometry={geometry}>
			<meshStandardMaterial map={map} />
		</mesh>
	);
}

export default function RenderField() {
	const { nodes } = useGLTF("/rye_big.gltf");

	const nodeObjects = useRef<
		{ name: string; pos: [x: number, y: number, z: number] }[]
	>([]);

	const fieldList = useRef<any[]>([]);
	sources.forEach((node) => {
		nodeObjects.current.push({
			name: node,
			pos: [0, 0, 0],
		});
	});

	const isGroup = (name: string) => {
		return nodes[name] instanceof Group;
	};

	fieldList.current = nodeObjects.current.map((node, i) => {
		if (nodes[node.name] === undefined) console.log(node.name, nodes);
		return (
			<group key={node.name + i}>
				{isGroup(node.name) ? (
					nodes[node.name].children.map((child) => {
						return (
							<Field
								key={child.uuid + i}
								textureId={node.name}
								geometry={(child as Mesh).geometry}
							/>
						);
					})
				) : (
					<Field
						key={nodes[node.name].uuid + i}
						textureId={node.name}
						geometry={(nodes[node.name] as Mesh).geometry}
					/>
				)}
			</group>
		);
	});

	return (
		<>
			{fieldList.current.map((field) => {
				return field;
			})}
		</>
	);
}
