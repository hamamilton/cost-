import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTable,
  MDBView,
  MDBListGroup,
  MDBListGroupItem
} from 'mdbreact';
import usFlag from './../../static/flags/us.png';
import inFlag from './../../static/flags/in.png';
import cnFlag from './../../static/flags/cn.png';
import plFlag from './../../static/flags/pl.png';
import itFlag from './../../static/flags/it.png';
import { VectorMap } from 'react-jvectormap';
import { Pie, Bar, Radar } from "react-chartjs-2";

const pieChartData = {
  labels: ['March', 'April', 'May', 'June'],

  datasets: [
    {
      data: [307, 123, 613, 208],
      backgroundColor: ['#F7464A', '#46BFBD', '#42c9ff', '#FDB45C'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#66d3ff', '#FFC870']
    }
  ]
}

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    labels: {
      fontColor: "white",
      fontSize: 18
    }
  },
}

const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 12, 4],
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: '#fff',
    borderWidth: 1
  }]
}
const barChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    labels: {
      fontColor: "white",
      fontSize: 18
    }
  },
  scales: {
    xAxes: [{
      barPercentage: 1,
      gridLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
      },
      ticks: {
        fontColor: "#fff"
      },
    }],
    yAxes: [{
      gridLines: {
        display: true,
        color: 'rgba(0, 0, 0, 0.1)'
      },
      ticks: {
        beginAtZero: true,
        min: 0,
        fontColor: "#fff"
      }
    }]
  }
}
const radarChartData = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      pointColor: 'rgba(220,220,220,1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [65, 59, 90, 81, 56, 55, 40],
    }
  ]
}
const radarChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    labels: {
      fontColor: 'white'
    }
  }
}

const DV4 = () => {

  return (
    <MDBContainer fluid>
      <div className="mb-5">
        <h4 className="text-left font-weight-bold dark-grey-text">Your business is growing</h4>
        <p className="grey-text mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <hr />
      </div>

      <section className="mb-4">
        <MDBCard narrow>
          <MDBRow className="mb-4">
            <MDBCol xl="5" md="12">
              <MDBView cascade className="gradient-card-header light-blue lighten-1">
                <h4 className="h4-responsive font-weight-bold mb-0">Visitors by country</h4>
              </MDBView>
              <MDBCardBody cascade className="pb-0">
                <MDBCardBody className="pt-2">
                  <MDBTable className="no-header">
                    <tbody>
                      <tr>
                        <td><img src={usFlag} className="flag mr-2" alt="flag" /> United States</td>
                        <td>307</td>
                      </tr>
                      <tr>
                        <td><img src={inFlag} className="flag mr-2" alt="flag" /> India</td>
                        <td>504</td>
                      </tr>
                      <tr>
                        <td><img src={cnFlag} className="flag mr-2" alt="flag" /> China</td>
                        <td>613</td>
                      </tr>
                      <tr>
                        <td><img src={plFlag} className="flag mr-2" alt="flag" /> Poland</td>
                        <td>208</td>
                      </tr>
                      <tr>
                        <td><img src={itFlag} className="flag mr-2" alt="flag" /> Italy</td>
                        <td>314</td>
                      </tr>
                    </tbody>
                  </MDBTable>
                  <MDBBtn flat rounded className="grey lighten-3 float-right font-weight-bold dark-grey-text mb-4">View full report</MDBBtn>
                </MDBCardBody>
              </MDBCardBody>
            </MDBCol>
            <MDBCol xl="7" md="12" className="mb-4">
              <MDBView cascade className="gradient-card-header blue-gradient">
                <div style={{ width: '100%', height: 400 }}>
                  <VectorMap map={'world_mill'}
                    backgroundColor="rgba(255,255,255,0)"
                    containerStyle={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
              </MDBView>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-0">
            <MDBCol md="12">
              <MDBCardBody className="pt-0">
                <MDBTable hover>
                  <thead>
                    <tr className="rgba-stylish-strong white-text">
                      <th>Campaign name</th>
                      <th>Source</th>
                      <th>Conversion rate</th>
                      <th>Invested</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="none-top-border">
                      <td>Newsletter</td>
                      <td>Newsletter</td>
                      <td>5%</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>Facebook</td>
                      <td>Facebook</td>
                      <td>5%</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>Adwords</td>
                      <td>Adwords</td>
                      <td>5%</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>Sponsored post</td>
                      <td>Sponsored post</td>
                      <td>5%</td>
                      <td>$100</td>
                    </tr>
                    <tr>
                      <td>Newsletter 2</td>
                      <td>Newsletter 2</td>
                      <td>5%</td>
                      <td>$100</td>
                    </tr>
                  </tbody>
                </MDBTable>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </section>
      <section className="mb-5">
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-4">
            <MDBCard narrow>
              <MDBView cascade className="gradient-card-header gradient-card-header deep-blue-gradient">
                <Pie data={pieChartData} options={pieChartOptions} />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <MDBListGroup className="list-panel">
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Cras justo odio <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Dapibus ac facilisi <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Morbi leo risus <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Porta ac consectet <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Vestibulum at eros<MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-4">
            <MDBCard narrow>
              <MDBView cascade className="gradient-card-header primary-color gradient-card-header blue-gradient">
                <Bar data={barChartData} options={barChartOptions} />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <MDBListGroup className="list-panel">
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Cras justo odio <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Dapibus ac facilisi <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Morbi leo risus <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Porta ac consectet <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Vestibulum at eros<MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="4" md="12" className="mb-4">
            <MDBCard narrow>
              <MDBView cascade className="gradient-card-header gradient-card-header purple-gradient">
                <Radar data={radarChartData} options={radarChartOptions} />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <MDBListGroup className="list-panel">
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Cras justo odio <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Dapibus ac facilisi <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Morbi leo risus <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Porta ac consectet <MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                  <MDBListGroupItem tag="a" href="#" className="d-flex justify-content-between dark-grey-text">Vestibulum at eros<MDBIcon icon="wrench" className="ml-auto" /></MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

export default DV4;