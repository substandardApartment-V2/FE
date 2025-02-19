// 네이버 지도 마커 전역상태변수

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

export type TBounds = {
  sw: { lat: number; lng: number };
  ne: { lat: number; lng: number };
};

type TUseMarkerStore = {
  map?: naver.maps.Map | null; //네이버 지도 전역 객체
  bounds: TBounds | null; // 경계좌표
  markers: naver.maps.Marker[]; // 변환 후 마커 배열
  markerData: TApartMarkerData[]; // 변환 전 마커 배열
  selectMarker?: naver.maps.Marker | null; // 선택된 마커
  setMap: (map: naver.maps.Map | null) => void;
  setBounds: (bounds: TBounds) => void;
  setMarkderData: (markerData: TApartMarkerData[]) => void;
  setSelectMarker: (selectMarker: naver.maps.Marker | null) => void;
  setMarkers: (markers: naver.maps.Marker[]) => void;
};

export const useMarkerStore = create<TUseMarkerStore>((set) => ({
  markerData: [],
  markers: [],
  bounds: null,
  setMap: (map: naver.maps.Map | null) => set(() => ({ map: map })),
  setBounds: (bounds: TBounds) => set(() => ({ bounds: bounds })),
  setMarkderData: (markerData: TApartMarkerData[]) =>
    set(() => ({ markerData: markerData })),
  setSelectMarker: (selectMarker: naver.maps.Marker | null) =>
    set(() => ({ selectMarker: selectMarker })),
  setMarkers: (markers: naver.maps.Marker[]) =>
    set(() => ({ markers: markers })),
}));
