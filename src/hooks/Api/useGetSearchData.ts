// 아파트 검색 호출 커스텀 훅

import axios from "axios";
import { RefObject } from "react";
import { useMarkerStore } from "@/store/useMarkerStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import useMapMarkers from "@/hooks/Map/useMapMarkers";
import useLocationPath from "@/hooks/Map/useLocationPath";
import useSearchRecord from "@/hooks/Search/useSearhRecord";

const removeSpecialCharacters = (input: string): string => {
  return input.replace(/[^a-zA-Z0-9가-힣\s]/g, "");
};

export function useGetSearchData() {
  const locationPath = useLocationPath();
  const { addRecord } = useSearchRecord();
  const markers = useMarkerStore.getState().markers;
  const map = useMarkerStore.getState().map;
  const setMarkerData = useMarkerStore.getState().setMarkderData;
  const setMainInfo = useMainInfoStore.getState().setMainInfo;
  const setIsSlide = useMainInfoStore.getState().setIsSlide;

  return async function getSearchData(
    keyword: string,
    searchRef?: RefObject<HTMLInputElement>,
    e?: React.FormEvent<HTMLFormElement>
  ) {
    if (e) e.preventDefault();
    const pathName = locationPath === "apt" ? "apt" : "defect";

    try {
      addRecord(keyword);
      const data = await axios(
        `${
          import.meta.env.VITE_LOCAL_API_CALL
        }/map/search/${pathName}?keyword=${removeSpecialCharacters(
          keyword.trim()
        )}`
      );
      if (data.data.code === 200 && map) {
        markers.forEach((marker) => marker.setMap(null));
        setMarkerData(data.data.data.results);
        setMainInfo("SEARCH");
        setIsSlide(true);
        useMapMarkers(); // 마커 생성 커스텀 훅 호출
      }
    } catch (error) {
      console.log("ERROR : ", error);
    } finally {
      if (searchRef && searchRef.current?.value) searchRef.current.value = "";
    }
  };
}
