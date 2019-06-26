import React from 'react';
import { 
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBContainer,
} from 'mdbreact';
import LinkCard from '../LinkCard';

const Grid = () => {
  return (
      <MDBContainer fluid>

      <section className="mt-5">
        <h4 className="my-5 dark-grey-text font-bold"><strong>Five grid tiers</strong></h4>
        <MDBRow>
          <MDBCol size="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol sm="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-sm-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol sm="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-sm-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol sm="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-sm-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol lg="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-lg-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-lg-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-lg-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol xl="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-xl-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol xl="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-xl-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol xl="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-xl-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
          
      </section>

      <section>
        <h4 className="my-5 pt-4 dark-grey-text font-bold"><strong>Three equal columns</strong></h4>
        <MDBRow className="mt-4">
          <MDBCol md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </section>

      <section>
        <h4 className="my-5 pt-4 dark-grey-text font-bold"><strong>Two columns</strong></h4>
        <MDBRow>
          <MDBCol md="8">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-8</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </section>


      <section>
        <h4 className="my-5 pt-4 dark-grey-text font-bold"><strong>Mixed: mobile and desktop</strong></h4>
        <MDBRow>
          <MDBCol size="12" md="8">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-12 .col-md-8</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="6" md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6 .col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol size="6" md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6 .col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="6" md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6 .col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="6" md="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6 .col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol md="6">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-6</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="6">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        
      </section>

      <section>
        <h4 className="my-5 pt-4 dark-grey-text font-bold"><strong>Mixed: mobile, tablet, and desktop</strong></h4>
        <MDBRow>
          <MDBCol size="12" sm="6" md="8">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-12 .col-sm-6 .col-md-8</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="6" lg="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6 .col-lg-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mt-4">
          <MDBCol size="6" sm="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6 .col-sm-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="6" sm="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6 .col-sm-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol size="6" sm="4">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-6 .col-sm-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <section>
        <h4 className="my-5 pt-4 dark-grey-text font-bold"><strong>Two columns with two nested columns</strong></h4>
        <MDBRow>
          <MDBCol md="8">
            <MDBCard className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="mb-0">.col-md-8</p>
                <MDBRow>
                  <MDBCol md="6">
                    <MDBCard className="grey lighten-2 text-center z-depth-2">
                      <MDBCardBody>
                        <p className="mb-0">.col-md-6</p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="6">
                    <MDBCard className="grey lighten-2 text-center z-depth-2">
                      <MDBCardBody>
                        <p className="mb-0">.col-md-6</p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard  className="white text-center z-depth-2">
              <MDBCardBody>
                <p className="my-5">.col-md-4</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>

      <LinkCard docs="https://mdbootstrap.com/docs/react/layout/grid-usage/"/>

    </MDBContainer>
  );
}

export default Grid;