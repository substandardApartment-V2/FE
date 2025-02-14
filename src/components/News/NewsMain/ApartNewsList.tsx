import { useNewsStore } from "@/store/useNewsStore";
import { TNewsItem } from "@/types/TNews/TNewsItemTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import newsMain from "./NewsMain.module.scss";
import NewsSkeleton from "./Skeleton/NewsSkeleton";

const ApartNewsList = () => {
  const [currentNews, setCurrentNews] = useState<TNewsItem[]>([]);
  const { sort, pages, setTotalElements } = useNewsStore();
  const [isLoading, setIsLoading] = useState(true);

  const fetchNews = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [pages, sort]);

  return (
    <div className={newsMain.newsList}>
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <NewsSkeleton key={index} />
          ))
        : currentNews.map((news) => <NewsItem key={news.url} {...news} />)}
    </div>
  );
};

export default ApartNewsList;
