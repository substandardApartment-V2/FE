// 아파트 건설사, 시공사 정보 컴포넌트

import styles from "./ApartBuildInfo.module.scss";
import ApartBuildInfoList from "./ApartBuildInfoList";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { TApartBuildInfoList } from "@/types/TMain/TApartBuildInfoListTypes";

export default function ApartBuildInfo() {
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  const compannyData = [
    { title: "준공일", content: apartInfo?.buildInfo.completionDate },
    { title: "시행사", content: apartInfo?.buildInfo.constructor },
    { title: "시공사", content: apartInfo?.buildInfo.developer },
    { title: "세대수", content: apartInfo?.buildInfo.numberOfUnits },
  ];

  return (
    <section className={styles.buildInfo}>
      <ul className={styles.buildCompanyDate}>
        {compannyData.map((listData: TApartBuildInfoList, index) => (
          <ApartBuildInfoList
            key={index}
            title={listData.title}
            content={listData.content}
          />
        ))}
      </ul>
    </section>
  );
}
