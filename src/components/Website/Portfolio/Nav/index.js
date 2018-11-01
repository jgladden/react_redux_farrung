import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import Loading from 'components/Loading';

const Nav = ({portfolioTypes, setSection}) => {
  if(!portfolioTypes.length)
    return (<Loading />);

  return (
    <ul id="portfolioNav">
      {portfolioTypes.map(type => (
        <li 
          key={type}
          onClick={() => setSection({primary: 'portfolio', secondary: type})}
        >
        {type.toUpperCase()}
        </li>
      ))}
    </ul>
  );
};

Nav.propTypes = {
  portfolioTypes: PropTypes.array.isRequired,
  setSection: PropTypes.func.isRequired
};

export default Nav;
