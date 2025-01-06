import newsImg from "../../../assets/news/newsImg01.jpeg";
import { TNewsItem } from "../../../types/TNewsItemTypes";
import newsMain from "./NewsMain.module.scss";

const NewsItem = ({
  newsName,
  newsDate,
  newsTitle,
  newsDescription,
}: TNewsItem) => {
  return (
    <div className={newsMain.newsItem}>
      <div className={newsMain.newsItemHeader}>
        <span>{newsName}</span>
        <span>{newsDate}</span>
      </div>
      <h3 className={newsMain.newsItemTitle}>{newsTitle}</h3>
      <div className={newsMain.newsItemContentWrapper}>
        <img src={newsImg} alt="newsImage" />
        <p className={newsMain.newsItemDescription}>{newsDescription}</p>
      </div>
    </div>
  );
};

export default NewsItem;
