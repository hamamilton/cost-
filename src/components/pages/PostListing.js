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
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBFooter,
} from 'mdbreact';
import "./PostListing.css";

class PostListing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapseID: "",
      photoIndex: 0,
      isOpen: false
    };
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    render() {
      return (
        <div id="posts">
            <MDBNavbar
                  dark
                  expand="lg"
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
                    <MDBNavLink to="#!">Team</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Products</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Gallery</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#!">Contact</MDBNavLink>
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
                    overlay="black-light"
                  >
                    <MDBContainer className="h-100 d-flex justify-content-center align-items-center">
                      <MDBRow>
                        <MDBCol md="12" className="mt-5 mx-auto text-center">
                          <div className="text-center">
                            <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-3"><strong>welcome to my blog</strong></h1>
                            <hr className="hr-light mt-4 wow fadeInDown"/>
                            <h5 className="text-uppercase mb-5 white-text wow fadeInDown"><strong>Photography &amp; design</strong></h5>
                            <a href="#!" className="btn btn-outline-white wow fadeInDown waves-effect waves-light">portfolio</a>
                            <a href="#!" className="btn btn-outline-white wow fadeInDown waves-effect waves-light">About me</a>
                          </div>
                        </MDBCol>
                      </MDBRow>
                    </MDBContainer>
                  </MDBMask>
                </MDBView>
              </section>
              <MDBContainer>
                <section id="recent" className=" my-5 text-center text-lg-left">
                  <h2 className="text-center my-5 h1">Recent posts</h2>
                  <p className="text-center mb-5 w-responsive mx-auto">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <MDBRow>
                      <MDBCol lg="4" className="mb-4">
                          <MDBView waves hover className="z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Others/img (38).jpg" className="img-fluid" alt="First sample"/>
                              <a href="#!">
                                  <MDBMask overlay="white-slight"/>
                              </a>
                          </MDBView>
                      </MDBCol>
                      <div className="col-lg-7 mb-4">
                          <a href="#!" className="teal-text"><h6 className="pb-1"><MDBIcon icon="heart"/><strong> Lifestyle </strong></h6></a>
                          <h4 className="mb-4"><strong>This is title of the news</strong></h4>
                          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor.</p>
                          <p>by <a href="#!"><strong>Jessica Clark</strong></a>, 26/08/2016</p>
                          <MDBBtn color="primary">Read more</MDBBtn>
                      </div>
                  </MDBRow>

                  <hr className="mb-5"/>

                  <MDBRow className="mt-3">
                      <MDBCol lg="4" className="mb-4">
                          <MDBView waves hover className="z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" className="img-fluid" alt="Second sample"/>
                              <a href="#!">
                                  <MDBMask overlay="white-slight"/>
                              </a>
                          </MDBView>
                      </MDBCol>
                      <div className="col-lg-7 mb-4">
                          <a href="#!" className="cyan-text"><h6 className="pb-1"><MDBIcon icon="plane"/><strong> Travels</strong></h6></a>
                          <h4 className="mb-4"><strong>This is title of the news</strong></h4>
                          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</p>
                          <p>by <a href="#!"><strong>Jessica Clark</strong></a>, 24/08/2016</p>
                          <MDBBtn color="primary">Read more</MDBBtn>
                      </div>
                  </MDBRow>

                  <hr className="mb-5"/>

                  <MDBRow>
                      <MDBCol lg="4" className="mb-4">
                          <MDBView waves hover className="z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Others/img (35).jpg" className="img-fluid" alt="Third sample"/>
                              <a href="#!">
                                  <MDBMask overlay="white-slight"/>
                              </a>
                          </MDBView>
                      </MDBCol>
                      <div className="col-lg-7 mb-4">
                          <a href="#!" className="brown-text"><h6 className="pb-1"><MDBIcon icon="camera"/><strong> Photography</strong></h6></a>
                          <h4 className="mb-4"><strong>This is title of the news</strong></h4>
                          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                          <p>by <a href="#!"><strong>Jessica Clark</strong></a>, 21/08/2016</p>
                          <MDBBtn color="primary">Read more</MDBBtn>
                      </div>
                  </MDBRow>

                  <hr className="mb-5"/>

                  <MDBRow>
                      <MDBCol lg="4" className="mb-4">
                          <MDBView waves hover className="z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Others/img (39).jpg" className="img-fluid" alt="Third sample"/>
                              <a href="#!">
                                  <MDBMask overlay="white-slight"/>
                              </a>
                          </MDBView>
                      </MDBCol>
                      <div className="col-lg-7 mb-4">
                          <a href="#!" className="red-text"><h6 className="pb-1"><MDBIcon icon="heart"/><strong> Lifestyle</strong></h6></a>
                          <h4 className="mb-4"><strong>This is title of the news</strong></h4>
                          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                          <p>by <a href="#!"><strong>Jessica Clark</strong></a>, 21/08/2016</p>
                          <MDBBtn color="primary">Read more</MDBBtn>
                      </div>
                  </MDBRow>

                  <MDBPagination className="pg-dark flex-center mt-5">
                    <MDBPageItem>
                        <MDBPageNav aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem active>
                      <MDBPageNav>
                        1 <span className="sr-only">(current)</span>
                      </MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav>2</MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav>3</MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav>4</MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav>5</MDBPageNav>
                    </MDBPageItem>
                    <MDBPageItem>
                        <MDBPageNav aria-label="Previous">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </MDBPageNav>
                    </MDBPageItem>
                  </MDBPagination>
                </section>
                <hr className="mb-5"/>
                <section id="older" className="section extra-margins text-center">

                  <h2 className="text-center my-5 h1">Older posts</h2>
                  <p className="text-center mb-5 w-responsive mx-auto">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <MDBRow>
                      <MDBCol lg="4" md="12" className="mb-4">
                          <MDBView waves hover className="z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg" className="img-fluid" alt="First sample"/>
                              <a href="#!">
                                  <MDBMask overlay="white-slight"/>
                              </a>
                          </MDBView>
                          <a href="#!" className="pink-text"><h6 className="mb-3 mt-3"><i className="fa fa-map "></i><strong> Environment</strong></h6></a>
                          <h4 className="font-weight-bold mb-3">This is title of the news</h4>
                          <p>by <a href="#!"><strong>Billy Forester</strong></a>, 15/07/2016</p>
                          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas.</p>
                          <MDBBtn color="primary">Read more</MDBBtn>
                      </MDBCol>

                      <MDBCol lg="4" md="6" className="mb-4">
                          <MDBView waves hover className="z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" className="img-fluid" alt="Second sample"/>
                              <a href="#!">
                                  <MDBMask overlay="white-slight"/>
                              </a>
                          </MDBView>
                          <a href="#!" className="indigo-text"><h6 className="mb-3 mt-3"><i className="fa fa-plane"></i><strong> Travels</strong></h6></a>
                          <h4 className="font-weight-bold mb-3">This is title of the news</h4>
                          <p>by <a href="#!"><strong>Billy Forester</strong></a>, 12/07/2016</p>
                          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                          <MDBBtn color="primary">Read more</MDBBtn>
                      </MDBCol>

                      <MDBCol lg="4" md="6" className="mb-4">
                          <MDBView waves hover className="z-depth-1">
                              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg" className="img-fluid" alt="Thrid sample"/>
                              <a href="#!">
                                  <MDBMask overlay="white-slight"/>
                              </a>
                          </MDBView>
                          <a href="#!" className="cyan-text"><h6 className="mb-3 mt-3"><i className="fa fa-leaf "></i><strong> Animals</strong></h6></a>
                          <h4 className="font-weight-bold mb-3">This is title of the news</h4>
                          <p>by <a href="#!"><strong>Billy Forester</strong></a>, 10/07/2016</p>
                          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                          <MDBBtn color="primary">Read more</MDBBtn>
                      </MDBCol>

                  </MDBRow>
                </section>

            </MDBContainer>

            <MDBFooter className="pt-4 mt-4 text-center text-md-left">
              <MDBContainer>
                  <MDBRow className="mt-3">

                      <MDBCol size="12" md="3" lg="4" xl="3" className="offset-xl-1 col-12 mb-4">
                          <h6 className="text-uppercase font-weight-bold mb-4">Company name</h6>
                          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit.</p>
                      </MDBCol>

                      <hr className="w-100 clearfix d-md-none"/>

                      <MDBCol size="12" md="2" className="offset-xl-1 mb-4">
                          <h6 className="text-uppercase font-weight-bold mb-4">Products</h6>
                          <p><a href="#!">MDBootstrap</a></p>
                          <p><a href="#!">MDWordPress</a></p>
                          <p><a href="#!">BrandFlow</a></p>
                          <p><a href="#!">Bootstrap React</a></p>
                      </MDBCol>

                      <hr className="w-100 clearfix d-md-none"/>

                      <MDBCol size="12" md="3" lg="2" className="mb-4">
                          <h6 className="text-uppercase font-weight-bold mb-4">Useful links</h6>
                          <p><a href="#!">Your Account</a></p>
                          <p><a href="#!">Become an Affiliate</a></p>
                          <p><a href="#!">Shipping Rates</a></p>
                          <p><a href="#!">Help</a></p>
                      </MDBCol>

                      <hr className="w-100 clearfix d-md-none"/>

                      <MDBCol size="12" md="4" lg="3">
                          <h6 className="text-uppercase font-weight-bold mb-4">Contact</h6>
                          <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                          <p><i className="fa fa-envelope mr-3"></i> info@example.com</p>
                          <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                          <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                      </MDBCol>

                  </MDBRow >
                  <hr/>
                  <MDBRow className="mt-3 d-flex align-items-center">
                      <MDBCol size="12" md="5">
                          <p className="text-left grey-text">© 2018 Copyright: <a href="https://mdbootstrap.com/bootstrap-tutorial/"><strong> MDBootstrap.com</strong></a></p>
                      </MDBCol>

                      <div className="col-md-6 col-12">
                          <div className="social-section">
                              <ul className="list-unstyled list-inline d-flex justify-content-end">
                                  <li className="list-inline-item"><MDBBtn tag="a" floating color="" className="rgba-white-slight"><MDBIcon fab  icon="facebook"/></MDBBtn></li>
                                  <li className="list-inline-item"><MDBBtn tag="a" floating color="" className="rgba-white-slight"><MDBIcon fab  icon="twitter"/></MDBBtn></li>
                                  <li className="list-inline-item"><MDBBtn tag="a" floating color="" className="rgba-white-slight"><MDBIcon fab  icon="google-plus"/></MDBBtn></li>
                                  <li className="list-inline-item"><MDBBtn tag="a" floating color="" className="rgba-white-slight"><MDBIcon  fab icon="linkedin"/></MDBBtn></li>
                              </ul>
                          </div>
                      </div>
                  </MDBRow>
              </MDBContainer>
          </MDBFooter>
        </div>
    )
  }
}

export default PostListing