import React, { useState } from "react";


import { AgChartsReact } from "ag-charts-react";

const ExpenseChart = () => {
  function getData() {
    return [ 
      { asset: "Stocks", amount: 60000 },
      { asset: "Food", amount: 40000 },
      { asset: "Clothes", amount: 70000 },
      { asset: "Briyani", amount: 70000 },

      
    ];
  }
  const [options, setOptions] = useState({
    data: getData(),
    title: {
      text: 'Total Spending PieChart',
  },
  
    series: [
      {
        type: "pie",
        angleKey: "amount",
        calloutLabelKey: "asset",
        sectorLabelKey: "amount",
        sectorLabel: {
          color: "white",
          fontWeight: "bold",
          
          formatter: ({ value }) => `$${(value / 1000).toFixed(0)}K`,
        },
      },
    ],
  });

  return <AgChartsReact   options={options} />;
};
export default ExpenseChart;
