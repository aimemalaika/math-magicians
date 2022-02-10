import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      value, classList, appender,
    } = this.props;
    return (<button onClick={() => { appender(value.trim()); }} type="button" className={classList}>{value}</button>);
  }
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  classList: PropTypes.string.isRequired,
  appender: PropTypes.func.isRequired,
};
