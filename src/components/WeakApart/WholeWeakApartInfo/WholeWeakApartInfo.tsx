import styles from "./WholeWeakApartInfo.module.scss";
import WeakMainNews from "../WeakMainNews/WeakMainNews";
import WeakBuildRank from "./WeakBuildRank";
import ApartSearch from "../../Common/ApartSearch";
import WeakApartInfo from "./WeakApartInfo";

export default function WholeWeakApartInfo() {
  return (
    <div className={styles.weakRight}>
      <ApartSearch />
      {/* <WeakApartInfo /> */}
      <>
        <WeakBuildRank />
        <WeakMainNews />
      </>
    </div>
  );
}
