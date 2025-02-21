// 네이버 지도 로딩 컴포넌트

import styles from "./MapLoading.module.scss";

export default function MapLoading() {
  return (
    <section className={styles.mapLoading}>
      <div className={styles.loadingCircle} />
      <div className={styles.loadingCircle} />
      <div className={styles.loadingCircle} />
    </section>
  );
}
