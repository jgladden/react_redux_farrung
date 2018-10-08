import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({handleClick, label}) => (
  <button onClick={handleClick}>
    {label}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Button;
