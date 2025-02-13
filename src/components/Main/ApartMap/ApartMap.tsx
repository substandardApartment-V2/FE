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

export type TBounds = {
  minLa?: number;
  minLo?: number;
  maxLa?: number;
  maxLo?: number;
};

export default function ApartMap() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  const [bounds, setBounds] = useState<{
    sw: { lat: number; lng: number };
    ne: { lat: number; lng: number };
  } | null>(null);
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const markerData = useMarkerStore((state) => state.markerData);

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

  useGetApartMarker("http://localhost:8080/map/building?", {
    maxLa: bounds?.ne.lat,
    maxLo: bounds?.ne.lng,
    minLa: bounds?.sw.lat,
    minLo: bounds?.sw.lng,
  });
  useMapMarkers(map, markerData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
  }, [isLoading]);

  return (
    <section className={styles.apartMap}>
      <div className={styles.location}>
        <span></span>
        <img src={locationIcon} alt="map location" />
      </div>
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
