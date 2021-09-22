import React,{useReducer, useRef} from 'react';
//import PropTypes from 'prop-types';
import {Container,Form,Button} from "react-bootstrap";

const NewPoll = (props) => {
    const candidateName1=useRef();
    const candidateName1URL=useRef();

    const candidateName2=useRef();
    const candidateName2URL=useRef();
    const promptRef=useRef();



    return (
        <Container style={{marginTop:"10px"}}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Candidate Name 1</Form.Label>
                    <Form.Control ref={candidateName1} placeholder="Enter the candidate name">
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Candidate 1 Image Url</Form.Label>
                    <Form.Control ref={candidateName1URL} placeholder="Enter Image URL"></Form.Control> 
                </Form.Group>
                <br/>
                <Form.Group className="mb-3">
                    <Form.Label>Candidate Name 2</Form.Label>
                    <Form.Control ref={candidateName2} placeholder="Enter the candidate name">
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Candidate 2 Image Url</Form.Label>
                    <Form.Control ref={candidateName2URL} placeholder="Enter Image URL"></Form.Control> 
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Prompt</Form.Label>
                    <Form.Control ref={promptRef} placeholder="Add Prompt"></Form.Control>
                </Form.Group>
            </Form>

            <Button variant="primary">
                Submit
            </Button>
        </Container>
    );
};

export default NewPoll;