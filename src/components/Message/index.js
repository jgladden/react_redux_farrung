import React from 'react';
import Loading from '../Loading/';
import Error from '../Error/';
import Button from '../Button/';

const messageObj = {
  email: 'jamesgladden@gmail.com',
  subject: 'subject',
  message: 'message'
}

const Message = ({message, submitMessage}) => { 
  const {
    posting,
    error,
    success
  } = message;

  return(
    <React.Fragment>
      {posting &&
        <p>Sending</p>
      }
      {error &&
        <Error error={error}/>
      }
      { success &&
        <p>Your message was sent.</p>
      }
      <Button handleClick={() => submitMessage(messageObj)} label='Submit Message' />
    </React.Fragment>
  );
};

export default Message;



