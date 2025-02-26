// 전국 아파트 종합 정보 리스트 컴포넌트

import styles from "./StatusList.module.scss";
import { TCurrentApartsStatusList } from "@/types/TMain/TCurrentApartsStatusListTypes";

export default function StatusList(props: TCurrentApartsStatusList) {
  return (
    <li className={styles.statusList}>
      <div className={styles.listTitle}>
        <h3 className={styles.listMainTitle}>{props.title}</h3>
        <h4 className={styles.listSubTitle}>{props.subTitle}</h4>
      </div>
      <div className={styles.listContent}>
        <span>{props.content}</span>
      </div>
    </li>
  );
}
