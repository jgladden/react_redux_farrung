import  './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import FormContainer from 'containers/Admin/Edit/FormContainer';
import Button from 'components/common/Button';

const Item = props => {
  const {
    deleteItem,
    setCurrentId,
    currentId,
    title,
    rating,
    id
  } = props;
  let display = (id === currentId);
  return (
    <li>
      <div className='itemDetails'>
        <div className='itemDetails__edit'>
        {display &&
          <Button
          handleClick={() => setCurrentId('')}
          label='Close'
        />        
        }
        {!display &&
          <Button
            handleClick={() => setCurrentId(id)}
            label='Edit'
          />
        }
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
        className={`itemForm ${display ? 'display' : ''}`}
      >
      {display &&
        <FormContainer
          formInitValues={{...props}}
          setCurrentId={setCurrentId}
        />
      }
      </div>
    </li>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  setCurrentId: PropTypes.func.isRequired,
  currentId: PropTypes.string.isRequired,
};

export default Item;
