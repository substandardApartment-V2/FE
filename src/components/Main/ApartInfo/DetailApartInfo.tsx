import styles from "./DetailApartInfo.module.scss";
import buildingIcon from "@/assets/Main/ApartInfo/buildingIcon.svg";

export default function DetailApartInfo() {
  return (
    <div className={styles.detailApartInfo}>
      <div className={styles.building}>
        <div className={styles.title}>
          건물 <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>최고층 수</div>
            <div className={styles.subContent}>33</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하층 수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          외부인 개방여부 <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>최고층 수</div>
            <div className={styles.subContent}>33</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하층 수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          주차 대수 <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>최고층 수</div>
            <div className={styles.subContent}>33</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하층 수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          전기차 <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>최고층 수</div>
            <div className={styles.subContent}>33</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하층 수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          소독관리 <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>최고층 수</div>
            <div className={styles.subContent}>33</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하층 수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          경비관리 <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>최고층 수</div>
            <div className={styles.subContent}>33</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하층 수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          청소관리 <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>최고층 수</div>
            <div className={styles.subContent}>33</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하층 수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.title}>
          일반관리 <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>최고층 수</div>
            <div className={styles.subContent}>33</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하층 수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
