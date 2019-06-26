import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBBtn,
} from 'mdbreact';
import LinkCard from '../LinkCard';

const Icons = () => {
  return (
      <MDBContainer fluid>
            <section id="introduction">

                <p>MDB Admin Dashboard uses a powerful set of icons called Font Awesome.</p>
                <p className="description">Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow,
                    and anything that can be done with the power of CSS.</p>

                <section className="mt-5">
                    <MDBRow>
                        <MDBCol sm="6" md="4" className="pr-2 mb-4">
                            <h4><MDBIcon icon="flag blue-text pr-2" aria-hidden="true"/> One Font, 628 Icons</h4> In a single collection, Font Awesome is a pictographic language of web-related actions.
                        </MDBCol>
                        <MDBCol sm="6" md="4" className="pr-2 mb-4">
                            <h4><MDBIcon icon="ban indigo-text pr-2" aria-hidden="true"/> No JavaScript Required</h4> Fewer
                            compatibility concerns because Font Awesome doesn't require JavaScript.
                        </MDBCol>
                        <MDBCol sm="6" md="4" className="pr-2 mb-4">
                            <h4><MDBIcon icon="arrows-alt teal-text pr-2" aria-hidden="true"/> Infinite Scalability</h4>
                            Scalable vector graphics means every icon looks awesome at any size.
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol sm="6" md="4" className="pr-2 mb-4">
                            <h4><MDBIcon icon="microphone green-text pr-2" aria-hidden="true"/> Free, as in Speech</h4> Font
                            Awesome is completely free for commercial use.
                        </MDBCol>
                        <MDBCol sm="6" md="4" className="pr-2 mb-4">
                            <h4><MDBIcon icon="pencil-alt deep-purple-text pr-2" aria-hidden="true"/> CSS Control</h4> Easily
                            style icon color, size, shadow, and anything that's possible with CSS.
                        </MDBCol>
                        <MDBCol sm="6" md="4" className="pr-2 mb-4">
                            <h4><MDBIcon icon="eye cyan-text pr-2" aria-hidden="true"/> Perfect on Retina Displays</h4> Font
                            Awesome icons are vectors, which mean they're gorgeous on high-resolution displays.
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol sm="6" md="4" className="pr-2 mb-4">
                            <h4><MDBIcon icon="wheelchair blue-text pr-2" aria-hidden="true"/> Accessibility-minded</h4>
                            Font Awesome <MDBIcon icon="heart" aria-hidden="true"/><span className="sr-only">loves</span> screen readers and helps make your icons accessible on the web.
                        </MDBCol>
                    </MDBRow>
                </section>

            </section>

            <hr className="my-5"/>

            <section>
                <h4 className="mb-5 pb-4 font-weight-bold dark-grey-text"><strong>Examples</strong></h4>

                <MDBRow className="features-big text-center mb-5">
                    <MDBCol md="4">
                      <MDBIcon icon="chart-area mb-3 red-text" size="3x"/>
                        <h5 className="feature-title font-weight-bold">Analytics</h5>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                            assumenda deleniti hic.</p>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBIcon icon="book mb-3 cyan-text" size="3x"/>
                        <h5 className="feature-title font-weight-bold">Tutorials</h5>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                            assumenda deleniti hic.</p>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBIcon icon="coffee mb-3 orange-text" size="3x"/>
                        <h5 className="feature-title font-weight-bold">Relax</h5>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
                            assumenda deleniti hic.</p>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="features-small mb-5">
                    <MDBCol md="4">
                        <MDBCol size="1" md="2" className="float-left">
                            <MDBIcon icon="bullhorn blue-text" size="3x"/>
                        </MDBCol>
                        <MDBCol size="10" md="9" lg="10" className="float-left">
                            <h4 className="feature-title font-weight-bold">Marketing</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam
                                minima assumenda.</p>
                            <MDBBtn color="primary" size="sm" className="ml-0">Learn more</MDBBtn>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBCol size="1" md="2" className="float-left">
                            <MDBIcon icon="cogs pink-text" size="3x"/>
                        </MDBCol>
                        <MDBCol size="10" md="9" lg="10" className="float-left">
                            <h4 className="feature-title font-weight-bold">Customization</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam
                                minima assumenda.</p>
                            <MDBBtn color="pink" size="sm" className="ml-0">Learn more</MDBBtn>
                        </MDBCol>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBCol size="1" md="2" className="float-left">
                          <MDBIcon icon="tachometer-alt deep-orange-text" size="3x"/>
                        </MDBCol>
                        <MDBCol size="10" md="9" lg="10" className="float-left">
                            <h4 className="feature-title font-weight-bold">Support</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam
                                minima assumenda.</p>
                            <MDBBtn color="secondary" size="sm" className="ml-0">Learn more</MDBBtn>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="mb-5 pb-5">
                    <MDBCol md="6" lg="3" className="mb-4">
                      <MDBCard className="text-center">
                            <MDBCardBody className="my-4">
                                <MDBIcon icon="heart mb-4 red-text" size="3x"/>
                                <h4 className="feature-title font-weight-bold">Passion</h4>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" lg="3" className="mb-4">
                      <MDBCard className="text-center">
                            <MDBCardBody className="my-4">
                                <MDBIcon icon="book 3x mb-4 cyan-text" size="3x"/>
                                <h4 className="feature-title font-weight-bold">Education</h4>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" lg="3" className="mb-4">
                      <MDBCard className="text-center">
                            <MDBCardBody className="my-4">
                                <MDBIcon icon="plane mb-4 green-text" size="3x"/>
                                <h4 className="feature-title font-weight-bold">Travel</h4>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" lg="3" className="mb-4">
                      <MDBCard className="text-center">
                            <MDBCardBody className="my-4">
                                <MDBIcon icon="laptop mb-4 amber-text" size="3x"/>
                                <h4 className="feature-title font-weight-bold">Work</h4>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol md="6" lg="3" className="mb-4">
                        <MDBCard className="text-center z-depth">
                            <MDBCardBody className="my-4">
                                <MDBIcon icon="camera-retro mb-4 indigo-text" size="3x"/>
                                <h5 className="feature-title font-weight-bold indigo-text"><strong>PHOTOGRAPHY</strong></h5>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" lg="3" className="mb-4">
                        <MDBCard className="text-center z-depth">
                            <MDBCardBody className="my-4">
                                <MDBIcon icon="pencil-alt mb-4 teal-text" size="3x"/>
                                <h5 className="feature-title font-weight-bold teal-text"><strong>DESIGN</strong></h5>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" lg="3" className="mb-4">
                        <MDBCard className="text-center z-depth">
                            <MDBCardBody className="my-4">
                                <MDBIcon icon="desktop mb-4 deep-purple-text" size="3x"/>
                                <h5 className="feature-title font-weight-bold deep-purple-text"><strong>MARKETING</strong></h5>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" lg="3" className="mb-4">
                        <MDBCard className="text-center z-depth">
                            <MDBCardBody className="my-4">
                                <MDBIcon icon="code mb-4 blue-text" size="3x"/>
                                <h5 className="feature-title font-weight-bold blue-text"><strong>DEVELOPMENT</strong></h5>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/content/icons-usage/"/>
      </MDBContainer>
  );
}

export default Icons;