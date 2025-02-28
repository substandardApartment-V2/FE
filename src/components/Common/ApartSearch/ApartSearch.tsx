// 아파트 검색 컴포넌트

import closeIcon from "@/assets/Main/Search/searchClose.svg";
import time from "@/assets/Main/Search/searchTime.svg";
import searchIcon from "@/assets/Main/searchICon.svg";
import useSearchRecord from "@/hooks/\bSearch/useSearhRecord";
import useLocationPath from "@/hooks/Map/useLocationPath";
import useMapMarkers from "@/hooks/Map/useMapMarkers";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useMarkerStore } from "@/store/useMarkerStore";
import axios from "axios";
import { useRef, useState } from "react";
import styles from "./ApartSearch.module.scss";

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

  const searchApiHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const pathName = locationPath === "apt" ? "apt" : "defect";
    try {
      if (searchRef.current?.value) {
        addRecord(searchRef.current.value);

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

  // const recentSearchHandler = async (keyword: string) => {
  //   setShowRecentSearch(false);
  // };

  return (
    <div className={styles.apartSearchContainer}>
      <form className={styles.apartSearch} onSubmit={searchApiHandler}>
        <input
          className={styles.apartSearchInput}
          placeholder="궁금한 지역, 아파트를 검색해보세요."
          ref={searchRef}
          tabIndex={1}
          onFocus={() => setShowRecentSearch(true)}
          onBlur={() => setShowRecentSearch(false)}
        />
        <img src={searchIcon} alt="location apart search" />
      </form>
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
