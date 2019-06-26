import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBPagination,
    MDBPageItem,
    MDBPageNav,
    MDBCol
} from 'mdbreact';
import LinkCard from '../LinkCard';

const pagination = () => {
    return (
        <div id="pagination">
            <MDBContainer fluid>

                <MDBRow>

                    <MDBCol md="6" lg="5">
                        <h5 className="my-5 dark-grey-text font-weight-bold">Basic</h5>

                        <MDBRow className="my-5">
                            <MDBPagination circle >
                                <MDBPageItem disabled>
                                    <MDBPageNav>
                                        <span>First</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem disabled>
                                    <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem active>
                                    <MDBPageNav>
                                        1 <span className="sr-only">(current)</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>
                                        2
                                </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>
                                        3
                                </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>
                                        4
                                </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>
                                        5
                                </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>
                                        &raquo;
                                </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>
                                        Last
                                </MDBPageNav>
                                </MDBPageItem>
                            </MDBPagination>
                        </MDBRow>
                        <MDBRow className="my-5">
                            <MDBPagination>
                                <MDBPageItem disabled>
                                    <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>
                                        1
                            </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>2</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>3</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>4</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>5</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem disabled>
                                    <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">&raquo;</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                            </MDBPagination>
                        </MDBRow>
                        <MDBRow className="mb-5">
                            <MDBPagination className="mb-5">
                                <MDBPageItem disabled>
                                    <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem active>
                                    <MDBPageNav>
                                        1 <span className="sr-only">(current)</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>2</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>3</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>4</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem>
                                    <MDBPageNav>5</MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem disabled>
                                    <MDBPageNav aria-label="Previous">
                                        <span aria-hidden="true">&raquo;</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                            </MDBPagination>
                        </MDBRow>
                    </MDBCol>

                    <MDBCol md="6" lg="4">
                        <h5 className="my-5 dark-grey-text font-weight-bold">Colors</h5>

                        <MDBPagination color="blue">
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    4
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    5
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                            </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>

                        <MDBPagination color="red">
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    4
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    5
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                              </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>

                        <MDBPagination color="teal">
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    4
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    5
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                            </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>

                        <MDBPagination color="dark">
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    4
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    5
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                            </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>

                        <MDBPagination color="bluegrey">
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    4
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    5
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                            </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>

                        <MDBPagination color="amber">
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    4
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    5
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                            </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>

                        <MDBPagination color="purple">
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    4
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    5
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                            </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>

                        <MDBPagination color="darkgrey">
                            <MDBPageItem disabled>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    4
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    5
                            </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                            </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>
                    </MDBCol>

                    <MDBCol md="6" lg="3">
                        <h5 className="my-5 dark-grey-text font-weight-bold">Size</h5>

                        <h6 className="title mt-5 dark-grey-text font-weight-bold">Large</h6>
                        <MDBPagination size="lg">
                            <MDBPageItem>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                                </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>

                        <h6 className="title mt-5 dark-grey-text font-weight-bold">Small</h6>
                        <MDBPagination size="sm">
                            <MDBPageItem>
                                <MDBPageNav aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    2
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    3
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav >
                                    &raquo;
                                </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>
                    </MDBCol>
                </MDBRow>

                <LinkCard docs="https://mdbootstrap.com/docs/react/components/pagination/" />

            </MDBContainer>
        </div>
    );
}

export default pagination;