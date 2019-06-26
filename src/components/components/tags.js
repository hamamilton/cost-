import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBChip,
  MDBBadge,
  MDBIcon
} from 'mdbreact';
import LinkCard from '../LinkCard';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // No avatars:
      show1: true,
      show2: true,
      show3: true
    }
  }

  handleCloseHere = param => e => {
    this.setState({
      ["show" + param]: false
    });
  };

  render() {

    const { show1, show2, show3 } = this.state

    return (
      <MDBContainer fluid>

        <section>
          <h5 className="mt-5 mb-5 dark-grey-text font-weight-bold">Basic examples</h5>
          <MDBRow className="pb-4">
            <MDBCol md="12" lg="4" className="mt-2 mb-4">
              <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" alt="Contact Person" bgColor="pink lighten-4">
                Jane Doe
                    </MDBChip>
              <MDBChip src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" alt="Contact Person" bgColor="pink lighten-4">
                Anna Black
                    </MDBChip>

              {show1 && <MDBChip bgColor="pink lighten-4" close handleClose={this.handleCloseHere(1)}>
                Tag 1
                    </MDBChip>}
              {show2 && <MDBChip bgColor="pink lighten-4" close handleClose={this.handleCloseHere(2)}>
                Tag 2
                    </MDBChip>}
              {show3 && <MDBChip bgColor="pink lighten-4" close handleClose={this.handleCloseHere(3)}>
                Tag 3
                    </MDBChip>}
            </MDBCol>

            <MDBCol md="8" lg="6" className="mb-4">
              <h1>Example heading <MDBBadge color="red">New</MDBBadge></h1>
              <h2>Example heading <MDBBadge color="blue">New</MDBBadge></h2>
              <h3>Example heading <MDBBadge color="pink">New</MDBBadge></h3>
              <h4>Example heading <MDBBadge color="green">New</MDBBadge></h4>
              <h5>Example heading <MDBBadge color="grey">New</MDBBadge></h5>
              <h6>Example heading <MDBBadge color="indigo">New</MDBBadge></h6>
            </MDBCol>

            <MDBCol md="4" lg="2" className="mb-4">
              <MDBBadge color="default">Default</MDBBadge> <br />
              <MDBBadge color="primary">Primary</MDBBadge> <br />
              <MDBBadge color="success">Success</MDBBadge> <br />
              <MDBBadge color="info">Info</MDBBadge> <br />
              <MDBBadge color="warning">Warning</MDBBadge> <br />
              <MDBBadge color="danger">Danger</MDBBadge>
            </MDBCol>
          </MDBRow>
        </section>

        <section>
          <h5 className="mt-5 mb-5 dark-grey-text font-weight-bold">Pill badges</h5>
          <MDBRow className="pb-4">
            <MDBCol md="8" lg="6" className="mb-4">
              <MDBBadge className="mr-2" pill color="default">Default</MDBBadge>
              <MDBBadge className="mr-2" pill color="primary">Primary</MDBBadge>
              <MDBBadge className="mr-2" pill color="success">Success</MDBBadge>
              <MDBBadge className="mr-2" pill color="info">Info</MDBBadge>
              <MDBBadge className="mr-2" pill color="warning">Warning</MDBBadge>
              <MDBBadge className="mr-2" pill color="danger">Danger</MDBBadge>
              <MDBBadge className="mr-2" pill color="light">Light</MDBBadge>
              <MDBBadge className="mr-2" pill color="dark">Dark</MDBBadge>
            </MDBCol>
          </MDBRow>
        </section>

        <section>
          <h5 className="mt-5 mb-5 dark-grey-text font-weight-bold">Badges with icons</h5>
          <MDBRow className="pb-4">
            <MDBCol md="8" lg="8" className="mb-4">
              <MDBBadge className="mr-2" color="default"><MDBIcon fab icon="facebook" /></MDBBadge>
              <MDBBadge className="mr-2" color="primary"><MDBIcon fab icon="instagram" /></MDBBadge>
              <MDBBadge className="mr-2" color="success"><MDBIcon fab icon="snapchat-ghost" /></MDBBadge>
              <MDBBadge className="mr-2" color="info"><MDBIcon icon="anchor" /></MDBBadge>
              <MDBBadge className="mr-2" color="danger"><MDBIcon icon="battery-three-quarters" /></MDBBadge>
              <MDBBadge className="mr-2" color="pink"><MDBIcon icon="wheelchair" /></MDBBadge>
              <MDBBadge className="mr-2" color="light-blue"><MDBIcon icon="heart" /></MDBBadge>
              <MDBBadge className="mr-2" color="indigo"><MDBIcon icon="bullhorn" /></MDBBadge>
              <MDBBadge className="mr-2" color="purple"><MDBIcon icon="comments" /></MDBBadge>
              <MDBBadge className="mr-2" color="orange"><MDBIcon icon="coffee" /></MDBBadge>
              <MDBBadge className="mr-2" color="green"><MDBIcon icon="user" /></MDBBadge>

              <MDBBadge className="mr-2" color="indigo"><MDBIcon fab icon="android" size="2x" /></MDBBadge>
              <MDBBadge className="mr-2" color="cyan"><MDBIcon icon="cog" size="2x" /></MDBBadge>
              <MDBBadge className="mr-2" color="orange"><MDBIcon fab icon="btc" size="2x" /></MDBBadge>
              <MDBBadge className="mr-2" color="teal"><MDBIcon icon="heart" size="2x" /></MDBBadge>
              <MDBBadge className="mr-2" color="green"><MDBIcon fab icon="apple" size="2x" /></MDBBadge>
              <MDBBadge className="mr-2" color="purple"><MDBIcon icon="users" size="2x" /></MDBBadge>

            </MDBCol>
          </MDBRow>
        </section>

        <LinkCard docs="https://mdbootstrap.com/docs/react/components/badges/" />
      </MDBContainer>
    );
  }
}

export default Tags;