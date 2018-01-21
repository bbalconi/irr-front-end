import React, { Component } from 'react';
import axios from 'axios';
import {XAxis, YAxis, Tooltip, Legend, Bar, BarChart, CartesianGrid} from 'recharts';
import moment from 'moment';

  //water usage by week
  //water usage by month
  //estimated cost
  //% reclaimed water
  //water usage by zone?

  //this is good i think

  //what about today's activity?
      const data = [{
      name: "2018-01-15T18:00:00+00:00",
      duration:300000,
      zones:[3, 5]
    },
    {
      duration:300000,
      name: "2018-01-17T18:00:00+00:00",
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: "2018-01-19T18:00:00+00:00",
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: "2018-01-21T18:00:00+00:00",
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: "2018-01-23T18:00:00+00:00",
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: "2018-01-25T18:00:24+00:00",
      zones:[3, 5]
    }]

export default class Report extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }

  async componentWillMount(){
    var res =  await axios.get('https://raw.githubusercontent.com/react-d3/react-d3-example/master/simple/data/user_sample.json');
    this.chartData = res.data;
    this.setState({
      loading:false
    });
  }

  render(){
    if (this.state.loading){
      return "loading..."
    } else {
      return(
          <div>
            <BarChart width={600} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="name"/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              {/* <Bar dataKey="pv" fill="#8884d8" /> */}
              <Bar dataKey="duration" fill="#82ca9d" />
            </BarChart>
          </div>
    )
  }
  }
}

