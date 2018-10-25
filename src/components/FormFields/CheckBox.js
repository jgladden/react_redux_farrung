import React from 'react';
import PropTypes from 'prop-types';
import formUtil from '../../utils/formUtil';

const CheckBox = ({name, fields, handleChange}) => (
  <input
    type='checkbox'
    checked={fields[name].value}
    name={name}
    className={formUtil.fieldErrorClass(name, fields)}
    onChange={e => handleChange(e)}
  />
);

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CheckBox;
