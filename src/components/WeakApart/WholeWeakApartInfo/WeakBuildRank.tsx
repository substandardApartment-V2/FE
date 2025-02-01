import styles from "./WeakBuildRank.module.scss";
import detailButtonIcon from "@/assets/Main/ApartInfo/detailButtonIcon.svg";
import WeakBuilderChart from "../Chart/WeakBuilderChart";
import FiveYearsWeakBuilderChart from "../Chart/FiveYearsWeakBuilderChart";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function WeakBuildRank() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  return (
    <section className={styles.weakBuildRank}>
      <div className={styles.titleContainer}>
        <div>
          <h2 className={styles.title}>건설사 하자판정 건수 순위</h2>
          <span className={styles.year}>2024</span>
        </div>
        <button
          onClick={() => {
            if (isDetailInfo === "WEAKRANK") {
              setIsDetailInfo(null);
            } else setIsDetailInfo("WEAKRANK");
          }}
        >
          자세히보기
          <img src={detailButtonIcon} alt="detail weak Apart Builder rank" />
        </button>
      </div>
      <div className={styles.chart}>
        <div className={styles.weakBuilderChart}>
          <WeakBuilderChart />
        </div>
        <div className={styles.fiveYearsWeakBuilderChart}>
          <h3>5년간 하자판정 건수 순위</h3>
          <div>
            <FiveYearsWeakBuilderChart />
          </div>
          <ul>
            <li>1. 지에스건설(주)</li>
            <li>2. 계롱건설(주)</li>
            <li>3. 대방건설(주)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
