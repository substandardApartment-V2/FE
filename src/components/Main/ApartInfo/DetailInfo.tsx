import styles from "./DetailInfo.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailApartInfo from "./DetailApartInfo";
import DetailWeakRankInfo from "@/components/WeakApart/WholeWeakApartInfo/DetailWeakRankInfo";
import DetailMaintanceCharge from "./DetailMaintanceCharge";

export default function DetailInfo() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  return (
    <div className={styles.detailApartInfo}>
      {isDetailInfo === "APARTINFO" && <DetailApartInfo />}
      {isDetailInfo === "WEAKRANK" && <DetailWeakRankInfo />}
      {isDetailInfo === "MAINTANCE" && <DetailMaintanceCharge />}
    </div>
  );
}
