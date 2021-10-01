import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import getConfig from './config'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home";
import NewPoll from "./components/NewPoll";
import PollingStation from "./components/PollingStation"


import BlockLogo from "./assets/logo-design.png"

import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
const { networkId } = getConfig(process.env.NODE_ENV || 'development')






export default function App() {

  const changeCandidateFunction=async(prompt)=>{
    console.log(prompt);

    let namePair=await window.contract.addCandidatePair({prompt:prompt})
    localStorage.setItem("Candidate1",namePair[0]);
    localStorage.setItem("Candidate2",namePair[1]);
    localStorage.setItem("Prompt",prompt);
    window.location.replace(window.location.href+"PollingStation");
  }



  return (<Router><Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/"><img src={BlockLogo} heigth="100" width="110"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"> 
     <Nav.Link href="/NewPoll"> Poll </Nav.Link>
      <Nav.Link onClick={window.accountId===''?login:logout}>{window.accountId === ""? "Login" :window.accountId}</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Switch>
  <Route exact path="/">
    <Home changeCandidates={changeCandidateFunction}/>
  </Route>
  <Route exact path="/PollingStation">
    <PollingStation/>
  </Route>
  <Route exact path="/Poll">
    <NewPoll/>
  </Route>
</Switch>
</Router>);
}
