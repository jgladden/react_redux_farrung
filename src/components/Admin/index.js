import React from 'react';
import Loading from '../Loading/';
import Error from '../Error/';

const Admin = ({auth, submitAuthRequest}) => { 
  const {
    fetching,
    error,
    isAuthenticated
  } = auth;

  if(fetching)
    return (<Loading />);

  if(error) 
    return(<Error error={error} />);

  return(
    <React.Fragment>
      <p onClick={() => submitAuthRequest({username:'james', password:'password'})}>Admin Nav</p>
      <p>Admin Body</p>
    </React.Fragment>
  );
};

export default Admin;



