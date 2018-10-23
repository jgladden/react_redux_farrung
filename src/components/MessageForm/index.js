import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/';

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

  const getClass = name => (
    fields[name].errors && fields[name].errors.length ? 'inValidField' : ''
  );

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
        <input 
          value={fields['email'].value}
          name='email' 
          type='text' 
          className={getClass('email')} 
          onChange={e => handleChange(e)}
          placeholder='Email'
        />
        <label>Minimum 8 characters.</label>
        <input
          value={fields['subject'].value}
          name='subject'
          type='text'
          className={getClass('subject')}
          onChange={e => handleChange(e)}
          placeholder='Subject'
        />
        <label>Please enter your message.</label>
        <textarea
          value={fields['message'].value}
          name='message'
          className={getClass('message')}
          onChange={e => handleChange(e)}
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



