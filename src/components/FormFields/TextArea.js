import React from 'react';
import PropTypes from 'prop-types';
import formUtil from '../../utils/formUtil';

const TextArea = ({id, fields, handleChange}) => (
  <textarea
    value={fields[id].value}
    name={id}
    className={formUtil.fieldErrorClass(id,fields)}
    onChange={e => handleChange(e)}
  />
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextArea;
