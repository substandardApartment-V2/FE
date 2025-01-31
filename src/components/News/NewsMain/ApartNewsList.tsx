import { useNewsStore } from "@/store/useNewsStore";
import { TNewsItem } from "@/types/TNewsItemTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import newsMain from "./NewsMain.module.scss";

const ApartNewsList = () => {
  const [currentNews, setCurrentNews] = useState<TNewsItem[]>([]);
  const { sort, pages, setTotalElements } = useNewsStore();

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:8080/news/general", {
        params: {
          pages,
          sort,
        },
      });
      setCurrentNews(response.data.data.newsList);
      setTotalElements(response.data.data.totalElements);
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
        currentNews.map((news) => <NewsItem key={news.url} {...news} />)}
    </div>
  );
};

export default ApartNewsList;
