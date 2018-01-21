import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import localizer from 'react-big-calendar/lib/localizers/globalize'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

const data = [{
  duration:300000,
  startTime: "2018-01-15T18:00:00+00:00",
  zones:[3, 5]
},
{
  duration:300000,
  startTime: "2018-01-17T18:00:00+00:00",
  zones:[3, 5]
},
{
  duration:300000,
  startTime: "2018-01-19T18:00:00+00:00",
  zones:[3, 5]
},
{
  duration:300000,
  startTime: "2018-01-21T18:00:00+00:00",
  zones:[3, 5]
},
{
  duration:300000,
  startTime: "2018-01-23T18:00:00+00:00",
  zones:[3, 5]
},
{
  duration:300000,
  startTime: "2018-01-25T18:00:24+00:00",
  zones:[3, 5]
}]

export default class Scheduler extends Component {
 events = [
   {
     id: 0,
     title:'watering',
     start: moment("2018-02-10T18:00:24+00:00").toDate(),
     end:moment("2018-02-10T18:05:24+00:00").toDate()
   },
   {
    id: 0,
    title:'watering',
    start: moment("2018-02-12T18:00:24+00:00").toDate(),
    end:moment("2018-02-12T18:05:24+00:00").toDate()
  },
  {
    id: 0,
    title:'watering',
    start: moment("2018-02-14T18:00:24+00:00").toDate(),
    end:moment("2018-02-14T18:05:24+00:00").toDate()
  },
  {
    id: 0,
    title:'watering',
    start: moment("2018-02-16T18:00:24+00:00").toDate(),
    end:moment("2018-02-16T18:05:24+00:00").toDate()
  },
  {
    id: 0,
    title:'watering',
    start: moment("2018-02-18T18:00:24+00:00").toDate(),
    end:moment("2018-02-18T18:05:24+00:00").toDate()
  }
 ]

    // events = [
    //   {
    //     id: 0,
    //     title: 'All Day Event very long title',
    //     allDay: true,
    //     start: new Date(2015, 3, 0),
    //     end: new Date(2015, 3, 1),
    //   },
    //   {
    //     id: 1,
    //     title: 'Long Event',
    //     start: new Date(2015, 3, 7),
    //     end: new Date(2015, 3, 10),
    //   },
    
    //   {
    //     id: 2,
    //     title: 'DTS STARTS',
    //     start: new Date(2016, 2, 13, 0, 0, 0),
    //     end: new Date(2016, 2, 20, 0, 0, 0),
    //   },
    
    //   {
    //     id: 3,
    //     title: 'DTS ENDS',
    //     start: new Date(2016, 10, 6, 0, 0, 0),
    //     end: new Date(2016, 10, 13, 0, 0, 0),
    //   },
    
    //   {
    //     id: 4,
    //     title: 'Some Event',
    //     start: new Date(2015, 3, 9, 0, 0, 0),
    //     end: new Date(2015, 3, 9, 0, 0, 0),
    //   },
    //   {
    //     id: 5,
    //     title: 'Conference',
    //     start: new Date(2015, 3, 11),
    //     end: new Date(2015, 3, 13),
    //     desc: 'Big conference for important people',
    //   },
    //   {
    //     id: 6,
    //     title: 'Meeting',
    //     start: new Date(2015, 3, 12, 10, 30, 0, 0),
    //     end: new Date(2015, 3, 12, 12, 30, 0, 0),
    //     desc: 'Pre-meeting meeting, to prepare for the meeting',
    //   },
    //   {
    //     id: 7,
    //     title: 'Lunch',
    //     start: new Date(2015, 3, 12, 12, 0, 0, 0),
    //     end: new Date(2015, 3, 12, 13, 0, 0, 0),
    //     desc: 'Power lunch',
    //   },
    //   {
    //     id: 8,
    //     title: 'Meeting',
    //     start: new Date(2015, 3, 12, 14, 0, 0, 0),
    //     end: new Date(2015, 3, 12, 15, 0, 0, 0),
    //   },
    //   {
    //     id: 9,
    //     title: 'Happy Hour',
    //     start: new Date(2015, 3, 12, 17, 0, 0, 0),
    //     end: new Date(2015, 3, 12, 17, 30, 0, 0),
    //     desc: 'Most important meal of the day',
    //   },
    //   {
    //     id: 10,
    //     title: 'Dinner',
    //     start: new Date(2015, 3, 12, 20, 0, 0, 0),
    //     end: new Date(2015, 3, 12, 21, 0, 0, 0),
    //   },
    //   {
    //     id: 11,
    //     title: 'Birthday Party',
    //     start: new Date(2015, 3, 13, 7, 0, 0),
    //     end: new Date(2015, 3, 13, 10, 30, 0),
    //   },
    //   {
    //     id: 12,
    //     title: 'Late Night Event',
    //     start: new Date(2015, 3, 17, 19, 30, 0),
    //     end: new Date(2015, 3, 18, 2, 0, 0),
    //   },
    //   {
    //     id: 13,
    //     title: 'Multi-day Event',
    //     start: new Date(2015, 3, 20, 19, 30, 0),
    //     end: new Date(2015, 3, 22, 2, 0, 0),
    //   },
    // ]

    render(){
      let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])
      return (
        <div>
          <BigCalendar
            events={this.events}
            views={allViews}
            step={60}
            defaultDate={new Date(2018, 1, 1)}
          />
      </div>
    )
  }
}