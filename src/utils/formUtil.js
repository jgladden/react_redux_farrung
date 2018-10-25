import React from 'react';

const formUtil = {

  initFields: (fields, values = {}) => {
    const fieldsInitState = {};
    Object.keys(fields).forEach(key =>
      fieldsInitState[key] = {
        ...fields[key], 
        value: values[key] || '', 
        errors: [] 
      }
    );
    return fieldsInitState;
  },

  getUpdatedFields: (e, fields) => {
    const { name, value, type, checked } = e.target;
    const field = fields[name];
    field.value = type === 'checkbox' ? checked : value;
    field.errors = formUtil.validate(
      name, value, fields
    );
    return fields;
  },

  validate: (name, value, fields) => {
    const tests = fields[name].tests;
    return !tests ? [] : tests.filter(test => 
      !formUtil.isValidField(value, test)
    ); 
  },

  isValidField: (value, test) => {
    if (test === 'email') 
      test = /^([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})$/i;
    if (test === 'password')
      test = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    if(test === 'url')
      test = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
    return value.match(test);
  },

  validateForm: fields => {
    let returnObj = {
      isValidForm: true,
      fieldValues: {},
      fields: {}
    };
    for(let key in fields) {
      let field = fields[key];
      let value = field.value;
      field.errors = formUtil.validate(
        key, value, fields
      );
      returnObj.fields[key] = field;
      returnObj.fieldValues[key] = value; 
      if(field.errors.length)
        returnObj.isValidForm = false;
    }
    return returnObj;
  },

  getFieldValues: fields => {
    let fieldValues = {};
    for(let key in fields) {
      fieldValues[key] = fields[key].value;
    }
    return fieldValues;
  },

  fieldErrorClass: (name, fields) => (
    fields[name].errors && fields[name].errors.length ? 'inValidField' : ''
  ),

  getSelectOptions: (size, defaultOption, type) => {
    let rangeArr;
    switch(type) {
    case 'year': { 
      const currYear = new Date().getFullYear();
      rangeArr = Array(size).fill()
        .map((_, i) => currYear-i);
      break;
    }
    case 'pre0':
      rangeArr = Array(size).fill()
        .map((_, i) => i < 9 ? `0${i+1}` : i+1);
      break;
    default:
      rangeArr = Array(size).fill()
        .map((_, i) => i+1);
    }
    rangeArr.unshift(defaultOption);
    return rangeArr.map(num => (
      <option key={num} value={num}>{num}</option>
    ));
  }
};

export default formUtil;
