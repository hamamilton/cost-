import React from 'react';
import { 
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTable
} from 'mdbreact';

const Invoice = () =>  {
  return (
    <div id="invoice">
      <MDBContainer fluid>
        <section className="mb-4">
            <MDBCard>
                <MDBCardBody className="d-flex justify-content-between">
                    <h4 className="h4-responsive mt-3">Invoice #124190</h4>
                    <div>
                        <MDBBtn color="" style={{backgroundColor: "#fc685f"}}>Pay now</MDBBtn>
                        <MDBBtn color="primary"><MDBIcon icon="print" className="left"></MDBIcon> Print</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </section>

        <section className="mb-4">
            <MDBCard>
                <MDBCardBody>
                    <MDBRow>
                        <div className="col-md-6 text-left">
                            <p><small>From:</small></p>
                            <p><strong>Awesome Company Inc</strong></p>
                            <p>134 Richardson Ave</p>
                            <p>San Francisco, CA 94123</p>
                            <p><strong>Invoice date:</strong> November 18, 2016</p>
                            <p><strong>Due date:</strong> December 2, 2016</p>
                        </div>

                        <div className="col-md-6 text-right">
                            <h4 className="h4-responsive"><small>Invoice No.</small><br/><strong><span className="blue-text">#124190</span></strong></h4>
                            <p><small>To:</small></p>
                            <p><strong>The Company, Inc</strong></p>
                            <p>1-245 East Russel Road</p>
                            <p>Munger, MI 48747</p>
                        </div>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </section>

        <section>
            <MDBCard>
                <MDBCardBody>
                    <MDBTable responsive>
                          <thead>
                              <tr>
                                  <th>Item list</th>
                                  <th>Quantity</th>
                                  <th>Unit Price</th>
                                  <th>Tax</th>
                                  <th>Total price</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>MDBootstrap Corporate License</td>
                                  <td>1</td>
                                  <td>$319</td>
                                  <td>$73.37</td>
                                  <td>$319</td>
                              </tr>
                              <tr>
                                  <td>Material Design for Wordpress</td>
                                  <td>2</td>
                                  <td>$69</td>
                                  <td>$31.74</td>
                                  <td>$138</td>
                              </tr>
                              <tr>
                                  <td>MDBootstrap Portfolio Template Personal Licence</td>
                                  <td>1</td>
                                  <td>$49</td>
                                  <td>$11.27</td>
                                  <td>$49</td>
                              </tr>
                              <tr>
                                  <td>MDBootstrap Magazine Corporate Licence</td>
                                  <td>1</td>
                                  <td>$249</td>
                                  <td>$57.27</td>
                                  <td>$249</td>
                              </tr>
                          </tbody>
                    </MDBTable>

                    <ul className="list-unstyled text-right">
                        <li><strong>Sub Total:</strong><span className="float-right ml-3">$755</span></li>
                        <li><strong>TAX:</strong><span className="float-right ml-3">$173,65</span></li>
                        <li><strong>TOTAL:</strong><span className="float-right ml-3">$755</span></li>
                    </ul>

                </MDBCardBody>
            </MDBCard>

        </section>

      </MDBContainer>
    </div>
  )
}

export default Invoice;