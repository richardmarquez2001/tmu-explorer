import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useStore } from "../store/LocatonStore";

export default function FpsWarningPanel({ canShow }: { canShow: boolean }) {
	const showFpsAlert = useStore((state) => state.showLowFpsWarning);
	const [isClosed, setIsClosed] = useState(false);

	// Manually invoke onClose due to dialog & snackbar mui pointer event conflict
	if (showFpsAlert && canShow) {
		setTimeout(() => {
			handleClose();
		}, 10000);
	}

	const handleClose = () => {
		setIsClosed(true);
	};

	return (
		<Snackbar
			open={showFpsAlert && !isClosed && canShow}
			anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
		>
			<Alert severity="info">
				Experiencing low FPS? Enable hardware acceleration!
			</Alert>
		</Snackbar>
	);
}
