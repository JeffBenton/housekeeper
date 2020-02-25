import React from 'react';

class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            confirm_password: ""
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
                2. make sure password and confirm password match
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
                <input type="password" onChange={this.handleChange} name="password_confirm" placeholder="confirm password" value={this.state.confirm_password} />
                <input type="submit" />
            </form>
        )
    }
}

export default RegisterForm;