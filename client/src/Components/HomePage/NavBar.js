import React from 'react';

import NavButton from "./NavButton";
import Row from "react-bootstrap/Row"

class NavBar extends React.Component {
    render() {
        return (
            <Row>
                <NavButton title="Houses" url="houses" />
                <NavButton title="Profile" url="profile" />
                <NavButton title="Bookings" url="bookings" />
                <NavButton title="Logout" url="logout" />
            </Row>
        )
    }
}

export default NavBar;