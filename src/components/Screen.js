import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Screen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = props.content;
  }

  render() {
    return (
      <div className="App-Screen">{this.state}</div>
    );
  }
}

Screen.propTypes = {
  content: PropTypes.string,
};

Screen.defaultProps = {
  content: '0',
};
