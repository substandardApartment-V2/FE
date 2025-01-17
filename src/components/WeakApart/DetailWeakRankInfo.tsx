import styles from "./DetailWeakRankInfo.module.scss";
import DetailWeakBuilderChart from "./Chart/DetailWeakBuilderChart";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function DetailWeakRankInfo() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  return (
    <section className={styles.detailWeakRankInfo}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>하자판정 건수 상위 20개사의 하자 현황</h2>
        <button
          className={styles.closeButton}
          onClick={() => {
            setIsDetailInfo(null);
          }}
        >
          <img src={closeButtonIcon} alt="detail info close button" />
        </button>
      </div>
      <DetailWeakBuilderChart />
    </section>
  );
}
