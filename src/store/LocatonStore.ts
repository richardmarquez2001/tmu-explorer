import { create } from "zustand";

type LocationState = {
	currentLocation: string;
	showLowFpsWarning: boolean;
	updateLocation: (currentLocation: string) => void;
	updateFpsWarning: (showWarning: boolean) => void;
};

export const useStore = create<LocationState>((set) => ({
	currentLocation: "RESET",
	showLowFpsWarning: false,
	updateFpsWarning: (showWarning: boolean) =>
		set(() => ({ showLowFpsWarning: showWarning })),
	updateLocation: (newLocation: string) =>
		set(() => ({ currentLocation: newLocation })),
}));
