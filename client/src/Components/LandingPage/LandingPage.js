import React from 'react';

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class LandingPage extends React.Component {

    state = {
        displayLoginForm: true
    };

    swapForm = e => {
        e.preventDefault();

        this.setState({
            displayLoginForm: !this.state.displayLoginForm
        });
    };

    displayForm = () => {
        if(this.state.displayLoginForm) {
            return (
                <>
                    <h4>Please sign in</h4>
                    <LoginForm />
                    <p>or <a onClick={this.swapForm} href="/">register</a></p>
                </>
            )
        }
        else {
            return (
                <>
                    <h4>Please register</h4>
                    <RegisterForm />
                    <p>or <a onClick={this.swapForm} href="/">sign in</a></p>
                </>
            )
        }
    };

    render() {
        return (
            <div>
                <h1>Welcome to Housekeeper!</h1>

                {this.displayForm()}
            </div>
        )
    }
}

export default LandingPage;