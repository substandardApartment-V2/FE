import styles from "./WeakMainNews.module.scss";
import detailButtonIcon from "@/assets/Main/ApartInfo/detailButtonIcon.svg";
import { TWeakMainNewsList } from "@/types/TWeak/TWeakMainNewsList";
import WeakMainNewsList from "./WeakMainNewsList";

export default function WeakMainNews() {
  const dummyData = [
    {
      media: "연합뉴스",
      date: "2023.08.20",
      title: "‘LH부실공사’ 감리업체, 안전평가서도 문제점 수두룩",
      content:
        "LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도 다수의문제점이 발견된 것으로 나타났다. 인센티브는 있지만 규제사항은 없는공공건설 공사업체 평가제도를 손봐야 한다는 지적이 나온다. 30일 국회국토교통위원회 소속 국민의힘 유경준 의원이 국토안전관리원로부터 제출받은 2022년 안전관리 수준평가 세부평가표를 분석한 결과 LH 부실공사로지적된 단지의 감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의문제점이 발견됐다.",
    },
    {
      media: "연합뉴스",
      date: "2023.08.20",
      title: "‘LH부실공사’ 감리업체, 안전평가서도 문제점 수두룩",
      content:
        "LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도 다수의문제점이 발견된 것으로 나타났다. 인센티브는 있지만 규제사항은 없는공공건설 공사업체 평가제도를 손봐야 한다는 지적이 나온다. 30일 국회국토교통위원회 소속 국민의힘 유경준 의원이 국토안전관리원로부터 제출받은 2022년 안전관리 수준평가 세부평가표를 분석한 결과 LH 부실공사로지적된 단지의 감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의문제점이 발견됐다.",
    },
    {
      media: "연합뉴스",
      date: "2023.08.20",
      title: "‘LH부실공사’ 감리업체, 안전평가서도 문제점 수두룩",
      content:
        "LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도 다수의문제점이 발견된 것으로 나타났다. 인센티브는 있지만 규제사항은 없는공공건설 공사업체 평가제도를 손봐야 한다는 지적이 나온다. 30일 국회국토교통위원회 소속 국민의힘 유경준 의원이 국토안전관리원로부터 제출받은 2022년 안전관리 수준평가 세부평가표를 분석한 결과 LH 부실공사로지적된 단지의 감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의문제점이 발견됐다.",
    },
  ];

  return (
    <section className={styles.weakApartNews}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>뉴스</h2>
        <button>
          더 많은 뉴스
          <img src={detailButtonIcon} alt="more weak apart news" />
        </button>
      </div>
      <ul className={styles.newsContents}>
        {dummyData.map((listData: TWeakMainNewsList) => (
          <WeakMainNewsList
            media={listData.media}
            title={listData.title}
            date={listData.date}
            content={listData.content}
          />
        ))}
      </ul>
    </section>
  );
}
