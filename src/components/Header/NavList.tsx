import { useApartInfoStore } from "@/store/useApartInfoStore";
import { TNavList } from "@/types/THeader/TNavListTypes";
import { NavLink } from "react-router-dom";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import styles from "./NavList.module.scss";
import { useMarkerStore } from "@/store/useMarkerStore";

export default function NavList(props: TNavList) {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setMarkderData = useMarkerStore((state) => state.setMarkderData);

  return (
    <li className={styles.navList}>
      <NavLink
        to={props.target}
        className={({ isActive }) => (isActive ? styles.active : "undefined")}
        onClick={() => {
          setIsDetailInfo(null);
          setMainInfo("WHOLE");
          setMarkderData([]);
        }}
      >
        <span className={styles.navSpan}>{props.navContent}</span>
      </NavLink>
    </li>
  );
}
