// 네이버지도 컴포넌트

import { useEffect } from "react";
import styles from "./ApartMap.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailInfo from "../DetailInfo/DetailInfo";
import MapLoading from "./MapLoading";
import CurrentMapSearch from "./CurrentMapSearch";
import useGetApartMarker from "@/hooks/Api/useGetApartMarker";
import { useMarkerStore } from "@/store/useMarkerStore";
import useMapMarkers from "@/hooks/Map/useMapMarkers";
import useCreateMap from "@/hooks/Map/useCreateMap";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { updateBounds } from "@/utils/map/updateBounds";
import ApartLocation from "./ApartLocation";

export default function ApartMap() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
  }, [isLoading]);

  useGetApartMarker({
    url: `${import.meta.env.VITE_SERVER_API_CALL}/map/${locationPath}?`,
    query: {
      maxLa: bounds?.ne.lat,
      maxLo: bounds?.ne.lng,
      minLa: bounds?.sw.lat,
      minLo: bounds?.sw.lng,
    },
  });

  useMapMarkers();

  return (
    <section className={styles.apartMap}>
      {!isLoading && <ApartLocation />}
      <section className={styles.detailInfo}>
        {isDetailInfo && <DetailInfo />}
      </section>
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
