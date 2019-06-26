import React from 'react';
import { 
    MDBCard,
    MDBCardBody,
} from 'mdbreact';
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class CalendarPage extends React.Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };
  render() {
    return (
      <MDBCard style={{marginBottom: '5rem'}}>
        <MDBCardBody>
              <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={this.state.events}
                style={{ height: "100vh" }}
              />
        </MDBCardBody>
      </MDBCard>
     );

  }
}

export default CalendarPage;