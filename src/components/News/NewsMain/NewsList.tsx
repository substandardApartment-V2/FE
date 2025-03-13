import { useGetNewsData } from "@/hooks/Api/useGetNewsData";
import NewsItem from "./NewsItem";
import newsMain from "./NewsMain.module.scss";
import NewsSkeleton from "./Skeleton/NewsSkeleton";

type NewsListProps = {
  newsType: "apt" | "defect";
  updateTotalElements?: boolean;
};

const NewsList = ({ newsType, updateTotalElements = false }: NewsListProps) => {
  const { isLoading, newsItems } = useGetNewsData(
    newsType,
    updateTotalElements
  );

  return (
    <ul className={newsMain.newsList}>
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <NewsSkeleton key={index} />
          ))
        : newsItems.map((news) => <NewsItem key={news.url} {...news} />)}
    </ul>
  );
};

export default NewsList;
