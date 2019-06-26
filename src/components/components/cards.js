import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBCardImage,
  MDBBtn,
  MDBAvatar,
  MDBCardUp,
  MDBView,
  MDBMask
} from 'mdbreact';
import LinkCard from '../LinkCard';

const Cards = () => {
  return (
      <MDBContainer fluid id="cards">
        <section>
            <h2 className="font-weight-bold mt-lg-5 mb-5 pb-4"><strong>Cascading cards</strong></h2>
                <MDBRow className="pb-4">
                    <MDBCol md="4" className="mb-4">
                        <h4 className="mb-4 dark-grey-text font-weight-bold"><strong>Wider</strong></h4>

                        <section>
                          <MDBCard wide>
                            <MDBView waves cascade hover>
                              <img src="https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg" className="img-fluid" alt="Card cap"/>
                              <MDBMask overlay="white-slight" tag="a"/>
                            </MDBView>
                            <MDBCardBody className="text-center" cascade>
                              <MDBCardTitle tag="h4"><strong>Alice Mayer</strong></MDBCardTitle>
                              <h5 className="indigo-text"><strong>Photographer</strong></h5>
                              <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</MDBCardText>
                                <a className="fa-lg li-ic p-2 m-2" href="#!"><MDBIcon fab icon="linkedin"/></a>
                                <a className="fa-lg tw-ic p-2 m-2" href="#!"><MDBIcon fab icon="twitter"/></a>
                                <a className="fa-lg fb-ic p-2 m-2" href="#!"><MDBIcon fab icon="facebook"/></a>
                            </MDBCardBody>
                          </MDBCard>
                        </section>

                    </MDBCol>
                    <MDBCol md="4" className="mb-4">
                        <h4 className="mb-4 dark-grey-text font-weight-bold"><strong>Narrower</strong></h4>

                        <section>
                          <MDBCard narrow style={{marginTop: '44px'}}>
                            <MDBView waves cascade hover>
                              <img src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" className="img-fluid" alt="Card cap"/>
                              <MDBMask overlay="white-slight" tag="a"/>
                            </MDBView>
                                <MDBCardBody cascade>
                                <h5 className="pink-text"><MDBIcon icon="utensils"/> Culinary</h5>
                                <h4 className="card-title">Cheat day inspirations</h4>
                                <MDBCardText>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                    nisi ut aliquid ex ea commodi.</MDBCardText>
                                <MDBBtn color="unique">Button</MDBBtn>
                            </MDBCardBody>
                          </MDBCard>
                        </section>

                    </MDBCol>
                    <MDBCol md="4" className="mb-4">
                        <h4 className="mb-4 dark-grey-text font-weight-bold"><strong>Regular</strong></h4>

                        <section>

                          <MDBCard>
                            <MDBView waves cascade hover>
                              <img src="https://mdbootstrap.com/img/Photos/Others/men.jpg" className="img-fluid" alt="Card cap"/>
                              <MDBMask overlay="white-slight" tag="a"/>
                            </MDBView>
                            <MDBCardBody className="text-center" cascade>
                            <MDBCardTitle tag="h4"><strong>Billy Cullen</strong></MDBCardTitle>
                              <h5>Web developer</h5>
                              <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
                                  Facere modi sunt, quod quibusdam.
                              </MDBCardText>
                              <MDBBtn floating tag="a" color="fb"><MDBIcon fab icon="facebook"/></MDBBtn>
                              <MDBBtn floating tag="a" color="tw"><MDBIcon fab icon="twitter"/></MDBBtn>
                              <MDBBtn floating tag="a" color="dribbble"><MDBIcon fab icon="dribbble"/></MDBBtn>
                            </MDBCardBody>
                          </MDBCard>

                        </section>

                    </MDBCol>
                </MDBRow>

            </section>

            <section>
                <h3 className="mb-4 dark-grey-text font-weight-bold"><strong>Cascading panels</strong></h3>

                <MDBRow className="mb-5">

                    <MDBCol md="12" lg="4" className="mb-4">

                      <MDBCard narrow>
                        <MDBView className="gradient-card-header purple-gradient" cascade>
                            <h2 className="card-header-title">Mattonit</h2>
                            <p>The Boar</p>
                            <div className="text-center">
                              <a type="button" className="btn-floating btn-small waves-effect waves-light" href="#!"><MDBIcon fab icon="facebook"/></a>
                              <a type="button" className="btn-floating btn-small waves-effect waves-light" href="#!"><MDBIcon fab icon="twitter"/></a>
                              <a type="button" className="btn-floating btn-small waves-effect waves-light" href="#!"><MDBIcon fab icon="google-plus"/></a>
                          </div>
                        </MDBView>
                        <MDBCardBody className="text-center">
                          <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere
                              modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus
                              non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem
                              ullam corporis suscipit laboriosam.</MDBCardText>
                        </MDBCardBody>
                      </MDBCard>

                    </MDBCol>

                    <MDBCol md="6" lg="4" className="mb-4">

                    <MDBCard wide>
                      <MDBView cascade className="gradient-card-header peach-gradient">
                        <h2 className="h2-responsive card-header-title mb-2">Title of the news</h2>
                        <p><MDBIcon icon="calendar-alt	" />  26.07.2018</p>
                      </MDBView>
                      <MDBCardBody cascade className="text-center">
                        <MDBCardText className="mr-2 ml-2 pb-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</MDBCardText>
                        <a href="#!" className="orange-text mt-1 d-flex flex-row-reverse">
                            <h5 className=" p-2">Read more <MDBIcon icon="chevron-right"/></h5>
                        </a>
                      </MDBCardBody>
                    </MDBCard>


                    </MDBCol>

                    <MDBCol md="6" lg="4" className="mb-4">

                    <MDBCard wide>
                      <MDBView cascade className="gradient-card-header blue-gradient">
                        <h2 className="h2-responsive card-header-title mb-2">Marta</h2>
                        <p>Deserves her own card</p>
                      </MDBView>
                      <MDBCardBody cascade className="text-center">
                        <MDBCardText className="pb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. Facere modi sunt, quod quibusdam dignissimos neque rem nihil ratione est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.</MDBCardText>
                        <hr/>
                        <a className="fa-lg li-ic p-2 m-2" href="#!"><MDBIcon fab icon="linkedin"/></a>
                        <a className="fa-lg tw-ic p-2 m-2" href="#!"><MDBIcon fab icon="twitter"/></a>
                        <a className="fa-lg fb-ic p-2 m-2" href="#!"><MDBIcon fab icon="facebook"/></a>
                        <a className="fa-lg email-ic p-2 m-2" href="#!"><MDBIcon icon="envelope"/></a>
                      </MDBCardBody>
                    </MDBCard>

                  </MDBCol>

                </MDBRow>

            </section>

            <section>
                <h3 className="mb-4 dark-grey-text font-weight-bold"><strong>Reverse cascade</strong></h3>

              <MDBRow className="mb-5 pb-4 mx-auto">
                <MDBCard reverse style={{maxWidth:'80vw'}}>
                  <MDBView waves cascade hover>
                    <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(135).jpg" alt="Card cap"/>
                    <MDBMask overlay="white-slight" tag="a"/>
                  </MDBView>
                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle>My adventure</MDBCardTitle>
                    <h5 className="indigo-text"><strong>Photography</strong></h5>
                    <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</MDBCardText>
                    <a className="fa-lg li-ic p-2 m-2" href="#!"><MDBIcon fab icon="linkedin"/></a>
                    <a className="fa-lg tw-ic p-2 m-2" href="#!"><MDBIcon fab icon="twitter"/></a>
                    <a className="fa-lg fb-ic p-2 m-2" href="#!"><MDBIcon fab icon="facebook"/></a>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>

            </section>

            <section className="mb-5">

                <MDBRow>
                    <MDBCol md="4" className="mb-4">
                        <h4 id="" className="mb-4 font-weight-bold dark-grey-text"><strong>Waves effect</strong></h4>
                        <section>
                          <MDBCard>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves alt="Card cap"/>
                            <MDBCardBody>
                                <MDBCardTitle>Card title</MDBCardTitle>
                                <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                <MDBBtn href="#" color="primary">Button</MDBBtn>
                            </MDBCardBody>
                          </MDBCard>
                        </section>
                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <h4 id="" className="mb-4 font-weight-bold dark-grey-text"><strong>Basic example</strong></h4>

                        <section>

                        <MDBCard>
                            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg" waves={false} alt="Card cap"/>
                            <MDBCardBody>
                                <MDBCardTitle><strong>Card title</strong></MDBCardTitle>
                                <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                                <MDBBtn href="#" color="pink" rounded>Button</MDBBtn>
                            </MDBCardBody>
                          </MDBCard>

                        </section>

                    </MDBCol>

                    <MDBCol md="4" className="mb-4">

                        <h4 id="" className="mb-4 font-weight-bold dark-grey-text"><strong>Testimonial card</strong></h4>

                        <section>
                            <MDBCard testimonial>
                              <MDBCardUp gradient="aqua" />
                              <MDBAvatar className="mx-auto white">
                                <img
                                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                                  alt="Your alternative text"
                                />
                              </MDBAvatar>
                              <MDBCardBody>
                                <h4 className="card-title">Martha Smith</h4>
                                <hr />
                                <MDBCardText> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, adipisci Sed ut perspiciatis
                                unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem
                                aperiam. Facere modi sunt, quod quibusdam dignissimos neque rem nihil.</MDBCardText>
                              </MDBCardBody>
                            </MDBCard>

                        </section>
                    </MDBCol>
                </MDBRow>

            </section>

            <section className="mb-5">
                <h3 id="" className="font-weight-bold dark-grey-text mb-4"><strong>Image overlay</strong></h3>

                <MDBRow>
                    <MDBCol md="6" className="mb-4">

                      <MDBCard className="card-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'}}>
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                          <div>
                            <h5 className="pink-text">
                            <MDBIcon icon="chart-pie" /> Marketing
                            </h5>
                            <MDBCardTitle tag="h3" className="pt-2">
                              <strong>This is card title</strong>
                            </MDBCardTitle>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Repellat fugiat, laboriosam, voluptatem, optio vero odio
                              nam sit officia accusamus minus error nisi architecto
                              nulla ipsum dignissimos. Odit sed qui, dolorum!
                            </p>
                            <MDBBtn color="pink" rounded>
                              <MDBIcon icon="clone left" /> View project
                            </MDBBtn>
                          </div>
                        </div>
                      </MDBCard>

                    </MDBCol>

                    <MDBCol md="6" className="mb-4">

                      <MDBCard className="card-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20%2847%29.jpg)'}}>
                        <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
                          <div>
                            <h5 className="orange-text">
                              <MDBIcon icon="desktop" /> Software
                            </h5>
                            <MDBCardTitle tag="h3" className="pt-2">
                              <strong>This is card title</strong>
                            </MDBCardTitle>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                              Repellat fugiat, laboriosam, voluptatem, optio vero odio
                              nam sit officia accusamus minus error nisi architecto
                              nulla ipsum dignissimos. Odit sed qui, dolorum!
                            </p>
                            <MDBBtn color="deep-orange" rounded>
                              <MDBIcon icon="clone left" /> View project
                            </MDBBtn>
                          </div>
                        </div>
                      </MDBCard>
                    </MDBCol>
                </MDBRow>

            </section>

            <section className="mb-5">

                <MDBRow>
                    <MDBCol md="4" className="mb-4">
                        <h4 id="" className="font-weight-bold mb-4 dark-grey-text"><strong>Action button</strong></h4>

                        <section>
                          <MDBCard>
                            <MDBCardImage
                              className="img-fluid"
                              src="https://mdbootstrap.com/img/Photos/Others/food.jpg"
                            />
                            <MDBBtn
                              floating
                              tag="a"
                              className="ml-auto mr-4 lighten-3 mdb-color"
                              action
                            >
                              <MDBIcon icon="chevron-right" />
                            </MDBBtn>
                            <MDBCardBody>
                              <MDBCardTitle>Card title</MDBCardTitle>
                              <hr/>
                              <MDBCardText>
                                Some quick example text to build on the card title and make
                                up the bulk of the card's content.
                              </MDBCardText>
                            </MDBCardBody>
                            <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                              <ul className="list-unstyled list-inline font-small">
                                <li className="list-inline-item pr-2 white-text">
                                    <MDBIcon icon="clock pr-1" /> 05/10/2015
                                </li>
                                <li className="list-inline-item pr-2">
                                  <a href="#!" className="white-text">
                                    <MDBIcon icon="comments pr-1" />
                                    12
                                  </a>
                                </li>
                                <li className="list-inline-item pr-2">
                                  <a href="#!" className="white-text">
                                    <MDBIcon fab icon="facebook pr-1"/>
                                    21
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#!" className="white-text">
                                    <MDBIcon fab icon="twitter pr-1"/>5
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </MDBCard>
                        </section>
                    </MDBCol>
                    <MDBCol md="4" className="mb-4">
                        <h4 id="" className="font-weight-bold mb-4 dark-grey-text"><strong>Light version</strong></h4>

                        <section>

                        <MDBCard>
                          <MDBCardImage
                            top
                            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
                            overlay="white-slight"
                            hover
                            waves
                            alt="Card cap"
                          />
                          <MDBCardBody>
                              <MDBIcon icon="share-alt  mr-4 activator" />
                            <MDBCardTitle>Card Title</MDBCardTitle>
                            <hr />
                            <MDBCardText>
                              Some quick example text to build on the card title and make
                              up the bulk of the card&apos;s content.
                            </MDBCardText>
                            <a href="#!" className="black-text d-flex justify-content-end" >
                              <h5>
                                Read more <MDBIcon icon="chevron-right" />
                              </h5>
                            </a>
                          </MDBCardBody>
                        </MDBCard>
                        </section>

                    </MDBCol>

                    <MDBCol md="4" className="mb-4">
                        <h4 id="" className="font-weight-bold mb-4 dark-grey-text"><strong>Dark card</strong></h4>

                        <section>

                        <MDBCard>
                          <MDBCardImage
                            top
                            src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
                            overlay="white-slight"
                            hover
                            waves
                            alt="Card cap"
                          />
                          <MDBCardBody className="elegant-color white-text rounded-bottom">
                            <MDBIcon icon="share-alt activator mr-4" />
                            <MDBCardTitle>Card Title</MDBCardTitle>
                            <hr className="hr-light" />
                            <MDBCardText className="white-text">
                              Some quick example text to build on the card title and make
                              up the bulk of the card&apos;s content.
                            </MDBCardText>
                              <a href="#!" className="black-text d-flex justify-content-end" >
                              <h5 className="white-text">
                                Read more <MDBIcon icon="chevron-right" />
                              </h5>
                            </a>
                          </MDBCardBody>
                        </MDBCard>
                      </section>
                    </MDBCol>
                </MDBRow>

            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/components/cards/"/>

          </MDBContainer>

  );
}

export default Cards;