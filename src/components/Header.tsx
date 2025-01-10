import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="로고" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to={"."}
              className={({ isActive }) =>
                isActive ? styles.active : "undefined"
              }
            >
              아파트 정보
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/poor"}
              className={({ isActive }) =>
                isActive ? styles.active : "undefined"
              }
            >
              부실아파트
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/news"}
              className={({ isActive }) =>
                isActive ? styles.active : "undefined"
              }
            >
              뉴스
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/report"}
              className={({ isActive }) =>
                isActive ? styles.active : "undefined"
              }
            >
              제보
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
