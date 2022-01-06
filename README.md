<p align="center">
<img alignContent="center" src="https://i.imgur.com/rAgCkC6.png" width="300" height="300"></p>

<h2 align="center"><strong>An open source monitoring tool for the Apache Kafka Ecosystem</strong></h2>

<p align="center">
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat"/>
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"/>
  <img src="https://img.shields.io/github/stars/oslabs-beta/Kafmira?logoColor=%2334495e&style=social"> 
</p>

## Table of Contents

* [Key Features](#key-features)
* [Walkthrough](#walkthrough)
* [Setup](#setup)
* [The Development Team](#the-kafmira-development-team)

## Key Features

- Intuitive Kafka ecosystem overview
- Critical cluster health and network metrics - with <strong>alerts</strong> for critical failures
- Graphical display of performance metrics for Brokers, Producers, and Consumers

## Walkthrough




## Setup

1. KafMira requires an Apache Kafka Instance connected to Prometheus, via a JMX Exporter
2. To allow Consumer and Producer metrics to display properly please ensure that your prometheus.yml targets are setup using the following parameters:
      - Producers to be monitored are labeled with job_name : 'producer'
      - Consumers to be monitored are labeled with job_name : 'consumer'
3. To download our desktop application, navigate to our website and download the appropriate file for your OS.
      - If you are using the desktop application, you may need to configure your privacy or security settings to allow the application to open without being             verified.)
      - Alternatively, you can also clone the repository directly from GitHub and run these commands in your terminal:
            - npm install
            - npm run watch
            - npm run start
4. Enter your Prometheus port number for KafMira to verify the port connection
5. Navigate through the various display
6. Should you wish to disconnect or enter another port, use the 'Disconnect' option

## The KafMira Development Team

 [Gibran Haq](https://www.linkedin.com/in/gibran-haq/)
| [Robert Koulakes](https://www.linkedin.com/in/robert-koulakes/)
| [Nicholaos Sofocleous](https://www.linkedin.com/in/nicholaos-sofocleous/)
| [Nicholas Suzuki](https://www.linkedin.com/in/nicholas-j-suzuki/)


<h2> Our thanks... </h2>
  
  <p>Please feel free to fork, clone, and contribute and help KafMira grow! Remember to leave a star if you'd like to support our work!</P>
  <p> - the KafMira Team </p>
  

