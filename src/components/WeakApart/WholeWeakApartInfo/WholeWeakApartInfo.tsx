// 전체 부실아파트 종합 정보 컴포넌트

import styles from "./WholeWeakApartInfo.module.scss";
import WeakMainNews from "../WeakMainNews/WeakMainNews";
import WeakBuildRank from "./WeakBuildRank";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailWeakRankInfo from "./DetailWeakRankInfo";

export default function WholeWeakApartInfo() {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  return (
    <section className={styles.weakRight}>
      <div className={styles.mobileDetailWeakBuilderChart}>
        {isDetailInfo ? (
          <DetailWeakRankInfo mobile={true} />
        ) : (
          <>
            <WeakBuildRank />
            <WeakMainNews />
          </>
        )}
      </div>
      <div className={styles.wholeWeakApartInfo}>
        <WeakBuildRank />
        <WeakMainNews />
      </div>
    </section>
  );
}
