import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCollapseHeader,
    MDBCollapse,
    MDBCardBody,
    MDBIcon,
    MDBNav,
    MDBNavLink
} from 'mdbreact';
import LinkCard from '../LinkCard';
import './collapse.css';

class pagination extends Component {
    state = {
        collapseID: "collapse3"
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        const { collapseID } = this.state;
        const resetPadding = {
            padding: "0"
        }

        return (
            <div id="pagination">
                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol md="6">
                            <MDBContainer className="md-accordion mt-5" style={resetPadding}>
                                <h4 className="mt-5 mb-4">Basic Accordion</h4>
                                <MDBCard className="mt-3">
                                    <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
                                        Collapsible Group Item #1
                                        <i
                                            className={
                                                collapseID === "collapse1"
                                                    ? "fa fa-angle-down rotate-icon"
                                                    : "fa fa-angle-down"
                                            }
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse1" isOpen={collapseID}>
                                        <MDBCardBody>
                                            Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non
                                            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                            bird on it squid single-origin coffee nulla assumenda shoreditch
                                            et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                            anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                            raw denim aesthetic synth nesciunt you probably haven&apos;t
                                            heard of them accusamus labore sustainable VHS.
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
                                        Collapsible Group Item #2
                                        <i
                                            className={
                                                collapseID === "collapse2"
                                                    ? "fa fa-angle-down rotate-icon"
                                                    : "fa fa-angle-down"
                                            }
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse2" isOpen={collapseID}>
                                        <MDBCardBody>
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa
                                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                            put a bird on it squid single-origin coffee nulla assumenda
                                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                            wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur butcher vice lomo. Leggings occaecat craft beer
                                            farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven&apos;t heard of them accusamus labore sustainable VHS.
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCollapseHeader className="blue" onClick={this.toggleCollapse("collapse3")}>
                                        Collapsible Group Item #3
                                        <i
                                            className={
                                                collapseID === "collapse3"
                                                    ? "fa fa-angle-down rotate-icon"
                                                    : "fa fa-angle-down"
                                            }
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse3" isOpen={collapseID}>
                                        <MDBCardBody className="text-white">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa
                                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                            put a bird on it squid single-origin coffee nulla assumenda
                                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                            wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur butcher vice lomo. Leggings occaecat craft beer
                                            farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven&apos;t heard of them accusamus labore sustainable VHS.
                                     </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>
                            </MDBContainer>
                        </MDBCol>

                        <MDBCol md="6">
                            <MDBContainer className="md-accordion mt-5" style={resetPadding}>
                                <h4 className="mt-5 mb-4">Basic Accordion</h4>
                                <MDBCard className="mt-3">
                                    <MDBCollapseHeader className="blue" style={{ color: "white" }} onClick={this.toggleCollapse("collapse4")}>
                                        Collapsible Group Item #1
                                        <i
                                            className={
                                                collapseID === "collapse4"
                                                    ? "fa fa-angle-down rotate-icon"
                                                    : "fa fa-angle-down"
                                            }
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse4" className="blue" isOpen={collapseID}>
                                        <MDBCardBody className="text-white">
                                            Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non
                                            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                                            laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                                            bird on it squid single-origin coffee nulla assumenda shoreditch
                                            et. Nihil anim keffiyeh helvetica, craft beer labore wes
                                            anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                                            raw denim aesthetic synth nesciunt you probably haven&apos;t
                                            heard of them accusamus labore sustainable VHS.
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCollapseHeader className="blue" onClick={this.toggleCollapse("collapse5")}>
                                        Collapsible Group Item #2
                                        <i
                                            className={
                                                collapseID === "collapse5"
                                                    ? "fa fa-angle-down rotate-icon"
                                                    : "fa fa-angle-down"
                                            }
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse5" className="blue" isOpen={collapseID}>
                                        <MDBCardBody className="text-white">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa
                                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                            put a bird on it squid single-origin coffee nulla assumenda
                                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                            wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur butcher vice lomo. Leggings occaecat craft beer
                                            farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven&apos;t heard of them accusamus labore sustainable VHS.
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCollapseHeader className="blue" onClick={this.toggleCollapse("collapse6")}>
                                        Collapsible Group Item #3
                                        <i
                                            className={
                                                collapseID === "collapse6"
                                                    ? "fa fa-angle-down rotate-icon"
                                                    : "fa fa-angle-down"
                                            }
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse6" className="blue" isOpen={collapseID}>
                                        <MDBCardBody className="text-white">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                                            accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa
                                            nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                                            put a bird on it squid single-origin coffee nulla assumenda
                                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                            wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur butcher vice lomo. Leggings occaecat craft beer
                                            farm-to-table, raw denim aesthetic synth nesciunt you probably
                                            haven&apos;t heard of them accusamus labore sustainable VHS.
                                     </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>


                    <h4 className="mt-5 mb-4">Accordion with icons</h4>
                    <MDBRow className="mt-5">
                        <MDBCol md="6">
                            <MDBContainer
                                className="accordion md-accordion accordion-3 z-depth-1-half"
                                style={{ backgroundColor: "#fff", padding: "0" }}
                            >
                                <MDBNav className="justify-content-center pt-5">
                                    <MDBNavLink to="#!">
                                        <MDBIcon icon="anchor" className="red-text" size="2x" />
                                    </MDBNavLink>
                                    <MDBNavLink to="#!">
                                        <MDBIcon far icon="life-ring" className="red-text" size="2x" />
                                    </MDBNavLink>
                                    <MDBNavLink to="#!">
                                        <MDBIcon far icon="star" className="red-text" size="2x" />
                                    </MDBNavLink>
                                </MDBNav>
                                <h2 className="text-center text-uppercase red-text py-4 px-3">
                                    Hello my friends, I am the nicest accordion!
                                </h2>

                                <hr className="mb-0" />

                                <MDBCard>
                                    <MDBCollapseHeader
                                        onClick={this.toggleCollapse("collapse10")}
                                        tag="h3"
                                        tagClassName="red-text d-flex justify-content-between align-items-center"
                                    >
                                        How awesome accordion I am?
                                        <MDBIcon
                                            icon={
                                                this.state.collapseID === "collapse10"
                                                    ? "angle-up"
                                                    : "angle-down"
                                            }
                                            className="red-text"
                                            size="2x"
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse10" isOpen={this.state.collapseID}>
                                        <MDBCardBody className="pt-0">
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                                aliqua put a bird on it squid single-origin coffee nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                                beer labore wes anderson cred nesciunt sapiente ea proident.
                                                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                probably haven't heard of them accusamus labore sustainable
                                                VHS.
                                            </p>
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCollapseHeader
                                        onClick={this.toggleCollapse("collapse11")}
                                        tag="h3"
                                        tagClassName="red-text d-flex justify-content-between align-items-center"
                                    >
                                        You're the greatest accordion!
                                        <MDBIcon
                                            icon={
                                                this.state.collapseID === "collapse11"
                                                    ? "angle-up"
                                                    : "angle-down"
                                            }
                                            className="red-text"
                                            size="2x"
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse11" isOpen={this.state.collapseID}>
                                        <MDBCardBody className="pt-0">
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                                aliqua put a bird on it squid single-origin coffee nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                                beer labore wes anderson cred nesciunt sapiente ea proident.
                                                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                probably haven't heard of them accusamus labore sustainable
                                                VHS.
                                            </p>
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>

                                <MDBCard>
                                    <MDBCollapseHeader
                                        onClick={this.toggleCollapse("collapse12")}
                                        tag="h3"
                                        tagClassName="red-text d-flex justify-content-between align-items-center"
                                    >
                                        Thank you my dear!
                                        <MDBIcon
                                            icon={
                                                this.state.collapseID === "collapse12"
                                                    ? "angle-up"
                                                    : "angle-down"
                                            }
                                            className="red-text"
                                            size="2x"
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id="collapse12" isOpen={this.state.collapseID}>
                                        <MDBCardBody className="pt-0">
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life
                                                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                                                non cupidatat skateboard dolor brunch. Food truck quinoa
                                                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                                aliqua put a bird on it squid single-origin coffee nulla
                                                assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft
                                                beer labore wes anderson cred nesciunt sapiente ea proident.
                                                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                                                beer farm-to-table, raw denim aesthetic synth nesciunt you
                                                probably haven't heard of them accusamus labore sustainable
                                                VHS.
                                            </p>
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>
                            </MDBContainer>
                        </MDBCol>
                    </MDBRow>

                    <LinkCard docs="https://mdbootstrap.com/docs/react/advanced/collapse/" />
                </MDBContainer >
            </div >
        );

    }

}

export default pagination;