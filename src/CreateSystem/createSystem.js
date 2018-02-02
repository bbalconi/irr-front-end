import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


export default class Report extends Component {

    constructor(props){
      super(props);
      this.updateSystem = this.updateSystem.bind(this);
      this.state = {
        systemName: '',
        location:'',
        zones:[]
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
      try{
        await axios.post('/updateSystem');
      } catch (e) {
        console.log(e);
      }
    }

    addZone(){
      //TODO: this is dumb
      this.state.zones.push({})
      this.setState({
        zones : this.state.zones
      })
    }

  render(){

    var mapEls = this.state.zones.map((z)=>{
      return <div> 
        <TextField
           value={this.state.systemName} 
           onChange={this.handleSystemNameChange}
           floatingLabelText="name"
         />
         <TextField
         value={this.state.systemName} 
         onChange={this.handleSystemNameChange}
         floatingLabelText="description"
       />
       </div>

    });

    return(
      <div>
       <Card>
        <CardHeader
          title="Without Avatar"
          subtitle="Subtitle"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <TextField
          value={this.state.systemName} 
          onChange={this.handleSystemNameChange}
          floatingLabelText="name"
        />
        <br />
        <TextField
          value={this.state.location} 
          onChange={this.handleLocationChange}
          floatingLabelText="location"
        /> 
        {mapEls}
        <br/>
        <FlatButton label="Add Zone " primary={true} onClick={this.addZone}/>
        <br/>
        <FlatButton label="Update" primary={true} onClick={this.updateSystem}/>
      </Card>
    </div>
  )
 } 
}