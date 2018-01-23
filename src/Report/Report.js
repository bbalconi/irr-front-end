import React, { Component } from 'react';
import axios from 'axios';
import {XAxis, YAxis, Tooltip, Legend, Bar, BarChart, CartesianGrid, LineChart, Line} from 'recharts';
import moment from 'moment';
import "./Report.css"
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

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
  const dumbData = [
    {name: 'January', reclaimedWater: 400, cityWater: 240, amt: 2400},
    {name: 'February', reclaimedWater: 300, cityWater: 139, amt: 2210},
    {name: 'March', reclaimedWater: 200, cityWater: 980, amt: 2290},
    {name: 'April', reclaimedWater: 278, cityWater: 390, amt: 2000},
    {name: 'May', reclaimedWater: 189, cityWater: 480, amt: 2181},
    {name: 'June', reclaimedWater: 239, cityWater: 380, amt: 2500},
    {name: 'July', reclaimedWater: 349, cityWater: 430, amt: 2100},
  ];

  //aha, the mapping. so we'll need to get the 
  //so we might need a different concept... like a "watered.."
  //fork - i could have two seperate 
    // 1) keep everything in one table
          //a. totalDuration field and a reclaimed water duration
    // 2) seperate into two tables
          //a. i guess i need to look into this. this is still a bit of a mystery
  // what is the best way to handle this? 


    const data = [{
      startTime: moment("2018-01-15T18:00:00+00:00").format("l"),
      duration:300000,
      reclaimedWaterUsage:0.2,
      zones:[3, 5]
    },
    {
      duration:200000,
      startTime: moment("2018-01-17T18:00:00+00:00").format("l"),
      zones:[3, 5],
      reclaimedWaterUsage:0.2,
    },
    {
      duration:300000,
      startTime: moment("2018-01-19T18:00:00+00:00").format("l"),
      zones:[3, 5],
      reclaimedWaterUsage:0.2,
    },
    {
      duration:100000,
      startTime: moment("2018-01-21T18:00:00+00:00").format("l"),
      zones:[3, 5],
      reclaimedWaterUsage:0.2      
    },
    {
      duration:300000,
      startTime: moment("2018-01-23T18:00:00+00:00").format("l"),
      zones:[3, 5],
      reclaimedWaterUsage:0.2,
    },
    {
      duration:300000,
      startTime: moment("2018-01-25T18:00:24+00:00").format("l"),
      zones:[3, 5],
      reclaimedWaterUsage:0.125,
    }]
    //i gotta make my own data for the zone

    //Bozeman's rate = $0.003/gal;
    //a terrible estimation, but it's something to start with
    //garden consumes = 15gal/hr;
    //$0.045/hr

    var lastStartTime;
    data.forEach((w, i)=>{
      //console.log(duration/(60000 * 60) )
      w.cityWaterUsage = (w.duration / (60000 * 60) ) * 15;

      if (i > 0){
       var duration = moment(w.startTime).diff(moment(lastStartTime), "hours");
       if (duration > 24){
        data.splice(i, 0, {
          duration:0,
          startTime:moment(w.startTime).subtract(1,"d").format("l"),
          cityWaterUsage: 0
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

  //could have it to where instead of a card, it is one of those side bars, and then when the user minimizes it, the graphs expand...
  //play with that for sure...

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
           
            <div>
            <h3 className="chartTitle"> Water Usage by Week </h3>
            <BarChart width={1000} height={300} data={data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
              <XAxis dataKey="startTime"/>
              <YAxis label={{ value: 'gallons of water', angle: -90, position: 'insideLeft' }} height={1}/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip/>
              <Legend />
              <Bar dataKey="cityWaterUsage" stackId="a" fill="rgb(84, 164, 166)" />
              <Bar dataKey="reclaimedWaterUsage" stackId="a" fill="#82ca9d" />
            </BarChart>
            <h3 className="chartTitle"> Water Usage Month </h3>
            <LineChart width={1000} height={250} data={dumbData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="reclaimedWater" stroke="#8884d8" />
              <Line type="monotone" dataKey="cityWater" stroke="#82ca9d" />
            </LineChart>
            <h3 className="chartTitle"> Water Usage by Zone </h3>
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
