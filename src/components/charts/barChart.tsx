import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IBarChart } from "../../interfaces";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({
  labels,
  datasets,
}: IBarChart) => {

  const formattedDatasets = datasets.map(dataset => ({
    ...dataset,
    barThickness: 15,
    categoryPercentage: 0.5,
    barPercentage: 0.9,
    borderRadius: 10,
    borderSkipped: false,
  }));

  const data = {
    labels: labels,
    datasets: formattedDatasets
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          boxWidth: 15,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
        }
      },
    },
    scales: {
      x: {
        stacked: false,
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          padding: 10,
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true
        }
      },
    },
  };

  return (
    <Bar data={data} options={options} />
  );
};

export default BarChart;
