import React from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBNavbarToggler,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBBadge,
  MDBJumbotron,
  MDBAvatar,
  MDBFooter
} from 'mdbreact';

import Copyrights from './../Footer';

import "./SinglePost.css";

class SinglePost extends React.Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
        <div id="single">
            <MDBNavbar
                    color="navbar-dark"
                    dark
                    expand="lg"
                    fixed="top"
                    scrolling
                >
                <MDBContainer>
                    <MDBNavbarBrand>
                        <strong className="white-text">Navbar</strong>
                    </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse")}/>
                    <MDBCollapse id="navbarCollapse"
                                isOpen={this.state.collapseID}
                                navbar
                    >
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Features</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Pricing</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Options</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink to="#!"><MDBIcon fab icon="facebook"/></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!"><MDBIcon fab icon="twitter"/></MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!"><MDBIcon fab icon="instagram"/></MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <MDBContainer>
                <section id="post" className="section section-blog-fw pb-3">

                    <MDBRow>
                        <MDBCol md="12">
                            <MDBCard reverse>
                                <MDBView cascade>
                                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" alt="Wide sample post"/>
                                </MDBView>

                                <MDBCardBody cascade className="text-center">
                                    <h2><a href="#!"><strong>This is title of the news</strong></a></h2>
                                    <p>Written by <a href="#!">Abby Madison</a>, 26/08/2016</p>

                                    <div className="social-counters">
                                        <MDBBtn tag="a" className="btn-fb">
                                            <MDBIcon fab icon="facebook" className="left"/>
                                            <span className="hidden-md-down">Facebook</span>
                                        </MDBBtn>
                                        <span className="counter ">46</span>

                                        <MDBBtn tag="a" className="btn-tw">
                                            <MDBIcon fab icon="twitter" className="left"/>
                                            <span className="hidden-md-down">Twitter</span>
                                        </MDBBtn>
                                        <span className="counter ">22</span>

                                        <MDBBtn tag="a" className="btn-dribbble">
                                            <MDBIcon fab icon="dribbble" className="left"/>
                                            <span className="hidden-md-down">Dribbble</span>
                                        </MDBBtn>
                                        <span className="counter ">31</span>

                                        <MDBBtn tag="a" className="btn-blue-grey">
                                            <MDBIcon icon="comments" className="left"/>
                                            <span className="hidden-md-down">Comments</span>
                                        </MDBBtn>
                                        <span className="counter ">18</span>
                                    </div>

                                </MDBCardBody>
                            </MDBCard>

                            <div className="excerpt mt-5">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                    deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                                    non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
                                    et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                                </p>

                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
                                    autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates
                                    repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                                    ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.</p>

                                <blockquote className="blockquote mt-4 mb-4">
                                    <p className="mb-0"><em>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.</em></p>
                                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                </blockquote>


                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                    totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                    vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
                                </p>

                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                    voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                                    laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                                    qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>


                                <div className="mt-4 d-flex justify-content-end">
                                    <MDBBadge color="pink" className="mr-1">Travel</MDBBadge>
                                    <MDBBadge color="primary" className="mr-1">Adventure</MDBBadge>
                                    <MDBBadge color="grey" className="mr-1">Photography</MDBBadge>
                                    <MDBBadge color="info">Education</MDBBadge>
                                </div>

                            </div>
                        </MDBCol>
                    </MDBRow>
                </section>

                <hr className="my-5"/>

                <section id="recent">
                    <h3 className="text-center my-5 text-center h3 pt-3">Recent posts</h3>
                    <MDBRow>
                        <MDBCol lg="4" md="12" className="mb-4">
                            <MDBCard>
                                <MDBView waves>
                                <a href="#!">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%28147%29.jpg" className="card-img-top" alt="Too much food and free time"/>
                                </a>
                                </MDBView>
                                <MDBCardBody>
                                    <a  href="#!" className="activator mr-3"><MDBIcon icon="share-alt"/></a>
                                    <h4 className="card-title">Card title</h4>
                                    <hr />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a  href="#!" className="link-text"><h5>Read more <MDBIcon icon="chevron-right"/></h5></a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-4">
                            <MDBCard>
                                <MDBView waves>
                                <a href="#!">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%2850%29.jpg" className="card-img-top" alt="Why not stand on a chair, then?"/>
                                </a>
                                </MDBView>
                                <div className="card-body">
                                    <a  href="#!" className="activator mr-3"><MDBIcon icon="share-alt"/></a>
                                    <h4 className="card-title">Card title</h4>
                                    <hr />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a  href="#!" className="link-text"><h5>Read more <MDBIcon icon="chevron-right"/></h5></a>
                                </div>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="mb-4">
                            <MDBCard>
                                <MDBView waves>
                                <a href="#!">
                                    <img src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20%2897%29.jpg" className="card-img-top" alt="Lovely place without you"/>
                                </a>
                                </MDBView>
                                <div className="card-body">
                                    <a  href="#!" className="activator mr-3"><MDBIcon icon="share-alt"/></a>
                                    <h4 className="card-title">Card title</h4>
                                    <hr />
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a  href="#!" className="link-text"><h5>Read more <MDBIcon icon="chevron-right"/></h5></a>
                                </div>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </section>

                <section id="author">

                    <MDBJumbotron className="p-5 text-center text-md-left author-box">
                        <h4 className="h3-responsive text-center font-weight-bold dark-grey-text">About author</h4>
                        <hr/>
                        <MDBRow>
                            <MDBCol size="12" md="2" className="mb-md-0 mb-4">
                                <img src="http://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="img-fluid rounded-circle z-depth-2" alt="An avatar"/>
                            </MDBCol>
                            <MDBCol size="12" md="10">
                                <h5 className="font-weight-bold dark-grey-text mb-3">
                                    <strong>John Doe</strong>
                                </h5>
                                <div className="personal-sm pb-3">
                                <a href="#!"><MDBIcon fab icon="facebook" className="fb-ic pr-2 mr-2"/></a>
                                <a href="#!"><MDBIcon fab icon="twitter" className="tw-ic pr-2 mr-2"/></a>
                                <a href="#!"><MDBIcon fab icon="google-plus" className="gplus-ic pr-2 mr-2"/></a>
                                <a href="#!"><MDBIcon fab icon="linkedin" className="li-ic pr-2 mr-2"/></a>
                                </div>
                                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint esse nulla quia quam veniam commodi
                                    dicta, iusto inventore. Voluptatum pariatur eveniet ea, officiis vitae praesentium beatae
                                    quas libero, esse facere.
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBJumbotron>
                </section>
                <section className="mb-4 pt-5" id="comments">

                    <div className="text-center text-md-left mb-5">
                        <div className="text-center mb-4">
                            <h3 className="font-weight-bold pt-3 mb-5">Comments <MDBBadge color="pink">3</MDBBadge></h3>
                        </div>
                        <MDBRow className="mb-4">
                            <MDBCol sm="2" col="12" className="mb-md-0 mb-3">
                                <MDBAvatar src="https://mdbootstrap.com/img/Photos/Avatars/img (9).jpg" circle className="z-depth-1-half" tag="img"/>
                            </MDBCol>

                            <MDBCol sm="10" size="12">
                                <a href="#!">
                                    <h4 className="font-weight-bold">Tom Smith</h4>
                                </a>
                                <div className="mt-2">
                                    <ul className="list-unstyled">
                                        <li className="comment-date"><MDBIcon icon="clock"/> 05/10/2015</li>
                                    </ul>
                                </div>
                                <p className="grey-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                            </MDBCol>
                        </MDBRow>


                        <MDBRow className="mb-4">
                            <MDBCol sm="2" col="12" className="mb-md-0 mb-3">
                                <MDBAvatar src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" circle className="z-depth-1-half" tag="img"/>
                            </MDBCol>

                            <MDBCol sm="10" size="12">
                                <a href="#!">
                                    <h4 className="font-weight-bold">Marta Tev</h4>
                                </a>
                                <div className="mt-2">
                                    <ul className="list-unstyled">
                                        <li className="comment-date"><MDBIcon icon="clock"/> 08/10/2015</li>
                                    </ul>
                                </div>
                                <p className="grey-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className="mb-4">
                            <MDBCol sm="2" col="12" className="mb-md-0 mb-3">
                                <MDBAvatar src="https://mdbootstrap.com/img/Photos/Avatars/img (10).jpg" circle className="z-depth-1-half" tag="img"/>
                            </MDBCol>

                            <MDBCol sm="10" size="12">
                                <a href="#!">
                                    <h4 className="font-weight-bold">Anna Maria</h4>
                                </a>
                                <div className="mt-2">
                                    <ul className="list-unstyled">
                                        <li className="comment-date"><MDBIcon icon="clock"/> 17/10/2015</li>
                                    </ul>
                                </div>
                                <p className="grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                                deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                                non provident, similique sunt in culpa qui officia.</p>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </section>

                <section className="pb-5 mt-5">
                    <div className="reply-form">
                        <h3 className="text-center my-5 h3 pt-3">Leave a reply </h3>
                        <p className="text-center">(Logged In User)</p>
                        <MDBRow className="text-center text-md-left">
                            <MDBCol sm="2" size="12" className="mb-md-0 mt-4">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg" alt="Sample avatar" className="img-fluid avatar rounded-circle z-depth-2"/>
                            </MDBCol>
                            <MDBCol size="12" sm="10">
                                <MDBInput
                                    type="textarea"
                                    id="form-contact-message"
                                    label="Your message"
                                    rows="3"
                                    />
                            </MDBCol>

                            <MDBCol md="12" className="text-center mt-4">
                                <MDBBtn color="pink" rounded>Submit</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </section>

                </MDBContainer>
                <MDBFooter className="pt-0">
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md="12">
                                <div className="text-center d-flex justify-content-center my-4">
                                    <a href="#!"><MDBIcon fab icon="facebook" size="2x" className="p-2 m-2 fa-lg text-white mr-md-4"/></a>
                                    <a href="#!"><MDBIcon fab icon="twitter" size="2x" className="p-2 m-2 fa-lg text-white mr-md-4"/></a>
                                    <a href="#!"><MDBIcon fab icon="google-plus" size="2x" className="p-2 m-2 fa-lg text-white mr-md-4"/></a>
                                    <a href="#!"><MDBIcon fab icon="linkedin" size="2x" className="p-2 m-2 fa-lg text-white mr-md-4"/></a>
                                    <a href="#!"><MDBIcon fab icon="instagram" size="2x" className="p-2 m-2 fa-lg text-white mr-md-4"/></a>
                                    <a href="#!"><MDBIcon fab icon="pinterest" size="2x" className="p-2 m-2 fa-lg text-white mr-md-4"/></a>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <Copyrights/>
                </MDBFooter>
            </div>
    )
  }
}

export default SinglePost;