import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ExpensePieChart = () => {
  const [chartData] = useState({
    series: [5000,8000,9000,70000,5000],
    options: {
      chart: {
       
        width: 380,
        type: 'pie',
      },
      labels: ['Food', 'Clothes', 'Travel', 'Fees', 'Other'],
      responsive: [{
        breakpoint: 400,
        options: {
          chart: {
            width: 350,
            
          },
          legend: {
            position: 'left'
            
          }
        }
      }]
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ExpensePieChart;
