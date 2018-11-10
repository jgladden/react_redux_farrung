import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/';
import Text from 'components/FormFields/Text';
import CheckBox from 'components/FormFields/CheckBox';
import Select from 'components/FormFields/Select'; 
import TextArea from 'components/FormFields/TextArea'; 

const ItemForm = props => {
  const {
    status: {
      posting,
      error
    },
    submitForm, 
    handleChange,
    fields,
    selectOptions
  } = props;

  const fieldParam = { fields, handleChange };

  return(
    <div className='portfolioForm'>
      {error &&
        <p className='portfolioForm__error'>{error}</p>
      }
      <form onSubmit={e => submitForm(e)}>
        <label>Type:</label>
        <Select 
          name='type'
          options={selectOptions.type} 
          {...fieldParam}
        />
        <label>Title: <span>5+ characters</span></label>
        <Text
          name='title'
          {...fieldParam}
        />
        <label>Client: <span>5+ characters</span></label>
        <Text
          name='client'
          {...fieldParam}
        />        
        <label>Description: <span>15+ characters</span></label>
        <TextArea
          name='description'
          {...fieldParam}
        />
        <label>Link: <span>http://...</span></label>
        <Text
          name='link'
          {...fieldParam}
        />      
        <div className='portfolioForm__date'>
          <label>Created on:</label>
          <Select
            name='month'
            options={selectOptions.month}
            {...fieldParam}
          />
          <Select
            name='day'
            options={selectOptions.day}
            {...fieldParam}
          />
          <Select
            name='year'
            options={selectOptions.year}
            {...fieldParam}
          />
        </div>
        <label>Image name: <span>5+ characters / 513x352</span></label>
        <Text
          name='imagename'
          {...fieldParam}
        />
        <label>Number of images:</label>
        <Select
          name='slidenum'
          options={selectOptions.slidenum}
          {...fieldParam}
        />
        <div className='portfolioForm__displayOption'>
          <label>Display:</label>
          <CheckBox
            name='display'
            {...fieldParam}
          />
        </div>
        <label>Rating:</label>
        <Select 
          name='rating'
          options={selectOptions.rating}
          {...fieldParam}
        />
        <Button 
          handleClick={e => submitForm(e)} 
          label={posting ? 'Sending' : 'Send'}
          disabled={posting ? true : false} 
        />
      </form>
    </div>
  );
};

ItemForm.propTypes = {
  status: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired
};

export default ItemForm;



