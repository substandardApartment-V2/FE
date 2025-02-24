//아파트 기본 정보 컴포넌트

import styles from "./ApartGeneralInfo.module.scss";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { transformedArrayHandler } from "@/utils/mapping/TransFormedArray";
import ApartAmenities from "./ApartAmenitiesInfo";
import ApartEtcInfo from "./ApartEtcInfo";

export default function ApartGeneralInfo() {
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const transformedArray = transformedArrayHandler(apartInfo?.etcInfo);

  return (
    <ul className={styles.apartGeneralInfo}>
      {/* 부대복리시설 영역 */}
      <ApartAmenities />
      {/* 부대복리시설 제외 영역 */}
      {transformedArray.map(
        (listData, index) =>
          listData.title !== "amenities" && (
            <ApartEtcInfo key={index} listData={listData} />
          )
      )}
    </ul>
  );
}
