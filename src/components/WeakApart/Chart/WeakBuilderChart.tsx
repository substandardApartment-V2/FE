import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { ChartOptions } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default function WeakBuilderChart() {
  const [fontSize, setFontSize] = useState(16);
  const [barThickness, setBarThickness] = useState(13);

  useEffect(() => {
    const handleResize = () => {
      const newFontSize = window.innerWidth < 600 ? 12 : 16;
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
        barThickness: barThickness, // Use dynamic bar thickness
        maxBarThickness: 50,
        minBarLength: 3,
        barPercentage: 0.5,
        categoryPercentage: 0.3,
        hoverBackgroundColor: "#E03A3E",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      y: {
        ticks: {
          color: "#ffffff",
          font: {
            size: fontSize,
          },
          crossAlign: "far",
        },
        grid: {
          offset: false,
          display: false,
        },
      },
      x: {
        display: false,
      },
    },
    layout: {
      padding: {
        right: 30,
        top: -6,
        bottom: -6,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: () => "",
          label: (context) => `${context.label} ${context.raw}건`,
        },
        position: "myCustomPositioner",
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "rgba(224,58,62,1)",
        borderWidth: 1,
        bodyColor: "rgba(20, 35, 55 ,1)",
        titleColor: "#435464",
        cornerRadius: 0,
        displayColors: false,
        caretSize: 0,
      },

      datalabels: {
        color: "#FFFFFF",
        font: {
          size: fontSize,
        },
        anchor: "end",
        align: "right",
      },
    },
  };

  return <Bar data={data} options={options} plugins={[ChartDataLabels]} />;
}
