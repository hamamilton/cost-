import React from 'react';
import { 
  MDBRow,
  MDBCol,
  MDBContainer,
} from 'mdbreact';
import LinkCard from '../LinkCard';

import './shadows.css';

const Shadows = () => {
  return (
      <MDBContainer fluid id="shadows">
      <section>

        <MDBRow>
            <MDBCol md="4" className="mb-4">
                <div className="shadow-box-example z-depth-1 flex-center">
                    <p className="white-text">.z-depth-1</p>
                </div>
            </MDBCol>

            <MDBCol md="4" className="mb-4">
                <div className="shadow-box-example z-depth-1-half flex-center">
                    <p className="white-text">.z-depth-1-half</p>
                </div>
            </MDBCol>

            <MDBCol md="4" className="mb-4">
                <div className="shadow-box-example z-depth-2 flex-center">
                    <p className="white-text">.z-depth-2</p>
                </div>
            </MDBCol>
        </MDBRow>

        <MDBRow>
            <MDBCol md="4" className="mb-4">
                <div className="shadow-box-example z-depth-3 flex-center">
                    <p className="white-text">.z-depth-3</p>
                </div>
            </MDBCol>

            <MDBCol md="4" className="mb-4">
                <div className="shadow-box-example z-depth-4 flex-center">
                    <p className="white-text">.z-depth-4</p>
                </div>
            </MDBCol>

            <MDBCol md="4" className="mb-4">
                <div className="shadow-box-example z-depth-5 flex-center">
                    <p className="white-text">.z-depth-5</p>
                </div>
            </MDBCol>
        </MDBRow>

        <MDBRow>
            <MDBCol md="4" className="mb-4">
                <div className="shadow-box-example hoverable flex-center">
                    <p className="white-text">hover me!</p>
                </div>
            </MDBCol>
        </MDBRow>

      </section>

        <LinkCard docs="https://mdbootstrap.com/docs/react/css/shadows/" />
      </MDBContainer>
  );
}

export default Shadows;