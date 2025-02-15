import { useApartInfoStore } from "@/store/useApartInfoStore";
import { TNavList } from "@/types/THeader/TNavListTypes";
import { NavLink } from "react-router-dom";
import styles from "./NavList.module.scss";

export default function NavList(props: TNavList) {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  return (
    <li className={styles.navList}>
      <NavLink
        to={props.target}
        className={({ isActive }) => (isActive ? styles.active : "undefined")}
        onClick={() => {
          setIsDetailInfo(null);
        }}
      >
        <span className={styles.navSpan}>{props.navContent}</span>
      </NavLink>
    </li>
  );
}
