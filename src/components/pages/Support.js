import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBadge,
  MDBAvatar,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTable,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from 'mdbreact';

import './Support.css';

const Support = () =>  {
  return (
    <div id="support">
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol md="3" className="mx-auto mb-r">
              <MDBCardBody className="pt-0">

              <MDBBtn color="primary" size="lg" block><MDBIcon icon="plus" className="left"/> New Ticket</MDBBtn>

                  <div className="mt-2">
                      <small>Ticket categories:</small>

                      <ul className="striped list-unstyled">
                          <li><span className="bullet green"></span> Invoices <MDBBadge color="primary" className="float-right">14</MDBBadge></li>
                          <li><span className="bullet blue"></span> Advertising <MDBBadge color="primary" className="float-right">1</MDBBadge></li>
                          <li><span className="bullet red"></span> Functions <MDBBadge color="primary" className="float-right">3</MDBBadge></li>
                          <li><span className="bullet yellow"></span> Website <MDBBadge color="primary" className="float-right">9</MDBBadge></li>
                          <li><span className="bullet orange"></span> Clients <MDBBadge color="primary" className="float-right">5</MDBBadge></li>
                          <li><span className="bullet deep-purple"></span> Technical Questions <MDBBadge color="primary" className="float-right">4</MDBBadge></li>
                      </ul>
                  </div>
              </MDBCardBody>
          </MDBCol>

                <MDBCol md="8" className="mx-auto white z-depth-1 mb-r">

                    <MDBRow>
                        <MDBCol sm="6" md="9" className="py-4 px-3">
                            <h4 className="h4-responsive">Support Tickets (36)</h4>
                        </MDBCol>
                        <MDBCol sm="6" md="3">
                          <MDBInput
                            type="text"
                            label="Search"
                          />
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="12" className="pb-3">

                            <MDBTable responsive>
                                <thead>
                                    <tr>
                                    <th>
                                        <fieldset className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox0"/>
                                            <label className="form-check-label" htmlFor="checkbox0"></label>
                                        </fieldset>
                                    </th>
                                        <th>Name</th>
                                        <th>Title</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                          <fieldset className="form-check">
                                              <input className="form-check-input" type="checkbox" id="checkbox1"/>
                                              <label className="form-check-label" htmlFor="checkbox1"></label>
                                          </fieldset>
                                        </th>
                                        <td><div className="avatar-placeholder green darken-3">A</div> Abby Barret</td>
                                        <td>Can't create a modal</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 5 min</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                        <fieldset className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox2"/>
                                            <label className="form-check-label" htmlFor="checkbox2"></label>
                                        </fieldset>
                                        </th>
                                        <td>
                                          <MDBAvatar tag="img" src="http://mdbootstrap.com/wp-content/uploads/2015/10/avatar-1.jpg" alt="Danny Collins"/> Danny Collins</td>
                                        <td>Account changes won't save</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 1 hour</small></span></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">
                                        <fieldset className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox3"/>
                                            <label className="form-check-label" htmlFor="checkbox3"></label>
                                        </fieldset>
                                    </th>
                                    <td>
                                        <MDBAvatar tag="img" src="http://mdbootstrap.com/wp-content/uploads/2015/10/avatar-3.jpg" alt="Clara Ericson"/> Clara Ericson</td>
                                        <td>How to import my campaign from Business Manager?</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 1 hour</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <fieldset className="form-check">
                                                <input className="form-check-input" type="checkbox" id="checkbox4"/>
                                                <label className="form-check-label" htmlFor="checkbox4"></label>
                                            </fieldset>
                                        </th>
                                        <td><div className="avatar-placeholder green darken-3">A</div> Abby Barret</td>
                                        <td>Can't create a modal</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 5 min</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <fieldset className="form-check">
                                                <input className="form-check-input" type="checkbox" id="checkbox5"/>
                                                <label className="form-check-label" htmlFor="checkbox5"></label>
                                            </fieldset>
                                        </th>
                                        <td><div className="avatar-placeholder yellow darken-2">D</div> Danny Collins</td>
                                        <td>Account changes won't save</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 1 hour</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <fieldset className="form-check">
                                                <input className="form-check-input" type="checkbox" id="checkbox6"/>
                                                <label className="form-check-label" htmlFor="checkbox6"></label>
                                            </fieldset>
                                        </th>
                                        <td><div className="avatar-placeholder red darken-2">C</div> Clara Ericson</td>
                                        <td>How to import my campaign from Business Manager?</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 1 hour</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                          <fieldset className="form-check">
                                              <input className="form-check-input" type="checkbox" id="checkbox7"/>
                                              <label className="form-check-label" htmlFor="checkbox7"></label>
                                          </fieldset>
                                        </th>
                                        <td>
                                        <MDBAvatar tag="img" src="http://mdbootstrap.com/wp-content/uploads/2015/10/avatar-2.jpg" alt="Abby Barret"/> Abby Barret</td>
                                        <td>Can't create a modal</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 5 min</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <fieldset className="form-check">
                                                <input className="form-check-input" type="checkbox" id="checkbox8"/>
                                                <label className="form-check-label" htmlFor="checkbox8"></label>
                                            </fieldset>
                                        </th>
                                        <td><div className="avatar-placeholder yellow darken-2">D</div> Danny Collins</td>
                                        <td>Account changes won't save</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 1 hour</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <fieldset className="form-check">
                                                <input className="form-check-input" type="checkbox" id="checkbox9"/>
                                                <label className="form-check-label" htmlFor="checkbox9"></label>
                                            </fieldset>
                                        </th>
                                        <td><div className="avatar-placeholder red darken-2">C</div> Clara Ericson</td>
                                        <td>How to import my campaign from Business Manager?</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 1 hour</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <fieldset className="form-check">
                                                <input className="form-check-input" type="checkbox" id="checkbox10"/>
                                                <label className="form-check-label" htmlFor="checkbox10"></label>
                                            </fieldset>
                                        </th>
                                        <td><div className="avatar-placeholder green darken-3">A</div> Abby Barret</td>
                                        <td>Can't create a modal</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 5 min</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <fieldset className="form-check">
                                                <input className="form-check-input" type="checkbox" id="checkbox11"/>
                                                <label className="form-check-label" htmlFor="checkbox11"></label>
                                            </fieldset>
                                        </th>
                                        <td>
                                          <MDBAvatar tag="img" src="http://mdbootstrap.com/wp-content/uploads/2015/10/avatar-1.jpg" alt="Danny Collins"/> Danny Collins</td>
                                        <td>Account changes won't save</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 1 hour</small></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                        <fieldset className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox12"/>
                                            <label className="form-check-label" htmlFor="checkbox12"></label>
                                        </fieldset>
                                        </th>
                                        <td><div className="avatar-placeholder red darken-2">C</div> Clara Ericson</td>
                                        <td>How to import my campaign from Business Manager?</td>
                                        <td><span className="grey-text"><small><MDBIcon icon="clock"/> 1 hour</small></span></td>
                                    </tr>
                                </tbody>
                            </MDBTable>

                            <MDBDropdown dropup>
                                <MDBDropdownToggle caret color="primary">
                                    Selected
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem>Remove</MDBDropdownItem>
                                    <MDBDropdownItem>Mark as read</MDBDropdownItem>
                                    <MDBDropdownItem>Archive</MDBDropdownItem>
                                </MDBDropdownMenu>
                              </MDBDropdown>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Support;