// 네이버지도 현재 지역 검색 버튼 컴포넌트

import styles from "./CurrentMapSearch.module.scss";
import currentLocationSearchIcon from "@/assets/Main/Map/currentLocationSearchIcon.svg";

type TCurrentMapSearch = {
  isLoading: boolean;
  updateBoundsHandler: () => void;
};

export default function CurrentMapSearch(props: TCurrentMapSearch) {
  return (
    <button className={styles.searchButton} onClick={props.updateBoundsHandler}>
      <img src={currentLocationSearchIcon} alt="현 지도에서 검색" />
      <span>현 지도에서 검색</span>
    </button>
  );
}
