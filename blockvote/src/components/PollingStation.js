import React,{usestate} from 'react';
//import PropTypes from 'prop-types';
import {Container,Row,Col,Button} from "react-bootstrap"




const PollingStation = props => {

    const [candidate1URL,changeCandidate1Url]=usestate('https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fbitwarden%2Fdesktop%2Fissues%2F271&psig=AOvVaw0O6F-65nFYQ0YN9xCR8Zr_&ust=1632333789224000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCvl7PTkPMCFQAAAAAdAAAAABAJ'
    )
    return (
        <Container>
            <Row>
                <Col classname="justify-content-center d-flex">
                <Container>
                    <Row style={{marginTop:"5vh",backgroundColor:"#c4c4c4"}}></Row>
                    <div  style={{
                        display:"flex",
                        justifyContent:"center",
                        padding:"3vw",

                    }}>
                        <img style={{height:"35vh", width:"20vw"}}
                        src={candidate1URL}></img>
                    </div>

                </Container>
                </Col>
            </Row>
        </Container>
    );
};
export default PollingStation;