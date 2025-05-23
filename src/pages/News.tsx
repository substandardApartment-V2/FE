import SEOMetaTag from "@/components/Common/SEOMetaTag/SEOMetaTag";
import NewsPagination from "../components/News/NewsFooter/NewsPagination";
import NewsHeader from "../components/News/NewsHeader/NewsHeader";
import NewsMain from "../components/News/NewsMain/NewsMain";
import styles from "./News.module.scss";
import { useNewsStore } from "@/store/useNewsStore";

const News = () => {
  const activeTab = useNewsStore((state) => state.activeTab);

  return (
    <div className={styles.news}>
      <SEOMetaTag
        title={activeTab === "apartNews" ? "아파트뉴스" : "부실아파트뉴스"}
        content="아파트에 관련된 뉴스를 제공하는 페이지입니다."
      />
      <NewsHeader />
      <NewsMain />
      <NewsPagination />
    </div>
  );
};

export default News;
