// 일반 아파트 페이지

import styles from "./ApartInfoPage.module.scss";
import InfoContainer from "@/components/Main/InfoContainer";
import ApartMapContainer from "@/components/Main/ApartMapContainer";
import SEOMetaTag from "@/components/Common/SEOMetaTag/SEOMetaTag";

const ApartInfoPage = () => {
  return (
    <div className={styles.apartInfoPage}>
      <SEOMetaTag content="전국 아파트 정보를 조회할 수 있는 페이지입니다." />
      <InfoContainer />
      <ApartMapContainer />
    </div>
  );
};

export default ApartInfoPage;
