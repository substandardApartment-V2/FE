// 아파트 상세 정보 컴포넌트

import styles from "./ApartDetail.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIconD.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import ApartDetailList from "./ApartDetailList";
import { transformedArrayHandler } from "@/utils/mapping/TransFormedArray";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import ApartHeadInfo from "../ApartInfo/ApartHeadInfo";

export default function ApartDetail() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const apartDetailInfo = useApartInfoStore((state) => state.apartDetailInfo);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const transformedArray = transformedArrayHandler(apartDetailInfo);

  return (
    <section className={styles.building}>
      <div className={styles.mobileApartHeadInfo}>
        <ApartHeadInfo
          apartName={apartInfo?.aptInfo.name}
          apartRegion={apartInfo?.aptInfo.roadAddress}
          zipCode={apartInfo?.aptInfo.zipCode}
          mobile={true}
        />
      </div>
      <button
        onClick={() => {
          setIsDetailInfo(null);
          setMainInfo("SELECT");
        }}
      >
        <img src={closeButtonIcon} alt="close icon" />
      </button>
      <ul>
        {transformedArray.map((listData, index) => (
          <ApartDetailList
            key={index}
            title={listData.title}
            data={listData.data}
          />
        ))}
      </ul>
    </section>
  );
}
