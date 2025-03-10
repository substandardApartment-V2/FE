import styles from "./WeakApartInfoPage.module.scss";
import ApartMapContainer from "@/components/Main/ApartMapContainer";
import WeakInfoContainer from "@/components/WeakApart/WeakInfoContainer";
import SEOMetaTag from "@/components/Common/SEOMetaTag/SEOMetaTag";

export default function WeakApartInfoPage() {
  return (
    <div className={styles.weakInfoPage}>
      <SEOMetaTag title="부실아파트" />
      <WeakInfoContainer />
      <ApartMapContainer />
    </div>
  );
}
