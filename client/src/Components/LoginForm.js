import React from 'react';

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        /*
            TODO
                1. actually submit the post request
                3. handle errors
                4. handle success
         */

        this.setState({
            email: "",
            password: "",
            confirm_password: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} name="email" placeholder="email" value={this.state.email} />
                <input type="password" onChange={this.handleChange} name="password" placeholder="password" value={this.state.password} />
                <input type="submit" />
            </form>
        )
    }
}

export default LoginForm;