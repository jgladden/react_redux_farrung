import React from 'react';
import PropTypes from 'prop-types';
import formUtil from '../../utils/formUtil';

const Select = ({id, options, fields, handleChange}) => (
  <select
    name={id}
    className={formUtil.fieldErrorClass(id,fields)}
    onChange={e => handleChange(e)}
    value={fields[id].value}
  >
    {options}
  </select>
);

Select.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default Select;
