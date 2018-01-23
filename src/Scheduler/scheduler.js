import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import localizer from 'react-big-calendar/lib/localizers/globalize'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))


//todo: make a ux for zone selection

export default class Scheduler extends Component {

    constructor(){
      super();
      this.createEvent = this.createEvent.bind(this);
      this.processWateringsForCalendar = this.processWateringsForCalendar.bind(this);
      this.state = {
        events:[]
      }
    }

    //uses data from db to make a react-big-calendar event object
    processWateringsForCalendar(waterings){
      let events = waterings.map((w)=>{
        return {
          start:moment(w.start).toDate(),
          end:moment(w.start).add(w.duration, "milliseconds").toDate(),
          title:"watering"
        }
      });
      this.setState({
        events:events
      });
    }

    async componentDidMount(){
      var res = await axios.get('/waterings');
      this.processWateringsForCalendar(res.data);
    }

    async createEvent(e){
      var res = await axios.post('/waterings', {
        duration: moment(e.end).diff(moment(e.start), "milliseconds"), 
        start:moment(e.start).format(),
       // zones:[3, 4] //fake data
      });
    }

    render(){
      let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
      return (
        <div>
          <BigCalendar
            selectable
            defaultView={"week"}
            onSelectSlot={event => this.createEvent(event)}
            //this needs to be a state
            events={this.state.events}
            views={allViews}
            step={60}
            defaultDate={new Date(2018, 1, 1)}
          />
      </div>
    )
  }
}