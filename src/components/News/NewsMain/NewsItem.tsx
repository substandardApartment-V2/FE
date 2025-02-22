import { TNewsItem } from "@/types/TNews/TNewsItemTypes";
import { formatDate } from "@/utils/parse/formatDate";
import { Link } from "react-router-dom";
import newsMain from "./NewsMain.module.scss";
import parseContent from "@/utils/parse/parseContent";

const NewsItem = ({
  platform,
  createAt,
  image,
  title,
  content,
  url,
}: TNewsItem) => {
  return (
    <div className={newsMain.newsItem}>
      <Link to={url} target="_blank">
        <div className={newsMain.newsItemHeader}>
          <span>{platform}</span>
          <span>{formatDate(createAt)}</span>
        </div>
        <h3 className={newsMain.newsItemTitle}>{parseContent(title)}</h3>
        <div className={newsMain.newsItemContentWrapper}>
          <img src={image} alt="newsImage" />
          <p className={newsMain.newsItemDescription}>
            {parseContent(content)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewsItem;
