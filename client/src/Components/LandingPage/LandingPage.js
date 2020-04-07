import React from 'react';

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class LandingPage extends React.Component {

    state = {
        displayLoginForm: true
    };

    displayForm = () => {
        if(this.state.displayLoginForm) {
            return <LoginForm />
        }
        else {
            return <RegisterForm />
        }
    };

    render() {
        return (
            <div>
                <h1>Welcome to Housekeeper!</h1>
                <h4>Please sign in or register</h4>
                {this.displayForm()}
            </div>
        )
    }
}

export default LandingPage;