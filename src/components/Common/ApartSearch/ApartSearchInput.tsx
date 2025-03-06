import styles from "./ApartSearchInput.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { Dispatch, RefObject, SetStateAction } from "react";
import { useGetSearchData } from "@/hooks/Api/useGetSearchData";

type TApartSearchInput = {
  searchRef: RefObject<HTMLInputElement>;
  setShowRecentSearch: Dispatch<SetStateAction<boolean>>;
};
export default function ApartSearchInput(props: TApartSearchInput) {
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const getSearchData = useGetSearchData();

  return (
    <form
      className={styles.apartSearch}
      onSubmit={(e) => {
        if (props.searchRef.current)
          getSearchData(props.searchRef.current.value, props.searchRef, e);
      }}
    >
      <input
        maxLength={50}
        className={styles.apartSearchInput}
        placeholder={"궁금한 지역, 아파트를 검색해보세요."}
        ref={props.searchRef}
        tabIndex={1}
        onFocus={() => {
          props.setShowRecentSearch(true);
          setIsSlide(false);
        }}
        onBlur={() => props.setShowRecentSearch(false)}
      />
      <button className={styles.searchButton}>
        <img src={searchIcon} alt="location apart search" />
      </button>
    </form>
  );
}
