import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBSelect,
    MDBSelectInput,
    MDBSelectOptions,
    MDBSelectOption,
    MDBDatePicker,
    MDBFormInline,
    MDBSimpleChart,
    MDBBadge,
    MDBTooltip,
    MDBView,
    MDBIcon,
    MDBBtn
} from 'mdbreact';
import { Line, Radar, Bar, Pie, Polar, Doughnut } from "react-chartjs-2";
import LinkCard from '../LinkCard';

const mainLineChartData = {
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

const mainLineChartOptions = {
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

const lineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: "rgba(105, 0, 132, .2)",
            borderColor: [
                'rgba(200, 99, 132, .7)',
            ],
            borderWidth: 2
        },
        {
            label: "My Second dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: [
                'rgba(0, 137, 132, .2)',
            ],
            borderColor: [
                'rgba(0, 10, 130, .7)',
            ],
            borderWidth: 2
        }
    ]
}

const radarChartData = {
    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    datasets: [{
        label: "My First dataset",
        data: [65, 59, 90, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(105, 0, 132, .2)',
        ],
        borderColor: [
            'rgba(200, 99, 132, .7)',
        ],
        borderWidth: 2
    },
    {
        label: "My Second dataset",
        data: [28, 48, 40, 19, 96, 27, 100],
        backgroundColor: [
            'rgba(0, 250, 220, .2)',
        ],
        borderColor: [
            'rgba(0, 213, 132, .7)',
        ],
        borderWidth: 2
    }
    ]
}

const barChartData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
}

const polarChartData = {
    labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
    datasets: [
        {
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
        }
    ]
}

const charts = () => {
    return (
        <div id="charts">
            <section className="mb-5">
                <MDBCard cascade narrow>
                    <MDBRow>
                        <MDBCol xl="5" lg="12" className="mr-0">
                            <div className="view view-cascade gradient-card-header blue-gradient">
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
                                        <MDBFormInline>
                                            <MDBDatePicker /><br />
                                        </MDBFormInline>
                                        <MDBFormInline>
                                            <MDBDatePicker />
                                        </MDBFormInline>

                                    </MDBCol>
                                    <MDBCol md="6" className="text-center">
                                        <div style={{ marginBottom: '0.5rem' }}>Total sales: <strong>$2000</strong>
                                            <MDBTooltip>
                                                <MDBBtn color="info" className="btn-sm p-2 d-inline"><MDBIcon icon="question" /></MDBBtn>
                                                <div>Total sales in the given period</div>
                                            </MDBTooltip>
                                        </div><br />

                                        <div style={{ marginBottom: '0.5rem' }}>Average sales: <strong>$100</strong>
                                            <MDBTooltip>
                                                <MDBBtn color="info" className="btn-sm p-2 d-inline"><MDBIcon icon="question" /></MDBBtn>
                                                <div>Average daily sales in the given period</div>
                                            </MDBTooltip>
                                        </div><br />
                                        <div className="my-4">
                                            <MDBSimpleChart strokeColor="green" strokeWidth={3} width={100} height={100} percent={76} labelFontWeight="normal" />
                                        </div>
                                        <h5>
                                            <MDBBadge color="green" className="p-2">Change <MDBIcon icon="arrow-circle-up" className="ml-1" /></MDBBadge>
                                            <MDBTooltip>
                                                <MDBBtn color="info" className="btn-sm p-2 d-inline"><MDBIcon icon="question" /></MDBBtn>
                                                <div>Percentage change compared to the same period in the past</div>
                                            </MDBTooltip>
                                        </h5>
                                    </MDBCol>
                                </MDBCardBody>
                            </MDBCardBody>
                        </MDBCol>
                        <MDBCol xl="7" lg="12" className="mb-4">
                            <MDBView cascade className="gradient-card-header indigo">
                                <Line data={mainLineChartData} options={mainLineChartOptions} height={174} />
                            </MDBView>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </section>
            <section>
                <MDBRow className="mb-4">
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Line chart</h5>
                            </MDBView>
                            <MDBCardBody>
                                <Line data={lineChartData} height={200} />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Radar chart</h5>
                            </MDBView>
                            <MDBCardBody>
                                <Radar data={radarChartData} height={200} />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Bar chart</h5>
                            </MDBView>
                            <MDBCardBody>
                                <Bar data={barChartData} height={200} />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="mb-4">
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Polar chart</h5>
                            </MDBView>
                            <MDBCardBody>
                                <Polar data={polarChartData} height={200} />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Pie chart</h5>
                            </MDBView>
                            <MDBCardBody>
                                <Pie data={polarChartData} height={200} />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Doughnut chart</h5>
                            </MDBView>
                            <MDBCardBody>
                                <Doughnut data={polarChartData} height={200} />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

                <MDBRow className="mb-3">
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Polar chart</h5>
                            </MDBView>
                            <MDBCardBody className="text-center py-5">
                                <MDBSimpleChart strokeColor="green" strokeWidth={3} width={100} height={100} percent={56} labelFontWeight="normal" />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Pie chart</h5>
                            </MDBView>
                            <MDBCardBody className="text-center py-5">
                                <MDBSimpleChart strokeColor="red" strokeWidth={3} width={100} height={100} percent={76} labelFontWeight="normal" />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md="12" lg="4" className="mb-4">
                        <MDBCard narrow>
                            <MDBView cascade className="gradient-card-header blue">
                                <h5 className="mb-0">Doughnut chart</h5>
                            </MDBView>
                            <MDBCardBody className="text-center py-5">
                                <MDBSimpleChart strokeColor="grey" strokeWidth={3} width={100} height={100} percent={100} labelFontWeight="normal" />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/advanced/charts/" />
        </div>
    );
}

export default charts;