import { useEffect, useState } from "react";
import { TApartMarkerData } from "@/store/useMarkerStore";
import MapMarker from "@/assets/Main/Map/MapMarkerIcon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import getApartData from "@/utils/api/getApartData";

export default function useMapMarkers(
  map: naver.maps.Map | null,
  markerData: TApartMarkerData[]
) {
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);

  useEffect(() => {
    if (!map || !markerData.length) return;

    markers.forEach((marker) => marker.setMap(null));

    //마커 생성 함수
    const newMarkers = markerData.map((listData: TApartMarkerData) => {
      const location = new naver.maps.LatLng(
        listData.latitude,
        listData.longitude
      );
      const marker = new naver.maps.Marker({
        position: location,
        map,
        icon: {
          url: MapMarker,
          size: new naver.maps.Size(45, 50),
          scaledSize: new naver.maps.Size(45, 50),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(12, 34),
        },
        animation: naver.maps.Animation.DROP,
      });

      naver.maps.Event.addListener(marker, "click", async () => {
        setMainInfo(false);
        const data = await getApartData(
          `${import.meta.env.VITE_LOCAL_API_CALL}/apt/info?id=${listData.aptId}`
        );
        setApartInfo(data.data);
      });

      return marker;
    });

    setMarkers(newMarkers);

    return () => {
      newMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [markerData, map]);

  return markers;
}
