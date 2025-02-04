import styles from "./ApartSearch.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";

export default function ApartSearch() {
  return (
    <section className={styles.apartSearch}>
      <input
        className={styles.apartSearchInput}
        placeholder="궁금한 지역, 아파트를 검색해보세요."
        tabIndex={1}
      />
      <img src={searchIcon} alt="location apart search" />
    </section>
  );
}
