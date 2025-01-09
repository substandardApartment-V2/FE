import { useState } from "react";
import DropDown from "../../Abstraction/DropDown/DropDown";
import newsHeader from "./NewsHeader.module.scss";
import NewsHeaderTab from "./NewsHeaderTab";

const NewsHeader = () => {
  const [currentNews, setCurrentNews] = useState();

  const getDataFunctionAsc = async () => {
    const data = await fetch(
      // 뉴스 api 호출이라고 가정
      "https://swapi.py4e.com/api/people/1"
    ).then((response) => response.json());

    setCurrentNews(data.name); //뉴스 데이터 state 변경
  };

  const getDataFunctionDesc = async () => {
    const data = await fetch("https://swapi.py4e.com/api/people/2").then(
      (response) => response.json()
    );

    setCurrentNews(data.name);
  };

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
          fontSize="SMALL"
          outerBorder={false}
        />
      </div>
    </div>
  );
};

export default NewsHeader;
