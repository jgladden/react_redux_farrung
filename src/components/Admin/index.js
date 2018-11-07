import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import NotAuthorized from 'components/NotAuthorized';
import NavContainer from 'containers/Admin/NavContainer';
import ListContainer from 'containers/Admin/ListContainer';
import Add from 'components/Admin/Add';
import Loading from 'components/Loading';
import PageNotFound from 'components/PageNotFound';

const Admin = ({urlParts, isAuthenticated}) => {

  if(urlParts.length === 0)
    return(<Loading />);

  let display = '';
  if(isAuthenticated === true) {
    let SubPage = '';
    switch (urlParts[1]) {
    case 'add':
      SubPage = Add;
      break;
    default: 
      SubPage = ListContainer;
    }
    display = (
      <article id='admin'>
        <NavContainer />
        <SubPage />
      </article>
    );
  } else {
    display = <NotAuthorized />;
  } 

  return(display);
};

Admin.propTypes = {
  urlParts: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool
};

export default Admin;



