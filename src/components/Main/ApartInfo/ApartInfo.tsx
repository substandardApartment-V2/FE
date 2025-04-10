// 아파트 기본정보 컴포넌트

import styles from "./ApartInfo.module.scss";
import detailButtonIconD from "@/assets/Main/ApartInfo/detailButtonIconD.svg";
import ApartHeadInfo from "./ApartHeadInfo";
import ApartBuildInfo from "./ApartMainInfo/ApartBuildInfo/ApartBuildInfo";
import ApartMaintanceCharge from "./ApartMainInfo/ApartMaintanceCharge";
import ApartGeneralInfo from "./ApartMainInfo/ApartGeneralInfo/ApartGeneralInfo";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import DetailInfo from "../DetailInfo/DetailInfo";
import getApartData from "@/utils/api/getApartData";

export default function ApartInfo() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);
  const setApartDetailInfo = useApartInfoStore(
    (state) => state.setApartDetailInfo
  );
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const apartDetailApiHandler = async () => {
    const data = await getApartData(
      `${import.meta.env.VITE_SERVER_API_CALL}/apt/detail?id=${
        apartInfo?.aptInfo.detailId
      }`
    );
    setApartDetailInfo(data.data);
  };

  return (
    <section className={styles.apartInfo}>
      {isDetailInfo && (
        <section className={styles.detailInfoContainer}>
          <DetailInfo />
        </section>
      )}
      <section className={styles.apartInfoContainer}>
        {apartInfo && (
          <ApartHeadInfo
            apartName={apartInfo.aptInfo.name}
            apartRegion={apartInfo.aptInfo.roadAddress}
            zipCode={apartInfo.aptInfo.zipCode}
          />
        )}
        <section className={styles.apartMainInfo}>
          <ApartBuildInfo />
          <ApartMaintanceCharge />
          <ApartGeneralInfo />
        </section>
        {apartInfo?.aptInfo.detailId && (
          <button
            className={styles.detailApartInfoButton}
            onClick={() => {
              if (isDetailInfo === "APARTINFO") setIsDetailInfo(null);
              else {
                setIsDetailInfo("APARTINFO");
                apartDetailApiHandler();
              }
            }}
          >
            <img src={detailButtonIconD} alt="apart detail button" />
            자세히보기
          </button>
        )}
      </section>
    </section>
  );
}
