// 네이버지도 컴포넌트

import { useEffect, useState } from "react";
import styles from "./ApartMap.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailInfo from "../DetailInfo/DetailInfo";
import MapLoading from "./MapLoading";
import locationIcon from "@/assets/Main/Map/locationIcon.svg";
import CurrentMapSearch from "./CurrentMapSearch";
import useGetApartMarker from "@/hooks/Api/useGetApartMarker";
import { useMarkerStore } from "@/store/useMarkerStore";
import useMapMarkers from "@/hooks/Map/useMapMarkers";
import useCreateMap from "@/hooks/Map/useCreateMap";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";

export default function ApartMap() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  const [bounds, setBounds] = useState<{
    sw: { lat: number; lng: number };
    ne: { lat: number; lng: number };
  } | null>(null);
  const weakApartInfo = useWeakApartInfoStore((state) => state.weakApartInfo);
  const apartInfo = useMainInfoStore((state) => state.apartInfo);
  const locationPath = useLocationPath();
  const selectMarker = useMarkerStore((state) => state.selectMarker);
  const map = useMarkerStore((state) => state.map);
  const setMap = useMarkerStore((state) => state.setMap);

  //지도 경계 좌표 업데이트 함수
  const updateBounds = (map: naver.maps.Map) => {
    const mapBounds = map.getBounds() as naver.maps.LatLngBounds;
    const sw = mapBounds.getSW();
    const ne = mapBounds.getNE();
    setBounds({
      sw: { lat: sw.lat(), lng: sw.lng() },
      ne: { lat: ne.lat(), lng: ne.lng() },
    });
  };

  const { isLoading, mapRef, getSuccess, getError } = useCreateMap(
    setMap,
    updateBounds
  );

  const updateBoundsHandler = () => {
    if (map) {
      updateBounds(map);
    }
  };

  const locationClickHandler = () => {
    if (selectMarker && map) {
      const newLocation = new naver.maps.LatLng(
        selectMarker?.latitude,
        selectMarker?.longitude
      );
      map.panTo(newLocation);
    }
  };

  useGetApartMarker(
    `${import.meta.env.VITE_LOCAL_API_CALL}/map/${locationPath}?`,
    {
      maxLa: bounds?.ne.lat,
      maxLo: bounds?.ne.lng,
      minLa: bounds?.sw.lat,
      minLo: bounds?.sw.lng,
    }
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
  }, [isLoading]);
  useMapMarkers();

  return (
    <section className={styles.apartMap}>
      {!isLoading && (
        <div className={styles.location} onClick={locationClickHandler}>
          <span>
            {locationPath === "apt"
              ? apartInfo?.aptInfo.roadAddress
              : weakApartInfo?.aptInfo.address}
          </span>
          <img src={locationIcon} alt="map location" />
        </div>
      )}
      {isDetailInfo && <DetailInfo />}
      {isLoading ? (
        <MapLoading />
      ) : (
        <>
          <div id="map" ref={mapRef} className={styles.map} />
          <CurrentMapSearch
            isLoading={isLoading}
            updateBoundsHandler={updateBoundsHandler}
          />
        </>
      )}
    </section>
  );
}
