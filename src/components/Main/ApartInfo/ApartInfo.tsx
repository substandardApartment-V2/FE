import styles from "./ApartInfo.module.scss";
import detailButtonIconD from "@/assets/Main/ApartInfo/detailButtonIconD.svg";
import ApartSearch from "@/components/Common/ApartSearch/ApartSearch";
import ApartHeadInfo from "./ApartHeadInfo";
import ApartBuildInfo from "./ApartMainInfo/ApartBuildInfo/ApartBuildInfo";
import ApartPrice from "./ApartMainInfo/ApartPrice";
import ApartMaintanceCharge from "./ApartMainInfo/ApartMaintanceCharge";
import ApartGeneralInfo from "./ApartMainInfo/ApartGeneralInfo";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import { useMainInfoStore } from "@/store/useMainInfoStore";
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
      `${import.meta.env.VITE_LOCAL_API_CALL}/apt/detail?id=${
        apartInfo?.detailId
      }`
    );
    setApartDetailInfo(data.data);
  };

  return (
    <section className={styles.apartInfoContainer}>
      <ApartSearch />
      {apartInfo && (
        <ApartHeadInfo
          apartName={apartInfo.name}
          apartRegion={apartInfo.roadAddress}
          zipCode={apartInfo.zipCode}
        />
      )}
      <section className={styles.apartMainInfo}>
        <ApartBuildInfo />
        <ApartPrice />
        <ApartMaintanceCharge />
        <ApartGeneralInfo />
      </section>
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
    </section>
  );
}
