import React from 'react';
import {
    MDBContainer,
    MDBMedia,
    MDBCard,
    MDBCardBody
} from 'mdbreact';
import LinkCard from '../LinkCard';

import './shadows.css';

const Masks = () => {
    return (
        <MDBContainer fluid id="media">
            <section>
                <h4 className="mt-lg-5 mb-5 font-bold"><strong>Example</strong></h4>
                <MDBCard>
                    <MDBCardBody>
                        <MDBMedia>
                            <MDBMedia left className="mr-3" href="#">
                                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                            </MDBMedia>
                            <MDBMedia body>
                                <MDBMedia heading>
                                    Media heading
                                </MDBMedia>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </MDBMedia>
                        </MDBMedia>
                    </MDBCardBody>
                </MDBCard>
            </section>

            <section>
                <h4 className="mt-lg-5 mb-5 font-bold"><strong>Order</strong></h4>
                <MDBCard>
                    <MDBCardBody>
                        <MDBMedia>
                            <MDBMedia body>
                                <MDBMedia heading>
                                    Media heading
                                </MDBMedia>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </MDBMedia>
                            <MDBMedia className="ml-3" href="#">
                                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                            </MDBMedia>
                        </MDBMedia>
                    </MDBCardBody>
                </MDBCard>
            </section>

            <section>
                <h4 className="mt-lg-5 mb-5 font-bold"><strong>Nesting</strong></h4>
                <MDBCard>
                    <MDBCardBody>
                        <MDBMedia>
                            <MDBMedia left className="mr-3" href="#">
                                <MDBMedia className="rounded-circle" object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                            </MDBMedia>
                            <MDBMedia body>
                                <MDBMedia heading>
                                    Media heading
                                </MDBMedia>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                <MDBMedia className="mt-4">
                                    <MDBMedia left className="mr-3" href="#">
                                        <MDBMedia className="rounded-circle" object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" />
                                    </MDBMedia>
                                    <MDBMedia body>
                                        <MDBMedia heading>
                                            Media heading
                                        </MDBMedia>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.

                                    </MDBMedia>
                                </MDBMedia>
                            </MDBMedia>
                        </MDBMedia>
                    </MDBCardBody>
                </MDBCard>
            </section>

            <section>
                <h4 className="mt-lg-5 mb-5 font-bold"><strong>Nesting</strong></h4>
                <MDBCard className="mb-5">
                    <MDBCardBody>
                        <MDBMedia>
                            <MDBMedia left top className="mr-3" href="#">
                                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="Generic placeholder image" />
                            </MDBMedia>
                            <MDBMedia body>
                                <MDBMedia heading>
                                    Top-aligned media
                            </MDBMedia>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                 Donec lacinia congue felis in faucibus.</p>
                                <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </MDBMedia>
                        </MDBMedia>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-5">
                    <MDBCardBody>
                        <MDBMedia>
                            <MDBMedia left className="mr-3" href="#">
                                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="Generic placeholder image" />
                            </MDBMedia>
                            <MDBMedia body>
                                <MDBMedia heading>
                                    Center-aligned media
                                 </MDBMedia>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                 Donec lacinia congue felis in faucibus.</p>
                                <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </MDBMedia>
                        </MDBMedia>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard className="mb-5">
                    <MDBCardBody>
                        <MDBMedia>
                            <MDBMedia left bottom className="mr-3" href="#">
                                <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="Generic placeholder image" />
                            </MDBMedia>
                            <MDBMedia body>
                                <MDBMedia heading>
                                    Bottom-aligned media
                                </MDBMedia>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                 Donec lacinia congue felis in faucibus.</p>
                                <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </MDBMedia>
                        </MDBMedia>
                    </MDBCardBody>
                </MDBCard>
            </section>

            <section>
                <h4 className="mt-lg-5 mb-5 font-bold"><strong>Media list</strong></h4>
                <MDBCard className="mb-5">
                    <MDBCardBody>
                        <MDBMedia list className="mt-3">
                            <MDBMedia tag="li">
                                <MDBMedia left href="#">
                                    <MDBMedia object className="mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="Generic placeholder image" />
                                </MDBMedia>
                                <MDBMedia body>
                                    <MDBMedia heading>
                                        List-based media object
                                    </MDBMedia>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </MDBMedia>
                            </MDBMedia>
                            <MDBMedia tag="li" className="my-5">
                                <MDBMedia left href="#">
                                    <MDBMedia object className="mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="Generic placeholder image" />
                                </MDBMedia>
                                <MDBMedia body>
                                    <MDBMedia heading>
                                        List-based media object
                                    </MDBMedia>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </MDBMedia>
                            </MDBMedia>
                            <MDBMedia tag="li">
                                <MDBMedia left href="#">
                                    <MDBMedia object className="mr-3" src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="Generic placeholder image" />
                                </MDBMedia>
                                <MDBMedia body>
                                    <MDBMedia heading>
                                        List-based media object
                                    </MDBMedia>
                                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                </MDBMedia>
                            </MDBMedia>
                        </MDBMedia>
                    </MDBCardBody>
                </MDBCard>
            </section>

            <LinkCard docs="https://mdbootstrap.com/docs/react/layout/media-object/" />
        </MDBContainer>
    );
}

export default Masks;