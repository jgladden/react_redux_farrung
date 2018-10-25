import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/';
import Text from '../FormFields/Text';

const AuthForm = props => {
  const {
    auth: {
      posting,
      error,
      isAuthenticated
    }, 
    submitLogin, 
    handleChange, 
    fields
  } = props; 

  const fieldParam = { fields, handleChange };

  return(
    <div className='loginForm'>
      {error &&
        <p className='loginForm__error'>{error}</p>
      }
      {isAuthenticated === false &&
        <p className='loginForm__error'>User not found.</p>
      }
      <form onSubmit={e => submitLogin(e)}>
        <label>Atleast 8 characters.</label>
        <Text
          name='username'
          placeholder='Username'
          {...fieldParam}
        />
        <label>Atleast 8 characters w/ number, upper & lowercase letter and special character.</label>
        <Text
          name='password'
          type='password'
          placeholder='Password'
          {...fieldParam}
        />
        <Button 
          handleClick={e => submitLogin(e)} 
          label={posting ? 'Sending' : 'Login'}
          disabled={posting ? true : false} 
        />
      </form>
    </div>
  );
};

AuthForm.propTypes = {
  auth: PropTypes.shape({
    posting: PropTypes.number,
    error: PropTypes.string,
    isAuthenticated: PropTypes.bool
  }).isRequired,
  fields: PropTypes.object.isRequired,
  submitLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default AuthForm;



