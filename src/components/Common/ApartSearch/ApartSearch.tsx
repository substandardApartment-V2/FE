import { useRef } from "react";
import styles from "./ApartSearch.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";

export default function ApartSearch() {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={styles.apartSearch}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchRef.current?.value) searchRef.current.value = "";
      }}
    >
      <input
        className={styles.apartSearchInput}
        placeholder="궁금한 지역, 아파트를 검색해보세요."
        ref={searchRef}
        tabIndex={1}
      />
      <img src={searchIcon} alt="location apart search" />
    </form>
  );
}
