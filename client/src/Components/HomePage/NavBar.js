import React from 'react';

import NavButton from "./NavButton";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavButton title="Houses" />
                <NavButton title="Profile" />
                <NavButton title="Bookings" />
                <NavButton title="Logout" />
            </div>
        )
    }
}

export default NavBar;