import React, { PureComponent } from 'react';
import './App.css';
import Claculator from './components/Calculator';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Claculator />
      </div>
    );
  }
}
