import './styles.scss';
import React from 'react';
import ItemFormContainer from 'containers/Admin/ItemFormContainer';

const Add = () => (
  <div id='adminAdd'>
    <p id='adminAdd__heading'>
    Add Portfolio Item
    </p>
    <div id='adminAdd__form'>
      <ItemFormContainer/>
    </div>
  </div>
);

export default Add;
