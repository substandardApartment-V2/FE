// 아파트 검색 컴포넌트

import closeIcon from "@/assets/Main/Search/searchClose.svg";
import time from "@/assets/Main/Search/searchTime.svg";
import useSearchRecord from "@/hooks/Search/useSearhRecord";
import useLocationPath from "@/hooks/Map/useLocationPath";
import useMapMarkers from "@/hooks/Map/useMapMarkers";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useMarkerStore } from "@/store/useMarkerStore";
import axios from "axios";
import { useRef, useState } from "react";
import styles from "./ApartSearch.module.scss";
import ApartSearchInput from "./ApartSearchInput";

export default function ApartSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const map = useMarkerStore((state) => state.map);
  const setMarkerData = useMarkerStore((state) => state.setMarkderData);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const markers = useMarkerStore((state) => state.markers);
  const locationPath = useLocationPath();
  const [showRecentSearch, setShowRecentSearch] = useState(false);
  const { searchRecord, addRecord, removeRecord, clearRecord } =
    useSearchRecord();
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);

  const removeSpecialCharacters = (input: string): string => {
    return input.replace(/[^a-zA-Z0-9가-힣\s]/g, "");
  };

  const searchApiHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
  };

  // useMapMarkers(); // 마커 생성 커스텀 훅 호출

  // const recentSearchHandler = async (keyword: string) => {
  //   setShowRecentSearch(false);
  // };

  return (
    <div className={styles.apartSearchContainer}>
      <div className={styles.apartSearchInput}>
        <ApartSearchInput
          searchRef={searchRef}
          setShowRecentSearch={setShowRecentSearch}
          searchApiHandler={searchApiHandler}
        />
      </div>
      {showRecentSearch && (
        <div className={styles.recentSearch}>
          {searchRecord.length > 0 ? (
            <div>
              <div className={styles.recentHeader}>
                <h4>최근검색어</h4>
                <button
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  onClick={clearRecord}
                >
                  전체삭제
                </button>
              </div>
              <ul>
                {searchRecord.map((record) => (
                  <li key={record.id}>
                    <button
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <span className={styles.recentIcon}>
                        <img src={time} alt="시계 아이콘" />
                      </span>
                      <span className={styles.recentTitle}>
                        {record.keyword}
                      </span>
                    </button>
                    <button
                      className={styles.closeIcon}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        removeRecord(record.id);
                      }}
                    >
                      <img src={closeIcon} alt="닫기 아이콘" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className={styles.noRecent}>최근 검색어 내역이 없습니다.</div>
          )}
        </div>
      )}
    </div>
  );
}
