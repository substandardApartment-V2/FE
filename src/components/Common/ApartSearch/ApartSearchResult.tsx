// 아파트 검색 결과 컴포넌트

import { useInfiniteScroll } from "@/hooks/Search/useInfinityScroll";
import { useSearchStore } from "@/store/useSearchStore";
import styles from "./ApartSearchResult.module.scss";
import selectMapMarkerIcon from "@/assets/Main/Map/selectMapMarkerIcon.svg";
import ApartSearchResultItem from "./ApartSearchResultItem";

export default function ApartSearchResult() {
  const keyword = useSearchStore((state) => state.keyword);
  const { items, loading, ref, totalCount } = useInfiniteScroll(keyword);

  return (
    <section className={styles.apartSearchResult}>
      <p className={styles.apartSearchCount}>
        총 <em>{totalCount}</em>개의 검색결과
      </p>
      <ul className={styles.searchResultContainer}>
        {items.length > 0
          ? items.map((listData, index) => (
              <ApartSearchResultItem key={index} listData={listData} />
            ))
          : !loading && (
              <li className={styles.noResults}>
                <span>?</span>죄송합니다. <br />
                현재 검색하신 아파트에 대한 정보를 찾을 수 없습니다.
              </li>
            )}
        <li ref={ref} className={styles.loadingIndicator}>
          {loading && <div className={styles.loadingSpinner}></div>}
        </li>
      </ul>
    </section>
  );
}
