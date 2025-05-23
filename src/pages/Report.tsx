import { Link } from "react-router-dom";
import styles from "./Report.module.scss";
import SEOMetaTag from "@/components/Common/SEOMetaTag/SEOMetaTag";

const Report = () => {
  const googleUrl = import.meta.env.VITE_GOOGLE_URL;

  return (
    <div className={styles.report}>
      <SEOMetaTag
        title="제보"
        content="부실아파트에 관련된 제보를 할 수 있는 페이지입니다."
      />
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
