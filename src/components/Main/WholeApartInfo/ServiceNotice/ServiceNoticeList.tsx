import styles from "./ServiceNoticeList.module.scss";
import { TServiceNoticeList } from "@/types/TMain/TServiceNoticeList";

export default function ServiceNoticeList(props: TServiceNoticeList) {
  return (
    <li className={styles.noticeList}>
      <div className={styles.noticeListTitle}>
        <strong>{props.title}</strong>
        <span>{props.date}</span>
      </div>
      <div className={styles.noticeListContent}>{props.content}</div>
    </li>
  );
}
