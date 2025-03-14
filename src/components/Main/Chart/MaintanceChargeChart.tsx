// 관리비 차트 컴포넌트

import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions, Tick, Tooltip } from "chart.js";
import { TMaintanceCharge } from "@/types/TApi/TAPITypes";

//툴팁 커스텀 포지션
Tooltip.positioners.myCustomPositioner = function (elements) {
  if (!elements.length) {
    return false;
  }

  const bar = elements[0].element;

  return {
    x: bar.x,
    y: bar.y - 5,
    xAlign: "center",
    yAlign: "bottom",
  };
};

type TMaintanceChargeChart = {
  data: TMaintanceCharge[];
};

const MaintanceChargeChart = (props: TMaintanceChargeChart) => {
  const maintanceFee = props.data.map((listData) => listData.fee);

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
        data: maintanceFee,
        backgroundColor: ["#E4E1D0"],
        maxBarThickness: 20,
        minBarLength: 3,
        categoryPercentage: 0.6,
        barPercentage: 0.8,
        hoverBackgroundColor: "#E03A3E",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    layout: {
      padding: {
        left: -8,
      },
    },
    scales: {
      y: {
        grid: {
          color: function (context: { tick: Tick }) {
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
          callback: function (value) {
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
        callbacks: {
          title: function () {
            //툴팁 타이틀 함수
            return "";
          },
          label: function (context) {
            //툴팁 컨텐츠 함수
            const value = context.raw as number;
            return `${value.toLocaleString()}원`;
          },
        },
        position: "myCustomPositioner", // 커스텀 위치 사용
        backgroundColor: "rgba(255,255,255,1)", //툴팁 백그라운드 컬러
        borderColor: "rgba(224,58,62,1)", //툴팁 외곽선 컬러
        borderWidth: 1, //툴팁 외곽선 두께
        bodyColor: "rgba(20, 35, 55 ,1)", //툴팁 컨텐츠 텍스트 컬러
        cornerRadius: 0, //툴팁 radius
        displayColors: false, //툴팁 bar color 표시 여부
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MaintanceChargeChart;
