import React from 'react';
import { NavLink } from 'react-router-dom'

class RegisterForm extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "",
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
                1. handle errors
                2. handle success
         */
        fetch('/api/register', {
            method: 'post',
            body: JSON.stringify({
                'email': this.state.email,
                'password': this.state.password,
                'password_confirm': this.state.password_confirm
            })
        })
            .then(res => res.json())
            .then(resJSON => {
                this.setState({
                    name: "",
                    email: "",
                    password: "",
                    password_confirm: ""
                })
            })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="name" placeholder="name" value={this.state.name} />
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