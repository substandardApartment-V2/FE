// 아파트 상세정보 개별 리스트 컴포넌트

import styles from "./ApartDetailList.module.scss";
import classNames from "classnames";
import {
  TEvChargingFacilitiesDetails,
  TTitle,
  TSubTitle,
  TApartDetailInfoList,
} from "@/types/TMain/TApartDetailInfoTypes";
import { titleMapping } from "@/utils/mapping/ApartDetailInfo";

type TApartDetailList = {
  title: TTitle;
  data: TApartDetailInfoList;
};

export default function ApartDetailList({ title, data }: TApartDetailList) {
  const contentsStyle =
    data && [2, 4, 5].includes(Object.keys(data).length)
      ? styles.even
      : styles.odd;

  return (
    <li>
      <div className={styles.title}>
        <h3>{titleMapping[title] && titleMapping[title].title}</h3>
        <img
          src={titleMapping[title] && titleMapping[title].icon}
          alt="building icon"
        />
      </div>
      <div className={styles.contents}>
        <ul className={classNames(styles.contentsListContainer, contentsStyle)}>
          {data &&
            Object.keys(data).map((key, index) =>
              key !== "evChargingFacilitiesDetails" ? (
                <li
                  className={classNames(styles.contentList, contentsStyle)}
                  key={index}
                >
                  <div className={styles.subTitle}>
                    {titleMapping[title] &&
                      titleMapping[title].subTitle[
                        key as keyof TSubTitle[TTitle]
                      ]}
                  </div>
                  <div className={styles.subContent}>
                    {title === "accessibleToPublic"
                      ? data[key as keyof typeof data]
                        ? "O"
                        : "X"
                      : String(data[key as keyof typeof data])}
                  </div>
                </li>
              ) : null
            )}
        </ul>
        {data?.evChargingFacilitiesDetails &&
          data.evChargingFacilitiesDetails && (
            <div className={styles.chargeDetail}>
              <span>충전시설상세</span>
              <ul className={styles.chargeDetailLists}>
                {data.evChargingFacilitiesDetails.map(
                  (listData: TEvChargingFacilitiesDetails, index: number) => (
                    <li className={styles.chargeDetailList} key={index}>
                      <span>{listData.location}</span>
                      <p>
                        {listData.type} | {listData.connector} |{" "}
                        {listData.chargingSpeed} | {listData.count} |{" "}
                        {listData.provider}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
      </div>
    </li>
  );
}
