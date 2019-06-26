import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBContainer,
    MDBBtn,
} from 'mdbreact';
import LinkCard from '../LinkCard';

import './buttons.css';


const Buttons = () => {
    return (
        <MDBContainer fluid id="buttons">

            <section className="mb-5 pb-4">
                <h4 className="mb-4 dark-grey-text font-bold"><strong>Basic</strong></h4>

                <MDBBtn color="primary">Primary</MDBBtn>
                <MDBBtn color="default">Default</MDBBtn>
                <MDBBtn color="secondary">Secondary</MDBBtn>
                <MDBBtn color="success">Success</MDBBtn>
                <MDBBtn color="info">Info</MDBBtn>
                <MDBBtn color="warning">Warning</MDBBtn>
                <MDBBtn color="danger">Danger</MDBBtn><br />

            </section>

            <section className="mb-5 pb-4">
                <h4 className="mb-4 dark-grey-text font-bold"><strong>Outline</strong></h4>

                <MDBBtn outline color="primary">Primary</MDBBtn>
                <MDBBtn outline >Default</MDBBtn>
                <MDBBtn outline color="secondary">Secondary</MDBBtn>
                <MDBBtn outline color="success">Success</MDBBtn>
                <MDBBtn outline color="info">Info</MDBBtn>
                <MDBBtn outline color="warning">Warning</MDBBtn>
                <MDBBtn outline color="danger">Danger</MDBBtn>

            </section>

            <section className="mb-5 pb-4">
                <h4 className="mb-4 dark-grey-text font-bold"><strong>Additional</strong></h4>

                <MDBBtn color="elegant">Elegant</MDBBtn>
                <MDBBtn color="unique">Unique</MDBBtn>
                <MDBBtn color="pink">Pink</MDBBtn>
                <MDBBtn color="purple">Purple</MDBBtn>
                <MDBBtn color="deep-purple">Deep-purple</MDBBtn>
                <MDBBtn color="indigo">Indigo</MDBBtn>
                <MDBBtn color="light-blue">Light blue</MDBBtn>
                <MDBBtn color="cyan">Cyan</MDBBtn>
                <MDBBtn color="dark-green">Dark-green</MDBBtn>
                <MDBBtn color="light-green">Light-green</MDBBtn>
                <MDBBtn color="yellow">Yellow</MDBBtn>
                <MDBBtn color="amber">Amber</MDBBtn>
                <MDBBtn color="deep-orange">Deep-orange</MDBBtn>
                <MDBBtn color="brown">Brown</MDBBtn>
                <MDBBtn color="blue-grey">Blue-grey</MDBBtn>
                <MDBBtn color="mdb-color">MDB</MDBBtn><br />

            </section>

            <section>

                <MDBRow>
                    <MDBCol md="6" xl="5" className="mb-4 pb-4">
                        <h4 className="mb-4 dark-grey-text font-bold"><strong>Gradient</strong></h4>

                        <MDBBtn rounded gradient="peach">Peach</MDBBtn>
                        <MDBBtn rounded gradient="purple">Purple</MDBBtn>
                        <MDBBtn rounded gradient="blue">Blue</MDBBtn>
                        <MDBBtn rounded gradient="aqua">Aqua</MDBBtn>

                    </MDBCol>

                    <MDBCol md="6" xl="5" className="mb-4 pb-4">
                        <h4 className="mb-4 dark-grey-text font-bold"><strong>Sizes</strong></h4>

                        <MDBBtn color="primary" size="lg">Large button</MDBBtn>
                        <MDBBtn color="primary">Regular button</MDBBtn>
                        <MDBBtn color="primary" size="sm">Small button</MDBBtn>
                    </MDBCol>
                </MDBRow>

            </section>

            <section className="">
                <MDBRow>
                    <MDBCol md="6" xl="5" className="mb-4 pb-4">
                        <h4 className="mb-4 dark-grey-text font-bold"><strong>Style</strong></h4>

                        <MDBBtn color="secondary">Default</MDBBtn>
                        <MDBBtn color="secondary" rounded>Rounded</MDBBtn>
                        <MDBBtn color="secondary" rounded><MDBIcon icon="heart" className="mr-1" /> With icon</MDBBtn>
                        <MDBBtn color="secondary" floating tag="a"><MDBIcon icon="leaf" /></MDBBtn>

                    </MDBCol>
                </MDBRow>

            </section>

            <section className="">
                <MDBRow>
                    <MDBCol md="3" xl="2" className="mb-5 pb-4">
                        <h4 className="mb-4 dark-grey-text font-bold"><strong>Regular</strong></h4>

                        <MDBBtn color="fb"><MDBIcon fab icon="facebook left" /> Facebook</MDBBtn>
                        <MDBBtn color="tw"><MDBIcon fab icon="twitter left" /> Twitter</MDBBtn>
                        <MDBBtn color="gplus"><MDBIcon fab icon="google-plus left" /> Google +</MDBBtn>
                        <MDBBtn color="li"><MDBIcon fab icon="linkedin left" /> Linkedin</MDBBtn>
                        <MDBBtn color="ins"><MDBIcon fab icon="instagram left" /> Instagram</MDBBtn>
                        <MDBBtn color="pin"><MDBIcon fab icon="pinterest left" /> Pinterest</MDBBtn>
                        <MDBBtn color="yt"><MDBIcon fab icon="youtube left" /> Youtube</MDBBtn>
                        <MDBBtn color="dribbble"><MDBIcon fab icon="dribbble left" /> Dibbble</MDBBtn>
                        <MDBBtn color="vk"><MDBIcon fab icon="vk left" /> Vkontakte</MDBBtn>
                        <MDBBtn color="so px-4"><MDBIcon fab icon="stack-overflow left" /> Stack Overflow</MDBBtn>
                        <MDBBtn color="slack"><MDBIcon fab icon="slack left" /> Slack</MDBBtn>
                        <MDBBtn color="comm"><MDBIcon far icon="comments left" /> Comments</MDBBtn>
                        <MDBBtn color="git"><MDBIcon fab icon="github left" /> Github</MDBBtn>
                        <MDBBtn color="email"><MDBIcon icon="envelope left" /> Email</MDBBtn>

                    </MDBCol>

                    <MDBCol md="2" xl="1" className="mb-5 pb-4">
                        <h4 className="mb-4 dark-grey-text font-bold"><strong>Simple</strong></h4>

                        <MDBBtn color="fb"><MDBIcon fab icon="facebook left" /></MDBBtn>
                        <MDBBtn color="tw"><MDBIcon fab icon="twitter left" /></MDBBtn>
                        <MDBBtn color="gplus"><MDBIcon fab icon="google-plus left" /></MDBBtn>
                        <MDBBtn color="li"><MDBIcon fab icon="linkedin left" /></MDBBtn>
                        <MDBBtn color="ins"><MDBIcon fab icon="instagram left" /></MDBBtn>
                        <MDBBtn color="pin"><MDBIcon fab icon="pinterest left" /></MDBBtn>
                        <MDBBtn color="yt"><MDBIcon fab icon="youtube left" /></MDBBtn>
                        <MDBBtn color="dribbble"><MDBIcon fab icon="dribbble left" /></MDBBtn>
                        <MDBBtn color="vk"><MDBIcon fab icon="vk left" /></MDBBtn>
                        <MDBBtn color="so px-4"><MDBIcon fab icon="stack-overflow left" /></MDBBtn>
                        <MDBBtn color="slack"><MDBIcon fab icon="slack left" /></MDBBtn>
                        <MDBBtn color="comm"><MDBIcon icon="comments left" /></MDBBtn>
                        <MDBBtn color="git"><MDBIcon fab icon="github left" /></MDBBtn>
                        <MDBBtn color="email"><MDBIcon icon="envelope left" /></MDBBtn>

                    </MDBCol>


                    <MDBCol md="4" xl="3" className="mb-5 pb-4">
                        <h4 className="mb-4 dark-grey-text font-bold"><strong>With counters</strong></h4>

                        <MDBBtn color="fb"><MDBIcon fab icon="facebook left" /> Facebook</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="tw"><MDBIcon fab icon="twitter left" /> Twitter</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="gplus"><MDBIcon fab icon="google-plus left" /> Google +</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="li"><MDBIcon fab icon="linkedin left" /> Linkedin</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="ins"><MDBIcon fab icon="instagram left" /> Instagram</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="pin"><MDBIcon fab icon="pinterest left" /> Pinterest</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="yt"><MDBIcon fab icon="youtube left" /> Youtube</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="dribbble"><MDBIcon fab icon="dribbble left" /> Dibbble</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="vk"><MDBIcon fab icon="vk left" /> Vkontakte</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="so px-4"><MDBIcon fab icon="stack-overflow left" /> Stack Overflow</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="slack"><MDBIcon fab icon="slack left" /> Slack</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="comm"><MDBIcon fab icon="comments left" /> Comments</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="git"><MDBIcon fab icon="github left" /> Github</MDBBtn>
                        <span className="counter">22</span>
                        <MDBBtn color="email"><MDBIcon icon="envelope left" /> Email</MDBBtn>
                        <span className="counter">22</span>

                    </MDBCol>

                    <MDBCol md="3" xl="1" className="mb-5 pb-4">
                        <h4 className="mb-4 dark-grey-text font-bold"><strong>Round</strong></h4>

                        <MDBBtn floating tag="a" color="fb"><MDBIcon fab icon="facebook left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="tw"><MDBIcon fab icon="twitter left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="gplus"><MDBIcon fab icon="google-plus left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="li"><MDBIcon fab icon="linkedin left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="ins"><MDBIcon fab icon="instagram left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="pin"><MDBIcon fab icon="pinterest left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="yt"><MDBIcon fab icon="youtube left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="dribbble"><MDBIcon fab icon="dribbble left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="vk"><MDBIcon fab icon="vk left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="so"><MDBIcon fab icon="stack-overflow left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="slack"><MDBIcon fab icon="slack left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="comm"><MDBIcon icon="comments left" /></MDBBtn>
                        <MDBBtn floating tag="a" color="git"><MDBIcon fab icon="github " /></MDBBtn>
                        <MDBBtn floating tag="a" color="email"><MDBIcon icon="envelope" /></MDBBtn>
                    </MDBCol>
                </MDBRow>
            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/components/buttons/" />
        </MDBContainer>
    );
}

export default Buttons;