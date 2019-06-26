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
	MDBSimpleChart,
	MDBBadge,
	MDBTooltip,
	MDBView,
	MDBIcon,
	MDBBtn,
	MDBProgress,
	MDBListGroup,
	MDBListGroupItem,
	MDBMask,
	MDBInput
} from 'mdbreact';
import { Line } from "react-chartjs-2";
import { VectorMap } from 'react-jvectormap';
import GoogleMapReact from 'google-map-react';

const Sections = () => {
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

	const renderPanelListItem = (text) => {
		return (<MDBListGroupItem className="dark-grey-text text-left">
			{text}
			<MDBTooltip placement="right" domElement>
				<span className="float-right"><MDBIcon icon="wrench" /></span>
				<span>Click to fix</span>
			</MDBTooltip>
		</MDBListGroupItem>)
	}

	const renderPanelList = () => {
		return (<MDBListGroup className="list-panel">
			{renderPanelListItem("Cras justo odio")}
			{renderPanelListItem("Dapibus ac facilisi")}
			{renderPanelListItem("Morbi leo risus")}
			{renderPanelListItem("Porta ac consectet")}
			{renderPanelListItem("Vestibulum at eros")}
		</MDBListGroup>)
	}

	const renderRecentPost = (obj, lead) => {
		const isLead = lead === true ? "12" : "6";
		return (
			<MDBCol lg="4" md={isLead} className="mb-4">
				<MDBView waves hover className="z-depth-1">
					<img src={obj.src} className="img-fluid" alt="First sample" />
					<a href="#!">
						<MDBMask overlay="white-slight" />
					</a>
				</MDBView>
				<a href="#!" className={obj.catColor + "-text"}><h6 className="mb-3 mt-3"><MDBIcon icon={obj.catIcon} /><strong> {obj.catName}</strong></h6></a>
				<h4 className="font-weight-bold mb-3">This is title of the news</h4>
				<p>by <a href="#!" className="dark-link"><strong>Billy Forester</strong></a>{', ' + obj.date}</p>
				<p>{obj.content}</p>
				<MDBBtn color="primary" rounded>Read more</MDBBtn>
			</MDBCol>
		)
	}

	const renderRecentPosts = (obj1, obj2, obj3) => {
		return (
			<MDBRow>
				{renderRecentPost(obj1, true)}
				{renderRecentPost(obj2)}
				{renderRecentPost(obj3)}
			</MDBRow>)
	}
	return (
		<div id="sections">
			<section className="my-4">
				<h2 className="section-heading h1 my-5 pt-4 text-center">Analytical panel </h2>
				<p className="section-description text-center mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
				sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
										<div className="mb-1">
											<MDBRow>
												<MDBCol size="12" className="mb-2">
													<small className="grey-text">from:</small><br />
													<MDBDatePicker className="my-0 d-inline ml-3" />
												</MDBCol>
												<MDBCol size="12">
													<small className="grey-text">to:</small><br />
													<MDBDatePicker className="my-0 d-inline ml-3" />
												</MDBCol>
											</MDBRow>
										</div>

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
											<MDBSimpleChart strokeColor="red" strokeWidth={3} width={100} height={100} percent={76} labelFontWeight="normal" />
										</div>
										<h5>
											<MDBBadge color="red" className="accent-2 p-2">Change <MDBIcon icon="arrow-circle-down" className="ml-1" /></MDBBadge>
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
							<MDBView cascade className="gradient-card-header blue-gradient">
								<Line data={lineChartData} options={lineChartOptions} />
							</MDBView>
						</MDBCol>
					</MDBRow>
				</MDBCard>
			</section>

			<section>

				<h2 className="section-heading h1 pt-4 text-center my-5">Cascading admin cards </h2>
				<p className="section-description mb-5 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
			sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				<MDBRow>
					<MDBCol xl="3" md="6" className="mb-5">
						<MDBCard cascade className="cascading-admin-card">
							<div className="admin-up">
								<MDBIcon icon="money-bill-alt" className="primary-color"></MDBIcon>
								<div className="data">
									<p>SALES</p>
									<h4 className="font-weight-bold dark-grey-text">$2000</h4>
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

			<section>

				<h2 className="section-heading h1 text-center my-5">Classic admin cards </h2>
				<p className="section-description text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
			sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

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

			<section className="my-4">
				<h2 className="section-heading h1 my-5 pt-4 text-center">Map panel </h2>
				<p className="section-description text-center mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
										<div className="mb-1">
											<MDBRow>
												<MDBCol size="12" className="mb-2">
													<small className="grey-text">from:</small><br />
													<MDBDatePicker className="w-100 my-0 d-inline ml-3" />
												</MDBCol>
												<MDBCol size="12">
													<small className="grey-text">to:</small><br />
													<MDBDatePicker className="my-0 d-inline ml-3" />
												</MDBCol>
											</MDBRow>
										</div>

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
											<MDBSimpleChart strokeColor="red" strokeWidth={3} width={100} height={100} percent={76} labelFontWeight="normal" />
										</div>
										<h5>
											<MDBBadge color="red" className="accent-2 p-2">Change <MDBIcon icon="arrow-circle-down" className="ml-1" /></MDBBadge>
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
				</MDBCard>
			</section>


			<section>

				<h2 className="section-heading h1 pt-4 my-5 text-center">Notification panels </h2>
				<p className="section-description text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
			sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				<MDBRow className="mb-5">
					<MDBCol md="12" lg="4" className="mb-4">
						<MDBCard narrow>
							<MDBView cascade className="gradient-card-header info-color">
								<h4 className="mb-0">Things to improve</h4>
							</MDBView>
							<MDBCardBody className="text-center">
								{renderPanelList()}
							</MDBCardBody>
						</MDBCard>
					</MDBCol>

					<MDBCol md="6" lg="4" className="mb-4">
						<MDBCard narrow>
							<MDBView cascade className="gradient-card-header warning-color">
								<h4 className="mb-0">Tasks to do</h4>
							</MDBView>
							<MDBCardBody className="text-center">
								{renderPanelList()}
							</MDBCardBody>
						</MDBCard>
					</MDBCol>

					<MDBCol md="6" lg="4" className="mb-4">
						<MDBCard narrow>
							<MDBView cascade className="gradient-card-header  red accent-2">
								<h4 className="mb-0">Warnings</h4>
							</MDBView>
							<MDBCardBody className="text-center">
								{renderPanelList()}
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</section>
			<section id="older" className="section extra-margins text-center">

				<h2 className="text-center my-5 h1">Recent posts</h2>
				<p className="text-center mb-5 w-responsive mx-auto">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				{renderRecentPosts(
					{
						src: "https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(41).jpg",
						catIcon: "laptop",
						catColor: "pink",
						catName: "Work",
						date: "15/07/2018",
						content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas."

					},
					{
						src: "https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(42).jpg",
						catIcon: "graduation-cap",
						catColor: "teal",
						catName: "Education",
						date: "12/07/2018",
						content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."
					},
					{
						src: "https://mdbootstrap.com/img/Photos/Horizontal/Work/6-col/img%20(43).jpg",
						catIcon: "fire",
						catColor: "cyan",
						catName: "Culture",
						date: "10/07/2018",
						content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, quia consequuntur magni dolores eos qui ratione voluptatem."
					})}

			</section>

			<section className="section pb-5 mb-5">

				<h2 className="section-heading h1 pt-4 text-center my-5">Contact us</h2>
				<p className="section-description mb-5 mb-3 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
				esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

				<MDBRow>

					<MDBCol lg="5" className="mb-4">

						<MDBCard>
							<MDBCardBody>
								<div className="form-header blue-gradient">
									<h3 className="mt-2">
										<MDBIcon icon="envelope" /> Write to us:
							</h3>
								</div>
								<p className="dark-grey-text">
									We'll write rarely, but only the best content.
							</p>
								<div className="md-form">
									<MDBInput
										icon="user"
										label="Your name"
										iconClass="grey-text"
										type="text"
										id="form-name"
									/>
								</div>
								<div className="md-form">
									<MDBInput
										icon="envelope"
										label="Your email"
										iconClass="grey-text"
										type="text"
										id="form-email"
									/>
								</div>
								<div className="md-form">
									<MDBInput
										icon="tag"
										label="Subject"
										iconClass="grey-text"
										type="text"
										id="form-subject"
									/>
								</div>
								<div className="md-form">
									<MDBInput
										icon="pencil-alt"
										label="Your message"
										iconClass="grey-text"
										type="textarea"
										id="form-text"
									/>
								</div>
								<div className="text-center">
									<MDBBtn color="primary">Submit</MDBBtn>
								</div>
							</MDBCardBody>
						</MDBCard>

					</MDBCol>


					<MDBCol lg="7">

						<div style={{ height: 400 }} className="z-depth-2">
							<GoogleMapReact
								defaultCenter={{ lat: 37.773972, lng: -122.431297 }}
								defaultZoom={7}
							/>
						</div>
						<br />
						<MDBRow className="text-center">
							<MDBCol md="4" className="col-md-4">
								<a className="btn-floating primary-color" href="#!">
									<MDBIcon icon="map-marker-alt" />
								</a>
								<p>San Francisco, CA 94126</p>
								<p>United States</p>
							</MDBCol>

							<MDBCol md="4" className="col-md-4">
								<a className="btn-floating primary-color" href="#!">
									<MDBIcon icon="phone" />
								</a>
								<p>+ 01 234 567 89</p>
								<p>Mon - Fri, 8:00-22:00</p>
							</MDBCol>

							<MDBCol md="4" className="col-md-4">
								<a className="btn-floating primary-color" href="#!">
									<MDBIcon icon="envelope" />
								</a>
								<p>info@gmail.com</p>
								<p>sale@gmail.com</p>
							</MDBCol>
						</MDBRow>

					</MDBCol>

				</MDBRow>

			</section>
		</div>

	);
}

export default Sections;