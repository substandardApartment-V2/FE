import styles from "./NoticeDetail.module.scss";
import closeIcon from "@/assets/Main/ApartInfo/closeButtonIconD.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function NoticeDetail() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

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
        <div className={styles.date}>일주일 전</div>
        <div className={styles.title}>
          타이틀 테스트입니다. 타이틀 테스트입니다. 타이틀 테스트입니다. 타이틀
          테스트입니다. 타이틀 테스트입니다. 타이틀 테스트입니다.{" "}
        </div>
      </div>
      <div className={styles.content}>
        사이트 긴급점검 시간 공지드립니다. 사이트 긴급점검 시간 공지드립니다.
        사이트 긴급점검 시간 공지드립니다. 사이트 긴급점검 시간 공지드립니다.
        사이트 긴급점검 시간 공지드립니다. 사이트 긴급점검 시간 공지드립니다.
        사이트 긴급점검 시간 공지드립니다. 사이트 긴급점검 시간 공지드립니다.
        사이트 긴급점검 시간 공지드립니다. 사이트 긴급점검 시간 공지드립니다.
        사이트 긴급점검 시간 공지드립니다. 사이트 긴급점검 시간 공지드립니다.
        사이트 긴급점검 시간 공지드립니다. 사이트 긴급점검 시간 공지드립니다.
      </div>
      <div className={styles.advertisement}>광고</div>
    </div>
  );
}
