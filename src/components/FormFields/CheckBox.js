import React from 'react';
import PropTypes from 'prop-types';
import formUtil from '../../utils/formUtil';

const CheckBox = ({id, fields, handleChange}) => (
  <input
    type='checkbox'
    checked={fields[id].value}
    name={id}
    className={formUtil.fieldErrorClass(id,fields)}
    onChange={e => handleChange(e)}
  />
);

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default CheckBox;
