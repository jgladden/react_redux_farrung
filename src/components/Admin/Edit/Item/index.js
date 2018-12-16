import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from 'containers/Admin/Edit/FormContainer';
import Button from 'components/common/Button';

const Item = props => {
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
        <FormContainer
          formInitValues={{...props}}
          toggleEditDisplay={toggleEditDisplay}
        />
      </div>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  toggleEditDisplay: PropTypes.func.isRequired,
  displayEdit: PropTypes.bool.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default Item;
