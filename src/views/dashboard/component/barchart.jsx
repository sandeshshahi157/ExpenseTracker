import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ExpenseBarChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Income',
        type: 'column',
        data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
      },
      {
        name: 'Cashflow',
        type: 'column',
        data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
      },
      {
        name: 'Revenue',
        type: 'line',
        data: [20, 29, 37, 36, 44, 45, 50, 58],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        stacked: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [1, 1, 4],
      },
      title: {
        text: 'Expense ',
        align: 'left',
        offsetX: 110,
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
      yaxis: [
        {
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#008FFB',
          },
          labels: {
            style: {
              colors: '#008FFB',
            },
          },
          title: {
            text: 'Income (thousand crores)',
            style: {
              color: '#008FFB',
            },
          },
          tooltip: {
            enabled: true,
          },
        },
        {
          seriesName: 'Income',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#00E396',
          },
          labels: {
            style: {
              colors: '#00E396',
            },
          },
          title: {
            text: 'Operating Cashflow (thousand crores)',
            style: {
              color: '#00E396',
            },
          },
        },
        {
          seriesName: 'Revenue',
          opposite: true,
          axisTicks: {
            show: true,
          },
          axisBorder: {
            show: true,
            color: '#FEB019',
          },
          labels: {
            style: {
              colors: '#FEB019',
            },
          },
          title: {
            text: 'Revenue (thousand crores)',
            style: {
              color: '#FEB019',
            },
          },
        },
      ],
      tooltip: {
        fixed: {
          enabled: true,
          position: 'topLeft',
          offsetY: 30,
          offsetX: 60,
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40,
      },
    },
  });

  useEffect(() => {
    // If you want to update the chartData dynamically within the component, you can do something like this:
    // For example, update the title of the chart dynamically after 2 seconds
    const timeoutId = setTimeout(() => {
      setChartData((prevData) => ({
        ...prevData,
        options: {
          ...prevData.options,
          title: {
            ...prevData.options.title,
            text: 'Updated Expense', // Change the title dynamically
          },
        },
      }));
    }, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ExpenseBarChart;
