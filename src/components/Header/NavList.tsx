import { useApartInfoStore } from "@/store/useApartInfoStore";
import { TNavList } from "@/types/THeader/TNavListTypes";
import { NavLink } from "react-router-dom";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import styles from "./NavList.module.scss";
import { useMarkerStore } from "@/store/useMarkerStore";
import { useWeakApartInfoStore } from "@/store/useWeakApartInfoStore";
import useLocationPath from "@/hooks/Map/useLocationPath";
import { useSearchStore } from "@/store/useSearchStore";

export default function NavList(props: TNavList) {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);
  const setMainInfo = useMainInfoStore((state) => state.setMainInfo);
  const setMarkerData = useMarkerStore((state) => state.setMarkerData);
  const setWeakApartInfo = useWeakApartInfoStore(
    (state) => state.setWeakApartInfo
  );
  const setApartInfo = useMainInfoStore((state) => state.setApartInfo);
  const setMap = useMarkerStore((state) => state.setMap);
  const setMarkers = useMarkerStore((state) => state.setMarkers);
  const { pathName } = useLocationPath();
  const setIsReset = useSearchStore((state) => state.setIsReset);

  const resetInfoHandler = () => {
    if (props.target === pathName) return;
    setIsDetailInfo(null);
    setMainInfo("WHOLE");
    setApartInfo(null);
    setMarkerData([]);
    setMarkers([]);
    setWeakApartInfo(null);
    setMap(null);
    setIsReset(true);
  };

  return (
    <li className={styles.navList}>
      <NavLink
        to={props.target !== pathName ? props.target : "#"}
        className={({ isActive }) => (isActive ? styles.active : "undefined")}
        onClick={resetInfoHandler}
      >
        <span className={styles.navSpan}>{props.navContent}</span>
      </NavLink>
    </li>
  );
}
