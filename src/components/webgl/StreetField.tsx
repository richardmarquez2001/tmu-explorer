import { Text3D } from "@react-three/drei";
import { StreetLocations } from "../../utils/InfoLocations";

export default function StreetField() {
	const streetList = StreetLocations;
	return (
		<>
			{streetList?.map((street, index) => (
				<Text3D
					key={street.name + index}
					position={[street.coords.x, street.coords.y, street.coords.z]}
					rotation={[-Math.PI / 2, 0, street.coords?.rot || 0]}
					font="/fonts/oswald-font.json"
					height={0.01}
					letterSpacing={0.3}
					size={0.35}
				>
					{street.name}
					<meshPhongMaterial
						attach="material"
						opacity={0.5}
						transparent
						color="#fff"
					/>
				</Text3D>
			))}
		</>
	);
}
