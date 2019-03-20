import React from 'react'
import {Link} from 'react-router-dom'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {};
  }

  render() {
    return(
      <div>
        <h1>Home Page</h1>
        <Link to="/secrets">Secret Page</Link>
      </div>
    )
  }
}