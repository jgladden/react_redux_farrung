import './styles.scss';
import React from 'react';
import Form from 'containers/Admin/Add/FormContainer';

const Add = () => (
  <div id='adminAdd'>
    <p id='adminAdd__heading'>
    Add Portfolio Item
    </p>
    <div id='adminAdd__form'>
      <Form />
    </div>
  </div>
);

export default Add;
