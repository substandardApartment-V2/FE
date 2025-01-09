import styles from "./Home.module.scss";
import ApartMap from "../ApartMap";
import searchIcon from "@/assets/Main/searchICon.svg";

export default function Home() {
  return (
    <section className={styles.home}>
      <section className={styles.homeRight}>
        <div className={styles.apartSearch}>
          <input
            className={styles.apartSearchInput}
            placeholder="궁금한 지역, 아파트를 검색해보세요."
          />
          <img src={searchIcon} alt="location apart search" />
        </div>
        <div className={styles.currentApartStatus}>
          <h1>아파트 근황</h1>
          <div className={styles.averageSellingPrice}>
            <div className={styles.listTitle}>
              <div className={styles.listMainTitle}>
                전국 아파트 평균 매매가
              </div>
              <div className={styles.listSubTitle}>12월 한달</div>
            </div>
            <div className={styles.listContent}>6억 8500만원</div>
          </div>
          <div className={styles.averageSellingPrice}>
            <div className={styles.listTitle}>
              <div className={styles.listMainTitle}>
                전국 아파트 평균 매매가
              </div>
              <div className={styles.listSubTitle}>12월 한달</div>
            </div>
            <div className={styles.listContent}>6억 8500만원</div>
          </div>
          <div className={styles.averageSellingPrice}>
            <div className={styles.listTitle}>
              <div className={styles.listMainTitle}>
                전국 아파트 평균 매매가
              </div>
              <div className={styles.listSubTitle}>12월 한달</div>
            </div>
            <div className={styles.listContent}>6억 8500만원</div>
          </div>
          <div className={styles.averageSellingPrice}>
            <div className={styles.listTitle}>
              <div className={styles.listMainTitle}>
                전국 아파트 평균 매매가
              </div>
              <div className={styles.listSubTitle}>12월 한달</div>
            </div>
            <div className={styles.listContent}>6억 8500만원</div>
          </div>
        </div>
        <div className={styles.serviceNotice}>
          <h1>공지사항</h1>
        </div>
      </section>
      <ApartMap />
    </section>
  );
}
