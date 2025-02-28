import styles from "./WeakApartInfoPage.module.scss";
import ApartMapContainer from "@/components/Main/ApartMapContainer";
import WeakInfoContainer from "@/components/WeakApart/WeakInfoContainer";

export default function WeakApartInfoPage() {
  return (
    <div className={styles.weakInfoPage}>
      <WeakInfoContainer />
      <ApartMapContainer />
    </div>
  );
}
