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

export default function WeakApartInfo() {
  const weakApartInfo = useWeakApartInfoStore((state) => state.weakApartInfo);

  const transformedBasicInfoArray = transformedArrayHandler(
    weakApartInfo?.basicInfo
  );
  const transformedBuildInfoArray = transformedArrayHandler(
    weakApartInfo?.bulidInfo
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
      />
      <section className={styles.weakApartInfo}>
        <section className={styles.apartInfo}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <strong>기본정보</strong>
              <img src={weakInfoIcon} alt="welfare facilities" />
            </div>
            <div className={styles.goBack}>
              <strong>뒤로가기</strong>
              <button>
                <img src={goBackIcon} alt="welfare facilities" />
              </button>
            </div>
          </div>
          <ul className={styles.contentContainer}>
            {transformedBasicInfoArray.map((listData) => (
              <li>
                <strong>{weakBasicInfoTitleMapping[listData.title]}</strong>
                <span>{listData.data}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.weakInfo}>
          <section className={styles.pillarStatus}>
            <div className={styles.title}>
              <strong>기둥설치현황</strong>
              <img src={pillarIcon} alt="apart pillar current status" />
            </div>
            <ul className={styles.contentContainer}>
              {transformedBuildInfoArray.map((listData) => (
                <li>
                  <strong>{weakBuildInfoTitleMapping[listData.title]}</strong>
                  <span>{listData.data}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.supplementMethod}>
            <div className={styles.title}>
              <strong>보완공법</strong>
              <img src={pillarIcon} alt="apart supplement method" />
            </div>
            <ul className={styles.contentContainer}>
              {transformedSplmnInfoArray.map((listData, index) => (
                <li key={index}>
                  <strong>{weakSplmnInfoTitleMapping[listData.title]}</strong>
                  <span>{listData.data}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
}
