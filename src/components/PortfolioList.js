import './portfoliolist.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';

class PortfolioList extends Component {
  componentDidMount() {
    this.props.fetchPortfolio();
  }

  render() {
    const {
      portfolio,
      setPortfolioId
    } = this.props;

    if(!portfolio) 
      return(<p>...loading</p>);
    
    return (
      <ul className="portfolioList">
        {Object.keys(portfolio).map(id => (
          <PortfolioItem
            key={id}
            {...portfolio[id]}
            handleClick={() => setPortfolioId(id)}
          />
        ))}
      </ul>
    );
  }
}

PortfolioList.propTypes = {
  fetchPortfolio: PropTypes.func.isRequired,
  setPortfolioId: PropTypes.func.isRequired,
  portfolio: PropTypes.object.isRequired
};

export default PortfolioList;
