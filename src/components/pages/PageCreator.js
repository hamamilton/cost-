import React, { Component } from 'react'
import {
    MDBRow,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCol,
    MDBCardImage,
    MDBIcon,
    MDBBtn
} from 'mdbreact';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class PageCreator extends Component {

    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        return (
            <MDBContainer>
                <section className="my-5">
                    <MDBRow>
                        <MDBCol lg="8">

                            <MDBCard className="mb-4 post-title-panel">
                                <MDBCardBody>
                                    <div className="md-form mt-1 mb-0">
                                        <MDBInput label="Post title" valueDefault="Lorem ipsum dolor sit amet delit" />
                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4">
                                <MDBCardBody style={{ height: "20rem" }}>
                                    <Editor
                                        editorState={this.state.editorState}
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName"
                                        onEditorStateChange={this.onEditorStateChange}
                                    />
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <div className="md-form mb-0 mt-2">
                                        <MDBInput type="textarea" label="Custom CSS Code" />
                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>

                        <MDBCol lg="4">

                            <MDBCard narrow className="mb-5">
                                <MDBCardImage className="view view-cascade gradient-card-header blue-gradient" cascade tag="div">
                                    <h4 className="font-weight-500 mb-0">Publish</h4>
                                </MDBCardImage>
                                <MDBCardBody cascade>
                                    <p><MDBIcon icon="flag" className="mr-1" /> Status: <strong>Draft</strong></p>
                                    <p><MDBIcon icon="eye" className="mr-1" /> Visibility: <strong>Public</strong></p>
                                    <p><MDBIcon icon="archive" className="mr-1" /> Revisions: <strong>2</strong></p>
                                    <p><MDBIcon icon="flag" className="mr-1" /> Publish: <strong>Draft</strong></p>
                                    <p><MDBIcon far icon="calendar-alt" className="mr-1" /> Status: <strong>Immediately</strong></p>
                                    <div className="text-right">
                                        <MDBBtn flat>Discard</MDBBtn>
                                        <MDBBtn color="primary">Publish</MDBBtn>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard narrow className="mb-5">
                                <MDBCardImage className="view view-cascade gradient-card-header blue-gradient" cascade tag="div">
                                    <h4 className="font-weight-500 mb-0">Categories</h4>
                                </MDBCardImage>
                                <MDBCardBody cascade>
                                    <MDBInput label="Material Design" type="checkbox" id="checkbox1" className="mb-4" />
                                    <MDBInput label="Tutorials" type="checkbox" id="checkbox2" className="mb-4" />
                                    <MDBInput label="Marketing Automation" type="checkbox" id="checkbox3" className="mb-4" />
                                    <MDBInput label="Marketing Automation" type="checkbox" id="checkbox4" className="mb-4" />
                                    <MDBInput label="Design Resources" type="checkbox" id="checkbox5" className="mb-4" />
                                    <MDBInput label="Random Stories" type="checkbox" id="checkbox6" className="mb-4" />
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>

                </section>
            </MDBContainer>
        )
    }
}

export default PageCreator;