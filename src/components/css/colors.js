import React from 'react';
import { 
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBContainer,
  MDBBtn,
} from 'mdbreact';

import './colors.css';

const Colors = () => {
  return (
    <div id="colors">
      <MDBContainer fluid>
            <section id="bootstrap-colors">

                <h2 className="mt-lg-5 mb-3 font-bold"><strong>Bootstrap colors</strong></h2>

                <p>MDB Admin Dashboard provides you with a sensational palette of 300 delightful, breathing colors.</p>

                <p className="description mb-5">Each color might be exposed in various tones varying from bright to dark. They all are collated in accessible
                    section, which will aid you in creating inviting, color consistent design. </p>
                <section>

                    <MDBRow>
                        <MDBCol md="3">
                            <div className="color-block danger-color z-depth-2">
                                <h5>danger-color</h5>
                                <h5>#ff4444</h5>
                            </div>
                            <div className="color-block-dark danger-color-dark z-depth-2">
                                <h5>danger-color-dark</h5>
                                <h5>#CC0000</h5>
                            </div>
                        </MDBCol>

                        <MDBCol md="3">
                            <div className="color-block warning-color z-depth-2">
                                <h5>warning-color</h5>
                                <h5>#ffbb33</h5>
                            </div>
                            <div className="color-block-dark warning-color-dark z-depth-2">
                                <h5>warning-color-dark</h5>
                                <h5>#FF8800</h5>
                            </div>
                        </MDBCol>

                        <MDBCol md="3">
                            <div className="color-block success-color z-depth-2">
                                <h5>success-color</h5>
                                <h5>#00C851</h5>
                            </div>
                            <div className="color-block-dark success-color-dark z-depth-2">
                                <h5>success-color-dark</h5>
                                <h5>#007E33</h5>
                            </div>
                        </MDBCol>

                        <MDBCol>
                            <div className="color-block info-color z-depth-2">
                                <h5>info-color</h5>
                                <h5>#33b5e5</h5>
                            </div>
                            <div className="color-block-dark info-color-dark z-depth-2">
                                <h5>info-color-dark</h5>
                                <h5>#0099CC</h5>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </section>
            </section>

            <hr className="my-5"/>

            <section id="mdb-colors">

                <h4 className="mb-5 font-bold font-bold dark-grey-text"><strong>MDB Colors</strong></h4>

                <p className="description"></p>

                <section>

                    <MDBRow>
                        <MDBCol md="4">
                            <div className="color-block default-color z-depth-2">
                                <h5>default-color</h5>
                                <h5>#2BBBAD</h5>
                            </div>
                            <div className="color-block-dark default-color-dark z-depth-2">
                                <h5>default-color-dark</h5>
                                <h5>#00695c</h5>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="color-block primary-color z-depth-2">
                                <h5>primary-color</h5>
                                <h5>#4285F4</h5>
                            </div>
                            <div className="color-block-dark primary-color-dark z-depth-2">
                                <h5>primary-color-dark</h5>
                                <h5>#0d47a1</h5>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="color-block secondary-color z-depth-2">
                                <h5>secondary-color</h5>
                                <h5>#aa66cc</h5>
                            </div>
                            <div className="color-block-dark secondary-color-dark z-depth-2">
                                <h5>secondary-color-dark</h5>
                                <h5>#9933CC</h5>
                            </div>
                        </MDBCol>
                    </MDBRow>

                </section>

            </section>

            <hr className="my-5"/>

            <section id="dark-theme">
                <h4 className="mb-5 font-bold dark-grey-text"><strong>Dark Theme</strong></h4>
                <p className="description"></p>

                <section>
                    <MDBRow>
                        <MDBCol md="3">
                            <div className="color-block elegant-color z-depth-2">
                                <h5>elegant-color</h5>
                                <h5>#2E2E2E</h5>
                            </div>
                            <div className="color-block-dark elegant-color-dark z-depth-2">
                                <h5>elegant-color-dark</h5>
                                <h5>#212121</h5>
                            </div>
                        </MDBCol>

                        <MDBCol md="3">
                            <div className="color-block stylish-color z-depth-2">
                                <h5>stylish-color</h5>
                                <h5>#4B515D</h5>
                            </div>
                            <div className="color-block-dark stylish-color-dark z-depth-2">
                                <h5>stylish-color-dark</h5>
                                <h5>#3E4551</h5>
                            </div>
                        </MDBCol>

                        <MDBCol md="3">
                            <div className="color-block unique-color z-depth-2">
                                <h5>unique-color</h5>
                                <h5>#3F729B</h5>
                            </div>
                            <div className="color-block-dark unique-color-dark z-depth-2">
                                <h5>unique-color-dark</h5>
                                <h5>#1C2331</h5>
                            </div>
                        </MDBCol>

                        <MDBCol md="3">
                            <div className="color-block special-color z-depth-2">
                                <h5>special-color</h5>
                                <h5>#37474F</h5>
                            </div>
                            <div className="color-block-dark special-color-dark z-depth-2">
                                <h5>special-color-dark</h5>
                                <h5>#263238</h5>
                            </div>
                        </MDBCol>
                    </MDBRow>

                </section>

            </section>

            <hr className="my-5"/>

            <section id="full-palette">
                <h4 className="mb-5 font-bold dark-grey-text"><strong>Full Palette</strong></h4>
                <p className="description"></p>

                <section>

                    <MDBRow className="dynamic-color">
                        <MDBCol md="4">
                            <div className="red lighten-5">
                                <p>#ffebee red lighten-5</p>
                            </div>
                            <div className="red lighten-4">
                                <p>#ffcdd2 red lighten-4</p>
                            </div>
                            <div className="red lighten-3">
                                <p>#ef9a9a red lighten-3</p>
                            </div>
                            <div className="red lighten-2">
                                <p>#e57373 red lighten-2</p>
                            </div>
                            <div className="red lighten-1">
                                <p>#ef5350 red lighten-1</p>
                            </div>
                            <div className="red">
                                <p>#f44336 red</p>
                            </div>
                            <div className="red darken-1 white-text">
                                <p>#e53935 red darken-1</p>
                            </div>
                            <div className="red darken-2 white-text">
                                <p>#d32f2f red darken-2</p>
                            </div>
                            <div className="red darken-3 white-text">
                                <p>#c62828 red darken-3</p>
                            </div>
                            <div className="red darken-4 white-text">
                                <p>#b71c1c red darken-4</p>
                            </div>
                            <div className="red accent-1 ">
                                <p>#ff8a80 red accent-1</p>
                            </div>
                            <div className="red accent-2">
                                <p>#ff5252 red accent-2</p>
                            </div>
                            <div className="red accent-3">
                                <p>#ff1744 red accent-3</p>
                            </div>
                            <div className="red accent-4 white-text">
                                <p>#d50000 red accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="pink lighten-5">
                                <p>#fce4ec pink lighten-5</p>
                            </div>
                            <div className="pink lighten-4">
                                <p>#f8bbd0 pink lighten-4</p>
                            </div>
                            <div className="pink lighten-3">
                                <p>#f48fb1 pink lighten-3</p>
                            </div>
                            <div className="pink lighten-2">
                                <p>#f06292 pink lighten-2</p>
                            </div>
                            <div className="pink lighten-1">
                                <p>#ec407a pink lighten-1</p>
                            </div>
                            <div className="pink ">
                                <p>#e91e63 pink</p>
                            </div>
                            <div className="pink darken-1 white-text">
                                <p>#d81b60 pink darken-1</p>
                            </div>
                            <div className="pink darken-2 white-text">
                                <p>#c2185b pink darken-2</p>
                            </div>
                            <div className="pink darken-3 white-text">
                                <p>#ad1457 pink darken-3</p>
                            </div>
                            <div className="pink darken-4 white-text">
                                <p>#880e4f pink darken-4</p>
                            </div>
                            <div className="pink accent-1">
                                <p>#ff80ab pink accent-1</p>
                            </div>
                            <div className="pink accent-2">
                                <p>#ff4081 pink accent-2</p>
                            </div>
                            <div className="pink accent-3">
                                <p>#f50057 pink accent-3</p>
                            </div>
                            <div className="pink accent-4 white-text">
                                <p>#c51162 pink accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="purple lighten-5">
                                <p>#f3e5f5 purple lighten-5</p>
                            </div>
                            <div className="purple lighten-4">
                                <p>#e1bee7 purple lighten-4</p>
                            </div>
                            <div className="purple lighten-3">
                                <p>#ce93d8 purple lighten-3</p>
                            </div>
                            <div className="purple lighten-2">
                                <p>#ba68c8 purple lighten-2</p>
                            </div>
                            <div className="purple lighten-1">
                                <p>#ab47bc #purple lighten-1</p>
                            </div>
                            <div className="purple">
                                <p>#9c27b0 purple</p>
                            </div>
                            <div className="purple darken-1 white-text">
                                <p>#8e24aa purple darken-1</p>
                            </div>
                            <div className="purple darken-2 white-text">
                                <p>#7b1fa2 purple darken-2</p>
                            </div>
                            <div className="purple darken-3 white-text">
                                <p>#6a1b9a purple darken-3</p>
                            </div>
                            <div className="purple darken-4 white-text">
                                <p>#4a148c purple darken-4</p>
                            </div>
                            <div className="purple accent-1">
                                <p>#ea80fc purple accent-5</p>
                            </div>
                            <div className="purple accent-2">
                                <p>#e040fb purple accent-5</p>
                            </div>
                            <div className="purple accent-3">
                                <p>#d500f9 purple accent-5</p>
                            </div>
                            <div className="purple accent-4 white-text">
                                <p>#aa00ff purple accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="deep-purple lighten-5">
                                <p>#ede7f6 deep-purple lighten-5</p>
                            </div>
                            <div className="deep-purple lighten-4">
                                <p>#d1c4e9 deep-purple lighten-4</p>
                            </div>
                            <div className="deep-purple lighten-3">
                                <p>#b39ddb deep-purple lighten-3</p>
                            </div>
                            <div className="deep-purple lighten-2">
                                <p>#9575cd deep-purple lighten-2</p>
                            </div>
                            <div className="deep-purple lighten-1">
                                <p>#7e57c2 deep-purple lighten-1</p>
                            </div>
                            <div className="deep-purple">
                                <p>#673ab7 deep-purple</p>
                            </div>
                            <div className="deep-purple darken-1 white-text">
                                <p>#5e35b1 deep-purple darken-1</p>
                            </div>
                            <div className="deep-purple darken-2 white-text">
                                <p>#512da8 deep-purple darken-2</p>
                            </div>
                            <div className="deep-purple darken-3 white-text">
                                <p>#4527a0 deep-purple darken-3</p>
                            </div>
                            <div className="deep-purple darken-4 white-text">
                                <p>#311b92 deep-purple darken-4</p>
                            </div>
                            <div className="deep-purple accent-1">
                                <p>#b388ff deep-purple accent-1</p>
                            </div>
                            <div className="deep-purple accent-2">
                                <p>#7c4dff deep-purple accent-2</p>
                            </div>
                            <div className="deep-purple accent-3">
                                <p>#651fff deep-purple accent-3</p>
                            </div>
                            <div className="deep-purple accent-4 white-text">
                                <p>#6200ea deep-purple accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="indigo lighten-5">
                                <p>#e8eaf6 indigo lighten-5</p>
                            </div>
                            <div className="indigo lighten-4">
                                <p>#c5cae9 indigo lighten-4</p>
                            </div>
                            <div className="indigo lighten-3">
                                <p>#9fa8da indigo lighten-3</p>
                            </div>
                            <div className="indigo lighten-2">
                                <p>#7986cb indigo lighten-2</p>
                            </div>
                            <div className="indigo lighten-1">
                                <p>#5c6bc0 indigo lighten-1</p>
                            </div>
                            <div className="indigo">
                                <p>#3f51b5 indigo</p>
                            </div>
                            <div className="indigo darken-1 white-text">
                                <p>#3949ab indigo darken-1</p>
                            </div>
                            <div className="indigo darken-2 white-text">
                                <p>#303f9f indigo darken-2</p>
                            </div>
                            <div className="indigo darken-3 white-text">
                                <p>#283593 indigo darken-3</p>
                            </div>
                            <div className="indigo darken-4 white-text">
                                <p>#1a237e indigo darken-4</p>
                            </div>
                            <div className="indigo accent-1">
                                <p>#8c9eff indigo accent-1</p>
                            </div>
                            <div className="indigo accent-2">
                                <p>#536dfe indigo accent-2</p>
                            </div>
                            <div className="indigo accent-3">
                                <p>#3d5afe indigo accent-3</p>
                            </div>
                            <div className="indigo accent-4 white-text">
                                <p>#304ffe indigo accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="blue lighten-5">
                                <p>#e3f2fd blue lighten-5</p>
                            </div>
                            <div className="blue lighten-4">
                                <p>#bbdefb blue lighten-4</p>
                            </div>
                            <div className="blue lighten-3">
                                <p>#90caf9 blue lighten-3</p>
                            </div>
                            <div className="blue lighten-2">
                                <p>#64b5f6 blue lighten-2</p>
                            </div>
                            <div className="blue lighten-1">
                                <p>#42a5f5 blue lighten-1</p>
                            </div>
                            <div className="blue">
                                <p>#2196f3 blue</p>
                            </div>
                            <div className="blue darken-1 white-text">
                                <p>#1e88e5 blue darken-1</p>
                            </div>
                            <div className="blue darken-2 white-text">
                                <p>#1976d2 blue darken-2</p>
                            </div>
                            <div className="blue darken-3 white-text">
                                <p>#1565c0 blue darken-3</p>
                            </div>
                            <div className="blue darken-4 white-text">
                                <p>#0d47a1 blue darken-4</p>
                            </div>
                            <div className="blue accent-1">
                                <p>#82b1ff blue accent-1</p>
                            </div>
                            <div className="blue accent-2">
                                <p>#448aff blue accent-2</p>
                            </div>
                            <div className="blue accent-3">
                                <p>#2979ff blue accent-3</p>
                            </div>
                            <div className="blue accent-4 white-text">
                                <p>#2962ff blue accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="light-blue lighten-5">
                                <p>#e1f5fe light-blue lighten-5</p>
                            </div>
                            <div className="light-blue lighten-4">
                                <p>#b3e5fc light-blue lighten-4</p>
                            </div>
                            <div className="light-blue lighten-3">
                                <p>#81d4fa light-blue lighten-3</p>
                            </div>
                            <div className="light-blue lighten-2">
                                <p>#4fc3f7 light-blue lighten-2</p>
                            </div>
                            <div className="light-blue lighten-1">
                                <p>#29b6f6 light-blue lighten-1</p>
                            </div>
                            <div className="light-blue">
                                <p>#03a9f4 light-blue</p>
                            </div>
                            <div className="light-blue darken-1 white-text">
                                <p>#039be5 light-blue darken-1</p>
                            </div>
                            <div className="light-blue darken-2 white-text">
                                <p>#0288d1 light-blue darken-2</p>
                            </div>
                            <div className="light-blue darken-3 white-text">
                                <p>#0277bd light-blue darken-3</p>
                            </div>
                            <div className="light-blue darken-4 white-text">
                                <p>#01579b light-blue darken-4</p>
                            </div>
                            <div className="light-blue accent-1">
                                <p>#l80d8ff ight-blue accent-1</p>
                            </div>
                            <div className="light-blue accent-2">
                                <p>#40c4ff light-blue accent-2</p>
                            </div>
                            <div className="light-blue accent-3">
                                <p>#00b0ff light-blue accent-3</p>
                            </div>
                            <div className="light-blue accent-4 white-text">
                                <p>#0091ea light-blue accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="cyan lighten-5">
                                <p>#e0f7fa cyan lighten-5</p>
                            </div>
                            <div className="cyan lighten-4">
                                <p>#b2ebf2 cyan lighten-4</p>
                            </div>
                            <div className="cyan lighten-3">
                                <p>#80deea cyan lighten-3</p>
                            </div>
                            <div className="cyan lighten-2">
                                <p>#4dd0e1 cyan lighten-2</p>
                            </div>
                            <div className="cyan lighten-1">
                                <p>#26c6da cyan lighten-1</p>
                            </div>
                            <div className="cyan">
                                <p>#00bcd4 cyan</p>
                            </div>
                            <div className="cyan darken-1 white-text">
                                <p>#00acc1 cyan darken-1</p>
                            </div>
                            <div className="cyan darken-2 white-text">
                                <p>#0097a7 cyan darken-2</p>
                            </div>
                            <div className="cyan darken-3 white-text">
                                <p>#00838f cyan darken-3</p>
                            </div>
                            <div className="cyan darken-4 white-text">
                                <p>#006064 cyan darken-4</p>
                            </div>
                            <div className="cyan accent-1">
                                <p>#84ffff cyan accent-1</p>
                            </div>
                            <div className="cyan accent-2">
                                <p>#18ffff cyan accent-2</p>
                            </div>
                            <div className="cyan accent-3">
                                <p>#00e5ff cyan accent-3</p>
                            </div>
                            <div className="cyan accent-4 white-text">
                                <p>#00b8d4 cyan accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="teal lighten-5">
                                <p>#e0f2f1 teal lighten-5</p>
                            </div>
                            <div className="teal lighten-4">
                                <p>#b2dfdb teal lighten-4</p>
                            </div>
                            <div className="teal lighten-3">
                                <p>#80cbc4 teal lighten-3</p>
                            </div>
                            <div className="teal lighten-2">
                                <p>#4db6ac teal lighten-2</p>
                            </div>
                            <div className="teal lighten-1">
                                <p>#26a69a teal lighten-1</p>
                            </div>
                            <div className="teal">
                                <p>#009688 teal</p>
                            </div>
                            <div className="teal darken-1 white-text">
                                <p>#00897b teal darken-1</p>
                            </div>
                            <div className="teal darken-2 white-text">
                                <p>#00796b teal darken-2</p>
                            </div>
                            <div className="teal darken-3 white-text">
                                <p>#00695c teal darken-3</p>
                            </div>
                            <div className="teal darken-4 white-text">
                                <p>#004d40 teal darken-4</p>
                            </div>
                            <div className="teal accent-1">
                                <p>#a7ffeb teal accent-1</p>
                            </div>
                            <div className="teal accent-2">
                                <p>#64ffda teal accent-2</p>
                            </div>
                            <div className="teal accent-3">
                                <p>#1de9b6 teal accent-3</p>
                            </div>
                            <div className="teal accent-4 white-text">
                                <p>#00bfa5 teal accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="green lighten-5">
                                <p>#e8f5e9 green lighten-5</p>
                            </div>
                            <div className="green lighten-4">
                                <p>#c8e6c9 green lighten-4</p>
                            </div>
                            <div className="green lighten-3">
                                <p>#a5d6a7 green lighten-3</p>
                            </div>
                            <div className="green lighten-2">
                                <p>#81c784 green lighten-2</p>
                            </div>
                            <div className="green lighten-1">
                                <p>#66bb6a green lighten-1</p>
                            </div>
                            <div className="green">
                                <p>#4caf50 green</p>
                            </div>
                            <div className="green darken-1 white-text">
                                <p>#43a047 green darken-1</p>
                            </div>
                            <div className="green darken-2 white-text">
                                <p>#388e3c green darken-2</p>
                            </div>
                            <div className="green darken-3 white-text">
                                <p>#2e7d32 green darken-3</p>
                            </div>
                            <div className="green darken-4 white-text">
                                <p>#1b5e20 green darken-4</p>
                            </div>
                            <div className="green accent-1">
                                <p>#b9f6ca green accent-1</p>
                            </div>
                            <div className="green accent-2">
                                <p>#69f0ae green accent-2</p>
                            </div>
                            <div className="green accent-3">
                                <p>#00e676 green accent-3</p>
                            </div>
                            <div className="green accent-4 white-text">
                                <p>#00c853 green accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="light-green lighten-5">
                                <p>#f1f8e9 light-green lighten-5</p>
                            </div>
                            <div className="light-green lighten-4">
                                <p>#dcedc8 light-green lighten-4</p>
                            </div>
                            <div className="light-green lighten-3">
                                <p>#c5e1a5 light-green lighten-3</p>
                            </div>
                            <div className="light-green lighten-2">
                                <p>#aed581 light-green lighten-2</p>
                            </div>
                            <div className="light-green lighten-1">
                                <p>#9ccc65 light-green lighten-1</p>
                            </div>
                            <div className="light-green">
                                <p>#8bc34a light-green</p>
                            </div>
                            <div className="light-green darken-1 white-text">
                                <p>#7cb342 light-green darken-1</p>
                            </div>
                            <div className="light-green darken-2 white-text">
                                <p>#689f38 light-green darken-2</p>
                            </div>
                            <div className="light-green darken-3 white-text">
                                <p>#558b2f light-green darken-3</p>
                            </div>
                            <div className="light-green darken-4 white-text">
                                <p>#33691e light-green darken-4</p>
                            </div>
                            <div className="light-green accent-1">
                                <p>#ccff90 light-green accent-1</p>
                            </div>
                            <div className="light-green accent-2">
                                <p>#b2ff59 light-green accent-2</p>
                            </div>
                            <div className="light-green accent-3">
                                <p>#76ff03 light-green accent-3</p>
                            </div>
                            <div className="light-green accent-4 white-text">
                                <p>#64dd17 light-green accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="lime lighten-5">
                                <p>#f9fbe7 lime lighten-5</p>
                            </div>
                            <div className="lime lighten-4">
                                <p>#f0f4c3 lime lighten-4</p>
                            </div>
                            <div className="lime lighten-3">
                                <p>#e6ee9c lime lighten-3</p>
                            </div>
                            <div className="lime lighten-2">
                                <p>#dce775 lime lighten-2</p>
                            </div>
                            <div className="lime lighten-1">
                                <p>#d4e157 lime lighten-1</p>
                            </div>
                            <div className="lime">
                                <p>#cddc39 lime</p>
                            </div>
                            <div className="lime darken-1 white-text">
                                <p>#c0ca33 lime darken-1</p>
                            </div>
                            <div className="lime darken-2 white-text">
                                <p>#afb42b lime darken-2</p>
                            </div>
                            <div className="lime darken-3 white-text">
                                <p>#9e9d24 lime darken-3</p>
                            </div>
                            <div className="lime darken-4 white-text">
                                <p>#827717 lime darken-4</p>
                            </div>
                            <div className="lime accent-1">
                                <p>#f4ff81 lime accent-1</p>
                            </div>
                            <div className="lime accent-2">
                                <p>#eeff41 lime accent-2</p>
                            </div>
                            <div className="lime accent-3">
                                <p>#c6ff00 lime accent-3</p>
                            </div>
                            <div className="lime accent-4 white-text">
                                <p>#aeea00 lime accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="yellow lighten-5">
                                <p>#fffde7 yellow lighten-5</p>
                            </div>
                            <div className="yellow lighten-4">
                                <p>#fff9c4 yellow lighten-4</p>
                            </div>
                            <div className="yellow lighten-3">
                                <p>#fff59d yellow lighten-3</p>
                            </div>
                            <div className="yellow lighten-2">
                                <p>#fff176 yellow lighten-2</p>
                            </div>
                            <div className="yellow lighten-1">
                                <p>#ffee58 yellow lighten-1</p>
                            </div>
                            <div className="yellow">
                                <p>#ffeb3b yellow</p>
                            </div>
                            <div className="yellow darken-1 white-text">
                                <p>#fdd835 yellow darken-1</p>
                            </div>
                            <div className="yellow darken-2 white-text">
                                <p>#fbc02d yellow darken-2</p>
                            </div>
                            <div className="yellow darken-3 white-text">
                                <p>#f9a825 yellow darken-3</p>
                            </div>
                            <div className="yellow darken-4 white-text">
                                <p>#f57f17 yellow darken-4</p>
                            </div>
                            <div className="yellow accent-1">
                                <p>#ffff8d yellow accent-1</p>
                            </div>
                            <div className="yellow accent-2">
                                <p>#ffff00 yellow accent-2</p>
                            </div>
                            <div className="yellow accent-3">
                                <p>#ffea00 yellow accent-3</p>
                            </div>
                            <div className="yellow accent-4 white-text">
                                <p>#ffd600 yellow accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="amber lighten-5">
                                <p>#fff8e1 amber lighten-5</p>
                            </div>
                            <div className="amber lighten-4">
                                <p>#ffecb3 amber lighten-4</p>
                            </div>
                            <div className="amber lighten-3">
                                <p>#ffe082 amber lighten-3</p>
                            </div>
                            <div className="amber lighten-2">
                                <p>#ffd54f amber lighten-2</p>
                            </div>
                            <div className="amber lighten-1">
                                <p>#ffca28 amber lighten-1</p>
                            </div>
                            <div className="amber">
                                <p>#ffc107 amber</p>
                            </div>
                            <div className="amber darken-1 white-text">
                                <p>#ffb300 amber darken-1</p>
                            </div>
                            <div className="amber darken-2 white-text">
                                <p>#ffa000 amber darken-2</p>
                            </div>
                            <div className="amber darken-3 white-text">
                                <p>#ff8f00 amber darken-3</p>
                            </div>
                            <div className="amber darken-4 white-text">
                                <p>#ff6f00 amber darken-4</p>
                            </div>
                            <div className="amber accent-1">
                                <p>#ffe57f amber accent-1</p>
                            </div>
                            <div className="amber accent-2">
                                <p>#ffd740 amber accent-2</p>
                            </div>
                            <div className="amber accent-3">
                                <p>#ffc400 amber accent-3</p>
                            </div>
                            <div className="amber accent-4 white-text">
                                <p>#ffab00 amber accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="orange lighten-5">
                                <p>#fff3e0 orange lighten-5</p>
                            </div>
                            <div className="orange lighten-4">
                                <p>#ffe0b2 orange lighten-4</p>
                            </div>
                            <div className="orange lighten-3">
                                <p>#ffcc80 orange lighten-3</p>
                            </div>
                            <div className="orange lighten-2">
                                <p>#ffb74d orange lighten-2</p>
                            </div>
                            <div className="orange lighten-1">
                                <p>#ffa726 orange lighten-1</p>
                            </div>
                            <div className="orange">
                                <p>#ff9800 orange</p>
                            </div>
                            <div className="orange darken-1 white-text">
                                <p>#fb8c00 orange darken-1</p>
                            </div>
                            <div className="orange darken-2 white-text">
                                <p>#f57c00 orange darken-2</p>
                            </div>
                            <div className="orange darken-3 white-text">
                                <p>#ef6c00 orange darken-3</p>
                            </div>
                            <div className="orange darken-4 white-text">
                                <p>#e65100 orange darken-4</p>
                            </div>
                            <div className="orange accent-1">
                                <p>#ffd180 orange accent-1</p>
                            </div>
                            <div className="orange accent-2">
                                <p>#ffab40 orange accent-2</p>
                            </div>
                            <div className="orange accent-3">
                                <p>#ff9100 orange accent-3</p>
                            </div>
                            <div className="orange accent-4 white-text">
                                <p>#ff6d00 orange accent-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="deep-orange lighten-5">
                                <p>#fbe9e7 deep-orange lighten-5</p>
                            </div>
                            <div className="deep-orange lighten-4">
                                <p>#ffccbc deep-orange lighten-4</p>
                            </div>
                            <div className="deep-orange lighten-3">
                                <p>#ffab91 deep-orange lighten-3</p>
                            </div>
                            <div className="deep-orange lighten-2">
                                <p>#ff8a65 deep-orange lighten-2</p>
                            </div>
                            <div className="deep-orange lighten-1">
                                <p>#ff7043 deep-orange lighten-1</p>
                            </div>
                            <div className="deep-orange">
                                <p>#ff5722 deep-orange</p>
                            </div>
                            <div className="deep-orange darken-1 white-text">
                                <p>#f4511e deep-orange darken-1</p>
                            </div>
                            <div className="deep-orange darken-2 white-text">
                                <p>#e64a19 deep-orange darken-2</p>
                            </div>
                            <div className="deep-orange darken-3 white-text">
                                <p>#d84315 deep-orange darken-3</p>
                            </div>
                            <div className="deep-orange darken-4 white-text">
                                <p>#bf360c deep-orange darken-4</p>
                            </div>
                            <div className="deep-orange accent-1">
                                <p>#ff9e80 deep-orange darken-1</p>
                            </div>
                            <div className="deep-orange accent-2">
                                <p>#ff6e40 deep-orange darken-2</p>
                            </div>
                            <div className="deep-orange accent-3">
                                <p>#ff3d00 deep-orange darken-3</p>
                            </div>
                            <div className="deep-orange accent-4 white-text">
                                <p>#dd2c00 deep-orange darken-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="brown lighten-5">
                                <p>#efebe9 brown lighten-5</p>
                            </div>
                            <div className="brown lighten-4">
                                <p>#d7ccc8 brown lighten-4</p>
                            </div>
                            <div className="brown lighten-3">
                                <p>#bcaaa4 brown lighten-3</p>
                            </div>
                            <div className="brown lighten-2">
                                <p>#a1887f brown lighten-2</p>
                            </div>
                            <div className="brown lighten-1">
                                <p>#8d6e63 brown lighten-1</p>
                            </div>
                            <div className="brown">
                                <p>#795548 brown</p>
                            </div>
                            <div className="brown darken-1 white-text">
                                <p>#6d4c41 brown darken-1</p>
                            </div>
                            <div className="brown darken-2 white-text">
                                <p>#5d4037 brown darken-2</p>
                            </div>
                            <div className="brown darken-3 white-text">
                                <p>#4e342e brown darken-3</p>
                            </div>
                            <div className="brown darken-4 white-text">
                                <p>#3e2723 brown darken-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="grey lighten-5">
                                <p>#fafafa grey lighten-5</p>
                            </div>
                            <div className="grey lighten-4">
                                <p>#f5f5f5 grey lighten-4</p>
                            </div>
                            <div className="grey lighten-3">
                                <p>#eeeeee grey lighten-3</p>
                            </div>
                            <div className="grey lighten-2">
                                <p>#e0e0e0 grey lighten-2</p>
                            </div>
                            <div className="grey lighten-1">
                                <p>#bdbdbd grey lighten-1</p>
                            </div>
                            <div className="grey">
                                <p>#9e9e9e grey</p>
                            </div>
                            <div className="grey darken-1 white-text">
                                <p>#757575 grey darken-1</p>
                            </div>
                            <div className="grey darken-2 white-text">
                                <p>#616161 grey darken-2</p>
                            </div>
                            <div className="grey darken-3 white-text">
                                <p>#424242 grey darken-3</p>
                            </div>
                            <div className="grey darken-4 white-text">
                                <p>#212121 grey darken-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="blue-grey lighten-5">
                                <p>#eceff1 blue-grey lighten-5</p>
                            </div>
                            <div className="blue-grey lighten-4">
                                <p>#cfd8dc blue-grey lighten-4</p>
                            </div>
                            <div className="blue-grey lighten-3">
                                <p>#b0bec5 blue-grey lighten-3</p>
                            </div>
                            <div className="blue-grey lighten-2">
                                <p>#90a4ae blue-grey lighten-2</p>
                            </div>
                            <div className="blue-grey lighten-1">
                                <p>#78909c blue-grey lighten-1</p>
                            </div>
                            <div className="blue-grey">
                                <p>#607d8b blue-grey</p>
                            </div>
                            <div className="blue-grey darken-1 white-text">
                                <p>#546e7a blue-grey darken-1</p>
                            </div>
                            <div className="blue-grey darken-2 white-text">
                                <p>#455a64 blue-grey darken-2</p>
                            </div>
                            <div className="blue-grey darken-3 white-text">
                                <p>#37474f blue-grey darken-3</p>
                            </div>
                            <div className="blue-grey darken-4 white-text">
                                <p>#263238 blue-grey darken-4</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="black white-text">
                                <p>#000000 black</p>
                            </div>
                            <div className="white">
                                <p>#ffffff white</p>
                            </div>
                            <div className="transparent">
                                <p>transparent</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="mdb-color lighten-5">
                                <p>#eceff1 mdb-color lighten-5</p>
                            </div>
                            <div className="mdb-color lighten-4">
                                <p>#cfd8dc mdb-color lighten-4</p>
                            </div>
                            <div className="mdb-color lighten-3">
                                <p>#b0bec5 mdb-color lighten-3</p>
                            </div>
                            <div className="mdb-color lighten-2">
                                <p>#90a4ae mdb-color lighten-2</p>
                            </div>
                            <div className="mdb-color lighten-1 white-text">
                                <p>#78909c mdb-color lighten-1</p>
                            </div>
                            <div className="mdb-color white-text">
                                <p>#607d8b mdb-color</p>
                            </div>
                            <div className="mdb-color darken-1 white-text">
                                <p>#546e7a mdb-color darken-1</p>
                            </div>
                            <div className="mdb-color darken-2 white-text">
                                <p>#455a64 mdb-color darken-2</p>
                            </div>
                            <div className="mdb-color darken-3 white-text">
                                <p>#37474f mdb-color darken-3</p>
                            </div>
                            <div className="mdb-color darken-4 white-text">
                                <p>#263238 mdb-color darken-4</p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </section>
            </section>

            <hr className="my-5"/>

            <section id="rgba-colors">
                <h4 className="mb-5 font-bold dark-grey-text"><strong>RGBA Colors</strong></h4>
                <p className="description"></p>

                <section>
                    <MDBRow className="dynamic-color">
                        <MDBCol md="4">
                            <div className="rgba-blue-light">
                                <p>rgba(3, 169, 244, 0.3) rgba-blue-light</p>
                            </div>
                            <div className="rgba-red-light">
                                <p>rgba(244, 67, 54, 0.3) rgba-red-light</p>
                            </div>
                            <div className="rgba-pink-light">
                                <p>rgba(233, 30, 99, 0.3) rgba-pink-light</p>
                            </div>
                            <div className="rgba-purple-light">
                                <p>rgba(156, 39, 176, 0.3) rgba-purple-light</p>
                            </div>
                            <div className="rgba-indigo-light">
                                <p>rgba(63, 81, 181, 0.3) rgba-indigo-light</p>
                            </div>
                            <div className="rgba-cyan-light">
                                <p>rgba(0, 188, 212, 0.3) rgba-cyan-light</p>
                            </div>
                            <div className="rgba-teal-light">
                                <p>rgba(0, 150, 136, 0.3) rgba-teal-light</p>
                            </div>
                            <div className="rgba-green-light">
                                <p>#rgba(76, 175, 80, 0.3) rgba-green-light</p>
                            </div>
                            <div className="rgba-lime-light">
                                <p>rgba(205, 220, 57, 0.3) rgba-lime-light</p>
                            </div>
                            <div className="rgba-yellow-light">
                                <p>rgba(255, 235, 59, 0.3) rgba-yellow-light</p>
                            </div>
                            <div className="rgba-orange-light">
                                <p>rgba(255, 152, 0, 0.3) rgba-orange-light</p>
                            </div>
                            <div className="rgba-brown-light">
                                <p>rgba(121, 85, 72, 0.3) rgba-brown-light</p>
                            </div>
                            <div className="rgba-grey-light">
                                <p>rgba(158, 158, 158, 0.3) rgba-grey-light</p>
                            </div>
                            <div className="rgba-bluegrey-light">
                                <p>rgba(96, 125, 139, 0.3) rgba-bluegrey-light</p>
                            </div>
                            <div className="rgba-black-light">
                                <p>rgba(0, 0, 0, 0.3) rgba-black-light</p>
                            </div>
                            <div className="rgba-stylish-light">
                                <p>rgba(62, 69, 81, 0.3) rgba-stylish-light</p>
                            </div>
                            <div className="rgba-white-light">
                                <p>rgba(255, 255, 255, 0.3) rgba-white-light</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="rgba-blue-strong white-text">
                                <p>rgba(3, 169, 244, 0.7) rgba-blue-strong</p>
                            </div>
                            <div className="rgba-red-strong white-text">
                                <p>rgba(244, 67, 54, 0.7) rgba-red-strong</p>
                            </div>
                            <div className="rgba-pink-strong white-text">
                                <p>rgba(233, 30, 99, 0.7) rgba-pink-strong</p>
                            </div>
                            <div className="rgba-purple-strong white-text">
                                <p>rgba(156, 39, 176, 0.7) rgba-purple-strong</p>
                            </div>
                            <div className="rgba-indigo-strong white-text">
                                <p>rgba(63, 81, 181, 0.7) rgba-indigo-strong</p>
                            </div>
                            <div className="rgba-cyan-strong white-text">
                                <p>rgba(0, 188, 212, 0.7) rgba-cyan-strong</p>
                            </div>
                            <div className="rgba-teal-strong white-text">
                                <p>rgba(0, 150, 136, 0.7) rgba-teal-strong</p>
                            </div>
                            <div className="rgba-green-strong white-text">
                                <p>#rgba(76, 175, 80, 0.7) rgba-green-strong</p>
                            </div>
                            <div className="rgba-lime-strong">
                                <p>rgba(205, 220, 57, 0.7) rgba-lime-strong</p>
                            </div>
                            <div className="rgba-yellow-strong">
                                <p>rgba(255, 235, 59, 0.7) rgba-yellow-strong</p>
                            </div>
                            <div className="rgba-orange-strong white-text">
                                <p>rgba(255, 152, 0, 0.7) rgba-orange-strong</p>
                            </div>
                            <div className="rgba-brown-strong white-text">
                                <p>rgba(121, 85, 72, 0.7) rgba-brown-strong</p>
                            </div>
                            <div className="rgba-grey-strong white-text">
                                <p>rgba(158, 158, 158, 0.7) rgba-grey-strong</p>
                            </div>
                            <div className="rgba-bluegrey-strong white-text">
                                <p>rgba(96, 125, 139, 0.7) rgba-bluegrey-strong</p>
                            </div>
                            <div className="rgba-black-strong white-text">
                                <p>rgba(0, 0, 0, 0.7) rgba-black-strong</p>
                            </div>
                            <div className="rgba-stylish-strong white-text">
                                <p>rgba(62, 69, 81, 0.7) rgba-stylish-strong</p>
                            </div>
                            <div className="rgba-white-strong">
                                <p>rgba(255, 255, 255, 0.7) rgba-white-strong</p>
                            </div>
                        </MDBCol>

                        <MDBCol md="4">
                            <div className="rgba-blue-slight">
                                <p>rgba(3, 169, 244, 0.1) rgba-blue-slight</p>
                            </div>
                            <div className="rgba-red-slight">
                                <p>rgba(244, 67, 54, 0.1) rgba-red-slight</p>
                            </div>
                            <div className="rgba-pink-slight">
                                <p>rgba(233, 30, 99, 0.1) rgba-pink-slight</p>
                            </div>
                            <div className="rgba-purple-slight">
                                <p>rgba(156, 39, 176, 0.1) rgba-purple-slight</p>
                            </div>
                            <div className="rgba-indigo-slight">
                                <p>rgba(63, 81, 181, 0.1) rgba-indigo-slight</p>
                            </div>
                            <div className="rgba-cyan-slight">
                                <p>rgba(0, 188, 212, 0.1) rgba-cyan-slight</p>
                            </div>
                            <div className="rgba-teal-slight">
                                <p>rgba(0, 150, 136, 0.1) rgba-teal-slight</p>
                            </div>
                            <div className="rgba-green-slight">
                                <p>#rgba(76, 175, 80, 0.1) rgba-green-slight</p>
                            </div>
                            <div className="rgba-lime-slight">
                                <p>rgba(205, 220, 57, 0.1) rgba-lime-slight</p>
                            </div>
                            <div className="rgba-yellow-slight">
                                <p>rgba(255, 235, 59, 0.1) rgba-yellow-slight</p>
                            </div>
                            <div className="rgba-orange-slight">
                                <p>rgba(255, 152, 0, 0.1) rgba-orange-slight</p>
                            </div>
                            <div className="rgba-brown-slight">
                                <p>rgba(121, 85, 72, 0.1) rgba-brown-slight</p>
                            </div>
                            <div className="rgba-grey-slight">
                                <p>rgba(158, 158, 158, 0.1) rgba-grey-slight</p>
                            </div>
                            <div className="rgba-bluegrey-slight">
                                <p>rgba(96, 125, 139, 0.1) rgba-bluegrey-slight</p>
                            </div>
                            <div className="rgba-black-slight">
                                <p>rgba(0, 0, 0, 0.1) rgba-black-slight</p>
                            </div>
                            <div className="rgba-stylish-slight">
                                <p>rgba(62, 69, 81, 0.1) rgba-stylish-slight</p>
                            </div>
                            <div className="rgba-white-slight">
                                <p>rgba(255, 255, 255, 0.1) rgba-white-slight</p>
                            </div>
                        </MDBCol>

                    </MDBRow>

                </section>

            </section>

            <hr className="my-5"/>

            <section id="text-colors">
                <h4 className="mb-5 font-bold dark-grey-text"><strong>Text colors</strong></h4>
                <p className="description">MDBootstrap allows you to simply set the text color. All you have to to is add one of our color classes:</p>

                <section>
                    <p className="red-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <p className="pink-text">Impedit architecto, totam hic sunt eum odio, deleniti.</p>
                    <p className="purple-text">Similique ex, expedita minus assumenda a magni beatae dolorum itaque.</p>
                    <p className="deep-purple-text">Veritatis eum libero nam, adipisci, necessitatibus eos.</p>
                    <p className="indigo-text">Sapiente, ea. Molestias sunt nihil saepe numquam quas perferendis.</p>
                    <p className="blue-text">Sapiente sit, possimus maiores, quo alias corporis cum eum nesciunt.</p>
                    <p className="light-blue-text">Corrupti adipisci, praesentium iusto eos, iure debitis modi.</p>
                    <p className="cyan-text">Odio autem veritatis aliquam consequuntur ea voluptatibus.</p>
                    <p className="teal-text">Similique, adipisci ea, sequi magnam sit inventore.</p>
                    <p className="green-text">Eos et vitae, odit deserunt dignissimos voluptas.</p>
                    <p className="light-green-text">Fugit nihil numquam inventore accusantium tenetur ex est.</p>
                    <p className="lime-text">Sed odit inventore illum excepturi officia, reiciendis numquam modi.</p>
                    <p className="yellow-text">At odio animi distinctio, aut enim tempora nobis error odit mollitia.</p>
                    <p className="amber-text">Quo at accusamus vel earum hic, inventore non, minima sint.</p>
                    <p className="orange-text">Iusto odit eos distinctio temporibus voluptates ad, illo repellat.</p>
                    <p className="deep-orange-text">Quas fugit fuga assumenda nihil esse et culpa reiciendis voluptatum.</p>
                    <p className="brown-text">Excepturi iusto amet sunt illo ad debitis quibusdam eius, consequatur.</p>
                    <p className="grey-text">Non sint nulla incidunt, odit repellat tempore, veniam ratione fugit.</p>
                    <p className="blue-grey-text">Eius, provident. Quo similique, repellat atque voluptas explicabo odio.</p>
                    <p className="mdb-color white-text">In consequuntur error, non consequatur expedita maxime dolorum.</p>
                </section>
            </section>

            <section className="pb-4 pt-5">
              <MDBCard className="text-center">
                <MDBCardHeader color="primary-color" tag="h3">Full documentation</MDBCardHeader>
                <MDBCardBody>
                  <p className="card-text">Read the full documentation for these components.</p>
                  <MDBBtn tag="a" href="https://mdbootstrap.com/docs/react/css/colors/" color="primary" target="_blank">
                    Learn more
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </section>
          </MDBContainer>
        </div>
  );
}

export default Colors;