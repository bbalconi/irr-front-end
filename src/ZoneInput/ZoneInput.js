import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { updateZoneInput } from '../actions';

//todo: clean up all of these objects. i.e. selecting 'this.props.zone...", it should really be "this.props..."
class ZoneInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      description:this.props.zone.description
    }
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleDescriptionChange(event) {
    this.setState({description: event.target.value});
    this.props.dispatch(updateZoneInput({
      description:event.target.value, 
      id:this.props.zone.id}));
  }

  render(){
    return (
      <div> 
        <TextField
          value={this.props.zone.id} 
          floatingLabelText="name"
        />
        <TextField
          value={this.state.description} 
          onChange={this.handleDescriptionChange}
          floatingLabelText="description"
        />
      </div>
    )
  }
}

export default ZoneInput;
