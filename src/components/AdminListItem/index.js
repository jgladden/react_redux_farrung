import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';

const AdminListItem = ({id, title, description, setSection}) => (
  <li 
    id='adminList__item' 
    onClick={() => setSection({primary: 'admin', secondary: 'edit', tertiary: id})}
  >
    <p>{title}: <span>{description}</span></p>
  </li>
);

AdminListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  setSection: PropTypes.func.isRequired
}

export default AdminListItem;
