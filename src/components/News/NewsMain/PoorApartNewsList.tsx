import NewsItem from "./NewsItem";
import newsMain from "./NewsMain.module.scss";

const PoorApartNewsList = () => {
  const dummyNews = [
    {
      id: 1,
      newsName: "부실아파트",
      newsDate: "2021.08.21",
      newsTitle: "부실아파트 뉴스1",
      newsImg: "newsImg",
      newsDescription: "부실아파트 뉴스 내용1",
    },
    {
      id: 2,
      newsName: "연합뉴스",
      newsDate: "2025.12.25",
      newsTitle: "부실아파트 뉴스2",
      newsImg: "newsImg",
      newsDescription: "부실아파트 뉴스 내용2",
    },
    {
      id: 3,
      newsName: "연합뉴스3",
      newsDate: "2025.12.25",
      newsTitle: "부실아파트 뉴스3",
      newsImg: "newsImg",
      newsDescription: "부실아파트 뉴스 내용3",
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

export default PoorApartNewsList;
