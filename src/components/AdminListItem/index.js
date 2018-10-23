import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const AdminListItem = ({id, title, setSection}) => (
  <li 
    id='adminList__item' 
    onClick={() => setSection({primary: 'admin', secondary: 'edit', tertiary: id})}
  >
    <p>TITLE: {title}</p>
  </li>
);

AdminListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired
};

export default AdminListItem;
