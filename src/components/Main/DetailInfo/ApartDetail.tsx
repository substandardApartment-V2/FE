// 아파트 상세 정보 컴포넌트

import styles from "./ApartDetail.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIconD.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import ApartDetailList from "./ApartDetailList";
import { transformedArrayHandler } from "@/utils/mapping/TransFormedArray";
import { useMainInfoStore } from "@/store/useMainInfoStore";

export default function ApartDetail() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const apartDetailInfo = useApartInfoStore((state) => state.apartDetailInfo);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);

  const transformedArray = transformedArrayHandler(apartDetailInfo);

  return (
    <section className={styles.building}>
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
