// src/components/GraficaActividad.jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend
);

const Grafica = () => {
  const data = {
    labels: [
      '25/4', '26/4', '27/4', '28/4', '29/4', '30/4',
      '1/5', '2/5', '3/5'
    ],
    datasets: [
      {
        label: 'Valor de Transacción (ETH)',
        data: [0.14, 0.22, 0.30, 0.15, 0.08, 0.65, 0.12, 0.18, 0.25],
        fill: true,
        backgroundColor: 'rgba(99, 255, 219, 0.2)',
        borderColor: 'rgba(139, 92, 246, 1)',
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: 'rgba(139, 92, 246, 1)'
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `${value} ETH`,
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-blue-600">Actividad de Transacciones</h2>
        <span className="text-sm px-3 py-1 bg-purple-100 text-purple-600 rounded-full">Últimos 10 registros</span>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Grafica;
