import React, { Component } from 'react';
import './App.css';
import NavBar from './components/shared/nav-bar/nav-bar';
import LoginPage from './components/pages/login/login';
import { AppContext, appInitialState } from './app-context';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...appInitialState
    }
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <NavBar></NavBar>
          <LoginPage></LoginPage>
        </div>
      </AppContext.Provider>
    );
  }
}

export default App;
