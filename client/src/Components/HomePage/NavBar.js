import React from 'react';

import NavButton from "./NavButton";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <NavButton />
                <NavButton />
                <NavButton />
                <NavButton />
            </div>
        )
    }
}

export default NavBar;