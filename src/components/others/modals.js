import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
  MDBBadge,
  MDBInput,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTabContent,
  MDBTabPane,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdbreact';
import LinkCard from '../LinkCard';

class Modals extends React.Component {
  state = {
    modal0: false,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
    modal18: false,
    modal19: false,
    modal20: false,
    activeItem: 1
  }

  toggle(nr) {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }
  toggleTab(tab) {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  }
  renderSuccessModal = (number, kind) => {
    return (
      <MDBModal
        size={kind === 'side' ? "lg" : ""}
        className="modal-notify modal-success"
        side={kind === 'side'}
        position={kind === 'side' ? 'top-right' : ""}
        backdrop={(kind === 'side' || kind === 'passive') ? false : true}
        isOpen={kind === 'passive' ? true : this.state['modal' + number]}
        toggle={kind === 'passive' ? () => true : () => this.toggle(number)}
        inline={kind === 'passive' ? true : false}
      >
        <MDBModalHeader tag="p" toggle={() => this.toggle(number)} titleClass="heading lead">
          All good!
        </MDBModalHeader>
        <MDBModalBody className="text-center">
          <MDBIcon icon="check mb-3 animated rotateIn" size="4x" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat. Esse ratione fuga, enim, ab officiis totam. </p>
        </MDBModalBody>
        <MDBModalFooter center>
          <MDBBtn color="success" onClick={() => this.toggle(number)}>Get it now <MDBIcon icon="diamond ml-1 white-text" /></MDBBtn>
          <MDBBtn outline color="success" onClick={() => this.toggle(number)}>No, thanks</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    )
  }

  renderInfoModal = (number, kind) => {
    return (
      <MDBModal
        size={kind === 'side' ? "lg" : ""}
        className="modal-notify modal-info"
        side={kind === 'side'}
        position={kind === 'side' ? 'top-left' : ""}
        backdrop={(kind === 'side' || kind === 'passive') ? false : true}
        isOpen={kind === 'passive' ? true : this.state['modal' + number]}
        toggle={kind === 'passive' ? false : () => this.toggle(number)}
        inline={kind === 'passive' ? true : false}
      >
        <MDBModalHeader tag="p" toggle={() => this.toggle(number)} titleClass="heading lead">
          Buy this!
        </MDBModalHeader>
        <MDBModalBody className="text-center">
          <img src="https://mdbootstrap.com/wp-content/uploads/2016/11/admin-dashboard-bootstrap.jpg" alt="" className="img-fluid" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt vero illo error eveniet cum. </p>
        </MDBModalBody>
        <MDBModalFooter center>
          <MDBBtn color="info" onClick={() => this.toggle(number)}>Get it now <MDBIcon icon="diamond ml-1 white-text" /></MDBBtn>
          <MDBBtn outline color="info" onClick={() => this.toggle(number)}>No, thanks</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    )
  }

  renderDangerModal = (number, kind) => {
    return (
      <MDBModal
        size={kind === 'side' ? "lg" : ""}
        className="modal-notify modal-danger"
        side={kind === 'side'}
        position={kind === 'side' ? 'bottom-right' : ""}
        backdrop={(kind === 'side' || kind === 'passive') ? false : true}
        isOpen={kind === 'passive' ? true : this.state['modal' + number]}
        toggle={kind === 'passive' ? false : () => this.toggle(number)}
        inline={kind === 'passive' ? true : false}
      >
        <MDBModalHeader tag="p" toggle={() => this.toggle(4)} titleClass="heading lead">
          Discount offer: <strong>10% off</strong>
        </MDBModalHeader>
        <MDBModalBody>
          <MDBRow>
            <MDBCol
              size="3"
              className="d-flex justify-content-center align-items-center"
            >
              <MDBIcon size="4x" icon="gift" className="ml-1" />
            </MDBCol>
            <MDBCol size="9">
              <p>
                Sharing is caring. Therefore, from time to time we like to
                give our visitors small gifts. Today is one of those days.
              </p>
              <p>
                <strong>
                  Copy the following code and use it at the checkout. It's
                  valid for <u>one day</u>.
                </strong>
              </p>
              <h3>
                <MDBBadge color="danger">v52gs1</MDBBadge>
              </h3>
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
          <MDBBtn color="danger" onClick={() => this.toggle(4)}>
            Get it now
            <MDBIcon icon="gem" className="ml-1 white-text" />
          </MDBBtn>
          <MDBBtn color="danger" outline onClick={() => this.toggle(4)}>
            No, thanks
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    )
  }

  renderWarningModal = (number, kind) => {
    return (
      <MDBModal
        size={kind === 'side' ? "lg" : ""}
        className="modal-notify modal-warning"
        side={kind === 'side'}
        position={kind === 'side' ? 'bottom-left' : ""}
        backdrop={(kind === 'side' || kind === 'passive') ? false : true}
        isOpen={kind === 'passive' ? true : this.state['modal' + number]}
        toggle={kind === 'passive' ? false : () => this.toggle(number)}
        inline={kind === 'passive' ? true : false}
      >
        <MDBModalHeader tag="p" toggle={() => this.toggle(5)} titleClass="heading lead">
          Contact us
          </MDBModalHeader>
        <MDBModalBody>
          <MDBRow>
            <MDBCol size="3" className="text-center">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" alt="Jane - our consultant" className="img-fluid z-depth-1-half rounded-circle" />
              <p className="mt-2 mb-0 title">Jane</p>
              <p className="text-muted" style={{ fontSize: '13px' }}>Consultant</p>
            </MDBCol>
            <MDBCol size="9">
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, molestiae provident temporibus sunt earum.</p>
              <p className="card-text"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>
            </MDBCol>
          </MDBRow>
        </MDBModalBody>
        <MDBModalFooter center>
          <MDBBtn color="warning" onClick={() => this.toggle(5)}>Get it now <MDBIcon icon="diamond ml-1 white-text" /></MDBBtn>
          <MDBBtn outline color="warning" onClick={() => this.toggle(5)}>No, thanks</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    )
  }


  renderMultipurposeModal = (number, kind) => {
    const icon = kind === 'contact' ?
      'pencil-alt' : 'newspaper'

    const btnString = kind === 'contact' ?
      'Send' : 'Submit'

    const btnIcon = kind === 'contact' ?
      'send' : 'check'

    return (
      <MDBModal
        isOpen={number === false ? true : this.state['modal' + number]}
        toggle={number === false ? () => { } : () => this.toggle(number)}
        inline={number === false}
        backdrop={number === false ? false : true}
        cascading>
        <MDBModalHeader toggle={number === false ? () => { } : () => this.toggle(number)} className="light-blue darken-3 white-text">
          <MDBIcon icon={icon} className="mr-2" /> {kind.charAt(0).toUpperCase() + kind.slice(1) + ' form'}
        </MDBModalHeader>
        <MDBModalBody className="mb-0">
          <MDBInput label="Your name" icon="user" />
          <MDBInput label="Your email" icon="envelope" />
          {kind === 'contact' &&
            <><MDBInput icon="tag" label="subject" />
              <MDBInput type="textarea" icon="pencil-alt" label="Your message" /></>
          }
          <div className="text-center mb-1-half">
            <MDBBtn color="info" className="mb-2" onClick={number === false ? () => { } : () => this.toggle(number)}>{btnString}<MDBIcon icon={btnIcon} className="ml-1" /></MDBBtn>
          </div>
        </MDBModalBody>
      </MDBModal>
    )
  }

  renderTabbedModal = (number) => {
    return (
      <MDBModal
        className="cascading-modal"
        isOpen={number === false ? true : this.state['modal' + number]}
        toggle={number === false ? () => { } : () => this.toggle(number)}
        backdrop={number === false ? false : true}
        inline={number === false}
      >
        <MDBNav
          tabs
          className="md-tabs nav-justified tabs-2 light-blue darken-3"
          style={{ margin: "-1.5rem 1rem 0 1rem" }}
        >
          <MDBNavItem>
            <MDBNavLink
              className={this.state.activeItem === 1 ? "active" : ""}
              to="#"
              onClick={() => {
                this.toggleTab(1);
              }}
            >
              <MDBIcon icon="user" className="mr-1" />
              Login
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              className={this.state.activeItem === 2 ? "active" : ""}
              to="#"
              onClick={() => {
                this.toggleTab(2);
              }}
            >
              <MDBIcon icon="user-plus" className="mr-1" />
              Register
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} className="pb-0">
          <MDBTabPane tabId={1}>
            <MDBModalBody className="mx-0">
              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
              <MDBInput label="Your password" icon="lock" group type="password" validate />
              <div className="text-center">
                <MDBBtn
                  className="mb-4"
                  color="info"
                  onClick={() => this.toggle(3)}
                >
                  LOG IN <MDBIcon icon="sign-in" className="ml-1" />
                </MDBBtn>
              </div>
            </MDBModalBody>
            <MDBModalFooter between>
              <div className="options text-center text-md-right">
                <p className="font-small grey-text">
                  Not a member?{" "}
                  <span
                    className="blue-text ml-1"
                    onClick={() => {
                      this.toggleTab(2);
                    }}
                  >
                    Sign Up
                  </span>
                </p>
                <p className="font-small grey-text">
                  Forgot <span className="blue-text ml-1">password?</span>
                </p>
              </div>
              <MDBBtn outline color="info" onClick={() => this.toggle(7)}>
                CLOSE
              </MDBBtn>
            </MDBModalFooter>
          </MDBTabPane>
          <MDBTabPane tabId={2}>
            <MDBModalBody className="mx-0">
              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" success="right" />
              <MDBInput label="Your password" icon="lock" group type="password" validate />
              <MDBInput label="Repeat password" icon="lock" group type="password" validate />
              <div className="text-center">
                <MDBBtn className="mb-4 mx-auto" color="info" onClick={() => this.toggle(7)} >
                  SIGN UP
                <MDBIcon icon="sign-in" className="ml-1" />
                </MDBBtn>
              </div>
            </MDBModalBody>
            <MDBModalFooter between>
              <div className="options text-center text-md-right">
                <p className="font-small grey-text">
                  Already have an account?
                    <span className="blue-text ml-1" onClick={() => { this.toggleTab(1); }} >
                    Log in
                    </span>
                </p>
              </div>
              <MDBBtn outline color="info" onClick={() => this.toggle(7)}>
                CLOSE
                </MDBBtn>
            </MDBModalFooter>
          </MDBTabPane>
        </MDBTabContent>
      </MDBModal>
    )
  }

  renderAvatarModal = (number) => {
    return (
      <MDBModal size="sm"
        cascading
        className="modal-avatar"
        isOpen={number === false ? true : this.state['modal' + number]}
        toggle={number === false ? () => { } : () => this.toggle(number)}
        inline={number === false}
        backdrop={number === false ? false : true}>
        <MDBModalHeader className="mx-auto">
          <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" alt="avatar" className="rounded-circle img-responsive" />
        </MDBModalHeader>
        <MDBModalBody className="text-center">
          <h5 className="mt-1 mb-2">Maria Doe</h5>
          <MDBInput label="Enter password" group type="password" validate />
          <MDBBtn color="cyan">Login<MDBIcon icon="sign-in" className="ml-2" /></MDBBtn>
        </MDBModalBody>
      </MDBModal>
    )
  }

  render() {
    return (
      <div id="modals">
        <h4 className="mb-5 mt-4 dark-grey-text text-center font-weight-bold"><strong>Position &amp; Sizes</strong></h4>
        <div className="text-center mb-5">
          <p className="lead">Click buttons below to launch demo modals</p>
        </div>

        <MDBRow>

          {/* FIRST COLUMN */}
          <MDBCol md="3">
            <h5 className="text-center mb-3">Frame Modal</h5>
            <img src="https://mdbootstrap.com/img/brandflow/modal4.jpg" alt="" className="img-fluid z-depth-1" />
            <div className="text-center">
              <h5 className="my-3">Position</h5>
              <MDBBtn color="primary" onClick={() => this.toggle(0)}>Top</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(1)}>Bottom</MDBBtn>
            </div>

            {/* FIRST COLUMN MODALS */}
            <MDBModal
              isOpen={this.state.modal0}
              toggle={() => this.toggle(0)}
              frame
              position="top"
              backdrop={false}
            >
              <MDBModalBody className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...
                <MDBIcon icon="diament text-white" />
                <MDBBtn color="info" onClick={() => this.toggle(0)}>
                  Get it now <MDBIcon icon="diamond text-white ml-1" />
                </MDBBtn>
                <MDBBtn outline color="info" onClick={() => this.toggle(0)}>No, thanks</MDBBtn>
              </MDBModalBody>
            </MDBModal>

            <MDBModal
              isOpen={this.state.modal1}
              toggle={() => this.toggle(1)}
              frame
              position="bottom"
              backdrop={false}
            >
              <MDBModalBody className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nisi quo provident fugiat reprehenderit nostrum quos...
                <MDBIcon icon="diament text-white" />
                <MDBBtn color="success" onClick={() => this.toggle(1)}>
                  Get it now <MDBIcon icon="diamond text-white ml-1" />
                </MDBBtn>
                <MDBBtn outline color="success" onClick={() => this.toggle(1)}>No, thanks</MDBBtn>
              </MDBModalBody>
            </MDBModal>
          </MDBCol>


          {/* SECOND COLUMN */}
          <MDBCol md="3">
            <h5 className="text-center mb-3">Side Modal</h5>
            <img src="https://mdbootstrap.com/img/brandflow/modal3.jpg" alt="" className="img-fluid z-depth-1" />
            <div className="text-center">
              <h5 className="my-3">Position</h5>
              <MDBBtn color="primary" onClick={() => this.toggle(2)}>Top right</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(3)}>Top left</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(4)}>Bottom right</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(5)}>Bottom left</MDBBtn>
            </div>

            {/* SECOND COLUMN MODALS */}
            {this.renderSuccessModal(2, 'side')}
            {this.renderInfoModal(3, 'side')}
            {this.renderDangerModal(4, 'side')}
            {this.renderWarningModal(5, 'side')}

          </MDBCol>


          {/* THIRD COLUMN */}
          <MDBCol md="3">
            <h5 className="text-center mb-3">Central Modal</h5>
            <img src="https://mdbootstrap.com/img/brandflow/modal3.jpg" alt="" className="img-fluid z-depth-1" />
            <div className="text-center">
              <h5 className="my-3">Size</h5>
              <MDBBtn color="primary" onClick={() => this.toggle(6)}>Small</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(7)}>Medium</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(8)}>Large</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(9)}>Fluid</MDBBtn>
            </div>

            {/* THIRD COLUMN MODALS */}

            {this.renderAvatarModal(6)}
            {this.renderTabbedModal(7)}

            <MDBModal isOpen={this.state.modal8} toggle={() => this.toggle(8)} size="lg" className="modal-notify modal-info">
              <MDBModalHeader tag="p" toggle={() => this.toggle(8)} titleClass="heading lead" className="text-white">
                Buy this!
              </MDBModalHeader>
              <MDBModalBody className="text-center">
                <MDBIcon icon="check" className="animated rotateIn mb-3" size="4x" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.</p>
                <img src="https://mdbootstrap.com/wp-content/uploads/2016/11/admin-dashboard-bootstrap.jpg" alt="offer" className="img-fluid" />
              </MDBModalBody>
              <MDBModalFooter end>
                <MDBBtn color="info" onClick={() => this.toggle(8)}>Get it now <MDBIcon icon="diamond white-text ml-1" /></MDBBtn>
                <MDBBtn color="info" outline onClick={() => this.toggle(8)}>No, thanks</MDBBtn>
              </MDBModalFooter>
            </MDBModal>

            <MDBModal isOpen={this.state.modal9} toggle={() => this.toggle(9)} className="modal-notify modal-success" size="fluid">
              <MDBModalHeader tag="p" toggle={() => this.toggle(9)} titleClass="heading lead">
                I go all the width
              </MDBModalHeader>
              <MDBModalBody className="text-center">
                <MDBIcon icon="check" className="animated rotateIn mb-3" size="4x" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.</p>
                <MDBListGroup>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Cras justo odio
                        <MDBBadge pill color="primary">14</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                        <MDBBadge pill color="primary">2</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                        <MDBBadge pill color="primary">1</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Cras justo odio
                        <MDBBadge pill color="primary">10</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                        <MDBBadge pill color="primary">5</MDBBadge>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBModalBody>
              <MDBModalFooter end>
                <MDBBtn color="success" onClick={() => this.toggle(9)}>Get it now <MDBIcon icon="diamond white-text ml-1" /></MDBBtn>
                <MDBBtn color="success" outline onClick={() => this.toggle(9)}>No, thanks</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBCol>

          {/* FOURTH COLUMN */}
          <MDBCol md="3">
            <h5 className="text-center mb-3">Central Modal</h5>
            <img src="https://mdbootstrap.com/img/brandflow/modal3.jpg" alt="" className="img-fluid z-depth-1" />
            <div className="text-center">
              <h5 className="my-3">Size</h5>
              <MDBBtn color="primary" onClick={() => this.toggle(10)}>Right</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(11)}>Left</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(12)}>Top</MDBBtn><br />
              <MDBBtn color="primary" onClick={() => this.toggle(13)}>Bottom</MDBBtn>
            </div>

            {/* FOURTH COLUMN MODALS */}
            <MDBModal isOpen={this.state.modal10} toggle={() => this.toggle(10)} className="modal-notify modal-success" fullHeight position="right" backdrop={false}>
              <MDBModalHeader tag="p" toggle={() => this.toggle(10)} titleClass="heading lead">
                Jonny, it came from the right!
              </MDBModalHeader>
              <MDBModalBody className="text-center">
                <MDBIcon icon="check" className="animated rotateIn mb-3" size="4x" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.</p>
                <MDBListGroup>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Cras justo odio
                        <MDBBadge pill color="primary">14</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                        <MDBBadge pill color="primary">2</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                        <MDBBadge pill color="primary">1</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Cras justo odio
                        <MDBBadge pill color="primary">10</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                        <MDBBadge pill color="primary">5</MDBBadge>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBModalBody>
              <MDBModalFooter end>
                <MDBBtn color="success" onClick={() => this.toggle(10)}>Get it now <MDBIcon icon="diamond white-text ml-1" /></MDBBtn>
                <MDBBtn color="success" outline onClick={() => this.toggle(10)}>No, thanks</MDBBtn>
              </MDBModalFooter>
            </MDBModal>

            <MDBModal isOpen={this.state.modal11} toggle={() => this.toggle(11)} className="modal-notify modal-info" fullHeight position="left" backdrop={false}>
              <MDBModalHeader tag="p" toggle={() => this.toggle(11)} titleClass="heading lead">
                Here's your info list modal, pal!
              </MDBModalHeader>
              <MDBModalBody className="text-center">
                <MDBIcon icon="check" className="animated rotateIn mb-3" size="4x" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit iusto nulla aperiam blanditiis ad consequatur in dolores culpa, dignissimos, eius non possimus fugiat. Esse ratione fuga, enim, ab officiis totam.</p>
                <MDBListGroup>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Cras justo odio
                        <MDBBadge pill color="primary">14</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                        <MDBBadge pill color="primary">2</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                        <MDBBadge pill color="primary">1</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Cras justo odio
                        <MDBBadge pill color="primary">10</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Morbi leo risus
                        <MDBBadge pill color="primary">5</MDBBadge>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBModalBody>
              <MDBModalFooter end>
                <MDBBtn color="info" onClick={() => this.toggle(11)}>Get it now <MDBIcon icon="diamond white-text ml-1" /></MDBBtn>
                <MDBBtn color="info" outline onClick={() => this.toggle(11)}>No, thanks</MDBBtn>
              </MDBModalFooter>
            </MDBModal>

            <MDBModal isOpen={this.state.modal12} toggle={() => this.toggle(12)} className="modal-notify modal-warning" fullHeight position="top" backdrop={false}>
              <MDBModalHeader tag="p" toggle={() => this.toggle(12)} titleClass="heading lead">
                Warning! Birds!
              </MDBModalHeader>
              <MDBModalBody className="text-center">
                <MDBIcon icon="check" className="animated rotateIn mb-3" size="4x" />
                <MDBListGroup>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Innie, Minnie
                        <MDBBadge pill color="primary">14</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Miny, Moe
                        <MDBBadge pill color="primary">2</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Reconsider
                        <MDBBadge pill color="primary">1</MDBBadge>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBModalBody>
              <MDBModalFooter end>
                <MDBBtn color="warning" onClick={() => this.toggle(12)}>Get it now <MDBIcon icon="diamond white-text ml-1" /></MDBBtn>
                <MDBBtn color="warning" outline onClick={() => this.toggle(12)}>No, thanks</MDBBtn>
              </MDBModalFooter>
            </MDBModal>

            <MDBModal isOpen={this.state.modal13} toggle={() => this.toggle(13)} className="modal-notify modal-danger" fullHeight position="bottom" backdrop={false}>
              <MDBModalHeader tag="p" toggle={() => this.toggle(13)} titleClass="heading lead">
                Danger! Sharks!
              </MDBModalHeader>
              <MDBModalBody className="text-center">
                <MDBIcon icon="check" className="animated rotateIn mb-3" size="4x" />
                <MDBListGroup>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Innie, Minnie
                        <MDBBadge pill color="primary">14</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Miny, Moe
                        <MDBBadge pill color="primary">2</MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem hover className="d-flex justify-content-between align-items-center">
                    Please reconsider
                        <MDBBadge pill color="primary">1</MDBBadge>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBModalBody>
              <MDBModalFooter end>
                <MDBBtn color="danger" onClick={() => this.toggle(13)}>Get it now <MDBIcon icon="diamond white-text ml-1" /></MDBBtn>
                <MDBBtn color="danger" outline onClick={() => this.toggle(13)}>No, thanks</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBCol>
        </MDBRow>

        <hr className="my-5" />

        <h4 className="my-5 mt-4 dark-grey-text text-center"><strong>Styles examples</strong></h4>

        <MDBRow className="mb-5">
          <MDBCol md="6">
            <div className="text-center">
              <MDBBtn color="primary" rounded onClick={() => this.toggle(14)}>Launch success modal <MDBIcon icon="eye" /></MDBBtn>
            </div>
            {this.renderSuccessModal(14, false)}
            {this.renderSuccessModal(false, 'passive')}
          </MDBCol>
          <MDBCol md="6">
            <div className="text-center">
              <MDBBtn color="primary" rounded onClick={() => this.toggle(15)}>Launch info modal <MDBIcon icon="eye" /></MDBBtn>
            </div>
            {this.renderInfoModal(15, false)}
            {this.renderInfoModal(false, 'passive')}
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="6">
            <div className="text-center">
              <MDBBtn color="primary" rounded onClick={() => this.toggle(16)}>Launch danger modal <MDBIcon icon="eye" /></MDBBtn>
            </div>
            {this.renderDangerModal(16, false)}
            {this.renderDangerModal(false, 'passive')}
          </MDBCol>
          <MDBCol md="6">
            <div className="text-center">
              <MDBBtn color="primary" rounded onClick={() => this.toggle(17)}>Launch warning modal <MDBIcon icon="eye" /></MDBBtn>
            </div>
            {this.renderWarningModal(17, false)}
            {this.renderWarningModal(false, 'passive')}
          </MDBCol>
        </MDBRow>

        <hr className="my-5" />
        <h4 className="my-5 mt-4 dark-grey-text text-center"><strong>Forms examples</strong></h4>
        <MDBRow className="mb-5">
          <MDBCol md="6">
            <div className="text-center">
              <MDBBtn color="primary" rounded onClick={() => this.toggle(18)}>Launch contact form modal <MDBIcon icon="eye" /></MDBBtn>
            </div>
            {this.renderMultipurposeModal(18, 'contact')}
            {this.renderMultipurposeModal(false, 'contact')}
          </MDBCol>
          <MDBCol md="6">
            <div className="text-center">
              <MDBBtn color="primary" rounded onClick={() => this.toggle(19)}>Launch login/register modal <MDBIcon icon="eye" /></MDBBtn>
            </div>
            {this.renderTabbedModal(19)}
            {this.renderTabbedModal(false)}
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="6">
            <div className="text-center">
              <MDBBtn color="primary" rounded onClick={() => this.toggle(20)}>Launch subscription form modal <MDBIcon icon="eye" /></MDBBtn>
            </div>
            {this.renderMultipurposeModal(20, 'subscription')}
            {this.renderMultipurposeModal(false, 'subscription')}
          </MDBCol>
          <MDBCol md="6">
            <div className="text-center">
              <MDBBtn color="primary" rounded onClick={() => this.toggle(21)}>Launch login with register modal <MDBIcon icon="eye" /></MDBBtn>
            </div>
            {this.renderAvatarModal(21)}
            {this.renderAvatarModal(false)}
          </MDBCol>
        </MDBRow>

        <LinkCard docs="https://mdbootstrap.com/docs/react/modals/basic/" />
      </div>
    );
  }
}

export default Modals;