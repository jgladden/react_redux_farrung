import React from 'react';
import PropTypes from 'prop-types';
import formUtil from '../../utils/formUtil';

const Text = ({type, name, fields, handleChange, placeholder}) => (
  <input
    type={type ? type : 'text'}
    value={fields[name].value}
    name={name}
    placeholder={placeholder ? placeholder : ''}
    className={formUtil.fieldErrorClass(name, fields)}
    onChange={e => handleChange(e)}
  />
);

Text.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string
};

export default Text;
