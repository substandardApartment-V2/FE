import NewsPagination from "../components/News/NewsFooter/NewsPagination";
import NewsHeader from "../components/News/NewsHeader/NewsHeader";
import NewsMain from "../components/News/NewsMain/NewsMain";

const News = () => {
  return (
    <>
      <NewsHeader />
      <NewsMain />
      <NewsPagination />
    </>
  );
};

export default News;
