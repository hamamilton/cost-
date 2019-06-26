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
                <h4 className="mt-lg-5 mb-5 font-bold"><strong>Hover effects</strong></h4>
                <MDBRow>
                    <MDBCol md="4">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask className="flex-center" overlay="red-strong">
                                <p className="white-text">Strong overlay</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask className="flex-center" overlay="red-light">
                                <p className="white-text">Light overlay</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask className="flex-center" overlay="red-slight">
                                <p className="white-text">Super light overlay</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                </MDBRow>

                <MDBRow className="mt-4">

                    <MDBCol md="6">
                        <MDBView hover zoom>
                            <img
                                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask className="flex-center">
                                <p className="white-text">Zoom effect</p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>

                    <MDBCol md="6">
                        <h5 className="text-center">Shadow effect</h5>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/4.jpg"
                            className="img-fluid rounded-circle hoverable"
                            alt=""
                        />
                    </MDBCol>

                </MDBRow>
            </section>

            <hr className="my-5" />

            <section>
                <h4 className="font-bold"><strong>Colors and intensity</strong></h4>
                <p>Use one of the classes below to change the color and intensity of the overlay.</p>

                <hr className="my3" />

                <h5 className="dark-grey-text font-bold mb-4 pb-2">Light overlay</h5>
                <MDBRow>
                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="blue-light" />
                        </MDBView>
                        <p className="text-center"><code>blue-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="red-light" />
                        </MDBView>
                        <p className="text-center"><code>red-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="pink-light" />
                        </MDBView>
                        <p className="text-center"><code>pink-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="purple-light" />
                        </MDBView>
                        <p className="text-center"><code>purple-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="indigo-light" />
                        </MDBView>
                        <p className="text-center"><code>indigo-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="cyan-light" />
                        </MDBView>
                        <p className="text-center"><code>cyan-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="teal-light" />
                        </MDBView>
                        <p className="text-center"><code>teal-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="green-light" />
                        </MDBView>
                        <p className="text-center"><code>green-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="lime-light" />
                        </MDBView>
                        <p className="text-center"><code>lime-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="yellow-light" />
                        </MDBView>
                        <p className="text-center"><code>yellow-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="orange-light" />
                        </MDBView>
                        <p className="text-center"><code>orange-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="brown-light" />
                        </MDBView>
                        <p className="text-center"><code>brown-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="grey-light" />
                        </MDBView>
                        <p className="text-center"><code>grey-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="blue-grey-light" />
                        </MDBView>
                        <p className="text-center"><code>blue-grey-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <p className="text-center"><code>black-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="stylish-light" />
                        </MDBView>
                        <p className="text-center"><code>stylish-light</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="white-light" />
                        </MDBView>
                        <p className="text-center"><code>white-light</code></p>
                    </MDBCol>

                </MDBRow>

                <hr className="my3" />
                <h5 className="dark-grey-text font-bold mb-4 pb-2">Strong overlay</h5>

                <MDBRow>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="blue-strong" />
                        </MDBView>
                        <p className="text-center"><code>blue-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="red-strong" />
                        </MDBView>
                        <p className="text-center"><code>red-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="pink-strong" />
                        </MDBView>
                        <p className="text-center"><code>pink-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="purple-strong" />
                        </MDBView>
                        <p className="text-center"><code>purple-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="indigo-strong" />
                        </MDBView>
                        <p className="text-center"><code>indigo-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="cyan-strong" />
                        </MDBView>
                        <p className="text-center"><code>cyan-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="teal-strong" />
                        </MDBView>
                        <p className="text-center"><code>teal-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="green-strong" />
                        </MDBView>
                        <p className="text-center"><code>green-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="lime-strong" />
                        </MDBView>
                        <p className="text-center"><code>lime-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="yellow-strong" />
                        </MDBView>
                        <p className="text-center"><code>yellow-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="orange-strong" />
                        </MDBView>
                        <p className="text-center"><code>orange-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="brown-strong" />
                        </MDBView>
                        <p className="text-center"><code>brown-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="grey-strong" />
                        </MDBView>
                        <p className="text-center"><code>grey-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="blue-grey-strong" />
                        </MDBView>
                        <p className="text-center"><code>blue-grey-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <p className="text-center"><code>black-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="stylish-strong" />
                        </MDBView>
                        <p className="text-center"><code>stylish-strong</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="white-strong" />
                        </MDBView>
                        <p className="text-center"><code>white-strong</code></p>
                    </MDBCol>

                </MDBRow>

                <hr className="my3" />
                <h5 className="dark-grey-text font-bold mb-4 pb-2">Super Light overlay</h5>

                <MDBRow>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="blue-slight" />
                        </MDBView>
                        <p className="text-center"><code>blue-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="red-slight" />
                        </MDBView>
                        <p className="text-center"><code>red-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="pink-slight" />
                        </MDBView>
                        <p className="text-center"><code>pink-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="purple-slight" />
                        </MDBView>
                        <p className="text-center"><code>purple-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="indigo-slight" />
                        </MDBView>
                        <p className="text-center"><code>indigo-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="cyan-slight" />
                        </MDBView>
                        <p className="text-center"><code>cyan-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="teal-slight" />
                        </MDBView>
                        <p className="text-center"><code>teal-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="green-slight" />
                        </MDBView>
                        <p className="text-center"><code>green-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="lime-slight" />
                        </MDBView>
                        <p className="text-center"><code>lime-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="yellow-slight" />
                        </MDBView>
                        <p className="text-center"><code>yellow-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="orange-slight" />
                        </MDBView>
                        <p className="text-center"><code>orange-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="brown-slight" />
                        </MDBView>
                        <p className="text-center"><code>brown-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="grey-slight" />
                        </MDBView>
                        <p className="text-center"><code>grey-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="blue-grey-slight" />
                        </MDBView>
                        <p className="text-center"><code>blue-grey-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <p className="text-center"><code>black-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="stylish-slight" />
                        </MDBView>
                        <p className="text-center"><code>stylish-slight</code></p>
                    </MDBCol>

                    <MDBCol md="2">
                        <MDBView hover>
                            <img
                                src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
                                className="img-fluid"
                                alt=""
                            />
                            <MDBMask overlay="white-slight" />
                        </MDBView>
                        <p className="text-center"><code>white-slight</code></p>
                    </MDBCol>

                </MDBRow>
            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/css/hover-effects/" />
        </MDBContainer>
    );
}

export default Masks;