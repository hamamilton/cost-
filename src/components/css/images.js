import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBView,
  MDBMask
} from 'mdbreact';
import LinkCard from '../LinkCard';

const Images = () => {
  return (
    <MDBContainer fluid>
      <section id="responsive-images">

        <h4 className="mt-lg-5 mb-5 font-bold"><strong>Responsiveness</strong></h4>

        <MDBRow className="mb-4">
          <MDBCol md="4">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" className="img-fluid" alt="Responsive example" />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-4">
          <MDBCol md="6">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" className="img-fluid" alt="Responsive example" />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-4">
          <MDBCol md="8">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg" className="img-fluid" alt="Responsive example" />
          </MDBCol>
        </MDBRow>

      </section>

      <hr className="my-5" />

      <section id="image-thumbnails">
        <h4 className="mt-4 mb-5 font-bold dark-grey-text"><strong>With shadows</strong></h4>

        <section>
          <MDBRow>
            <MDBCol md="12" lg="4" className="mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" className="img-fluid z-depth-1" alt="Example" />
            </MDBCol>
            <MDBCol md="6" lg="4" className="mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" className="img-fluid z-depth-1-half" alt="Example" />
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" className="img-fluid z-depth-2" alt="Example" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md="12" lg="4" className="mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" className="img-fluid z-depth-3" alt="Example" />
            </MDBCol>

            <MDBCol md="6" lg="4" className="mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" className="img-fluid z-depth-4" alt="Example" />
            </MDBCol>

            <MDBCol className="col-lg-4 col-md-6 mb-4">
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(54).jpg" className="img-fluid z-depth-5" alt="Example" />
            </MDBCol>
          </MDBRow>

        </section>

      </section>

      <hr className="my-5" />

      <section>
        <h4 className="my-5 font-bold dark-grey-text"><strong>Overlays</strong></h4>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" className="img-fluid" alt="Example" />
              <MDBMask overlay="teal-slight" className="flex-center">
                <p className="white-text">super light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" className="img-fluid" alt="Example" />
              <MDBMask overlay="teal-light" className="flex-center">
                <p className="white-text">light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" className="img-fluid" alt="Example" />
              <MDBMask overlay="teal-strong" className="flex-center">
                <p className="white-text">strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

      </section>

      <hr className="my-5" />

      <section>

        <h4 className="my-5 font-bold dark-grey-text"><strong>Patterns</strong></h4>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern one." />
              <MDBMask pattern={1} className="flex-center">
                <p className="white-text">.pattern-1</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern two." />
              <MDBMask pattern={2} className="flex-center">
                <p className="white-text">.pattern-2</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern three." />
              <MDBMask pattern={3} className="flex-center">
                <p className="white-text">.pattern-3</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern four." />
              <MDBMask pattern={4} className="flex-center">
                <p className="white-text">.pattern-4</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern five." />
              <MDBMask pattern={5} className="flex-center">
                <p className="white-text">.pattern-5</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern six." />
              <MDBMask pattern={6} className="flex-center">
                <p className="white-text">.pattern-6</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern seven." />
              <MDBMask pattern={7} className="flex-center">
                <p className="white-text">.pattern-7</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern eight." />
              <MDBMask pattern={8} className="flex-center">
                <p className="white-text">.pattern-8</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" className="img-fluid" alt="Ballons flying over canyons with mask pattern nine." />
              <MDBMask pattern={9} className="flex-center">
                <p className="white-text">.pattern-9</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

      </section>

      <hr className="my-5" />

      <section>

        <h4 className="my-5 font-bold dark-grey-text"><strong>Hover effects</strong></h4>

        <MDBRow className="mt-5">
          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView hover>
              <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" className="img-fluid " alt="Example" />
              <MDBMask overlay="red-strong" className="flex-center">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView hover>
              <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" className="img-fluid " alt="Example" />
              <MDBMask overlay="red-light" className="flex-center">
                <p className="white-text">Strong light</p>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol md="12" lg="4" className="mb-4">
            <MDBView hover>
              <img src="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg" className="img-fluid " alt="Example" />
              <MDBMask overlay="red-slight" className="flex-center">
                <p className="white-text">Slight overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="6" className="mb-4">
            <MDBView zoom hover>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(131).jpg" className="img-fluid " alt="Example" />
              <MDBMask className="flex-center">
                <p className="white-text">Zoom effect</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="5" className="mb-4">
            <h4 className="text-center">Shadow effect</h4>
            <br />
            <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(132).jpg" className="img-fluid rounded-circle hoverable"
              alt="Example" />
          </MDBCol>
        </MDBRow>
      </section>

      <hr className="my-5" />

      <section className="pb-5">
        <h4 className="my-5 font-bold dark-grey-text"><strong>Waves effect (click on the images)</strong></h4>

        <MDBRow>
          <MDBCol mb="4" lg="6">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(54).jpg" className="img-fluid " alt="Sample of waves effect." />
              <MDBMask tag="a" />
            </MDBView>
          </MDBCol>

          <MDBCol mb="4" lg="6">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(53).jpg" className="img-fluid " alt="Sample of waves effect." />
              <MDBMask tag="a" />
            </MDBView>
          </MDBCol>
        </MDBRow>

      </section>
      <LinkCard docs="https://mdbootstrap.com/docs/react/content/images/" />
    </MDBContainer>
  );
}

export default Images;