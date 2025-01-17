import NewsPagination from "../components/News/NewsFooter/NewsPagination";
import NewsHeader from "../components/News/NewsHeader/NewsHeader";
import NewsMain from "../components/News/NewsMain/NewsMain";
import styles from "./News.module.scss";

const News = () => {
  return (
    <div className={styles.news}>
      <NewsHeader />
      <NewsMain />
      <NewsPagination />
    </div>
  );
};

export default News;
