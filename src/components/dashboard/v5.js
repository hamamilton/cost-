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
  MDBIcon,
  MDBBadge,
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBBtn,
  MDBTable,
  MDBView,
  MDBDatePicker
} from 'mdbreact';

import { Line } from "react-chartjs-2";

const DV5 = () => {
  const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,220,0.2)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        backgroundColor: [
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)'
        ],
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        backgroundColor: [
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)',
          'rgba(255, 255, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)',
          'rgba(255, 255, 255, 1)'
        ],
        borderWidth: 1,
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  }
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      labels: {
        fontColor: "white",
        fontSize: 16
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          color: 'rgba(255, 255, 255, 0.2)'
        },
        ticks: {
          fontColor: "#fff"
        },
      }],
      yAxes: [{
        gridLines: {
          display: true,
          color: 'rgba(255, 255, 255, 0.2)'
        },
        ticks: {
          fontColor: "#fff"
        },
      }]
    }
  };

  return (
    <MDBContainer fluid className="mb-5 pb-5">
      <section className="mb-3">
        <MDBRow>
          <div className="col-md-6 panel-title mb-5 mt-3">
            <h5><span className="px-4 py-3 white-text z-depth-1-half blue lighten-1" style={{ borderRadius: '5px' }}>Search analitycs</span></h5>
          </div>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="4" sm="12">
                    <MDBSelect>
                      <MDBSelectInput selected="Choose time period" />
                      <MDBSelectOptions>
                        <MDBSelectOption disabled>Choose time period</MDBSelectOption>
                        <MDBSelectOption value="1">Today</MDBSelectOption>
                        <MDBSelectOption value="2">Yesterday</MDBSelectOption>
                        <MDBSelectOption value="3">Last 7 days</MDBSelectOption>
                        <MDBSelectOption value="3">Last 30 days</MDBSelectOption>
                        <MDBSelectOption value="3">Last week</MDBSelectOption>
                        <MDBSelectOption value="3">Last month</MDBSelectOption>
                      </MDBSelectOptions>
                    </MDBSelect>
                  </MDBCol>
                  <MDBCol size="4">
                    <small className="grey-text">from:</small>
                    <MDBDatePicker className="my-0 d-inline ml-3" />
                  </MDBCol>
                  <MDBCol size="4">
                    <small className="grey-text">to:</small>
                    <MDBDatePicker className="my-0 d-inline ml-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

      </section>
      <section className="mb-5 pt-5">
        <MDBCard narrow className="mb-5">
          <MDBView cascade className="gradient-card-header blue-gradient">
            <Line data={lineChartData} options={lineChartOptions} height={200} />
          </MDBView>
          <MDBCardBody cascade className="blue-panel text-center">
            <MDBRow className="mx-3 mb-0 text-center text-white">
              <MDBCol className="mt-1 mb-2">
                <div className="btn-group mt-1">
                  <label className="btn btn-info btn-md active mr-1">
                    <input type="checkbox" name="options" id="option1" />Clicks <strong>1000</strong> <MDBIcon icon="arrow-up" className="ml-2 white-text" /><strong> 25%</strong>
                  </label>
                </div>
                <div className="btn-group mt-1">
                  <label className="btn btn-info btn-md mr-1">
                    <input type="checkbox" name="options" id="option2" />Impressions <strong>1000</strong> <MDBIcon icon="arrow-down" className="ml-2 white-text" /><strong> 25%</strong>
                  </label>
                </div>
                <div className="btn-group mt-1">
                  <label className="btn red accent-2 btn-md mr-1">
                    <input type="checkbox" name="options" id="option2" />CTR <strong>5%</strong> <MDBIcon icon="arrow-down" className="ml-2 white-text" /><strong> 25%</strong>
                  </label>
                </div>
                <div className="btn-group mt-1">
                  <label className="btn red accent-2 btn-md mr-1">
                    <input type="checkbox" name="options" id="option2" />Position <strong>4.14</strong> <MDBIcon icon="arrow-down" className="ml-2 white-text" /> <strong> 25%</strong>
                  </label>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-5">
              <MDBCol>
                <MDBBtn color="primary" size="md">Queries</MDBBtn>
                <MDBBtn color="primary" size="md">Pages</MDBBtn>
                <MDBBtn color="primary" size="md">Countries</MDBBtn>
                <MDBBtn color="primary" size="md">Devidces</MDBBtn>
                <MDBBtn color="primary" size="md">Search type</MDBBtn>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <MDBCardBody className="pt-1">
                  <MDBTable responsive>
                    <thead className="rgba-stylish-strong white-text">
                      <tr>
                        <th>Queries</th>
                        <th>Clicks</th>
                        <th>Impressions</th>
                        <th>CTR</th>
                        <th>Position</th>
                        <th>Day</th>
                        <th>Week</th>
                        <th>Month</th>
                        <th>Local</th>
                        <th>Global</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="none-top-border">
                        <td>bootstrap material design</td>
                        <td>1000</td>
                        <td>10000</td>
                        <td>5%</td>
                        <td>3.21</td>
                        <td>2 <MDBBadge color="primary-color">1 <MDBIcon icon="arrow-circle-up" /></MDBBadge></td>
                        <td>2 <MDBBadge color="red accent-2">1 <MDBIcon icon="arrow-circle-down" /></MDBBadge></td>
                        <td>2 <MDBBadge color="grey">0 </MDBBadge></td>
                        <td>200 (US)</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>bootstrap material design</td>
                        <td>1000</td>
                        <td>10000</td>
                        <td>5%</td>
                        <td>3.21</td>
                        <td>2 <MDBBadge color="primary-color">1 <MDBIcon icon="arrow-circle-up" /></MDBBadge></td>
                        <td>2 <MDBBadge color="red accent-2">1 <MDBIcon icon="arrow-circle-down" /></MDBBadge></td>
                        <td>2 <MDBBadge color="grey">0 </MDBBadge></td>
                        <td>200 (US)</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>bootstrap material design</td>
                        <td>1000</td>
                        <td>10000</td>
                        <td>5%</td>
                        <td>3.21</td>
                        <td>2 <MDBBadge color="primary-color">1 <MDBIcon icon="arrow-circle-up" /></MDBBadge></td>
                        <td>2 <MDBBadge color="red accent-2">1 <MDBIcon icon="arrow-circle-down" /></MDBBadge></td>
                        <td>2 <MDBBadge color="grey">0 </MDBBadge></td>
                        <td>200 (US)</td>
                        <td>2000</td>
                      </tr>
                    </tbody>
                  </MDBTable>
                  <div className="d-flex justify-content-between">
                    <MDBSelect>
                      <MDBSelectInput selected="Rows number" />
                      <MDBSelectOptions>
                        <MDBSelectOption disabled>Rows number</MDBSelectOption>
                        <MDBSelectOption value="1">5 rows</MDBSelectOption>
                        <MDBSelectOption value="2">25 rows</MDBSelectOption>
                        <MDBSelectOption value="3">50 rows</MDBSelectOption>
                        <MDBSelectOption value="3">100 rows</MDBSelectOption>
                      </MDBSelectOptions>
                    </MDBSelect>
                    <MDBPagination circle className="my-4 float-right">
                      <li className="page-item disabled clearfix d-none d-md-block"><a className="page-link" href="#!">First</a></li>

                      <MDBPageItem disabled>
                        <MDBPageNav className="page-link" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span className="sr-only">Previous</span>
                        </MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem active>
                        <MDBPageNav className="page-link">
                          1 <span className="sr-only">(current)</span>
                        </MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem>
                        <MDBPageNav className="page-link">2</MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem>
                        <MDBPageNav className="page-link">3</MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem>
                        <MDBPageNav className="page-link">4</MDBPageNav>
                      </MDBPageItem>
                      <MDBPageItem>
                        <MDBPageNav className="page-link">5</MDBPageNav>
                      </MDBPageItem>
                      <li className="page-item clearfix d-none d-md-block"><a className="page-link" href="#!">Last</a></li>
                    </MDBPagination>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </section>
    </MDBContainer>
  );
}

export default DV5;