import React from 'react';
import { 
  MDBRow,
  MDBCol,
  MDBCard,
  MDBView,
  MDBCardBody,
  MDBInput,
  MDBContainer,
  MDBAvatar,
  MDBBtn,
} from 'mdbreact';

import './v2.css';

const PV2 =  () => {
  return (
    <div id="profile-v2" className="mb-5">
       <MDBContainer fluid>
           <MDBRow>
               <MDBCol lg="4" className="mb-4">
                   <MDBCard narrow>
                       <MDBView cascade className="mdb-color lighten-3 card-header">
                           <h5 className="mb-0 font-weight-bold text-center text-white">Edit Photo</h5>
                       </MDBView>
                       <MDBCardBody className="text-center">
                           <MDBAvatar tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="User Photo"  className="z-depth-1 mb-3 mx-auto"/>

                           <p className="text-muted"><small>Profile photo will be changed automatically</small></p>
                           <MDBRow center>
                              <MDBBtn color="info" rounded size="sm">
                              Upload New Photo</MDBBtn>
                              <MDBBtn color="danger" rounded size="sm">
                              Delete</MDBBtn>
                           </MDBRow>
                       </MDBCardBody>

                   </MDBCard>

               </MDBCol>
               <MDBCol lg="8" className="mb-r">

                   <MDBCard narrow>

                      <MDBView cascade className="mdb-color lighten-3 card-header">
                           <h5 className="mb-0 font-weight-bold text-center text-white">Edit Account Details</h5>
                       </MDBView>
                       <MDBCardBody className="text-center">
                               <MDBRow>
                                   <MDBCol md="6">
                                          <MDBInput
                                          type="text"
                                          label="Company"
                                          value="Company, Inc."
                                          disabled
                                        />
                                   </MDBCol>
                                   <MDBCol md="6">
                                       <MDBInput
                                          type="text"
                                          label="Username"
                                        />
                                   </MDBCol>
                               </MDBRow>
                               <MDBRow>
                                   <MDBCol md="6">
                                       <MDBInput
                                          type="text"
                                          label="First name"
                                        />
                                   </MDBCol>
                                   <MDBCol md="6">
                                       <MDBInput
                                          type="text"
                                          label="Last name"
                                        />
                                   </MDBCol>
                               </MDBRow>
                               <MDBRow>
                                   <MDBCol md="6">
                                       <MDBInput
                                          type="text"
                                          label="Email address"
                                        />
                                   </MDBCol>
                                   <MDBCol md="6">
                                       <MDBInput
                                          type="text"
                                          label="Website address"
                                        />
                                   </MDBCol>
                               </MDBRow>
                               <MDBRow>
                                   <MDBCol md="12">
                                       <MDBInput
                                          type="textarea"
                                          label="About me"
                                        />
                                   </MDBCol>
                               </MDBRow>
                               <MDBRow>
                                 <MDBCol md="12" className="text-center">
                                    <MDBBtn color="info" type="submit" rounded>Update account</MDBBtn>
                                 </MDBCol>
                              </MDBRow>
                       </MDBCardBody>
                   </MDBCard>
               </MDBCol>
           </MDBRow>
        </MDBContainer>
    </div>
  );
}

export default PV2;