import React from 'react';

import NavButton from "./NavButton";
import Col from "react-bootstrap/Col";

class NavBar extends React.Component {
    render() {
        return (
            <>
                <Col><NavButton title="Houses" url="houses" /></Col>
                <Col><NavButton title="Profile" url="profile" /></Col>
                <Col><NavButton title="Bookings" url="bookings" /></Col>
                <Col><NavButton title="Logout" url="logout" /></Col>
            </>
        )
    }
}

export default NavBar;