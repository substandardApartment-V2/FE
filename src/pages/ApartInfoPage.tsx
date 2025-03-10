// 일반 아파트 페이지

import styles from "./ApartInfoPage.module.scss";
import InfoContainer from "@/components/Main/InfoContainer";
import ApartMapContainer from "@/components/Main/ApartMapContainer";
import SEOMetaTag from "@/components/Common/SEOMetaTag/SEOMetaTag";

const ApartInfoPage = () => {
  return (
    <div className={styles.apartInfoPage}>
      <SEOMetaTag />
      <InfoContainer />
      <ApartMapContainer />
    </div>
  );
};

export default ApartInfoPage;
