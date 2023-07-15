// Components
import RenderField from "./webgl/RenderField";
import StreetField from "./webgl/StreetField";
import LocationField from "./webgl/LocationField";

export default function Experience() {
	return (
		<>
			<ambientLight intensity={1.2} />
			<RenderField />
			<LocationField />
			<StreetField />
		</>
	);
}
