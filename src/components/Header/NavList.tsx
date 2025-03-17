import { useApartInfoStore } from "@/store/useApartInfoStore";
import { TNavList } from "@/types/THeader/TNavListTypes";
import { NavLink } from "react-router-dom";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import styles from "./NavList.module.scss";
import { useMarkerStore } from "@/store/useMarkerStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";

export default function NavList(props: TNavList) {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setMarkerData = useMarkerStore((state) => state.setMarkerData);
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setIsLoading = useMarkerStore((state) => state.setIsLoading);
  const setMap = useMarkerStore((state) => state.setMap);

  const resetInfoHandler = () => {
    setIsDetailInfo(null);
    setMainInfo("WHOLE");
    setApartInfo(null);
    setMarkerData([]);
    setWeakApartInfo(null);
    setMap(null);
    setIsLoading(true);
  };

  return (
    <li className={styles.navList}>
      <NavLink
        to={props.target}
        className={({ isActive }) => (isActive ? styles.active : "undefined")}
        onClick={resetInfoHandler}
      >
        <span className={styles.navSpan}>{props.navContent}</span>
      </NavLink>
    </li>
  );
}
