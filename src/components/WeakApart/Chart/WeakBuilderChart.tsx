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
        barThickness: 17,
        maxBarThickness: 12,
        minBarLength: 3,
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
            size: 13,
          },
          crossAlign: "far", //라벨이 축 왼쪽으로 정렬
        },

        grid: {
          // y축 line 제거
          offset: false,
          display: false,
        },
      },
      x: {
        // x축 제거
        display: false,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 25,
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          padding: 20,
        },
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
