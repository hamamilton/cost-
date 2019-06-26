import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBTooltip,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol
} from 'mdbreact';
import LinkCard from '../LinkCard';

const Tooltips = () => {
  return (
    <div id="tooltips">
      <MDBContainer fluid >
        <MDBRow center>
          <MDBCol xl="10" md="12">
            <h5 className="my-5 dark-grey-text font-weight-bold">Four directions</h5>
            <MDBCard className="py-5">
              <MDBCardBody className="d-flex justify-content-center">
                <MDBTooltip
                  placement="top"
                >
                  <MDBBtn color="primary">Tooltip on top</MDBBtn>
                  <div>Tooltip on top</div>
                </MDBTooltip>
                <MDBTooltip
                  placement="right"
                >
                  <MDBBtn color="primary">Tooltip on right</MDBBtn>
                  <div>Tooltip on right</div>
                </MDBTooltip>
                <MDBTooltip
                  placement="bottom"
                >
                  <MDBBtn color="primary">Tooltip on bottom</MDBBtn>
                  <div>Tooltip on bottom</div>
                </MDBTooltip>
                <MDBTooltip
                  placement="left"
                >
                  <MDBBtn color="primary">Tooltip on left</MDBBtn>
                  <div>Tooltip on left</div>
                </MDBTooltip>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow center>
          <MDBCol xl="10" md="12">
            <h5 className="my-5 dark-grey-text font-weight-bold">Custom HTML</h5>
            <MDBCard className="py-5">
              <MDBCardBody className="d-flex justify-content-center">
                <MDBTooltip
                  placement="top"
                >
                  <MDBBtn color="primary">Tooltip on top</MDBBtn>
                  <div><em>Tooltip</em> <u>on</u><b> top</b></div>
                </MDBTooltip>
                <MDBTooltip
                  placement="right"
                >
                  <MDBBtn color="primary">Tooltip on right</MDBBtn>
                  <div><em>Tooltip</em> <u>on</u><b> right</b></div>
                </MDBTooltip>
                <MDBTooltip
                  placement="bottom"
                >
                  <MDBBtn color="primary">Tooltip on bottom</MDBBtn>
                  <div><em>Tooltip</em> <u>on</u><b> bottom</b></div>
                </MDBTooltip>
                <MDBTooltip
                  placement="left"
                >
                  <MDBBtn color="primary">Tooltip on left</MDBBtn>
                  <div><em>Tooltip</em> <u>on</u><b> left</b></div>
                </MDBTooltip>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow center>
          <MDBCol xl="10" md="12">
            <h5 className="my-5 dark-grey-text font-weight-bold">Disabled</h5>
            <MDBCard className="py-5">
              <MDBCardBody className="d-flex justify-content-center">
                <MDBTooltip
                  placement="top"
                  domElement
                >
                  <span><MDBBtn disabled color="primary">Tooltip on top</MDBBtn></span>
                  <div>Disabled tooltip</div>
                </MDBTooltip>
                <MDBTooltip
                  placement="right"
                  domElement
                >
                  <span><MDBBtn disabled color="primary">Tooltip on right</MDBBtn></span>
                  <div>Disabled tooltip</div>
                </MDBTooltip>
                <MDBTooltip
                  placement="bottom"
                  domElement
                >
                  <span> <MDBBtn disabled color="primary">Tooltip on bottom</MDBBtn></span>
                  <div>Disabled tooltip</div>
                </MDBTooltip>
                <MDBTooltip
                  placement="left"
                  domElement
                >
                  <span><MDBBtn disabled color="primary">Tooltip on left</MDBBtn></span>
                  <div>Disabled tooltip</div>
                </MDBTooltip>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <LinkCard docs="https://mdbootstrap.com/docs/react/advanced/tooltips/" />
      </MDBContainer>
    </div >
  );
}

export default Tooltips;