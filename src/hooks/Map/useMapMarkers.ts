import { useEffect, useState } from "react";
import { TApartMarkerData } from "@/store/useMarkerStore";
import MapMarker from "@/assets/Main/Map/MapMarkerIcon.svg";

export default function useMapMarkers(
  map: naver.maps.Map | null,
  markerData: TApartMarkerData[]
) {
  const [markers, setMarkers] = useState<naver.maps.Marker[]>([]);

  useEffect(() => {
    if (!map || !markerData.length) return;

    markers.forEach((marker) => marker.setMap(null));

    const newMarkers = markerData.map((listData: TApartMarkerData) => {
      const location = new naver.maps.LatLng(
        listData.latitude,
        listData.longitude
      );
      return new naver.maps.Marker({
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
    });
    setMarkers(newMarkers);
    return () => {
      newMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [markerData, map]);

  return markers;
}
