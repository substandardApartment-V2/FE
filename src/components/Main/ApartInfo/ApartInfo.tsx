import styles from "./ApartInfo.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";
import zipCodeIcon from "@/assets/Main/ApartInfo/zipCodeIcon.svg";
import DropDown from "@/components/Abstraction/DropDown/DropDown";
import MaintanceChargeChart from "../Chart/MaintanceChargeChart";
import detailButtonIcon from "@/assets/Main/ApartInfo/detailButtonIcon.svg";
import detailButtonIconD from "@/assets/Main/ApartInfo/detailButtonIconD.svg";
import welfareIcon from "@/assets/Main/ApartInfo/welfareIcon.svg";
import childCareIcon from "@/assets/Main/ApartInfo/childCareIcon.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function ApartInfo() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  const dropDownContents = [
    {
      content: "59㎡",
      contentFn: () => {},
    },
    {
      content: "79㎡",
      contentFn: () => {},
    },
    {
      content: "118㎡",
      contentFn: () => {},
    },
  ];

  return (
    <section className={styles.apartInfoContainer}>
      <div className={styles.apartSearch}>
        <input
          className={styles.apartSearchInput}
          placeholder="궁금한 지역, 아파트를 검색해보세요."
        />
        <img src={searchIcon} alt="location apart search" />
      </div>
      <section className={styles.apartHeadInfo}>
        <div className={styles.apartNameLocation}>
          <strong className={styles.apartName}>롯데캐슬 베네치아</strong>
          <div className={styles.apartLocation}>
            <span className={styles.apartRegion}>
              서울특별시 중구 황학동 2545 롯데캐슬베네치아
            </span>
            <div className={styles.apartZipCode}>
              <img src={zipCodeIcon} alt="apart zipcode icon" />
              <span>04572</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.apartInfo}>
        <div className={styles.buildInfo}>
          <div className={styles.buildCompanyDate}>
            <div>
              <strong>준공일</strong>
              <span>2008.12.22</span>
            </div>
            <div>
              <strong>시행사</strong>
              <span>황학주택재개발조합</span>
            </div>
            <div>
              <strong>시공사</strong>
              <span>롯데건설</span>
            </div>
          </div>
          <div className={styles.apartHousehold}>
            <div>
              <strong>세대수</strong>
              <span>1534세대</span>
            </div>
            <div>
              <strong>용적률</strong>
              <span>557%</span>
            </div>
            <div>
              <strong>건폐율</strong>
              <span>55%</span>
            </div>
          </div>
        </div>
        <div className={styles.apartPrice}>
          <strong className={styles.priceTitle}>한달 매매가</strong>
          <div className={styles.priceContent}>
            <span className={styles.price}>8억 8500만원</span>
            <div className={styles.selectArea}>
              <span className={styles.areaTitle}>전용면적</span>
              <DropDown
                select="59㎡"
                fontSize="MEDIUM"
                outerBorder={true}
                dropDownContents={dropDownContents}
              />
            </div>
          </div>
        </div>
        <div className={styles.chart}>
          <div className={styles.chartTitle}>
            <strong>관리비 - 2024</strong>
            <button
              onClick={() => {
                if (isDetailInfo === "MAINTANCE") {
                  setIsDetailInfo(null);
                } else setIsDetailInfo("MAINTANCE");
              }}
            >
              <span>자세히보기</span>
              <img src={detailButtonIcon} alt="apart maintance charge detail" />
            </button>
          </div>
          <MaintanceChargeChart />
        </div>
        <ul className={styles.apartBriefInfo}>
          <li>
            <div className={styles.title}>
              <strong>부대복리시설</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <ul className={styles.content}>
              <li>
                <img src={childCareIcon} alt="childCare ICon" />
                <span>보육시설</span>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
          <li>
            <div className={styles.title}>
              <strong>건물구조</strong>
              <img src={welfareIcon} alt="welfare facilities" />
            </div>
            <span className={styles.content}>일반철골구조</span>
          </li>
        </ul>
      </section>
      <button
        className={styles.detailApartInfoButton}
        onClick={() => {
          if (isDetailInfo === "APARTINFO") {
            setIsDetailInfo(null);
          } else setIsDetailInfo("APARTINFO");
        }}
      >
        <img src={detailButtonIconD} alt="apart detail button" />
        자세히보기
      </button>
    </section>
  );
}
