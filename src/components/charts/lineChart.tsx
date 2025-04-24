import React, { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ILineChart } from '../../interfaces';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: { position: 'top', display: false },
    tooltip: { mode: 'index', intersect: false },
    datalabels: {
      display: false,
      color: 'white',
      align: 'top',
      formatter: (value: number) => value.toString(),
    },
  },
  scales: {
    x: {
      title: { display: false, text: '' },
    },
    y: {
      beginAtZero: true,
      title: { display: false, text: '' },
    },
  },
};

const LineChart: React.FC<ILineChart> = ({ data, title, useGradientFill = false }) => {
  const chartRef = useRef<ChartJS<'line'> | null>(null);

  const [chartData, setChartData] = useState<ChartData<'line'>>(data);

  useEffect(() => {
    if (useGradientFill && chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const area = chart.chartArea;

      if (!ctx || !area) return;

      const gradient = ctx.createLinearGradient(0, area.top, 0, area.bottom);
      gradient.addColorStop(0, 'rgba(45, 96, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(45, 96, 255, 0)');

      const updatedData = {
        ...data,
        datasets: data.datasets.map((ds) => ({
          ...ds,
          backgroundColor: gradient,
          fill: true,
        })),
      };

      setChartData(updatedData);
    } else {
      setChartData(data);
    }
  }, [data, useGradientFill]);

  return (
    <Line ref={chartRef} data={chartData} options={options} plugins={[ChartDataLabels]} />
  );
};

export default LineChart;
