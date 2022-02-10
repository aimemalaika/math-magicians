import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Screen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { total, next, operation } = this.props;
    switch (true) {
      case !total && !next:
        return (<div className="App-Screen">0</div>);
      case !total:
        return (<div className="App-Screen">{next}</div>);
      default:
        return (<div className="App-Screen">{`${total} ${operation ?? ''} ${next ?? ''}`}</div>);
    }
  }
}

Screen.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Screen.defaultProps = {
  total: '',
  next: '',
  operation: '',
};
