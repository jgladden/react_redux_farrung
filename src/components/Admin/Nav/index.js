import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import SignInContainer from 'containers/SignInContainer';

const Nav = ({setSection, section}) => {
  return (
    <div id='adminNav'>
      <ul id='adminNav__primary'>
        <li
          onClick={() => setSection({primary: 'admin', secondary: 'list'})}
          className={'list' === section.secondary ? 'isSelected' : ''}
        >
        List Portfolio Items
        </li>
        <li
          onClick={() => setSection({primary: 'admin', secondary: 'add'})}
          className={'add' === section.secondary ? 'isSelected' : ''}
        >
        Add Portfolio Item 
        </li>
      </ul>
      <div id='adminNav__login'>
        <SignInContainer />
      </div>
    </div>
  );
};

Nav.propTypes = {
  setSection: PropTypes.func.isRequired,
  section: PropTypes.shape({
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string,
    tertiary: PropTypes.string
  }).isRequired
};

export default Nav;

