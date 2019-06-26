import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
  MDBCardGroup
} from 'mdbreact';
import LinkCard from '../LinkCard';
import './panels.css';

const Panels = () => {
  return (
    <div id="panels">
      <MDBContainer fluid>

        <h5 className="my-5 dark-grey-text font-weight-bold">Background variants</h5>

        <MDBRow>
          <MDBCol md="6" className="mb-4">
            <MDBCard color="indigo" text="white" className="text-center mb-4">
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </MDBCardBody>
            </MDBCard>

            <MDBCard color="pink lighten-2" text="white" className="text-center mb-4">
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </MDBCardBody>
            </MDBCard>

            <MDBCard color="info-color" text="white" className="text-center mb-4">
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="text-center mb-4 dark-grey">
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6">
            <MDBCard color="red lighten-1" text="white" className="text-center mb-4">
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </MDBCardBody>
            </MDBCard>
            <MDBCard color="success-color" text="white" className="text-center mb-4">
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </MDBCardBody>
            </MDBCard>
            <MDBCard color="mdb-color lighten-2" text="white" className="text-center mb-4">
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="text-center mb-4 dark-grey-text">
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h5 className="my-5 dark-grey-text font-weight-bold">Basic examples</h5>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard className="card-body">
              <MDBCardTitle>Panel Title</MDBCardTitle>
              <MDBCardText className="mt-4 mb-4">Some quick example text to build on the panel title and make up the bulk of the panel's content.</MDBCardText>
              <div className="flex-row">
                <a href="#!">Card link</a>
                <a href="#!" style={{ marginLeft: '1.25rem' }}>Another link</a>
              </div>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard>
              <MDBCardHeader color="deep-orange lighten-1">Featured</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                <MDBBtn color="deep-orange">go somewhere</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard className="text-center">
              <MDBCardHeader color="success-color">Featured</MDBCardHeader>
              <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>With supporting text below as a natural lead-in to additional content.</MDBCardText>
                <MDBBtn color="success" size="sm">go somewhere</MDBBtn>
              </MDBCardBody>
              <MDBCardFooter color="success-color">2 days ago</MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h5 className="my-5 dark-grey-text font-weight-bold">Border examples</h5>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard border="primary" className="m-3">
              <MDBCardHeader>Header</MDBCardHeader>
              <MDBCardBody className="text-primary">
                <MDBCardTitle tag="h5">Primary card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard border="secondary" className="m-3">
              <MDBCardHeader>Header</MDBCardHeader>
              <MDBCardBody className="text-secondary">
                <MDBCardTitle tag="h5">Secondary card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard border="danger" className="m-3">
              <MDBCardHeader>Header</MDBCardHeader>
              <MDBCardBody className="text-danger">
                <MDBCardTitle tag="h5">Danger card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h5 className="my-5 dark-grey-text font-weight-bold">Mixied utilities</h5>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBCard border="success" className="m-3">
              <MDBCardHeader border="success">Header</MDBCardHeader>
              <MDBCardBody className="text-success">
                <MDBCardTitle tag="h5">Primary card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter border="success">Footer</MDBCardFooter>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard border="warning" className="m-3">
              <MDBCardHeader border="warning">Header</MDBCardHeader>
              <MDBCardBody className="text-warning">
                <MDBCardTitle tag="h5">Secondary card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter border="warning">Footer</MDBCardFooter>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" lg="4" className="mb-4">
            <MDBCard border="info" className="m-3">
              <MDBCardHeader border="info">Header</MDBCardHeader>
              <MDBCardBody className="text-info">
                <MDBCardTitle tag="h5">Danger card title</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter border="info">Footer</MDBCardFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <h5 className="my-5 dark-grey-text font-weight-bold">Columns</h5>
        <MDBRow>

          <MDBCardGroup column>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle tag="h5">
                  Panel title that wraps to a new line
                </MDBCardTitle>
                <MDBCardText>
                  This is a longer panel with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
              </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.
              </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in
                  <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </MDBCard>

            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  This panel has supporting text below as a natural lead-in to
                  additional content.
                </MDBCardText>
                <MDBCardText small muted>
                  Last updated 3 mins ago
              </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard color="info-color" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat.
              </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in
                  <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </MDBCard>

            <MDBCard className="text-center">
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  This panel has supporting text below as a natural lead-in to
                  additional content.
                </MDBCardText>
                <MDBCardText small muted>
                  Last updated 3 mins ago
              </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="text-right p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.
              </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Someone famous in
                  <cite title="Source Title">Source Title</cite>
                  </small>
                </footer>
              </blockquote>
            </MDBCard>

            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  This is a wider panel with supporting text below as a natural
                  lead-in to additional content. This panel has even longer
                  content than the first to show that equal height action.
                </MDBCardText>
                <MDBCardText small muted>
                  Last updated 3 mins ago
              </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle tag="h5">
                  Panel title that wraps to a new line
                </MDBCardTitle>
                <MDBCardText>
                  This is a longer panel with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
              </MDBCardText>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="text-center">
              <MDBCardBody>
                <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
                <MDBCardText>
                  This is a wider panel with supporting text below as a natural
                  lead-in to additional content. This panel has even longer
                  content than the first to show that equal height action.
                </MDBCardText>
                <MDBCardText small muted>
                  Last updated 3 mins ago
              </MDBCardText>
              </MDBCardBody>
            </MDBCard>

          </MDBCardGroup>
        </MDBRow>

        <LinkCard docs="https://mdbootstrap.com/docs/react/components/panels/" />

      </MDBContainer>
    </div>
  );
}

export default Panels;