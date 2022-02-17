import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calculate" exact element={<Calculator />} />
          <Route path="/quote" exact element={<Quote />} />
        </Routes>
      </>
    );
  }
}
