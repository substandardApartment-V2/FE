// 부실아파트 정보 컨테이너 컴포넌트

import slideUpIcon from "@/assets/Main/ApartInfo/slideUpIcon.svg";
import slideDownIcon from "@/assets/Main/ApartInfo/slideDownIcon.svg";
import styles from "./WeakInfoContainer.module.scss";
import WholeWeakApartInfo from "./WholeWeakApartInfo/WholeWeakApartInfo";
import WeakApartInfo from "./WholeWeakApartInfo/WeakApartInfo";
import ApartSearch from "../Common/ApartSearch/ApartSearch";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import ApartSearchResult from "../Common/ApartSearch/ApartSearchResult";

export default function WeakInfoContainer() {
  const mainInfo = useMainInfoStore((state) => state.mainInfo);
  const isSlide = useMainInfoStore((state) => state.isSlide);
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);

  const mainInfoType = {
    WHOLE: <WholeWeakApartInfo />,
    SELECT: <WeakApartInfo />,
    SEARCH: <ApartSearchResult />,
  };

  return (
    <section className={`${styles.info} ${!isSlide ? styles.closed : ""}`}>
      <button
        className={styles.slideButton}
        onClick={() => setIsSlide(!isSlide)}
      >
        <img src={isSlide ? slideDownIcon : slideUpIcon} alt="슬라이드 버튼" />
      </button>
      <section className={styles.apartSearch}>
        <ApartSearch />
      </section>
      {mainInfo && mainInfoType[mainInfo]}
    </section>
  );
}
