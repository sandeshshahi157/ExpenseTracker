import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { colors } from "@mui/material";

export default function BasicBars() {
  return (
    <BarChart className="font-mono"
      title="MothWise Summary"
      xAxis={[
        {
          scaleType: "band",
          data: [
            "Jan",
            "Fab",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          
        },
      ]}
      series={[
        {
          data: [
            4005, 3050, 5500, 6050, 7000, 8888, 20052, 3555, 11251, 3545, 4780,
            2070,
            
          ],
          
          
        },
        
      ]}
      width={520}
      height={350}
    />
  );
}

