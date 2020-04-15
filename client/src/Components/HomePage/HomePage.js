import React from 'react';

import NavBar from "./NavBar";

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>Welcome 'Name'</h1>
                <p>Recent Activity</p>
                <p>Current bookings</p>
            </div>
        )
    }
}

export default HomePage;