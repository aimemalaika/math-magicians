import { useState } from 'react'; import Button from './components/Button';
import Screen from './components/Screen';
import Header from './components/Header';
import calculate from './logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const getState = () => (
    { total, next, operation }
  );

  const buttonClick = (value) => {
    const oper = calculate(getState(), value);
    const { total: sum, next: nextVal, operation: validOperation } = oper;
    if (sum !== undefined) setTotal(sum);
    if (nextVal !== undefined) setNext(nextVal);
    if (validOperation !== undefined) setOperation(validOperation);
  };

  const numPad = Array.from(Array(10).keys());
  const digitPanel = ['.', ...numPad, 'AC', '+/-', '%'].reverse().map((digit) => {
    if (digit === 0) {
      return <Button classList="calculator-btn doubleWidth" appender={buttonClick} value={digit.toString()} key={digit} />;
    }
    return <Button classList="calculator-btn" appender={buttonClick} value={digit.toString()} key={digit} />;
  });

  const operatorPad = ['+', 'x', '-', '÷', '='];
  const operatorPanel = operatorPad.map((operator) => <Button classList="calculator-btn btn-operators" appender={buttonClick} value={operator} key={operator} />);

  return (
    <div>
      <Header />
      <div className="calculator-container">
        <div>
          <h3>Les&lsquo;t do Math</h3>
        </div>
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
      </div>
    </div>

  );
};

export default Calculator;
