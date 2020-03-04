import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthForm from "./Components/AuthForm";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/">
                    <AuthForm />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
