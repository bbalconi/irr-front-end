import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './dashboard.css';
import { withRouter } from 'react-router-dom';



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
              <Card className="irrCard">
                <CardTitle title="Today's Activity" subtitle="Card subtitle" />
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
                <CardTitle title="Manual Controls" subtitle="Card subtitle" />
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
              <CardTitle title="Schedule a Watering" subtitle="Card subtitle" />
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
              <CardTitle title="Historical Report" subtitle="Card subtitle" />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
              </CardText>
              <CardActions>
                <FlatButton onClick={()=>{this.navigate('historicalReports')}} label="View Reports"/>
              </CardActions>
            </Card>              
            </div>
        )
      }
    }
    
export default withRouter(Dashboard);