import React from 'react';
import PropTypes from 'prop-types';
import formUtil from 'utils/formUtil';

const Select = ({name, options, fields, handleChange}) => (
  <select
    name={name}
    className={formUtil.fieldErrorClass(name, fields)}
    onChange={e => handleChange(e)}
    value={fields[name].value}
  >
    {options}  
  </select>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default Select;
