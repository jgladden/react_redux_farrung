import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/';
import Error from '../Error/';
import Button from '../Button/';

const authObj = {
  username:'james', 
  password:'password'
};

const Auth = props => {
  const {
    auth: {
      posting,
      error,
      isAuthenticated
    }, 
    submitLogin, 
    submitLogout, 
    toggleLoginDisplay, 
    displayLogin, 
    handleChange, 
    fields
  } = props; 

  const getClass = name => (
    fields[name].errors && fields[name].errors.length ? 'inValid' : ''
  );

  //console.log(fields);

  return(
    <div className='login'>
    {isAuthenticated === true ? (
      <p
        className='login__link'
        onClick={() => submitLogout()}
      >
        Sign Out
      </p>
    ) : (
      <p 
        className='login__link'
        onClick={() => toggleLoginDisplay()}
      >
        Sign In
      </p>
    )}
      <div className={`loginForm ${displayLogin ? 'display' : ''}`}>
        <p className='loginForm__heading'>USER LOGIN</p>
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
    </div>
  );
};

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  submitLogout: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired
};

export default Auth;



