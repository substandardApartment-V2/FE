// 일반 아파트 페이지

import styles from "./ApartInfoPage.module.scss";
import InfoContainer from "@/components/Main/InfoContainer";
import ApartMapContainer from "@/components/Main/ApartMapContainer";

const ApartInfoPage = () => {
  return (
    <div className={styles.apartInfoPage}>
      <InfoContainer />
      <ApartMapContainer />
    </div>
  );
};

export default ApartInfoPage;
