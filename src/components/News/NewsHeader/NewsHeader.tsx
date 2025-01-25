import DropDown from "@/components/Abstraction/DropDown/DropDown";
import newsHeader from "./NewsHeader.module.scss";
import NewsHeaderTab from "./NewsHeaderTab";

const NewsHeader = () => {
  const getDataFunctionAsc = async () => {};

  const getDataFunctionDesc = async () => {};

  const dropDownContents = [
    {
      content: "최신순",
      contentFn: getDataFunctionAsc,
    },
    {
      content: "과거순",
      contentFn: getDataFunctionDesc,
    },
  ];
  return (
    <div className={newsHeader.newsHeader}>
      <div className={newsHeader.empty}></div>
      <NewsHeaderTab />
      <div>
        <DropDown
          select="최신순"
          dropDownContents={dropDownContents}
          fontSize="MEDIUM"
          outerBorder={false}
          width="MEDIUM"
        />
      </div>
    </div>
  );
};

export default NewsHeader;
