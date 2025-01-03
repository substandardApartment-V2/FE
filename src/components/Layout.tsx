import { Outlet } from "react-router-dom";
import Header from "./Header";
import DropDown from "./Abstraction/DropDown";

const Layout = () => {
  const listContents = ["최신순", "과거순"];

  return (
    <>
      <Header />
      <Outlet />
      <DropDown select="최신순" listContents={listContents} />
    </>
  );
};

export default Layout;
