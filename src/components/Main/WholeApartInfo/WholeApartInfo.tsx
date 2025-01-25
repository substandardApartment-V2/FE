import styles from "./WholeApartInfo.module.scss";
import CurrentApartsStatus from "./CurrentApartsStatus/CurrentApartsStatus";
import ApartSearch from "@/components/Common/ApartSearch";
import ServiceNotice from "./ServiceNotice/ServiceNotice";

export default function WholeApartInfo() {
  return (
    <section className={styles.homeRight}>
      <ApartSearch />
      <CurrentApartsStatus />
      <ServiceNotice />
    </section>
  );
}
