import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import ItemFormContainer from 'containers/Admin/ItemFormContainer';
import Button from 'components/common/Button';

const ListItem = props => {
  const {
    deleteItem,
    toggleEditDisplay,
    displayEdit,
    title,
    rating
  } = props;
  return (
    <li>
      <div className='itemDetails'>
        <div className='itemDetails__edit'>
          <Button
            handleClick={() => toggleEditDisplay()}
            label={displayEdit ? 'Close' : 'Edit'}
          />
        </div>
        <div className='itemDetails__rating'>
          <p>{rating}</p>
        </div>
        <div className='itemDetails__title'>
          <p>{title}</p>
        </div>
        <div className='itemDetails__remove'>
          <Button
            handleClick={() => deleteItem()}
            label='Delete'
          />
        </div>
      </div>
      <div
        className={`itemForm ${displayEdit ? 'display' : ''}`}
      >
        <ItemFormContainer
          formInitValues={{...props}}
          toggleEditDisplay={toggleEditDisplay}
        />
      </div>
    </li>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  toggleEditDisplay: PropTypes.func.isRequired,
  displayEdit: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default ListItem;
