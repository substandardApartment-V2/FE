import styles from "./WeakApartInfo.module.scss";
import ApartHeadInfo from "@/components/Main/ApartInfo/ApartHeadInfo";
import weakInfoIcon from "@/assets/Main/ApartInfo/weakInfoIcon.svg";
import goBackIcon from "@/assets/Main/ApartInfo/goBackIcon.svg";
import pillarIcon from "@/assets/Main/ApartInfo/structureIcon.svg";
import supplementIcon from "@/assets/Main/ApartInfo/supplementIcon.svg";

export default function WeakApartInfo() {
  const dummyData = [
    { title: "준공일", content: "2008.12.22" },
    { title: "설계사", content: "에스아이/에스유" },
    { title: "세대수", content: "870세대" },
    { title: "시공사", content: "대보건설" },
    { title: "시행사", content: "에스아이/에스유" },
    { title: "감리사", content: "건원 신화 한빛" },
  ];

  const dummyPillarData = [
    { title: "전체", content: "464" },
    { title: "무량판", content: "331" },
    { title: "미흡개소", content: "12" },
    { title: "콘크리트 강도", content: "25" },
  ];

  const dummySupplementData = [
    { title: "공법", content: "슬래브보완" },
    { title: "보강 현황", content: "보강중" },
    { title: "공사 완료 예정일", content: "2023.08.10" },
  ];

  return (
    <>
      <ApartHeadInfo
        apartName="파주 운정 A34"
        apartRegion="경기도 파주시 초롱꽃로 17"
        zipCode="04572"
      />
      <section className={styles.weakApartInfo}>
        <section className={styles.apartInfo}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>
              <strong>기본정보</strong>
              <img src={weakInfoIcon} alt="welfare facilities" />
            </div>
            <div className={styles.goBack}>
              <strong>뒤로가기</strong>
              <button>
                <img src={goBackIcon} alt="welfare facilities" />
              </button>
            </div>
          </div>
          <ul className={styles.contentContainer}>
            {dummyData.map((listData) => (
              <li>
                <strong>{listData.title}</strong>
                <span>{listData.content}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.weakInfo}>
          <section className={styles.pillarStatus}>
            <div className={styles.title}>
              <strong>기둥설치현황</strong>
              <img src={pillarIcon} alt="apart pillar current status" />
            </div>
            <ul className={styles.contentContainer}>
              {dummyPillarData.map((listData) => (
                <li>
                  <strong>{listData.title}</strong>
                  <span>{listData.content}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.supplementMethod}>
            <div className={styles.title}>
              <strong>보완공법</strong>
              <img src={pillarIcon} alt="apart supplement method" />
            </div>
            <ul className={styles.contentContainer}>
              {dummySupplementData.map((listData) => (
                <li>
                  <strong>{listData.title}</strong>
                  <span>{listData.content}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}
