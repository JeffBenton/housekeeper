import React from 'react';

class House extends React.Component {

    state = {
        name: this.props.name,
        rooms: this.props.rooms,
        occupants: this.prop.occupants
    };

    render() {
        return (
            <div>House</div>
        )
    }
}

export default House;