import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/';
import formUtil from '../../utils/formUtil';
import {
  TextField, 
  SelectField,
  TextArea,
  CheckBox
} from '../FormFields';

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

  const getClass = name => (
    fields[name].errors && fields[name].errors.length ? 'inValid' : ''
  );

  const fieldParam = {
    fields, handleChange, getClass
  };

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
      <TextField
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
        <SelectField 
          id='type' 
          options={selectOptions.type} 
          {...fieldParam}
        />
        <label>Title: <span>5+ characters</span></label>
        <TextField
          id='title'
          {...fieldParam}
        />
        <label>Client: <span>5+ characters</span></label>
        <TextField
          id='client'
          {...fieldParam}
        />        
        <label>Description: <span>15+ characters</span></label>
        <TextArea
          id='description'
          {...fieldParam}
        />
        <label>Link: <span>http://...</span></label>
        <TextField
          id='link'
          {...fieldParam}
        />      
        <div className='portfolioForm__date'>
          <label>Created on:</label>
          <SelectField
            id='month'
            options={selectOptions.month}
            {...fieldParam}
          />
          <SelectField
            id='day'
            options={selectOptions.day}
            {...fieldParam}
          />
          <SelectField
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
          <CheckBox
            id='display'
            {...fieldParam}
          />
          <span>&nbsp; on</span>
        </div>
        <label>Rating:</label>
        <SelectField 
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



