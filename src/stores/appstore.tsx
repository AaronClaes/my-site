import { create } from "zustand";

export const sides = [
  "front",
  "back",
  "left",
  "right",
  "top",
  "bottom",
] as const;
export type SideOption = (typeof sides)[number];

export interface AppState {
  activeSide: SideOption;
  update: (options: Partial<AppState>) => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeSide: "front",
  // function to update the different fields inside the store
  update: (options) => set((state) => ({ ...state, ...options })),
}));
