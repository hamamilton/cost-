import React from 'react';
import { 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  MDBDatePicker,
  MDBBadge,
  MDBView,
  MDBBtn,
  MDBTable
} from 'mdbreact';
import { Bar, Doughnut } from "react-chartjs-2";
import usFlag from './../../static/flags/us.png';
import inFlag from './../../static/flags/in.png';
import cnFlag from './../../static/flags/cn.png';
import plFlag from './../../static/flags/pl.png';
import itFlag from './../../static/flags/it.png';

const DV2 =  () => {

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

const barChartOptions= {
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

const doughnutChartData = {
  labels: ['March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [240, 50, 130, 40],
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5']
    }
  ]
}

const doughnutChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  legend: {
    labels: {
      fontColor: 'black'
    }
  }
}

  return (
   <MDBContainer fluid className="mb-5">
     <section className="mb-5">
      <MDBCard narrow>
        <MDBRow>
          <MDBCol xl="5" md="12" className="mb-4">
            <MDBView cascade className="gradient-card-header primary-color">
              <h4 className="h4-responsive mb-0 font-weight-bold">Traffic</h4>
            </MDBView>
            <MDBCardBody cascade className="pb-0"> 
              <MDBRow className="card-body pt-3">
                <MDBCol md="12" className="mb-3">
                <h4>
                  <MDBBadge color="primary color" className="big-badge">Data range</MDBBadge>
                </h4>
                <MDBSelect>
                  <MDBSelectInput selected="Choose time period" />
                  <MDBSelectOptions>
                    <MDBSelectOption disabled>Choose time period</MDBSelectOption>
                    <MDBSelectOption value="1">Today</MDBSelectOption>
                    <MDBSelectOption value="2">Yesterday</MDBSelectOption>
                    <MDBSelectOption value="3">Last 7 days</MDBSelectOption>
                    <MDBSelectOption value="4">Last 30 days</MDBSelectOption>
                    <MDBSelectOption value="5">Last week</MDBSelectOption>
                    <MDBSelectOption value="6">Last month</MDBSelectOption>
                  </MDBSelectOptions>
                </MDBSelect>
                <h4>
                  <MDBBadge color="primary color" className="big-badge">Custom date</MDBBadge>
                </h4>
                <div className="mb-1">
                  <MDBRow>
                    <MDBCol size="6">
                      <small className="grey-text">from:</small>
                      <MDBDatePicker className="my-0 d-inline ml-3"/>
                    </MDBCol>
                    <MDBCol size="6">
                      <small className="grey-text">to:</small>
                      <MDBDatePicker className="my-0 d-inline ml-3"/>
                    </MDBCol>              
                  </MDBRow>
                </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
          <MDBCol xl="7" md="12" className="mb-4">
            <MDBView cascade className="gradient-card-header primary-color">
              <Bar data={barChartData} options={barChartOptions} height={300} width={600}/>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBCard>
     </section>
     <section>  
      <MDBRow>
        <MDBCol md="4">
          <MDBCard className="mb-4">
            <MDBCardBody > 
              <h4 className="h4-responsive text-center mb-3">
                Visits by Browser
              </h4>
              <Doughnut data={doughnutChartData} options={doughnutChartOptions} height={200}/>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBTable responsive className="large-header">
                <thead>
                  <tr>
                    <th className="font-weight-bold dark-grey-text"><strong>Keywords</strong></th>
                    <th className="font-weight-bold dark-grey-text"><strong>Visits</strong></th>
                    <th className="font-weight-bold dark-grey-text"><strong>Pages</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>Material Design</td>
                      <td>15</td>
                      <td>307</td>
                  </tr>
                  <tr>
                      <td>Bootstrap</td>
                      <td>32</td>
                      <td>504</td>
                  </tr>
                  <tr>
                      <td>MDBootstrap</td>
                      <td>41</td>
                      <td>613</td>
                  </tr>
                  <tr>
                      <td>Frontend</td>
                      <td>14</td>
                      <td>208</td>
                  </tr>
                </tbody>
                </MDBTable>
                <MDBBtn flat rounded className="grey lighten-3 float-right font-weight-bold dark-grey-text">View full report</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="8">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBTable responsive className="large-header">
                <thead>
                  <tr>
                    <th className="font-weight-bold dark-grey-text"><strong>Country</strong></th>
                    <th className="font-weight-bold dark-grey-text"><strong>Visits</strong></th>
                    <th className="font-weight-bold dark-grey-text"><strong>Pages</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={usFlag} className="flag" alt="flag"/> United States</td>
                    <td>15</td>
                    <td>307</td>
                  </tr>
                  <tr>
                    <td><img src={inFlag} className="flag" alt="flag"/> India</td>
                    <td>32</td>
                    <td>504</td>
                  </tr>
                  <tr>
                    <td><img src={cnFlag} className="flag" alt="flag"/> China</td>
                    <td>41</td>
                    <td>613</td>
                  </tr>
                  <tr>
                    <td><img src={plFlag} className="flag" alt="flag"/> Poland</td>
                    <td>14</td>
                    <td>208</td>
                  </tr>
                  <tr>
                    <td><img src={itFlag} className="flag" alt="flag"/> Italy</td>
                    <td>24</td>
                    <td>314</td>
                  </tr>
                </tbody>
              </MDBTable>
              <MDBBtn flat rounded className="grey lighten-3 float-right font-weight-bold dark-grey-text">View full report</MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBTable responsive className="large-header mb-1">
                <thead>
                  <tr>
                    <th className="font-weight-bold dark-grey-text"><strong>Browser</strong></th>
                    <th className="font-weight-bold dark-grey-text"><strong>Visits</strong></th>
                    <th className="font-weight-bold dark-grey-text"><strong>Pages</strong></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Google Chrome</td>
                    <td>15</td>
                    <td>307</td>
                  </tr>
                  <tr>
                    <td>Mozilla Firefox</td>
                    <td>32</td>
                    <td>504</td>
                  </tr>
                  <tr>
                    <td>Safari</td>
                    <td>41</td>
                    <td>613</td>
                  </tr>
                  <tr>
                    <td>Opera</td>
                    <td>14</td>
                    <td>208</td>
                  </tr>
                  <tr>
                    <td>Microsoft Edge</td>
                    <td>24</td>
                    <td>314</td>
                  </tr>
                </tbody>
              </MDBTable>
              <MDBBtn flat rounded className="grey lighten-3 float-right font-weight-bold dark-grey-text">View full report</MDBBtn>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
     </section>
    </MDBContainer>
  );
}

export default DV2;