import styles from "./ApartHeadInfo.module.scss";
import zipCodeIcon from "@/assets/Main/ApartInfo/zipCodeIcon.svg";

type TApartHeadInfo = {
  apartName: string;
  apartRegion: string;
  zipCode: string;
};

export default function ApartHeadInfo(props: TApartHeadInfo) {
  return (
    <section className={styles.apartHeadInfo}>
      <div className={styles.apartNameLocation}>
        <strong className={styles.apartName}>{props.apartName}</strong>
        <div className={styles.apartLocation}>
          <span className={styles.apartRegion}>{props.apartRegion}</span>
          <div className={styles.apartZipCode}>
            <img src={zipCodeIcon} alt="apart zipcode icon" />
            <span>{props.zipCode}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
