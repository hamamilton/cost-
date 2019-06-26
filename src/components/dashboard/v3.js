import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBProgress,
  MDBBtn,
  MDBTable
} from 'mdbreact';

const DV3 =  () => {

  return (
    <MDBContainer fluid className="mb-5">
      <section>
        <MDBRow>
          <MDBCol xl="3" md="6" className="mb-4">
            <MDBCard cascade className="cascading-admin-card">
              <div className="admin-up">
                <MDBIcon icon="money-bill-alt" className="primary-color"></MDBIcon>
                <div className="data">
                  <p>SALES</p>
                  <h3 className="font-weight-bold dark-grey-text">$ 4 571</h3>
                </div>
              </div>
              <MDBCardBody cascade>
                <MDBProgress value={25} barClassName="bg-primary" height="6px" wrapperStyle={{opacity:'.7'}} className="mb-3"/>
                <p className="card-text">Better than last week (25%)</p>
              </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3" md="6" className="mb-4">
          <MDBCard cascade className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="chart-line" className="warning-color"></MDBIcon>
              <div className="data">
                <p>SUBSCRIPTIONS</p>
                <h3 className="font-weight-bold dark-grey-text">375</h3>
              </div>
            </div>
            <MDBCardBody cascade>
              <MDBProgress value={25} barClassName="red accent-2" height="6px" wrapperStyle={{opacity:'.7'}} className="mb-3"/>
              <p className="card-text">Worse than last week (25%)</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3" md="6" className="mb-4">
          <MDBCard cascade className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1"></MDBIcon>
              <div className="data">
                <p>TRAFFIC</p>
                <h3 className="font-weight-bold dark-grey-text">21 479</h3>
              </div>
            </div>
            <MDBCardBody cascade>
              <MDBProgress value={75} barClassName="red accent-2" height="6px" wrapperStyle={{opacity:'.7'}} className="mb-3"/>
              <p className="card-text">Worse than last week (75%)</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol xl="3" md="6" className="mb-4">
          <MDBCard cascade className="cascading-admin-card">
            <div className="admin-up">
              <MDBIcon icon="chart-bar" className="red accent-2"></MDBIcon>
              <div className="data">
                <p>ORGANIC T.</p>
                <h3 className="font-weight-bold dark-grey-text">4 567</h3>
              </div>
            </div>
            <MDBCardBody cascade>
              <MDBProgress value={25} barClassName="bg-primary" height="6px" wrapperStyle={{opacity:'.7'}} className="mb-3"/>
              <p className="card-text">Better than last week (25%)</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>

    <section>
      <MDBRow>
        <MDBCol lg="6" md="12">
          <MDBCard className="mb-4">
            <MDBCardHeader color="primary">Recent comments and replies</MDBCardHeader>
            <MDBCardBody>
              <MDBTable className="no-header mt-1">
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</td>
                    <td className="hour"><small><span className="grey-text float-right"><i className="fa fa-clock" aria-hidden="true"></i> 12 min</span></small></td>
                  </tr>
                  <tr>
                    <td>Merry Joe</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</td>
                    <td className="hour"><small><span className="grey-text float-right"><i className="fa fa-clock" aria-hidden="true"></i> 12 min</span></small></td>
                  </tr>
                  <tr>
                    <td>Jessie Doe</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</td>
                    <td className="hour"><small><span className="grey-text float-right"><i className="fa fa-clock" aria-hidden="true"></i> 12 min</span></small></td>
                  </tr>
                </tbody>
              </MDBTable>
              <MDBBtn flat rounded className="grey lighten-3 float-right font-weight-bold dark-grey-text">View full report</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-4">
            <MDBCardHeader color="primary">Issues</MDBCardHeader>
            <MDBCardBody>
              <MDBTable className="no-header mt-1">
                <thead>
                  <tr>
                    <th className="font-weight-bold dark-grey-text">Status</th>
                    <th className="font-weight-bold dark-grey-text">Title</th>
                    <th className="font-weight-bold dark-grey-text">User</th>
                    <th className="font-weight-bold dark-grey-text">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="badge green">Open</span></td>
                    <td>Lorem ipsum dolor</td>
                    <td>John Doe</td>
                    <td className="hour"><small><span className="grey-text"><i className="far fa-clock" aria-hidden="true"></i> 12 min</span></small></td>
                  </tr>
                  <tr>
                    <td><span className="badge green">Open</span></td>
                    <td>Lorem ipsum dolor</td>
                    <td>John Doe</td>
                    <td className="hour"><small><span className="grey-text"><i className="far fa-clock" aria-hidden="true"></i> 12 min</span></small></td>
                  </tr>
                  <tr>
                    <td><span className="badge warning-color">In progress</span></td>
                    <td>Lorem ipsum dolor</td>
                    <td>John Doe</td>
                    <td className="hour"><small><span className="grey-text"><i className="far fa-clock" aria-hidden="true"></i> 12 min</span></small></td>
                  </tr>
                  <tr>
                    <td><span className="badge red">Closed</span></td>
                    <td>Lorem ipsum dolor</td>
                    <td>John Doe</td>
                    <td className="hour"><small><span className="grey-text"><i className="far fa-clock" aria-hidden="true"></i> 12 min</span></small></td>
                  </tr>
                </tbody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="6" md="12">
          <MDBCard className="mb-4">
            <MDBCardHeader className="primary-color text-white">Users activity</MDBCardHeader>
              <MDBCardBody>
                <MDBRow className="mb-1">
                  <MDBCol col="4">
                    <small className="grey-text">Pages/Visits</small>
                    <h4>139 419</h4>
                  </MDBCol>
                  <MDBCol col="4">
                    <small className="grey-text">New visitors</small>
                    <h4>51.94%</h4>
                  </MDBCol>
                  <MDBCol col="4">
                    <small className="grey-text">Last week</small>
                    <h4>51 932</h4>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-1">
                  <MDBCol col="4">
                    <small className="grey-text">Pages/Visits</small>
                    <h4>139 419</h4>
                  </MDBCol>
                  <MDBCol col="4">
                    <small className="grey-text">New visitors</small>
                    <h4>51.94%</h4>
                  </MDBCol>
                  <MDBCol col="4">
                    <small>Last week</small>
                    <h4>51 932</h4>
                  </MDBCol>
                </MDBRow>

                <MDBRow className="mb-1">
                  <MDBCol col="4">
                    <small className="grey-text">Pages/Visits</small>
                    <h4>139 419</h4>
                  </MDBCol>
                  <MDBCol col="4">
                    <small className="grey-text">New visitors</small>
                    <h4>51.94%</h4>
                  </MDBCol>
                  <MDBCol col="4">
                    <small className="grey-text">Last week</small>
                    <h4>51 932</h4>
                  </MDBCol>
                </MDBRow>
                <MDBBtn flat rounded className="grey lighten-3 float-right font-weight-bold dark-grey-text">View full report</MDBBtn>
              </MDBCardBody>
            </MDBCard>

            <MDBCard color="red accent-2" className="text-center mb-4 py-3 text-white">
              <MDBIcon icon="bell" size="3x" className="mb-3"/>
              <h4 className="h4-responsive">28 important messages</h4>
            </MDBCard>

            <section className="mt-lg-5">
              <MDBRow>
                <MDBCol md="6" className="mb-4">
                  <MDBCard>
                    <MDBCardHeader color="grey darken-1">Orders</MDBCardHeader>
                    <h6 className="ml-4 pt-4 mt-1 dark-grey-text font-weight-bold">
                      <MDBIcon icon="long-arrow-alt-up" className="blue-text mr-3" aria-hidden="true"/> 2000</h6>
                    <MDBCardBody>
                      <MDBProgress value={45} barClassName="bg-primary" height="6px"/>
                      <p className="font-small grey-text">Better than last week (25%)</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>

                <MDBCol md="6" className="mb-4">
                  <MDBCard>
                    <MDBCardHeader color="warning-color">Monthly Sales</MDBCardHeader>
                    <h6 className="ml-4 pt-4 mt-1 dark-grey-text font-weight-bold">
                      <MDBIcon icon="long-arrow-alt-up" className="blue-text mr-3" aria-hidden="true"/>$ 2000</h6>
                    <MDBCardBody>
                      <MDBProgress value={65} barClassName="bg-primary" height="6px"/>
                      <p className="font-small grey-text">Better than last week (25%)</p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </section>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
  );
}

export default DV3;