import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";

const Oppo35 = () => {
    const [state, setState] = useState({
          
        series: [45],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          colors: ["#475BE8", "#CFC8FF"],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '55%',
              }
            },
            dataLabels: {
                enabled: false,
            },
          },
          labels: ['45%'],
          
        },
      
      
      }
      
      );
  return (
    <div>
        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={185} />
    </div>
  )
}

export default Oppo35