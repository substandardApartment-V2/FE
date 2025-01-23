import styles from "./DetailApartInfo.module.scss";
import buildingIcon from "@/assets/Main/ApartInfo/buildingIcon.svg";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIconD.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function DetailApartInfo() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  return (
    <section className={styles.building}>
      <button
        onClick={() => {
          setIsDetailInfo(null);
        }}
      >
        <img src={closeButtonIcon} alt="close icon" />
      </button>
      <section>
        <div className={styles.title}>
          <span>건물</span>
          <img src={buildingIcon} alt="building icon" />
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
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>승강기 수(동 단위)</div>
            <div className={styles.subContent}>20</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>건물구조 방식</div>
            <div className={styles.subContent}>벽식구조</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <span>외부인 개방여부</span>
          <img src={buildingIcon} alt="building icon" />
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
      </section>
      <section>
        <div className={styles.title}>
          <span>주차 대수</span>
          <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>지상</div>
            <div className={styles.subContent}>1959</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <span>전기차</span>
          <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>지상 충전시설 대수</div>
            <div className={styles.subContent}>89</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하 충전시설 대수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>지상전용 주차면수</div>
            <div className={styles.subContent}>39</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>지하전용 주차면수</div>
            <div className={styles.subContent}>0</div>
          </div>
        </div>
        <div className={styles.chargeDetail}>
          <span>충전시설상세</span>
          <ul className={styles.chargeDetailLists}>
            <li className={styles.chargeDetailList}>
              <span>지상</span>
              <p>스탠드형 충전기 | AC3상 7핀 | 급속 | 2 | 한국전력 |</p>
            </li>
            <li className={styles.chargeDetailList}>
              <span>지상</span>
              <p>스탠드형 충전기 | AC3상 7핀 | 급속 | 2 | 한국전력 |</p>
            </li>
            <li className={styles.chargeDetailList}>
              <span>지상</span>
              <p>스탠드형 충전기 | AC3상 7핀 | 급속 | 2 | 한국전력 |</p>
            </li>
            <li className={styles.chargeDetailList}>
              <span>지상</span>
              <p>벽부형 충전기 | AC3상 5핀 | 완속 | 2 | 이카플러그그그 |</p>
            </li>
            <li className={styles.chargeDetailList}>
              <span>지상</span>
              <p>
                스탠드형 충전기 | AC3상 7핀 | 급속 | 2 | 한국전력 | 한국전력 |
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <span>소독관리</span>
          <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>관리 방식</div>
            <div className={styles.subContent}>분무식, 독이식</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>계약업체</div>
            <div className={styles.subContent}>X</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>연간 소독 횟수</div>
            <div className={styles.subContent}>12</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <span>경비관리</span>
          <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>관리 방식</div>
            <div className={styles.subContent}>위탁관리</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>계약업체</div>
            <div className={styles.subContent}>케이티팝스</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>인원</div>
            <div className={styles.subContent}>15</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <span>청소관리</span>
          <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>관리 방식</div>
            <div className={styles.subContent}>위탁관리</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>계약업체</div>
            <div className={styles.subContent}>광인산업(주)</div>
          </div>
          <div className={styles.content}>
            <div className={styles.subTitle}>음식물 처리방식</div>
            <div className={styles.subContent}>위탁관리</div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.title}>
          <span>일반관리</span>
          <img src={buildingIcon} alt="building icon" />
        </div>
        <div className={styles.contents}>
          <div className={styles.content}>
            <div className={styles.subTitle}>인원</div>
            <div className={styles.subContent}>15</div>
          </div>
        </div>
      </section>
    </section>
  );
}
