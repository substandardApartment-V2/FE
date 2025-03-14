import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js";
import { useState, useEffect } from "react";

export default function FiveYearsWeakBuilderChart() {
  const [fontSize, setFontSize] = useState(16);
  const [barThickness, setBarThickness] = useState(13);

  useEffect(() => {
    const handleResize = () => {
      const newFontSize = window.innerWidth < 600 ? 10 : 12;
      const newBarThickness = window.innerWidth < 600 ? 11 : 13;

      setFontSize(newFontSize);
      setBarThickness(newBarThickness);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    labels: [
      "현대엔지니어링(주)",
      "재형건설산업(주)",
      "지브이종합건설",
      "라임종합건설",
      "삼도종합건설(주)",
    ],
    datasets: [
      {
        data: [118, 92, 82, 76, 71],
        backgroundColor: ["#E4E1D0"],
        barThickness: barThickness,
        maxBarThickness: 20,
        minBarLength: 3,
        borderWidth: 0,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        hoverBackgroundColor: "#E03A3E",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    // responsive: false,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: -100,
        bottom: -100,
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
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
        bodyFont: {
          size: fontSize,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
