import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/Button/';
import Text from 'components/common/FormFields/Text';
import CheckBox from 'components/common/FormFields/CheckBox';
import Select from 'components/common/FormFields/Select'; 
import TextArea from 'components/common/FormFields/TextArea'; 
import ImageForm from 'components/common/FormFields/ImageForm';
import {imgPath} from 'config';

const Form = props => {
  const {
    status: {
      posting,
      error
    },
    submitForm, 
    handleChange,
    fields,
    selectOptions,
    imageListRef
  } = props;

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
          value={fields.type.value}
          classname={fields.type.errorClass}
          handleChange={handleChange} 
        />
        <label>Title: <span>5+ characters</span></label>
        <Text
          name='title'
          value={fields.title.value}
          classname={fields.title.errorClass}
          handleChange={handleChange}
        />
        <label>Client: <span>5+ characters</span></label>
        <Text
          name='client'
          value={fields.client.value}
          classname={fields.client.errorClass}
          handleChange={handleChange}
        />        
        <label>Description: <span>15+ characters</span></label>
        <TextArea
          name='description'
          value={fields.description.value}
          classname={fields.description.errorClass}
          handleChange={handleChange}
        />
        <label>Link: <span>http://...</span></label>
        <Text
          name='link'
          value={fields.link.value}
          classname={fields.link.errorClass}
          handleChange={handleChange}
        />      
        <div className='portfolioForm__date'>
          <label>Created on:</label>
          <Select
            name='month'
            options={selectOptions.month}
            value={fields.month.value}
            classname={fields.month.errorClass}
            handleChange={handleChange}
          />
          <Select
            name='day'
            options={selectOptions.day}
            value={fields.day.value}
            classname={fields.day.errorClass}
            handleChange={handleChange}
          />
          <Select
            name='year'
            options={selectOptions.year}
            value={fields.year.value}
            classname={fields.year.errorClass}
            handleChange={handleChange}
          />
        </div>
        <label>Image name: <span>5+ characters / 513x352</span></label>
        <ul id='dragSorter' ref={imageListRef}>
        { fields.imageorder.value.map(image => (
          <li
          key={image}
          id={image}
          draggable='true'
          className='dragElement'
          >         
            <img 
              src={`${imgPath}${image}`} 
            />
          </li>
        ))}
        </ul>
        <div className='portfolioForm__displayOption'>
          <label>Display:</label>
          <CheckBox
            name='display'
            value={fields.display.value}
            classname={fields.display.errorClass}
            handleChange={handleChange}
          />
        </div>
        <label>Rating:</label>
        <Select 
          name='rating'
          options={selectOptions.rating}
          value={fields.rating.value}
          classname={fields.rating.errorClass}
          handleChange={handleChange}
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

Form.propTypes = {
  status: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  selectOptions: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  imageListRef: PropTypes.shape({ 
    current: PropTypes.instanceOf(Element) 
  }).isRequired
};

export default Form;



