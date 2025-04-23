import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { IPieChart } from '../../interfaces';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  labels,
  dataset,
}: IPieChart) => {
  const data = {
    labels,
    datasets: dataset,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Pie
      data={data}
      options={{
        ...options,
        plugins: {
          ...options.plugins,
          datalabels: {
            align: 'center',
            anchor: 'center',
            color: '#fff',
            font: (ctx) => ({
              size: 8,
              weight: 'bold',
            }),
            formatter: (value: any, context: any) => {
              const label = context.chart.data.labels?.[context.dataIndex] || '';
              return `${value}%\n${label}`;
            },
          },
        },
      }}
      plugins={[ChartDataLabels]}
    />
  );
};

export default PieChart;
