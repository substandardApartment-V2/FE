import styles from "./DetailApartInfoList.module.scss";
import buildingIcon from "@/assets/Main/ApartInfo/buildingIcon.svg";
import classNames from "classnames";

type TDetailApartInfoList = {
  title: string;
  data: any;
  detailData?: any;
};

export default function DetailApartInfoList(props: TDetailApartInfoList) {
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
      <div>
        <ul className={classNames(styles.contents, contentsStyle)}>
          {Object.keys(props.data).map((key) => (
            <li className={classNames(styles.contentList, contentsStyle)}>
              <div className={styles.subTitle}>{key}</div>
              <div className={styles.subContent}>{props.data[key]}</div>
            </li>
          ))}
        </ul>
        {props.detailData && (
          <div className={styles.chargeDetail}>
            <span>충전시설상세</span>
            <ul className={styles.chargeDetailLists}>
              {props.detailData.map((listData: any) => (
                <li className={styles.chargeDetailList}>
                  <span>지상</span>
                  <p>{listData}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </li>
  );
}
