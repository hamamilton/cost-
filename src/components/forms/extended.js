import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBBtn,
} from 'mdbreact';
import GoogleMapReact from 'google-map-react';

const extended = () => {
  return (
    <div id="forms-extended">
        <MDBRow>
            <MDBCol md="12" lg="4" className="mb-4">
                <MDBCard>
                    <MDBCardBody>
                      <p className="h5 text-center mb-4">Sign in</p>
                      <MDBInput icon="envelope" iconClass="grey-text" label="Your email"/>
                      <MDBInput type="password" icon="lock" iconClass="grey-text" label="Your password"/>
                      <div className="text-center">
                        <MDBBtn>Login</MDBBtn>
                      </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
                <MDBCard>
                    <MDBCardBody>
                      <p className="h5 text-center mb-4">Sign up</p>
                      <MDBInput icon="user" iconClass="grey-text" label="Your username"/>
                      <MDBInput icon="envelope" iconClass="grey-text" label="Your email"/>
                      <MDBInput type="password" icon="lock" iconClass="grey-text" label="Your password"/>
                      <div className="text-center">
                        <MDBBtn color="deep-orange">Sign up</MDBBtn>
                      </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">

            <MDBCard>
                    <MDBCardBody>
                      <p className="h5 text-center mb-4">Subscribe</p>
                      <MDBInput icon="user" iconClass="grey-text" label="Your name"/>
                      <MDBInput icon="envelope" iconClass="grey-text" label="Your email"/>
                      <div className="text-center">
                        <MDBBtn color="indigo">Send<MDBIcon icon="paper-plane-o ml-1"/></MDBBtn>
                      </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <hr className="my-5"/>

        <section className="section pb-5">

            <h2 className="section-heading h1 pt-4 text-center my-5">Contact us</h2>
            <p className="section-description pb-4 text-center mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
                esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

            <MDBRow className="mb-5">
                <MDBCol lg="5" className="mb-4">
                    <MDBCard>
                        <MDBCardBody>
                            <div className="form-header blue accent-1">
                                <h3><MDBIcon icon="envelope"/> Write to us:</h3>
                            </div>

                            <p className="h5 text-center mb-4">Sign in</p>
                              <MDBInput icon="user" iconClass="grey-text" label="Your name"/>
                              <MDBInput icon="envelope" iconClass="grey-text" label="Your email"/>
                              <MDBInput icon="tag" iconClass="grey-text" label="Subject"/>
                              <MDBInput type="textarea" icon="pencil-alt" iconClass="grey-text" label="Your message"/>
                              <div className="text-center">
                                <MDBBtn color="light-blue">Submit</MDBBtn>
                              </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol lg="7">
                    <div style={{height: '400px'}} className="z-depth-1-half map-container">
                      <GoogleMapReact
                        defaultCenter={{lat: 40.725118, lng: -73.997699}}
                        defaultZoom={14}
                      />
                    </div>
                    <MDBRow className="text-center">
                        <MDBCol md="4">
                            <MDBBtn floating tag="a" className="blue accent-1" color=""><MDBIcon icon="map-marker-alt"/></MDBBtn>
                            <p>San Francisco, CA 94126</p>
                            <p>United States</p>
                        </MDBCol>

                        <MDBCol md="4">
                        <MDBBtn floating tag="a" className="blue accent-1" color=""><MDBIcon icon="phone"/></MDBBtn>
                            <p>+ 01 234 567 89</p>
                            <p>Mon - Fri, 8:00-22:00</p>
                        </MDBCol>

                        <MDBCol md="4">
                        <MDBBtn floating tag="a" className="blue accent-1" color=""><MDBIcon icon="envelope"/></MDBBtn>
                            <p>info@gmail.com</p>
                            <p>sale@gmail.com</p>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </section>
    </div>
  );
}

export default extended;