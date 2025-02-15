import { create } from "zustand";

export type TApartMarkerData = {
  aptId: string;
  aptName: string;
  latitude: number;
  longitude: number;
};

export type TSelectMarker = {
  latitude: number;
  longitude: number;
};

type TUseMarkerStore = {
  markerData: TApartMarkerData[];
  selectMarker?: TSelectMarker;
  setMarkderData: (markerData: TApartMarkerData[]) => void;
  setSelectMarker: (selectMarker: TSelectMarker) => void;
};

export const useMarkerStore = create<TUseMarkerStore>((set) => ({
  markerData: [],
  setMarkderData: (markerData: TApartMarkerData[]) =>
    set(() => ({ markerData: markerData })),
  setSelectMarker: (selectMarker: TSelectMarker) =>
    set(() => ({ selectMarker: selectMarker })),
}));
