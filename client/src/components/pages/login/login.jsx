import React from 'react'
import Form from './components/form';

export default class LoginPage extends React.Component {
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
        <Form
          username={this.state.username}
          password={this.state.password}
          onUsernameChange={this.onUsernameChange}
          onPasswordChange={this.onPasswordChange}
        />
      </div>
    )
  }
}