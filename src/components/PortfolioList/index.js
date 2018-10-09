import './styles.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from '../PortfolioItem';
import Loading from '../Loading';
import Error from '../Error';

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
      return (<Loading />);

    if(error)
      return (<Error error={error} />);
    
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
