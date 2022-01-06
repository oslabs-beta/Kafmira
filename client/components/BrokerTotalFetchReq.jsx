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
import { Grid, Typography } from "@material-ui/core";
  
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

const BrokerTotalFetchReq = (props) => {

    const brokerTotalFetchReqData = {
        "status": "success",
        "data": {
            "resultType": "matrix",
            "result": [
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_totalfetchrequestspersec",
                        "env": "dev",
                        "instance": "kafka-1:1234",
                        "job": "kafka",
                        "topic": "demo-perf-topic"
                    },
                    "values": [
                        [
                            1640997701.199,
                            "891128"
                        ],
                        [
                            1640997709.199,
                            "905592"
                        ],
                        [
                            1640997717.199,
                            "922969"
                        ],
                        [
                            1640997725.199,
                            "922969"
                        ],
                        [
                            1640997733.199,
                            "941757"
                        ],
                        [
                            1640997741.199,
                            "941757"
                        ],
                        [
                            1640997749.199,
                            "960079"
                        ],
                        [
                            1640997757.199,
                            "960079"
                        ],
                        [
                            1640997765.199,
                            "978550"
                        ],
                        [
                            1640997773.199,
                            "978550"
                        ],
                        [
                            1640997781.199,
                            "998291"
                        ],
                        [
                            1640997789.199,
                            "998291"
                        ],
                        [
                            1640997797.199,
                            "1016981"
                        ],
                        [
                            1640997805.199,
                            "1016981"
                        ],
                        [
                            1640997813.199,
                            "1036181"
                        ],
                        [
                            1640997821.199,
                            "1036181"
                        ],
                        [
                            1640997829.199,
                            "1054120"
                        ]
                    ]
                },
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_totalfetchrequestspersec",
                        "env": "dev",
                        "instance": "kafka-2:1234",
                        "job": "kafka",
                        "topic": "demo-perf-topic"
                    },
                    "values": [
                        [
                            1640997701.199,
                            "907260"
                        ],
                        [
                            1640997709.199,
                            "923815"
                        ],
                        [
                            1640997717.199,
                            "923815"
                        ],
                        [
                            1640997725.199,
                            "942242"
                        ],
                        [
                            1640997733.199,
                            "942242"
                        ],
                        [
                            1640997741.199,
                            "961288"
                        ],
                        [
                            1640997749.199,
                            "961288"
                        ],
                        [
                            1640997757.199,
                            "980170"
                        ],
                        [
                            1640997765.199,
                            "980170"
                        ],
                        [
                            1640997773.199,
                            "999247"
                        ],
                        [
                            1640997781.199,
                            "999247"
                        ],
                        [
                            1640997789.199,
                            "1017939"
                        ],
                        [
                            1640997797.199,
                            "1017939"
                        ],
                        [
                            1640997805.199,
                            "1037086"
                        ],
                        [
                            1640997813.199,
                            "1156185" // "1056185"
                        ],
                        [
                            1640997821.199,
                            "1256185" // "1056185"
                        ],
                        [
                            1640997829.199,
                            "1275447" // "1075447"
                        ]
                    ]
                },
                {
                    "metric": {
                        "__name__": "kafka_server_brokertopicmetrics_totalfetchrequestspersec",
                        "env": "dev",
                        "instance": "kafka-3:1234",
                        "job": "kafka",
                        "topic": "demo-perf-topic"
                    },
                    "values": [
                        [
                            1640997701.199,
                            "3253094"
                        ],
                        [
                            1640997709.199,
                            "3253094"
                        ],
                        [
                            1640997717.199,
                            "3315926"
                        ],
                        [
                            1640997725.199,
                            "3315926"
                        ],
                        [
                            1640997733.199,
                            "3385640"
                        ],
                        [
                            1640997741.199,
                            "3385640"
                        ],
                        [
                            1640997749.199,
                            "3459888"
                        ],
                        [
                            1640997757.199,
                            "3528426"
                        ],
                        [
                            1640997765.199,
                            "3528426"
                        ],
                        [
                            1640997773.199,
                            "3603264"
                        ],
                        [
                            1640997781.199,
                            "3603264"
                        ],
                        [
                            1640997789.199,
                            "3675952"
                        ],
                        [
                            1640997797.199,
                            "3675952"
                        ],
                        [
                            1640997805.199,
                            "3752182"
                        ],
                        [
                            1640997813.199,
                            "3752182"
                        ],
                        [
                            1640997821.199,
                            "3823440"
                        ],
                        [
                            1640997829.199,
                            "3823440"
                        ]
                    ]
                }
            ]
        }
    }

    
    const xTimeData = [];

    // fills x array with the timestamps for each piece of data
    brokerTotalFetchReqData.data.result[0].values.forEach(ele => {
        const humanReadableDate = new Date(ele[0] * 1000)
        // console.log(humanReadableDate)
        xTimeData.push(humanReadableDate.toLocaleString('en-US'))
    });

    
    
    // each ele in the for each loop is an object fo each broker within the result array
    // define array to push
    const brokerNames = [];
    const yFetchDataSet = [];
    const brokerValues = [];

    brokerTotalFetchReqData.data.result.map(ele => {
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
    
    // console.log('broker values', brokerValues)

    for (let i = 0; i < brokerValues.length; i++) {
        let secondary = [];
        brokerValues[i].forEach(ele => secondary.push(Number(ele[1])));
        yFetchDataSet.push(secondary);
    };

    // console.log('x data', xTimeData)
    // console.log('y data', yFetchDataSet)
    
    const chartData = {
        labels: [...xTimeData],
        datasets: []
    }

    // console.log('broker names', brokerNames)



    //  auto color generation
    function randomColorGenerator() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        // const a = Math.floor(Math.random() * 1);

        console.log(`rgba(${r},${g},${b}, 1)`)

        const borderColor = [];
        borderColor.push(`rgba(${r},${g},${b}, 1)`)
    }

    for (let i = 0; i < yFetchDataSet.length ; i++) {
        console.log(i)
        chartData.datasets.push({
            label: brokerNames[i],
            data: yFetchDataSet[i],
            fill: false,
            backgroundColor: randomColorGenerator(),
            borderColor: 'black'
        })
    }

    // console.log('y data', yFetchDataSet)

    return (
        <div>
            <h3 style ={{textAlign: 'center'}}>Total Fetch Requests</h3>
            <div style={{height:"1000px", width:"1000px"}}>
                <Chart type='line' data={ chartData } />
            </div>
        </div>
        // <React.Fragment>
        //     <Typography>Total Fetch Requests</Typography>
        //     <Grid item xs="auto">
        //         <Chart type='line' data={ chartData } />
        //     </Grid>
        // </React.Fragment>
    );
}

export default BrokerTotalFetchReq;