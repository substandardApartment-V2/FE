import styles from "./WholeWeakApartInfo.module.scss";
import searchIcon from "@/assets/Main/searchICon.svg";
import detailButtonIcon from "@/assets/Main/ApartInfo/detailButtonIcon.svg";
import WeakBuilderChart from "./Chart/WeakBuilderChart";
import FiveYearsWeakBuilderChart from "./Chart/FiveYearsWeakBuilderChart";
import newsImg from "@/assets/news/newsImg01.jpeg";
import { useApartInfoStore } from "@/store/useApartInfoStore";

export default function WholeWeakApartInfo() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const isDetailInfo = useApartInfoStore((state) => state.isDetailInfo);

  return (
    <div className={styles.weakRight}>
      <section className={styles.apartSearch}>
        <input
          className={styles.apartSearchInput}
          placeholder="궁금한 지역, 아파트를 검색해보세요."
        />
        <img src={searchIcon} alt="location apart search" />
      </section>
      <section className={styles.weakBuildRank}>
        <div className={styles.titleContainer}>
          <div>
            <h2 className={styles.title}>건설사 하자판정 건수 순위</h2>
            <span className={styles.year}>2024</span>
          </div>
          <button
            onClick={() => {
              if (isDetailInfo === "WEAKRANK") {
                setIsDetailInfo(null);
              } else setIsDetailInfo("WEAKRANK");
            }}
          >
            자세히보기
            <img src={detailButtonIcon} alt="detail weak Apart Builder rank" />
          </button>
        </div>
        <div className={styles.chart}>
          <div className={styles.weakBuilderChart}>
            <WeakBuilderChart />
          </div>
          <div className={styles.fiveYearsWeakBuilderChart}>
            <h3>5년간 하자판정 건수 순위</h3>
            <div>
              <FiveYearsWeakBuilderChart />
            </div>
            <ul>
              <li>1. 지에스건설(주)</li>
              <li>2. 계롱건설(주)</li>
              <li>3. 대방건설(주)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.weakApartNews}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>뉴스</h2>
          <button>
            더 많은 뉴스
            <img src={detailButtonIcon} alt="more weak apart news" />
          </button>
        </div>
        <ul className={styles.newsContents}>
          <li className={styles.newsContent}>
            <div className={styles.newsTitle}>
              <div className={styles.newsDate}>
                <span>연합뉴스</span>
                <span>2023.08.20</span>
              </div>
              <h3 className={styles.title}>
                ‘LH부실공사’ 감리업체, 안전평가서도 문제점 수두룩
              </h3>
            </div>
            <div className={styles.contents}>
              <img
                src={newsImg}
                className={styles.newsImage}
                alt="news image"
              />
              <p className={styles.content}>
                LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도
                다수의 문제점이 발견된 것으로 나타났다. 인센티브는 있지만
                규제사항은 없는 공공건설 공사업체 평가제도를 손봐야 한다는
                지적이 나온다. 30일 국회 국토교통위원회 소속 국민의힘 유경준
                의원이 국토안전관리원로부터 제출 받은 2022년 안전관리 수준평가
                세부평가표를 분석한 결과 LH 부실공사로 지적된 단지의
                감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의 문제점이
                발견됐다.
              </p>
            </div>
          </li>
          <li className={styles.newsContent}>
            <div className={styles.newsTitle}>
              <div className={styles.newsDate}>
                <span>연합뉴스</span>
                <span>2023.08.20</span>
              </div>
              <h3 className={styles.title}>
                ‘LH부실공사’ 감리업체, 안전평가서도 문제점 수두룩
              </h3>
            </div>
            <div className={styles.contents}>
              <img
                src={newsImg}
                className={styles.newsImage}
                alt="news image"
              />
              <p className={styles.content}>
                LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도
                다수의 문제점이 발견된 것으로 나타났다. 인센티브는 있지만
                규제사항은 없는 공공건설 공사업체 평가제도를 손봐야 한다는
                지적이 나온다. 30일 국회 국토교통위원회 소속 국민의힘 유경준
                의원이 국토안전관리원로부터 제출 받은 2022년 안전관리 수준평가
                세부평가표를 분석한 결과 LH 부실공사로 지적된 단지의
                감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의 문제점이
                발견됐다.
              </p>
            </div>
          </li>
          <li className={styles.newsContent}>
            <div className={styles.newsTitle}>
              <div className={styles.newsDate}>
                <span>연합뉴스</span>
                <span>2023.08.20</span>
              </div>
              <h3 className={styles.title}>
                ‘LH부실공사’ 감리업체, 안전평가서도 문제점 수두룩
              </h3>
            </div>
            <div className={styles.contents}>
              <img
                src={newsImg}
                className={styles.newsImage}
                alt="news image"
              />
              <p className={styles.content}>
                LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도
                다수의 문제점이 발견된 것으로 나타났다. 인센티브는 있지만
                규제사항은 없는 공공건설 공사업체 평가제도를 손봐야 한다는
                지적이 나온다. 30일 국회 국토교통위원회 소속 국민의힘 유경준
                의원이 국토안전관리원로부터 제출 받은 2022년 안전관리 수준평가
                세부평가표를 분석한 결과 LH 부실공사로 지적된 단지의
                감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의 문제점이
                발견됐다.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
