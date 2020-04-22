import React from 'react';

import NavButton from "./NavButton";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavButton title="Houses" url="houses" />
                <NavButton title="Profile" url="profile" />
                <NavButton title="Bookings" url="bookings" />
                <NavButton title="Logout" url="logout" />
            </div>
        )
    }
}

export default NavBar;