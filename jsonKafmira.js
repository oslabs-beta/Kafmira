
const jsonMaker = n => {
  const result = [];
  let value = 9223372036854778000;
  for (let i = 0; i <= n; i++) {
      value = value + 12363 * (Math.random()*100);
      result.push(
        {
            "status": "success",
            "data": {
                "resultType": "vector",
                "result": [
                            {
                                "metric": {
                                            "__name__": "kafka_network_socketserver_memorypoolavailable",
                                            "instance": "kafka:7071",
                                            "job": "kafka"
                                        },
                    "value": [
                        1639262351.207, 
                        value
                        ]
                    }
                ]
            }
        }
    ) 
}
    return result;
}
  
  
  
  
  


console.log(JSON.stringify(jsonMaker(1)))