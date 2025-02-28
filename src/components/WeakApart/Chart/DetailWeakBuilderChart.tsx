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
        barPercentage: 0.1,
        categoryPercentage: 0.1,
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
          display: false,
        },
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
      },
    },
    layout: {
      padding: {
        // left: 70, // 왼쪽 여백 늘리기
        // right: 20,
        top: 20,
        bottom: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#FFFFFF",
        font: {
          size: 14,
          weight: "bold",
        },
        anchor: "center", // ✅ 막대 기준 상단에 배치
        align: "top", // ✅ 수평막대 위로 이동
        offset: 6, // ✅ 막대와 간격 조정 (값을 키우면 더 위로 이동)
        formatter: (value, context) => {
          return context.chart.data.labels?.[context.dataIndex] || "";
        },
      },
    },
  };

  return <Bar data={data} options={options} plugins={[ChartDataLabels]} />;
}
