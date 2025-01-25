import styles from "./CurrentApartsStatus.module.scss";

export default function CurrentApartsStatus() {
  return (
    <section className={styles.currentApartStatus}>
      <h2 className={styles.title}>아파트 근황</h2>
      <div className={styles.averageSellingPrice}>
        <div className={styles.listTitle}>
          <div className={styles.listMainTitle}>전국 아파트 평균 매매가</div>
          <div className={styles.listSubTitle}>12월 한달</div>
        </div>
        <div className={styles.listContent}>6억 8500만원</div>
      </div>
      <div className={styles.averageSellingPrice}>
        <div className={styles.listTitle}>
          <div className={styles.listMainTitle}>전국 아파트 수</div>
          <div className={styles.listSubTitle}>2022년 7월 기준</div>
        </div>
        <div className={styles.listContent}>11,661,851 곳</div>
      </div>
      <div className={styles.averageSellingPrice}>
        <div className={styles.listTitle}>
          <div className={styles.listMainTitle}>전국 건설 예정 아파트 </div>
          <div className={styles.listSubTitle}>2025년 2월 기준</div>
        </div>
        <div className={styles.listContent}>87 곳</div>
      </div>
      <div className={styles.averageSellingPrice}>
        <div className={styles.listTitle}>
          <div className={styles.listMainTitle}>전국 최저 관리비 아파트</div>
          <div className={styles.listSubTitle}>울산시 북구 화봉동</div>
        </div>
        <div className={styles.listContent}>
          <span>동아 청구 아파트</span>
          <button>
            <img />
          </button>
        </div>
      </div>
    </section>
  );
}
