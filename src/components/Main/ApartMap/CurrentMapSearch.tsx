import styles from "./CurrentMapSearch.module.scss";

type TCurrentMapSearch = {
  isLoading: boolean;
  updateBoundsHandler: () => void;
};

export default function CurrentMapSearch(props: TCurrentMapSearch) {
  return (
    <button className={styles.searchButton} onClick={props.updateBoundsHandler}>
      현 지도에서 검색
    </button>
  );
}
