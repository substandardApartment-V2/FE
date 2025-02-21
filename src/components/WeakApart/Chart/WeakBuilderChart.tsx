import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function WeakBuilderChart() {
  const data = {
    labels: [
      "현대엔지니어링(주)",
      "재형건설산업(주)",
      "지브이종합건설",
      "라임종합건설",
      "삼도종합건설(주)",
      "보광종합건설(주)",
      "(주)포스코이앤씨",
      "계룡건설산업(주)",
      "(주)시티건설",
      "(주)대우건설",
    ],
    datasets: [
      {
        data: [118, 92, 82, 76, 71, 59, 58, 57, 53, 51],
        backgroundColor: ["#E4E1D0"],
        barThickness: 15,
        hoverBackgroundColor: "#E03A3E",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      y: {
        ticks: {
          color: "#ffffff",
          font: {
            size: 15,
          },
          crossAlign: "far", // 라벨이 축 왼쪽으로 정렬
        },
        grid: {
          offset: false,
          display: false, // y축 선 제거
        },
      },
      x: {
        display: false, // x축 제거
      },
    },
    plugins: {
      legend: {
        display: false, // 범례 비활성화
      },
      tooltip: {
        callbacks: {
          title: () => "",
          label: (context) => `${context.label} ${context.raw}건`,
        },
        position: "myCustomPositioner", // 커스텀 위치 사용
        backgroundColor: "rgba(255,255,255,1)", //툴팁 백그라운드 컬러
        borderColor: "rgba(224,58,62,1)", //툴팁 외곽선 컬러
        borderWidth: 1, //툴팁 외곽선 두께
        bodyColor: "rgba(20, 35, 55 ,1)", //툴팁 컨텐츠 텍스트 컬러
        titleColor: "#435464",
        cornerRadius: 0, //툴팁 radius
        displayColors: false, //툴팁 bar color 표시 여부
        caretSize: 0,
      },

      datalabels: {
        color: "#FFFFFF",
        font: {
          size: 12,
        },
        anchor: "end",
        align: "right",
      },
    },
  };

  return <Bar data={data} options={options} plugins={[ChartDataLabels]} />;
}
