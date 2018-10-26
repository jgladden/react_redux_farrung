import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import AdminPortfolioFormContainer from '../../containers/AdminPortfolioFormContainer';
import Button from '../Button';

const AdminListItem = props => {
  const {
    toggleEditDisplay,
    displayEdit,
    title
  } = props;
  return (
    <li id='adminList__item'>
      <p>TITLE: {title}</p>
      <Button
        className='adminList__editBtn'
        handleClick={() => toggleEditDisplay()}
        label={displayEdit ? 'Close' : 'Edit'}
      />
      <div 
        id='adminList__editForm'
        className={displayEdit ? 'display' : ''}
        >
        <AdminPortfolioFormContainer
          formInitValues={{...props}}
        />
      </div>
    </li>
  );
}

AdminListItem.propTypes = {
  title: PropTypes.string.isRequired,
  toggleEditDisplay: PropTypes.func.isRequired,
  displayEdit: PropTypes.bool.isRequired
};

export default AdminListItem;
