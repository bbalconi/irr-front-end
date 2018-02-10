import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {inject} from 'mobx-react';

class ZoneInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      //systemName:"",
      description:""
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
  }

  render(){
    return <div> 
    <TextField
      value={1} 
      //onChange={this.handleSystemNameChange}
      floatingLabelText="name"
     />
     <TextField
       value={this.state.description} 
       onChange={this.handleDescriptionChange}
       floatingLabelText="description"
     />
   </div>
  }
}

export default inject('zoneStore')(ZoneInput);
