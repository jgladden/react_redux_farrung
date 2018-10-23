import React from 'react';
import PropTypes from 'prop-types';
import AdminContainer from '../../containers/AdminContainer';
import Website from '../Website';
import Loading from '../Loading';
import PageNotFound from '../PageNotFound';

const App = ({primarySection}) => {
  switch(primarySection) {
  case 'portfolio': 
    return(<Website />);
  case 'admin':
    return(<AdminContainer />);
  case undefined:
    return(<Loading />);
  default:
    return(<PageNotFound />);
  }
};

App.propTypes = {
  primarySection: PropTypes.string.isRequired
};

export default App;



