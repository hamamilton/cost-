import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBFormInline,
  MDBCollapse,
  MDBContainer,
  MDBNavbarToggler,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBInput,
  MDBIcon,
  MDBView,
  MDBBtn
} from 'mdbreact';
import "./Register.css";

class Register extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div id="register">
        <MDBNavbar
          color="deep-purple darken-4"
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <strong className="white-text">MDB</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("navbarCollapse")}
            />
            <MDBCollapse
              id="navbarCollapse"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Profile</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className="md-form my-0">
                      <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <MDBView>
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            overlay="gradient"
          >
            <MDBContainer className="h-100 d-flex justify-content-center align-items-center">
              <MDBRow>
                <MDBCol md="12" className="mt-5 mx-auto">
                  <MDBCard>
                    <MDBCardBody>
                      <h2 className="font-weight-bold my-4 text-center mb-5 mt-4 font-weight-bold">
                        <strong>REGISTER</strong>
                      </h2>
                      <hr />
                      <MDBRow className="mt-5">
                        <MDBCol md="6" className="ml-lg-5 ml-md-3">
                          <MDBRow className="pb-4">
                            <MDBCol size="2" lg="1">
                              <MDBIcon icon="university" size="lg" className="indigo-text" />
                            </MDBCol>
                            <MDBCol col="10">
                              <h4 className="font-weight-bold mb-4">
                                <strong>Safety</strong>
                              </h4>
                              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam
                            minima assumenda deleniti hic.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="pb-4">
                            <MDBCol size="2" lg="1">
                              <MDBIcon icon="desktop" className="deep-purple-text fa-lg" />
                            </MDBCol>
                            <MDBCol col="10">
                              <h4 className="font-weight-bold mb-4">
                                <strong>Technology</strong>
                              </h4>
                              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow className="pb-4">
                            <MDBCol size="2" lg="1">
                              <MDBIcon icon="money-bill-alt" className="purple-text fa-lg" />
                            </MDBCol>
                            <MDBCol col="10">
                              <h4 className="font-weight-bold mb-4">
                                <strong>Safety</strong>
                              </h4>
                              <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam
                            minima assumenda deleniti hic.</p>
                            </MDBCol>
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="5">
                          <MDBRow className="pb-4 d-flex justify-content-center mb-4">
                            <h4 className="mt-3 mr-4">
                              <strong>Login with</strong>
                            </h4>
                            <div className="inline-ul text-center d-flex justify-content-center">
                              <a href="!#">
                                <MDBIcon fab icon="twitter" size="lg" className="p-2 m-2 indigo-text tw-ic" />
                              </a>
                              <a href="!#">
                                <MDBIcon fab size="lg" icon="linkedin" className="p-2 m-2 fa-lg li-ic indigo-text" />
                              </a>
                              <a href="!#">
                                <MDBIcon fab size="lg" icon="instagram" className="p-2 m-2 fa-lg ins-ic indigo-text" />
                              </a>
                            </div>
                            <h4 className="mt-3 ml-4">
                              <strong>or:</strong>
                            </h4>
                          </MDBRow>
                          <MDBInput type="text" label="Your name" icon="user" />
                          <MDBInput type="email" label="Your email" icon="envelope" />
                          <MDBInput type="password" label="Your password" icon="lock" />
                          <div className="text-center">
                            <MDBBtn color="indigo" rounded>Log in</MDBBtn>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    )
  }
}

export default Register;