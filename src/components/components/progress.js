import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBProgress,
  MDBCol,
  MDBSpinner,
} from 'mdbreact';
import Copyrights from './../Footer';
import LinkCard from '../LinkCard';

const Progress = () => {
  return (
    <div id="progress">
      <MDBContainer fluid>
        <section>

          <h5 className="mb-3 dark-grey-text font-weight-bold">Basic examples</h5>

          <MDBProgress value={0} className="mb-2" />
          <MDBProgress value={25} className="mb-2" />
          <MDBProgress value={50} className="mb-2" />
          <MDBProgress value={75} className="mb-2" />
          <MDBProgress value={100} className="mb-2" />

          <MDBRow>
            <h5 className="mt-5 mb-3 pt-4 dark-grey-text font-weight-bold">Contextual alternatives</h5>
          </MDBRow>

          <MDBProgress value={25} color="success" className="mb-2" />
          <MDBProgress value={50} color="info" className="mb-2" />
          <MDBProgress value={75} color="warning" className="mb-2" />
          <MDBProgress value={100} color="danger" className="mb-2" />

          <MDBRow>
            <h5 className="mt-5 mb-3 pt-4 dark-grey-text font-weight-bold">Infinite loading</h5>
          </MDBRow>

          <MDBProgress value={100} animated />

          <MDBRow>
            <h5 className="mt-5 mb-3 pt-4 dark-grey-text font-weight-bold">Spinners</h5>
          </MDBRow>

          <MDBRow className="mb-5">
            <MDBCol md="4">
              <MDBSpinner blue big />
            </MDBCol>

            <MDBCol md="4">
              <MDBSpinner red />
            </MDBCol>

            <MDBCol md="4">
              <MDBSpinner yellow small />
            </MDBCol>
          </MDBRow>

          <MDBRow className="mb-5">

            <MDBCol md="4">
              <MDBSpinner blue big />
              <MDBSpinner red />
              <MDBSpinner yellow small />
            </MDBCol>

            <MDBCol md="4">
              <MDBSpinner red big crazy />
            </MDBCol>

            <MDBCol md="4">
              <MDBSpinner crazy small multicolor />
            </MDBCol>
          </MDBRow>

        </section>

        <LinkCard docs="https://mdbootstrap.com/docs/react/components/progress-bar/" />

      </MDBContainer>
      <Copyrights />
    </div>
  );
}

export default Progress;