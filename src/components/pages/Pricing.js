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
  MDBIcon,
  MDBView,
  MDBBtn
} from 'mdbreact';
import "./Pricing.css";

class Pricing extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div id="pricing">
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
            overlay="stylish-strong"
          >
            <MDBContainer>
              <section>
                <h1 className="text-center my-5 h1 white-text">Our pricing plans</h1>
                <p className="text-center mb-5 w-responsive mx-auto white-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident
                voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus
                veniam.
                </p>
                <MDBRow>
                  <MDBCol lg="4" md="12" className="mb-4">
                    <MDBCard className="hoverable">
                      <MDBCardBody className="text-center">
                        <h5>Basic plan</h5>
                        <div className="d-flex justify-content-center">
                          <div className="card-circle d-flex justify-content-center align-items-center">
                            <MDBIcon icon="home" className="light-blue-text"/>
                          </div>
                        </div>
                        <h2 className="font-weight-bold my-3">$59</h2>
                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa pariatur id nobis accusamus deleniti cumque hic laborum.</p>
                        <MDBBtn color="light-blue" rounded>Buy Now</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol lg="4" md="12" className="mb-4">
                    <MDBCard className="hoverable purple-gradient white-text">
                      <MDBCardBody className="text-center">
                        <h5>Premium plan</h5>
                        <div className="d-flex justify-content-center">
                          <div className="card-circle d-flex justify-content-center align-items-center">
                            <MDBIcon icon="users" className="white-text"/>
                          </div>
                        </div>
                        <h2 className="font-weight-bold my-3">$79</h2>
                        <p className="white-text">Esse corporis saepe laudantium velit adipisci cumque iste ratione facere non distinctio cupiditate sequi atque.</p>
                        <MDBBtn outline color="white" rounded>Buy Now</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol lg="4" md="12" className="mb-4">
                    <MDBCard className="hoverable">
                      <MDBCardBody className="text-center">
                        <h5>Advanced plan</h5>
                        <div className="d-flex justify-content-center">
                          <div className="card-circle d-flex justify-content-center align-items-center">
                            <MDBIcon icon="chart-bar" className="light-blue-text"/>
                          </div>
                        </div>
                        <h2 className="font-weight-bold my-3">$99</h2>
                        <p className="grey-text">At ab ea a molestiae corrupti numquam quo beatae minima ratione magni accusantium repellat eveniet quia vitae.</p>
                        <MDBBtn color="light-blue" rounded>Buy Now</MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                </MDBRow>
              </section>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    )
  }
}

export default Pricing;