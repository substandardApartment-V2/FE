import styles from "./StatusList.module.scss";
import { TCurrentApartsStatusList } from "@/types/TMain/TCurrentApartsStatusList";

export default function StatusList(props: TCurrentApartsStatusList) {
  return (
    <li className={styles.statusList}>
      <div className={styles.listTitle}>
        <div className={styles.listMainTitle}>{props.title}</div>
        <div className={styles.listSubTitle}>{props.subTitle}</div>
      </div>
      <div className={styles.listContent}>{props.content}</div>
    </li>
  );
}
