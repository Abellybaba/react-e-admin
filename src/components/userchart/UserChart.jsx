import React from 'react';
import Chart from "react-apexcharts";
//import data from "../dummyData"
//import { userData } from "../../dummyData";

  

const UserChart = () => {
   
  const data = {
    options: {
      stroke: {
        curve: 'smooth',
      },
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91,50, 49, 60]
      }
    ]
  };

  
  return (
    <div className="container shadow-lg rounded">
        <h5 className="fw-bold py-2 h5">Users Analytics</h5>
        
        <Chart
              options={data.options}
              series={data.series}
              type="line"
              height={200}
              
            />
    </div>
  )
}

export default UserChart