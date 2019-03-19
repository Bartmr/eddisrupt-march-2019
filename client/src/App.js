import React, { Component } from 'react';
import './App.css';
import NavBar from './components/shared/nav-bar/nav-bar';
import { AppContext, appInitialState } from './app-context';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/pages/home/home';
import SecretsPage from './components/pages/secrets/secrets';
import LoginPage from './components/pages/login/login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...appInitialState
    }
  }
  render() {
    return (
      <div className="App">
        <AppContext.Provider value={this.state}>
          <BrowserRouter>
            <NavBar></NavBar>
            <Route path="/" exact component={HomePage} />
            <Route path="/secrets" exact component={SecretsPage} />
            <Route path="/login" exact component={LoginPage} />
          </BrowserRouter>
        </AppContext.Provider>
      </div>
    );
  }
}

export default App;
