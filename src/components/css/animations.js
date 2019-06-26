import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBAnimation
} from 'mdbreact';
import LinkCard from '../LinkCard';

const animations = () => {
    return (
        <MDBContainer fluid id="animations">
            <section>
                <MDBRow className="mb-4">
                    <MDBCol md="4">
                        <MDBAnimation type="bounceInUp">
                            <img
                                alt="A view on mountains."
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg"
                            />
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBAnimation type="tada">
                            <img
                                alt="Cottage on a lake surrounded by mountains."
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg"
                            />
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBAnimation type="fadeInLeft">
                            <img
                                alt="A boat floating on an ocean"
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg"
                            />
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                    <MDBCol md="4">
                        <MDBAnimation type="fadeInRight">
                            <img
                                alt="View on mountains from mountain top."
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                            />
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBAnimation type="fadeInRight">
                            <img
                                alt="Rocky shore in the morning."
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg"
                            />
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBAnimation
                            type="fadeInUp"
                            onAnimationEnd={() =>
                                console.log("The last picture has been revealed")
                            }
                        >
                            <img
                                alt="Rocky shore in the morning."
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                            />
                        </MDBAnimation>
                    </MDBCol>
                </MDBRow>
            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/css/animations/" />
        </MDBContainer>
    );
}

export default animations;