import { useRef } from "react";
import styles from "./ApartSearch.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";
import useLocationPath from "@/hooks/Map/useLocationPath";
import axios from "axios";
import { useMarkerStore } from "@/store/useMarkerStore";
import mapMarkerIcon from "@/assets/Main/Map/MapMarkerIcon.svg";
import { TApartMarkerData } from "@/store/useMarkerStore";
import getApartData from "@/utils/api/getApartData";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import selectMapMarkerIcon from "@/assets/Main/Map/selectMapMarkerIcon.svg";

export default function ApartSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const map = useMarkerStore((state) => state.map);
  const setSelectMarker = useMarkerStore((state) => state.setSelectMarker);
  const setMarkerData = useMarkerStore((state) => state.setMarkderData);
  const setClearMarkerData = useMarkerStore(
    (state) => state.setClearMarkerData
  );
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const selectMarkerRef = useRef<naver.maps.Marker | null>(null);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );
  const locationPath = useLocationPath();

  const searchApiHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setClearMarkerData();
    const pathName = locationPath === "apt" ? "apt" : "defect";
    try {
      if (searchRef.current?.value) {
        const data = await axios(
          `${
            import.meta.env.VITE_LOCAL_API_CALL
          }/map/search/${pathName}?keyword=${searchRef.current?.value}`
        );
        if (data.data.code === 200 && map) {
          setMarkerData(data.data.data);
          setMainInfo("SEARCH");
          data.data.data.map((listData: TApartMarkerData) => {
            const location = new naver.maps.LatLng(
              listData.latitude,
              listData.longitude
            );
            const marker = new naver.maps.Marker({
              position: location,
              map,
              icon: {
                url: mapMarkerIcon,
                size: new naver.maps.Size(45, 50),
                scaledSize: new naver.maps.Size(45, 50),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(12, 34),
              },
            });
            naver.maps.Event.addListener(marker, "click", async () => {
              const data = await getApartData(
                `${
                  import.meta.env.VITE_LOCAL_API_CALL
                }/${locationPath}/info?id=${listData.aptId}`
              );
              setSelectMarker({
                longitude: marker.getPosition().x,
                latitude: marker.getPosition().y,
              });
              setMainInfo("SELECT");
              if (selectMarkerRef.current) {
                selectMarkerRef.current.setIcon({
                  url: mapMarkerIcon,
                  size: new naver.maps.Size(45, 50),
                  scaledSize: new naver.maps.Size(45, 50),
                  origin: new naver.maps.Point(0, 0),
                  anchor: new naver.maps.Point(12, 34),
                });
              }
              marker.setIcon({
                url: selectMapMarkerIcon,
                size: new naver.maps.Size(45, 50),
                scaledSize: new naver.maps.Size(45, 50),
                origin: new naver.maps.Point(0, 0),
                anchor: new naver.maps.Point(12, 34),
              });
              selectMarkerRef.current = marker;
              if (locationPath === "apt") setApartInfo(data.data);
              else setWeakApartInfo(data.data);
            });
          });
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
