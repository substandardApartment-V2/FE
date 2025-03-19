// 네이버 지도 생성 커스텀 훅

import { useRef, useState } from "react";
import { updateBounds } from "@/utils/map/updateBounds";
import { useMarkerStore } from "@/store/useMarkerStore";
import createCustumButton from "@/utils/map/createCustomButton";

export default function useCreateMap() {
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const setBounds = useMarkerStore((state) => state.setBounds);
  const setMap = useMarkerStore((state) => state.setMap);

  // 지도 불러오기 성공
  const getSuccess = (position: GeolocationPosition) => {
    setIsLoading(false);
    if (useMarkerStore.getState().map || !mapRef.current) return;
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const { naver } = window;

    const location = new naver.maps.LatLng(lat, lng);
    const map = new naver.maps.Map(mapRef.current, {
      center: location,
      zoom: 15,
    });
    setMap(map);
    createCustumButton(map);
    updateBounds(map, setBounds);
  };

  const getError = () => {
    console.error("location error");
  };

  return { isLoading, mapRef, getSuccess, getError };
}
