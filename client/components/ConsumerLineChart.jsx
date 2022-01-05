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

const ConsumerMakeLineChart = () => {

  const obj = {
    "status": "success",
    "data": {
        "resultType": "matrix",
        "result": [
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-connect-cluster-1",
                    "cluster": "cluster1",
                    "env": "dev",
                    "instance": "connect:1234",
                    "job": "connect"
                },
                "values": [
                    [
                        1640997701.199,
                        "0"
                    ],
                    [
                        1640997731.199,
                        "0"
                    ],
                    [
                        1640997761.199,
                        "0"
                    ],
                    [
                        1640997791.199,
                        "0"
                    ],
                    [
                        1640997821.199,
                        "0"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-connect-cluster-1",
                    "cluster": "cluster1",
                    "env": "dev",
                    "instance": "connect:1234",
                    "job": "connect",
                    "topic": "connect-offsets"
                },
                "values": [
                    [
                        1640997701.199,
                        "0"
                    ],
                    [
                        1640997731.199,
                        "0"
                    ],
                    [
                        1640997761.199,
                        "0"
                    ],
                    [
                        1640997791.199,
                        "0"
                    ],
                    [
                        1640997821.199,
                        "0"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-connect-cluster-2",
                    "cluster": "cluster1",
                    "env": "dev",
                    "instance": "connect:1234",
                    "job": "connect"
                },
                "values": [
                    [
                        1640997701.199,
                        "0"
                    ],
                    [
                        1640997731.199,
                        "0"
                    ],
                    [
                        1640997761.199,
                        "0"
                    ],
                    [
                        1640997791.199,
                        "0"
                    ],
                    [
                        1640997821.199,
                        "0"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-connect-cluster-2",
                    "cluster": "cluster1",
                    "env": "dev",
                    "instance": "connect:1234",
                    "job": "connect",
                    "topic": "connect-status"
                },
                "values": [
                    [
                        1640997701.199,
                        "0"
                    ],
                    [
                        1640997731.199,
                        "0"
                    ],
                    [
                        1640997761.199,
                        "0"
                    ],
                    [
                        1640997791.199,
                        "0"
                    ],
                    [
                        1640997821.199,
                        "0"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-connect-cluster-3",
                    "cluster": "cluster1",
                    "env": "dev",
                    "instance": "connect:1234",
                    "job": "connect"
                },
                "values": [
                    [
                        1640997701.199,
                        "1"
                    ],
                    [
                        1640997731.199,
                        "1"
                    ],
                    [
                        1640997761.199,
                        "1"
                    ],
                    [
                        1640997791.199,
                        "1"
                    ],
                    [
                        1640997821.199,
                        "1"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-connect-cluster-3",
                    "cluster": "cluster1",
                    "env": "dev",
                    "instance": "connect:1234",
                    "job": "connect",
                    "topic": "connect-configs"
                },
                "values": [
                    [
                        1640997701.199,
                        "1"
                    ],
                    [
                        1640997731.199,
                        "1"
                    ],
                    [
                        1640997761.199,
                        "1"
                    ],
                    [
                        1640997791.199,
                        "1"
                    ],
                    [
                        1640997821.199,
                        "1"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-simple-consumer-1",
                    "env": "dev",
                    "instance": "consumer-1:1234",
                    "job": "consumer"
                },
                "values": [
                    [
                        1640997701.199,
                        "0"
                    ],
                    [
                        1640997731.199,
                        "0"
                    ],
                    [
                        1640997761.199,
                        "0"
                    ],
                    [
                        1640997791.199,
                        "0"
                    ],
                    [
                        1640997821.199,
                        "0"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-simple-consumer-1",
                    "env": "dev",
                    "instance": "consumer:1234",
                    "job": "consumer"
                },
                "values": [
                    [
                        1640997701.199,
                        "0"
                    ],
                    [
                        1640997731.199,
                        "0"
                    ],
                    [
                        1640997761.199,
                        "0"
                    ],
                    [
                        1640997791.199,
                        "0"
                    ],
                    [
                        1640997821.199,
                        "0"
                    ]
                ]
            }
        ]
    }
}
 
  const xAxis = [];
  const yObjects = [];
  const consumerValues = [];
  
  // fetch(`http://localhost:${props.port}/api/v1/query_range?query=kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total&start=${props.connectionTime}&end=${new Date().toISOString()}&step=30s`)
  // .then((response) => response.json())  
  // .then((res) => {
  //     xAxis = res.data.result[0].values.map(el => {
  //           let date = new Date(el[0]*1000);
  //           return date.toLocaleTimeString('en-US');
  //           });

  //   res.data.result.map(el => {if(el.metric.job === 'consumer') yObjects.push(el.values);});
  //   for(let i=0; i<yObjects.length; i++){
  //     let secondary = [];
	//     yObjects[i].forEach(el => secondary.push(Number(el[1])));
  //     consumerValues.push(secondary);
  //     };
  //   }
  // )
  // .catch(err => console.log(err));

  xAxis = obj.data.result[0].values.map(el => {
        let date = new Date(el[0]*1000);
        return date.toLocaleTimeString('en-US');
      });

  obj.data.result.map(el => {if(el.metric.job === 'consumer') yObjects.push(el.values);});
  
  for(let i=0; i<yObjects.length; i++){
          let secondary = [];
          yObjects[i].forEach(el => secondary.push(Number(el[1])));
          consumerValues.push(secondary);
          };
        

  const data = {
    labels: [...xAxis],
    datasets: []
  };
  
  for(let i = 0; i < consumerValues.length; i++){
    data.datasets.push({
      label: `${i+1}th dataset`,
      data: consumerValues[i],
      fill: false,
      backgroundColor: "blue",
      borderColor: "black"
    });
  };

  return (
    <div>
      <h3 style ={{textAlign: 'center'}}>Records Consumed per Second</h3>
      <div style={{height:"300px", width:"300px"}}>
          <Chart type='line' data={ data }/>
      </div>
    </div>
  );
};

export default ConsumerMakeLineChart;