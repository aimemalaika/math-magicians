import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  render() {
    const { value, classList } = this.props;
    return (
      <button type="button" className={classList}>{value}</button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.number.isRequired,
  classList: PropTypes.string.isRequired,
};
