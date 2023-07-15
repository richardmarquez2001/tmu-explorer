import { create } from "zustand";

type LocationState = {
	currentLocation: string;
	updateLocation: (currentLocation: string) => void;
};

export const useStore = create<LocationState>((set) => ({
	currentLocation: "RESET",
	updateLocation: (newLocation: string) =>
		set(() => ({ currentLocation: newLocation })),
}));
