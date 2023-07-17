import { useState } from "react";
import MenuStepper from "./MenuStepper";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Button } from "@mui/material";

export default function AppOverlay() {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	window.addEventListener("resize", () => {
		setScreenWidth(window.innerWidth);
	});

	return (
		<div>
			{/* Mobile overlay */}
			{screenWidth < 600 && (
				<div className="screen-overlay-full mobile-screen">
					<div>Recommended experience on desktop</div>
				</div>
			)}
			<div className="screen-overlay-left row flex-col">
				<div className="row justify-center items-center">
					<img src="/tmuBold.png" width={60} alt="tmu-exlorer title" />
					<h1 className="txt-lg" style={{ color: "#003594" }}>
						TMU-Explorer
					</h1>
				</div>
				<MenuStepper />
			</div>
			<div className="screen-overlay-bottom-right">
				<Button
					startIcon={<CoffeeIcon />}
					variant="contained"
					href="https://www.buymeacoffee.com/oceansam"
					target="_blank"
					rel="noreferrer"
					size="large"
				>
					Support
				</Button>
			</div>
		</div>
	);
}
