// 아파트 검색 컴포넌트

import { useRef } from "react";
import styles from "./ApartSearch.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";
import useLocationPath from "@/hooks/Map/useLocationPath";
import axios from "axios";
import { useMarkerStore } from "@/store/useMarkerStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import useMapMarkers from "@/hooks/Map/useMapMarkers";

export default function ApartSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const map = useMarkerStore((state) => state.map);
  const setMarkerData = useMarkerStore((state) => state.setMarkderData);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const markers = useMarkerStore((state) => state.markers);
  const locationPath = useLocationPath();

  const searchApiHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pathName = locationPath === "apt" ? "apt" : "defect";
    try {
      if (searchRef.current?.value) {
        const data = await axios(
          `${
            import.meta.env.VITE_LOCAL_API_CALL
          }/map/search/${pathName}?keyword=${searchRef.current?.value}`
        );
        if (data.data.code === 200 && map) {
          markers.forEach((marker) => marker.setMap(null));
          setMarkerData(data.data.data);
          setMainInfo("SEARCH");
          useMapMarkers(); // 마커 생성 커스텀 훅 호출
        }
      }
    } catch (error) {
      console.log("ERROR : ", error);
    } finally {
      if (searchRef.current?.value) searchRef.current.value = "";
    }
  };

  return (
    <form className={styles.apartSearch} onSubmit={searchApiHandler}>
      <input
        className={styles.apartSearchInput}
        placeholder="궁금한 지역, 아파트를 검색해보세요."
        ref={searchRef}
        tabIndex={1}
      />
      <img src={searchIcon} alt="location apart search" />
    </form>
  );
}
