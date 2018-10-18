import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/';
import Error from '../Error/';
import Button from '../Button/';

const authObj = {
  username:'james', 
  password:'password'
};

const Auth = ({auth, submitLogin, submitLogout, handleChange}) => { 
  const {
    posting,
    error,
    isAuthenticated
  } = auth;

  if(isAuthenticated) {
    return(
      <Button
        handleClick={() => submitLogout()}
        label='Log Out'
      />
    );
  }

  return(
    <React.Fragment>
      {posting &&
        <p>Sending</p>
      }
      {error &&
        <Error error={error} />
      }
      {isAuthenticated === false &&
        <p>User not found.</p>
      }
      <form onSubmit={e => submitLogin(e)}>
        <input name='username' type='text' onChange={e => handleChange(e)}/>
        <input name='password' type='password' onChange={e => handleChange(e)}/>
        <Button 
          handleClick={e => submitLogin(e)} 
          label='Submit Login' 
        />
      </form>
    </React.Fragment>
  );
};

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  submitLogout: PropTypes.func.isRequired,
  submitLogin: PropTypes.func.isRequired
};

export default Auth;



