import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import DropDown from "./Abstraction/DropDown";

const Layout = () => {
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

  const getDataFunctionTest = () => {
    console.log("hello");
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
    {
      content:
        "말하는감자입니다말하는감자입니다말하는감자입니다말하는감자입니다말하는감자입니다",
      contentFn: getDataFunctionTest,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <DropDown
        select="최신순"
        dropDownContents={dropDownContents}
        fontSize="SMALL"
      />
      {/* <div style={{ fontSize: "26px", padding: "100px" }}>{currentNews}</div> */}
    </>
  );
};

export default Layout;
