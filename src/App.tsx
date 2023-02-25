import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Experience from "./components/Experience";

import { Canvas } from "@react-three/fiber";
import AppOverlay from "./components/AppOverlay";

function App() {
	const [currentLocation, setCurrentLocation] = useState("");

	return (
		<>
			<AppOverlay updateLocation={setCurrentLocation} />
			<Canvas camera={{ fov: 90, position: [3, 5, 3] }}>
				<color attach="background" args={["#E7E7E7"]} />
				<Experience location={currentLocation} />
			</Canvas>
		</>
	);
}

export default App;
