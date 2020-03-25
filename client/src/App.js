import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/">
                    <LoginForm />
                </Route>
                <Route path="/register">
                    <RegisterForm />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
