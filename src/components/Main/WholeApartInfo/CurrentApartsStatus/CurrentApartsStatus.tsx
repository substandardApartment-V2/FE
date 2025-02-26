// 전국 아파트 종합 정보 컴포넌트

import styles from "./CurrentApartsStatus.module.scss";
import StatusList from "./StatusList";
import { TCurrentApartsStatusList } from "@/types/TMain/TCurrentApartsStatusListTypes";
import useGetApartData from "@/hooks/Api/useGetApartData";

export default function CurrentApartsStatus() {
  const dummyData = [
    {
      title: "전국 아파트 평균 매매가",
      subTitle: "12월 한달",
      content: "6억 8500만원",
    },
    {
      title: "전국 아파트 수",
      subTitle: "2022년 7월 기준",
      content: "11,661,851곳",
    },
    {
      title: "전국 건설 예정 아파트",
      subTitle: "2025년 2월 기준",
      content: "87 곳",
    },
  ];

  const { data, isLoading } = useGetApartData(
    `${import.meta.env.VITE_LOCAL_API_CALL}/apt/main`
  );

  return (
    <section className={styles.currentApartStatus}>
      <h2 className={styles.title}>아파트 근황</h2>
      <ul className={styles.currentApartsStatusContainer}>
        {dummyData.map((listData: TCurrentApartsStatusList, index) => (
          <StatusList
            key={index}
            title={listData.title}
            subTitle={listData.subTitle}
            content={listData.content}
          />
        ))}
      </ul>
    </section>
  );
}
