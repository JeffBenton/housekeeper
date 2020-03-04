import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import LoginContainer from './Containers/LoginContainer';
import AppContainer from './Containers/AppContainer';



function App() {
  return (
    <div className="App">
        <Router>
            <LoginContainer />
        </Router>
    </div>
  );
}

export default App;
