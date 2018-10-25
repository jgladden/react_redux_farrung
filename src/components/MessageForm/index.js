import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/';
import Text from '../FormFields/Text';
import TextArea from '../FormFields/TextArea';

const MessageForm = props => {
  const {
    message: {
      posting,
      error,
      success
    }, 
    submitMessage, 
    handleChange, 
    fields
  } = props;

  const fieldParam = { fields, handleChange }; 

  return(
    <div className='messageForm'>
      <p className='messageForm__heading'>SEND MESSAGE</p>
      {error &&
        <p className='messageForm__error'>{error}</p>
      }
      {success === false &&
        <p className='messageForm__error'>Please try your message later.</p>
      }
      <form onSubmit={e => submitMessage(e)}>
        <label>Valid email.</label>
        <Text
          name='email'
          placeholder='Email'
          {...fieldParam}
        />
        <label>Minimum 8 characters.</label>
        <Text
          name='subject'
          placeholder='Subject'
          {...fieldParam}
        />
        <label>Please enter your message.</label>
        <TextArea
          name='message'
          {...fieldParam}
        />
        <Button 
          handleClick={e => submitMessage(e)} 
          label={posting ? 'Sending' : 'Send'}
          disabled={posting ? true : false} 
        />
      </form>
    </div>
  );
};

MessageForm.propTypes = {
  message: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitMessage: PropTypes.func.isRequired
};

export default MessageForm;



