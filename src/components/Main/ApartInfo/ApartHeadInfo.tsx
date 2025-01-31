import styles from "./ApartHeadInfo.module.scss";
import zipCodeIcon from "@/assets/Main/ApartInfo/zipCodeIcon.svg";

export default function ApartHeadInfo() {
  return (
    <section className={styles.apartHeadInfo}>
      <div className={styles.apartNameLocation}>
        <strong className={styles.apartName}>롯데캐슬 베네치아</strong>
        <div className={styles.apartLocation}>
          <span className={styles.apartRegion}>
            서울특별시 중구 황학동 2545 롯데캐슬베네치아
          </span>
          <div className={styles.apartZipCode}>
            <img src={zipCodeIcon} alt="apart zipcode icon" />
            <span>04572</span>
          </div>
        </div>
      </div>
    </section>
  );
}
