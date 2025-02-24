// 일반아파트 정보 컨테이너 컴포넌트

import { useState } from "react";
import slideUpIcon from "@/assets/Main/ApartInfo/slideUpIcon.svg";
import slideDownIcon from "@/assets/Main/ApartInfo/slideDownIcon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import ApartSearchResult from "@/components/Common/ApartSearch/ApartSearchResult";
import WholeApartInfo from "@/components/Main/WholeApartInfo/WholeApartInfo";
import ApartInfo from "@/components/Main/ApartInfo/ApartInfo";
import styles from "./InfoContainer.module.scss";
import ApartSearch from "../Common/ApartSearch/ApartSearch";
import DetailInfo from "./DetailInfo/DetailInfo";

export default function InfoContainer() {
  const mainInfo = useMainInfoStore((state) => state.mainInfo);
  const [isOpen, setIsOpen] = useState(true);

  const mainInfoType = {
    WHOLE: <WholeApartInfo />,
    SELECT: <ApartInfo />,
    SEARCH: <ApartSearchResult />,
    // DETAIL: <DetailInfo />,
  };

  return (
    <section className={`${styles.info} ${!isOpen ? styles.closed : ""}`}>
      <button className={styles.slideButton} onClick={() => setIsOpen(!isOpen)}>
        <img src={isOpen ? slideDownIcon : slideUpIcon} alt="슬라이드 버튼" />
      </button>
      <section className={styles.apartSearch}>
        <ApartSearch />
      </section>
      {mainInfo && mainInfoType[mainInfo]}
    </section>
  );
}
