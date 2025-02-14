import styles from "./ApartBuildInfo.module.scss";
import ApartBuildInfoList from "./ApartBuildInfoList";
import ApartHouseHoldInfoList from "./ApartHouseHoldInfoList";
import { useMainInfoStore } from "@/store/useMainInfoStore";

export default function ApartBuildInfo() {
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const compannyData = [
    { title: "준공일", content: apartInfo?.completionDate },
    { title: "시행사", content: apartInfo?.developer },
    { title: "시공사", content: apartInfo?.constructor },
  ];

  const houseHoldData = [
    { title: "세대수", content: apartInfo?.numberOfUnits },
  ];

  return (
    <section className={styles.buildInfo}>
      <ul className={styles.buildCompanyDate}>
        {compannyData.map((listData: any) => (
          <ApartBuildInfoList
            title={listData.title}
            content={listData.content}
          />
        ))}
      </ul>
      <ul className={styles.apartHousehold}>
        {houseHoldData.map((listData: any) => (
          <ApartHouseHoldInfoList
            title={listData.title}
            content={listData.content}
          />
        ))}
      </ul>
    </section>
  );
}
