// 네이버 지도 마커 생성 커스텀 훅

import { useEffect } from "react";
import { TApartMarkerData } from "@/store/useMarkerStore";
import mapMarkerIcon from "@/assets/Main/Map/MapMarkerIcon.svg";
import selectMapMarkerIcon from "@/assets/Main/Map/selectMapMarkerIcon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import useLocationPath from "./useLocationPath";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import { useMarkerStore } from "@/store/useMarkerStore";
import useCreateCluster from "./useCreateCluster";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import axios from "axios";

export default function useMapMarkers() {
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );
  const setSelectMarkerId = useMarkerStore((state) => state.setSelectMarkerId);
  const setIsLoading = useMarkerStore((state) => state.setIsLoading);
  const setSelectMarker = useMarkerStore((state) => state.setSelectMarker);
  const markerData = useMarkerStore((state) => state.markerData);
  const map = useMarkerStore((state) => state.map);
  const markers = useMarkerStore((state) => state.markers);
  const setMarkers = useMarkerStore((state) => state.setMarkers);
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const { apartSeparate } = useLocationPath();

  const getApartData = async (url: string) => {
    try {
      setIsLoading(true);
      const result = await axios(url);
      return result.data;
    } catch (error) {
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!map || !markerData.length) return;
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
          if (useMarkerStore.getState().selectMarker) {
            // setIsSlide(false);
            const selectMarker = useMarkerStore.getState().selectMarker;
            if (!selectMarker) return;
            selectMarker.setIcon({
              url: mapMarkerIcon,
              size: new naver.maps.Size(35, 40),
              scaledSize: new naver.maps.Size(35, 40),
              origin: new naver.maps.Point(0, 0),
              anchor: new naver.maps.Point(12, 34),
            });
            if (useMarkerStore.getState().selectMarkerId === listData.aptId) {
              setMainInfo("WHOLE");
              setSelectMarkerId(null);
              setSelectMarker(null);
              if (apartSeparate === "apt") setApartInfo(null);
              else setWeakApartInfo(null);
              return;
            }
          }
          const data = await getApartData(
            `${import.meta.env.VITE_SERVER_API_CALL}/${apartSeparate}/info?id=${
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
          setSelectMarkerId(listData.aptId);
          setSelectMarker(marker);
          if (apartSeparate === "apt") setApartInfo(data.data);
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
