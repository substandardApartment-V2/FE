// 부실아파트 페이지 뉴스 컴포넌트

import styles from "./WeakMainNews.module.scss";
import detailButtonIcon from "@/assets/Main/ApartInfo/detailButtonIcon.svg";
import { TWeakMainNewsList } from "@/types/TWeak/TWeakMainNewsListTypes";
import WeakMainNewsList from "./WeakMainNewsList";
import useGetApartData from "@/hooks/Api/useGetApartData";
import { Link } from "react-router-dom";
import { TWeakMainNewsResponse } from "@/types/TApi/TAPITypes";
import WeakNewsSkeleton from "./WeakNewsSkeleton";
import { useNewsStore } from "@/store/useNewsStore";

export default function WeakMainNews() {
  const setActiveTab = useNewsStore((state) => state.setActiveTab);
  const { data, isLoading } = useGetApartData<TWeakMainNewsResponse>(
    `${import.meta.env.VITE_SERVER_API_CALL}/defect/main`
  );

  return (
    <section className={styles.weakApartNews}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>뉴스</h2>
        <Link to="/news" onClick={() => setActiveTab("weakNews")}>
          더 많은 뉴스
          <img src={detailButtonIcon} alt="more weak apart news" />
        </Link>
      </div>
      <ul className={styles.newsContents}>
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <WeakNewsSkeleton key={index} />
            ))
          : data &&
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
