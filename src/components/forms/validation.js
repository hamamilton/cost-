import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardImage,
    MDBBtn
} from 'mdbreact';
import LinkCard from '../LinkCard';

class basic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radio: false,
        }
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
    };

    render() {
        return (
            <section>
                <MDBCard narrow className="mb-5">
                    <MDBCardImage className="view view-cascade gradient-card-header blue-gradient" cascade tag="div">
                        <h2 className="h2-responsive mb-2">Validation</h2>
                    </MDBCardImage>
                    <MDBCardBody cascade >
                        <h4 className="h4-responsive text-center">Error &amp; Success messages </h4>
                        <form
                            className="needs-validation"
                            onSubmit={this.submitHandler}
                            noValidate
                        >
                            <MDBRow center="true">
                                <MDBCol center md="4">
                                    <MDBInput
                                        value={this.state.fname}
                                        name="fname"
                                        icon="envelope"
                                        iconRegular
                                        onChange={this.changeHandler}
                                        type="text"
                                        label="Type your e-mail"
                                    >
                                        <div className="invalid-feedback" style={{ paddingLeft: "2.5rem" }}>
                                            Please provide name
                                        </div>
                                        <div className="valid-feedback" style={{ paddingLeft: "2.5rem" }}>Looks good!</div>
                                    </MDBInput>

                                </MDBCol>
                                <MDBCol md="4">
                                    <MDBInput
                                        value={this.state.lname}
                                        name="lname"
                                        icon="lock"
                                        onChange={this.changeHandler}
                                        type="text"
                                        label="Type your password"
                                        error="bkabka"
                                        required
                                    >
                                        <div className="invalid-feedback" style={{ paddingLeft: "2.5rem" }}>
                                            Please enter a valid password
                                        </div>
                                        <div className="valid-feedback" style={{ paddingLeft: "2.5rem" }}>Looks good!</div>
                                    </MDBInput>
                                </MDBCol>
                                <MDBCol middle md="2"><MDBBtn className="text-center" type="submit">Login</MDBBtn></MDBCol>

                            </MDBRow>
                        </form>

                    </MDBCardBody>

                </MDBCard>

                <LinkCard docs="https://mdbootstrap.com/docs/react/forms/validation/" />
            </section >
        );
    }
}

export default basic;