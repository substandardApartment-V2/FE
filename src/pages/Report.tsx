import { Link } from "react-router-dom";
import styles from "./Report.module.scss";
import SEOMetaTag from "@/components/Common/SEOMetaTag/SEOMetaTag";

const Report = () => {
  const googleUrl = import.meta.env.VITE_GOOGLE_URL;

  return (
    <div className={styles.report}>
      <SEOMetaTag title="제보" />
      <p>
        아파트 관련 제보사항이 있으신 분들은
        <br className={styles.mobileBr} /> 아래 이메일로 연락 부탁드립니다.
      </p>
      <Link to={googleUrl} target="_blank">
        apartment0513@gmail.com
      </Link>
    </div>
  );
};

export default Report;
