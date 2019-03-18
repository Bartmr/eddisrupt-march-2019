import React, { Component } from 'react';
import './App.css';
import NavBar from './components/shared/nav-bar/nav-bar';
import LoginPage from './components/pages/login/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <LoginPage></LoginPage>
      </div>
    );
  }
}

export default App;
