import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";
import { useTheme } from "@mui/material";
import { tokens } from "../theme"

const SupportLine2 = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [state, setState] = useState({
          
        series: [{
            name: "Sales",
            data: [61, 31, 37, 81, 79, 62, 69, 21, 148],
            
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

export default SupportLine2