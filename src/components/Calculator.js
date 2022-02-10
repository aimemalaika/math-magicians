import React, { Component } from 'react';
import Button from './Button';
import Screen from './Screen';

import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  buttonClick = (value) => {
    const oper = calculate({ ...this.state }, value);
    this.setState(oper);
  }

  render() {
    const numPad = Array.from(Array(10).keys());
    const digitPanel = ['.', ...numPad, 'AC', '+/-', '%'].reverse().map((digit) => {
      if (digit === 0) {
        return <Button classList="calculator-btn doubleWidth" appender={this.buttonClick} value={digit.toString()} key={digit} />;
      }
      return <Button classList="calculator-btn" appender={this.buttonClick} value={digit.toString()} key={digit} />;
    });

    const operatorPad = ['+', 'x', '-', '/', '='];
    const operatorPanel = operatorPad.map((operator) => <Button classList="calculator-btn btn-operators" appender={this.buttonClick} value={operator} key={operator} />);
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Screen total={total} next={next} operation={operation} />
        <div className="App-wraper">
          <div className="App-Num-Pad">
            { digitPanel }
          </div>
          <div className="App-Op-Pad">
            { operatorPanel }
          </div>
        </div>
      </div>
    );
  }
}
