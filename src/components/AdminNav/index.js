import './styles.scss';
import React from 'react';

const AdminNav = ({setSection, section}) => (
  <ul id='adminNav'>
    <li onClick={() => setSection({primary: 'admin', secondary: 'add'})}>
      AdminAdd
    </li>
    <li onClick={() => setSection({primary: 'admin', secondary: 'edit'})}>
      AdminEdit
    </li>
    <li onClick={() => setSection({primary: 'admin', secondary: 'list'})}>
      AdminList
    </li>
  </ul>
);

export default AdminNav;

