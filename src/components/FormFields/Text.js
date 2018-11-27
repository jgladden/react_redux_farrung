import React from 'react';
import PropTypes from 'prop-types';

const Text = ({
  type, 
  name, 
  value, 
  classname, 
  handleChange, 
  placeholder}) => (
  <input
    type={type ? type : 'text'}
    value={value}
    name={name}
    placeholder={placeholder ? placeholder : ''}
    className={classname}
    onChange={e => handleChange(e)}
  />
);

Text.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classname: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default Text;
