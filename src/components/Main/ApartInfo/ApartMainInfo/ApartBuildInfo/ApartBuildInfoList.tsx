import styles from "./ApartBuildInfoList.module.scss";
import { TApartBuildInfoList } from "@/types/TMain/TApartBuildInfoListTypes";

export default function ApartBuildInfoList(props: TApartBuildInfoList) {
  return (
    <li className={styles.apartBulidInfoList}>
      <strong>{props.title}</strong>
      <span>{props.content}</span>
    </li>
  );
}
