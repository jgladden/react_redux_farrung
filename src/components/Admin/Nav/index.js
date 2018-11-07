import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import SignInContainer from 'containers/SignInContainer';

const Nav = ({setRoute, urlParts}) => {
  return (
    <div id='adminNav'>
      <ul id='adminNav__primary'>
        <li
          onClick={() => setRoute('/admin/list')}
          className={'list' === urlParts[1] ? 'isSelected' : ''}
        >
        List Portfolio Items
        </li>
        <li
          onClick={() => setRoute('/admin/add')}
          className={'add' === urlParts[1] ? 'isSelected' : ''}
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
  setRoute: PropTypes.func.isRequired,
  urlParts: PropTypes.array.isRequired
};

export default Nav;

