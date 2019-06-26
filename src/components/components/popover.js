import React from 'react';
import {
  MDBContainer,
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody,
  MDBRow,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol
} from 'mdbreact';
import LinkCard from '../LinkCard';

const Popovers = () => {
  return (
    <div id="popovers">
      <MDBContainer fluid>
        <MDBRow center>
          <MDBCol xl="10" md="12">
            <h5 className="my-5 dark-grey-text font-weight-bold">Four directions</h5>

            <MDBCard className="py-5">
              <MDBCardBody className="d-flex justify-content-center">
                <MDBPopover
                  popover
                  clickable
                  id="popper1"
                >
                  <MDBBtn>popover on top</MDBBtn>
                  <div>
                    <MDBPopoverHeader className="d-flex justify-content-between align-items-center">popover on top</MDBPopoverHeader>
                    <MDBPopoverBody>
                      Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                      Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </MDBPopoverBody>
                  </div>
                </MDBPopover>

                <MDBPopover
                  placement="right"
                  popover
                  clickable
                  id="popper2"
                >
                  <MDBBtn>popover on right</MDBBtn>
                  <div>
                    <MDBPopoverHeader>popover on right</MDBPopoverHeader>
                    <MDBPopoverBody>
                      Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                      Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </MDBPopoverBody>
                  </div>
                </MDBPopover>

                <MDBPopover
                  placement="bottom"
                  popover
                  clickable
                  id="popper3"
                >
                  <MDBBtn>popover on bottom</MDBBtn>
                  <div>
                    <MDBPopoverHeader>popover on bottom</MDBPopoverHeader>
                    <MDBPopoverBody>
                      Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                      Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </MDBPopoverBody>
                  </div>
                </MDBPopover>

                <MDBPopover
                  placement="left"
                  popover
                  clickable
                  id="popper4"
                >
                  <MDBBtn>popover on left</MDBBtn>
                  <div>
                    <MDBPopoverHeader>popover on left</MDBPopoverHeader>
                    <MDBPopoverBody>
                      Sed posuere consectetur est at lobortis. Aenean eu leo quam.
                      Pellentesque ornare sem lacinia quam venenatis vestibulum.
                  </MDBPopoverBody>
                  </div>
                </MDBPopover>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow center>
          <MDBCol xl="10" md="12">
            <h5 className="my-5 dark-grey-text font-weight-bold">Popovers with image</h5>
            <MDBCard className="py-5">
              <MDBCardBody className="d-flex justify-content-center">
                <MDBPopover
                  placement="left"
                  popover
                  isVisible
                  clickable
                  id="popper5"
                >
                  <MDBBtn >popover on left</MDBBtn>
                  <div>
                    <MDBPopoverBody>
                      <img src="https://mdbootstrap.com/img/Others/documentation/img%20(30)-mini.jpg" alt="" />
                    </MDBPopoverBody>
                  </div>
                </MDBPopover>

                <MDBPopover
                  placement="bottom"
                  popover
                  clickable
                  id="popper6"
                >
                  <MDBBtn >popover on bottom</MDBBtn>
                  <div>
                    <MDBPopoverBody>
                      <img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" alt="" />
                    </MDBPopoverBody>
                  </div>
                </MDBPopover>

                <MDBPopover
                  placement="top"
                  popover
                  clickable
                >
                  <MDBBtn >popover on top</MDBBtn>
                  <div>
                    <MDBPopoverBody>
                      <img src="//placehold.it/100x50" alt="" />
                    </MDBPopoverBody>
                  </div>
                </MDBPopover>

                <MDBPopover
                  placement="right"
                  popover
                  clickable
                  id="popper7"
                >
                  <MDBBtn >popover on right</MDBBtn>
                  <div>
                    <MDBPopoverBody>
                      <img src="//placehold.it/50x50" alt="" />
                    </MDBPopoverBody>
                  </div>
                </MDBPopover>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <LinkCard docs="https://mdbootstrap.com/docs/react/advanced/popovers/" />
      </MDBContainer>
    </div>
  );
}

export default Popovers;