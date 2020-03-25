import React from 'react';
import { NavLink } from 'react-router-dom'

class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            password_confirm: ""
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        /*
            TODO
                1. actually submit the post request
                3. handle errors
                4. handle success
         */
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="email" placeholder="email" value={this.state.email} />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="password" value={this.state.password} />
                    <input type="password" onChange={this.handleChange} name="password_confirm" placeholder="confirm password" value={this.state.password_confirm} />
                    <input type="submit" />
                </form>
                or <NavLink to="/">Log In</NavLink>
            </div>
        )
    }
}

export default RegisterForm;