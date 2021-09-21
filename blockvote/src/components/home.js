import React from 'react';
//import PropTypes from 'prop-types';
import{
    Table,Container,Button
} from "react-bootstrap";

const home = (props) => {
    const promptList=[
        "Who will win ?",
        "Who is the better actor?",
        "Who is a good Politician?",
    ]

    return (
        <Container>
            <Table style={{margin: "5vh "}} stripped bordered hover>
                <thead>
                    <tr>
                        <th>$</th>
                        <th>List of Polls</th>
                        <th>Go the Poll</th>
                    </tr>                  
                </thead>
                <tbody>{
                    promptList.map((el,index) =>{
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{el}</td>
                            <td>{""}
                                <Button>Let's  Poll </Button>
                            </td>    
                        </tr>);
                    })}
                </tbody>
            </Table>
        </Container>
    );
};


export default home;