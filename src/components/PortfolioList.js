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
      items,
      fetching,
      error,
      setPortfolioId
    } = this.props;

    if(fetching) 
      return(<p>...loading</p>);

    if(error)
      return(<p>{error}</p>);
    
    return (
      <ul className="portfolioList">
        {Object.keys(items).map(id => (
          <PortfolioItem
            key={id}
            {...items[id]}
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
  items: PropTypes.object.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.number
};

export default PortfolioList;
