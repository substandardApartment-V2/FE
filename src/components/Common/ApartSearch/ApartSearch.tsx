// 아파트 검색 컴포넌트

import closeIcon from "@/assets/Main/Search/searchClose.svg";
import time from "@/assets/Main/Search/searchTime.svg";
import useSearchRecord from "@/hooks/Search/useSearhRecord";
import { useRef, useState } from "react";
import styles from "./ApartSearch.module.scss";
import ApartSearchInput from "./ApartSearchInput";
import { useGetSearchData } from "@/hooks/Api/useGetSearchData";
import { useMainInfoStore } from "@/store/useMainInfoStore";

export default function ApartSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [showRecentSearch, setShowRecentSearch] = useState(false);
  const { searchRecord, removeRecord, clearRecord } = useSearchRecord();
  const setIsSlide = useMainInfoStore.getState().setIsSlide;
  const getSearchData = useGetSearchData();

  // const recentSearchHandler = async (keyword: string) => {
  //   setShowRecentSearch(false);
  // };

  return (
    <div className={styles.apartSearchContainer}>
      <div className={styles.apartSearchInput}>
        <ApartSearchInput
          searchRef={searchRef}
          setShowRecentSearch={setShowRecentSearch}
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
                  <li
                    key={record.id}
                    onClick={() => {
                      getSearchData(record.keyword);
                      setIsSlide(true);
                    }}
                  >
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
