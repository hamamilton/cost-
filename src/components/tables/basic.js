import React from 'react';
import { 
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBTable
} from 'mdbreact';
import LinkCard from '../LinkCard';

const TBasic =  () => {
  return (
      <MDBContainer fluid>
        <MDBCard>
          <MDBCardBody>
            <MDBTable>
              <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
              </tbody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>

        <hr className="my-5"/>

        <MDBCard className="mb-5">
          <MDBCardBody>
            <MDBTable>  
              <thead className="blue-grey lighten-4">
                  <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                  </tr>
              </tbody>
            </MDBTable>            
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardBody>
            <MDBTable>  
              <thead className="mdb-color darken-3">
                  <tr className="text-white">
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                  </tr>
              </tbody>
            </MDBTable>            
          </MDBCardBody>
        </MDBCard>

        <hr className="my-5"/>

        <MDBCard>
          <MDBCardBody>
            <MDBTable striped>
              <thead>
                  <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                  </tr>
                  <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                  </tr>
                  <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                  </tr>
                  <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                  </tr>
              </tbody>
            </MDBTable>            
          </MDBCardBody>
        </MDBCard>

        <hr className="my-5"/>
        
        <MDBCard>
          <MDBTable bordered className="mb-0">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
          </MDBTable>            
        </MDBCard>

        <hr className="my-5"/>        

        <MDBCard>
          <MDBCardBody>
            <MDBTable hover>
              <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
              </tbody>
            </MDBTable>            
          </MDBCardBody>
        </MDBCard>

        <hr className="my-5"/>        

        <MDBCard>
          <MDBCardBody>
            <MDBTable responsive>
              <thead>
                <tr>
                    <th>#</th>
                    <th className="th-lg">Table heading</th>
                    <th className="th-lg">Table heading</th>
                    <th className="th-lg">Table heading</th>
                    <th className="th-lg">Table heading</th>
                    <th className="th-lg">Table heading</th>
                    <th className="th-lg">Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                </tr>
              </tbody>
            </MDBTable>            
          </MDBCardBody>
        </MDBCard>

        <LinkCard docs="https://mdbootstrap.com/docs/react/tables/basic/"/>
      </MDBContainer>
  );
}

export default TBasic;