import { Suspense, useRef } from "react";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import AppOverlay from "./components/AppOverlay";
import AppLoader from "./components/AppLoader";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.scss";

function App() {
	console.log(
		"%c Like what you see? Check out my github: https://github.com/oceansam",
		"color: cyan"
	);

	const theme = createTheme({
		palette: {
			primary: {
				light: "#023fad",
				main: "#003594",
				dark: "#002884",
				contrastText: "#fff",
			},
			secondary: {
				light: "#fcba28",
				main: "#FFB81C",
				dark: "#eda609",
				contrastText: "#002884",
			},
		},
	});
	const screenWidth = useRef(window.innerWidth);

	return (
		<ThemeProvider theme={theme}>
			{screenWidth.current < 600 ? (
				<div className="screen-overlay-full mobile-screen">
					<div className="txt-sm" style={{ width: "70%" }}>
						Sorry! This experience is recommended on a desktop browser.
					</div>
				</div>
			) : (
				<>
					<AppLoader />
					<AppOverlay />

					<Canvas
						shadows
						camera={{ fov: 65, position: [0, 4, -10] }}
						style={{ zIndex: 1 }}
						legacy={false}
					>
						<color attach="background" args={["#fff"]} />
						<Suspense fallback={null}>
							<Experience />
						</Suspense>
					</Canvas>
				</>
			)}
		</ThemeProvider>
	);
}

export default App;
