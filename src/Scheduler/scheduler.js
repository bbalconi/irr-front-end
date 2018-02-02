import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import localizer from 'react-big-calendar/lib/localizers/globalize'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';
import Dialog from 'material-ui/Dialog';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))


export default class Scheduler extends Component {
    constructor(){
      super();
      this.createEvent = this.createEvent.bind(this);
      this.processWateringsForCalendar = this.processWateringsForCalendar.bind(this);
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleRowSelection = this.handleRowSelection.bind(this);
      this.state = {
        events:[],
        open:false,
        value:null,
        //TODO: this needs to come from some config table, even hard-coded, it needs to go into the database
        zones:[
          {
            description: 'Front Garden',
            zone: 1,
            selected:false
          },
          {
            description: 'Right Sidewalk Bed',
            zone: 2,
            selected:false
          },
          {
            description: 'Left Sidewalk bed',
            zone: 3,
            selected:false
          },
          {
            description: 'Front Right Turf',
            zone: 4,
            selected:false
          },
          {
            description: 'Front Left Turf',
            zone: 5,
            selected:false
          },
        ]
      }
      this.selectedEvent = null;
    }

    handleOpen = () => {
      this.setState({open: true});
    };
  
    handleClose = async (toMakeWatering) => {
      if (toMakeWatering){
        let zones = this.state.zones.map((z)=>{
          if (z.selected){
            return z.zone
          }
        }).filter((z)=>{
          if (z){
            return true;
          }
        });
        let e = this.selectedEvent;
        var res = await axios.post('/waterings', {
          duration: moment(e.end).diff(moment(e.start), "milliseconds"), 
          start:moment(e.start).format(),
          zones:zones,
          end:moment(e.end).format()

        });
      }
      var res = await axios.get('/waterings');
      this.processWateringsForCalendar(res.data);
      //TODO don't need to set state twice, doing it above in processwateringsforcalendar
      this.setState({open: false});
    };
    
    //uses data from db to make a react-big-calendar event object
    processWateringsForCalendar(waterings){
        let events = waterings.map((w)=>{
          return {
            start:moment(w.startTime).toDate(),
            end:moment(w.endTime).add(w.total_duration, "milliseconds").toDate(),
            title:"watering"
          }
        });
        this.setState({
          events:events
        });

    }

    handleRowSelection(s){
      //TODO: refactor this, i don't think this is very good
      s.forEach((s)=>{
        this.state.zones.find((zone)=>{
          if ((zone.zone - 1) === s){
              zone.selected = true
            }
          })
      });
      this.setState({
        zones:this.state.zones
     });
    }

    async componentDidMount(){
      var res = await axios.get('/waterings');
      this.processWateringsForCalendar(res.data);
    }

    async createEvent(e){
      this.selectedEvent = e;
      this.handleOpen();
    }

    render(){
      let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
      return (
        <div>
          <Dialog
          title="Select Zones"
          //actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <Table
          onRowSelection={(r)=>{
            this.handleRowSelection(r)
          }}
          // height={this.state.height}
          // fixedHeader={this.state.fixedHeader}
          // fixedFooter={this.state.fixedFooter}
          selectable={true}
          multiSelectable={true}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={true}
            enableSelectAll={false}
          >
            <TableRow>
              <TableHeaderColumn tooltip="Zone">Zone Number</TableHeaderColumn>
              <TableHeaderColumn tooltip="Description">Description</TableHeaderColumn>
            </TableRow>
            </TableHeader>
          <TableBody
            displayRowCheckbox={true}
            deselectOnClickaway={true}
            showRowHover={false}
            stripedRows={false}
          >
            {this.state.zones.map( (row, index) => (
              <TableRow selected={row.selected} key={index}>
                <TableRowColumn>{row.zone}</TableRowColumn>
                <TableRowColumn>{row.description}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter
            adjustForCheckbox={true}
          >
      </TableFooter>
        </Table>
        <RaisedButton onClick={()=>{this.handleClose(true)}} label="Schedule Watering" primary={true}  />
      <RaisedButton onClick={()=>{this.handleClose(false)}} label="Cancel" secondary={true} />
        </Dialog>
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