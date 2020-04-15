import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingPage from "./Components/LandingPage/LandingPage";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/">
                    <LandingPage />
                </Route>
                <Route path="/home">
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
