import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBSwitch,
  MDBFileInput,
  MDBRangeInput,
  MDBSelect,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
} from 'mdbreact';
import LinkCard from '../LinkCard';

class basic extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      radio: false,
    }
  }

  handleRadioClick = (newRadio) => (e) => {
    if (newRadio !== this.state.radio) {
      this.setState({
        radio: newRadio
      })
    }
  }

  render() {
    return (
          <section>
              <MDBCard className="mb-5">

                  <MDBCardBody>
                      <h5 className="pb-5">Input fields</h5>

                      <MDBRow>
                          <MDBCol md="4" className="mb-4">
                              <MDBInput label="Basic example"/>
                          </MDBCol>

                          <MDBCol md="4" className="mb-4">
                              <MDBInput label="Small input" containerClass="form-sm"/>
                          </MDBCol>

                          <MDBCol md="4" className="mb-4">
                              <MDBInput hint="Placeholder" label="Example label" containerClass="form-sm"/>
                          </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="6" className="mb-4">
                            <MDBInput default="John Doe" label="Prefilling text inputs"/>
                        </MDBCol>
                        <MDBCol md="6" className="mb-4">
                            <MDBInput label="Disabled input" disabled/>
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                          <MDBCol md="6" className="mb-4">
                              <MDBInput icon="envelope" type="email" label="Type your email"/>
                          </MDBCol>
                          <MDBCol md="6" className="mb-4">
                              <MDBInput icon="lock" type="password" label="Type your password"/>
                          </MDBCol>
                      </MDBRow>

                      <h5 className="pb-5">Textarea</h5>

                      <MDBRow>
                          <MDBCol md="6" className="mb-4">
                              <MDBInput type="textarea" label="Basic textarea"/>
                          </MDBCol>
                          <MDBCol md="6" className="mb-4">
                              <MDBInput type="textarea" label="Icon Prefix" icon="pencil-alt"/>
                          </MDBCol>
                      </MDBRow>

                      <h5 className="pb-5">Checkboxes and Radio</h5>

                      <MDBRow>
                          <MDBCol md="12" lg="4" className="mb-4">
                              <MDBInput label="Classic chechbox" type="checkbox" id="checkbox1" />
                              <MDBInput label="Filled-in checkbox" type="checkbox" id="checkbox2" filled/>
                          </MDBCol>

                          <MDBCol md="6" lg="4" className="mb-4">
                            <MDBInput onClick={this.handleRadioClick(1)} checked={this.state.radio === 1 ? true : false} label="Option 1" type="radio" id="radio1" />                         <MDBInput onClick={this.handleRadioClick(2)} checked={this.state.radio === 2 ? true : false} label="Option 2" type="radio" id="radio2" />                         <MDBInput onClick={this.handleRadioClick(3)} checked={this.state.radio === 3 ? true : false} label="Option 3" type="radio" id="radio3" />
                          </MDBCol>

                          <MDBCol md="6" lg="4" className="mb-4">
                            <MDBSwitch checked={true}/>
                            <MDBSwitch disabled/>
                          </MDBCol>

                      </MDBRow>

                      <h5 className="pb-5">File input</h5>

                      <MDBRow>
                          <MDBCol md="6" className="mb-4">
                            <MDBFileInput/>
                          </MDBCol>
                          <MDBCol md="6" className="mb-4">
                            <MDBFileInput multiple textFieldTitle="Upload one or more files"/>
                          </MDBCol>
                      </MDBRow>

                      <h5 className="pb-5">Range</h5>

                      <MDBRow>
                          <MDBCol md="12" className="mb-4">
                          <MDBRangeInput/>
                          </MDBCol>
                      </MDBRow>

                      <h5 className="pb-5">Select</h5>

                      <MDBRow className="mb-5">
                          <MDBCol md="12" lg="4">
                                <MDBSelect multiple>
                                    <MDBSelectInput selected="Basic select" />
                                    <MDBSelectOptions>
                                        <MDBSelectOption disabled>Choose your country</MDBSelectOption>
                                        <MDBSelectOption value="1">USA</MDBSelectOption>
                                        <MDBSelectOption value="2">Germany</MDBSelectOption>
                                        <MDBSelectOption value="3">France</MDBSelectOption>
                                        <MDBSelectOption value="4">Poland</MDBSelectOption>
                                        <MDBSelectOption value="5">Japan</MDBSelectOption>
                                    </MDBSelectOptions>
                                </MDBSelect>
                                <label>Basic select</label>
                          </MDBCol>

                          <MDBCol md="12" lg="4">

                          <MDBSelect multiple color="primary">
                                <MDBSelectInput selected="Material select" />
                                <MDBSelectOptions>
                                    <MDBSelectOption disabled>Choose your country</MDBSelectOption>
                                    <MDBSelectOption value="1">USA</MDBSelectOption>
                                    <MDBSelectOption value="2">Germany</MDBSelectOption>
                                    <MDBSelectOption value="3">France</MDBSelectOption>
                                    <MDBSelectOption value="4">Poland</MDBSelectOption>
                                    <MDBSelectOption value="5">Japan</MDBSelectOption>
                                </MDBSelectOptions>
                            </MDBSelect>
                            <label>Material select</label>

                          </MDBCol>

                          <MDBCol md="12" lg="4">

                            <MDBSelect>
                                <MDBSelectInput selected="Choose your option" />
                                <MDBSelectOptions>
                                    <MDBSelectOption disabled>team 1</MDBSelectOption>
                                    <MDBSelectOption value="1">Option 1</MDBSelectOption>
                                    <MDBSelectOption value="2">Option 2</MDBSelectOption>
                                    <MDBSelectOption disabled>team 2</MDBSelectOption>
                                    <MDBSelectOption value="3">Option 3</MDBSelectOption>
                                    <MDBSelectOption value="4">Option 4</MDBSelectOption>
                                </MDBSelectOptions>
                                </MDBSelect>
                                <label>Choose a team member</label>
                          </MDBCol>

                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="12" lg="4">
                            <MDBSelect multiple color="dark">
                                <MDBSelectInput selected="Material select" />
                                <MDBSelectOptions>
                                    <MDBSelectOption value="1">USA</MDBSelectOption>
                                    <MDBSelectOption value="2">Germany</MDBSelectOption>
                                    <MDBSelectOption value="3">France</MDBSelectOption>
                                    <MDBSelectOption value="4">Poland</MDBSelectOption>
                                    <MDBSelectOption value="5">Japan</MDBSelectOption>
                                </MDBSelectOptions>
                            </MDBSelect>
                          </MDBCol>

                          <MDBCol md="6" lg="4">

                          <MDBSelect multiple color="primary">
                                <MDBSelectInput selected="Material select" />
                                <MDBSelectOptions>
                                    <MDBSelectOption value="1" disabled>USA</MDBSelectOption>
                                    <MDBSelectOption value="2">Germany</MDBSelectOption>
                                    <MDBSelectOption value="3">France</MDBSelectOption>
                                    <MDBSelectOption value="4" selected>Poland</MDBSelectOption>
                                    <MDBSelectOption value="5">Japan</MDBSelectOption>
                                </MDBSelectOptions>
                            </MDBSelect>

                          </MDBCol>


                          <MDBCol md="6" lg="4">
                          <MDBSelect>
                            <MDBSelectInput selected="Choose your option" />
                            <MDBSelectOptions>
                                <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                                <MDBSelectOption
                                    value="User nr 1"
                                    icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                                >
                                    example 1
                                </MDBSelectOption>
                                <MDBSelectOption
                                    value="User nr 2"
                                    icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                                >
                                    example 2
                                </MDBSelectOption>
                                <MDBSelectOption
                                    value="User nr 3"
                                    icon="https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg"
                                >
                                    example 3
                                </MDBSelectOption>
                                </MDBSelectOptions>
                            </MDBSelect>
                            <label>Example label</label>
                            </MDBCol>
                      </MDBRow>

                  </MDBCardBody>

              </MDBCard>

              <LinkCard docs="https://mdbootstrap.com/docs/react/forms/select/"/>
            </section>
    );
  }
}

export default basic;