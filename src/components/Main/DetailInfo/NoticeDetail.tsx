import React from "react";
import styles from "./NoticeDetail.module.scss";
import closeIcon from "@/assets/Main/ApartInfo/closeButtonIconD.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useNoticeStore } from "@/store/useNoticeStore";

export default function NoticeDetail() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const noticeInfo = useNoticeStore((state) => state.noticeInfo);

  return (
    <div className={styles.noticeDetail}>
      <div className={styles.closeNoticeDetail}>
        <button>
          <img
            src={closeIcon}
            alt="close notice detail"
            onClick={() => setIsDetailInfo(null)}
          />
        </button>
      </div>
      <div className={styles.noticeTitle}>
        <div className={styles.date}>{noticeInfo?.createAt}</div>
        <div className={styles.title}>{noticeInfo?.title}</div>
      </div>
      <div className={styles.content}>
        {noticeInfo?.content.split("\\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
      <div className={styles.advertisement}>광고</div>
    </div>
  );
}
