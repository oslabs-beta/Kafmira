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



function BrokerFailedProdReq(props) {
    const BrokerFailedProdReqData =
    {
        "status": "success",
        "data": {
            "resultType": "matrix",
            "result": [
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_failedproducerequestspersec",
                        "env": "dev",
                        "instance": "kafka-1:1234",
                        "job": "kafka"
                    },
                    "values": [
                        [
                            1640997701.199,
                            "0"
                        ],
                        [
                            1640997709.199,
                            "0"
                        ],
                        [
                            1640997717.199,
                            "0"
                        ],
                        [
                            1640997725.199,
                            "0"
                        ],
                        [
                            1640997733.199,
                            "0"
                        ],
                        [
                            1640997741.199,
                            "0"
                        ],
                        [
                            1640997749.199,
                            "0"
                        ],
                        [
                            1640997757.199,
                            "0"
                        ],
                        [
                            1640997765.199,
                            "0"
                        ],
                        [
                            1640997773.199,
                            "0"
                        ],
                        [
                            1640997781.199,
                            "0"
                        ],
                        [
                            1640997789.199,
                            "0"
                        ],
                        [
                            1640997797.199,
                            "0"
                        ],
                        [
                            1640997805.199,
                            "0"
                        ],
                        [
                            1640997813.199,
                            "0"
                        ],
                        [
                            1640997821.199,
                            "0"
                        ],
                        [
                            1640997829.199,
                            "0"
                        ]
                    ]
                },
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_failedproducerequestspersec",
                        "env": "dev",
                        "instance": "kafka-2:1234",
                        "job": "kafka"
                    },
                    "values": [
                        [
                            1640997701.199,
                            "0"
                        ],
                        [
                            1640997709.199,
                            "0"
                        ],
                        [
                            1640997717.199,
                            "0"
                        ],
                        [
                            1640997725.199,
                            "0"
                        ],
                        [
                            1640997733.199,
                            "0"
                        ],
                        [
                            1640997741.199,
                            "0"
                        ],
                        [
                            1640997749.199,
                            "0"
                        ],
                        [
                            1640997757.199,
                            "0"
                        ],
                        [
                            1640997765.199,
                            "0"
                        ],
                        [
                            1640997773.199,
                            "0"
                        ],
                        [
                            1640997781.199,
                            "0"
                        ],
                        [
                            1640997789.199,
                            "0"
                        ],
                        [
                            1640997797.199,
                            "0"
                        ],
                        [
                            1640997805.199,
                            "0"
                        ],
                        [
                            1640997813.199,
                            "0"
                        ],
                        [
                            1640997821.199,
                            "0"
                        ],
                        [
                            1640997829.199,
                            "0"
                        ]
                    ]  // length of array is 17
                },
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_failedproducerequestspersec",
                        "env": "dev",
                        "instance": "kafka-3:1234",
                        "job": "kafka"
                    },
                    "values": [
                        [
                            1640997701.199,
                            "0"
                        ],
                        [
                            1640997709.199,
                            "0"
                        ],
                        [
                            1640997717.199,
                            "0"
                        ],
                        [
                            1640997725.199,
                            "0"
                        ],
                        [
                            1640997733.199,
                            "0"
                        ],
                        [
                            1640997741.199,
                            "0"
                        ],
                        [
                            1640997749.199,
                            "0"
                        ],
                        [
                            1640997757.199,
                            "0"
                        ],
                        [
                            1640997765.199,
                            "0"
                        ],
                        [
                            1640997773.199,
                            "0"
                        ],
                        [
                            1640997781.199,
                            "0"
                        ],
                        [
                            1640997789.199,
                            "0"
                        ],
                        [
                            1640997797.199,
                            "0"
                        ],
                        [
                            1640997805.199,
                            "0"
                        ],
                        [
                            1640997813.199,
                            "0"
                        ],
                        [
                            1640997821.199,
                            "0"
                        ],
                        [
                            1640997829.199,
                            "0"
                        ]
                    ]
                }
            ]
        }
    }

    const xTimeData = [];

    // fills x array with the timestamps for each piece of data
    BrokerFailedProdReqData.data.result[0].values.forEach(ele => {
        const humanReadableDate = new Date(ele[0] * 1000)
        // console.log(humanReadableDate)
        xTimeData.push(humanReadableDate)
    });

    
    
    // each ele in the for each loop is an object fo each broker within the result array
    // define array to push
    const result = [];
    const brokerNames = [];
    const yFetchDataSet = [];
    const brokerValues = [];

    BrokerFailedProdReqData.data.result.map(ele => {
        // this will add the instance as the first element in result array
        brokerNames.push(ele.metric.instance);

        // on each ele object there are two properties
        // property value on key name values, is an array of arrays
        // adds all the values to result array
        brokerValues.push(ele.values)

        // // push result array to the fetch data
        // // result array of arrays to interate through
        // yFetchDataSet.push(result);
    });
    
    console.log('broker values', brokerValues)

    for (let i = 0; i < brokerValues.length; i++) {
        let secondary = [];
        brokerValues[i].forEach(ele => secondary.push(Number(ele[1])));
        yFetchDataSet.push(secondary);
    };

    console.log('x data', xTimeData)
    // console.log('y data', yFetchDataSet)
    
    const chartData = {
        labels: [...xTimeData],
        datasets: []
    }

    console.log('broker names', brokerNames)

    for (let i = 0; i < yFetchDataSet.length ; i++) {
        chartData.datasets.push({
            label: brokerNames[i],
            data: yFetchDataSet[i],
            fill: false,
            backgroundColor: 'blue',
            borderColor: 'black'
        })
    }

    console.log('y data', yFetchDataSet)

    // iterate through each array to build out graph
    return (
        <div>
        {/* <h3 style ={{textAlign: 'center'}}>Request Total</h3> */}
            <div style={{height:"1000px", width:"1000px"}}>
                <Chart type='line' data={ chartData } />
            </div>
        </div>
    );
}



export default BrokerFailedProdReq;