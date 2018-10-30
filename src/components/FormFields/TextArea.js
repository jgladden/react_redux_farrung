import React from 'react';
import PropTypes from 'prop-types';
import formUtil from 'utils/formUtil';

const TextArea = ({name, fields, handleChange}) => (
  <textarea
    value={fields[name].value}
    name={name}
    className={formUtil.fieldErrorClass(name, fields)}
    onChange={e => handleChange(e)}
  />
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextArea;
