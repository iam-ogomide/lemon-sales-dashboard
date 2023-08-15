import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";

const BarSupport = () => {
    const [state, setState] = useState({
          
        series: [{
            name: "Users",
            data: [183, 124, 115, 85, 143, 143, 96],
        },
        ],
        options: {
            chart: {
                type: "bar",
                toolbar: {
                    show: false,
                },
            },
            colors: ["#475BE8", "#CFC8FF"],
            plotOptions: {
                bar: {
                   
                    horizontal: false,
                    columnWidth: "55%",
                },
            },
            dataLabels: {
                enabled: false,
            },
            grid: {
                show: false,
            },
            stroke: {
                colors: ["transparent"],
                width: 4,
            },
            xaxis: {
                categories: ["S", "M", "T", "W", "TH", "F", "S"],
            },
            yaxis: {
                title: {
                    text: "$ (thousands)",
                },
            },
            fill: {
                opacity: 1,
            },
            legend: {
                position: "bottom",
                horizontalAlign: "right",
            },
            tooltip: {
                y: {
                    formatter(val) {
                        return `$ ${val} thousands`;
                    },
                },
            },
        }}
      
      );
  return (
    <div>
        <ReactApexChart options={state.options} series={state.series} type="bar" height={150} />
    </div>
  )
}

export default BarSupport