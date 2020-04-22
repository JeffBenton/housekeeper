import React from 'react';
import NavLink from "react-router-dom";

class NavButton extends React.Component {
    render() {
        return (
            <NavLink to={`/${this.props.url}`}>{this.props.title}</NavLink>
        )
    }
}

export default NavButton;