import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import AdminPortfolioFormContainer from '../../containers/AdminPortfolioFormContainer';

const AdminListItem = props => (
  <li id='adminList__item'>
    <p>TITLE: {props.title}</p>
    <AdminPortfolioFormContainer
      formInitValues={{...props}}
    />
  </li>
);

AdminListItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default AdminListItem;
