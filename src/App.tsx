import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Experience from "./components/Experience";

import { Canvas } from "@react-three/fiber";

function App() {
	return (
		<Canvas camera={{ fov: 90, position: [3, 5, 3] }}>
			<color attach="background" args={["#E7E7E7"]} />
			<Experience />
		</Canvas>
	);
}

export default App;
