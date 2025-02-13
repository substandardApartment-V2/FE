import styles from "./WeakMainNews.module.scss";
import detailButtonIcon from "@/assets/Main/ApartInfo/detailButtonIcon.svg";
import { TWeakMainNewsList } from "@/types/TWeak/TWeakMainNewsList";
import WeakMainNewsList from "./WeakMainNewsList";
import useGetApartData from "@/hooks/Api/useGetApartData";
import { Link } from "react-router-dom";

export default function WeakMainNews() {
  const data = useGetApartData("http://localhost:8080/defect/main");

  return (
    <section className={styles.weakApartNews}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>뉴스</h2>
        <Link to="/news">
          더 많은 뉴스
          <img src={detailButtonIcon} alt="more weak apart news" />
        </Link>
      </div>
      <ul className={styles.newsContents}>
        {data &&
          data.data.newsList.map(
            (listData: TWeakMainNewsList, index: number) => (
              <WeakMainNewsList
                key={index}
                platform={listData.platform}
                title={listData.title}
                createAt={listData.createAt}
                content={listData.content}
                url={listData.url}
                image={listData.image}
              />
            )
          )}
      </ul>
    </section>
  );
}
