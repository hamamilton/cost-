import React from 'react';
import { 
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBContainer,
} from 'mdbreact';

import LinkCard from '../LinkCard';

const Utilities = () => {
  return (
      <MDBContainer fluid>

        <p className="description mb-4"><strong>MDB Admin Dashboard</strong> includes dozens of utilities—classes with a single purpose. They’re designed to reduce the frequency
            of highly repetitive declarations in your CSS while allowing for quick and easy development.</p>

        <MDBListGroup className="z-depth-1">

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/borders/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Borders</h5>
              </div>
              <p className="mb-1 mr-4">Use border utilities to quickly style the <code>border</code> and <code>border-radius</code> of an
                  element. Great for images, buttons, or any other element.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/clearfix/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Clearfix</h5>
              </div>
              <p className="mb-1 mr-4">Easily clear <code>floats</code> by adding <code>.clearfix</code> to the parent element. Utilizes
              the micro clearfix as popularized by Nicolas Gallagher. Can also be used as a mixin.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/close-icon/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Close icon</h5>
              </div>
              <p className="mb-1 mr-4">Use a generic close icon for dismissing content like modals and alerts. <strong>Be sure to include text for screen readers</strong>,
              as we’ve done with <code>aria-label</code>.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/display/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Display</h5>
              </div>
              <p className="mb-1 mr-4">Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display
              when printing.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/display/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Display</h5>
              </div>
              <p className="mb-1 mr-4">Quickly and responsively toggle the display value of components and more with our display utilities. Includes support for some of the more common values, as well as some extras for controlling display
              when printing.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/embeds/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Embeds</h5>
              </div>
              <p className="mb-1 mr-4">Create responsive video or slideshow embeds based on the width of the parent by creating an intrinsic
              ratio that scales on any device.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/float/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Float</h5>
              </div>
              <p className="mb-1 mr-4">Toggle floats on any element, across any breakpoint, using our responsive float utilities.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/flexbox/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Flexbox</h5>
              </div>
              <p className="mb-1 mr-4">Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more
              with a full suite of responsive flexbox utilities. For more complex implementations, custom CSS
              may be necessary.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/image-replacement/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Image replacement</h5>
              </div>
              <p className="mb-1 mr-4">Swap text for background images with the image replacement class.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/position/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Position</h5>
              </div>
              <p className="mb-1 mr-4">Use these shorthand utilities for quickly configuring the position of an element.</p>
              </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/screenreaders/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Screenreaders</h5>
              </div>
              <p className="mb-1 mr-4">Hide an element to all devices except screen readers with <code>.sr-only</code>. Combine <code>.sr-only</code> with <code>.sr-only-focusable</code> to show the element again when it’s focused (e.g. by a keyboard-only user). Can also be used as mixins.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/sizing/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Sizing</h5>
              </div>
              <p className="mb-1 mr-4">Easily make an element as wide or as tall (relative to its parent) with our width and height utilities. Includes support for <code>25%</code>, <code>50%</code>, <code>75%</code>, and <code>100%</code> by default.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/spacing/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Spacing</h5>
              </div>
              <p className="mb-1 mr-4">Assign responsive-friendly <code>margin</code> or <code>padding</code> values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties. Classes are built from a default Sass map ranging from <code>.25rem</code> to <code>3rem</code>.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/text/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Text</h5>
              </div>
              <p className="mb-1 mr-4">Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/vertical-align/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Vertical align</h5>
              </div>
              <p className="mb-1 mr-4">Change the alignment of elements with the vertical-alignment utilities. Please note that vertical-align only affects inline, inline-block, inline-table, and table cell elements.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>

          <MDBListGroupItem tag="a" href="https://mdbootstrap.com/docs/react/utilities/visibility/" target="_blank" hover className="d-flex justify-content-between align-items-center">
            <div>
              <div className="d-flex w-100 justify-content-between">
                  <h5 className="h5 mb-3">Vertical align</h5>
              </div>
              <p className="mb-1 mr-4">Control the visibility, without modifying the display, of elements with visibility utilities.</p>
            </div>
            <MDBIcon icon="chevron-right" style={{fontSize: '1.3rem'}}/>
          </MDBListGroupItem>
        </MDBListGroup>

        <LinkCard docs="https://mdbootstrap.com/docs/react/css/demo/"/>

      </MDBContainer>
  );
}

export default Utilities;