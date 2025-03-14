// 네이버 지도 컨테이너 컴포넌트

import styles from "./ApartMapContainer.module.scss";
import ApartSearch from "../Common/ApartSearch/ApartSearch";
import ApartMap from "./ApartMap/ApartMap";

export default function ApartMapContainer() {
  return (
    <section className={styles.apartMap}>
      <div className={styles.apartSearch}>
        <ApartSearch />
      </div>
      <ApartMap />
    </section>
  );
}
