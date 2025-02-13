import { create } from "zustand";

export type TApartMarkerData = {
  bulidingId: string;
  buildingName: string;
  latitude: number;
  longitude: number;
};

type TUseMarkerStore = {
  markerData: TApartMarkerData[];
  setMarkderData: (markerData: TApartMarkerData[]) => void;
};

export const useMarkerStore = create<TUseMarkerStore>((set) => ({
  markerData: [],
  setMarkderData: (markerData: TApartMarkerData[]) =>
    set(() => ({ markerData: markerData })),
}));
