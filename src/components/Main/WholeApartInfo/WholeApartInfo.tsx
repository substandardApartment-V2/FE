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
