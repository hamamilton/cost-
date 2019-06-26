import React from 'react';
import { 
    MDBCard,
    MDBCardBody,
    toast,
    ToastContainer,
    MDBBtn,
} from 'mdbreact';
import LinkCard from '../LinkCard';

class Alerts extends React.Component {

  notify(type, position='top-right'){
    return () => {
      switch (type) {
        case 'info':
          toast.info('Hi! I am an info message!', {
            autoClose: 3000,
            position: position
          });
          break;
        case 'success':
          toast.success('Hi! I am a success message', {
            position: position,
          });
          break;
        case 'warning':
          toast.warn('Hi! I am a warning message', {
            position: position
          });
          break;
        case 'error':
          toast.error('Well, I am an error message', {
            position: position
          });
          break;
          default:
      }
    };
  };

  render() {
    return (
      <>
        <MDBCard className="text-center mb-5 py-5">
          <MDBCardBody>
            <h4 className="mb-4 dark-grey-text font-weight-bold"><strong>Types</strong></h4>
            <MDBBtn color="info" onClick={this.notify('info')}>Info message</MDBBtn>
            <MDBBtn color="warning" onClick={this.notify('warning')}>Warning message</MDBBtn>
            <MDBBtn color="success" onClick={this.notify('success')}>Success message</MDBBtn>
            <MDBBtn color="danger" onClick={this.notify('error')}>Error message</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className="text-center mb-5 py-5">
          <MDBCardBody>
            <h4 className="mb-4 dark-grey-text font-weight-bold"><strong>Position</strong></h4>

            <div className="mb-4">
              <MDBBtn color="indigo" onClick={this.notify('info', 'top-left')}>Top left</MDBBtn>
              <MDBBtn color="indigo" onClick={this.notify('info', 'top-center')}>Top center</MDBBtn>
              <MDBBtn color="indigo" onClick={this.notify('info', 'top-right')}>Top right</MDBBtn>
            </div>
            <div className="mb-4">
              <MDBBtn color="indigo" onClick={this.notify('info', 'bottom-left')}>Bottom left</MDBBtn>
              <MDBBtn color="indigo" onClick={this.notify('info', 'bottom-center')}>Bottom center</MDBBtn>
              <MDBBtn color="indigo" onClick={this.notify('info', 'bottom-right')}>Bottom right</MDBBtn>
            </div>
          </MDBCardBody>
        </MDBCard>
        <ToastContainer
          hideProgressBar={true}
          newestOnTop={true}
          autoClose={5000}
        />
          <LinkCard docs="https://mdbootstrap.com/plugins/react/notifications/"/>
      </>
    );
  }
}

export default Alerts;