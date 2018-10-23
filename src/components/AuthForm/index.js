import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/';

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

  const getClass = name => (
    fields[name].errors && fields[name].errors.length ? 'inValid' : ''
  );

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
        <input 
          value={fields['username'].value}
          name='username' 
          type='text' 
          className={getClass('username')} 
          onChange={e => handleChange(e)}
          placeholder='Username'
        />
        <label>Atleast 8 characters w/ number, upper & lowercase letter and special character.</label>
        <input
          value={fields['password'].value} 
          name='password' 
          type='password' 
          className={getClass('password')} 
          onChange={e => handleChange(e)}
          placeholder='Password'
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



