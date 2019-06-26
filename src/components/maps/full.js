import React from 'react';
import { MDBContainer } from 'mdbreact';

import GoogleMapReact from 'google-map-react';

const MFull = () => {
  const location = {lat: 40.725118, lng: -73.997699}
  
  return (
    <div id="maps-full">
      <MDBContainer fluid>
          <GoogleMapReact
            defaultCenter={location}
            defaultZoom={14}
            style={{height: '100vh'}}
          >
          </GoogleMapReact>
      </MDBContainer>
    </div>
  );
}

export default MFull;