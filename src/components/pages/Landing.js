import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBFormInline,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBAvatar,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBInput,
  MDBFooter,
} from 'mdbreact';
import "./Landing.css";
import Copyrights from './../Footer';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseID: "",
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <div id="landing">
        <MDBNavbar
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
                  <MDBNavLink to="#work">Home</MDBNavLink>
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

        <section id="home">
          <MDBView>
            <MDBMask
              className="d-flex justify-content-center align-items-center"
              overlay="gradient"
            >
              <MDBContainer className="h-100 d-flex justify-content-center align-items-center">
                <MDBRow className="flex-center pt-5 mt-3">
                  <MDBCol md="6" className="text-center text-md-left mb-5">
                    <div className="white-text">
                      <h1 className="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s" >Sign up right now! </h1>
                      <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                      <h6 className="wow fadeInLeft" data-wow-delay="0.3s" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga
                          nesciunt dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea
                                dolor molestiae, quisquam iste, maiores. Nulla.</h6>
                      <br />
                      <MDBBtn outline color="white" rounded >Learn more</MDBBtn>
                    </div>
                  </MDBCol>

                  <MDBCol md="6" className="col-xl-5 offset-xl-1">
                    <MDBCard>
                      <MDBCardBody>
                        <div className="text-center">
                          <h3 className="white-text"><MDBIcon icon="user" className="white-text" /> Register:</h3>
                          <hr className="hr-light"></hr>
                        </div>

                        <MDBInput label="Your name" icon="user" labelClass="white-text" iconClass="white-text" />
                        <MDBInput label="Your email" icon="envelope" type="email" labelClass="white-text" iconClass="white-text" />
                        <MDBInput label="Your password" icon="lock" type="password" labelClass="white-text" iconClass="white-text" />

                        <div className="text-center mt-4">
                          <MDBBtn color="light-blue" rounded>Sign up</MDBBtn>
                          <hr className="hr-light mb-3 mt-4" />

                          <div className="inline-ul text-center d-flex justify-content-center">
                            <a href="#!"><MDBIcon fab icon="twitter" size="lg" className="white-text p-2 m-2" /></a>
                            <a href="#!"><MDBIcon fab icon="linkedin" size="lg" className="white-text p-2 m-2" /></a>
                            <a href="#!"><MDBIcon fab icon="instagram" size="lg" className="white-text p-2 m-2" /></a>
                          </div>
                        </div>

                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBMask>
          </MDBView>
        </section>
        <MDBContainer>
          <section className="section my-5wow fadeIn" data-wow-delay="0.3s">

            <h1 className="text-center my-5 h1">Why is it so great?</h1>
            <p className="text-center mb-5 w-responsive mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>
            <MDBRow>
              <MDBCol md="4">
                <MDBRow className="mb-2">
                  <MDBCol size="2">
                    <MDBIcon size="2x" className="indigo-text" icon="flag-checkered" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold my-4">International</h5>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-2">
                  <MDBCol size="2">
                    <MDBIcon size="2x" className="blue-text" icon="flask" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold my-4">Experimental</h5>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-2">
                  <MDBCol size="2">
                    <MDBIcon size="2x" className="cyan-text" icon="glass" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold my-4">Relaxing</h5>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                  </MDBCol>
                </MDBRow>

              </MDBCol>
              <MDBCol md="4 mb-2 text-center text-md-left flex-center">
                <img src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png" alt="" className="z-depth-0" />
              </MDBCol>

              <MDBCol md="4">
                <MDBRow className="mb-2">
                  <MDBCol size="2">
                    <MDBIcon size="2x" icon="heart" className="deep-purple-text" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold my-4">Beloved</h5>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-2">
                  <MDBCol size="2">
                    <MDBIcon size="2x" icon="flash" className="purple-text" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold my-4">Rapid</h5>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-2">
                  <MDBCol size="2">
                    <MDBIcon size="2x" icon="magic" className="pink-text" />
                  </MDBCol>
                  <MDBCol size="10">
                    <h5 className="font-weight-bold my-4">Magical</h5>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda.</p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </section>

          <hr className="mb-5" />

          <section className="team-section text-center my-5">
            <h1 className="text-center my-5 h1">Testimonials</h1>
            <p className="text-center mb-5 w-responsive mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

            <MDBRow className="text-center">
              <MDBCol md="4" className="mb-4">
                <div className="testimonial">
                  <MDBAvatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" circle className="z-depth-1" />

                  <h4 className="font-weight-bold mt-4 mb-3">Anna Deynah</h4>
                  <h6 className="mb-3 font-weight-bold grey-text">Web Designer</h6>
                  <p><MDBIcon icon="quote-left" /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                  <div className="orange-text">
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star-half-full" />
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="4" className="mb-4">
                <div className="testimonial">
                  <MDBAvatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" circle className="z-depth-1" />
                  <h4 className="font-weight-bold mt-4 mb-3">John Doe</h4>
                  <h6 className="mb-3 font-weight-bold grey-text">Web Developer</h6>
                  <p><MDBIcon icon="quote-left" /> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
                  <div className="orange-text">
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" />
                  </div>
                </div>
              </MDBCol>

              <MDBCol md="4" className="mb-4">
                <div className="testimonial">
                  <MDBAvatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" circle className="z-depth-1" />
                  <h4 className="font-weight-bold mt-4 mb-3">Maria Kate</h4>
                  <h6 className="mb-3 font-weight-bold grey-text">Photographer</h6>
                  <p><MDBIcon icon="quote-left" /> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                  <div className="orange-text">
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" className="pr-1" />
                    <MDBIcon icon="star" />
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </section>

          <hr className="mb-5" />

          <section className="my-5">
            <h1 className="text-center my-5 h1">Our pricing plans</h1>
            <p className="text-center mb-5 w-responsive mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident
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
                        <MDBIcon icon="home" className="light-blue-text" />
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
                        <MDBIcon icon="group" className="white-text" />
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
                        <MDBIcon icon="chart-bar" className="light-blue-text" />
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

          <hr className="mb-4" />

          <section id="contact">
            <h2 className="text-center my-5 h1">Contact us</h2>
            <p className="text-center mb-5 w-responsive mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam. Quia, minima?</p>
            <MDBRow>
              <MDBCol lg="8">
                <MDBRow>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-name"
                        label="Your name"
                      />
                    </div>
                  </MDBCol>
                  <MDBCol md="6">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-email"
                        label="Your email"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="text"
                        id="form-contact-company"
                        label="Subject"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol md="12">
                    <div className="md-form mb-0">
                      <MDBInput
                        type="textarea"
                        id="form-contact-message"
                        label="Your message"
                      />
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol lg="4">
                <ul className="text-center list-unstyled">
                  <li>
                    <MDBIcon icon="map-marker-alt" size="2x" />
                    <p>
                      New York, 94126 USA
                      </p>
                  </li>
                  <li>
                    <MDBIcon icon="phone" size="2x" />
                    <p>
                      + 01 234 567 89
                      </p>
                  </li>
                  <li>
                    <MDBIcon icon="envelope" size="2x" />
                    <p>
                      contact@example.com
                      </p>
                  </li>
                </ul>
                <MDBBtn rounded color="light-blue" className="float-left mt-2 ml-0">
                  Send
                  </MDBBtn>
              </MDBCol>
            </MDBRow>
          </section>

        </MDBContainer>
        <MDBFooter className="pt-3 mt-5 text-center text-md-left">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="3">
                <h6 className="text-uppercase font-weight-bold">Footer Content</h6>
                <p>Here you can use rows and columns here to organize your footer content.</p>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="2" className="ml-auto">
                <h6 className="text-uppercase font-weight-bold">Links</h6>
                <ul className="list-unstyled">
                  <li><a href="#!">Link 1</a></li>
                  <li><a href="#!">Link 2</a></li>
                  <li><a href="#!">Link 3</a></li>
                  <li><a href="#!">Link 4</a></li>
                </ul>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="2" className="ml-auto">
                <h6 className="text-uppercase font-weight-bold">Links</h6>
                <ul className="list-unstyled">
                  <li><a href="#!">Link 1</a></li>
                  <li><a href="#!">Link 2</a></li>
                  <li><a href="#!">Link 3</a></li>
                  <li><a href="#!">Link 4</a></li>
                </ul>
              </MDBCol>
              <hr className="w-100 clearfix d-md-none" />
              <MDBCol md="2" className="ml-auto">
                <h6 className="text-uppercase font-weight-bold">Links</h6>
                <ul className="list-unstyled">
                  <li><a href="#!">Link 1</a></li>
                  <li><a href="#!">Link 2</a></li>
                  <li><a href="#!">Link 3</a></li>
                  <li><a href="#!">Link 4</a></li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <hr />
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <ul className="list-unstyled d-flex justify-content-center mb-0 pb-0 pt-2 list-inline">
                  <li className="list-inline-item"><MDBIcon fab icon="facebook" size="2x" className="white-text p-2 m-2" /></li>
                  <li className="list-inline-item"><MDBIcon fab icon="twitter" size="2x" className="white-text p-2 m-2" /></li>
                  <li className="list-inline-item"><MDBIcon fab icon="google-plus" size="2x" className="white-text p-2 m-2" /></li>
                  <li className="list-inline-item"><MDBIcon fab icon="linkedin" size="2x" className="white-text p-2 m-2" /></li>
                  <li className="list-inline-item"><MDBIcon fab icon="instagram" size="2x" className="white-text p-2 m-2" /></li>
                  <li className="list-inline-item"><MDBIcon fab icon="pinterest" size="2x" className="white-text p-2 m-2" /></li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Copyrights />
        </MDBFooter>
      </div>
    )
  }
}


export default Landing;