import styles from "./WeakApartInfoPage.module.scss";
import ApartMapContainer from "@/components/Main/ApartMapContainer";
import WeakInfoContainer from "@/components/WeakApart/WeakInfoContainer";
import SEOMetaTag from "@/components/Common/SEOMetaTag/SEOMetaTag";

export default function WeakApartInfoPage() {
  return (
    <div className={styles.weakInfoPage}>
      <SEOMetaTag
        title="부실아파트"
        content="전국 부실아파트 정보를 조회할 수 있는 페이지입니다."
      />
      <WeakInfoContainer />
      <ApartMapContainer />
    </div>
  );
}
