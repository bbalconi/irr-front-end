import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
//import { withRouter } from 'react-router-dom';
import {Card, 
//  CardActions, 
  CardHeader, 
 // CardText
} from 'material-ui/Card';
import ZoneInput from '../ZoneInput/ZoneInput';
import {inject} from 'mobx-react';


class CreateSystem extends Component {

  constructor(props){
      super(props);
      this.updateSystem = this.updateSystem.bind(this);
      this.state = {
       system:{
         name:" ",
         location: ""
       }
      };
      this.addZone = this.addZone.bind(this);
      this.handleLocationChange = this.handleLocationChange.bind(this);
      this.handleSystemNameChange = this.handleSystemNameChange.bind(this);
    }

    handleSystemNameChange(event){
      this.setState({systemName: event.target.value});
    }
    
    handleLocationChange(event) {
      this.setState({location: event.target.value});
    }

    async updateSystem(){
      console.log(this.props);
      try{
        //console.log(this.state.zones);
//        await axios.post('/updateSystem', {
          //name:this.state.systemName,
          //location:this.state.location
        //});
      } catch (e) {
        console.log(e);
      }
    }

    async componentWillMount(){
      let system =  await axios.get('/system');
      this.setState({
        system:system.data[0]
      });
    }

  addZone(){
    this.state.zones.push({
      id:this.state.zones.length,
      description:'description'
    });
    this.setState({
      zones : this.state.zones
    });
  }

  //here's the flow - get a zone table
  //populate the table with some faux data
  //populate it in /createSystem
  //next - handle upserts with a post
  //finally, we can get zone data into /Reports
  //donezoids

  render(){
    // var mapEls = this.state.zones.map((z, i)=>{
    //   return 
    //     <div> 
    //       <TextField
    //         key={i}
    //         value={this.state.zones[i].id} 
    //         onChange={this.handleSystemNameChange}
    //         floatingLabelText="name"
    //       />
    //       <TextField
    //         value={this.state.zones[i].description} 
    //         onChange={this.handleSystemNameChange}
    //         floatingLabelText="description"
    //       />
    //     </div>
    // });

    //maybe make a list? 
    //i think that is the way to deal with this...


    return(
        <Card>
          <CardHeader
            title="Without Avatar"
            subtitle="Subtitle"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <TextField
            value={this.state.system.name} 
            onChange={this.handleSystemNameChange}
            floatingLabelText="name"
          />
          <br />
          <TextField
            value={this.state.system.location} 
            onChange={this.handleLocationChange}
            floatingLabelText="location"
          /> 
          
           <ZoneInput /> 
          <br/>
          <FlatButton label="Add Zone " primary={true} onClick={this.addZone}/>
          <br/>
          <FlatButton label="Update" primary={true} onClick={this.updateSystem}/>
        </Card>
  )
 } 
}

export default inject('zoneStore')(CreateSystem);
