import React from 'react'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    // Never use IDs in your elements in React.
    // Components are meant to be repeatable in a page, and there cannot be two equal IDs in a page.
    return (   
      <nav className="navbar navbar-light bg-light" style={{boxShadow: '-1px 4px 5px 0px rgba(0,0,0,0.21)'}}>
        <a className="navbar-brand" href="#">
          <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" className="d-inline-block align-top" width="30" height="30" alt="" />
          <span>Our Page</span>
        </a>
      </nav>
    )
  }
}