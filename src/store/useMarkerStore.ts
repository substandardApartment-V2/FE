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
  map?: naver.maps.Map | null;
  markerData: TApartMarkerData[];
  selectMarker?: TSelectMarker;
  setMap: (map: naver.maps.Map | null) => void;
  setMarkderData: (markerData: TApartMarkerData[]) => void;
  setClearMarkerData: () => void;
  setSelectMarker: (selectMarker: TSelectMarker) => void;
};

export const useMarkerStore = create<TUseMarkerStore>((set) => ({
  markerData: [],
  setMap: (map: naver.maps.Map | null) => set(() => ({ map: map })),
  setMarkderData: (markerData: TApartMarkerData[]) =>
    set(() => ({ markerData: markerData })),
  setClearMarkerData: () => set(() => ({ markerData: [] })),
  setSelectMarker: (selectMarker: TSelectMarker) =>
    set(() => ({ selectMarker: selectMarker })),
}));
