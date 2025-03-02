import styles from "./ApartSearchInput.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useMarkerStore } from "@/store/useMarkerStore";
import { Dispatch, RefObject, SetStateAction } from "react";

type TApartSearchInput = {
  searchRef: RefObject<HTMLInputElement>;
  setShowRecentSearch: Dispatch<SetStateAction<boolean>>;
  searchApiHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};
export default function ApartSearchInput(props: TApartSearchInput) {
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const isLoading = useMarkerStore((state) => state.isLoading);

  return (
    <form className={styles.apartSearch} onSubmit={props.searchApiHandler}>
      <input
        maxLength={50}
        className={styles.apartSearchInput}
        placeholder={
          isLoading
            ? "잠시만 기다려 주세요."
            : "궁금한 지역, 아파트를 검색해보세요."
        }
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
