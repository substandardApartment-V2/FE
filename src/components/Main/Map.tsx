import { useRef, useEffect, useState } from "react";
import styles from "./Map.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailInfo from "./DetailInfo/DetailInfo";
import MapLoading from "./MapLoading";

export default function ApartMap() {
  const [isLoading, setIsLoading] = useState(true);
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

  //지도 경계 좌표 업데이트 함수
  const updateBounds = (map: naver.maps.Map) => {
    const mapBounds = map.getBounds() as naver.maps.LatLngBounds;
    // console.log(mapBounds);
    const sw = mapBounds.getSW();
    const ne = mapBounds.getNE();

    setBounds({
      sw: { lat: sw.lat(), lng: sw.lng() },
      ne: { lat: ne.lat(), lng: ne.lng() },
    });
  };

  //네이버 지도 함수
  const getSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const { naver } = window;

    // 맵 로딩 테스트 강제 로딩 setTimeOut
    // setTimeout(() => {
    //   if (naver) setIsLoading(false);
    // }, 1000);

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

  //지도 불러오기 에러 함수
  const getError = () => {
    console.log("location error");
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getSuccess, getError);
  }, [isLoading]);

  useEffect(() => {
    if (bounds) {
      console.log("Current Map Bounds:", bounds);
    }
  }, [bounds]);

  return (
    <section className={styles.apartMap}>
      {isDetailInfo && <DetailInfo />}
      {isLoading ? (
        <MapLoading />
      ) : (
        <div id="map" ref={mapRef} className={styles.map} />
      )}
    </section>
  );
}
