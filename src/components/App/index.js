import React from 'react';
import PropTypes from 'prop-types';
import AdminContainer from 'containers/Admin/AdminContainer';
import Website from 'components/Website';
import Loading from 'components/Loading';
import PageNotFound from 'components/PageNotFound';

const App = ({section}) => {
  switch(section.primary) {
  case 'portfolio': 
    return(
      <Website 
        {...section}
      />
    );
  case 'admin':
    return(<AdminContainer />);
  case undefined:
    return(<Loading />);
  default:
    return(<PageNotFound />);
  }
};

App.propTypes = {
  section: PropTypes.shape({
    primary: PropTypes.string,
    secondary: PropTypes.string,
    tertiary: PropTypes.string
  }).isRequired
};

export default App;



