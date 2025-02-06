import styles from "./ServiceNoticeList.module.scss";
import { TServiceNoticeList } from "@/types/TMain/TServiceNoticeList";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function ServiceNoticeList(props: TServiceNoticeList) {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  return (
    <li
      className={styles.noticeList}
      onClick={() => {
        setIsDetailInfo("NOTICE");
      }}
    >
      <div className={styles.noticeListTitle}>
        <strong>{props.title}</strong>
        <span>{props.date}</span>
      </div>
      <div className={styles.noticeListContent}>{props.content}</div>
    </li>
  );
}
