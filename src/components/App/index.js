import React from 'react';
import PropTypes from 'prop-types';
import Admin from '../Admin';
import Website from '../Website';
import Loading from '../Loading';
import PageNotFound from '../PageNotFound';

const App = ({primarySection}) => {
  switch(primarySection) {
    case 'portfolio': 
      return(<Website/>)
    case 'admin':
      return(<Admin/>);
    case undefined:
      return(<Loading/>);
    default:
      return(<PageNotFound/>);
  }
};

Admin.propTypes = {
  primarySection: PropTypes.string
};

export default App;



