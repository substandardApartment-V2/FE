import styles from "./ApartBuildInfo.module.scss";
import ApartBuildInfoList from "./ApartBuildInfoList";
import ApartHouseHoldInfoList from "./ApartHouseHoldInfoList";

export default function ApartBuildInfo() {
  const compannyDummyData = [
    { title: "준공일", content: "2008.12.22" },
    { title: "시행사", content: "황학주택재개발조합" },
    { title: "시공사", content: "롯데건설" },
  ];

  const houseHoldDummyData = [
    { title: "세대수", content: "1534세대" },
    { title: "용적률", content: "557%" },
    { title: "건폐율", content: "55%" },
  ];

  return (
    <section className={styles.buildInfo}>
      <ul className={styles.buildCompanyDate}>
        {compannyDummyData.map((listData) => (
          <ApartBuildInfoList
            title={listData.title}
            content={listData.content}
          />
        ))}
      </ul>
      <ul className={styles.apartHousehold}>
        {houseHoldDummyData.map((listData) => (
          <ApartHouseHoldInfoList
            title={listData.title}
            content={listData.content}
          />
        ))}
      </ul>
    </section>
  );
}
