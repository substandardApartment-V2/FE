import styles from "./StatusList.module.scss";
import { TCurrentApartsStatusList } from "@/types/TMain/TCurrentApartsStatusListTypes";
import detailInfoIcon from "@/assets/Main/ApartInfo/detailInfoIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function StatusList(props: TCurrentApartsStatusList) {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  return (
    <li className={styles.statusList}>
      <div className={styles.listTitle}>
        <h3 className={styles.listMainTitle}>{props.title}</h3>
        <h4 className={styles.listSubTitle}>{props.subTitle}</h4>
      </div>
      <div className={styles.listContent}>
        <span>{props.content}</span>
        {props.title === "전국 최저 관리비 아파트" && (
          <button
            className={styles.detailApartInfo}
            onClick={() => {
              if (isDetailInfo) {
                setIsDetailInfo(null);
              } else {
                setIsDetailInfo("APARTINFO");
              }
            }}
            tabIndex={2}
          >
            <img src={detailInfoIcon} />
          </button>
        )}
      </div>
    </li>
  );
}
