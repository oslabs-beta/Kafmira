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
      port: state.mainReducer.port
    };
  };
  

const MakeProducerLineGraph = (props) => {
 

/*
will probably need useEffect to send a proper fetch request, then save to a variable, till then i have the object im assuming will be returned
*/
// using setState so that we have a variable to save object to
const [resRateData, setResRateData] = setState({});

useEffect(() => {
    // fetch request to prometheus 
    let responseObj = fetch(''
    ).then((response) => response.json());




}, [])



const obj = {
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
                  ],
                  [
                      1640997713.199,
                      "9.799735691775947"
                  ],
                  [
                      1640997715.199,
                      "9.799735691775947"
                  ],
                  [
                      1640997717.199,
                      "9.799735691775947"
                  ],
                  [
                      1640997719.199,
                      "9.799735691775947"
                  ],
                  [
                      1640997721.199,
                      "9.799735691775947"
                  ],
                  [
                      1640997723.199,
                      "9.799735691775947"
                  ],
                  [
                      1640997725.199,
                      "9.799735691775947"
                  ],
                  [
                      1640997727.199,
                      "9.799735691775947"
                  ],
                  [
                      1640997729.199,
                      "9.84471139759742"
                  ],
                  [
                      1640997731.199,
                      "9.84471139759742"
                  ],
                  [
                      1640997733.199,
                      "9.84471139759742"
                  ],
                  [
                      1640997735.199,
                      "9.84471139759742"
                  ],
                  [
                      1640997737.199,
                      "9.84471139759742"
                  ],
                  [
                      1640997739.199,
                      "9.84471139759742"
                  ],
                  [
                      1640997741.199,
                      "9.84471139759742"
                  ],
                  [
                      1640997743.199,
                      "9.872371608280579"
                  ],
                  [
                      1640997745.199,
                      "9.872371608280579"
                  ],
                  [
                      1640997747.199,
                      "9.872371608280579"
                  ],
                  [
                      1640997749.199,
                      "9.872371608280579"
                  ],
                  [
                      1640997751.199,
                      "9.872371608280579"
                  ],
                  [
                      1640997753.199,
                      "9.872371608280579"
                  ],
                  [
                      1640997755.199,
                      "9.872371608280579"
                  ],
                  [
                      1640997757.199,
                      "9.872371608280579"
                  ],
                  [
                      1640997759.199,
                      "9.906503707611595"
                  ],
                  [
                      1640997761.199,
                      "9.906503707611595"
                  ],
                  [
                      1640997763.199,
                      "9.906503707611595"
                  ],
                  [
                      1640997765.199,
                      "9.906503707611595"
                  ],
                  [
                      1640997767.199,
                      "9.906503707611595"
                  ],
                  [
                      1640997769.199,
                      "9.906503707611595"
                  ],
                  [
                      1640997771.199,
                      "9.906503707611595"
                  ],
                  [
                      1640997773.199,
                      "9.911670126592583"
                  ],
                  [
                      1640997775.199,
                      "9.911670126592583"
                  ],
                  [
                      1640997777.199,
                      "9.911670126592583"
                  ],
                  [
                      1640997779.199,
                      "9.911670126592583"
                  ],
                  [
                      1640997781.199,
                      "9.911670126592583"
                  ],
                  [
                      1640997783.199,
                      "9.911670126592583"
                  ],
                  [
                      1640997785.199,
                      "9.911670126592583"
                  ],
                  [
                      1640997787.199,
                      "9.911670126592583"
                  ],
                  [
                      1640997789.199,
                      "9.906228872100884"
                  ],
                  [
                      1640997791.199,
                      "9.906228872100884"
                  ],
                  [
                      1640997793.199,
                      "9.906228872100884"
                  ],
                  [
                      1640997795.199,
                      "9.906228872100884"
                  ],
                  [
                      1640997797.199,
                      "9.906228872100884"
                  ],
                  [
                      1640997799.199,
                      "9.906228872100884"
                  ],
                  [
                      1640997801.199,
                      "9.906228872100884"
                  ],
                  [
                      1640997803.199,
                      "9.914725202986657"
                  ],
                  [
                      1640997805.199,
                      "9.914725202986657"
                  ],
                  [
                      1640997807.199,
                      "9.914725202986657"
                  ],
                  [
                      1640997809.199,
                      "9.914725202986657"
                  ],
                  [
                      1640997811.199,
                      "9.914725202986657"
                  ],
                  [
                      1640997813.199,
                      "9.914725202986657"
                  ],
                  [
                      1640997815.199,
                      "9.914725202986657"
                  ],
                  [
                      1640997817.199,
                      "9.914725202986657"
                  ],
                  [
                      1640997819.199,
                      "9.932506115712222"
                  ],
                  [
                      1640997821.199,
                      "9.932506115712222"
                  ],
                  [
                      1640997823.199,
                      "9.932506115712222"
                  ],
                  [
                      1640997825.199,
                      "9.932506115712222"
                  ],
                  [
                      1640997827.199,
                      "9.932506115712222"
                  ],
                  [
                      1640997829.199,
                      "9.932506115712222"
                  ],
                  [
                      1640997831.199,
                      "9.932506115712222"
                  ]
              ]
          }
      ]
  }

  
}
// const [xAxis, setXAxis ] = useState([]);
// const [yAxis, setYAxis ] = useState([]);
  
  const xArray = [];
  const yArray = [];
  // push method to build x axis (times)
  obj.data.result[0].values.forEach(ele => {
    //   added element[0] here
    const humanDate = new Date(ele[0] * 1000)

    // const sliceNumber = stringifiedNum.slice(6, 9)
    // Number(ele.slice(6, -4))
    
    xArray.push(humanDate)
  })
  // push method to build y-axis (values)
  obj.data.result[0].values.forEach(ele => {
    yArray.push(ele[1])

    
  })
//   setXAxis(xArray)
//   setYAxis(yArray)


// render() {
//   console.log('hi');
//   console.log(obj.data.result[0].values);
// }
const innerFunc = () => {
    console.log('Entire Array: ', obj.data.result[0].values);
    console.log('xArray: ', xArray);
    console.log('yArray: ', yArray);
}
innerFunc();
 
  return (
    <div>
      <h3 style ={{textAlign: 'center'}}>Topics Written per Second</h3>
      <div style={{height:"1000px", width:"1000px"}}>
          <Chart type='line' data={ {
      labels: xArray,
      datasets: [
        {
          label: 'Topics per second',
          data: yArray,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor:'rgba(75, 192, 192, 1)',
          borderWidth: 4
        }
      ]
    }}  />
      </div>
    </div>
  );
}

export default MakeProducerLineGraph;