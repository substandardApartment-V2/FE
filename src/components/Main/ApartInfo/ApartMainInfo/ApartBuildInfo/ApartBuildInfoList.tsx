// 아파트 건설사, 시공사 정보 리스트 컴포넌트

import styles from "./ApartBuildInfoList.module.scss";
import { TApartBuildInfoList } from "@/types/TMain/TApartBuildInfoListTypes";
import { apartBuildInfoTitleMapping } from "@/utils/mapping/ApartBuildInfo";

export default function ApartBuildInfoList(props: TApartBuildInfoList) {
  return (
    <li className={styles.apartBulidInfoList}>
      <strong>{props.title && apartBuildInfoTitleMapping[props.title]}</strong>
      <span>{props.data ? props.data : "정보없음"}</span>
    </li>
  );
}
