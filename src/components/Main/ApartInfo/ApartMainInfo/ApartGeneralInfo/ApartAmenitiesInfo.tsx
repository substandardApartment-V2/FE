// 부대복리시설 컴포넌트

import styles from "./ApartAmenitiesInfo.module.scss";
import {
  amenitiesIconMapping,
  apartEtcInfoTitleMapping,
} from "@/utils/mapping/ApartGeneralInfo";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { TAmenities } from "@/types/TMain/TApartGeneralInfoTypes";

export default function ApartAmenities() {
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  return (
    <li className={styles.apartAmenities}>
      <div className={styles.title}>
        <strong>부대복리시설</strong>
        <img src={apartEtcInfoTitleMapping.amenities.icon} alt="부대복리시설" />
      </div>
      <ul className={styles.amenities}>
        {apartInfo?.etcInfo.amenities ? (
          apartInfo?.etcInfo.amenities.map((listData: TAmenities, index) => {
            return (
              <li key={index}>
                <img
                  src={amenitiesIconMapping[listData]}
                  alt="apart amenities Icon"
                />
                <span>{listData}</span>
              </li>
            );
          })
        ) : (
          <li>정보없음</li>
        )}
      </ul>
    </li>
  );
}
