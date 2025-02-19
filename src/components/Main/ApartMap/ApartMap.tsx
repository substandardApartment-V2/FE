// 네이버지도 컴포넌트

import { useEffect } from "react";
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
import { updateBounds } from "@/utils/map/updateBounds";

export default function ApartMap() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  const weakApartInfo = useWeakApartInfoStore((state) => state.weakApartInfo);
  const apartInfo = useMainInfoStore((state) => state.apartInfo);
  const selectMarker = useMarkerStore((state) => state.selectMarker);
  const map = useMarkerStore((state) => state.map);
  const setMap = useMarkerStore((state) => state.setMap);
  const bounds = useMarkerStore((state) => state.bounds);
  const setBounds = useMarkerStore((state) => state.setBounds);
  const locationPath = useLocationPath();
  const { isLoading, mapRef, getSuccess, getError } = useCreateMap(setMap);

  const updateBoundsHandler = () => {
    if (map) {
      updateBounds(map, setBounds);
    }
  };

  const locationClickHandler = () => {
    if (selectMarker && map) {
      const newLocation = new naver.maps.LatLng(
        selectMarker?.getPosition().y,
        selectMarker?.getPosition().x
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
