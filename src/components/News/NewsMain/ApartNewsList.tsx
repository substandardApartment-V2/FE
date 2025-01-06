import NewsItem from "./NewsItem";
import newsMain from "./NewsMain.module.scss";

const ApartNewsList = () => {
  const dummyNews = [
    {
      id: 1,
      newsName: "연합뉴스",
      newsDate: "2021.08.21",
      newsTitle: "‘LH부실공사’ 감리업체, 안전평가서도 문제점 수두룩",
      newsImg: "newsImg",
      newsDescription:
        "LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도 다수의 문제점이 발견된 것으로 나타났다. 인센티브는 있지만 규제사항은 없는 공공건설 공사업체 평가제도를 손봐야 한다는 지적이 나온다. 30일 국회 국토교통위원회 소속 국민의힘 유경준 의원이 국토안전관리원로부터 제출 받은 2022년 안전관리 수준평가 세부평가표를 분석한 결과 LH 부실공사로 지적된 단지의 감리업체들이 국토부 '안전관리 수준평가' 에서도 다수의 문제점이 발견됐다.LH 부실공사로 지적된 단지의 감리업체들이 안전관리 평가에서도 다수의 문제점이 발견된 것으로 나타났다. 인센티브는 있지만 규제사항은 없는 공공건설 공사업",
    },
    {
      id: 2,
      newsName: "연합뉴스",
      newsDate: "2025.12.25",
      newsTitle: "뉴스타이틀2",
      newsImg: "newsImg",
      newsDescription: "뉴스내용2",
    },
    {
      id: 3,
      newsName: "연합뉴스3",
      newsDate: "2025.12.25",
      newsTitle: "뉴스타이틀3",
      newsImg: "newsImg",
      newsDescription: "뉴스내용3",
    },
  ];

  return (
    <div className={newsMain.newsList}>
      {dummyNews &&
        dummyNews.map((news) => (
          <NewsItem
            key={news.id}
            newsName={news.newsName}
            newsDate={news.newsDate}
            newsTitle={news.newsTitle}
            newsDescription={news.newsDescription}
          />
        ))}
    </div>
  );
};

export default ApartNewsList;
