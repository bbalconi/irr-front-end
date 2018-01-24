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
  //so ill need to do a bunch of calculations... that is rough... i shouldn't do that on the front end...


  //what a mojo killer

  const dumbData = [
    {name: 'January', reclaimedWater: 400, cityWater: 240, amt: 2400},
    {name: 'February', reclaimedWater: 300, cityWater: 139, amt: 2210},
    {name: 'March', reclaimedWater: 200, cityWater: 980, amt: 2290},
    {name: 'April', reclaimedWater: 278, cityWater: 390, amt: 2000},
    {name: 'May', reclaimedWater: 189, cityWater: 480, amt: 2181},
    {name: 'June', reclaimedWater: 239, cityWater: 380, amt: 2500},
    {name: 'July', reclaimedWater: 349, cityWater: 430, amt: 2100},
  ];

     //Bozeman's rate = $0.003/gal;
     //a terrible estimation, but it's something to start with
     //garden consumes = 15gal/hr;
     //$0.045/hr
    
export default class Report extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      data:null
    }
  }


  //two ways to handle this
  //1) i could do something fancy on the backend
  // i like the data layer more and more... i think that is wise...

    // run the calculation on 
  //2) maybe i could do some fancy shite in the data layer
    // a. probs have to update a table upon every call. not a terrible idea i guess
  //3) could try it on the front end

  // could have it to where instead of a card, it is one of those side bars, 
  // and then when the user minimizes it, the graphs expand...

  async componentWillMount(){
    var res = await axios.get('/waterings');
    var lastStartTime;
    res.data.forEach((w, i)=>{
      w.cityWaterUsage = (w.duration / (60000 * 60) ) * 15;
      if (i > 0){
       var duration = moment(w.startTime).diff(moment(lastStartTime), "hours");
       if (duration > 24){
        res.data.splice(i, 0, {
          duration:0,
          startTime:moment(w.startTime).subtract(1,"d").format("l"),
          cityWaterUsage: 0
          });
        } else {
          //TODO: shouldnt be mutating this data directly
          w.startTime = moment(w.startTime).format("l");
        }
      }
      lastStartTime = w.startTime;

    this.setState({
      data:res.data,
      loading:false
    });
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
            <BarChart width={1000} height={300} data={this.state.data}
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
