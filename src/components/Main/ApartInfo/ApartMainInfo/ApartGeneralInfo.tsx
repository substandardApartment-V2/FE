import styles from "./ApartGeneralInfo.module.scss";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import {
  amenitiesIconMapping,
  apartEtcInfoTitleMapping,
} from "@/utils/mapping/ApartGeneralInfo";
import { TAmenities } from "@/types/TMain/TApartGeneralInfoTypes";
import { transformedArrayHandler } from "@/utils/mapping/TransFormedArray";
import { Tooltip } from "react-tooltip";

export default function ApartGeneralInfo() {
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const transformedArray = transformedArrayHandler(apartInfo?.etcInfo);

  return (
    <ul className={styles.apartGeneralInfo}>
      {/* 부대복리시설 영역 */}
      <li>
        <div className={styles.title}>
          <strong>부대복리시설</strong>
          <img
            src={apartEtcInfoTitleMapping.amenities.icon}
            alt="apart amenity Icon"
          />
        </div>
        <ul className={styles.amenities}>
          {apartInfo?.etcInfo.amenities.map((listData: TAmenities, index) => {
            return (
              <li key={index}>
                <img
                  src={amenitiesIconMapping[listData]}
                  alt="apart amenities Icon"
                />
                <span>{listData}</span>
              </li>
            );
          })}
        </ul>
      </li>
      {/* 부대복리시설 제외 영역 */}
      {transformedArray.map(
        (listData, index) =>
          listData.title !== "amenities" && (
            <li key={index}>
              <div className={styles.title}>
                <strong>
                  {apartEtcInfoTitleMapping[listData.title].title}
                </strong>
                <img
                  src={apartEtcInfoTitleMapping[listData.title].icon}
                  alt="apart etc info icon"
                />
              </div>
              <span
                className={styles.content}
                data-tooltip-id="generalInfo"
                data-tooltip-html={`${listData.data}`}
              >
                {listData.data}
              </span>
              <Tooltip
                className={styles.tooltip}
                id="generalInfo"
                clickable={true}
                place="top"
                style={{
                  background: "#ffffff",
                  color: "#142337",
                  borderRadius: 0,
                }}
              />
            </li>
          )
      )}
    </ul>
  );
}
