import newsHeader from "./NewsHeader.module.scss";
import NewsHeaderDropDown from "./NewsHeaderDropDown";
import NewsHeaderTab from "./NewsHeaderTab";

const NewsHeader = () => {
  return (
    <div className={newsHeader.newsHeader}>
      <div className={newsHeader.empty}></div>
      <NewsHeaderTab />
      <NewsHeaderDropDown />
    </div>
  );
};

export default NewsHeader;
