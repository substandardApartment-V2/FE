import logo from "@/assets/logo.svg";
import { TNavList } from "@/types/THeader/TNavListTypes";
import styles from "./Header.module.scss";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";

const Header = () => {
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );

  const navData = [
    { target: ".", navContent: "아파트 정보" },
    { target: "/weak", navContent: "부실아파트" },
    { target: "/news", navContent: "뉴스" },
    { target: "/report", navContent: "제보" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link
          to={"/"}
          onClick={() => {
            setApartInfo(null);
            setWeakApartInfo(null);
            setMainInfo("WHOLE");
          }}
        >
          <img src={logo} alt="로고" />
        </Link>
      </div>
      <nav>
        <ul>
          {navData.map((listData: TNavList, index) => (
            <NavList
              key={index}
              target={listData.target}
              navContent={listData.navContent}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
