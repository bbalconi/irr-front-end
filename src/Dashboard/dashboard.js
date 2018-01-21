import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './dashboard.css';
import { withRouter } from 'react-router-dom';
import {BarChart, Bar, LineChart, Line, AreaChart, Area} from 'recharts';


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
p

      render(){
        return(
          <div className="reallyTopWrapper">
            <div className="topWrapper">
              <Card className="irrCard">
                <CardTitle title="Today's Activity" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton onClick={()=>{this.navigate('todaysReport')}} label="See Today's Activity" />
                </CardActions>
              </Card>
              <div className="bottomWrapper">
                  <Card className="irrCard">
                <CardTitle title="Manual Controls"  />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
              <CardActions>
                <FlatButton onClick={()=>{this.navigate('controls')}} label="Visit Controls" />
              </CardActions>
            </Card>
                <Card className="irrCard">
              <CardTitle title="Schedule a Watering" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton onClick={()=>{this.navigate('scheduler')}} label="Go to Scheduler" />
              </CardActions>
            </Card>              
           </div>
          </div>
          <Card className="irrCard">
              <CardTitle title="Historical Reports" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <AreaChart width={478} height={150} data={data}
            margin={{top: 5, right: 0, left: 0, bottom: 5}}>
        <Area type='monotone' dataKey='uv' stroke='#54a4a6' fill='#54a4a6' />
      </AreaChart>
              {/* <BarChart width={150} height={40} data={data}>
                <Bar dataKey='uv' fill='#8884d8'/>
                </BarChart>
                <LineChart width={300} height={100} data={data}>
        <Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
      </LineChart> */}
                  
              <CardActions>
                <FlatButton onClick={()=>{this.navigate('historicalReports')}} label="View Reports"/>
              </CardActions>
            </Card>              
            </div>
        )
      }
    }
    
export default withRouter(Dashboard);