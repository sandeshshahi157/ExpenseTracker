import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ExpenseLineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {

        data: [
          [1612821, 70], // Example data, replace with your actual data
          [161290, 90],
          [161299, 85],
          
          
        ],
        name: `Expense `,
      },
      
    ],
    options: {
      chart: {
        type: 'area',
        stacked:false ,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      dataLabels: {
        enabled: true
      },
      markers: {
        size: 0,
      },
      title: {
      
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 8,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100]
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 10000).toFixed(0);
          },
        },
        title: {
          text: 'Price',

         
        },
      },
      xaxis: {
        type: 'data',
      },
      tooltip: {
        shared: true,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0)
          }
        }
      }
    },
  });

  useEffect(() => {
    // Any additional logic you might want to execute after rendering goes here
  }, []);

  return (
    <div>
      <div >
        <ReactApexChart options={chartData.options} series={chartData.series} type="area" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ExpenseLineChart;