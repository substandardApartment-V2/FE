import { useNewsStore } from "@/store/useNewsStore";
import { TNewsItem } from "@/types/TNews/TNewsItemTypes";
import axios from "axios";
import { useEffect, useState } from "react";

type NewsType = "apt" | "defect";

type TNewsApiResponse = {
  isLoading: boolean;
  newsItems: TNewsItem[];
  refetch: () => Promise<void>;
};

export const useGetNewsData = (
  newsType: NewsType,
  updateTotalElements = false
): TNewsApiResponse => {
  const [newsItems, setNewsItems] = useState<TNewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { sort, pages, setTotalElements } = useNewsStore();

  const fetchNews = async () => {
    setIsLoading(true);

    try {
      const response = await axios(
        `${import.meta.env.VITE_LOCAL_API_CALL}/news/${newsType}`,
        {
          method: "POST",
          data: {
            pages,
            sort,
            num: 8,
          },
        }
      );

      setNewsItems(response.data.data.newsList);

      if (updateTotalElements) {
        setTotalElements(response.data.data.totalElements);
      }
    } catch (error) {
      console.error(`${newsType} 뉴스 에러: `, error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [pages, sort, newsType]);

  return { isLoading, newsItems, refetch: fetchNews };
};
