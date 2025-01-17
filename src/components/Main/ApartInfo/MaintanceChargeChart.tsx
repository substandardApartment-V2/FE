import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js/auto";
import { Tooltip } from "chart.js";

const MaintanceChargeChart = () => {
  const area = "59㎡";
  const data = {
    labels: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    datasets: [
      {
        label: `관리비 개별사용료 - ${area}`,
        data: [
          3006, 2010, 1015, 2540, 2000, 4000, 12340, 3000, 2200, 2300, 2400,
          4322,
        ],
        backgroundColor: ["#E4E1D0"],
        barThickness: 17,
        barPercentage: 3,
        maxBarThickness: 20,
        minBarLength: 3,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: function (context: any) {
            if (context.tick.value === 0) {
              return "#ffffff";
            }
            return "#ffffff";
          },
          lineWidth: 0.5,
        },

        border: {
          display: true,
          dash: [0],
          width: 1,
          color: "rgba(255, 255, 255, 0.8)",
        },
        ticks: {
          callback: function (value: number) {
            return value.toLocaleString() + "원";
          },
          color: "#ffffff",
          font: {
            size: 12,
          },
          padding: 10,
        },
      },
      x: {
        beginAtZero: true,
        ticks: {
          color: "#ffffff",
          font: {
            size: 12,
          },
          padding: 10,
        },
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "rgba(224,58,62,1)",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MaintanceChargeChart;
