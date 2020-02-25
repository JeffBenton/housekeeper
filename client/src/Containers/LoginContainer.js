import React from 'react';
import { Switch, Route } from 'react-router-dom';

import RegisterForm from '../Components/RegisterForm'
import LoginForm from '../Components/LoginForm'


class LoginContainer extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/register">
                        <RegisterForm />
                    </Route>

                    <Route path="/">
                        <LoginForm />
                    </Route>
                </Switch>

            </div>
        )
    }
}

export default LoginContainer;