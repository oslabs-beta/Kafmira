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
import { Paper, Grid, Typography } from "@material-ui/core";
 
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

const ConsumerFailedRebalanceTotal = () => {

  const obj = {
    "status": "success",
    "data": {
        "resultType": "matrix",
        "result": [
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
                        1641446759.965,
                        "4976300"
                    ],
                    [
                        1641446767.965,
                        "4976300"
                    ],
                    [
                        1641446775.965,
                        "4977800"
                    ],
                    [
                        1641446783.965,
                        "4977800"
                    ],
                    [
                        1641446791.965,
                        "4979300"
                    ],
                    [
                        1641446799.965,
                        "4979300"
                    ],
                    [
                        1641446807.965,
                        "4980800"
                    ],
                    [
                        1641446815.965,
                        "4980800"
                    ],
                    [
                        1641446823.965,
                        "4982300"
                    ],
                    [
                        1641446831.965,
                        "4982300"
                    ],
                    [
                        1641446839.965,
                        "4983800"
                    ],
                    [
                        1641446847.965,
                        "4983800"
                    ]
                ]
            },
            {
                "metric": {
                    "__name__": "kafka_consumer_consumer_fetch_manager_metrics_records_consumed_total",
                    "client_id": "consumer-simple-consumer-2",
                    "env": "dev",
                    "instance": "consumer:1234",
                    "job": "consumer"
                },
                "values": [
                    [
                        1641446759.965,
                        "4976000"
                    ],
                    [
                        1641446767.965,
                        "4976000"
                    ],
                    [
                        1641446775.965,
                        "4977500"
                    ],
                    [
                        1641446783.965,
                        "4977500"
                    ],
                    [
                        1641446791.965,
                        "4979000"
                    ],
                    [
                        1641446799.965,
                        "4980500"
                    ],
                    [
                        1641446807.965,
                        "4980500"
                    ],
                    [
                        1641446815.965,
                        "4982000"
                    ],
                    [
                        1641446823.965,
                        "4982000"
                    ],
                    [
                        1641446831.965,
                        "4982000"
                    ],
                    [
                        1641446839.965,
                        "4983500"
                    ],
                    [
                        1641446847.965,
                        "4985000"
                    ]
                ]
            }
        ]
    }
}
 
  let xAxis = [];
  let yObjects = [];
  let consumerValues = [];
  const consumerNames = [];

  //FETCH REQUEST FOR DYNAMIC DATA
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
        console.log(el[0]);
        return date.toLocaleString('en-US');
    });

    obj.data.result.map(el => {
        if(el.metric.job === 'consumer') {
            yObjects.push(el.values);
            consumerNames.push(el.metric.client_id)
        }
    });
  
    for(let i=0; i<yObjects.length; i++){
        let secondary = [];
        yObjects[i].forEach(el => secondary.push(Number(el[1])));
        consumerValues.push(secondary);
    };
        

    const chartData = {
        labels: [...xAxis],
        datasets: []
    };
  
    //  auto color generation
    function randomColorGenerator() {
        const r = Math.ceil(Math.random() * 255);
        const g = Math.ceil(Math.random() * 255);
        const b = Math.ceil(Math.random() * 255);

        const randomColors = [];
        console.log(`rgba(${r},${g},${b},1)`)
        randomColors.push(`rgba(${r},${g},${b},1)`)
        return randomColors
    }
    
    for(let i = 0; i < consumerValues.length; i++){
        chartData.datasets.push({
            label: consumerNames[i],
            data: consumerValues[i],
            fill: false,
            borderColor: randomColorGenerator()
        });
    };

  return (

    <div>
        <Typography 
            variant='h5'
            style ={{textAlign: 'center'}}
        >
            Total Bytes Consumed
        </Typography>
        <Paper style={{height:"500px", width:"1000px"}}>
            <Chart type='line' data={ chartData } />
        </Paper>
    </div>
    
  );
};

export default ConsumerFailedRebalanceTotal;
