import styles from "./MapLoading.module.scss";
import classNames from "classnames";

export default function MapLoading() {
  return (
    <section>
      <span>지도를 불러오는 중입니다</span>
      <div>
        <div className={classNames(styles.circle)}></div>
        <div className={classNames(styles.circle, styles.second)}></div>
        <div className={classNames(styles.circle, styles.third)}></div>
      </div>
    </section>
  );
}
