// 일반아파트 정보 컨테이너 컴포넌트

import slideUpIcon from "@/assets/Main/ApartInfo/slideUpIcon.svg";
import slideDownIcon from "@/assets/Main/ApartInfo/slideDownIcon.svg";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import ApartSearchResult from "@/components/Common/ApartSearch/ApartSearchResult";
import WholeApartInfo from "@/components/Main/WholeApartInfo/WholeApartInfo";
import ApartInfo from "@/components/Main/ApartInfo/ApartInfo";
import styles from "./InfoContainer.module.scss";
import ApartSearch from "../Common/ApartSearch/ApartSearch";
import { useMarkerStore } from "@/store/useMarkerStore";
import Loading from "./Loading";

export default function InfoContainer() {
  const mainInfo = useMainInfoStore((state) => state.mainInfo);
  const isSlide = useMainInfoStore((state) => state.isSlide);
  const setIsSlide = useMainInfoStore((state) => state.setIsSlide);
  const isLoading = useMarkerStore((state) => state.isLoading);

  const mainInfoType = {
    WHOLE: <WholeApartInfo />,
    SELECT: <ApartInfo />,
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
      {isLoading ? <Loading /> : mainInfo && mainInfoType[mainInfo]}
    </section>
  );
}
