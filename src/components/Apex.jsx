import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const Apex = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [state, setState] = useState({
        options: {
          colors: ["#E91E63", "#FF9800"],
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
          },
        },
        series: [
          {
            name: "Income",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          
          
          },
          {
            name: "Spend",
            data: [3, 60, 35, 80, 49, 70, 20, 81],
            
          },
          
        ],
      });
  return (
    <Chart
            options={state.options}
            series={state.series}
            type="radar"
            width="450"
          />
  )
}

export default Apex