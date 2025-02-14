import errorBackIcon from "@/assets/Error/errorBackIcon.svg";
import errorIcon from "@/assets/Error/errorIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.error}>
      <img src={errorIcon} alt="404 error icon" />
      <strong>요청하신 페이지를 찾을 수가 없습니다.</strong>
      <p>
        페이지의 주소가 잘못 입력되었거나,
        <br />
        주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
      </p>
      <div className={styles.linkWrap}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          이전으로 <img src={errorBackIcon} alt="이전 아이콘" />
        </button>
        <Link to="">
          메인으로 <img src={errorBackIcon} alt="이전 아이콘" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
