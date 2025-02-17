import { useNewsStore } from "@/store/useNewsStore";
import { TNewsItem } from "@/types/TNews/TNewsItemTypes";
import axios from "axios";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import newsMain from "./NewsMain.module.scss";
import NewsSkeleton from "./Skeleton/NewsSkeleton";

const WeakApartNewsList = () => {
  const [currentNews, setCurrentNews] = useState<TNewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { sort, pages } = useNewsStore();

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response = await axios("http://localhost:8080/news/defect", {
        method: "POST",
        data: {
          pages,
          sort,
          num: 8,
        },
      });
      setCurrentNews(response.data.data.newsList);
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

export default WeakApartNewsList;
