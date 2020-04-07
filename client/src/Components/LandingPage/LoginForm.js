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
        e.preventDefault();
        /*
            TODO
                1. handle errors
                2. handle success
         */
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify({
                'email': this.state.email,
                'password': this.state.password
            })
        })
            .then(res => res.json())
            .then(resJSON => {
                this.setState({
                    email: "",
                    password: ""
                })
            })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} name="email" placeholder="email" value={this.state.email} />
                    <input type="password" onChange={this.handleChange} name="password" placeholder="password" value={this.state.password} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default LoginForm;