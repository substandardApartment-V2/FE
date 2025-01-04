import { Outlet } from "react-router-dom";
import Header from "./Header";
import DropDown from "./Abstraction/DropDown";

const Layout = () => {
  const getDataFunctionAsc = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const getDataFunctionDesc = async () => {
    await fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const getDataFunctionTest = () => {
    console.log("hello");
  };

  const listContents = [
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
      <Outlet />
      <DropDown select="최신순" listContents={listContents} fontSize="medium" />
      <div>hello</div>
    </>
  );
};

export default Layout;
