# KafMira
<img alignContent="center" src="https://i.imgur.com/aG2ttYV.png" width="500" height="500"></p>
<h1 align="center"><strong>An open source monitoring tool for the Apache Kafka Ecosystem</strong>

Setup Notes for Proper Kafka Cluster Visualization
  - When setting up your Prometheus targets, please ensure the following parameters are met:
    - Desired producers are labled with job_name 'producers'
    - Desired consumers are labled with job_name 'consumers'
