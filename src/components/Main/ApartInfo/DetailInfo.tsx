import styles from "./DetailInfo.module.scss";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailApartInfo from "./DetailApartInfo";
import DetailWeakRankInfo from "@/components/WeakApart/DetailWeakRankInfo";

export default function DetailInfo() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  return (
    <div className={styles.detailApartInfo}>
      {isDetailInfo === "APARTINFO" && <DetailApartInfo />}
      {isDetailInfo === "WEAKRANK" && <DetailWeakRankInfo />}
    </div>
  );
}
