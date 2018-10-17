import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading/';
import Error from '../Error/';
import Button from '../Button/';

const authObj = {
  username:'james', 
  password:'password'
};

const Auth = ({auth, submitAuth}) => { 
  const {
    posting,
    error,
    isAuthenticated
  } = auth;

  return(
    <React.Fragment>
      {posting &&
        <p>Sending</p>
      }
      {error &&
        <Error error={error} />
      }
      {isAuthenticated === 'false' &&
        <p>Invalid login.</p>
      }
      <Button 
        handleClick={() => submitAuth(authObj)} 
        label='Submit Login' 
      />
    </React.Fragment>
  );
};

Auth.propTypes = {
  auth: PropTypes.object.isRequired,
  submitAuth: PropTypes.func.isRequired
};

export default Auth;



