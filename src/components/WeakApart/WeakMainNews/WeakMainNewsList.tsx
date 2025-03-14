import styles from "./WeakMainNewsList.module.scss";
import { TWeakMainNewsList } from "@/types/TWeak/TWeakMainNewsListTypes";
import { formatDate } from "@/utils/parse/formatDate";
import { Link } from "react-router-dom";
import imageDefaultImage from "@/assets/news/newsDefaultImage.jpeg";
import parseContent from "@/utils/parse/parseContent";

export default function WeakMainNewsList(props: TWeakMainNewsList) {
  return (
    <li className={styles.newsContent}>
      <Link to={props.url} target="_blank">
        <img
          src={props.image ? props.image : imageDefaultImage}
          className={styles.newsImage}
          alt="news image"
        />
        <div className={styles.newsText}>
          <span className={styles.title}>{parseContent(props.title)}</span>
          <p className={styles.content}>{parseContent(props.content)}</p>
          <div className={styles.platformDate}>
            <span>{props.platform}</span> |{" "}
            <span>{formatDate(props.createAt)}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
