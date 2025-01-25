import styles from "./ApartHouseholdInfoList.module.scss";
import { TApartBuildInfoList } from "@/types/TMain/TApartBuildInfoList";

export default function ApartHouseHoldInfoList(props: TApartBuildInfoList) {
  return (
    <li className={styles.apartHouseholdInfoList}>
      <strong>{props.title}</strong>
      <span>{props.content}</span>
    </li>
  );
}
