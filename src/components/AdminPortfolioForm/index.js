import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/';
import formUtil from '../../utils/formUtil';
import Input from '../FormFields/Input';
import Select from '../FormFields/Select'; 
import TextArea from '../FormFields/TextArea'; 

const AdminPortfolioForm = props => {
  const {
    portfolio: {
      posting,
      error,
      success
    }, 
    submitForm, 
    handleChange,
    addImage,
    imageCount, 
    fields
  } = props; 

  const fieldParam = { fields, handleChange };

  let selectOptions = selectOptions || {
    type: ['type', 'online', 'print'].map(
      type => <option key={type} value={type}>{type}</option>
    ),
    rating: formUtil.getSelectOptions(10, 'rating'),
    year: formUtil.getSelectOptions(30, 'yyyy', true),
    day: formUtil.getSelectOptions(31, 'dd'),
    month: formUtil.getSelectOptions(12, 'mm'),  
  };

  let imageFields = new Array(imageCount)
    .fill().map((_, i) => (
      <Input
        key={i}
        id={`image${i+1}`}
        {...fieldParam}
      />
    ));

  return(
    <div className='portfolioForm'>
      {error &&
        <p className='portfolioForm__error'>{error}</p>
      }
      {success === false &&
        <p className='portfolioForm__error'>Please try your message later.</p>
      }
      <form onSubmit={e => submitForm(e)}>
        <label>Type:</label>
        <Select 
          id='type'
          options={selectOptions.type} 
          {...fieldParam}
        />
        <label>Title: <span>5+ characters</span></label>
        <Input
          id='title'
          {...fieldParam}
        />
        <label>Client: <span>5+ characters</span></label>
        <Input
          id='client'
          {...fieldParam}
        />        
        <label>Description: <span>15+ characters</span></label>
        <TextArea
          id='description'
          {...fieldParam}
        />
        <label>Link: <span>http://...</span></label>
        <Input
          id='link'
          {...fieldParam}
        />      
        <div className='portfolioForm__date'>
          <label>Created on:</label>
          <Select
            id='month'
            options={selectOptions.month}
            {...fieldParam}
          />
          <Select
            id='day'
            options={selectOptions.day}
            {...fieldParam}
          />
          <Select
            id='year'
            options={selectOptions.year}
            {...fieldParam}
          />
        </div>
        <div className='portfolioForm__addImage'>
          <label>Images</label>
          {imageFields}
          <Button 
            handleClick={e => addImage(e)}
            label='Add Image'
          />
        </div>
        <div className='portfolioForm__displayOption'>
          <label>Display:</label>
          <Input
            id='display'
            type='checkbox'
            {...fieldParam}
          />
          <span>&nbsp; on</span>
        </div>
        <label>Rating:</label>
        <Select 
          id='rating'
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

AdminPortfolioForm.propTypes = {
  portfolio: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  imageCount: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  addImage: PropTypes.func.isRequired
};

export default AdminPortfolioForm;



