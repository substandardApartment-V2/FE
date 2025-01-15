import { useRef, useEffect, useState } from "react";
import styles from "./ApartMap.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailApartInfo from "./ApartInfo/DetailApartInfo";

export default function ApartMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  const [bounds, setBounds] = useState<{
    sw: { lat: number; lng: number };
    ne: { lat: number; lng: number };
  } | null>(null);

  const addMarkersWithinRadius = (
    map: naver.maps.Map,
    center: naver.maps.LatLng
  ) => {
    const { naver } = window;
  };

  const updateBounds = (map: naver.maps.Map) => {
    const mapBounds = map.getBounds() as naver.maps.LatLngBounds;
    console.log(mapBounds);
    const sw = mapBounds.getSW();
    const ne = mapBounds.getNE();

    setBounds({
      sw: { lat: sw.lat(), lng: sw.lng() },
      ne: { lat: ne.lat(), lng: ne.lng() },
    });
  };

  const getSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const { naver } = window;

    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);

      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });

      updateBounds(map);

      naver.maps.Event.addListener(map, "bounds_changed", () => {
        updateBounds(map);
      });
    }
  };

  const getError = () => {
    console.log("location error");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
  }, []);

  useEffect(() => {
    if (bounds) {
      console.log("Current Map Bounds:", bounds);
    }
  }, [bounds]);

  return (
    <section className={styles.apartMap}>
      {isDetailInfo && <DetailApartInfo />}
      <div id="map" ref={mapRef} className={styles.map} />
    </section>
  );
}
