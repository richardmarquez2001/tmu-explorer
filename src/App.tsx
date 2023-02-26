import React, { Suspense, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Experience from "./components/Experience";

import { Canvas } from "@react-three/fiber";
import AppOverlay from "./components/AppOverlay";
import AppLoader from "./components/AppLoader";

function App() {
	const [currentLocation, setCurrentLocation] = useState("");

	console.log();
	console.log(
		"%c Like what you see? Check out my github: https://github.com/oceansam",
		"color: cyan"
	);
	return (
		<>
			<AppLoader />
			<AppOverlay updateLocation={setCurrentLocation} />
			<Canvas camera={{ fov: 90, position: [3, 5, 3] }}>
				<color attach="background" args={["#E7E7E7"]} />
				<Suspense fallback={null}>
					<Experience location={currentLocation} />
				</Suspense>
			</Canvas>
		</>
	);
}

export default App;
