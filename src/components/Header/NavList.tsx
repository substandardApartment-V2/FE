import { NavLink } from "react-router-dom";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import styles from "./NavList.module.scss";
import { TNavList } from "@/types/THeader/TNavList";

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
        {props.navContent}
      </NavLink>
    </li>
  );
}
