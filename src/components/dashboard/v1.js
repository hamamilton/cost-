import React, { Component } from 'react';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBIcon,
    MDBSelect,
    MDBSelectInput,
    MDBSelectOptions,
    MDBSelectOption,
    MDBDatePicker,
    MDBTooltip,
    MDBSimpleChart,
    MDBBadge,
    MDBView,
    MDBBtn,
    MDBPagination,
    MDBPageItem,
    MDBPageNav,
    MDBCardHeader,
    MDBListGroup,
    MDBListGroupItem,
    MDBProgress,
    MDBTable,
    MDBBtnFixed,
    MDBBtnFixedItem
} from 'mdbreact';
import { Line } from "react-chartjs-2";

class DV1 extends Component {

    state = {
        buttonStyle: {
            transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
            opacity: "0"
        }
    }

    onHover = () => {
        this.setState({
            buttonStyle: {
                transform: "scaleY(1) scaleX(1) translateY(0) translateX(0)",
                opacity: "1"
            }
        });
    }

    onMouseLeave = () => {
        this.setState({
            buttonStyle: {
                transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
                opacity: "0"
            }
        });
    }

    render() {
        const lineChartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    borderColor: '#fff',
                    pointBackgroundColor: 'transparent',
                    borderWidth: 2,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 1,
                    data: [30, 41, 23, 34, 43, 56, 70]
                }
            ]
        };

        const lineChartOptions = {
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
            <>
                <section>
                    <MDBRow>
                        <MDBCol xl="3" md="6" className="mb-5">
                            <MDBCard cascade className="cascading-admin-card">
                                <div className="admin-up">
                                    <MDBIcon far icon="money-bill-alt" className="primary-color mr-3 z-depth-2"></MDBIcon>
                                    <div className="data">
                                        <p>SALES</p>
                                        <h4 className="font-weight-bold dark-grey-text">2000$</h4>
                                    </div>
                                </div>
                                <MDBCardBody cascade>
                                    <MDBProgress value={25} barClassName="bg-primary" height="6px" wrapperStyle={{ opacity: '.7' }} className="mb-3" />
                                    <p className="card-text">Better than last week (25%)</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol xl="3" md="6" className="mb-5">
                            <MDBCard cascade className="cascading-admin-card">
                                <div className="admin-up">
                                    <MDBIcon icon="chart-line" className="warning-color"></MDBIcon>
                                    <div className="data">
                                        <p>SUBSCRIPTIONS</p>
                                        <h4 className="font-weight-bold dark-grey-text">200</h4>
                                    </div>
                                </div>
                                <MDBCardBody cascade>
                                    <MDBProgress value={25} barClassName="red accent-2" height="6px" wrapperStyle={{ opacity: '.7' }} className="mb-3" />
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
                                        <h4 className="font-weight-bold dark-grey-text">20000</h4>
                                    </div>
                                </div>

                                <MDBCardBody cascade>

                                    <MDBProgress value={75} barClassName="red accent-2" height="6px" wrapperStyle={{ opacity: '.7' }} className="mb-3" />
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
                                        <h4 className="font-weight-bold dark-grey-text">2000</h4>
                                    </div>
                                </div>

                                <MDBCardBody cascade>
                                    <MDBProgress value={25} barClassName="bg-primary" height="6px" wrapperStyle={{ opacity: '.7' }} className="mb-3" />
                                    <p className="card-text">Better than last week (25%)</p>
                                </MDBCardBody>

                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </section>

                <section className="my-4">
                    <MDBCard cascade narrow>
                        <section>
                            <MDBRow>
                                <MDBCol xl="5" lg="12" className="mr-0">
                                    <div className="view view-cascade gradient-card-header light-blue lighten-1">
                                        <h2 className="h2-responsive mb-0">Sales</h2>
                                    </div>
                                    <MDBCardBody cascade className="pb-0">
                                        <MDBCardBody className="row pt-3">
                                            <MDBCol md="6">
                                                <p className="lead"><span className="badge info-color p-2">Data range</span></p>
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

                                                <p className="lead mt-5"><span className="badge info-color p-2">Custom date</span></p>
                                                <br />
                                                <div className="mb-1">
                                                    <MDBRow>
                                                        <MDBCol size="12" className="mb-2">
                                                            <small className="grey-text">from:</small>
                                                            <MDBDatePicker className="my-0 d-inline ml-3" />
                                                        </MDBCol>
                                                        <MDBCol size="12">
                                                            <small className="grey-text">to:</small>
                                                            <MDBDatePicker className="my-0 d-inline ml-3" />
                                                        </MDBCol>
                                                    </MDBRow>
                                                </div>

                                            </MDBCol>
                                            <MDBCol md="6" className="text-center">
                                                <div style={{ marginBottom: '0.5rem' }}>Total sales: <strong>$2000</strong>
                                                    <MDBTooltip>
                                                        <MDBBtn color="info" className="btn-sm p2 d-inline"><MDBIcon icon="question" /></MDBBtn>
                                                        <div>Total sales in the given period</div>
                                                    </MDBTooltip>
                                                </div><br />

                                                <div style={{ marginBottom: '0.5rem' }}>Average sales: <strong>$100</strong>
                                                    <MDBTooltip>
                                                        <MDBBtn color="info" className="btn-sm p2 d-inline"><MDBIcon icon="question" /></MDBBtn>
                                                        <div>Average daily sales in the given period</div>
                                                    </MDBTooltip>
                                                </div><br />
                                                <div className="my-4">
                                                    <MDBSimpleChart strokeColor="red" strokeWidth={3} width={100} height={100} percent={76} labelFontWeight="normal" />
                                                </div>
                                                <h5>
                                                    <MDBBadge color="red" className="accent-2 p-2">Change <MDBIcon icon="arrow-circle-down" className="ml-1" /></MDBBadge>
                                                    <MDBTooltip>
                                                        <MDBBtn color="info" className="btn-sm p2 d-inline"><MDBIcon icon="question" /></MDBBtn>
                                                        <div>Percentage change compared to the same period in the past</div>
                                                    </MDBTooltip>
                                                </h5>
                                            </MDBCol>
                                        </MDBCardBody>
                                    </MDBCardBody>
                                </MDBCol>
                                <MDBCol xl="7" lg="12" className="mb-4">
                                    <MDBView cascade className="gradient-card-header blue-gradient">
                                        <Line data={lineChartData} options={lineChartOptions} />
                                    </MDBView>
                                </MDBCol>
                            </MDBRow>
                        </section>

                        <section>
                            <div className="p-2 mx-4 mb-5" style={{ border: '1px solid #e0e0e9' }}>
                                <MDBRow>
                                    <MDBCol xl="3" lg="6" md="12">
                                        <MDBSelect style={{ margin: 0 }}>
                                            <MDBSelectInput selected="Bulk actions" />
                                            <MDBSelectOptions>
                                                <MDBSelectOption disabled>Bulk actions</MDBSelectOption>
                                                <MDBSelectOption value="1">Delete</MDBSelectOption>
                                                <MDBSelectOption value="2">Export</MDBSelectOption>
                                                <MDBSelectOption value="3">Change segment</MDBSelectOption>
                                            </MDBSelectOptions>
                                        </MDBSelect>
                                    </MDBCol>

                                    <MDBCol xl="3" lg="6" md="12">
                                        <MDBSelect style={{ margin: 0 }}>
                                            <MDBSelectInput selected="Show only" />
                                            <MDBSelectOptions>
                                                <MDBSelectOption disabled>Show only</MDBSelectOption>
                                                <MDBSelectOption value="1">All (2000)</MDBSelectOption>
                                                <MDBSelectOption value="2">Never opened (200)</MDBSelectOption>
                                                <MDBSelectOption value="3">Opened but unanswered (1600)</MDBSelectOption>
                                                <MDBSelectOption value="4">Answered (200)</MDBSelectOption>
                                                <MDBSelectOption value="5">Unsubscribed (50)</MDBSelectOption>
                                            </MDBSelectOptions>
                                        </MDBSelect>
                                    </MDBCol>
                                    <MDBCol xl="3" lg="6" md="12">
                                        <MDBSelect style={{ margin: 0 }}>
                                            <MDBSelectInput selected="Filter segments" />
                                            <MDBSelectOptions>
                                                <MDBSelectOption disabled>Filter segments</MDBSelectOption>
                                                <MDBSelectOption value="1">Contacts in no segments <span> (100)</span></MDBSelectOption>
                                                <MDBSelectOption value="2">Segment 1 <span> (2000)</span></MDBSelectOption>
                                                <MDBSelectOption value="3">Segment 2 <span> (1000)</span></MDBSelectOption>
                                                <MDBSelectOption value="4">Segment 3 <span> (4000)</span></MDBSelectOption>
                                            </MDBSelectOptions>
                                        </MDBSelect>
                                    </MDBCol>
                                    <MDBCol xl="3" lg="6" md="12" style={{ display: 'flex' }}>

                                        <form className="form-inline ml-2">
                                            <div className="form-group md-form py-0 mt-0">
                                                <input className="form-control w-80" type="text" placeholder="Search" />
                                                <MDBBtn size="sm" color="primary" className="d-inline ml-2 px-2"><MDBIcon icon="search" /></MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCol>

                                </MDBRow>
                            </div>
                            <MDBCard narrow className="z-depth-0">

                                <MDBView cascade className="gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

                                    <div className="text-left">
                                        <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="th-large" className="mt-0" /></MDBBtn>
                                        <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="columns" className="mt-0" /></MDBBtn>
                                    </div>

                                    <a href="#!" className="white-text mx-3">Table name</a>

                                    <div className="text-right">
                                        <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="pencil-alt" className="mt-0" /></MDBBtn>
                                        <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="times" className="mt-0" /></MDBBtn>
                                        <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="info-circle" className="mt-0" /></MDBBtn>
                                    </div>

                                </MDBView>
                                <div className="px-4">
                                    <MDBTable hover responsive>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input className="form-check-input" type="checkbox" id="checkbox" />
                                                    <label htmlFor="checkbox" className="form-check-label mr-2 label-table"></label>
                                                </th>
                                                <th className="th-lg">First Name<MDBIcon icon="sort" className="ml-1" /></th>
                                                <th className="th-lg">Last Name<MDBIcon icon="sort" className="ml-1" /></th>
                                                <th className="th-lg">Username<MDBIcon icon="sort" className="ml-1" /></th>
                                                <th className="th-lg">Email<MDBIcon icon="sort" className="ml-1" /></th>
                                                <th className="th-lg">Country<MDBIcon icon="sort" className="ml-1" /></th>
                                                <th className="th-lg">City<MDBIcon icon="sort" className="ml-1" /></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <input className="form-check-input" type="checkbox" id="checkbox1" />
                                                    <label htmlFor="checkbox1" className="label-table"></label>
                                                </th>
                                                <td>Mark</td>
                                                <td>Otto</td>
                                                <td>@mdo</td>
                                                <td>markotto@gmail.com</td>
                                                <td>USA</td>
                                                <td>San Francisco</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <input className="form-check-input" type="checkbox" id="checkbox2" />
                                                    <label htmlFor="checkbox2" className="label-table"></label>
                                                </th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>@fat</td>
                                                <td>jacobt@gmail.com</td>
                                                <td>France</td>
                                                <td>Paris</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <input className="form-check-input" type="checkbox" id="checkbox3" />
                                                    <label htmlFor="checkbox3" className="label-table"></label>
                                                </th>
                                                <td>Larry</td>
                                                <td>the Bird</td>
                                                <td>@twitter</td>
                                                <td>larrybird@gmail.com</td>
                                                <td>Germany</td>
                                                <td>Berlin</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <input className="form-check-input" type="checkbox" id="checkbox4" />
                                                    <label htmlFor="checkbox4" className="label-table"></label>
                                                </th>
                                                <td>Paul</td>
                                                <td>Topolski</td>
                                                <td>@P_Topolski</td>
                                                <td>ptopolski@gmail.com</td>
                                                <td>Poland</td>
                                                <td>Warsaw</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <input className="form-check-input" type="checkbox" id="checkbox5" />
                                                    <label htmlFor="checkbox5" className="label-table"></label>
                                                </th>
                                                <td>Anna</td>
                                                <td>Doe</td>
                                                <td>@andy</td>
                                                <td>annadoe@gmail.com</td>
                                                <td>Spain</td>
                                                <td>Madrid</td>
                                            </tr>
                                        </tbody>
                                    </MDBTable>
                                    <hr className="my-0" />
                                    <MDBSelect className="colorful-select w-10 float-left dropdown-primary mt-2 hidden-md-down">
                                        <MDBSelectInput selected="Rows number" />
                                        <MDBSelectOptions>
                                            <MDBSelectOption disabled>Rows number</MDBSelectOption>
                                            <MDBSelectOption value="1">5 rows</MDBSelectOption>
                                            <MDBSelectOption value="2">25 rows</MDBSelectOption>
                                            <MDBSelectOption value="3">50 rows</MDBSelectOption>
                                            <MDBSelectOption value="4">100 rows</MDBSelectOption>
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
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </MDBPageNav>
                                        </MDBPageItem>
                                    </MDBPagination>
                                </div>
                            </MDBCard>
                        </section>
                    </MDBCard>
                </section>

                <section className="mb-4">
                    <MDBRow>
                        <MDBCol lg="4" md="12" className="my-4">
                            <MDBCard>
                                <MDBCardHeader color="primary-color" className="white-text">
                                    Things to improve
                        </MDBCardHeader>
                                <MDBCardBody className="pt-0 px-1">
                                    <MDBCardBody className="text-center">
                                        <MDBListGroup>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Cras justo odio
                                        <MDBTooltip domElement placement='top'>
                                                    <span><MDBIcon icon="wrench" className="ml-auto" /></span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Dapibus ac facilisi
                                        <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Morbi leo risus
                                        <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Porta ac consectet
                                        <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Vestibulum at eros
                                        <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                        </MDBListGroup>
                                    </MDBCardBody>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="my-4">
                            <MDBCard>
                                <MDBCardHeader color="primary-color" className="white-text">
                                    Tasks to do
                        </MDBCardHeader>
                                <MDBCardBody className="pt-0 px-1">
                                    <MDBCardBody className="text-center">
                                        <MDBListGroup>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Cras justo odio
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Dapibus ac facilisi
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Morbi leo risus
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Porta ac consectet
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Vestibulum at eros
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                        </MDBListGroup>
                                    </MDBCardBody>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="4" md="12" className="my-4">
                            <MDBCard>
                                <MDBCardHeader color="primary-color" className="white-text">
                                    Statisctics
                                </MDBCardHeader>
                                <MDBCardBody className="pt-0 px-1">
                                    <MDBCardBody className="text-center">
                                        <MDBListGroup>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Cras justo odio
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Dapibus ac facilisi
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Morbi leo risus
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Porta ac consectet
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem hover className="d-flex justify-content-between dark-grey-text">
                                                Vestibulum at eros
                                            <MDBTooltip domElement placement='top'>
                                                    <span>
                                                        <MDBIcon icon="wrench" className="ml-auto" />
                                                    </span>
                                                    <div>Click to fix</div>
                                                </MDBTooltip>
                                            </MDBListGroupItem>
                                        </MDBListGroup>
                                    </MDBCardBody>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                    </MDBRow>
                </section>

                <section className="mb-5">
                    <MDBRow>
                        <MDBCol xl="3" md="6" className="mb-4">
                            <MDBCard color="primary-color" className="classic-admin-card white-text">
                                <MDBCardBody>
                                    <div className="float-right">
                                        <MDBIcon icon="money-bill-alt" />
                                    </div>
                                    <p className="white-text">SALES</p>
                                    <h4>$2000</h4>
                                </MDBCardBody>

                                <MDBProgress value={25} barClassName="bg grey darken-3" height="6px" wrapperStyle={{ opacity: '.7' }} />

                                <MDBCardBody>
                                    <p>Better than last week (25%)</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol xl="3" md="6" className="mb-4">
                            <MDBCard color="warning-color" className="classic-admin-card white-text">
                                <MDBCardBody>
                                    <div className="float-right">
                                        <MDBIcon icon="chart-line" />
                                    </div>
                                    <p className="white-text">SUBSCRIPTIONS</p>
                                    <h4>200</h4>
                                </MDBCardBody>
                                <MDBProgress value={25} barClassName="bg grey darken-3" height="6px" wrapperStyle={{ opacity: '.7' }} />
                                <MDBCardBody>
                                    <p>Worse than last week (25%)</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol xl="3" md="6" className="mb-4">
                            <MDBCard color="info-color" className="classic-admin-card white-text">
                                <MDBCardBody>
                                    <div className="float-right">
                                        <MDBIcon icon="chart-pie" />
                                    </div>
                                    <p className="white-text">TRAFFIC</p>
                                    <h4>20000</h4>
                                </MDBCardBody>

                                <MDBProgress value={75} barClassName="bg grey darken-3" height="6px" wrapperStyle={{ opacity: '.7' }} />

                                <MDBCardBody>
                                    <p>Better than last week (25%)</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol xl="3" md="6" className="mb-4">
                            <MDBCard color="red accent-2" className="classic-admin-card white-text">
                                <MDBCardBody>
                                    <div className="float-right">
                                        <MDBIcon icon="chart-bar" />
                                    </div>
                                    <p className="white-text">ORGANIC TRAFFIC</p>
                                    <h4>2000</h4>
                                </MDBCardBody>

                                <MDBProgress value={25} barClassName="bg grey darken-3" height="6px" wrapperStyle={{ opacity: '.7' }} />

                                <MDBCardBody>
                                    <p>Better than last week (25%)</p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </section>
                <MDBBtnFixed
                    onMouseEnter={this.onHover}
                    onMouseLeave={this.onMouseLeave}
                    floating
                    color="red"
                    icon="pencil-alt"
                    style={{ bottom: "100px", right: "24px" }}
                >
                    <MDBBtnFixedItem
                        buttonStyle={this.state.buttonStyle}
                        color="red"
                        icon="star"
                    />
                    <MDBBtnFixedItem
                        buttonStyle={this.state.buttonStyle}
                        color="yellow"
                        icon="user"
                    />
                    <MDBBtnFixedItem
                        buttonStyle={this.state.buttonStyle}
                        color="green"
                        icon="envelope"
                    />
                    <MDBBtnFixedItem
                        buttonStyle={this.state.buttonStyle}
                        color="blue"
                        icon="shopping-cart"
                        onClick={this.handleClick}
                    />
                </MDBBtnFixed>
            </>
        );
    }
}

export default DV1;