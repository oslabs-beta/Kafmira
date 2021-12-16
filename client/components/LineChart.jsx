import React, { useState }  from "react";
// import { Line } from "react-chartjs-2";
import { useEffect } from "react";
// import {CategoryScale, Chart} from 'chart.js'; 
// Chart.register(CategoryScale) 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  } from 'chart.js'
  import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  ) 

const BrokerDummyData = () => {
  // const [chartData, setChartData] = useState({});


  // const data = () => {
  //   setChartData({
  //     labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
  //     datasets: [
  //       {
  //         label: 'bytes',
  //         data:[10, 11, 12, 13, 14, 15],
  //         backgroundColor: 'rgba(75, 192, 192, 0.6)',
  //         borderColor:'rgba(75, 192, 192, 1)',
  //         borderWidth: 4

  //       }
  //     ]
  //   })
  // }

  // useEffect(() => {
  //   data()
  // }, [])


  return (
    <div>
      <h3>Dummy Broker Line Data Chart</h3>
      <div style={{height:"300px", width:"300px"}}>
          <Chart type='line' data={ {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
      datasets: [
        {
          label: 'bytes per second',
          data:[10, 20, 12, 13, 14, 15],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor:'rgba(75, 192, 192, 1)',
          borderWidth: 4

        }
      ]
    }}  />
      </div>
    </div>
  );
};

export default BrokerDummyData;