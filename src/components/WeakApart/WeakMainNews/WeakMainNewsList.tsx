import styles from "./WeakMainNewsList.module.scss";
import { TWeakMainNewsList } from "@/types/TWeak/TWeakMainNewsListTypes";
import { formatDate } from "@/utils/formatDate";
import { Link } from "react-router-dom";

export default function WeakMainNewsList(props: TWeakMainNewsList) {
  const parseContent = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  return (
    <li className={styles.newsContent}>
      <Link to={props.url} target="_blank">
        <div className={styles.newsTitle}>
          <div className={styles.newsDate}>
            <span>{props.platform}</span>
            <span>{formatDate(props.createAt)}</span>
          </div>
          <h3 className={styles.title}>{parseContent(props.title)}</h3>
        </div>
        <div className={styles.contents}>
          <img
            src={props.image}
            className={styles.newsImage}
            alt="news image"
          />
          <p className={styles.content}>{parseContent(props.content)}</p>
        </div>
      </Link>
    </li>
  );
}
