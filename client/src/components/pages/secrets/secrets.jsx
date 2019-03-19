import React from 'react'
import { AppContext } from '../../../app-context';
import { Redirect } from 'react-router-dom'

export default class SecretsPage extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return this.context.session.token ?
      (<h1 style={{color: 'green', fontFamily: 'cursive'}}>Secret page</h1>)
      : (<Redirect to="/login" />)
  }
}