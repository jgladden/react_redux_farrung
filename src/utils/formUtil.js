const formUtil = {

  getFieldsInitState: fields => {
    const fieldInitState = { value: '', errors: [] };
    let fieldsInitState = {};
    Object.keys(fields).forEach(key =>
      fieldsInitState[key] = {
        ...fields[key], 
        value: '', 
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
      test = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
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
    };
    return returnObj;
  },

  getFieldValues: fields => {
    let fieldValues = {};
    for(let key in fields) {
      fieldValues[key] = fields[key].value;
    };
    return fieldValues;
  },

  getDateOptions: (type, size) => {
    let rangeArr;
    if(type !== 'year') {
      size = size || type === 'month' ? 12 : 31;
      rangeArr = Array(size).fill()
        .map((_, i) => i < 9 ? `0${i+1}` : i+1);
    } else {
      let currYear = new Date().getFullYear();
      rangeArr = Array(size).fill()
        .map((_, i) => currYear-i);
    }
    const defaultOption = type === 'year' ? 'yyyy' : type === 'day' ? 'dd' : 'mm';
    rangeArr.unshift(defaultOption);
    return rangeArr.map(num => (
      <option key={num} value={num}>{num}</option>
    ));
  }
};

export default formUtil;
