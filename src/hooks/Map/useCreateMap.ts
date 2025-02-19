// 네이버 지도 생성 커스텀 훅

import { useState, useRef } from "react";
import zoomUpIcon from "@/assets/Main/Map/zoomUpIcon.svg";
import zoomDownIcon from "@/assets/Main/Map/zoomDownIcon.svg";
import { updateBounds } from "@/utils/map/updateBounds";
import { useMarkerStore } from "@/store/useMarkerStore";

export default function useCreateMap(setMap: (map: naver.maps.Map) => void) {
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef<HTMLDivElement | null>(null);
  const setBounds = useMarkerStore((state) => state.setBounds);

  // 지도 불러오기 성공
  const getSuccess = (position: GeolocationPosition) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const { naver } = window;

    if (naver) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
    if (naver && mapRef.current) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      });
      setMap(map);

      const zoomUpBtnHtml = `<button><img src="${zoomUpIcon}"/></button>`;
      const zoomDownBtnHtml = `<button><img src="${zoomDownIcon}"/></button>`;

      const zoomUpControl = new naver.maps.CustomControl(zoomUpBtnHtml, {
        position: naver.maps.Position.TOP_RIGHT,
      });

      const zoomDownControl = new naver.maps.CustomControl(zoomDownBtnHtml, {
        position: naver.maps.Position.TOP_RIGHT,
      });

      naver.maps.Event.once(map, "init", function () {
        zoomUpControl.setMap(map);
        naver.maps.Event.addDOMListener(
          zoomUpControl.getElement(),
          "click",
          () => {
            const currentZoom = map.getZoom();
            if (currentZoom < 21) {
              map.setZoom(currentZoom + 1, true);
            }
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
      updateBounds(map, setBounds);
    }
  };

  // 지도 불러오기 에러 함수
  const getError = () => {
    console.error("location error");
  };

  return { isLoading, mapRef, getSuccess, getError };
}
