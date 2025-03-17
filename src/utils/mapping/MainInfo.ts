import { formatPriceCurrency } from "@/utils/parse/fotmatPriceCurrency";
import { TMainResponse } from "@/types/TApi/TAPITypes";

export const defaultMainData = [
  {
    title: "전국 아파트 평균 매매가",
    subTitle: "",
    content: "",
  },
  {
    title: "전국 아파트 수",
    subTitle: "",
    content: "",
  },
  {
    title: "전국 건설 예정 아파트",
    subTitle: "",
    content: "",
  },
];

export const formatMainData = (data: TMainResponse) => {
  if (!data) {
  }
  const formatData = [
    {
      title: "전국 아파트 평균 매매가",
      subTitle: `${data?.data.aptAvgPriceMonth}월 한달`,
      content: `${
        data?.data.aptAvgPrice
          ? formatPriceCurrency(data?.data.aptAvgPrice)
          : "정보없음"
      }`,
    },
    {
      title: "전국 아파트 수",
      subTitle: `${data?.data.plannedAptYear}년 ${data?.data.plannedAptMonth}월 기준`,
      content: `${data?.data.aptCount?.toLocaleString()} 곳`,
    },
    {
      title: "전국 건설 예정 아파트",
      subTitle: `${data?.data.plannedAptYear}년 ${data?.data.plannedAptMonth}월 기준`,
      content: `${data?.data.plannedAptCount?.toLocaleString()} 곳`,
    },
  ];

  return formatData;
};
