import React from 'react';
import { 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBDatePicker,
  MDBCard,
} from 'mdbreact';
import LinkCard from '../LinkCard';

const DatePicker = () => {
  return (
    <div id="datepicker">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="3" className="mx-auto">
            <MDBCard className="px-5 py-3 mt-5 mx-auto">
              <MDBDatePicker/>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <LinkCard docs="https://mdbootstrap.com/docs/react/forms/date-picker/"/>
      </MDBContainer>
    </div>
  );
}

export default DatePicker;