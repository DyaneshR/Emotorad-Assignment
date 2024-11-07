// Dashboard.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [{ label: 'Sales', data: [30, 50, 40, 60], fill: true, backgroundColor: 'rgba(75,192,192,0.2)', borderColor: 'rgba(75,192,192,1)' }],
  };

  return <Line data={data} />;
};

export default Dashboard;
