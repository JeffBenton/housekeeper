import React from 'react';
import { NavLink } from 'react-router-dom'

class AuthForm extends React.Component {

    constructor() {
        super();
        this.state = {
            displayRegister: false,
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
        console.log("here")
        this.setState({
            email: "",
            password: "",
            password_confirm: ""
        });
    };

    swapForm = () => {
        let current = this.state.displayRegister;
        this.setState({
            displayRegister: !current
        });
    };

    displayForm = () => {
        if(this.state.displayRegister) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} name="email" placeholder="email" value={this.state.email} />
                        <input type="password" onChange={this.handleChange} name="password" placeholder="password" value={this.state.password} />
                        <input type="password" onChange={this.handleChange} name="password_confirm" placeholder="confirm password" value={this.state.password_confirm} />
                        <input type="submit" />
                    </form>
                    or <a onClick={this.swapForm} href="#">Log In</a>
                </div>
            )
        }
        else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} name="email" placeholder="email" value={this.state.email} />
                        <input type="password" onChange={this.handleChange} name="password" placeholder="password" value={this.state.password} />
                        <input type="submit" />
                    </form>
                    or <a onClick={this.swapForm} href="#">Register</a>
                </div>
            )
        }
    };

    render() {
        return (
            <>
            {this.displayForm()}
            </>
        )
    }
}

export default AuthForm;