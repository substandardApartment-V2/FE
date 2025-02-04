import styles from "./DetailInfo.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import ApartDetail from "./apartDetail";
import DetailWeakRankInfo from "@/components/WeakApart/WholeWeakApartInfo/DetailWeakRankInfo";
import DetailMaintanceCharge from "../ApartInfo/DetailMaintanceCharge";
import NoticeDetail from "./NoticeDetail";

export default function DetailInfo() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  return (
    <section className={styles.detailInfo}>
      {isDetailInfo === "APARTINFO" && <ApartDetail />}
      {isDetailInfo === "WEAKRANK" && <DetailWeakRankInfo />}
      {isDetailInfo === "MAINTANCE" && <DetailMaintanceCharge />}
      {isDetailInfo === "NOTICE" && <NoticeDetail />}
    </section>
  );
}
