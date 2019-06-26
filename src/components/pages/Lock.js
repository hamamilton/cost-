import React from 'react';
import { 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBModal,
  MDBMask,
  MDBInput,
  MDBIcon,
  MDBView,
  MDBBtn
} from 'mdbreact';
import "./Lock.css";

const Lock = () => {

  return (
    <div id="lock">
      <MDBView>
        <MDBMask
          className="d-flex justify-content-center align-items-center"
          overlay="stylish-strong"
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol md="10" lg="6" xl="5" sm="12" className="mt-5 mx-auto">
                <MDBModal size="sm" cascading className="modal-avatar" isOpen={true} backdrop={false} toggle={()=> true}>
                  <MDBModalHeader className="mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg" alt="avatar" className="rounded-circle img-responsive" />
                  </MDBModalHeader>
                  <MDBModalBody className="text-center mb-1">
                    <h5 className="mt-1 mb-2">Maria Doe</h5>
                    <form className="mx-3 grey-text">
                      <MDBInput label="Enter password" group type="password" validate/>
                    </form>
                  </MDBModalBody>
                  <MDBModalFooter className="justify-content-center" >
                    <MDBBtn color="cyan">Unlock<MDBIcon icon="sign-in" className="ml-2" /></MDBBtn>
                  </MDBModalFooter>
                </MDBModal>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    </div>
  )
}


export default Lock;