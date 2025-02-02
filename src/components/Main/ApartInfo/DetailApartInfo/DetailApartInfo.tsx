import styles from "./DetailApartInfo.module.scss";
import closeButtonIcon from "@/assets/Main/ApartInfo/closeButtonIconD.svg";
import { useApartInfoStore } from "@/store/useApartInfoStore";
import DetailApartInfoList from "./DetailApartInfoList";

export default function DetailApartInfo() {
  const setIsDetailInfo = useApartInfoStore((state) => state.setIsDetailInfo);

  const dummyData = [
    {
      title: "건물",
      data: {
        최고층수: 33,
        지하층수: 0,
        "승강기 수(동단위)": 20,
        "건물구조 방식": "벽식구조",
      },
    },
    {
      title: "외부인 개방여부",
      data: {
        지상: "입주민 허용",
        지하: "X",
      },
    },
    {
      title: "주차대수",
      data: {
        지상: 1959,
        지하: 0,
      },
    },
    {
      title: "지상 충전시설 대수",
      data: {
        "지상 충전시설 대수": 89,
        "지하 충전시설 대수": 0,
        "지상전용 주차면수": 39,
        "지하전용 주차면수": 0,
      },
      detailData: [
        "지상|스탠드형 충전기|AC3상 7핀|급속|2|한국전력|",
        "지상|스탠드형 충전기|AC3상 7핀|급속|2|한국전력|",
        "지상|스탠드형 충전기|AC3상 7핀|급속|2|한국전력|",
        "지상|스탠드형 충전기|AC3상 7핀|급속|2|한국전력|",
        "지상|스탠드형 충전기|AC3상 7핀|급속|2|한국전력|",
      ],
    },
    {
      title: "소독관리",
      data: {
        "관리 방식": "분무식, 독이식",
        계약업체: "X",
        "연간 소독 횟수": 12,
      },
    },
    {
      title: "경비관리",
      data: {
        "관리 방식": "위탁관리",
        계약업체: "케이티팝스",
        인원: 15,
      },
    },
    {
      title: "청소관리",
      data: {
        "관리 방식": "위탁관리",
        계약업체: "광인산업(주)",
        "음식물 처리방식": "위탁관리",
      },
    },
    {
      title: "일반관리",
      data: {
        인원: 15,
      },
    },
  ];

  return (
    <section className={styles.building}>
      <button
        onClick={() => {
          setIsDetailInfo(null);
        }}
      >
        <img src={closeButtonIcon} alt="close icon" />
      </button>
      <ul>
        {dummyData.map((data) => (
          <DetailApartInfoList
            title={data.title}
            data={data.data}
            detailData={data.detailData}
          />
        ))}
      </ul>
    </section>
  );
}
