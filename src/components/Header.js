import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="pages-headers">
        <h1>Math Magicians</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculate">Calculator</Link></li>
          <li><Link to="/quote">Quotes</Link></li>
        </ul>
      </header>
    );
  }
}
