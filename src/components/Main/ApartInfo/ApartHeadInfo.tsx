// 아파트 기본 정보 헤더 컴포넌트

import styles from "./ApartHeadInfo.module.scss";
import zipCodeIcon from "@/assets/Main/ApartInfo/zipCodeIcon.svg";
import backIcon from "@/assets/Main/DetailInfo/backIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { resetSelectMarker } from "@/utils/map/resetSelectMarker";

type TApartHeadInfo = {
  apartName?: string;
  apartRegion?: string;
  zipCode?: string;
  mobile?: boolean;
};

export default function ApartHeadInfo(props: TApartHeadInfo) {
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const weakApartInfo = useWeakApartInfoStore((state) => state.weakApartInfo);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const { apartSeparate } = useLocationPath();

  return (
    <section
      className={
        props.mobile ? styles.mobileApartHeadInfo : styles.apartHeadInfo
      }
    >
      <div
        className={
          props.mobile
            ? styles.mobileApartNameLocation
            : styles.apartNameLocation
        }
      >
        <div className={styles.apartName}>
          <span>{props.apartName}</span>
          {(isDetailInfo || weakApartInfo) && (
            <button
              onClick={() => {
                if (apartSeparate === "defect") {
                  setMainInfo("WHOLE");
                  resetSelectMarker();
                } else {
                  setIsDetailInfo(null);
                }
              }}
            >
              <img src={backIcon} alt="뒤로가기" />
            </button>
          )}
        </div>
        <div className={styles.apartLocation}>
          <span className={styles.apartRegion}>{props.apartRegion}</span>
          <div className={styles.apartZipCode}>
            <img src={zipCodeIcon} alt="apart zipcode icon" />
            <span>{props.zipCode}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
