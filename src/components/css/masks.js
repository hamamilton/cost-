import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBView,
    MDBMask
} from 'mdbreact';
import LinkCard from '../LinkCard';

import './shadows.css';

const Masks = () => {
    return (
        <MDBContainer fluid id="Masks">
            <section>
                <h4 className="mt-lg-5 mb-5 font-bold"><strong>Overlays</strong></h4>
                <MDBRow>
                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="teal-slight" className="flex-center">
                                <p className="white-text">super light overlay</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="teal-light" className="flex-center">
                                <p className="white-text">light overlay</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="teal-strong" className="flex-center">
                                <p className="white-text">strong overlay</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </section>

            <hr />

            <section>
                <h4 className="mb-5 font-bold"><strong>Patterns</strong></h4>
                <MDBRow>
                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={1} className="flex-center">
                                <p className="white-text">Pattern 1</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={2} className="flex-center">
                                <p className="white-text">Pattern 2</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>


                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={3} className="flex-center">
                                <p className="white-text">Pattern 3</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={4} className="flex-center">
                                <p className="white-text">Pattern 4</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={5} className="flex-center">
                                <p className="white-text">Pattern 5</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>


                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={6} className="flex-center">
                                <p className="white-text">Pattern 6</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={7} className="flex-center">
                                <p className="white-text">Pattern 7</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={8} className="flex-center">
                                <p className="white-text">Pattern 8</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <MDBView>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask pattern={9} className="flex-center">
                                <p className="white-text">Pattern 9</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>

            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/css/masks/" />
        </MDBContainer>
    );
}

export default Masks;