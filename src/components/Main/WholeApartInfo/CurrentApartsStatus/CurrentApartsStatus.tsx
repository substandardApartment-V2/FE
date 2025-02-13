import styles from "./CurrentApartsStatus.module.scss";
import StatusList from "./StatusList";
import { TCurrentApartsStatusList } from "@/types/TMain/TCurrentApartsStatusList";

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
    {
      title: "전국 최저 관리비 아파트",
      subTitle: "울산시 북구 화봉동",
      content: "동아 청구 아파트",
    },
  ];

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
