import React, { useState, useEffect }  from "react";
// import { Line } from "react-chartjs-2";
import { connect } from 'react-redux';
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


// import state saved from login
const mapStateToProps = (state) => {
    return {
      port: state.mainReducer.port,
      connectionTime: state.mainReducer.connectionTime
    };
  };
  

const MakeResponseRateGraph = (props) => {
 

// using setState so that we have a variable to save object to
// const [resRateData, setResRateData] = useState({});

// useEffect(() => {
//     // fetch request to prometheus 
//     let responseObj = fetch(`http://localhost:${props.port}/api/v1/query_range?query=kafka_producer_producer_metrics_response_rate&start=&${props.connectionTime}&end=${new Date().toISOString()}&step=2s`
//     ).then((response) => response.json());

//     Promise.all([responseObj])
//         .then((data) => {
//             setResRateData(data[0])
//         })




// }, [])



const resRateData = {
  "status": "success",
  "data": {
      "resultType": "matrix",
      "result": [
          {
              "metric": {
                  "__name__": "kafka_producer_producer_metrics_response_rate",
                  "client_id": "producer-1",
                  "env": "dev",
                  "instance": "producer:1234",
                  "job": "producer"
              },
              "values": [
                  [
                      1640997701.199,
                      "9.77008131983853"
                  ],
                  [
                      1640997703.199,
                      "9.77008131983853"
                  ],
                  [
                      1640997705.199,
                      "9.77008131983853"
                  ],
                  [
                      1640997707.199,
                      "9.77008131983853"
                  ],
                  [
                      1640997709.199,
                      "9.77008131983853"
                  ],
                  [
                      1640997711.199,
                      "9.77008131983853"
                  ]
              ]
          },
          {
            "metric": {
                "__name__": "kafka_producer_producer_metrics_response_rate",
                "client_id": "producer-2",
                "env": "dev",
                "instance": "producer:1234",
                "job": "producer"
            },
            "values": [
                [
                    1640997701.199,
                    "5.2342"
                ],
                [
                    1640997703.199,
                    "6.132"
                ],
                [
                    1640997705.199,
                    "7.234"
                ],
                [
                    1640997707.199,
                    "8.1321"
                ],
                [
                    1640997709.199,
                    "7.923"
                ],
                [
                    1640997711.199,
                    "9.2"
                ]
            ]
        },
        {
            "metric": {
                "__name__": "kafka_producer_producer_metrics_response_rate",
                "client_id": "producer-3",
                "env": "dev",
                "instance": "producer:1234",
                "job": "producer"
            },
            "values": [
                [
                    1640997701.199,
                    "1"
                ],
                [
                    1640997703.199,
                    "3"
                ],
                [
                    1640997705.199,
                    "1"
                ],
                [
                    1640997707.199,
                    "4"
                ],
                [
                    1640997709.199,
                    "2"
                ],
                [
                    1640997711.199,
                    "5"
                ]
            ]
        }
      ]
  }

  
}
// const [xAxis, setXAxis ] = useState([]);
// const [yAxis, setYAxis ] = useState([]);
  
  const xArray = [];
 
/*   iterate through results array and create arrays of data from each producer
*/
    const producerYStats = []

    resRateData.data.result.forEach(ele =>{
        const result = [];
        // this will add client_id as the first element in result array
        result.push(ele.metric.client_id);
        // adds all the values to result array
        ele.values.forEach(ele => {
            result.push(ele[1])
        })
        // push result array to producerYStats
        producerYStats.push(result);
    })


  // push method to build x axis (times) will be the same for all data from query
  resRateData.data.result[0].values.forEach(ele => {
    const humanDate = new Date(ele[0] * 1000)
    xArray.push(humanDate)
  })
 
// object to create graph
  const chartData = {
      labels: xArray,
      datasets: []
    };
// for loop to iterate through each array to make graph, first element is the name of producer
    for (let i = 0; i < producerYStats.length ; i++) {
        chartData.datasets.push({
            label:producerYStats[i].shift(),
            data: producerYStats[i],
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'black'
        })

    }




return (
    <div>
      <h3 style ={{textAlign: 'center'}}>Response Rate per Second</h3>
      <div style={{height:"1000px", width:"1000px"}}>
          <Chart type='line' data={ chartData }  
        />
      </div>
    </div>
  );
}

export default MakeResponseRateGraph;
// export default connect(mapStateToProps, null)(MakeResponseRateGraph);

