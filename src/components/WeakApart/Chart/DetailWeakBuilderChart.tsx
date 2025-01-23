import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function DetailWeakBuilderChart() {
  const data = {
    labels: [
      "1. 현대엔지니어링(주)",
      "2. 재형건설산업(주)",
      "3. 지브이종합건설",
      "4. 라임종합건설",
      "5. 삼도종합건설(주)",
      "6. 보광종합건설(주)",
      "7. (주)포스코이앤씨",
      "8. 계룡건설산업(주)",
      "9. (주)시티건설",
      "10. (주)대우건설",
      "11. (주)유림이엔씨",
      "12. 우리피엠씨종합건설(주)",
      "13. (유)신호건설산업",
      "14. (주)태곡종합건설",
      "15. 에스엠상선(주)",
      "16. (주)동양건설산업",
      "17. (주)시인건설",
      "18. 현대건설(주)",
      "19. (주)한양",
      "20. 제일건설(주)",
    ],
    datasets: [
      {
        data: [
          118, 92, 82, 76, 71, 59, 58, 57, 53, 51, 48, 47, 46, 46, 42, 40, 40,
          36, 34, 34,
        ],
        backgroundColor: ["#E4E1D0"],
        barThickness: 17,
        maxBarThickness: 20,
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
            size: 15,
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
