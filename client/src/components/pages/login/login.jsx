import React from 'react'
import Form from './components/form';
import {AppContext} from '../../../app-context';

export default class LoginPage extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value})
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div style={{paddingTop: '30px'}}>
        {this.context.session.isLoading ? 'Loading' : <Form
          username={this.state.username}
          password={this.state.password}
          onUsernameChange={this.onUsernameChange}
          onPasswordChange={this.onPasswordChange}
        />}
      </div>
    )
  }
}