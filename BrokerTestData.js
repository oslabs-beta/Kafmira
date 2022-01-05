const failedProdReqs = {
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
                    ]
                ]
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
                    ]
                ]
            }
        ]
    }
}


console.log(failedProdReqs.data.result[0].values[0][0])
console.log(failedProdReqs.data.result[0].values[1][0])
console.log(failedProdReqs.data.result[0].values[2][0])


// const xTimeVals = [];  --> this will be your x set state

const xTimeVals = failedProdReqs.data.result[0].values.map(el => {
    let date = new Date(el[0]*1000);
    return date.toLocaleDateString('en-US')
})
// console.log(XTimeVals)
