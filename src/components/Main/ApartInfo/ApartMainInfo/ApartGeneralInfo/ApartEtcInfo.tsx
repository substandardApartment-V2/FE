// 아파트 기본 기타 정보 컴포넌트

import styles from "./ApartEtcInfo.module.scss";
import { apartEtcInfoTitleMapping } from "@/utils/mapping/ApartGeneralInfo";
import { Tooltip } from "react-tooltip";
import {
  TAmenities,
  TEtcInfoTitle,
} from "@/types/TMain/TApartGeneralInfoTypes";

type TListData = {
  title: TEtcInfoTitle;
  data: number | string | TAmenities[];
};

type TApartEtcInfo = {
  listData: TListData;
};

export default function ApartEtcInfo(props: TApartEtcInfo) {
  return (
    <li className={styles.apartEtcInfo}>
      <div className={styles.title}>
        <strong>{apartEtcInfoTitleMapping[props.listData.title].title}</strong>
        <img
          src={apartEtcInfoTitleMapping[props.listData.title].icon}
          alt="apart etc info icon"
        />
      </div>
      <span
        className={styles.content}
        data-tooltip-id="generalInfo"
        data-tooltip-html={`${props.listData.data}`}
      >
        {props.listData.data ? props.listData.data : "정보없음"}
      </span>
      <Tooltip
        className={styles.tooltip}
        id="generalInfo"
        clickable={true}
        place="top"
        style={{
          background: "#ffffff",
          color: "#142337",
          borderRadius: 0,
        }}
      />
    </li>
  );
}
