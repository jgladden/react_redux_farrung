import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button/';
import Text from 'components/FormFields/Text';
import TextArea from 'components/FormFields/TextArea';

const Form = props => {
  const {
    status: {
      error,
      posting,
      success
    },
    submitMessage, 
    handleChange, 
    fields
  } = props;

  const fieldParam = { fields, handleChange }; 

  return(
    <React.Fragment>
      {error &&
        <p className='connectWrapper__error'>{error}</p>
      }
      <form 
        onSubmit={e => submitMessage(e)}
      >
        <Text
          name='email'
          placeholder='EMAIL'
          {...fieldParam}
        />
        <Text
          name='subject'
          placeholder='SUBJECT'
          {...fieldParam}
        />
        <TextArea
          name='message'
          placeholder='MESSAGE'
          {...fieldParam}
        />
        <Button 
          handleClick={e => submitMessage(e)} 
          label={posting ? 'SENDING' : 'SUBMIT'}
          disabled={posting ? true : false} 
        />
      </form>
    </React.Fragment>
  );
};

Form.propTypes = {
  status: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitMessage: PropTypes.func.isRequired
};

export default Form;



