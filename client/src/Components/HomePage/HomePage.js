import React from 'react';

import NavBar from "./NavBar";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <Row><NavBar /></Row>
                <h1>Welcome 'Name'</h1>
                <p>Recent Activity</p>
                <p>Current bookings</p>
            </Container>
        )
    }
}

export default HomePage;