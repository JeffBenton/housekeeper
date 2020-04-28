import React from 'react';

class User extends React.Component {

    state = {
        name: this.props.name,
        houses: this.props.houses,
    };

    render () {
        return (
            <div>User</div>
        )
    }
}

export default User;