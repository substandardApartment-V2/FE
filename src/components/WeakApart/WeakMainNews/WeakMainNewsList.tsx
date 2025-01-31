import styles from "./WeakMainNewsList.module.scss";
import newsImg from "@/assets/news/newsImg01.jpeg";
import { TWeakMainNewsList } from "@/types/TWeak/TWeakMainNewsList";

export default function WeakMainNewsList(props: TWeakMainNewsList) {
  return (
    <li className={styles.newsContent}>
      <div className={styles.newsTitle}>
        <div className={styles.newsDate}>
          <span>{props.media}</span>
          <span>{props.date}</span>
        </div>
        <h3 className={styles.title}>{props.title}</h3>
      </div>
      <div className={styles.contents}>
        <img src={newsImg} className={styles.newsImage} alt="news image" />
        <p className={styles.content}>{props.content}</p>
      </div>
    </li>
  );
}
