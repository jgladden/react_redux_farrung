import React from 'react';

export const TextField = ({id, fields, handleChange, getClass}) => (
  <input
    value={fields[id].value}
    name={id}
    type='text'
    className={getClass(id)}
    onChange={e => handleChange(e)}
  />
);

export const SelectField = ({id, options, fields, handleChange, getClass}) => (
  <select
    name={id}
    className={getClass(id)}
    onChange={e => handleChange(e)}
    value={fields[id].value}
  >
    {options}
  </select>
);

export const TextArea = ({id, fields, handleChange, getClass}) => (
  <textarea
    value={fields[id].value}
    name={id}
    className={getClass(id)}
    onChange={e => handleChange(e)}
  />
);

export const CheckBox = ({id, fields, handleChange, getClass}) => (
  <input
    type='checkbox'
    name={id}
    className={getClass(id)}
    onChange={e => handleChange(e)}
    value={fields[id].value}
  />
);
