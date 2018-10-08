import './portfolionav.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Loading from './Loading';

const PortfolioNav = ({portfolioTypes, setPortfolioType}) => {
  if(!portfolioTypes.length)
    return (<Loading />);

  return (
    <ul className="portfolioNav">
    {portfolioTypes.map(type => (
      <li key={type}>
        <Button 
          handleClick={() => setPortfolioType({type})}
          label={type}
        />
      </li>
    ))}
    </ul>
  );
};

PortfolioNav.propTypes = {
  portfolioTypes: PropTypes.array.isRequired,
  setPortfolioType: PropTypes.func.isRequired
};

export default PortfolioNav;
