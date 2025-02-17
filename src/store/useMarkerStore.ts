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
  markers: naver.maps.Marker[];
  markerData: TApartMarkerData[];
  selectMarker?: TSelectMarker;
  setMap: (map: naver.maps.Map | null) => void;
  setMarkderData: (markerData: TApartMarkerData[]) => void;
  setSelectMarker: (selectMarker: TSelectMarker) => void;
  setMarkers: (markers: naver.maps.Marker[]) => void;
};

export const useMarkerStore = create<TUseMarkerStore>((set) => ({
  markerData: [],
  markers: [],
  setMap: (map: naver.maps.Map | null) => set(() => ({ map: map })),
  setMarkderData: (markerData: TApartMarkerData[]) =>
    set(() => ({ markerData: markerData })),
  setSelectMarker: (selectMarker: TSelectMarker) =>
    set(() => ({ selectMarker: selectMarker })),
  setMarkers: (markers: naver.maps.Marker[]) =>
    set(() => ({ markers: markers })),
}));
