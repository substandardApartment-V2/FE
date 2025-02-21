import styles from "./WeakMainNewsList.module.scss";
import { TWeakMainNewsList } from "@/types/TWeak/TWeakMainNewsListTypes";
import { formatDate } from "@/utils/formatDate";
import { Link } from "react-router-dom";
import defaultNewsImage from "@/assets/news/newsImg01.jpeg";

export default function WeakMainNewsList(props: TWeakMainNewsList) {
  const parseContent = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <li className={styles.newsContent}>
      <Link to={props.url} target="_blank">
        <img
          src={props.image ? props.image : defaultNewsImage}
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
