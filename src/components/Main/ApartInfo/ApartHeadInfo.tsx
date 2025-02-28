// 아파트 기본 정보 헤더 컴포넌트

import styles from "./ApartHeadInfo.module.scss";
import zipCodeIcon from "@/assets/Main/ApartInfo/zipCodeIcon.svg";
import backIcon from "@/assets/Main/DetailInfo/backIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useMarkerStore } from "@/store/useMarkerStore";
import mapMarkerIcon from "@/assets/Main/Map/MapMarkerIcon.svg";

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
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const path = useLocationPath();
  const selectMarker = useMarkerStore((state) => state.selectMarker);
  const setSelectMarker = useMarkerStore((state) => state.setSelectMarker);

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
                if (path === "defect") {
                  // weakApartInfo.tsx 재사용함수 정의
                  setMainInfo("WHOLE");
                  if (selectMarker) {
                    selectMarker.setIcon({
                      url: mapMarkerIcon,
                      size: new naver.maps.Size(35, 40),
                      scaledSize: new naver.maps.Size(35, 40),
                      origin: new naver.maps.Point(0, 0),
                      anchor: new naver.maps.Point(12, 34),
                    });
                    setSelectMarker(null);
                    setWeakApartInfo(null);
                  }
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
