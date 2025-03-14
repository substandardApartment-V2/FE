// 아파트 건설사, 시공사 정보 컴포넌트

import styles from "./ApartBuildInfo.module.scss";
import ApartBuildInfoList from "./ApartBuildInfoList";
import { useMainInfoStore } from "@/store/useMainInfoStore";
import { TApartBuildInfoList } from "@/types/TMain/TApartBuildInfoListTypes";
import { transformedArrayHandler } from "@/utils/mapping/TransFormedArray";

export default function ApartBuildInfo() {
  const apartInfo = useMainInfoStore((state) => state.apartInfo);

  return (
    <section className={styles.buildInfo}>
      <ul className={styles.buildCompanyDate}>
        {transformedArrayHandler(apartInfo?.buildInfo).map(
          (listData: TApartBuildInfoList, index) => (
            <ApartBuildInfoList
              key={index}
              title={listData.title}
              data={listData.data}
            />
          )
        )}
      </ul>
    </section>
  );
}
