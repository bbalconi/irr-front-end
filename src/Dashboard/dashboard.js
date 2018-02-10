import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';
//import FlatButton from 'material-ui/FlatButton';
import './dashboard.css';
import { withRouter } from 'react-router-dom';
//import {BarChart, Bar, LineChart, Line, AreaChart, Area} from 'recharts';
import {Area, AreaChart} from "recharts";
//import graph from "./graphsandshite.png";

//thought - no text on the dashboard stuff, maybe just a small screenshot of each thing.
//what's this sample data going to be composed of? 
//let's see here...

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class Dashboard extends Component {
  
  constructor(){
    super();
    this.navigate = this.navigate.bind(this);
  }

  navigate(location){
    this.props.history.push(location)
  }
      render(){
        return(
          <div className="reallyTopWrapper">
            <div className="topWrapper">
              <Card onClick={()=>{this.navigate('todaysReport')}} className="irrCard">
                <CardTitle title="Today's Activity" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
               
              </Card>
              <div className="bottomWrapper">
                <Card onClick={()=>{this.navigate('controls')}} className="irrCard">
                <CardTitle title="Manual Controls"  />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
                <Card onClick={()=>{this.navigate('scheduler')}} className="irrCard">
              <CardTitle title="Schedule a Watering" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
            </Card>              
           </div>
          </div>
          <Card onClick={()=>{this.navigate('historicalReports')}} className="irrCard">
              <CardTitle title="Historical Reports" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              {/* <div className="graphImage">
              <img src={graph} alt="grafs" height="300" width="300">
              </img>
              </div> */}
                {/* <LineChart width={478} height={100} data={data}>
        <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
      </LineChart> */}
              <AreaChart width={478} height={150} data={data}
            margin={{top: 5, right: 0, left: 0, bottom: 5}}>
        <Area type='monotone' dataKey='uv' stroke='#54a4a6' fill='#54a4a6' />
      </AreaChart>
              {/* <BarChart width={478} height={40} data={data}>
                <Bar dataKey='uv' fill='#8884d8'/>
                </BarChart> */}
              
            </Card>              
            </div>
        )
      }
    }
    
export default withRouter(Dashboard);