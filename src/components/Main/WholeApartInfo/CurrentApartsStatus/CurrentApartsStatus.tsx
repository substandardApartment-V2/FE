// 전국 아파트 종합 정보 컴포넌트

import styles from "./CurrentApartsStatus.module.scss";
import StatusList from "./StatusList";
import { TCurrentApartsStatusList } from "@/types/TMain/TCurrentApartsStatusListTypes";
import useGetApartData from "@/hooks/Api/useGetApartData";
import { TMainResponse } from "@/types/TApi/TAPITypes";
import { formatMainData } from "@/utils/mapping/MainInfo";
import { defaultMainData } from "@/utils/mapping/MainInfo";

export default function CurrentApartsStatus() {
  const { data, isLoading } = useGetApartData<TMainResponse>(
    `${import.meta.env.VITE_SERVER_API_CALL}/apt/main`
  );

  const formatData = data ? formatMainData(data) : defaultMainData;

  return (
    <section className={styles.currentApartStatus}>
      <h2 className={styles.title}>아파트 근황</h2>
      <ul className={styles.currentApartsStatusContainer}>
        {formatData.map((listData: TCurrentApartsStatusList, index) => (
          <StatusList
            key={index}
            title={listData.title}
            subTitle={listData.subTitle}
            content={listData.content}
            isLoading={isLoading}
          />
        ))}
      </ul>
    </section>
  );
}
