import defaultImg from "@/assets/News/newsDefaultImage.jpeg";
import { TNewsItem } from "@/types/TNews/TNewsItemTypes";
import { formatDate } from "@/utils/parse/formatDate";
import parseContent from "@/utils/parse/parseContent";
import { Link } from "react-router-dom";
import styles from "./NewsMain.module.scss";

const NewsItem = ({
  platform,
  createAt,
  image,
  title,
  content,
  url,
}: TNewsItem) => {
  const onErrorImg: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLImageElement;
    target.src = defaultImg;
  };

  return (
    <li className={styles.newsItem}>
      <Link to={url} target="_blank" className={styles.newsItemWrap}>
        <img
          src={image || defaultImg}
          alt="newsImage"
          onError={onErrorImg}
          className={styles.newsImgBox}
        />
        <div className={styles.newsItemContentWrapper}>
          <h3 className={styles.newsItemTitle}>{parseContent(title)}</h3>
          <p className={styles.newsItemDescription}>{parseContent(content)}</p>
          <div className={styles.newsItemHeader}>
            <span>{platform}</span>
            <span>|</span>
            <span>{formatDate(createAt)}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default NewsItem;
