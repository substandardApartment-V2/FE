import styles from "./WholeWeakApartInfo.module.scss";
import WeakMainNews from "../WeakMainNews/WeakMainNews";
import WeakBuildRank from "./WeakBuildRank";
import ApartSearch from "../../Common/ApartSearch/ApartSearch";

export default function WholeWeakApartInfo() {
  return (
    <div className={styles.weakRight}>
      <ApartSearch />
      <WeakBuildRank />
      <WeakMainNews />
    </div>
  );
}
