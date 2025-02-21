import styles from "./DetailInfo.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import ApartDetail from "./ApartDetail";
import DetailWeakRankInfo from "@/components/WeakApart/WholeWeakApartInfo/DetailWeakRankInfo";
import DetailMaintanceCharge from "../ApartInfo/DetailMaintanceCharge";
import NoticeDetail from "./NoticeDetail";

export default function DetailInfo() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  const detailInfoType = {
    APARTINFO: <ApartDetail />,
    WEAKRANK: <DetailWeakRankInfo />,
    MAINTANCE: <DetailMaintanceCharge />,
    NOTICE: <NoticeDetail />,
  };

  return (
    <section className={styles.detailInfo}>
      {isDetailInfo && detailInfoType[isDetailInfo]}
    </section>
  );
}
