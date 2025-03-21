// 부실아파트 정보 컴포넌트

import styles from "./WeakApartInfo.module.scss";
import ApartHeadInfo from "@/components/Main/ApartInfo/ApartHeadInfo";
import weakInfoIcon from "@/assets/Main/ApartInfo/weakInfoIcon.svg";
import goBackIcon from "@/assets/Main/ApartInfo/goBackIcon.svg";
import pillarIcon from "@/assets/Main/ApartInfo/structureIcon.svg";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import { transformedArrayHandler } from "@/utils/mapping/TransFormedArray";
import {
  weakBasicInfoTitleMapping,
  weakBuildInfoTitleMapping,
  weakSplmnInfoTitleMapping,
} from "@/utils/mapping/WeakApartInfo";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { resetSelectMarker } from "@/utils/map/resetSelectMarker";

export default function WeakApartInfo() {
  const weakApartInfo = useWeakApartInfoStore((state) => state.weakApartInfo);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);

  const transformedBasicInfoArray = transformedArrayHandler(
    weakApartInfo?.basicInfo
  );
  const transformedBuildInfoArray = transformedArrayHandler(
    weakApartInfo?.buildInfo
  );
  const transformedSplmnInfoArray = transformedArrayHandler(
    weakApartInfo?.splmnInfo
  );

  return (
    <section className={styles.weakApartInfoContainer}>
      <ApartHeadInfo
        apartName={weakApartInfo?.aptInfo.name}
        apartRegion={weakApartInfo?.aptInfo.address}
        zipCode={weakApartInfo?.aptInfo.zipCode}
        mobile={true}
      />
      <section className={styles.weakApartInfo}>
        <section className={styles.apartInfo}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <strong>기본정보</strong>
              <img src={weakInfoIcon} alt="부실아파트 기본정보" />
            </div>
            <button
              className={styles.goBack}
              onClick={() => {
                setMainInfo("WHOLE");
                resetSelectMarker();
              }}
            >
              <span>뒤로가기</span>
              <img src={goBackIcon} alt="뒤로가기" />
            </button>
          </div>
          <ul className={styles.contentContainer}>
            {transformedBasicInfoArray.map((listData, index) => (
              <li key={index}>
                <strong>{weakBasicInfoTitleMapping[listData.title]}</strong>
                <span>{listData.data ? listData.data : "정보없음"}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.weakInfo}>
          <section className={styles.pillarStatus}>
            <div className={styles.title}>
              <strong>기둥설치현황</strong>
              <img src={pillarIcon} alt="기둥설치현황" />
            </div>
            <ul className={styles.contentContainer}>
              {transformedBuildInfoArray.map((listData, index) => (
                <li key={index}>
                  <strong>{weakBuildInfoTitleMapping[listData.title]}</strong>
                  <span>{listData.data ? listData.data : "정보없음"}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.supplementMethod}>
            <div className={styles.title}>
              <strong>보완공법</strong>
              <img src={pillarIcon} alt="보완공법" />
            </div>
            <ul className={styles.contentContainer}>
              {transformedSplmnInfoArray.map((listData, index) => (
                <li key={index}>
                  <strong>{weakSplmnInfoTitleMapping[listData.title]}</strong>
                  <span>{listData.data ? listData.data : "정보없음"}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
}
