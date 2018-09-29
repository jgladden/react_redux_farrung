import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './button.scss';

class Button extends Component {

  render() {
    const {
      handleClick,
      label
    } = this.props;

    return (
      <button onClick={handleClick}>
        {label}
      </button>
    );
  }
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default Button;
