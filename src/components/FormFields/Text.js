import React from 'react';
import PropTypes from 'prop-types';
import formUtil from '../../utils/formUtil';

const Text = ({id, fields, handleChange}) => (
  <input
    type='text'
    value={fields[id].value}
    name={id}
    className={formUtil.fieldErrorClass(id,fields)}
    onChange={e => handleChange(e)}
  />
);

Text.propTypes = {
  id: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Text;
