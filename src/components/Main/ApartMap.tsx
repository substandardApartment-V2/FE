import { useRef, useEffect, useState } from "react";
import styles from "./ApartMap.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailInfo from "./DetailInfo/DetailInfo";
import MapLoading from "./MapLoading";
import zoomUpIcon from "@/assets/Main/Map/zoomUpIcon.svg";
import zoomDownIcon from "@/assets/Main/Map/zoomDownIcon.svg";
import locationIcon from "@/assets/Main/Map/locationIcon.svg";

export default function ApartMap() {
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  const [bounds, setBounds] = useState<{
    sw: { lat: number; lng: number };
    ne: { lat: number; lng: number };
  } | null>(null);

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
    if (naver) setIsLoading(false);
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);

      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });

      // 커스텀 줌 버튼 임시 코드
      const zoomUpBtnHtml = `<button><img src="${zoomUpIcon}"/></button>`;
      const zoomDownBtnHtml = `<button><img src="${zoomDownIcon}"/></button>`;

      const zoomUpControl = new naver.maps.CustomControl(zoomUpBtnHtml, {
        position: naver.maps.Position.TOP_RIGHT,
      });

      const zoomDownControl = new naver.maps.CustomControl(zoomDownBtnHtml, {
        position: naver.maps.Position.TOP_RIGHT,
      });

      // 이벤트 리스너 Remove 로직 추가 예정
      naver.maps.Event.once(map, "init", function () {
        zoomUpControl.setMap(map);

        // 이벤트 리스너 저장
        naver.maps.Event.addDOMListener(
          zoomUpControl.getElement(),
          "click",
          () => {
            const currentZoom = map.getZoom();
            if (currentZoom < 21) {
              map.setZoom(currentZoom + 1, true);
            }

            // naver.maps.Event.removeDOMListener(zoomUpClickListener);
          }
        );
      });

      naver.maps.Event.once(map, "init", function () {
        zoomDownControl.setMap(map);
        naver.maps.Event.addDOMListener(
          zoomDownControl.getElement(),
          "click",
          () => {
            const currentZoom = map.getZoom();
            if (currentZoom > 1) {
              map.setZoom(currentZoom - 1, true);
            }
          }
        );
      });
      // 커스텀 줌 버튼 임시 코드

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
    // if (bounds) {
    // console.log("Current Map Bounds:", bounds);
    // }
  }, [bounds]);

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
        <div id="map" ref={mapRef} className={styles.map} />
      )}
    </section>
  );
}
