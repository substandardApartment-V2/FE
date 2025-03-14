import DropDown from "@/components/Abstraction/DropDown/DropDown";
import { useNewsStore } from "@/store/useNewsStore";
import newsHeader from "./NewsHeader.module.scss";
import NewsHeaderTab from "./NewsHeaderTab";

const NewsHeader = () => {
  const { sort, setSort } = useNewsStore();

  const dropDownContents = [
    {
      content: "최신순",
      contentFn: () => setSort("desc"),
    },
    {
      content: "과거순",
      contentFn: () => setSort("asc"),
    },
  ];

  return (
    <div className={newsHeader.newsHeader}>
      <div className={newsHeader.empty}></div>
      <NewsHeaderTab />
      <div>
        <DropDown
          select={sort === "desc" ? "최신순" : "과거순"}
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
