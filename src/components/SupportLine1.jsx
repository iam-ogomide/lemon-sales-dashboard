import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@mui/material";
import { tokens } from "../theme"

const SupportLine1 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [state, setState] = useState({
          
        series: [{
            name: "Sales",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          
          grid: {
            row: {
              colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            style: {
                fontSize:  '25px',
                color:  colors.grey[100]
              },
          }
        },
      
      
      }
      
      );
  return (
    <div>
        <ReactApexChart options={state.options} series={state.series} type="line" height={200} />
    
    </div>
  )
}

export default SupportLine1