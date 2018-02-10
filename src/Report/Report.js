import React, { Component } from 'react';
import axios from 'axios';
import {XAxis, YAxis, Tooltip, Legend, Bar, BarChart, CartesianGrid, LineChart, Line} from 'recharts';
import moment from 'moment';
import "./Report.css"
import {Card, 
 // CardActions, 
//  CardHeader, 
 // CardMedia, 
  CardTitle, 
  CardText
} from 'material-ui/Card';

  //water usage by week
  //water usage by month
  //estimated cost
  //% reclaimed water
//totals: % reclaimed water
//total esimated cost
//total water usage
//total sunlight?  
//water usage by zone?
//todo: today's activity displays weather, is system active, what the sensors are showing. a simple read only day view caalendar, webcam
//look up what them components can do for these things. 
//let's get the card in there..
//todo: get the total card fixed to the side
  //todo: get this dumbData from actual data
  //so ill need to do a bunch of calculations... that is rough... i shouldn't do that on the front end...

     //Bozeman's rate = $0.003/gal;
     //a terrible estimation, but it's something to start with
     //garden consumes = 15gal/hr;
     //$0.045/hr
    
export default class Report extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      dailysData:null,
      monthlysData:null
    }
    this.processDailys = this.processDailys.bind(this);
    this.calculateWaterUsage = this.calculateWaterUsage.bind(this);
  }

  processDailys(data){
    let processedData = [];
    data.forEach((d)=>{
      var matchedDay = processedData.find((pD)=>{
        if (pD.day === moment(d.startTime).format('l')){
          return true;
        }
      });
      if (matchedDay){
        matchedDay.totalDuration += d.duration;
      } else {
        processedData.push({
          totalDuration: d.duration,
          day:moment(d.startTime).format('l')
        });
      }
    });
    return processedData;
  }

  async componentWillMount(){

    //TODO: move logic into backend? (like the monthlys)

    let startTime = moment().startOf("week").format();
    let endTime = moment(startTime).add(1, "weeks");
    var dailys = await axios.post('/dailyWaterings',{
      startTime: startTime,
      endTime: endTime.format()
    });
    var monthlys = await axios.post('/monthlyWaterings');
    var zones = await axios.post('/zoneUsage');
    console.log(zones);
    // daily data is the processed dailys that give totals for each day
    let dailysData = this.processDailys(dailys.data);
    this.calculateWaterUsage(dailysData);
    this.setState({
      dailysData:dailysData,
      monthlysData:monthlys.data,
      loading:false
    });
  }

  calculateWaterUsage(data){
    var lastStartTime;
    data.forEach((w, i)=>{
      w.cityWaterUsage = (w.totalDuration / (60000 * 60) ) * 15;
      if (i > 0){
       var duration = moment(w.startTime).diff(moment(lastStartTime), "hours");
       if (duration > 24){
        data.splice(i, 0, {
          cityWaterUsage:0,
          startTime:moment(w.startTime).subtract(1,"d").format("l"),
          });
        }
     }
      lastStartTime = w.startTime;
    });
  }

  render(){
    if (this.state.loading){
      return "loading..."
    } else {
      return(
          <div>
            <div>
            <h3 className="chartTitle"> Water Usage by Day </h3>
            <BarChart width={1000} height={300} data={this.state.dailysData}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="day"/>
              <YAxis label={{ value: 'gallons of water', angle: -90, position: 'insideLeft' }} height={1}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="cityWaterUsage" stackId="a" fill="rgb(84, 164, 166)" />
              {/* <Bar dataKey="reclaimedWaterUsage" stackId="a" fill="#82ca9d" /> */}
            </BarChart>
            <h3 className="chartTitle"> Water Usage Month </h3>
            <LineChart width={1000} height={250} data={this.state.monthlysData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              {/* <Line type="monotone" dataKey="reclaimedWater" stroke="#8884d8" /> */}
              <Line type="monotone" dataKey="totalWaterUsage" stroke="#82ca9d" />
            </LineChart>
            <h3 className="chartTitle"> Water Usage by Zone </h3>
            <BarChart width={1000} height={300} data={this.state.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="startTime"/>
              <YAxis height={400000}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="duration" fill="green" />
            </BarChart>
            </div>
            <div>
            <Card onClick={()=>{this.navigate('todaysReport')}} className="irrCard">
                <CardTitle title="Totals" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
               
              </Card>
            </div> 
          </div>
      )
    }
  }
}
