// 지도 마커 초기화 함수

import { useMarkerStore } from "@/store/useMarkerStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import mapMarkerIcon from "@/assets/Main/Map/MapMarkerIcon.svg";

export function resetSelectMarker() {
  const { selectMarker, setSelectMarker } = useMarkerStore.getState();
  const { setWeakApartInfo } = useWeakApartInfoStore.getState();

  if (!selectMarker) return;
  selectMarker.setIcon({
    url: mapMarkerIcon,
    size: new naver.maps.Size(35, 40),
    scaledSize: new naver.maps.Size(35, 40),
    origin: new naver.maps.Point(0, 0),
    anchor: new naver.maps.Point(12, 34),
  });

  setSelectMarker(null);
  setWeakApartInfo(null);
}
