import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({
  name,
  value, 
  classname,
  handleChange}) => (
  <input
    type='checkbox'
    checked={value}
    name={name}
    className={classname}
    onChange={e => handleChange(e)}
  />
);

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classname: PropTypes.string,
  handleChange: PropTypes.func.isRequired
};

export default CheckBox;
