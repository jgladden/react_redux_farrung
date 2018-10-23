import React from 'react';
import PropTypes from 'prop-types';
import formUtil from '../../utils/formUtil';

const Input = ({type, id, fields, handleChange}) => (
  <input
    type={type || 'text'}
    value={fields[id].value}
    name={id}
    className={formUtil.fieldErrorClass(id,fields)}
    onChange={e => handleChange(e)}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;
