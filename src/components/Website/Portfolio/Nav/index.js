import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/Loading';

const Nav = ({portfolioTypes, setRoute}) => {
  if(!portfolioTypes.length)
    return (<Loading />);

  return (
    <ul id="portfolioNav">
      {portfolioTypes.map(type => (
        <li 
          key={type}
          onClick={() => setRoute(`/portfolio/${type}`)}
        >
          {type.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

Nav.propTypes = {
  portfolioTypes: PropTypes.array.isRequired,
  setRoute: PropTypes.func.isRequired
};

export default Nav;
