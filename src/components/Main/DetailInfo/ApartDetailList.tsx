import styles from "./ApartDetailList.module.scss";
import buildingIcon from "@/assets/Main/ApartInfo/buildingIcon.svg";
import classNames from "classnames";
import { TEvChargingFacilitiesDetails } from "@/store/useApartInfoStore";

type TApartDetailList = {
  title: string;
  data: any; //데이터 형식 미정의
};

export default function ApartDetailList(props: TApartDetailList) {
  const contentsStyle =
    Object.keys(props.data).length === 2 || Object.keys(props.data).length === 4
      ? styles.even
      : styles.odd;

  return (
    <li>
      <div className={styles.title}>
        <h3>{props.title}</h3>
        <img src={buildingIcon} alt="building icon" />
      </div>
      <div className={styles.contents}>
        <ul className={classNames(styles.contentsListContainer, contentsStyle)}>
          {Object.keys(props.data).map((key, index) => (
            <li
              className={classNames(styles.contentList, contentsStyle)}
              key={index}
            >
              <div className={styles.subTitle}>{key}</div>
              <div className={styles.subContent}>
                {JSON.stringify(props.data[key])}
              </div>
            </li>
          ))}
        </ul>
        {props.data.evChargingFacilitiesDetails && (
          <div className={styles.chargeDetail}>
            <span>충전시설상세</span>
            <ul className={styles.chargeDetailLists}>
              {props.data.evChargingFacilitiesDetails.map(
                (listData: TEvChargingFacilitiesDetails, index: number) => (
                  <li className={styles.chargeDetailList} key={index}>
                    <span>{listData.location}</span>
                    <p>{listData.type}</p>
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
