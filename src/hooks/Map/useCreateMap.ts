// 네이버 지도 생성 커스텀 훅

import { useRef } from "react";
import { updateBounds } from "@/utils/map/updateBounds";
import { useMarkerStore } from "@/store/useMarkerStore";
import createCustumButton from "@/utils/map/createCustomButton";

export default function useCreateMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const setBounds = useMarkerStore((state) => state.setBounds);
  const setMap = useMarkerStore((state) => state.setMap);
  const setIsLoading = useMarkerStore((state) => state.setIsLoading);

  // 지도 불러오기 성공
  const getSuccess = (position: GeolocationPosition) => {
    if (useMarkerStore.getState().map) return;
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const { naver } = window;

    if (naver) setIsLoading(false);
    if (naver && mapRef.current) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });
      setMap(map);
      createCustumButton(map);
      updateBounds(map, setBounds);
    }
  };

  const getError = () => {
    console.error("location error");
  };

  return { mapRef, getSuccess, getError };
}
