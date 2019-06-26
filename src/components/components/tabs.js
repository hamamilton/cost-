import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTabContent,
  MDBTabPane,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from 'mdbreact';
import classnames from 'classnames';
import LinkCard from '../LinkCard';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeItem1: 1,
      activeItem2: 1,
      activeItem3: 1,
      activeItem4: 1,
      activeItem5: 1,
      activeItem6: 1,
      activeItem7: 1,
      activeItem8: 1
    };
  }

  toggle = (tabsNum) => (tab) => (e) => {
    if (this.state['activeItem'+tabsNum] !== tab) {
      this.setState({
        ['activeItem'+tabsNum]: tab
      });
    }
  }
  
  render() {
    return (
      <MDBContainer fluid>
        <section className="section">

            <h5 className="mt-5 mb-5 dark-grey-text font-weight-bold">Basic examples</h5>

            <MDBRow className="mb-5">
              <MDBCol md="6" className="mb-4">

              <Router>
                <MDBContainer>
                  <MDBNav tabs className="nav-justified">
                    <MDBNavItem>
                      <MDBNavLink
                        to="#!"
                        className={classnames({ active: this.state.activeItem1 === 1 })}
                        onClick={this.toggle(1)(1)}
                      >
                       Profile
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#!"
                        className={classnames({ active: this.state.activeItem1 === 2 })}
                        onClick={this.toggle(1)(2)}
                      >
                         Follow
                      </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink
                        to="#!"
                        className={classnames({ active: this.state.activeItem1 === 3 })}
                        onClick={this.toggle(1)(3)}
                      >
                         Contact
                      </MDBNavLink>
                    </MDBNavItem>
                  </MDBNav>
                  <MDBCard>
                    <MDBCardBody>
                      <MDBTabContent activeItem={this.state.activeItem1}>
                        <MDBTabPane tabId={1}>
                          <MDBRow>
                            <MDBCol sm="12">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                            </MDBCol>
                          </MDBRow>
                        </MDBTabPane>
                        <MDBTabPane tabId={2}>
                          <MDBRow>
                            <MDBCol sm="12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                    reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                    porro voluptate odit minima.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                    reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                    porro voluptate odit minima.</p>
                            </MDBCol>
                          </MDBRow>
                        </MDBTabPane>
                        <MDBTabPane tabId={3}>
                          <MDBRow>
                            <MDBCol sm="12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                    reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                    porro voluptate odit minima.</p>
                            </MDBCol>
                          </MDBRow>
                        </MDBTabPane>
                      </MDBTabContent>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </Router>

              </MDBCol>
              <MDBCol md="6" className="mb-4">
                <Router>
                  <MDBContainer>
                    <MDBNav tabs color="indigo" className="nav-justified">
                      <MDBNavItem>
                        <MDBNavLink
                          to="#!"
                          className={classnames({ active: this.state.activeItem2 === 1 })}
                          onClick={this.toggle(2)(1)}
                        >
                        <MDBIcon icon="user"/> Profile
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          to="#!"
                          className={classnames({ active: this.state.activeItem2 === 2 })}
                          onClick={this.toggle(2)(2)}
                        >
                          <MDBIcon icon="heart"/> Follow
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          to="#!"
                          className={classnames({ active: this.state.activeItem2 === 3 })}
                          onClick={this.toggle(2)(3)}
                        >
                          <MDBIcon icon="envelope"/> Contact
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={this.state.activeItem2}>
                      <MDBTabPane tabId={1}>
                        <MDBRow>
                          <MDBCol sm="12">
                          <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                porro voluptate odit minima.</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBTabPane>
                      <MDBTabPane tabId={2}>
                        <MDBRow>
                          <MDBCol sm="12">
                            <br />
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBTabPane>
                      <MDBTabPane tabId={3}>
                        <MDBRow>
                          <MDBCol sm="12">
                            <br />
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBContainer>
                </Router>
              </MDBCol>
            </MDBRow>
            <MDBRow>              
              <MDBCol md="12">
                <Router>
                  <MDBContainer>
                    <MDBNav pills color="deep-orange" className="nav-justified">
                      <MDBNavItem>
                        <MDBNavLink
                          to="#!"
                          className={classnames({ active: this.state.activeItem3 === 1 })}
                          onClick={this.toggle(3)(1)}
                        >
                          Active
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          to="#!"
                          className={classnames({ active: this.state.activeItem3 === 2 })}
                          onClick={this.toggle(3)(2)}
                        >
                          Link
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          to="#!"
                          className={classnames({ active: this.state.activeItem3 === 3 })}
                          onClick={this.toggle(3)(3)}
                        >
                          Link
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink
                          to="#!"
                          className={classnames({ active: this.state.activeItem3 === 4 })}
                          onClick={this.toggle(3)(4)}
                        >
                          Help
                        </MDBNavLink>
                      </MDBNavItem>
                    </MDBNav>
                    <MDBTabContent activeItem={this.state.activeItem3}>
                      <MDBTabPane tabId={1}>
                        <MDBRow>
                          <MDBCol sm="12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                porro voluptate odit minima.</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBTabPane>
                      <MDBTabPane tabId={2}>
                        <MDBRow>
                          <MDBCol sm="12">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBTabPane>
                      <MDBTabPane tabId={3}>
                        <MDBRow>
                          <MDBCol sm="12">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBTabPane>
                      <MDBTabPane tabId={4}>
                        <MDBRow>
                          <MDBCol sm="12">
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                  reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                                  porro voluptate odit minima.</p>
                          </MDBCol>
                        </MDBRow>
                      </MDBTabPane>
                    </MDBTabContent>
                  </MDBContainer>
                </Router>
              </MDBCol>
            </MDBRow>
              
          </section>

          <section className="mb-5 pb-4">
            <h5 className="mt-5 mb-5 dark-grey-text font-weight-bold">Classic tabs</h5>

            <Router>
              <MDBContainer className="classic-tabs mb-4">
                <MDBNav classicTabs color="blue">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem4 === 1 })}
                      onClick={this.toggle(4)(1)}
                    >
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem4 === 2 })}
                      onClick={this.toggle(4)(2)}
                    >
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem4 === 3 })}
                      onClick={this.toggle(4)(3)}
                    >
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem4 === 4 })}
                      onClick={this.toggle(4)(4)}
                    >
                      Be awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem4} className="card">
                  <MDBTabPane tabId={1}>
                    <MDBRow>
                      <MDBCol sm="12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                            reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                            porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={2}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={3}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={4}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </Router>

            <Router>
              <MDBContainer className="classic-tabs mb-4">
                <MDBNav classicTabs color="grey">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem5 === 1 })}
                      onClick={this.toggle(5)(1)}
                    >
                      <MDBIcon icon="user" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem5 === 2 })}
                      onClick={this.toggle(5)(2)}
                    >
                      <MDBIcon icon="heart" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem5 === 3 })}
                      onClick={this.toggle(5)(3)}
                    >
                      <MDBIcon icon="envelope" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem5 === 4 })}
                      onClick={this.toggle(5)(4)}
                    >
                      <MDBIcon icon="star" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Be awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem5} className="card">
                  <MDBTabPane tabId={1}>
                    <MDBRow>
                      <MDBCol sm="12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                            reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                            porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={2}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={3}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={4}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </Router>

            <Router>
              <MDBContainer className="classic-tabs mb-4">
                <MDBNav classicTabs color="pink">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem6 === 1 })}
                      onClick={this.toggle(6)(1)}
                    >
                      <MDBIcon icon="user" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem6 === 2 })}
                      onClick={this.toggle(6)(2)}
                    >
                      <MDBIcon icon="heart" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem6 === 3 })}
                      onClick={this.toggle(6)(3)}
                    >
                      <MDBIcon icon="envelope" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem6 === 4 })}
                      onClick={this.toggle(6)(4)}
                    >
                      <MDBIcon icon="star" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Be awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem6} className="card">
                  <MDBTabPane tabId={1}>
                    <MDBRow>
                      <MDBCol sm="12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                            reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                            porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={2}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={3}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={4}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </Router>

            <Router>
              <MDBContainer className="classic-tabs mb-4">
                <MDBNav classicTabs color="success">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem7 === 1 })}
                      onClick={this.toggle(7)(1)}
                    >
                      <MDBIcon icon="user" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem7 === 2 })}
                      onClick={this.toggle(7)(2)}
                    >
                      <MDBIcon icon="heart" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem7 === 3 })}
                      onClick={this.toggle(7)(3)}
                    >
                      <MDBIcon icon="envelope" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem7 === 4 })}
                      onClick={this.toggle(7)(4)}
                    >
                      <MDBIcon icon="star" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Be awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem7} className="card">
                  <MDBTabPane tabId={1}>
                    <MDBRow>
                      <MDBCol sm="12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                            reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                            porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={2}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={3}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={4}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </Router>
            <Router>
              <MDBContainer className="classic-tabs">
                <MDBNav classicTabs color="primary">
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem8 === 1 })}
                      onClick={this.toggle(8)(1)}
                    >
                      <MDBIcon icon="user" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Profile
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem8 === 2 })}
                      onClick={this.toggle(8)(2)}
                    >
                      <MDBIcon icon="heart" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Follow
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem8 === 3 })}
                      onClick={this.toggle(8)(3)}
                    >
                      <MDBIcon icon="envelope" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Contact
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="#!"
                      className={classnames({ active: this.state.activeItem8 === 4 })}
                      onClick={this.toggle(8)(4)}
                    >
                      <MDBIcon icon="star" size="2x" className="pb-2" aria-hidden="true"/><br/>
                      Be awesome
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={this.state.activeItem8} className="card">
                  <MDBTabPane tabId={1}>
                    <MDBRow>
                      <MDBCol sm="12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                            reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                            porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={2}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={3}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                  <MDBTabPane tabId={4}>
                    <MDBRow>
                      <MDBCol sm="12">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus
                              reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione
                              porro voluptate odit minima.</p>
                      </MDBCol>
                    </MDBRow>
                  </MDBTabPane>
                </MDBTabContent>
              </MDBContainer>
            </Router>
          </section>

          <LinkCard docs="https://mdbootstrap.com/docs/react/components/tabs/"/>
        </MDBContainer>
    );
  }
}

export default Tabs;