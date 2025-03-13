// 아파트 검색 컴포넌트

import { useRef, useState } from "react";
import ApartRecentSearchList from "./ApartRecentSearchList";
import styles from "./ApartSearch.module.scss";
import ApartSearchInput from "./ApartSearchInput";

export default function ApartSearch() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [showRecentSearch, setShowRecentSearch] = useState(false);

  return (
    <div className={styles.apartSearchContainer}>
      <div className={styles.apartSearchInput}>
        <ApartSearchInput
          searchRef={searchRef}
          setShowRecentSearch={setShowRecentSearch}
        />
      </div>
      {showRecentSearch && (
        <ApartRecentSearchList
          searchRef={searchRef}
          setShowRecentSearch={setShowRecentSearch}
        />
      )}
    </div>
  );
}
