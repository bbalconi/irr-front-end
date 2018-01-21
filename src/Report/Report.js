import React, { Component } from 'react';
import axios from 'axios';
import {XAxis, YAxis, Tooltip, Legend, Bar, BarChart, CartesianGrid, LineChart, Line} from 'recharts';
import moment from 'moment';

  //water usage by week
  //water usage by month
  //estimated cost
  //% reclaimed water
  //water usage by zone?

  const dumbData = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];


    const data = [{
      startTime: moment("2018-01-15T18:00:00+00:00").format("l"),
      duration:300000,
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: moment("2018-01-17T18:00:00+00:00").format("l"),
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: moment("2018-01-19T18:00:00+00:00").format("l"),
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: moment("2018-01-21T18:00:00+00:00").format("l"),
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: moment("2018-01-23T18:00:00+00:00").format("l"),
      zones:[3, 5]
    },
    {
      duration:300000,
      startTime: moment("2018-01-25T18:00:24+00:00").format("l"),
      zones:[3, 5]
    }]

    var lastStartTime;
    data.forEach((w, i)=>{
      if (i > 0){
       var duration = moment(w.startTime).diff(moment(lastStartTime), "hours");
       if (duration > 24){
        data.splice(i, 0, {
          duration:0,
          startTime:moment(w.startTime).subtract(1,"d").format("l")
          });
        }
      }
      lastStartTime = w.startTime;
    });

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
            <h3> Water Usage by Week </h3>
            <BarChart width={1000} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="startTime"/>
              <YAxis height={400000}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="duration" fill="#82ca9d" />
            </BarChart>
            <h3> Water Usage by Zone </h3>
            <LineChart width={1000} height={250} data={dumbData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            <h3> Water Usage by Month </h3>
            <BarChart width={1000} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="startTime"/>
              <YAxis height={400000}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="duration" fill="green" />
            </BarChart>
          </div>
    )
  }
  }
}
