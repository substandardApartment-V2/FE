import { useNewsStore } from "@/store/useNewsStore";
import { TNewsItem } from "@/types/TNewsItemTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import newsMain from "./NewsMain.module.scss";

const WeakApartNewsList = () => {
  const [currentNews, setCurrentNews] = useState<TNewsItem[]>([]);

  const { sort, pages } = useNewsStore();

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:8080/news/defect", {
        params: {
          pages,
          sort,
        },
      });
      setCurrentNews(response.data.data.newsList);
    } catch (error) {
      console.error("뉴스 에러: ", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [pages, sort]);

  return (
    <div className={newsMain.newsList}>
      {currentNews &&
        currentNews.map((news) => (
          <NewsItem
            key={news.url}
            platform={news.platform}
            createAt={news.createAt}
            title={news.title}
            image={news.image}
            url={news.url}
            content={news.content}
          />
        ))}
    </div>
  );
};

export default WeakApartNewsList;
