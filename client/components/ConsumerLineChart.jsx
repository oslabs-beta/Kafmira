// import React, { useState }  from "react";
// // import { Line } from "react-chartjs-2";
// import { useEffect } from "react";
// // import {CategoryScale, Chart} from 'chart.js'; 
// // Chart.register(CategoryScale) 
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   } from 'chart.js'
//   import { Chart } from 'react-chartjs-2'
  
//   ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
//   ) 

// const ConsumerLineDummyData = () => {
//   // const [chartData, setChartData] = useState({});


//   // const data = () => {
//   //   setChartData({
//   //     labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
//   //     datasets: [
//   //       {
//   //         label: 'bytes',
//   //         data:[10, 11, 12, 13, 14, 15],
//   //         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//   //         borderColor:'rgba(75, 192, 192, 1)',
//   //         borderWidth: 4

//   //       }
//   //     ]
//   //   })
//   // }

//   // useEffect(() => {
//   //   data()
//   // }, [])


//   return (
//     <div>
//       <h3 style ={{textAlign: 'center'}}>Records Consumed per Second</h3>
//       <div style={{height:"300px", width:"300px"}}>
//           <Chart type='line' data={ {
//             labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
//             datasets: [
//               {
//                 label: 'Records per second',
//                 data:[3, 1, 2, 3, 0, 3],
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//                 borderColor:'rgba(75, 192, 192, 1)',
//                 borderWidth: 4
//               }
//             ]
//           }}/>
//       </div>
//     </div>
//   );
// };

// export default ConsumerLineDummyData;

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { Line } from "react-chartjs-2";
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

  const mapStateToProps = (state) => {
    return {
      port: state.mainReducer.port,
      connectionTime: state.mainReducer.connectionTime
    };
  };

const ConsumerMakeLineChart = (props) => {
 
  let xAxis = [];
  let yObjects = [];
  let consumerValues = [];
 
  useEffect(() => { 
  fetch(`http://localhost:${props.port}/api/v1/query_range?query=kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total&start=${props.connectionTime}&end=${new Date().toISOString()}&step=200ms`)
  // fetch('http://localhost:9090/api/v1/query_range?query=kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total&start=2022-01-04T16:59:20.053Z&end=2022-01-05T07:05:56.235Z&step=30s')
  .then((response) => response.json())  
  .then((res) => {
      xAxis = res.data.result[0].values.map(el => {
            let date = new Date(el[0]*1000);
            return date.toLocaleTimeString('en-US');
      });
      // console.log('xAxis',xAxis);
      // console.log(res.data.result)

      res.data.result.map(el => {
        if(el.metric.job === 'consumer') yObjects.push(el.values);
      });
      
      // console.log('yObjects', yObjects)

      for(let i=0; i<yObjects.length; i++){
        let secondary = [];
        yObjects[i].forEach(el => secondary.push(Number(el[1])));
        consumerValues.push(secondary);
      };
      console.log('consumer values', consumerValues)
  })
    .catch(err => console.log(err));
  },[]);

  // the lines below are executing before the promise above

  const chartData = {
    labels: [...xAxis],
    datasets: []
  };
 
  for(let i = 0; i < consumerValues.length; i++){
    chartData.datasets.push({
      label: `${i+1}th dataset`,
      data: consumerValues[i],
      fill: false,
      backgroundColor: "blue",
      borderColor: "black"
    });
  };

  console.log(chartData)

  return (
    <div>
      <h3 style ={{textAlign: 'center'}}>Records Consumed per Second</h3>
      <div style={{height:"300px", width:"300px"}}>
          <Chart type='line' data={{ chartData }}/>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(ConsumerMakeLineChart);