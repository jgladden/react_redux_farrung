import './styles.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Loading from '../Loading';

const PortfolioNav = ({portfolioTypes, setSection}) => {
  if(!portfolioTypes.length)
    return (<Loading />);

  return (
    <ul className="portfolioNav">
      {portfolioTypes.map(type => (
        <li key={type}>
          <Button 
            handleClick={() => setSection({primary: 'portfolio', secondary: type})}
            label={type}
          />
        </li>
      ))}
    </ul>
  );
};

PortfolioNav.propTypes = {
  portfolioTypes: PropTypes.array.isRequired,
  setSection: PropTypes.func.isRequired
};

export default PortfolioNav;
