import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ItemFormContainer from 'containers/Admin/ItemFormContainer';
import Button from 'components/Button';

const ListItem = props => {
  const {
    deleteItem,
    toggleEditDisplay,
    displayEdit,
    title
  } = props;
  return (
    <li id='adminList__item'>
      <Button
        id='adminList__editBtn'
        handleClick={() => toggleEditDisplay()}
        label={displayEdit ? 'Close' : 'Edit'}
      />
      <p id='adminList__title'>
      TITLE: {title}
      </p>
      <div
        id='adminList__removeBtn'
        onClick={() => deleteItem()}
      >
      DELETE ITEM
      </div>
      <div 
        id='adminList__editForm'
        className={displayEdit ? 'display' : ''}
        >
        <ItemFormContainer
          formInitValues={{...props}}
          toggleEditDisplay={toggleEditDisplay}
        />
      </div>
    </li>
  );
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  toggleEditDisplay: PropTypes.func.isRequired,
  displayEdit: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default ListItem;
