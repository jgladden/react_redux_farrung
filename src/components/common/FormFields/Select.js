import React from 'react';
import PropTypes from 'prop-types';

const Select = ({
  name, 
  options, 
  value, 
  classname, 
  handleChange}) => (
  <select
    name={name}
    className={classname}
    onChange={e => handleChange(e)}
    value={value}
  >
    {options}  
  </select>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  classname: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default Select;
