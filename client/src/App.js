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

    this.login = this.login.bind(this);

    this.state = {
      ...appInitialState,
      login: this.login
    }
  }

  componentDidMount() {
    const previousSessionToken = window.localStorage.getItem('sessionToken');

    this.setState({
      session: {...this.state.session, token: previousSessionToken}
    })
  }

  login(username, password) {
    const body = JSON.stringify({ username, password });

    const headers = new Headers({
      'Content-Type': 'application/json',
      'Content-Length': body.length.toString()
    })

    this.setState({session: {...this.state.session, isLoading: true}})
    
    fetch('http://localhost:3001/login', {
      method: 'POST',
      body,
      headers
    })
      .then((res) => {
        if(res.ok) { return res.json() }
        else { throw new Error() }
      })
      .then((data) => {
        window.localStorage.setItem('sessionToken', data.token);
        this.setState({
          session: {...this.state.session, isLoading: false, token: data.token}
        })
      })
      .catch(() => {
        this.setState({
          session: {...this.state.session, isLoading: false}
        })
      })
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
