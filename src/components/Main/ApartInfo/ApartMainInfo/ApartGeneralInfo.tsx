import styles from "./ApartGeneralInfo.module.scss";
import welfareIcon from "@/assets/Main/ApartInfo/welfareIcon.svg";
import childCareIcon from "@/assets/Main/ApartInfo/childCareIcon.svg";

export default function ApartGeneralInfo() {
  const dummyData = [
    {
      title: "부대복리시설",
      content: [
        "관리 사무소",
        "자전거보관소",
        "노인정",
        "주민공동시설",
        "커뮤니티공간",
        "보육시설",
        "어린이 놀이터",
      ],
    },
    { title: "건물구조", content: "일반철골구조" },
    { title: "관리방식", content: "위탁관리" },
    { title: "난방방식", content: "개별난방" },
    { title: "CCTV 대수", content: "810대" },
    { title: "총주차 대수", content: "1959대" },
    { title: "전기차 충전 시설", content: "0" },
    { title: "관리사무소 주소", content: "서울시 중구 청계천로 400" },
    { title: "관리사무소 연락처", content: "0220486100" },
    { title: "관리사무소 팩스", content: "0220486101" },
    { title: "주택관리업자", content: "광인산업(주)" },
  ];

  return (
    <ul className={styles.apartGeneralInfo}>
      <li>
        <div className={styles.title}>
          <strong>부대복리시설</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <ul className={styles.content}>
          <li>
            <img src={childCareIcon} alt="childCare ICon" />
            <span>보육시설</span>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
      <li>
        <div className={styles.title}>
          <strong>건물구조</strong>
          <img src={welfareIcon} alt="welfare facilities" />
        </div>
        <span className={styles.content}>일반철골구조</span>
      </li>
    </ul>
  );
}
