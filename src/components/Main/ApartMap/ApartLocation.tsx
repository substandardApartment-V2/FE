// 네이버 지도 선택 마커 주소 컴포넌트

import styles from "./ApartLocation.module.scss";
import locationIcon from "@/assets/Main/Map/locationIcon.svg";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { useMarkerStore } from "@/store/useMarkerStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";

export default function ApartLocation() {
  const locationPath = useLocationPath();
  const selectMarker = useMarkerStore((state) => state.selectMarker);
  const map = useMarkerStore((state) => state.map);
  const apartInfo = useMainInfoStore((state) => state.apartInfo);
  const weakApartInfo = useWeakApartInfoStore((state) => state.weakApartInfo);

  const locationClickHandler = () => {
    if (selectMarker && map) {
      const newLocation = new naver.maps.LatLng(
        selectMarker?.getPosition().y,
        selectMarker?.getPosition().x
      );
      map.panTo(newLocation);
    }
  };

  return (
    <div className={styles.location} onClick={locationClickHandler}>
      <span>
        {locationPath === "apt"
          ? apartInfo?.aptInfo.roadAddress
          : weakApartInfo?.aptInfo.address}
      </span>
      <img src={locationIcon} alt="map location" />
    </div>
  );
}
