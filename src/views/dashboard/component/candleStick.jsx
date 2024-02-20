import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      data: [],
    }],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'Real-Time Candlestick Chart',
        align: 'left',
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  const fetchStockData = async () => {
    const apiKey = 'FX07E6SAHPFHMPIH'; // Replace with your Alpha Vantage API key
    const symbol = 'AAPL'; // Example stock symbol (Apple Inc.)

    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`
      );

      const stockData = [];
      for (const timestamp in response.data['Time Series (1min)']) {
        const dataPoint = {
          x: new Date(timestamp).getTime(),
          y: [
            parseFloat(response.data['Time Series (1min)'][timestamp]['1. open']),
            parseFloat(response.data['Time Series (1min)'][timestamp]['2. high']),
            parseFloat(response.data['Time Series (1min)'][timestamp]['3. low']),
            parseFloat(response.data['Time Series (1min)'][timestamp]['4. close']),
          ],
        };
        stockData.push(dataPoint);
      }

      // Update the state with the fetched stock data
      setChartData({
        series: [{ data: stockData }],
        options: chartData.options,
      });
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  useEffect(() => {
    // Fetch stock data initially
    fetchStockData();

    // Fetch stock data every 1 minute
    const intervalId = setInterval(fetchStockData, 60000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once during component mount

 
  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="candlestick" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
