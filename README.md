<p align="center">
<img alignContent="center" src="https://i.imgur.com/rAgCkC6.png" width="300" height="300"></p>

<h2 align="center"><strong>An open source monitoring tool for the Apache Kafka Ecosystem</strong></h2>

<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"/>
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
  <img src="https://img.shields.io/github/stars/oslabs-beta/Kafmira?logoColor=%2334495e&style=social"> 
</p>

Setup Notes for Proper Kafka Cluster Visualization
  - When setting up your Prometheus targets, please ensure the following parameters are met:
    - Desired producers are labled with job_name 'producers'
    - Desired consumers are labled with job_name 'consumers'
