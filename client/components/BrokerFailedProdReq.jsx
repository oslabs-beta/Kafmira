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
    const data =
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
}


export default BrokerFailedProdReq;