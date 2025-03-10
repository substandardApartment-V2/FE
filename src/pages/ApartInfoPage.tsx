// 일반 아파트 페이지

import styles from "./ApartInfoPage.module.scss";
import InfoContainer from "@/components/Main/InfoContainer";
import ApartMapContainer from "@/components/Main/ApartMapContainer";
import { Helmet } from "react-helmet-async";

const ApartInfoPage = () => {
  return (
    <div className={styles.apartInfoPage}>
      <Helmet>
        <title>내 아파트는?</title>
      </Helmet>
      <InfoContainer />
      <ApartMapContainer />
    </div>
  );
};

export default ApartInfoPage;
