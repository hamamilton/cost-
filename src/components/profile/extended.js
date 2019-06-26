import React from 'react';
import { MDBContainer,
         MDBRow,
         MDBCol,
         MDBCard,
         MDBView,
         MDBCardTitle,
         MDBCardBody,
         MDBCardGroup,
         MDBCardFooter,
         MDBIcon,
         MDBBadge,
         MDBMask,
         MDBPagination,
         MDBPageItem,
         MDBPageNav,
         MDBInput,
         MDBAvatar,
         MDBBtn,
         MDBModal,
         MDBModalHeader,
         MDBModalBody,
         MDBModalFooter } from 'mdbreact';
import './extended.css';

class PExtended extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      bootstrap: false,
      wordpress: false,
      angular: false,
      mdb: false,
      community: false,
      pro: false,
      send: false,
      submit: false,
    }
  }

  toggle = (item) => {
    console.log(item)
      this.setState({
        [item]: !this.state[item]
      })
  }

  renderModal = (type) => {
    const string = type==='bootstrap' ?
                  'Bootstrap Master' : type === 'wordpress' ?
                  'Wordpress Master' : type === 'angular' ?
                  'Angular Master' : type === 'mdb' ?
                  'MDB Master' : type === 'community' ?
                  'Community Contributor' : type === 'pro' ?
                  'MDB Pro User' : type === 'send' ?
                  'New Message' : type === 'submit' ?
                  'Submit new project' : false
    const icon = type === 'send' ?
                'envelope-o' : type === 'submit' ?
                'file': 'trophy'
    const lBtnTxt = type === 'send' ?
                  'cancel' : 'close'
    const rBtnTxt = type === 'send' ?
                  'send' : type === 'submit' ?
                  'submit ':'Go to'
    const rBtnIcon = type === 'send' ?
                  'paper-plane' : type === 'submit' ?
                  'check' : 'arrow-right'

      return (
        <MDBModal isOpen={this.state[type]} toggle={()=>this.toggle(type)} cascading>
            <MDBModalHeader toggle={()=>this.toggle(type)} className="light-blue darken-3 white-text">
                <MDBIcon icon={icon} className="mr-2"/> {string}
            </MDBModalHeader>
            <MDBModalBody>

              { type === 'send' ?
                <MDBInput type="textarea" label="Your message" rows={15}/> :
                type === 'submit' ?
                <div>
                    <MDBInput type="text" label="Project name"/>
                    <MDBInput type="text" label="Project URL address"/>
                    <MDBInput type="text" label="Image URL"/>
                    <MDBInput type="textarea" label="Description"/>
                </div> :
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quibusdam modi veritatis non accusamus distinctio consequuntur aliquam, assumenda tempore in illum aspernatur quia, minus ex! Eius tenetur praesentium, consectetur quod!
                </p>
            }
            </MDBModalBody>
            <MDBModalFooter center>
              <MDBBtn outline color="primary" onClick={()=>this.toggle(type)}>{lBtnTxt}</MDBBtn>
              <MDBBtn color="primary">{rBtnTxt} <MDBIcon icon={rBtnIcon} className="ml-1"/></MDBBtn>
            </MDBModalFooter>
      </MDBModal>
      )
    }
  render() {

    return (
      <div id="profile-ex" className="mb-5">

          {this.renderModal('wordpress')}
          {this.renderModal('bootstrap')}
          {this.renderModal('angular')}
          {this.renderModal('mdb')}
          {this.renderModal('community')}
          {this.renderModal('pro')}
          {this.renderModal('send')}
          {this.renderModal('submit')}

          <MDBContainer fluid>
              <MDBRow>
                  <MDBCol lg="4" md="12">

                  <MDBCard className="profile-card text-center mb-4">
                      <MDBAvatar tag="img" alt="John Doe"
                      src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" className="z-depth-1-half mb-4"/>
                      <MDBCardBody>
                          <MDBCardTitle><strong>John Doe</strong></MDBCardTitle>
                          <h5>Web designer at <a href="https://mdbootstrap.com/docs/react">MDBootstrap</a></h5>
                          <p className="dark-grey-text">Warsaw, Poland</p>
                          <MDBBtn floating tag="a" color=""><MDBIcon fab icon="facebook" className="dark-grey-text"/></MDBBtn>
                          <MDBBtn floating tag="a" color=""><MDBIcon fab icon="twitter" className="dark-grey-text"/></MDBBtn>
                          <MDBBtn floating tag="a" color=""><MDBIcon fab icon="linkedin" className="dark-grey-text"/></MDBBtn>
                          <p className="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                          </p>
                          <MDBBtn color="info" size="sm" rounded onClick={()=>{this.toggle('send')}}>Contact<MDBIcon icon="paper-plane" className="ml-2"/></MDBBtn>
                      </MDBCardBody>
                  </MDBCard>
                  <MDBCard className="mb-4">
                      <MDBCardBody className="text-center">
                          <h5><strong>John's Achievements</strong></h5>

                          <hr className="my-3"/>

                          <MDBBtn color="light-blue" size="sm" rounded className="px-3" onClick={()=>this.toggle('bootstrap')}>Bootstrap Master</MDBBtn>
                          <MDBBtn color="blue-grey" size="sm" rounded className="px-3"onClick={()=>this.toggle('wordpress')}>WordPress Master</MDBBtn>
                          <MDBBtn size="sm" rounded className="px-3"onClick={()=>this.toggle('angular')}>Angular Master</MDBBtn>
                          <MDBBtn color="secondary" size="sm" rounded className="px-3"onClick={()=>this.toggle('mdb')}>MDB Master</MDBBtn>
                          <MDBBtn color="deep-purple" size="sm" rounded className="px-3"onClick={()=>this.toggle('community')}>Community contributor</MDBBtn>
                          <MDBBtn color="indigo" size="sm" rounded className="px-3"onClick={()=>this.toggle('pro')}>MDB Pro User</MDBBtn>
                      </MDBCardBody>
                  </MDBCard>

                      <MDBCard className="mb-4">
                          <MDBCardBody>
                              <h5 className="text-center mb-4"><strong>John's Contributions </strong></h5>
                              <ul className="list-unstyled pt-4">
                                  <li>
                                      <p>Questions <MDBBadge color="primary" className="float-right">34</MDBBadge></p>
                                  </li>
                                  <hr/>
                                  <li>
                                      <p>Answers <MDBBadge color="primary" className="float-right">17</MDBBadge></p>
                                  </li>
                                  <hr/>
                                  <li>
                                      <p>Submited projects <MDBBadge color="primary" className="float-right">12</MDBBadge></p>
                                  </li>
                                  <hr/>
                                  <li>
                                      <p>Pull requests <MDBBadge color="primary" className="float-right">3</MDBBadge></p>
                                  </li>
                              </ul>
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  <MDBCol lg="8" md="12" className="text-center">
                      <div className="text-center mt-3 mb-5">
                          <h4><strong>John's projects</strong></h4>
                          <MDBBtn color="info" rounded className="mt-4" onClick={()=> {this.toggle('submit')}}>Submit new project <MDBIcon icon="image" className="ml-1"/></MDBBtn>

                      </div>
                      <MDBCardGroup deck>
                          <MDBCard className="mb-5" narrow>
                              <MDBView cascade hover>
                                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" className="img-fluid" alt="project one"/>
                                  <a href="#!">
                                      <MDBMask overlay="white-slight"/>
                                  </a>
                              </MDBView>
                              <MDBCardBody>
                                  <h4 className="card-title">Project name</h4>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up the bulk of the card's content.
                                  </p>
                              </MDBCardBody>
                              <MDBCardFooter className="links-light">
                                  <span className="pull-left pt-2">
                                      <a href="#!"><MDBIcon icon="share-alt" className="mr-2"></MDBIcon></a>
                                      <a href="#!"><MDBIcon icon="heart" className="mr-2"></MDBIcon>10</a>
                                  </span>
                                  <span className="float-right">
                                      <a href="#!" className="waves-effect p-2">Live Preview <MDBIcon icon="image" className="ml-1"></MDBIcon></a>
                                  </span>
                              </MDBCardFooter>
                          </MDBCard>

                          <MDBCard className="mb-5" narrow>
                              <MDBView cascade hover>
                                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" className="img-fluid" alt="project one"/>
                                  <a href="#!">
                                      <MDBMask overlay="white-slight"/>
                                  </a>
                              </MDBView>
                              <MDBCardBody>
                                  <h4 className="card-title">Project name</h4>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up the bulk of the card's content.
                                  </p>
                              </MDBCardBody>
                              <MDBCardFooter className="links-light">
                                  <span className="pull-left pt-2">
                                      <a href="#!"><MDBIcon icon="share-alt" className="mr-2"></MDBIcon></a>
                                      <a href="#!"><MDBIcon icon="heart" className="mr-2"></MDBIcon>15</a>
                                  </span>
                                  <span className="float-right">
                                      <a href="#!" className="waves-effect p-2">Live Preview <MDBIcon icon="image" className="ml-1"></MDBIcon></a>
                                  </span>
                              </MDBCardFooter>
                          </MDBCard>
                      </MDBCardGroup>

                      <MDBCardGroup deck>
                          <MDBCard className="mb-5" narrow>
                              <MDBView cascade hover>
                                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-pricing.jpg" className="img-fluid" alt="project one"/>
                                  <a href="#!">
                                      <MDBMask overlay="white-slight"/>
                                  </a>
                              </MDBView>
                              <MDBCardBody>
                                  <h4 className="card-title">Project name</h4>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up the bulk of the card's content.
                                  </p>
                              </MDBCardBody>
                              <MDBCardFooter className="links-light">
                                  <span className="pull-left pt-2">
                                      <a href="#!"><MDBIcon icon="share-alt" className="mr-2"></MDBIcon></a>
                                      <a href="#!"><MDBIcon icon="heart" className="mr-2"></MDBIcon>21</a>
                                  </span>
                                  <span className="float-right">
                                      <a href="#!" className="waves-effect p-2">Live Preview <MDBIcon icon="image" className="ml-1"></MDBIcon></a>
                                  </span>
                              </MDBCardFooter>
                          </MDBCard>

                          <MDBCard className="mb-5" narrow>
                              <MDBView cascade hover>
                                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-landing.jpg" className="img-fluid" alt="project one"/>
                                  <a href="#!">
                                      <MDBMask overlay="white-slight"/>
                                  </a>
                              </MDBView>
                              <MDBCardBody>
                                  <h4 className="card-title">Project name</h4>
                                  <p className="card-text">
                                      Some quick example text to build on the card title and make up the bulk of the card's content.
                                  </p>
                              </MDBCardBody>
                              <MDBCardFooter className="links-light">
                                  <span className="pull-left pt-2">
                                      <a href="#!"><MDBIcon icon="share-alt" className="mr-2"></MDBIcon></a>
                                      <a href="#!"><MDBIcon icon="heart" className="mr-2"></MDBIcon>36</a>
                                  </span>
                                  <span className="float-right">
                                      <a href="#!" className="waves-effect p-2">Live Preview <MDBIcon icon="image" className="ml-1"></MDBIcon></a>
                                  </span>
                              </MDBCardFooter>
                          </MDBCard>
                      </MDBCardGroup>

                      <MDBPagination circle className="my-4 float-right">
                          <li className="page-item disabled clearfix d-none d-md-block"><a className="page-link" href="#!">First</a></li>
                          <MDBPageItem disabled>
                              <MDBPageNav className="page-link" aria-label="Previous">
                                  <span aria-hidden="true">&laquo;</span>
                                  <span className="sr-only">Previous</span>
                              </MDBPageNav>
                          </MDBPageItem>
                          <MDBPageItem active>
                              <MDBPageNav className="page-link">
                              1 <span className="sr-only">(current)</span>
                              </MDBPageNav>
                          </MDBPageItem>
                          <MDBPageItem>
                              <MDBPageNav className="page-link">2</MDBPageNav>
                          </MDBPageItem>
                          <MDBPageItem>
                              <MDBPageNav className="page-link">3</MDBPageNav>
                          </MDBPageItem>
                          <MDBPageItem>
                              <MDBPageNav className="page-link">4</MDBPageNav>
                          </MDBPageItem>
                          <MDBPageItem>
                              <MDBPageNav className="page-link">5</MDBPageNav>
                          </MDBPageItem>
                          <MDBPageItem>
                              <MDBPageNav className="page-link" aria-label="Next">
                                  <span aria-hidden="true">&raquo;</span>
                                  <span className="sr-only">Next</span>
                              </MDBPageNav>
                          </MDBPageItem>
                      </MDBPagination>
                  </MDBCol>
              </MDBRow>
          </MDBContainer>
      </div>
    );
  }
}

export default PExtended;