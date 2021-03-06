import React,{useState} from 'react';
//import PropTypes from 'prop-types';
import {Container,Row,Col,Button} from "react-bootstrap"

import LoadingCircles from "../assets/KiVLT.svg";


const PollingStation = props => {

    const [candidate1URL,changeCandidate1Url]=useState(LoadingCircles)
    const [candidate2URL,changeCandidate2Url]=useState(LoadingCircles)
    const [showresults,changeResultsDisplay]=useState(false);
    return (
        <Container>
            <Row>
                <Col classname='justify-content-center d-flex'>
                <Container>
                    <Row style={{ marginTop:"5vh",backgroundColor:"#c4c4c4"}}>
                    <div  style={{
                        display:"flex",
                        justifyContent:"center",
                        padding:"3vw",

                    }}>
                        <img style={{
                        height:"34vh",
                        width:"20vw",
                    }}
                        src={candidate1URL}></img>
                    </div>
                    </Row>
                    {showresults ? (<Row className="justify-content-center d-flex"
                         style={{marginTop:"9vh"}}>
                            <div style={{
                        display: "flex",
                        justifyContent:"center",
                        fontSize:"3vw",
                        height:"14vh",
                        width:"10vw",
                        padding:"9px",
                        backgroundColor:"#c4c4c4",
                    }}> 3
                        </div></Row>):null}
                    <Row style={{marginTop:"5vh"}}className="justify-content-center d-flex">
                        <Button>Vote</Button>
                    </Row>
                </Container>
                </Col>
                <Col className="justify-content-center d-flex align-items-center">
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        backgroundColor:"#c4c4c4",
                        height:"26vh",
                        fontSize:"2vw",
                        width:"10vw",
                        alignItems:"center",
                        padding:"2vw",
                        textAlign:"center",
                    }}>
                        Who will the election?

                    </div>
                </Col>
                <Col classname='justify-content-center d-flex'>
                <Container>
                    <Row style={{ marginTop:"5vh",backgroundColor:"#c4c4c4"}}>
                    <div  style={{
                        display:"flex",
                        justifyContent:"center",
                        padding:"3vw",

                    }}>
                        <img style={{
                        height:"34vh",
                        width:"20vw",
                    }}
                        src={candidate2URL}></img>
                    </div>
                    </Row>
                    {showresults ? (<Row className="justify-content-center d-flex"
                         style={{marginTop:"9vh"}}>
                            <div style={{
                        display: "flex",
                        justifyContent:"center",
                        fontSize:"3vw",
                        height:"14vh",
                        width:"10vw",
                        padding:"9px",
                        backgroundColor:"#c4c4c4",
                    }}> 3
                        </div></Row>):null}
                    <Row style={{marginTop:"5vh"}}className="justify-content-center d-flex">
                        <Button>Vote</Button>
                    </Row>
                </Container>
                </Col>
            </Row>
        </Container>
    );
};
export default PollingStation;