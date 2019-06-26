import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBMedia,
    MDBIcon,
    MDBView,
    MDBBadge,
    MDBBtn
} from 'mdbreact';
import LinkCard from '../LinkCard';
import './list.css'

const List = () => {
    return (
        <MDBContainer fluid>
            <h2 className="mt-lg-5 mb-5 font-weight-bold"><strong>List group</strong></h2>

            <section className="my-5">
                <h5 className="my-5 dark-grey-text font-weight-bold">Basic examples</h5>

                <MDBRow>
                    <MDBCol md="6" lg="4" className="mb-4">
                        <MDBListGroup>
                            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
                        </MDBListGroup>

                    </MDBCol>

                    <MDBCol md="6" lg="4">
                        <MDBListGroup className="z-depth-1">
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                Cras justo odio
                              <MDBBadge pill color="primary">14</MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                Dapibus ac facilisis in
                              <MDBBadge pill color="primary">2</MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                Morbi leo risus
                              <MDBBadge pill color="primary">1</MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                Cras justo odio
                              <MDBBadge pill color="primary">10</MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                                Morbi leo risus
                              <MDBBadge pill color="primary">5</MDBBadge>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                </MDBRow>
            </section>

            <section className="my-5">
                <h5 className="my-5 dark-grey-text font-weight-bold">Linked items</h5>

                <MDBRow>
                    <MDBCol md="12" lg="4">
                        <div className="list-group z-depth-1">
                            <MDBListGroupItem tag="a" href="#!" active> Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!" hover>Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!" hover>Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!" hover>Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!" disabled>Vestibulum at eros</MDBListGroupItem>
                        </div>
                    </MDBCol>

                    <MDBCol md="6" lg="4" className="mb-4">
                        <div className="list-group z-depth-1">
                            <MDBListGroupItem tag="a" href="#!" active>Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!">Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!">Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!">Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!">Vestibulum at eros</MDBListGroupItem>
                        </div>
                    </MDBCol>

                    <MDBCol md="6" lg="4">
                        <div className="list-group z-depth-1">
                            <MDBListGroupItem tag="a" href="#!" disabled>Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!">Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!">Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!">Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem tag="a" href="#!">Vestibulum at eros</MDBListGroupItem>
                        </div>
                    </MDBCol>
                </MDBRow>
            </section>

            <section className="my-5">
                <h5 className="my-5 dark-grey-text font-weight-bold">List icon with active items</h5>
                <MDBRow>
                    <MDBCol md="6" lg="6">
                        <MDBListGroup>
                            <MDBListGroupItem active><div className="md-v-line"></div><MDBIcon icon="laptop" className="mr-5" />Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem ><div className="md-v-line"></div><MDBIcon icon="bomb" className="mr-5" />Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem><div className="md-v-line"></div><MDBIcon icon="code" className="mr-5" />Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem><div className="md-v-line"></div><MDBIcon icon="gem" className="mr-5" />Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem><div className="md-v-line"></div><MDBIcon icon="cogs" className="mr-5" />Vestibulum at eros</MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                </MDBRow>
            </section>

            <section className="my-5">
                <h5 className="my-5 dark-grey-text font-weight-bold">Social icons</h5>
                <MDBRow>
                    <MDBCol md="6" lg="6">
                        <MDBListGroup>
                            <MDBListGroupItem><MDBBtn floating tag="a" color="fb"><MDBIcon fab icon="facebook left" /></MDBBtn>Dapibus ac facilisis in</MDBListGroupItem>
                            <MDBListGroupItem ><MDBBtn floating tag="a" color="tw"><MDBIcon fab icon="twitter left" /></MDBBtn>Cras justo odio</MDBListGroupItem>
                            <MDBListGroupItem><MDBBtn floating tag="a" color="li"><MDBIcon fab icon="linkedin left" /></MDBBtn>Morbi leo risus</MDBListGroupItem>
                            <MDBListGroupItem>  <MDBBtn floating tag="a" color="slack"><MDBIcon fab icon="slack left" /></MDBBtn>Porta ac consectetur ac</MDBListGroupItem>
                            <MDBListGroupItem> <MDBBtn floating tag="a" color="yt"><MDBIcon fab icon="youtube left" /></MDBBtn>Vestibulum at eros</MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCol>
                </MDBRow>
            </section>

            <section className="my-5">
                <h5 className="my-5 dark-grey-text font-weight-bold">Reviews</h5>

                <MDBMedia className="mb-3">
                    <MDBMedia tag="a" left>
                        <MDBView waves>
                            <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg" alt="Generic placeholder" />
                        </MDBView>
                    </MDBMedia>
                    <MDBMedia body className="ml-3">
                        <MDBMedia tag="h5" className="media-heading font-weight-bold">John Doe</MDBMedia>
                        <ul className="rating">
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 grey-text" /></li>
                            <li><MDBIcon icon="star grey-text" /></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate temporibus iure soluta.
                            Quasi mollitia maxime nemo quam accusamus possimus, voluptatum expedita assumenda. Earum
                        sit id ullam eum vel delectus!</p>
                    </MDBMedia>
                </MDBMedia>

                <MDBMedia className="mb-3">
                    <MDBMedia tag="a" left>
                        <MDBView waves>
                            <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" alt="Generic placeholder" />
                        </MDBView>
                    </MDBMedia>
                    <MDBMedia body className="ml-3">
                        <MDBMedia tag="h5" className="media-heading font-weight-bold">Anna Casie</MDBMedia>
                        <ul className="rating">
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star amber-text" /></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate temporibus iure soluta.
                            Quasi mollitia maxime nemo quam accusamus possimus, voluptatum expedita assumenda. Earum
                        sit id ullam eum vel delectus!</p>
                    </MDBMedia>
                </MDBMedia>

                <MDBMedia className="mb-3">
                    <MDBMedia tag="a" left>
                        <MDBView waves>
                            <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-16.jpg" alt="Generic placeholder" />
                        </MDBView>
                    </MDBMedia>
                    <MDBMedia body className="ml-3">
                        <MDBMedia tag="h5" className="media-heading font-weight-bold">Maria Kate</MDBMedia>
                        <ul className="rating">
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star mr-1 amber-text" /></li>
                            <li><MDBIcon icon="star grey-text" /></li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate temporibus iure soluta.
                            Quasi mollitia maxime nemo quam accusamus possimus, voluptatum expedita assumenda. Earum
                        sit id ullam eum vel delectus!</p>
                    </MDBMedia>
                </MDBMedia>
            </section>

            <section className="mb-5">
                <h5 className="my-5 dark-grey-text font-weight-bold">Custom content</h5>

                <MDBListGroup className="z-depth-1">
                    <MDBListGroupItem tag="a" href="#!" hover active className="flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="font-weight-bold mb-3 mt-2">List group item heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small>Donec id elit non mi porta.</small>
                    </MDBListGroupItem>
                    <MDBListGroupItem tag="a" href="#!" hover className="flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="font-weight-bold mb-3 mt-2">List group item heading</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </MDBListGroupItem>
                    <MDBListGroupItem tag="a" href="#!" hover className="flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="font-weight-bold mb-3 mt-2">List group item heading</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                        <small className="text-muted">Donec id elit non mi porta.</small>
                    </MDBListGroupItem>
                </MDBListGroup>
            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/components/list-group" />
        </MDBContainer>
    );
}

export default List;