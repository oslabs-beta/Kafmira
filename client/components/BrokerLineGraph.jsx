import React, { useState, useEffect } from 'react';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
) 

// bring redux state to component by mapping state to props
const mapStateToProps = (state) => {
  return {
    port: state.mainReducer.port,
    connectionTime: state.mainReducer.connectionTime
  };
};

function BrokerLineGraph(props) {
  // define state variables for what we will fetch from kafka cluster
  const [xBrokerProducerReqPerSec, setXBrokerProducerReqPerSec] = useState([]);
  const [xBrokerTotalFetchReqPerSec, setXBrokerTotalFetchReqPerSec] = useState([]);
  const [xFailedProducerReqPerSec, setXFailedProducerReqPerSec] = useState([]);

  // fetch data and set it to state
  useEffect(() => {
    // fetch and JSONify all the requests that come back
    let brokerProducerReq = fetch(
      `http://localhost:${props.port}/api/v1/query_range?query=kafka_server_brokertopicmetrics_failedproducerequestspersec&start=${props.connectionTime}&end=${new Date().toISOString()}&step=30s`
    ).then((response) => response.json())

    let brokerTotalFetch = fetch(
      `http://localhost:${props.port}/api/v1/query_range?query=kafka_server_brokertopicmetrics_totalfetchrequestspersec&start=${props.connectionTime}&end=${new Date().toISOString()}&step=30s`
    ).then((response) => response.json());

    let failedProducerReq = fetch(
      `http://localhost:${props.port}/api/v1/query_range?query=kafka_server_brokertopicmetrics_failedproducerequestspersec&start=${props.connectionTime}&end=${new Date().toISOString}&step=30s`
    ).then((response) => response.json());

    // perform .then promise once all requests data come through
    Promise.all([brokerProducerReq, brokerTotalFetch, failedProducerReq])
      // allData[index] is in reference to the array in the promise all
      .then((res) => {
        setXBrokerProducerReqPerSec(res[0].data.result[0].values)

        setXBrokerTotalFetchReqPerSec(res[1])

        setXFailedProducerReqPerSec(res[2])
      })



  }, [])


  return (
    <div>
      <div style={{height:"1000px", width:"1000px"}}>
      <h3 style ={{textAlign: 'center'}}>Failed Producer Requests per Second</h3>
          <Chart type='line' data={ {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
            datasets: [
              {
                label: 'Requests per second',
                data:[10, 20, 12, 13, 14, 15],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor:'rgba(75, 192, 192, 1)',
                borderWidth: 4
              }
            ]
          }}/>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(BrokerLineGraph);