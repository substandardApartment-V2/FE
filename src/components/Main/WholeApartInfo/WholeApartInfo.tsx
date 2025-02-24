// 전체 아파트 종합 정보 컴포넌트

import styles from "./WholeApartInfo.module.scss";
import CurrentApartsStatus from "./CurrentApartsStatus/CurrentApartsStatus";
import ServiceNotice from "./ServiceNotice/ServiceNotice";

export default function WholeApartInfo() {
  return (
    <section className={styles.homeRight}>
      <CurrentApartsStatus />
      <ServiceNotice />
    </section>
  );
}
