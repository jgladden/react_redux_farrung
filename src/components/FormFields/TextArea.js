import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  name, 
  value, 
  classname,
  handleChange, 
  placeholder}) => (
  <textarea
    value={value}
    name={name}
    placeholder={placeholder}
    className={classname}
    onChange={e => handleChange(e)}
  />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classname: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default TextArea;
