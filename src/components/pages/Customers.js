import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBTooltip, MDBTable, MDBAvatar, MDBCard, MDBCardBody } from 'mdbreact';
import classnames from 'classnames';
import './Customers.css';

const controls = (
  <td>
    <MDBTooltip domElement>
      <a href="!#"><i className="fa fa-user blue-text"></i></a>
      <span>See Results</span>
    </MDBTooltip>

    <MDBTooltip domElement>
      <a href="!#"><i className="fa fa-pencil teal-text"></i></a>
      <span>Edit</span>
    </MDBTooltip>

    <MDBTooltip domElement>
      <a href="!#"><i className="fa fa-times red-text"></i></a>
      <span>Remove</span>
    </MDBTooltip>
  </td>
)

class Customers extends React.Component {
  constructor(props) {
    super(props);

    this.toggleActiveTab = this.toggleActiveTab.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggleActiveTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <Router>
        <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="8">
              <MDBRow className="mb-1">
                <MDBCol md="9">
                  <h4 className="h4-responsive mt-1">Your Clients</h4>
                </MDBCol>
                <MDBCol md="3">
                  <div className="md-form">
                    <input placeholder="Search..." type="text" id="form5" className="form-control" />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <div className="classic-tabs w-100">
                  <MDBNav classicTabs color="primary">
                    <MDBNavItem>
                      <MDBNavLink to="#" className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.toggleActiveTab('1'); }}>
                        Personal Clients
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#" className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.toggleActiveTab('2'); }}>
                        Corporate Clients
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBTabContent className="card" activeItem={this.state.activeTab}>
                    <MDBTabPane tabId="1">
                      <MDBTable responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Abby</td>
                            <td>Barrett</td>
                            <td>@abbeme</td>
                            {controls}
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Danny</td>
                            <td>Collins</td>
                            <td>@dennis</td>
                            {controls}
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Clara</td>
                            <td>Ericson</td>
                            <td>@claris</td>
                            {controls}
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Jessie</td>
                            <td>Doe</td>
                            <td>@jessiedoeofficial</td>
                            {controls}
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Saul</td>
                            <td>Hudson</td>
                            <td>@slash</td>
                            {controls}
                          </tr>
                        </tbody>
                      </MDBTable>
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                      <MDBTable responsive>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Company Name</th>
                            <th>Username</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>PiedPiper</td>
                            <td>@piedpiper</td>
                            {controls}
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Github, Inc</td>
                            <td>@github</td>
                            {controls}
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Twitter, Inc</td>
                            <td>@twitter</td>
                            {controls}
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Alphabet, Inc</td>
                            <td>@alphabet</td>
                            {controls}
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Adobe Corporation</td>
                            <td>@adobe</td>
                            {controls}
                          </tr>
                        </tbody>
                      </MDBTable>
                    </MDBTabPane>
                  </MDBTabContent>
                </div>
              </MDBRow>
            </MDBCol>
            <MDBCol md="4" className="mb-1">
              <MDBCard className="profile-card">
                <MDBAvatar circle tag="img" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" className="z-depth-1-half mb-4" alt="First sample avatar image" />
                <MDBCardBody className="pt-0 mt-0">
                  <div className="text-center">
                    <h3 className="mb-3 font-weight-bold"><strong>Anna Deynah</strong></h3>
                    <h6 className="font-weight-bold blue-text mb-4">Web Designer</h6>
                  </div>
                  <ul className="striped list-unstyled">
                    <li><strong>E-mail address:</strong> a.doe@example.com</li>
                    <li><strong>Phone number:</strong> +1 234 5678 90</li>
                    <li><strong>Company:</strong> The Company, Inc</li>
                    <li><strong>Twitter username:</strong> @anna.doe</li>
                    <li><strong>Instagram username:</strong> @anna.doe</li>
                  </ul>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Router>
    );
  }
}

export default Customers;