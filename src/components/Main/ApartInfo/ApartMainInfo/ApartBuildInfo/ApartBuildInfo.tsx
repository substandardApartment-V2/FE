import styles from "./ApartBuildInfo.module.scss";
import ApartBuildInfoList from "./ApartBuildInfoList";
import ApartHouseHoldInfoList from "./ApartHouseHoldInfoList";
import { useMainInfoStore } from "@/store/useMainInfoStore";

export default function ApartBuildInfo() {
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const compannyData = [
    { title: "준공일", content: apartInfo?.buildInfo.completionDate },
    { title: "시행사", content: apartInfo?.buildInfo.constructor },
    { title: "시공사", content: apartInfo?.buildInfo.developer },
  ];

  const houseHoldData = [
    { title: "세대수", content: apartInfo?.buildInfo.numberOfUnits },
  ];

  return (
    <section className={styles.buildInfo}>
      <ul className={styles.buildCompanyDate}>
        {compannyData.map((listData: any, index) => (
          <ApartBuildInfoList
            key={index}
            title={listData.title}
            content={listData.content}
          />
        ))}
      </ul>
      <ul className={styles.apartHousehold}>
        {houseHoldData.map((listData: any, index) => (
          <ApartHouseHoldInfoList
            key={index}
            title={listData.title}
            content={listData.content}
          />
        ))}
      </ul>
    </section>
  );
}
