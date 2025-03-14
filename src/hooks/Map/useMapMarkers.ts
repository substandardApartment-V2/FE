// 네이버 지도 마커 생성 커스텀 훅

import { useEffect, useRef } from "react";
import { TApartMarkerData } from "@/store/useMarkerStore";
import mapMarkerIcon from "@/assets/Main/Map/MapMarkerIcon.svg";
import selectMapMarkerIcon from "@/assets/Main/Map/selectMapMarkerIcon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import getApartData from "@/utils/api/getApartData";
import useLocationPath from "./useLocationPath";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import { useMarkerStore } from "@/store/useMarkerStore";
import useCreateCluster from "./useCreateCluster";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { resetSelectMarker } from "@/utils/map/resetSelectMarker";

export default function useMapMarkers() {
  const selectMarkerIdRef = useRef<string | null>(null);
  const selectMarkerRef = useRef<naver.maps.Marker | null>(null);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );
  const selectMarker = useMarkerStore((state) => state.selectMarker);
  const setSelectMarker = useMarkerStore((state) => state.setSelectMarker);
  const markerData = useMarkerStore((state) => state.markerData);
  const map = useMarkerStore((state) => state.map);
  const markers = useMarkerStore((state) => state.markers);
  const setMarkers = useMarkerStore((state) => state.setMarkers);
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  const locationPath = useLocationPath();

  useEffect(() => {
    if (selectMarker === null) {
      selectMarkerRef.current = null;
    }
  }, [selectMarker]);

  useEffect(() => {
    if (!map || !markerData) return;
    markers.forEach((marker) => marker.setMap(null));

    const newMarkers = markerData
      .slice(0, 200)
      .map((listData: TApartMarkerData) => {
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
          if (
            !selectMarkerRef.current &&
            useMarkerStore.getState().selectMarker
          ) {
            resetSelectMarker();
            setMainInfo("WHOLE");
            return;
          }
          if (selectMarkerRef.current) {
            setIsSlide(false);
            selectMarkerRef.current.setIcon({
              url: mapMarkerIcon,
              size: new naver.maps.Size(35, 40),
              scaledSize: new naver.maps.Size(35, 40),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(12, 34),
            });
            selectMarkerRef.current = null;
            if (
              selectMarkerIdRef &&
              selectMarkerIdRef.current === listData.aptId
            ) {
              setMainInfo("WHOLE");
              selectMarkerIdRef.current = null;
              setSelectMarker(null);
              if (locationPath === "apt") setApartInfo(null);
              else setWeakApartInfo(null);
              return;
            }
          }
          const data = await getApartData(
            `${import.meta.env.VITE_SERVER_API_CALL}/${locationPath}/info?id=${
              listData.aptId
            }`
          );
          marker.setIcon({
            url: selectMapMarkerIcon,
            size: new naver.maps.Size(35, 40),
            scaledSize: new naver.maps.Size(35, 40),
            origin: new naver.maps.Point(0, 0),
            anchor: new naver.maps.Point(12, 34),
          });
          setIsDetailInfo(null);
          setIsSlide(true);
          setSelectMarker(marker);
          setMainInfo("SELECT");
          selectMarkerIdRef.current = listData.aptId;
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
