import React from 'react';
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBContainer,
    MDBIcon,
    MDBBtn,
    MDBTable,
    MDBView,
    MDBSelect,
    MDBSelectInput,
    MDBSelectOptions,
    MDBSelectOption,
    MDBPagination,
    MDBPageItem,
    MDBPageNav,
} from 'mdbreact';

const TExtended = () => {
    return (
        <div id="profile-v1">
            <MDBContainer fluid>
                <h2 className="font-bold mt-lg-5 mb-5 pb-4"><strong>Responsive table</strong></h2>
                <MDBCard className="p-2 mb-5">
                    <MDBRow>
                        <MDBCol lg="3" md="12">
                            <MDBSelect className="colorful-select dropdown-primary mx-2">
                                <MDBSelectInput selected="Bulk actions" />
                                <MDBSelectOptions>
                                    <MDBSelectOption disabled>Bulk actions</MDBSelectOption>
                                    <MDBSelectOption value="1">Delete</MDBSelectOption>
                                    <MDBSelectOption value="2">Export</MDBSelectOption>
                                    <MDBSelectOption value="3">Change segment</MDBSelectOption>
                                </MDBSelectOptions>
                            </MDBSelect>
                        </MDBCol>

                        <MDBCol lg="3" md="6">
                            <MDBSelect className="colorful-select dropdown-primary mx-2">
                                <MDBSelectInput selected="Show only" />
                                <MDBSelectOptions>
                                    <MDBSelectOption disabled>Show only</MDBSelectOption>
                                    <MDBSelectOption value="1">All <span> (2000)</span></MDBSelectOption>
                                    <MDBSelectOption value="2">Never opened <span> (200)</span></MDBSelectOption>
                                    <MDBSelectOption value="3">Opened but unanswered <span> (1800)</span></MDBSelectOption>
                                    <MDBSelectOption value="4">Answered <span> (200)</span></MDBSelectOption>
                                    <MDBSelectOption value="5">Unsunscribed <span> (50)</span></MDBSelectOption>
                                </MDBSelectOptions>
                            </MDBSelect>
                        </MDBCol>

                        <MDBCol lg="3" md="6">
                            <MDBSelect className="colorful-select dropdown-primary mx-2">
                                <MDBSelectInput selected="Filter segments" />
                                <MDBSelectOptions>
                                    <MDBSelectOption disabled>Filter segments</MDBSelectOption>
                                    <MDBSelectOption value="1">Contacts in no segments <span> (100)</span></MDBSelectOption>
                                    <MDBSelectOption value="2">Segment 1 <span> (2000)</span></MDBSelectOption>
                                    <MDBSelectOption value="3">Segment 2 <span> (1000)</span></MDBSelectOption>
                                    <MDBSelectOption value="4">Segment 3 <span> (4000)</span></MDBSelectOption>
                                </MDBSelectOptions>
                            </MDBSelect>
                        </MDBCol>

                        <MDBCol lg="3" md="6">
                            <MDBInput type="text" icon="search" label="Search" />
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
                <MDBCard narrow className="pb-3">
                    <MDBView cascade className="gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">
                        <div className="text-left">
                            <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="th-large" className="mt-0" /></MDBBtn>
                            <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="columns" className="mt-0" /></MDBBtn>
                        </div>
                        <a href="#!" className="white-text mx-3">Table name</a>
                        <div className="text-right">
                            <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="pencil-alt" className="mt-0" /></MDBBtn>
                            <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="times" className="mt-0" /></MDBBtn>
                            <MDBBtn outline color="white" rounded size="sm" className="px-2"><MDBIcon icon="info-circle" className="mt-0" /></MDBBtn>
                        </div>
                    </MDBView>
                    <MDBCardBody>
                        <MDBTable responsive hover>
                            <thead>
                                <tr>
                                    <th>
                                        <input className="form-check-input" type="checkbox" id="checkbox" />
                                        <label htmlFor="checkbox" className="form-check-label mr-2 label-table"></label>
                                    </th>
                                    <th className="th-lg">First Name<MDBIcon icon="sort" className="ml-1" /></th>
                                    <th className="th-lg">Last Name<MDBIcon icon="sort" className="ml-1" /></th>
                                    <th className="th-lg">Username<MDBIcon icon="sort" className="ml-1" /></th>
                                    <th className="th-lg">Email<MDBIcon icon="sort" className="ml-1" /></th>
                                    <th className="th-lg">Country<MDBIcon icon="sort" className="ml-1" /></th>
                                    <th className="th-lg">City<MDBIcon icon="sort" className="ml-1" /></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1" className="label-table"></label>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>markotto@gmail.com</td>
                                    <td>USA</td>
                                    <td>San Francisco</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" id="checkbox2" />
                                        <label htmlFor="checkbox2" className="label-table"></label>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>jacobt@gmail.com</td>
                                    <td>France</td>
                                    <td>Paris</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" id="checkbox3" />
                                        <label htmlFor="checkbox3" className="label-table"></label>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>larrybird@gmail.com</td>
                                    <td>Germany</td>
                                    <td>Berlin</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" id="checkbox4" />
                                        <label htmlFor="checkbox4" className="label-table"></label>
                                    </th>
                                    <td>Paul</td>
                                    <td>Topolski</td>
                                    <td>@P_Topolski</td>
                                    <td>ptopolski@gmail.com</td>
                                    <td>Poland</td>
                                    <td>Warsaw</td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <input className="form-check-input" type="checkbox" id="checkbox5" />
                                        <label htmlFor="checkbox5" className="label-table"></label>
                                    </th>
                                    <td>Anna</td>
                                    <td>Doe</td>
                                    <td>@andy</td>
                                    <td>annadoe@gmail.com</td>
                                    <td>Spain</td>
                                    <td>Madrid</td>
                                </tr>
                            </tbody>
                        </MDBTable>
                        <MDBSelect className="colorful-select w-10 float-left dropdown-primary mt-2 hidden-md-down">
                            <MDBSelectInput selected="Rows number" />
                            <MDBSelectOptions>
                                <MDBSelectOption disabled>Rows number</MDBSelectOption>
                                <MDBSelectOption value="1">5 rows</MDBSelectOption>
                                <MDBSelectOption value="2">25 rows</MDBSelectOption>
                                <MDBSelectOption value="3">50 rows</MDBSelectOption>
                                <MDBSelectOption value="4">100 rows</MDBSelectOption>
                            </MDBSelectOptions>
                        </MDBSelect>

                        <MDBPagination circle className="my-4 float-right">
                            <li className="page-item disabled clearfix d-none d-md-block"><a className="page-link" href="#!">First</a></li>
                            <MDBPageItem disabled>
                                <MDBPageNav className="page-link" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem active>
                                <MDBPageNav className="page-link">
                                    1 <span className="sr-only">(current)</span>
                                </MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav className="page-link">2</MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav className="page-link">3</MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav className="page-link">4</MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav className="page-link">5</MDBPageNav>
                            </MDBPageItem>
                            <MDBPageItem>
                                <MDBPageNav className="page-link" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </MDBPageNav>
                            </MDBPageItem>
                        </MDBPagination>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default TExtended;