import React from "react";
import styles from "./ServiceNoticeList.module.scss";
import { TServiceNoticeList } from "@/types/TMain/TServiceNoticeListTypes";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useNoticeStore } from "@/store/useNoticeStore";

export default function ServiceNoticeList(props: TServiceNoticeList) {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const setNoticeInfo = useNoticeStore((state) => state.setNoticeInfo);

  return (
    <li
      key={props.id}
      className={styles.noticeList}
      onClick={() => {
        setIsDetailInfo("NOTICE");
        setNoticeInfo(props);
      }}
    >
      <div className={styles.noticeListTitle}>
        <strong>{props.title}</strong>
        <span>{props.createAt}</span>
      </div>
      <div className={styles.noticeListContent}>
        {props.content.split("\\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </li>
  );
}
