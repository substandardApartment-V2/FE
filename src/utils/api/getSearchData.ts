import useLocationPath from "@/hooks/Map/useLocationPath";
import useSearchRecord from "@/hooks/Search/useSearhRecord";
import axios from "axios";
import { useMarkerStore } from "@/store/useMarkerStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import useMapMarkers from "@/hooks/Map/useMapMarkers";
import { RefObject } from "react";

const removeSpecialCharacters = (input: string): string => {
  return input.replace(/[^a-zA-Z0-9가-힣\s]/g, "");
};

// ✅ useGetSearchData를 일반 함수로 변경
export default async function getSearchData(
  e: React.FormEvent<HTMLFormElement>,
  searchRef: RefObject<HTMLInputElement>
) {
  e.preventDefault();

  // ✅ 컴포넌트 내부에서 훅을 사용하도록 변경
  const locationPath = useLocationPath();
  const { addRecord } = useSearchRecord();
  const markers = useMarkerStore.getState().markers; // ✅ 직접 getState() 사용
  const map = useMarkerStore.getState().map;
  const setMarkerData = useMarkerStore.getState().setMarkderData;
  const setMainInfo = useMainInfoStore.getState().setMainInfo;
  const setIsSlide = useMainInfoStore.getState().setIsSlide;
  const pathName = locationPath === "apt" ? "apt" : "defect";

  try {
    if (searchRef.current?.value) {
      addRecord(searchRef.current.value);
      const data = await axios(
        `${
          import.meta.env.VITE_LOCAL_API_CALL
        }/map/search/${pathName}?keyword=${removeSpecialCharacters(
          searchRef.current?.value.trim()
        )}`
      );
      if (data.data.code === 200 && map) {
        markers.forEach((marker) => marker.setMap(null));
        setMarkerData(data.data.data.results);
        setMainInfo("SEARCH");
        setIsSlide(true);
        useMapMarkers(); // 마커 생성 커스텀 훅 호출
      }
    }
  } catch (error) {
    console.log("ERROR : ", error);
  } finally {
    if (searchRef.current?.value) searchRef.current.value = "";
  }
}
