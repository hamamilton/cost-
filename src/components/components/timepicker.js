import React from 'react';
import { 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTimePicker,
  MDBCard,
} from 'mdbreact';
import LinkCard from '../LinkCard';

const timepicker = () => {
  return (
    <div id="timepicker">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="6" lg="5" className="ml-auto">
            <MDBCard className="px-5 py-3 mt-5 mx-2">
              <MDBTimePicker label="12 hours" id="timepicker1"/>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" lg="5" className="mr-auto">
            <MDBCard className="px-5 py-3 mt-5 mx-2">
              <MDBTimePicker hoursFormat={24} label="24 hours, black color" color="black" id="timepicker2"/>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <LinkCard docs="https://mdbootstrap.com/docs/react/forms/time-picker/"/>
      </MDBContainer>
    </div>
  );
}

export default timepicker;