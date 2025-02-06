import styles from "./ApartInfo.module.scss";
import detailButtonIconD from "@/assets/Main/ApartInfo/detailButtonIconD.svg";
import ApartSearch from "@/components/Common/ApartSearch/ApartSearch";
import ApartHeadInfo from "./ApartHeadInfo";
import ApartBuildInfo from "./ApartMainInfo/ApartBuildInfo/ApartBuildInfo";
import ApartPrice from "./ApartMainInfo/ApartPrice";
import ApartMaintanceCharge from "./ApartMainInfo/ApartMaintanceCharge";
import ApartGeneralInfo from "./ApartMainInfo/ApartGeneralInfo";

import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function ApartInfo() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  return (
    <section className={styles.apartInfoContainer}>
      <ApartSearch />
      <ApartHeadInfo
        apartName="롯데캐슬 베네치아"
        apartRegion="서울특별시 중구 황학동 2545 롯데캐슬베네치아"
        zipCode="04572"
      />
      <section className={styles.apartMainInfo}>
        <ApartBuildInfo />
        <ApartPrice />
        <ApartMaintanceCharge />
        <ApartGeneralInfo />
      </section>
      <button
        className={styles.detailApartInfoButton}
        onClick={() => {
          if (isDetailInfo === "APARTINFO") {
            setIsDetailInfo(null);
          } else setIsDetailInfo("APARTINFO");
        }}
      >
        <img src={detailButtonIconD} alt="apart detail button" />
        자세히보기
      </button>
    </section>
  );
}
