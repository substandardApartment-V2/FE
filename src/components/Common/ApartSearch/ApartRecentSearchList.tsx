// 아파트 최근 검색 컴포넌트

import closeIcon from "@/assets/Main/Search/searchClose.svg";
import time from "@/assets/Main/Search/searchTime.svg";
import useSearchRecord from "@/hooks/Search/useSearhRecord";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useSearchRecordStore } from "@/store/useSearchRecordStore";
import { RecentSearchListProps } from "@/types/TSearch/TRecentSearchListTypes";
import styles from "./ApartSearch.module.scss";
import { useSearchStore } from "@/store/useSearchStore";

export default function ApartRecentSearchList({
  searchRef,
  setShowRecentSearch,
}: RecentSearchListProps) {
  const { removeRecord, clearRecord } = useSearchRecord();
  const searchRecord = useSearchRecordStore((state) => state.searchRecord);
  const setIsSlide = useMainInfoStore.getState().setIsSlide;
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setKeyword = useSearchStore((state) => state.setKeyword);
  const setIsReset = useSearchStore((state) => state.setIsReset);

  return (
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
            {searchRecord &&
              searchRecord.map((record) => (
                <li
                  key={record.id}
                  onClick={() => {
                    setMainInfo("SEARCH");
                    setKeyword(record.keyword);
                    setIsSlide(true);
                    setShowRecentSearch(false);
                    setIsReset(false);
                    if (searchRef.current) {
                      searchRef.current.blur();
                    }
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
                    <span className={styles.recentTitle}>{record.keyword}</span>
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
  );
}
