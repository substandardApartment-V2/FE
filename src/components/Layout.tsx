import { Outlet } from "react-router-dom";
import Header from "./Header";
import DropDown from "./Abstraction/DropDown";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <DropDown />
    </>
  );
};

export default Layout;
