// 아파트 검색 input 컴포넌트

import { useEffect, useState } from "react";
import searchIcon from "@/assets/Main/searchICon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { Dispatch, RefObject, SetStateAction } from "react";
import styles from "./ApartSearchInput.module.scss";
import { useSearchStore } from "@/store/useSearchStore";
import useSearchRecord from "@/hooks/Search/useSearhRecord";
import { useMarkerStore } from "@/store/useMarkerStore";

type TApartSearchInput = {
  searchRef: RefObject<HTMLInputElement>;
  setShowRecentSearch: Dispatch<SetStateAction<boolean>>;
};

export default function ApartSearchInput(props: TApartSearchInput) {
  const [isLoading, setIsLoading] = useState(true);
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const setMainInfo = useMainInfoStore.getState().setMainInfo;
  const setKeyword = useSearchStore((state) => state.setKeyword);
  const { addRecord } = useSearchRecord();
  const map = useMarkerStore((state) => state.map);

  useEffect(() => {
    if (map) {
      setIsLoading(false);
    }
  }, [map]);

  return (
    <form
      className={styles.apartSearch}
      onSubmit={(e) => {
        e.preventDefault();
        if (props.searchRef.current) {
          setKeyword(props.searchRef.current.value);
          addRecord(props.searchRef.current.value);
          setMainInfo("SEARCH");
          setIsSlide(true);
          props.searchRef.current.blur();
        }
        props.setShowRecentSearch(false);
      }}
    >
      <input
        maxLength={30}
        className={`${styles.apartSearchInput} ${
          isLoading ? styles.abled : styles.disabled
        }`}
        placeholder={
          isLoading
            ? "잠시만 기다려주세요."
            : "궁금한 지역, 아파트를 검색해보세요."
        }
        ref={props.searchRef}
        disabled={isLoading}
        tabIndex={1}
        onFocus={() => {
          props.setShowRecentSearch(true);
          setIsSlide(false);
        }}
        onBlur={() => props.setShowRecentSearch(false)}
      />
      {!isLoading && (
        <button className={styles.searchButton}>
          <img src={searchIcon} alt="location apart search" />
        </button>
      )}
    </form>
  );
}
