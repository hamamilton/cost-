import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBView,
  MDBInput,
  MDBBtn
} from 'mdbreact';

import GoogleMapReact from 'google-map-react';

const Google = () => {
  return (
    <div id="maps-google" style={{ marginBottom: "5rem" }}>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard className="mt-5" narrow >
              <MDBView cascade className="gradient-card-header mdb-color lighten-3">
                <h4 className="h4-responsive text-white">
                  Regular map
                  </h4>
              </MDBView>
              <MDBCardBody style={{ width: '100%', height: '400px' }} className="text-center">
                <GoogleMapReact
                  defaultCenter={{ lat: 10, lng: 10 }}
                  defaultZoom={7}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="mt-5" narrow>
              <MDBView cascade className="gradient-card-header mdb-color lighten-3">
                <h4 className="h4-responsive text-white">
                  Terrain map
                  </h4>
              </MDBView>
              <MDBCardBody style={{ width: '100%', height: '400px' }} className="text-center">
                <GoogleMapReact
                  defaultCenter={{ lat: 10, lng: 10 }}
                  defaultZoom={7}
                  options={{
                    mapTypeId: 'terrain'
                  }}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="mt-5" narrow>
              <MDBView cascade className="gradient-card-header mdb-color lighten-3">
                <h4 className="h4-responsive text-white">
                  Satellite map
                  </h4>
              </MDBView>
              <MDBCardBody style={{ width: '100%', height: '400px' }} className="text-center">
                <GoogleMapReact
                  defaultCenter={{ lat: 10, lng: 10 }}
                  defaultZoom={7}
                  options={{
                    mapTypeId: 'satellite'
                  }}
                />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <hr className="mt-4 mb-5" />

        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="mt-5" narrow>
              <MDBView cascade className="gradient-card-header mdb-color lighten-3">
                <h4 className="h4-responsive text-white">
                  Contact us
                </h4>
              </MDBView>
              <MDBCardBody >
                <div className="z-depth-1-half map-container-7" style={{ width: '100%', height: '400px' }} >
                  <GoogleMapReact
                    defaultCenter={{ lat: 10, lng: 10 }}
                    defaultZoom={7}
                    options={{
                      mapTypeId: 'satellite'
                    }}
                  />
                </div>
                <form onSubmit={e => e.preventDefoult()}>
                  <MDBRow>
                    <MDBCol md="6" className="mb-4">
                      <div className="md-form">
                        <MDBInput label="Your name" />
                        <MDBInput label="Your e-mail" />
                        <MDBInput label="Subject" />
                      </div>
                    </MDBCol>
                    <MDBCol bottom md="6" className="mb-4">
                      <div className="md-form">
                        <MDBInput type="textarea" label="Your message" rows="5" />
                      </div>
                    </MDBCol>
                    <MDBCol md="12">
                      <MDBBtn type="submit" block>Send Message</MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </div >
  );
}

export default Google;