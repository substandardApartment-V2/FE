// 네이버 지도 마커 생성 커스텀 훅

import { useEffect } from "react";
import { TApartMarkerData } from "@/store/useMarkerStore";
import mapMarkerIcon from "@/assets/Main/Map/MapMarkerIcon.svg";
import selectMapMarkerIcon from "@/assets/Main/Map/selectMapMarkerIcon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import getApartData from "@/utils/api/getApartData";
import useLocationPath from "./useLocationPath";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import { useMarkerStore } from "@/store/useMarkerStore";
import useSelectMarker from "./useSelectMarker";
import useCreateCluster from "./useCreateCluster";

export default function useMapMarkers() {
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );
  const setSelectMarker = useMarkerStore((state) => state.setSelectMarker);
  const markerData = useMarkerStore((state) => state.markerData);
  const map = useMarkerStore((state) => state.map);
  const markers = useMarkerStore((state) => state.markers);
  const setMarkers = useMarkerStore((state) => state.setMarkers);
  const { selectMarkerRef } = useSelectMarker();
  const locationPath = useLocationPath();

  useEffect(() => {
    if (!map || !markerData.length) return;
    markers.forEach((marker) => marker.setMap(null));
    const newMarkers = markerData.map((listData: TApartMarkerData) => {
      const location = new naver.maps.LatLng(
        listData.latitude,
        listData.longitude
      );

      const marker = new naver.maps.Marker({
        position: location,
        map,
        icon: {
          url: mapMarkerIcon,
          size: new naver.maps.Size(35, 40),
          scaledSize: new naver.maps.Size(35, 40),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(12, 34),
        },
      });

      naver.maps.Event.addListener(marker, "click", async () => {
        const data = await getApartData(
          `${import.meta.env.VITE_LOCAL_API_CALL}/${locationPath}/info?id=${
            listData.aptId
          }`
        );
        setSelectMarker({
          longitude: marker.getPosition().x,
          latitude: marker.getPosition().y,
        });
        setMainInfo("SELECT");
        if (selectMarkerRef.current) {
          selectMarkerRef.current.setIcon({
            url: mapMarkerIcon,
            size: new naver.maps.Size(35, 40),
            scaledSize: new naver.maps.Size(35, 40),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(12, 34),
          });
        }

        marker.setIcon({
          url: selectMapMarkerIcon,
          size: new naver.maps.Size(35, 40),
          scaledSize: new naver.maps.Size(35, 40),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(12, 34),
        });
        selectMarkerRef.current = marker;
        if (locationPath === "apt") setApartInfo(data.data);
        else setWeakApartInfo(data.data);
      });

      return marker;
    });

    setMarkers(newMarkers);
    return () => {
      newMarkers.forEach((marker) => marker.setMap(null));
    };
  }, [markerData]);
  useCreateCluster(markers);
}
