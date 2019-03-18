import React from 'react'
import Form from './components/form';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div style={{paddingTop: '30px'}}>
        <Form></Form>
      </div>
    )
  }
}