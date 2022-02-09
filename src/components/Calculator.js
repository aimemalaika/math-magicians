import React, { PureComponent } from 'react';
import Button from './Button';
import Screen from './Screen';

export default class Claculator extends PureComponent {
  render() {
    const numPad = Array.from(Array(10).keys());
    const digitPanel = ['.', ...numPad, '+/-', 'AC', '%'].reverse().map((digit) => {
      if (digit === 0) {
        return <Button classList="calculator-btn doubleWidth" value={digit} key={digit} />;
      }
      return <Button classList="calculator-btn" value={digit} key={digit} />;
    });

    const operatorPad = ['+', 'x', '-', '/', '='];
    const operatorPanel = operatorPad.map((operator) => <Button classList="calculator-btn btn-operators" value={operator} key={operator} />);

    return (
      <div className="calculator">
        <Screen content="0" />
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
