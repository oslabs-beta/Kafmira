import React, { useState, useEffect }  from "react";
 
import { connect } from 'react-redux';
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
// import state saved from login
const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port,
    connectionTime: state.mainReducer.connectionTime
  };
};

const MakeRequestTotalGraph = (props) => {
    // using setState so that we have a variable to save object to
// const [reqTotal, setReqTotal] = useState({});

// useEffect(() => {
//     // fetch request to prometheus for request rate data
//     let responseObj = fetch(
//       // request will probably need to bring in port, connection time and time fetch request was sent
//       'http://localhost:`${props.port}`/api/v1/query_range?query=kafka_producer_producer_metrics_request_total&start=`${props.connectionTime}`&end=2022-01-01T00:43:51.520Z&step=60s'
//     ).then((response) => response.json());

//     Promise.all([responseObj])
//         .then((data) => {
//             setReqTotal(data[0])
//         })

//   }, [])


    const reqTotal = {
        "status": "success",
        "data": {
            "resultType": "matrix",
            "result": [
                {
                    "metric": {
                        "__name__": "kafka_producer_producer_metrics_request_total",
                        "client_id": "producer-1",
                        "env": "dev",
                        "instance": "producer:1234",
                        "job": "producer"
                    },
                    "values": [
                        [
                            1640997701.199,
                            "8580"
                        ],
                        // [
                        //     1640997703.199,
                        //     "8580"
                        // ],
                        // [
                        //     1640997705.199,
                        //     "8580"
                        // ],
                        // [
                        //     1640997707.199,
                        //     "8580"
                        // ],
                        // [
                        //     1640997709.199,
                        //     "8580"
                        // ],
                        // [
                        //     1640997711.199,
                        //     "8580"
                        // ],
                        [
                            1640997713.199,
                            "8728"
                        ],
                        // [
                        //     1640997715.199,
                        //     "8728"
                        // ],
                        // [
                        //     1640997717.199,
                        //     "8728"
                        // ],
                        // [
                        //     1640997719.199,
                        //     "8728"
                        // ],
                        // [
                        //     1640997721.199,
                        //     "8728"
                        // ],
                        // [
                        //     1640997723.199,
                        //     "8728"
                        // ],
                        // [
                        //     1640997725.199,
                        //     "8728"
                        // ],
                        // [
                        //     1640997727.199,
                        //     "8728"
                        // ],
                        [
                            1640997729.199,
                            "8876"
                        ],
                        // [
                        //     1640997731.199,
                        //     "8876"
                        // ],
                        // [
                        //     1640997733.199,
                        //     "8876"
                        // ],
                        // [
                        //     1640997735.199,
                        //     "8876"
                        // ],
                        // [
                        //     1640997737.199,
                        //     "8876"
                        // ],
                        // [
                        //     1640997739.199,
                        //     "8876"
                        // ],
                        // [
                        //     1640997741.199,
                        //     "8876"
                        // ],
                        [
                            1640997743.199,
                            "9025"
                        ],
                        // [
                        //     1640997745.199,
                        //     "9025"
                        // ],
                        // [
                        //     1640997747.199,
                        //     "9025"
                        // ],
                        // [
                        //     1640997749.199,
                        //     "9025"
                        // ],
                        // [
                        //     1640997751.199,
                        //     "9025"
                        // ],
                        // [
                        //     1640997753.199,
                        //     "9025"
                        // ],
                        // [
                        //     1640997755.199,
                        //     "9025"
                        // ],
                        // [
                        //     1640997757.199,
                        //     "9025"
                        // ],
                        [
                            1640997759.199,
                            "9173"
                        ],
                        // [
                        //     1640997761.199,
                        //     "9173"
                        // ],
                        // [
                        //     1640997763.199,
                        //     "9173"
                        // ],
                        // [
                        //     1640997765.199,
                        //     "9173"
                        // ],
                        // [
                        //     1640997767.199,
                        //     "9173"
                        // ],
                        // [
                        //     1640997769.199,
                        //     "9173"
                        // ],
                        // [
                        //     1640997771.199,
                        //     "9173"
                        // ],
                        [
                            1640997773.199,
                            "9322"
                        ],
                        // [
                        //     1640997775.199,
                        //     "9322"
                        // ],
                        // [
                        //     1640997777.199,
                        //     "9322"
                        // ],
                        // [
                        //     1640997779.199,
                        //     "9322"
                        // ],
                        // [
                        //     1640997781.199,
                        //     "9322"
                        // ],
                        // [
                        //     1640997783.199,
                        //     "9322"
                        // ],
                        // [
                        //     1640997785.199,
                        //     "9322"
                        // ],
                        // [
                        //     1640997787.199,
                        //     "9322"
                        // ],
                        [
                            1640997789.199,
                            "9470"
                        ],
                        // [
                        //     1640997791.199,
                        //     "9470"
                        // ],
                        // [
                        //     1640997793.199,
                        //     "9470"
                        // ],
                        // [
                        //     1640997795.199,
                        //     "9470"
                        // ],
                        // [
                        //     1640997797.199,
                        //     "9470"
                        // ],
                        // [
                        //     1640997799.199,
                        //     "9470"
                        // ],
                        // [
                        //     1640997801.199,
                        //     "9470"
                        // ],
                        [
                            1640997803.199,
                            "9619"
                        ],
                        // [
                        //     1640997805.199,
                        //     "9619"
                        // ],
                        // [
                        //     1640997807.199,
                        //     "9619"
                        // ],
                        // [
                        //     1640997809.199,
                        //     "9619"
                        // ],
                        // [
                        //     1640997811.199,
                        //     "9619"
                        // ],
                        // [
                        //     1640997813.199,
                        //     "9619"
                        // ],
                        // [
                        //     1640997815.199,
                        //     "9619"
                        // ],
                        // [
                        //     1640997817.199,
                        //     "9619"
                        // ],
                        [
                            1640997819.199,
                            "9768"
                        ],
                        // [
                        //     1640997821.199,
                        //     "9768"
                        // ],
                        // [
                        //     1640997823.199,
                        //     "9768"
                        // ],
                        // [
                        //     1640997825.199,
                        //     "9768"
                        // ],
                        // [
                        //     1640997827.199,
                        //     "9768"
                        // ],
                        // [
                        //     1640997829.199,
                        //     "9768"
                        // ],
                        // [
                        //     1640997831.199,
                        //     "9768"
                        // ]
                        [
                            1641446831.965,
                            "9880"
                        ],
                        [
                            1641446839.965,
                            "10005"
                        ],
                        [
                            1641446847.965,
                            "10117"
                        ]
                    ]
                }
            ]
        }
    }
    // const yArray = [];
    // const xArray =[];
    // // const producerYStats = [];
    // // fills x array with the timestamps for each piece of data
    // reqTotal.data.result[0].values.forEach(ele => {
    //     const humanDate = new Date(ele[0] * 1000)
    //     xArray.push(humanDate)
    // });
    // // fills y array with the value of each piece of data
    // reqTotal.data.result[0].values.forEach(ele => {
    //     yArray.push(ele[1])
    // })

    // // const innerFunc = () => {
    // //     console.log('Entire Array: ', reqRateData.data.result[0].values);
    // //     console.log('xArray: ', xArray);
    // //     console.log('yArray: ', yArray);
    // // }
    // // innerFunc();
    
    

    // return (
    //     <div>
    //     <h3 style ={{textAlign: 'center'}}>Request Total</h3>
    //         <div style={{height:"1000px", width:"1000px"}}>
    //             <Chart type='line' data={ {
    //         labels: xArray,
    //         datasets: [
    //         {
    //             label: 'Request Total',
    //             data: yArray,
    //             backgroundColor: 'blue',
    //             borderColor:'black',
    //             borderWidth: 4
    //         }
    //         ]
    //             }}  
    //         />
    //         </div>
    //     </div>
    //     );

    const xArray = [];
 
/*   iterate through results array and create arrays of data from each producer
*/
    const producerYStats = []

    reqTotal.data.result.forEach(ele =>{
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
    reqTotal.data.result[0].values.forEach(ele => {
        const humanDate = new Date(ele[0] * 1000)
        xArray.push(humanDate.toLocaleDateString('en-US'))
        // xArray.push(humanDate.toLocaleString('en-US'))
    })
    
    // object to create graph
    const chartData = {
        labels: xArray,
        datasets: []
    };

    //  auto color generation
    function randomColorGenerator() {
        const r = Math.ceil(Math.random() * 255);
        const g = Math.ceil(Math.random() * 255);
        const b = Math.ceil(Math.random() * 255);
        // const a = Math.floor(Math.random() * 1);

        const randomColors = [];
        console.log(`rgba(${r},${g},${b},1)`)
        randomColors.push(`rgba(${r},${g},${b},1)`)
        return randomColors
    }

    // for loop to iterate through each array to make graph, first element is the name of producer
    for (let i = 0; i < producerYStats.length ; i++) {
        chartData.datasets.push({
            label:producerYStats[i].shift(),
            data: producerYStats[i],
            fill: false,
            // backgroundColor: 'blue',
            borderColor: randomColorGenerator()
        })

    }
  
    return (
        // <div>
        //     <h3 style ={{textAlign: 'center'}}>Producer Request Total</h3>
        //     <div style={{height:"1000px", width:"1000px"}}>
        //         <Chart type='line' data={ chartData } />
        //     </div>
        // </div>
        <div>
            <Typography 
                variant='h5'
                style ={{textAlign: 'center'}}
            >
                Request Total
            </Typography>
            <Paper style={{height:"500px", width:"1000px"}}>
                <Chart type='line' data={ chartData } />
            </Paper>
        </div> 
    );

}

export default MakeRequestTotalGraph;
// export default connect(mapStateToProps, null)(MakeRequestTotalGraph);
